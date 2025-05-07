-- database.sql
CREATE DATABASE IF NOT EXISTS sistema;
USE sistema;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'instructor', 'coordinador') NOT NULL
);

-- Contraseñas encriptadas con bcrypt (costo 10)
INSERT INTO usuarios (usuario, password, rol) VALUES
('admin', '$2a$10$LJovY1piExEGgWkTujmKnOTMVZzVpe39UKE8j6.1u3qAW7Yd4S5aC', 'admin'),
('instructor', '$2a$10$ubKRLW2oBqDhPKDdZnCoOuwqUlBPqBl1PfV8I1blFJ6ktnMN0DsQ2', 'instructor'),
('coordinador', '$2a$10$DoJPnUJ8RL2y02q7Z/z7zOMDVNQeNk0c8psx7mkSxd9Hgs4r0bV7e', 'coordinador');
--USERS: admin = admin123, instructor = instructor123, coordinador = coordinador123--