<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Dirección de correo a la que se enviará el mensaje
    $to = 'agustondominguez95@gmail.com';
    // Asunto del correo electrónico
    $subject = 'Nuevo mensaje de tu portafolio web';

    // Contenido del correo
    $emailContent = "Nombre: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Mensaje:\n$message\n";

    // Encabezados del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar el correo
    if (mail($to, $subject, $emailContent, $headers)) {
        // Redirigir a una página de éxito
        header('Location: gracias.html');
        exit();
    } else {
        echo 'Lo siento, ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.';
    }
} else {
    echo 'Método de solicitud no permitido.';
}
?>