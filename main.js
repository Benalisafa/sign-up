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

    // Reset previous error messages
    fnameError.innerHTML = "";
    lnameError.innerHTML = "";
    mailError.innerHTML = "";
    pwError.innerHTML = "";

    if (fname.value == "") {
        fnameError.innerHTML = "First Name cannot be empty";
        fname.classList.add("error");
        console.log("Error class added to fname");
    
    }

    if (lname.value == "") {
        lnameError.innerHTML = "Last Name cannot be empty";
        
    }

    if (mail.value.indexOf("@") == -1) {
        mailError.innerHTML = "Looks like it's not an email";
        mail.style.color = "red";
    }

    if (pw.value == "") {
        pwError.innerHTML = "Password cannot be empty";
        
    }

    // Check if any error messages are present
    if (fnameError.innerHTML !== "" || lnameError.innerHTML !== "" || mailError.innerHTML !== "" || pwError.innerHTML !== "") {
        event.preventDefault(); // Prevent the form from submitting
    }



  }


  function removeError(input) {
   
    // Find and clear the corresponding error message
    let errorId = input.id + "-error";
    document.getElementById(errorId).innerHTML = "";
    mail.style.color = "";


}