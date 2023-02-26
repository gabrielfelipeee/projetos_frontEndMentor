let fivePercent = document.querySelector('.five-percent');
let tenPercent = document.querySelector('.ten-percent');
let fifteenPercent = document.querySelector('.fifteen-percent');
let twentyfivePercent = document.querySelector('.twentyfive-percent');
let fiftyPercent = document.querySelector('.fifty-percent');
let inputCustomPercentage = document.querySelector('.custom-percentage');

let inputBill = document.querySelector('#bill');
let inputPeople = document.querySelector('#number-people');

let resultTipAmount = document.querySelector('.result-tip-amount');
let resultTotal = document.querySelector('.result-total');
let butReset = document.querySelector('.reset');

let cantBeZero = document.querySelector('.cant-be-zero');


function five() {
    let inputBillFive  = Number(inputBill.value);
    let inputPeopleFive = Number(inputPeople.value);

    if (inputPeopleFive <= 0) {
        cantBeZero.style.display = 'block';
        inputPeople.style.outline = '2px solid red'
    } else {
        cantBeZero.style.display = 'none';
        inputPeople.style.outline = '2px solid hsl(172, 67%, 45%)'
        fivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
        tenPercent.style.backgroundColor = '';
        fifteenPercent.style.backgroundColor = '';
        twentyfivePercent.style.backgroundColor = '';
        fiftyPercent.style.backgroundColor = '';

        let amount = ((inputBillFive  * 5) / 100) / inputPeopleFive ;
        let total = ((inputBillFive  / inputPeopleFive ) + amount);

        resultTipAmount.innerHTML = '$' + amount.toFixed(2);
        resultTotal.innerHTML = '$' + total.toFixed(2);
    }
}
fivePercent.addEventListener('click', five);


function ten() {
    let inputBillTen = Number(inputBill.value);
    let inputPeopleTen = Number(inputPeople.value);

    if (inputPeopleTen <= 0) {
        cantBeZero.style.display = 'block';
        inputPeople.style.outline = '2px solid red'
    } else {
        cantBeZero.style.display = 'none';
        inputPeople.style.outline = '2px solid hsl(172, 67%, 45%)'
        fivePercent.style.backgroundColor = '';
        tenPercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
        fifteenPercent.style.backgroundColor = '';
        twentyfivePercent.style.backgroundColor = '';
        fiftyPercent.style.backgroundColor = '';

        let amount = ((inputBillTen * 10) / 100) / inputPeopleTen;
        let total = ((inputBillTen / inputPeopleTen) + amount);

        resultTipAmount.innerHTML = '$' + amount.toFixed(2);
        resultTotal.innerHTML = '$' + total.toFixed(2);
    }
}
tenPercent.addEventListener('click', ten);


function fifteen() {
    let inputBillFifteen = Number(inputBill.value);
    let inputPeopleFifteen = Number(inputPeople.value);

    if (inputPeopleFifteen <= 0) {
        cantBeZero.style.display = 'block';
        inputPeople.style.outline = '2px solid red'
    } else {
        cantBeZero.style.display = 'none';
        inputPeople.style.outline = '2px solid hsl(172, 67%, 45%)'
        fivePercent.style.backgroundColor = '';
        tenPercent.style.backgroundColor = '';
        fifteenPercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
        twentyfivePercent.style.backgroundColor = '';
        fiftyPercent.style.backgroundColor = '';

        let amount = ((inputBillFifteen * 15) / 100) / inputPeopleFifteen;
        let total = ((inputBillFifteen / inputPeopleFifteen) + amount);

        resultTipAmount.innerHTML = '$' + amount.toFixed(2);
        resultTotal.innerHTML = '$' + total.toFixed(2);
    }    
}
fifteenPercent.addEventListener('click', fifteen);


function twentyfive() {
    let inputBillTwentyfive = Number(inputBill.value);
    let inputPeopleTwentyfive = Number(inputPeople.value);

    if (inputPeopleTwentyfive <= 0) {
        cantBeZero.style.display = 'block';
        inputPeople.style.outline = '2px solid red'
    } else {
        cantBeZero.style.display = 'none';
        inputPeople.style.outline = '2px solid hsl(172, 67%, 45%)'
        fivePercent.style.backgroundColor = '';
        tenPercent.style.backgroundColor = '';
        fifteenPercent.style.backgroundColor = '';
        twentyfivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
        fiftyPercent.style.backgroundColor = '';

        let amount = ((inputBillTwentyfive * 25) / 100) / inputPeopleTwentyfive;
        let total = ((inputBillTwentyfive / inputPeopleTwentyfive) + amount);

        resultTipAmount.innerHTML = '$' + amount.toFixed(2);
        resultTotal.innerHTML = '$' + total.toFixed(2);
    }
    
}
twentyfivePercent.addEventListener('click', twentyfive);


function fifty() {
    let inputBillFifty = Number(inputBill.value);
    let inputPeopleFifty = Number(inputPeople.value);

    if (inputPeopleFifty <= 0) {
        cantBeZero.style.display = 'block';
        inputPeople.style.outline = '2px solid red'
    } else {
        cantBeZero.style.display = 'none';
        inputPeople.style.outline = '2px solid hsl(172, 67%, 45%)'
        fivePercent.style.backgroundColor = '';
        tenPercent.style.backgroundColor = '';
        fifteenPercent.style.backgroundColor = '';
        twentyfivePercent.style.backgroundColor = '';
        fiftyPercent.style.backgroundColor = 'hsl(172, 67%, 45%)';

        let amount = ((inputBillFifty * 50) / 100) / inputPeopleFifty;
        let total = ((inputBillFifty / inputPeopleFifty) + amount);

        resultTipAmount.innerHTML = '$' + amount.toFixed(2);
        resultTotal.innerHTML = '$' + total.toFixed(2);
    }
    
}
fiftyPercent.addEventListener('click', fifty);


function custom(event) {
    let inputBillCustom = Number(inputBill.value);
    let inputPeopleCustom = Number(inputPeople.value);
    let custom = Number(inputCustomPercentage.value);
    
    if (event.keyCode === 13) {
        if (inputPeopleCustom <= 0) {
            cantBeZero.style.display = 'block';
            inputPeople.style.outline = '2px solid red'
        } else {
            cantBeZero.style.display = 'none';
            inputPeople.style.outline = '2px solid hsl(172, 67%, 45%)'
    
            fivePercent.style.backgroundColor = '';
            tenPercent.style.backgroundColor = '';
            fifteenPercent.style.backgroundColor = '';
            twentyfivePercent.style.backgroundColor = '';
            fiftyPercent.style.backgroundColor = '';
        
            let amount = ((inputBillCustom * custom) / 100) / inputPeopleCustom;
            let total = ((inputBillCustom / inputPeopleCustom) + amount);
        
            resultTipAmount.innerHTML = '$' + amount.toFixed(2);
            resultTotal.innerHTML = '$' + total.toFixed(2);
    }
}
}
addEventListener('keydown', custom);


function reset() {
    inputBill.value = '';
    inputPeople.value = '';
    inputCustomPercentage.value = '';
    resultTipAmount.innerHTML = '$0.00';
    resultTotal.innerHTML = '$0.00';

    cantBeZero.style.display = 'none';
    inputPeople.style.outline = '';

    fivePercent.style.backgroundColor = '';
    tenPercent.style.backgroundColor = '';
    fifteenPercent.style.backgroundColor = '';
    twentyfivePercent.style.backgroundColor = '';
    fiftyPercent.style.backgroundColor = '';

    inputBill.focus();
}
butReset.addEventListener('click', reset);