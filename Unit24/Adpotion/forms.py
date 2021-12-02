"""Forms for our demo Flask app."""

from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField
from wtforms.validators import InputRequired, Optional, URL


class AddPet(FlaskForm):
    """Form for adding snacks."""

    name = StringField("name", validators=[
                       InputRequired(message="Name can't be blank")])
    species = StringField("species", validators=[
                       InputRequired(message="Species can't be blank")])
    photo_url = StringField("photo_url", validators=[
                       InputRequired(message="Url can't be blank"), URL()])
    age = FloatField("age", validators=[
                       InputRequired(message="Age can't be blank")]) 
    notes = StringField("notes", validators=[Optional()])
    available = BooleanField("available", validators=[
                       InputRequired(message="Available can't be blank")])


# class UserForm(FlaskForm):
#     """Form for adding/editing friend."""

#     name = StringField("Name",
#                        validators=[InputRequired()])
#     email = StringField("Email Address",
#                         validators=[Optional(), Email()])