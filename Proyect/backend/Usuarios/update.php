<?php
require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));

$stmt = $pdo->prepare("UPDATE usuarios SET usuario = ?, rol = ? WHERE id = ?");
$stmt->execute([$data->usuario, $data->rol, $data->id]);

echo json_encode(['success' => true]);
?>
