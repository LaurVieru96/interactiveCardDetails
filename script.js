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

function inputCardNum() {
    let cardNumberInput = cardNumber.value;
    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card numberts groups of 4 
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join("");
    }
    // If the formattedCardNumber is diff to what is shown change t
    if (cardNumberInput !== formattedCardNumber) {
        cardNumber.value = formattedCardNumber;
    }
    numOnCard.innerHTML = cardNumber.value;
    if (carNumber.value === "") {
        numOnCard.innerHTML = cardNumber.placeholder;
    }
}


function inputMM() {
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0, 2);
    expiry[0].value = formattedMM;
    if (expiry[0].value === "") {
        expMM.innerHTML = "00";
    } else {
        expMM.innerHTML = expiry[0].value;
    }
}

function inputYY() {
    let formattedYY = expiry[1].value;
    formattedYY = formattedYY.substring(0, 4);
    expiry[1].value = formattedYY;
    if (expiry[1].value === "") {
        expYY.innerHTML = "0000";
    } else {
        expYY.innerHTML = expiry[1].value;
    }
}

function inputCvc() {
    let formattedCvc = cvc.value;
    formattedCvc = formattedCvc.substring(0, 3);
    cvc.value = formattedCvc;
    if (cvc.value === "") {
        cvcDisplay.innerHTML = "000";
    } else {
        cvcDisplay.innerHTML = cvc.value;
    }
}

// min 34  https://www.youtube.com/watch?v=fPmrpEVzm2Y&t=1777s&ab_channel=IrvineMesa










