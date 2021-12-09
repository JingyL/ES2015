from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired, Length


class UserForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired(), Length(max=20)])
    password = PasswordField("Password", validators=[InputRequired()])
    email = StringField("Email", validators=[InputRequired(), Length(max=120)])
    first_name = StringField("First_name", validators=[InputRequired(), Length(max=30)])
    last_name = StringField("Last_name", validators=[InputRequired(), Length(max=30)])

class LoginForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired(), Length(max=20)])
    password = PasswordField("Password", validators=[InputRequired()])

class FeedbackForm(FlaskForm):
    """Add feedback form."""
    title = StringField("Title", validators=[InputRequired(), Length(max=100)])
    content = StringField( "Content", validators=[InputRequired()])
