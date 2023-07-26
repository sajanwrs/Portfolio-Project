<?php
if ($_POST['submit']){
    $recipient ="example.gmail.com";
    $senderName = $_POST['sender'];
    $senderEmail=$_POST['sender-email'];
    $message = $_POST['message']; 

    mail($recipient,$senderName,$message, "From: <$senderEmail>")

    $success = "<p>Thanks for getting in touch.</p>";
}
?>