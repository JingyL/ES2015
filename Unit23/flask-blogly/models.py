"""Models for Blogly."""
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

def connect_db(app):
    db.app = app  
    db.init_app(app)


# MODELS GO BELOW!
class User(db.Model):
    """A user has many posts"""
    __tablename__ = 'users' 

    def __repr__(self):
        p = self
        return f"<User id={p.id} fname={p.first_name} lname={p.last_name}  image_url={p.image_url}>"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    first_name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)

    last_name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)

    image_url = db.Column(db.String(10000))


class Post(db.Model):
    """Post information."""

    __tablename__ = "posts"
    id = db.Column(db.Integer, primary_key=True,
                   autoincrement=True)
    title = db.Column(db.Text, nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', backref='posts')

    all_tags = db.relationship(
        'Tag', secondary="posts_tags", backref="all_posts")

    def __repr__(self):
        return f"<{self.id} Posts {self.title} created at {self.created_at}>"

class PostTag(db.Model):
    """PostTag information."""
    __tablename__ = "posts_tags"
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id'), primary_key=True)
    tag_id = db.Column(db.Integer, db.ForeignKey(
        'tags.id'), primary_key=True)


class Tag(db.Model):
    """All tags"""

    __tablename__ = "tags"
    id = db.Column(db.Integer, primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text, nullable=False)