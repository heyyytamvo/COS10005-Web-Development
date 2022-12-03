/* validation script */
function validate() {
    /* import id from html) */

    var username = document.getElementById("userNameID").value;
    var password = document.getElementById("passwordID").value;
    var rePassword = document.getElementById("rePasswordID").value;
    var postCode = document.getElementById("postCodeID").value;
    var male = document.getElementById("maleID").checked;
    var female = document.getElementById("femaleID").checked;
    /* tạo var errmsg result(create var errmsg,result and) */
    var errMsg = ""; 
    var result = true; 
    /* code validate theo yêu cầu đề bài (validation code) */
    if (username.length == 0){
        errMsg += "Username can not be blanked\n";
    }

    if (password.length == 0){
        errMsg += "Password can not be blanked\n";
    }

    if (password.length < 7){
        errMsg += "Password must be at least 7 characters\n";
    }

    if (rePassword.length == 0){
        errMsg += "Please type your password again\n";
    }

    if (password != rePassword){
        errMsg += "You made a mistake when re-typing your password\n";
    }

    if (postCode.length == 0){
        errMsg += "Post Code can not be blanked\n";
    }
    
    if (postCode.length != 4  && postCode.length !=0) {
        errMsg += "Post code must contain only 4 digits\n";
    }

    if (male == false && female == false){
        errMsg += "You must choose your gender\n";
    }
    
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}
/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
  var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
  regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;

