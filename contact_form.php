<?php
header('Content-Type: text/html; charset=utf-8');

if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@bottledsoftware.de";
    $email_subject = "Neue Kontaktanfrage über Kontaktformular";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $name = $_POST['name']; // required
    $company = $_POST['company'];
    $email_from = $_POST['email']; // required
    $telephone = $_POST['phone']; // not required
    $comments = $_POST['message']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    //$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    $error_message .= 'Die von Ihnen eingegebene E-Mail Adresse ist keine gültige Adresse.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    //$error_message .= 'The name you entered does not appear to be valid.<br />';
    $error_message .= 'Der von Ihnen eingegebene Name ist kein gültiger Name.<br />';
  }
  if(strlen($comments) < 2) {
    //$error_message .= 'The Comments you entered do not appear to be valid.<br />';
    $error_message .= 'Bitte füllen Sie das Nachrichtenfeld korrekt aus.<br />';
  }
  if(strlen($error_message) > 0) {
    //died($error_message);
    echo '<div class="alert alert-error"><strong>Fehler.</strong> ' . $error_message . '</div>';
    die();
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Firma: ".clean_string($company)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telefon: ".clean_string($telephone)."\n";
    $email_message .= "Nachricht: ".clean_string($comments)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
<div class="alert alert-success">
	<strong>Vielen Dank für Ihre Anfrage.</strong> Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.
</div>
 
<?php
}
?>