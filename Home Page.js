function validation(){
    var name = document.getElementById("username").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");
    var mode = document.getElementsByName("mode-of-payment");
    var credit = document.getElementById("credit").value;
    var text;
    var userbool = false;
    var addressbool = false;
    var contactbool = false;
    var emailbool = false;
    var creditbool = false;

    error_message.style.padding = "10px";

    if(mode[0].checked){
        if(name.length < 1 ){
            text = "Complete name cannot be empty!";
            error_message.innerHTML = text;
            return false;
        } else {
            userbool = true;
        }

        if(address.length < 1){
            text = "Address cannot be empty!";
            error_message.innerHTML = text;
            return false;
        } else {
            addressbool = true;
        }

        if(isNaN(contact) || contact.length != 11){
            text = "Enter a valid contact number!";
            error_message.innerHTML = text;
            return false;
        } else {
            contactbool = true;
        }
        
        if(email.indexOf("@") == -1 || email.length < 12){
            text = "Enter a valid email address!";
            error_message.innerHTML = text;
            return false;
        } else {
            emailbool = true;
        }

        if(isNaN(credit) || credit.length != 11){
            text = "Enter a valid contact credit/debit card number!";
            error_message.innerHTML = text;
            return false;
        } else {
            creditbool = true;
        }

        if(userbool == true && addressbool == true && contactbool == true && creditbool == true){
            alert('Order on Process')

            var name = document.getElementById("username").value = null;
            var address = document.getElementById("address").value = null;
            var contact = document.getElementById("contact").value =  null;
            var email = document.getElementById("email").value = null;
            var credit = document.getElementById("credit").value = null;
            error_message.style.padding = "0px";
            error_message.innerHTML = null;
            updateCartTotal()
            
        }
        
        return false;
    } else {
        if(name.length < 1 ){
            text = "Complete name cannot be empty!";
            error_message.innerHTML = text;
            return false;
        } else {
            userbool = true;
        }
    
        if(address.length < 1){
            text = "Address cannot be empty!";
            error_message.innerHTML = text;
            return false;
        } else {
            addressbool = true;
        }
    
        if(isNaN(contact) || contact.length != 11){
            text = "Enter a valid contact number!";
            error_message.innerHTML = text;
            return false;
        } else {
            contactbool = true;
        }
        
        if(email.indexOf("@") == -1 || email.length < 12){
            text = "Enter a valid email address!";
            error_message.innerHTML = text;
            return false;
        } else {
            creditbool = true;
        }
    
        if(userbool == true && addressbool == true && contactbool == true && creditbool == true){
            alert('Order on Process')
            var name = document.getElementById("username").value = null;
            var address = document.getElementById("address").value = null;
            var contact = document.getElementById("contact").value =  null;
            var email = document.getElementById("email").value = null;
            error_message.style.padding = "0px";
            error_message.innerHTML = null;
            updateCartTotal()
            
        }
        
        return false;
    }

    
}


var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}