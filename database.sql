
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);




CREATE TABLE "book" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"summary" varchar(9550),
	"image_url" varchar(10000),
	"user_password" varchar(255) NOT NULL UNIQUE,
	"rating" integer NOT NULL,
	CONSTRAINT "book_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "book" ADD CONSTRAINT "book_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");