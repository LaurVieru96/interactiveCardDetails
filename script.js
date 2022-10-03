const cardHolder = document.getElementById('cardHolder');
const carNumber = document.getElementById('cardNumber')
const expiry = Array.from(document.querySelectorAll('.expiry'));
const cvc = document.getElementById('cvc');
const submit = document.getElementById('submit');
const nameOnCard = document.querySelector('.cardholder-display');
const numOnCard = document.querySelector('.card-number-display');
const expMM = document.querySelector('.expiry-month-display');
const expYY = document.querySelector('.expiry-year-display');
const cvcDisplay = document.querySelector('.cvc-display');
const thankYou = document.getElementById('thank-you-header');
const thankYouSection = document.getElementById('thank-you');
const continueBtn = document.getElementById('continue');
const form = document.getElementById('myForm');
const expiryErrorMsg = document.getElementById('expiry-error');


function inputName() {
    nameOnCard.innerHTML = cardHolder.ariaValueMax;
    thankYou.innerHTML = `Thank You ${cardHolder.value}`;
    if (nameOnCard.innerHTML == "") {
        nameOnCard.innerHTML = cardHolder.placeholder;
    }
}

// min 34 https://www.youtube.com/watch?v=fPmrpEVzm2Y&t=1777s&ab_channel=IrvineMesa