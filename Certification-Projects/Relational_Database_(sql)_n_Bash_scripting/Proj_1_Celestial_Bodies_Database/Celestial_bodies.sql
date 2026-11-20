-- 1. Create the database (Run this if you haven't already)
-- CREATE DATABASE universe;
-- \c universe

-- Drop existing tables if re-running to ensure a clean slate
DROP TABLE IF EXISTS moon;
DROP TABLE IF EXISTS planet;
DROP TABLE IF EXISTS star;
DROP TABLE IF EXISTS galaxy;
DROP TABLE IF EXISTS galaxy_types;

-- 2. Create the 5 required tables

-- Table 1: Extra/Fifth Table (galaxy_types)
CREATE TABLE galaxy_types (
    galaxy_types_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    has_active_nucleus BOOLEAN NOT NULL
);

-- Table 2: galaxy
CREATE TABLE galaxy (
    galaxy_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    galaxy_types_id INT REFERENCES galaxy_types(galaxy_types_id),
    distance_from_earth NUMERIC(12, 2) NOT NULL,
    age_in_millions_of_years INT NOT NULL,
    has_life BOOLEAN NOT NULL
);

-- Table 3: star
CREATE TABLE star (
    star_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    galaxy_id INT NOT NULL REFERENCES galaxy(galaxy_id),
    spectral_type VARCHAR(10) NOT NULL,
    surface_temperature_k INT NOT NULL,
    is_spherical BOOLEAN NOT NULL
);

-- Table 4: planet
CREATE TABLE planet (
    planet_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    star_id INT NOT NULL REFERENCES star(star_id),
    has_life BOOLEAN NOT NULL,
    distance_from_star NUMERIC(10, 2) NOT NULL,
    moons_count INT NOT NULL
);

-- Table 5: moon
CREATE TABLE moon (
    moon_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    planet_id INT NOT NULL REFERENCES planet(planet_id),
    radius_km INT NOT NULL,
    is_spherical BOOLEAN NOT NULL,
    discovery_year INT
);

-- 3. Insert Data (Meeting minimum row count requirements)

-- Insert into galaxy_types (At least 3 rows)
INSERT INTO galaxy_types (name, description, has_active_nucleus) VALUES
('Spiral', 'Disk-shaped with spiral arms', false),
('Elliptical', 'Smooth, featureless, oval-shaped', false),
('Seyfert', 'A type of galaxy with an extremely bright active nucleus', true);

-- Insert into galaxy (At least 6 rows)
INSERT INTO galaxy (name, galaxy_types_id, distance_from_earth, age_in_millions_of_years, has_life) VALUES
('Milky Way', 1, 0.00, 13600, true),
('Andromeda', 1, 2.53, 10000, false),
('Triangulum', 1, 2.73, 12000, false),
('Messier 87', 2, 53.00, 13000, false),
('Centaurus A', 3, 11.00, 12500, false),
('Sombrero Galaxy', 1, 28.00, 13200, false);

-- Insert into star (At least 6 rows)
INSERT INTO star (name, galaxy_id, spectral_type, surface_temperature_k, is_spherical) VALUES
('Sun', 1, 'G2V', 5778, true),
('Sirius', 1, 'A1V', 9940, true),
('Alpha Centauri A', 1, 'G2V', 5790, true),
('Alpheratz', 2, 'B8IV', 13800, true),
('Mirach', 2, 'M0III', 3800, true),
('Rigel', 1, 'B8Ia', 12100, true);

-- Insert into planet (At least 12 rows)
INSERT INTO planet (name, star_id, has_life, distance_from_star, moons_count) VALUES
('Mercury', 1, false, 0.39, 0),
('Venus', 1, false, 0.72, 0),
('Earth', 1, true, 1.00, 1),
('Mars', 1, false, 1.52, 2),
('Jupiter', 1, false, 5.20, 95),
('Saturn', 1, false, 9.58, 146),
('Uranus', 1, false, 19.22, 28),
('Neptune', 1, false, 30.05, 16),
('Sirius b Prime', 2, false, 8.60, 0),
('Rigel Alpha', 6, false, 860.00, 0),
('Mirach Prime', 5, false, 1.20, 1),
('Alpheratz Beta', 4, false, 2.50, 2);

-- Insert into moon (At least 20 rows)
INSERT INTO moon (name, planet_id, radius_km, is_spherical, discovery_year) VALUES
('Moon', 3, 1737, true, NULL),
('Phobos', 4, 11, false, 1877),
('Deimos', 4, 6, false, 1877),
('Io', 5, 1821, true, 1610),
('Europa', 5, 1560, true, 1610),
('Ganymede', 5, 2634, true, 1610),
('Callisto', 5, 2410, true, 1610),
('Mimas', 6, 198, true, 1789),
('Enceladus', 6, 252, true, 1789),
('Tethys', 6, 531, true, 1684),
('Dione', 6, 561, true, 1684),
('Rhea', 6, 763, true, 1672),
('Titan', 6, 2574, true, 1655),
('Iapetus', 6, 734, true, 1671),
('Ariel', 7, 578, true, 1851),
('Umbriel', 7, 584, true, 1851),
('Titania', 7, 788, true, 1787),
('Oberon', 7, 761, true, 1787),
('Miranda', 7, 235, true, 1948),
('Triton', 8, 1353, true, 1846);