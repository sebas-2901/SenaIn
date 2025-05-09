<?php
require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));
$passwordHash = password_hash($data->password, PASSWORD_BCRYPT);

$stmt = $pdo->prepare("INSERT INTO usuarios (usuario, password, rol) VALUES (?, ?, ?)");
$stmt->execute([$data->usuario, $passwordHash, $data->rol]);

echo json_encode(['success' => true]);
?>
