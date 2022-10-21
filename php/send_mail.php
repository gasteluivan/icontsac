<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: index.html");
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$nombre = $_POST['form_name'];
$email = $_POST['form_email'];
$asunto = $_POST['asunto'];
$phone = $_POST['form_phone'];
$mensaje = $_POST['form_message'];


$body = <<<HTML
    <h1>Contacto desde la web - ICONTSAC</h1>
    <p>De: $nombre </p>
    <p>Correo: $email </p>
    <p>Contacto: $phone </p>
    <h2>Mensaje:</h2>
    $mensaje
HTML;

// $foto = $_FILES['foto']; //array assoc - $foto['tmp_name']; $foto['size'] - $foto['name']

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'server.unawebunamype.com';                                                            // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                                                           // Enable SMTP authentication
    $mail->Username   = '_mainaccount@icontsac.com';                                                                       // SMTP username
    $mail->Password   = 'Nn0Fk69W7Qdh';        // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('no-reply@icontsac.com', 'ICONTSAC - WEB');
    $mail->addAddress('igastelu@factoriamedia.com');
    $mail->addAddress('amolina@icontsac.com');     
    $mail->addAddress('icontsac.web@gmail.com');     
    $mail->addAddress('angelmolinaherrera@gmail.com');     

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = "Mensaje web: $asunto";
    $mail->msgHTML($body);
    $mail->AltBody = strip_tags($body);
    $mail->CharSet = 'UTF-8';

    // if ($foto['size'] > 0) {
    //     $mailer->addAttachment($foto['tmp_name'], $foto['name']);
    // }


    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
