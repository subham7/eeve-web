create table state
(
  id    int auto_increment
    primary key,
  state varchar(100) not null
);

INSERT INTO eeve.state (id, state) VALUES (0, 'null');
INSERT INTO eeve.state (id, state) VALUES (1, 'Andhra Pradesh');
INSERT INTO eeve.state (id, state) VALUES (2, 'Bihar');
INSERT INTO eeve.state (id, state) VALUES (3, 'Jharkhand');
INSERT INTO eeve.state (id, state) VALUES (4, 'Odisha');
INSERT INTO eeve.state (id, state) VALUES (5, 'West Bengal');
INSERT INTO eeve.state (id, state) VALUES (6, 'Assam');
INSERT INTO eeve.state (id, state) VALUES (7, 'Chattisgarh');
INSERT INTO eeve.state (id, state) VALUES (8, 'Other');