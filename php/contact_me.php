<?php
// if (
//    empty($_POST['form_name'])      ||
//    empty($_POST['form_email'])     ||
//    empty($_POST['asunto'])     ||
//    empty($_POST['form_phone'])     ||
//    empty($_POST['form_message'])   ||
//    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
// ) {
//    echo "No arguments Provided!";
//    return false;
// }

// $name = strip_tags(htmlspecialchars($_POST['form_name']));
// $email_address = strip_tags(htmlspecialchars($_POST['form_email']));
// $asunto = strip_tags(htmlspecialchars($_POST['asunto']));
// $phone = strip_tags(htmlspecialchars($_POST['form_phone']));
// $message = strip_tags(htmlspecialchars($_POST['form_message']));

// $to = 'gastelu.n.ivan@gmail.com'; //amolina@icontsac.com
// $email_subject = "Sitio web contacto:  $name";
// $asunto = "Asunto:  $asunto";
// $email_body = "Tienes un correo electronico enviado desde la pagina web.\n\n" . "Aqui los detalles del contacto:\n\nNombre: $name\n\nEmail: $email_address\n\nMensage:\n$message";
// $headers = "From: gastelu.n.ivan@gmail.com\n"; // 
// $headers .= "Reply-To: $email_address";
// mail($to, $email_subject, $asunto, $email_body, $headers);
// return true;

if(isset($_POST['submit'])){
   $to = "gastelu.n.ivan@gmail.com"; // this is your Email address
   $from = 'igastelu@factoriamedia.com'; // this is the sender's Email address
   $first_name = 'Apellido';
   // $last_name = $_POST['last_name'];
   $subject = "Form submission";
   $subject2 = "Copy of your form submission";
   $message = $first_name . " wrote the following:" . "\n\n";
   $message2 = "Here is a copy of your message " . $first_name . "\n\n";

   $headers = "From:" . $from;
   $headers2 = "From:" . $to;
   mail($to,$subject,$message,$headers);
   mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
   echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";

   // You can also use header('Location: thank_you.php'); to redirect to another page.
   // You cannot use header and echo together. It's one or the other.
   }
?>
