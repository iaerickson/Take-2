
--actors table used to organize our list of actors csv
--commented out values are tables are columns the original csv has that we do not need

--new_cast_list table for user's recasting of a movie
--keeps track of movie, user, actors they are recasting, and how many thumbs up this recasting gets 

DROP DATABASE IF EXISTS reCastdb;
CREATE database reCastdb;

USE reCastdb;



CREATE TABLE actors (
    position INT NOT NULL,
    -- const VARCHAR(9) NOT NULL,
    -- created DATE NOT NULL,
    -- modified DATE NOT NULL,
    -- description VARCHAR(2),
    name VARCHAR(40),
    -- known_for VARCHAR(80),
    birthdate DATE NOT NULL,
    PRIMARY KEY (position)
);




CREATE TABLE new_cast_list (
  id INT NOT NULL AUTO_INCREMENT,
  movie VARCHAR(80) NOT NULL,
  user VARCHAR(55) NOT NULL,
  actor_role1 VARCHAR(40) NOT NULL,
  actor_role2 VARCHAR(40),
  actor_role3 VARCHAR(40),
  actor_role4 VARCHAR(40),
  thumbs_up INT,
--   thumbs_down INT,
  PRIMARY KEY (id)
);