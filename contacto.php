<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Composer:
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $mail = new PHPMailer(true);   

    // Logs
    
    $fecha = date('Y-m-d H:i:s');
    $logFile = 'logs/email_log.txt';
    $log = "[{$fecha}] Nombre: {$nombre}, Email: {$email}" . PHP_EOL;

    try {
        // Config SMTP
        $mail->isSMTP();
        $mail->Host       = 'c2830355.ferozo.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contacto@nisega.com'; // Tu correo
        $mail->Password = 'CONTRASENA';
        $mail->Port       = 465;
        $mail->SMTPSecure = 'ssl'; // Agregado

        //$mail->SMTPDebug = 2; // Agregado para debug
        //$mail->Debugoutput = 'html'; // Agregado para debug

        // Remitente y destinatarios
        $mail->setFrom('contacto@nisega.com', 'Contacto Nisega'); // Remitente
        $mail->addAddress('contacto@nisega.com', 'Contacto Nisega'); // Destino
        $mail->addReplyTo($email, $nombre); // Para responder al remitente

        // Contenido
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde el formulario de contacto';
        $mail->Body    = "<b>Nombre:</b> $nombre<br><b>Email:</b> $email<br><b>Mensaje:</b> $mensaje";
        $mail->AltBody = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

        $mail->send();

        //log
        file_put_contents($logFile, $log, FILE_APPEND);

        header("Location: /contacto?envio=Exito&nombre$nombre#envio");
        // echo "✅ Tu mensaje fue enviado con éxito.";
        exit;

    } catch (Exception $e) {
        // echo "❌ Error al enviar: {$mail->ErrorInfo}";
        $errorLog = "[{$fecha}] ERROR: {$mail->ErrorInfo}, Datos: Nombre=$nombre, Email=$email" . PHP_EOL;
        file_put_contents($logFile, $errorLog, FILE_APPEND);

        header("Location: /contacto?envio=Error&nombre$nombre#envio");
        exit;
    }
} else {
    // echo "❌ Acceso no permitido.";
    $errorLog = "[{$fecha}] ERROR: Acceso no Permitido, Datos: Nombre={$nombre}, Email={$email}" . PHP_EOL;
    file_put_contents($logFile, $errorLog, FILE_APPEND);
    header("Location: /contacto?envio=Error&nombre$nombre#envio");
    exit;
}

?>
