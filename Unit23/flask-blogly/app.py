"""Blogly application."""

from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, PostTag, Tag

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
    tags = Tag.query.all()
    print(tags)
    return render_template('list.html', users=users, tags=tags)

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



@app.route("/posts/<int:post_id>")
def show_post(post_id):
    """Show post destails"""
    post = Post.query.get_or_404(post_id)
    tags = post.all_tags
    return render_template("postdetails.html", post = post, tags = tags)

@app.route('/<int:user_id>/addpost')
def show_add_post_form(user_id):
    """Show add post form"""
    each_user = User.query.get_or_404(user_id)
    tags = Tag.query.all()
    return render_template("addpost.html", user=each_user, tags=tags)

@app.route('/<int:user_id>/addpost/added', methods=["POST"])
def add_post(user_id):
    """Submit new user data"""
    tag_ids = [int(num) for num in request.form.getlist("tags")]
    tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()
    new_post = Post(title=request.form['title'],
                    content=request.form['content'],
                    user_id=user_id,
                    all_tags=tags)

    db.session.add(new_post)
    db.session.commit()
    return redirect(f"/{user_id}")


@app.route("/posts/<int:post_id>/edit")
def edit_post(post_id):
    """Edit post"""
    post = Post.query.get_or_404(post_id)
    tags = Tag.query.all()
    return render_template("postedit.html", post=post, tags=tags)


@app.route("/posts/<int:post_id>/edited", methods=["POST"])
def finish_editing_post(post_id):
    """Finish edit or cancel edit"""
    curr_post = Post.query.get_or_404(post_id)
    title = request.form["title"]
    content = request.form["content"]
    tag_ids = [int(num) for num in request.form.getlist("tags")]
    tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()
    curr_post.title=title
    curr_post.content=content
    curr_post.all_tags=tags
    db.session.add(curr_post)
    db.session.commit()
    return redirect(f"/posts/{post_id}")

@app.route("/posts/<int:post_id>/delete")
def delete_post(post_id):
    """Delete post"""
    curr_post = Post.query.get_or_404(post_id)
    user_id = curr_post.user_id
    db.session.delete(curr_post)
    db.session.commit()
    return redirect(f"/{user_id}")

@app.route('/tags/addtags')
def show_add_tags():
    """Shows add tags form"""
    return render_template('addtags.html')

@app.route('/tags/addtags/added', methods=["POST"])
def add_tags():
    name = request.form["name"]
    new_tag = Tag(name=name)
    db.session.add(new_tag)
    db.session.commit()
    return redirect("/")

@app.route("/tags/<int:tag_id>")
def show_tags(tag_id):
    """show tags and posts"""
    tag = Tag.query.get_or_404(tag_id)
    print(tag)
    p = tag.all_posts
    print()
    return render_template("eachtag.html", tag=tag, posts=p)

@app.route("/tags/<int:tag_id>/edit")
def edit_curr_tag(tag_id):
    """show edit form"""
    tag = Tag.query.get_or_404(tag_id)
    return render_template("edit-tag.html", tag=tag)

@app.route("/tags/<int:tag_id>/edited", methods=["POST"])
def tag_edited(tag_id):
    """show edit form"""
    tag = Tag.query.get_or_404(tag_id)
    new_tag = request.form["name"]
    tag.name = new_tag
    db.session.add(tag)
    db.session.commit()
    return redirect(f"/tags/{tag_id}")


@app.route("/posts/tags/<int:tag_id>")
def redirect_to_tag_page(tag_id):
    """redirect to tags/tag.id"""
    return redirect(f"/tags/{tag_id}")

@app.route('/tags/<int:tag_id>/delete')
def tags_destroy(tag_id):
    """Handle form submission for deleting an existing tag"""
    tag = Tag.query.get_or_404(tag_id)
    db.session.delete(tag)
    db.session.commit()
    return redirect("/")



