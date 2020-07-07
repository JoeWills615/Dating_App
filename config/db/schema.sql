### Schema
DROP DATABASE IF EXISTS dates_db;
CREATE DATABASE dates_db;
USE dates_db;

CREATE TABLE datess
(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    -- TIME_FORMAT(start_at, '%h:%i %p') start_at,
	location VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);