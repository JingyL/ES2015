"""Seed file to make sample data for db."""

from models import Pet, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

pet1 = Pet(name = "Lucy", species = "dog", photo_url = "https://pet-uploads.adoptapet.com/4/6/5/210008828.jpg", age = "1", notes = "Healthy", available = True)
pet2 = Pet(name = "Ted", species = "cat", photo_url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F09%2F07%2Fscience%2Fcat-stripes-genetics.html&psig=AOvVaw2Dnk5kS0lxIe6hxRnBw2zW&ust=1638472953302000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiejMWpw_QCFQAAAAAdAAAAABAD", age = "2", notes = "Healthy", available = True)
pet3 = Pet(name = "Snow", species = "dog", photo_url = "https://yourdogadvisor.com/wp-content/uploads/2021/03/1-a-Swiss-Shepherd-in-grass-768x1024.webp", age = "1", notes = "Healthy", available = True)
pet4 = Pet(name = "Boba", species = "bird", photo_url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSongbird&psig=AOvVaw3rnsDpkoVacPKF944oJynh&ust=1638473016699000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDH2uupw_QCFQAAAAAdAAAAABAD", age = "4", notes = "Healthy", available = False)


db.session.add_all([pet1, pet2, pet3, pet4])

db.session.commit()





