<?php

$to_email = 'info@realitymacek.cz';

// Email Předmět
$mail_subject = 'Kontakt z webu REALITY MACEK';

// Defind variables
$json       =   array();
$email      =   isset($_POST['email']) ? $_POST['email'] : '';
$name       =   isset($_POST['fname']) ? $_POST['fname'] : '';
$message    =   isset($_POST['message']) ? $_POST['message'] : '';



// Check that data was sent to the mailer.
if (empty($name) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "Vyplňte celý formulář a zkuste to prosím znovu.";
    exit;
}

// Proceed if no erros found
if (!isset($json['error'])) {

    // Email message
    $mail_message =  "Nová zpráva z kontaktního formuláře tomasmacek.cz: \r\n\r\n";
    $mail_message .= "Jméno a příjmení: " . $name . "\r\n\r\n";
    $mail_message .= "E-mailová adresa: " . $email . "\r\n\r\n";
    $mail_message .= "Zpráva: " . $message;

    // Email title
    $mail_headers  = "Content-type: text/plain; charset=utf-8\r\n";
    $mail_headers .= "From: {$email}\r\n";

    // Send the email.
    if (mail($to_email, $mail_subject, $mail_message, $mail_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Vaše zpráva byla úspěšně odeslána!";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Něco se pokazilo a zpráva se neodeslala. Zkuste to prosím znovu!";
    }
}

// Return data    
// echo json_encode($json);
