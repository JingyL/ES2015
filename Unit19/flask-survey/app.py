from flask import Flask, request, render_template,  redirect, flash,  jsonify, session
from surveys import satisfaction_survey, surveys
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "surveytask"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


# Further Survey

@app.route('/')
def select_survey():
    # get all surveys information and show each's key(code) and value(questions)
    all_surveys=surveys.items()
    return render_template("start-f.html", surveys=all_surveys)

@app.route('/', methods=["POST"])
def start_page():
    #get informations of user selected survey and show title and instructions
    # storage user selected survey code
    code= request.form['surveytype']
    session['code'] = code
    title=surveys[code].title
    instruction=surveys[code].instructions  
    return render_template("start.html", code=code, title=title, instruction=instruction)

@app.route('/questions', methods=["POST"])
def questions_start():
    # redirect to each question page based on numbers and get users current response
    session['res'] = []
    response = session['res']
    # get questions number
    number = len(response)
    return redirect(f"/questions/{number}")

@app.route("/questions/<int:number>")
def show_questions(number):
    # show each questions's question and choice on the page
    response= session['res']
    code= session.get('code')
    questions = surveys[code].questions
    if number != len(response) and number < len(questions):
        flash("invalid question")
        return redirect(f"/questions/{len(response)}")
    else:
        return render_template(
            "questions.html", number = number, 
            questions = questions, 
            q = questions[number].question,
            choices = questions[number].choices)
  
@app.route("/answer", methods=["POST"])
def show_next_questions():
    # update user's response, redirect to next questions
    # if completed, then redirect to complete page
    code = session.get('code')
    question = surveys[code]
    response =session['res']
    choice = request.form["answer"]
    response.append(choice)
    session['res']= response
    number = len(response)
    if len(response) < len(question.questions):
        return redirect(f"/questions/{number}")
    else:
        return redirect ("/complete")


@app.route("/complete")
def complete():
    # show user's answers in each question
    code= session.get('code')
    question= surveys[code]
    response=session['res']
    length = range(len(response))
    return render_template("complete.html", answers = response, 
    q = question.questions, length = length)




# Basic Survey

# @app.route('/')
# def start_page():
#     title=satisfaction_survey.title
#     instruction=satisfaction_survey.instructions
#     return render_template("start.html", title=title, instruction=instruction)

# @app.route('/questions', methods=["POST"])
# def questions_start():
#     session['res'] = []
#     response = session['res']
#     number = len(response)
#     return redirect(f"/questions/{number}")

# @app.route("/questions/<int:number>")
# def show_questions(number):
#     response=session.get('res')
#     questions = satisfaction_survey.questions
#     if number != len(response):
#         flash("invalid question")
#         return redirect(f"/questions/{len(response)}")
#     else:
#         return render_template(
#             "questions.html", number=number, 
#             questions=questions, 
#             q=questions[number].question,
#             choices=questions[number].choices)
  
# @app.route("/answer", methods=["POST"])
# def show_next_questions():
#     response=session['res']
#     choice = request.form["answer"]
#     response.append(choice)
#     session['res']= response
#     number = len(response)
#     if len(response) < len(satisfaction_survey.questions):
#         return redirect(f"/questions/{number}")
#     else:
#         return redirect ("/complete")


# @app.route("/complete")
# def complete():
#     return render_template("complete.html")