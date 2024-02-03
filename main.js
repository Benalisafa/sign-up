function validateForm() {
    let fname=document.getElementById ("fname");
    let lname=document.getElementById ("lname");
    let mail=document.getElementById ("mail");
    let pw=document.getElementById ("pw");

    //Declare error messages
    let fnameError = document.getElementById("fname-error");
    let lnameError = document.getElementById("lname-error");
    let mailError = document.getElementById("mail-error");
    let pwError = document.getElementById("pw-error");
    let fnameErrorIcon = document.getElementById("fname-error-icon");
    let lnameErrorIcon = document.getElementById("lname-error-icon");
    let mailErrorIcon = document.getElementById("mail-error-icon");
    let pwErrorIcon = document.getElementById("pw-error-icon");

    // Reset previous error messages
    fnameError.innerHTML = "";
    lnameError.innerHTML = "";
    mailError.innerHTML = "";
    pwError.innerHTML = "";

    fnameErrorIcon.innerHTML = "";
    lnameErrorIcon.innerHTML = "";
    mailErrorIcon.innerHTML = "";
    pwErrorIcon.innerHTML = "";
    

    if (fname.value == "") {
        fnameError.innerHTML = "First Name cannot be empty";
        fnameErrorIcon.innerHTML= "<img src='images/icon-error.svg'>";
        fname.style.border = "2px solid var(--color-red)";
        
    
    }

    if (lname.value == "") {
        lnameError.innerHTML = "Last Name cannot be empty";
        lnameErrorIcon.innerHTML= "<img src='images/icon-error.svg'>";
        lname.style.border = "2px solid var(--color-red)";
    }

    if (mail.value == "") {
        mailError.innerHTML = "Email cannot be empty";
        mailErrorIcon.innerHTML= "<img src='images/icon-error.svg'>";
        mail.style.border = "2px solid var(--color-red)";
    }
        

    else if (mail.value.indexOf ("@")==-1) {
        mailError.innerHTML = "Looks like it's not an email";
        mailErrorIcon.innerHTML= "<img src='images/icon-error.svg'>";
        mail.style.color = "var(--color-red)";
        mail.style.border = "2px solid var(--color-red)";
    }

    if (pw.value == "") {
        pwError.innerHTML = "Password cannot be empty";
        pwErrorIcon.innerHTML= "<img src='images/icon-error.svg'>";
        pw.style.border = "2px solid var(--color-red)";
    }

    // Check if any error messages are present
    if (fnameError.innerHTML !== "" || lnameError.innerHTML !== "" || mailError.innerHTML !== "" || pwError.innerHTML !== "") {
        event.preventDefault(); // Prevent the form from submitting
    }


    
   
  

}

  function removeError(input) {
   
    // Find and clear the corresponding error message
    let errorId = input.id + "-error";
    let iconErrorId = errorId + "-icon";

    document.getElementById(errorId).innerHTML = "";
    document.getElementById(iconErrorId).innerHTML = "";
    mail.style.color = "";
    fname.style.border ="";
    lname.style.border ="";
    mail.style.border ="";
    pw.style.border ="";

}