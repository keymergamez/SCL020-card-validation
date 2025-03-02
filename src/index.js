import validator from './validator.js'

document.getElementById("myModal").style.display = "none";

document.getElementById("payment-data-debit").style.display = "none"; 
document.getElementById("payment-data-credit").style.display = "none";

window.getCreditCardNumber = function getCreditCardNumber() {
    const creditCardNumber = document.getElementById("card-number").value;

    if (creditCardNumber === "") {
        alert('Ingrese un número de tarjeta válida');
        return
    }

    if (creditCardNumber.length < 13 || creditCardNumber.length > 16) {
        alert('El número de tarjeta tiene que ser mayor a 13 y menor a 16 dígitos.');
        return
    }

    const creditCardNumberMask = validator.maskify(creditCardNumber)

    if (validator.isValid(creditCardNumber)) {      // condicionales
        document.getElementById("myModal").style.display = "block";
        document.getElementById("pmyModal").innerText = `${creditCardNumberMask} \n Tarjeta valida`
       
    } 
    else {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("pmyModal").innerText = `${creditCardNumberMask} \n Tarjeta invalida`
    
    }

  }
window.appformatexpirationdate = function appformatexpirationdate(value) { 
  return value.replace(/^(\d\d)(\d)$/g,'$1/$2');
}
window.appformatcardNumber = function appformatcardNumber(value) {
  return value.replace(/^[a-zA-Z]*$/g,'');                            
}



window.debitCard = function debitCard() {
  document.getElementById("payment-data-debit").style.display = "block"; 
  document.getElementById("payment-data-credit").style.display = "none";
}

window.creditCard = function creditCard() {
  document.getElementById("payment-data-debit").style.display = "none"; 
  document.getElementById("payment-data-credit").style.display = "block";
}