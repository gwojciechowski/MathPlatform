DROP SEQUENCE IF EXISTS role_seq;
DROP SEQUENCE IF EXISTS person_seq;

DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS person;

CREATE TABLE person(
  person_id bigint NOT NULL,
  name VARCHAR(255),
  surname VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  auth_token VARCHAR(255)
);

ALTER TABLE ONLY person
ADD CONSTRAINT person_pk PRIMARY KEY (person_id);

ALTER TABLE ONLY person
ADD CONSTRAINT person_uk_1 UNIQUE (email);

CREATE SEQUENCE person_seq
START WITH 1
INCREMENT BY 1
NO MINVALUE
NO MAXVALUE
CACHE 1;

CREATE TABLE role
(
  role_id bigint NOT NULL,
  name VARCHAR(255) NOT NULL,
  person_id bigint
);

ALTER TABLE ONLY role
ADD CONSTRAINT role_pk PRIMARY KEY (role_id);

ALTER TABLE ONLY role
ADD CONSTRAINT role_fk_1 FOREIGN KEY (person_id) REFERENCES person(person_id);

CREATE SEQUENCE role_seq
START WITH 1
INCREMENT BY 1
NO MINVALUE
NO MAXVALUE
CACHE 1;

INSERT INTO person VALUES (nextval('user_seq'), 'Grzegorz', 'Wojciechowski', 'greg.wojciechowski@gmail.com', 'test', 'ACTIVE', '');
INSERT INTO role VALUES (nextval('role_seq'), 'ADMIN', '1');
