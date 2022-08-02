CREATE DATABASE shortly;

CREATE TABLE users(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    "createdAt" timestamp DEFAULT NOW()
);

CREATE TABLE links(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "userId" int,
    "shortUrl" text NOT NULL,
    "url" text NOT NULL,
    "viewConut" int NOT NULL,
    "createdAt" timestamp DEFAULT NOW(),
    FOREIGN KEY("userId")
        REFERENCES users(id)
        ON DELETE CASCADE
);