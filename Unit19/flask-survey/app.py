from flask import Flask, request, render_template,  redirect, flash,  jsonify, session
from surveys import satisfaction_survey
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "surveytask"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)



@app.route('/')
def start_page():
     return render_template("start.html")

@app.route('/questions', methods=["POST"])
def questions_start():
    session['res'] = []
    response = session['res']
    number = len(response)
    return redirect(f"/questions/{number}")

@app.route("/questions/<int:number>")
def show_questions(number):
    response=session.get('res')
    questions = satisfaction_survey.questions
    if number != len(response):
        flash("invalid question")
        return redirect(f"/questions/{len(response)}")
    else:
        return render_template(
            "questions.html", number=number, 
            questions=questions, 
            q=questions[number].question,
            choices=questions[number].choices)
  
@app.route("/answer", methods=["POST"])
def show_next_questions():
    response=session['res']
    choice = request.form["answer"]
    response.append(choice)
    session['res']= response
    number = len(response)
    if len(response) < len(satisfaction_survey.questions):
        return redirect(f"/questions/{number}")
    else:
        return redirect ("/complete")


@app.route("/complete")
def complete():
    return render_template("complete.html")