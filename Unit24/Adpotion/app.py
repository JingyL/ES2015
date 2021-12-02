from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db,  connect_db, Pet
from forms import AddPet

app = Flask(__name__)
app.debug = True

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/')
def home_page():
    """Render home page"""
    pets = Pet.query.all()
    return render_template("homepage.html", pets=pets)


@app.route("/add-pet", methods=["GET", "POST"])
def add_pet():
    """Pet add form; handle adding."""

    form = AddPet()

    if form.validate_on_submit():
        name = form.name.data
        species = form.species.data
        photo_url = form.photo_url.data
        age = form.age.data
        notes = form.notes.data
        available = form.available.data
        new_pet = Pet(name=name, species=species, photo_url=photo_url,
                      age=age, notes=notes, available=available)
        db.session.add(new_pet)
        db.session.commit()
        flash(f"Added {species} : {name} ")
        return redirect("/")

    else:
        return render_template(
            "add-pet.html", form=form)

@app.route('/<int:pets_id>')
def show_pet(pets_id):
    """Render pet details page"""
    pet = Pet.query.get(pets_id)
    return render_template("show-pet.html", pet=pet)


@app.route('/<int:pets_id>/edit', methods=["GET", "POST"])
def edit_pet(pets_id):
    """Edit pet form"""
    pet = Pet.query.get(pets_id)
    form = AddPet(obj=pet)
    if form.validate_on_submit():
        pet.name = form.name.data
        pet.species = form.species.data
        pet.photo_url = form.photo_url.data
        pet.age = form.age.data
        pet.notes = form.notes.data
        pet.available = form.available.data
        db.session.commit()
        return redirect(f"/{pets_id}")
    else:
        return render_template(
            "edit-pet.html", form=form)

