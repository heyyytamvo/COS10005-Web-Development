/* validation script */
function validate() {
    /* import id from html) */

    var deliveryType = document.getElementById("deliver").checked;
    var pickUpType = document.getElementById("pickup").checked;

    var address = document.getElementById("deliveryAddress").value;
    var billingAddress = document.getElementById("billingAddress").value;

    var phone = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    var pickUpPayment = document.getElementById("OnPickup").checked;
    var onlinePayment = document.getElementById("Online").checked;
    var visa = document.getElementById("visa").value;
    var mastercard = document.getElementById("mastercard").value;
    var americanex = document.getElementById("americanex").value;

    /* tạo var errmsg result(create var errmsg,result and) */
    var errMsg = ""; 
    var result = true; 
    /* code validate theo yêu cầu đề bài (validation code) */
    if (deliveryType == false && pickUpType == false){
        errMsg += "You need to choose the delivery type\n";
    }
    
    
    if (visa.length != 16 && visa.length != 0) {
                errMsg += "Visa Number can only be 16 digits\n";
    }
    if (mastercard.length != 16 && mastercard.length != 0) {
                errMsg += "Mastercard Number can only be 16 digits\n";
    }
    if (americanex.length != 15 && americanex != 0) {
                errMsg += "American Express Number can only be 16 digits\n";
    }

    if (pickUpPayment == false && onlinePayment == false){
        errMsg += "You need to choose payment method\n"
    }
    if ((pickUpPayment == false) && (visa.length == 0 && mastercard.length == 0 && americanex == 0)){
        errMsg += "You need the payment information\n"
    }

    if (address.length == 0 && billingAddress == 0){
        errMsg += "Address or Billing address can not be blanked\n"
    }

    if (phone == "") {
        errMsg += "Contact Number cannot be empty\n";
        }
    if (email == "") {
        errMsg += "Email cannot be empty\n";
        }
    
    /* Display error message any error(s) is/are detected */
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

/*enable delivery address when click on deliver and disable when click on pick up*/
   
        function enable() {
            var x = document.getElementById("deliveryAddress").disabled = false;
        }

        function disable() {
            var x = document.getElementById("deliveryAddress");
            x.value = "";
            document.getElementById("deliveryAddress").disabled = true;
        }

        document.getElementById("deliver").addEventListener("click", enable);
        document.getElementById("pickup").addEventListener("click", disable);
    

    /*same as delivery address*/ 
   
        function sameAddress() {
            var checkBox = document.getElementById("BillSameAddress");  
            var deliveryAddress = document.getElementById("deliveryAddress");  
            var billingAddress = document.getElementById("billingAddress");  
 
            if (checkBox.checked == true){
                billingAddress.value = deliveryAddress.value;  
            } else {
                billingAddress.value = "";
            }
        }
    

    /*alert when delivery address is empty*/
   
        function checkingFilledAddress(event){
            var address = document.getElementById("deliveryAddress");
            var billingAddress = document.getElementById("billingAddress");
            var checked = document.getElementById("BillSameAddress").checked;

	
            if (checked) {
                if (address.value != "") {
                    billingAddress.value = address.value;
                } else if (billingAddress.value != "" && address.value == ""){
                    return
                } 
                else {
                    alert('Please enter your delivery address first!');
                    event.preventDefault(); 
                }
            }
        }
    

    