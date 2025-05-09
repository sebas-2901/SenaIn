<?php
header('Content-Type: application/json');
require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (!$data->usuario || !$data->password) {
    echo json_encode(['error' => 'Campos requeridos']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE usuario = ?");
$stmt->execute([$data->usuario]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($data->password, $user['password'])) {
    echo json_encode([
        'success' => true,
        'usuario' => $user['usuario'],
        'rol' => $user['rol']
        // Aquí puedes usar JWT real si quieres
    ]);
} else {
    echo json_encode(['error' => 'Credenciales inválidas']);
}
?>
