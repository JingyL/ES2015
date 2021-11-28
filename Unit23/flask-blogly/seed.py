"""Seed file to make sample data for pets db."""

from models import User, Post, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()

# Add users
James = User(first_name='Bond', last_name="James", image_url="https://upload.wikimedia.org/wikipedia/commons/7/7f/Daniel_Craig_-_Film_Premiere_%22Spectre%22_007_-_on_the_Red_Carpet_in_Berlin_%2822387409720%29_%28cropped%29.jpg")
Kayyu = User(first_name='Akayya', last_name="Kayyu", image_url="")
Tina = User(first_name='Tina', last_name="Triii", image_url="")
Jake = User(first_name='Jake', last_name="Liiie", image_url="")

# Add new objects to session, so they'll persist
db.session.add(James)
db.session.add(Kayyu)
db.session.add(Tina)
db.session.add(Jake)

# Commit--otherwise, this never gets saved!
db.session.commit()

james.image_url = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Daniel_Craig_-_Film_Premiere_%22Spectre%22_007_-_on_the_Red_Carpet_in_Berlin_%2822387409720%29_%28cropped%29.jpg"



JamesPost = Post(title='Welcome',content='Hi, I am James.',user_id=1)
KayyuPost = Post(title='Foods',content='Hi, I love chocolate.',user_id=2)
db.session.add(JamesPost)
db.session.add(KayyuPost)
db.session.commit()