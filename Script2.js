function getTheMail() {
  // code here will build e-mail
 
  // begin variable listing
  var myvar = 1;

  /* run code if our custom sendMyMail() function call returns true
     find sendMyMail() in /libs/mailer.class.php
     we check if the user fills in all fields and message is sent! */
  if(sendMyMail()) { return true; // keep true and display onscreen success
    }
}