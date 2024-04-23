function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phone=document.GetElementById("phone").value;
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    if(phone.length<10){
        alert("phone number is incorrect");
        return false;
    }
    return true;
} 