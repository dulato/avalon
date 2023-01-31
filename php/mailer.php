<?php
if(isset($_POST)) {
    $to = "duka.yeleu02@gmail.com";
    $subject = "Заявка c сайта";
    
    $message = 'Имя: '.$_POST['name'].',<br>
    Телефон: '.$_POST['tel'].'';

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
    $headers .= "From: <noreply@bestsolutions.kz>" . "\r\n";

    mail($to,$subject,$message,$headers);
}