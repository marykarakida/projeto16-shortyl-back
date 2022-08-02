CREATE DATABASE shortly;

CREATE TABLE users(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" text NOT NULL,
    "email" text UNIQUE NOT NULL,
    "password" text NOT NULL,
    "createdAt" timestamp DEFAULT NOW()
);

CREATE TABLE links(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "userId" int,
    "shortUrl" text NOT NULL,
    "url" text NOT NULL,
    "viewCount" int NOT NULL DEFAULT 0,
    "createdAt" timestamp DEFAULT NOW(),
    UNIQUE ("userId", "url"),
    FOREIGN KEY("userId")
        REFERENCES users(id)
        ON DELETE CASCADE
);