DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(30) NOT NULL,
  album VARCHAR(30) NOT NULL,
  genre VARCHAR(30),
  PRIMARY KEY (id)
);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

INSERT INTO songs (title, artist, album, genre)
VALUES ("Search My Heaven", "Aleesha Rome", "Aleesha Rome", "Pop"), ("Blow up the Pokies", "The Whitlams", "Love this City", "Alternative"), ("Crash and Burn", "Taxiride", "Imaginate", "Alternative"), ("C'est La Vie", "B*Witched", "B*Witched", "Pop"),("Follow You Down", "Gin Blossoms", "Congratulations, I'm Sorry", "Alternative"), ("Save Tonight", "Eagle Eye Cherry", "Desireless", "Alternative"), ("Kids in America", "Kim Wilde", "Kim Wilde", "Pop");
