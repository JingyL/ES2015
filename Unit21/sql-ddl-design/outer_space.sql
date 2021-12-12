-- from the terminal run:
-- psql < outer_space.sql

-- DROP DATABASE IF EXISTS outer_space;

-- CREATE DATABASE outer_space;

-- \c outer_space

-- CREATE TABLE planets
-- (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   orbital_period_in_years FLOAT NOT NULL,
--   orbits_around TEXT NOT NULL,
--   galaxy TEXT NOT NULL,
--   moons TEXT[]
-- );

-- INSERT INTO planets
--   (name, orbital_period_in_years, orbits_around, galaxy, moons)
-- VALUES
--   ('Earth', 1.00, 'The Sun', 'Milky Way', '{"The Moon"}'),
--   ('Mars', 1.88, 'The Sun', 'Milky Way', '{"Phobos", "Deimos"}'),
--   ('Venus', 0.62, 'The Sun', 'Milky Way', '{}'),
--   ('Neptune', 164.8, 'The Sun', 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
--   ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way', '{}'),
--   ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way', '{}');




-- -------------------------------------------------------------------------------
-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space


CREATE TABLE orbits_around
( 
  id SERIAL PRIMARY KEY, 
  orbits_around TEXT NOT NULL
);

CREATE TABLE galaxy
( 
  id SERIAL PRIMARY KEY, 
  galaxy TEXT NOT NULL
);

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around_id INTEGER REFERENCES orbits_around,
  galaxy_id INTEGER REFERENCES galaxy
);

CREATE TABLE moons
( 
  id SERIAL PRIMARY KEY, 
  planets_id INTEGER REFERENCES planets,
  moons TEXT[]
);


-- orbits_around ID, name

INSERT INTO orbits_around
  (orbits_around)
VALUES
  ('The Sun'), ('Proxima Centauri'),('Gliese 876');

-- galaxy ID, name
INSERT INTO galaxy
  (galaxy)
VALUES
  ('Milky Way');

-- planets' ID, name, orbital_period_in_years  ({} do not know how to solve this situation)

INSERT INTO planets
  (name, orbital_period_in_years, orbits_around_id, galaxy_id)
VALUES
  ('Earth', 1.00, 1, 1),
  ('Mars', 1.88, 1, 1),
  ('Venus', 0.62, 1, 1),
  ('Neptune', 164.8, 1, 1),
  ('Proxima Centauri b', 0.03, 2, 1),
  ('Gliese 876 b', 0.23, 3, 1);


-- PlanetID, Moons



INSERT INTO moons
  (planets_id, moons)
VALUES

(1, '{"The Moon"}'),
(2, '{"Phobos", "Deimos"}'),
(3, '{}'),
(4, '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
(5, '{}'),
(6, '{}');




-- INSERT INTO moons
--   (planets_id, moons)
-- VALUES
--   (1, 'The Moon'), 
--   (2, 'Phobos'), (2, 'Deimos'),
-- --   Don't know what is it
--   (3, '{}')
--   (4, 'Naiad'), (4, 'Thalassa'),(4, 'Despina'), (4, 'Galatea'), (4, 'Larissa'), (4, 'S/2004 N 1'),
--   (4, 'Proteus'), (4, 'Triton'),(4, 'Nereid'), (4, 'Halimede'), (4, 'Sao'), (4, 'Laomedeia'),
--   (4, 'Psamathe'), (4, 'Neso'),
--   (5, 'Proxima Centauri'), (5, 'Milky Way'),(5, '{}'),
--   (6, 'Gliese 876'), (6, 'Milky Way');
  
--   ,(6, '{}')