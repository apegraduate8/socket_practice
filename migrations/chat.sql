

DROP DATABASE IF EXISTS my_chat;
DROP TABLE IF EXISTS messages;

CREATE DATABASE my_chat;

\c my_chat;

CREATE TABLE messages(
    id SERIAL PRIMARY KEY,
    userID VARCHAR (50) NOT NULL,
    message VARCHAR(255) NOT NULL
);

INSERT INTO messages 
(userID, message) 
VALUES
('Anthony', 'yo whats good');