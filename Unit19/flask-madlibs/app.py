from flask import Flask, request, render_template
from stories import story
from story2 import stories
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)
app.config['SECRET_KEY'] = "make stories"

debug = DebugToolbarExtension(app)


@app.route('/homepage')
def show_homepage():
    prompts = story.prompts
    return render_template('homepage.html', prompts= prompts)

@app.route('/story')
def get_story():
    text = story.generate(request.args)
    return render_template('story.html', text=text )

@app.route('/selectStory')
def select_story():
    return render_template('selectStory.html', stories = stories.values())

@app.route('/questions')
def show_questions():
    story_id = request.args["stories"]
    story = stories[story_id]
    prompts = story.prompts
    return render_template('questions.html', prompts= prompts, stories=story_id)



@app.route('/story2')
def show_story2():
    story_id = request.args["stories"]
    story = stories[story_id]
    text = story.generate(request.args)
    return render_template('story2.html', title=story.title, text=text )
