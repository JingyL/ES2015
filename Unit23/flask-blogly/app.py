"""Blogly application."""

from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def list_user():
    """Shows list of all users in db"""
    users = User.query.all()
    return render_template('list.html', users=users)

@app.route('/add')
def add_user_page():
    """Shows add user form"""
    return render_template('add.html')


@app.route('/add-user', methods=["POST"])
def add_user():
    """Submit new user data"""
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    image_url = request.form["image_url"]
    new_user  = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()
    users = User.query.all()
    return render_template('list.html', users=users)

@app.route("/<int:user_id>")
def show_user(user_id):
    """Show details about user"""
    each_user = User.query.get_or_404(user_id)
    user_posts = Post.query.filter_by(user_id = user_id)
    return render_template("details.html", user=each_user, posts = user_posts)

@app.route("/<int:user_id>/edit")
def edit_page(user_id):
    """Edit user"""
    each_user = User.query.get_or_404(user_id)
    return render_template("edit.html", user=each_user)

@app.route("/<int:user_id>/edited", methods=["POST"])
def finish_editing(user_id):
    """Finish edit or cancel edit"""
    curr_user = User.query.get_or_404(user_id)
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    image_url = request.form["image_url"]
    curr_user.first_name=first_name
    curr_user.last_name=last_name
    curr_user.image_url=image_url
    db.session.add(curr_user)
    db.session.commit()
    return redirect(f"/{user_id}")
    # render_template("details.html", user=curr_user)  


@app.route("/posts/<int:post_id>")
def show_post(post_id):
    """Show post destails"""
    post = Post.query.get_or_404(post_id)
    return render_template("postdetails.html", post = post)

@app.route('/<int:user_id>/addpost')
def show_add_post_form(user_id):
    """Show add post form"""
    each_user = User.query.get_or_404(user_id)
    return render_template("addpost.html", user=each_user)

@app.route('/<int:user_id>/addpost/added', methods=["POST"])
def add_post(user_id):
    """Submit new user data"""
    title = request.form["title"]
    content = request.form["content"]
    new_post = Post(title=title, content=content, user_id=user_id)
    db.session.add(new_post)
    db.session.commit()
    return redirect(f"/{user_id}")


@app.route("/posts/<int:post_id>/edit")
def edit_post(post_id):
    """Edit post"""
    post = Post.query.get_or_404(post_id)
    return render_template("postedit.html", post=post)


@app.route("/posts/<int:post_id>/edited", methods=["POST"])
def finish_editing_post(post_id):
    """Finish edit or cancel edit"""
    curr_post = Post.query.get_or_404(post_id)
    title = request.form["title"]
    content = request.form["content"]
    curr_post.title=title
    curr_post.content=content
    db.session.add(curr_post)
    db.session.commit()
    return redirect(f"/posts/{post_id}")


