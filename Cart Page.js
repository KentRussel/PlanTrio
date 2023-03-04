if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName("btn-danger")
    for(var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for(var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('description')[0].innerText
    var img = shopItem.getElementsByClassName('product-image')[0].src
    //var size = shopItem.getElementsByClassName('shirt-size-selector')[0].innerText;
    

    addItemToCart(title, price, img)
    updateCartTotal()
}

function addItemToCart(title, price, img){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for(var i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert('Item selected is already inside the cart')
            return
        }
    }


    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${img}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
    
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseInt(priceElement.innerText.replace('₱', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }

    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total

}

// Popup Modal

const proceed = document.getElementById('proceed');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

proceed.addEventListener('click', () => {
    modal_container.classList.add('show');
    updateCartTotal()
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    var name = document.getElementById("username").value = null;
    var address = document.getElementById("address").value = null;
    var contact = document.getElementById("contact").value =  null;
    var email = document.getElementById("email").value = null;
    error_message.style.padding = "0px";
    error_message.innerHTML = null;
})

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
            contactbool = true;
        }

        if(userbool == true && addressbool == true && contactbool == true ){
            alert('Purchase successful!')
            var cartItems = document.getElementsByClassName('cart-items')[0]
            modal_container.classList.remove('show');
            while (cartItems.hasChildNodes()){
                cartItems.removeChild(cartItems.firstChild)
            }
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
            emailbool = true;
        }
    
        if(userbool == true && addressbool == true && contactbool == true ){
            alert('Purchase successful!')
            var cartItems = document.getElementsByClassName('cart-items')[0]
            modal_container.classList.remove('show');
            while (cartItems.hasChildNodes()){
                cartItems.removeChild(cartItems.firstChild)
            }
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
