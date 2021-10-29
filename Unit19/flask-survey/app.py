from flask import Flask, request, render_template,  redirect, flash,  jsonify, session
from surveys import satisfaction_survey
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "surveytask"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

response=[]

@app.route('/')
def start_page():
     return render_template("start.html")

@app.route('/questions', methods="POST")
def questions_start():
    number = len(response)
    return redirect(f"/questions/{number}")

@app.route("/questions/<int:number>")
def show_questions(number):
    questions = satisfaction_survey.questions
    print(satisfaction_survey)
    return render_template(
        "questions.html", number=number, 
        questions=questions, 
        q=questions[number].question,
        choices=questions[number].choices)
  
@app.route("/answer", methods="POST")
def show_next_questions():
    choice = request.form["answer"]
    response.append(choice)
    number = len(response)
    if len(response) < satisfaction_survey.questions:
        return redirect(f"/questions/{number}")
    else:
        return redirect ("complete.html")


@app.route("/complete")
def complete():
    return render_template("complete.html")