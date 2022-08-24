let billVal = 0;
let peopleVal = 1;
let tipVal = 0.15;


const input = document.getElementById('amount')
const button = document.querySelectorAll('.btn')
const customTip = document.getElementById('CustomTip');
const error = document.getElementById('error')
const people = document.getElementById('people')
const totalVal = document.querySelectorAll('.Value')
const reset = document.querySelector('.reset')


input.addEventListener('amount',validateBill);

function validateBill(){
    if(amount.value.includes(',')){
        amount.value.replace(',','.')
    }
    billVal = parseFloat(amount.value);
    calculate()
    console.log(billVal)
}

customTip.addEventListener('input',tipCustomVal);
people.addEventListener('input',setPeopleVal)
reset.addEventListener('click',handleReset);

button.forEach(btn => {
    btn.addEventListener('click',handleClick)
});



function handleClick(event){
    button.forEach(btn => {
        btn.classList.remove('active')
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            tipVal = parseFloat(btn.innerHTML)/100
            
            console.log(tipVal)
        }
    })
    customTip.value=''
    calculate()
}

function tipCustomVal(){
    tipVal = parseFloat(customTip.value/100)
    button.forEach(btn => {
        btn.classList.remove('active');
    })
    if(customTip.value !== 0){
         calculate();
         
    }
    console.log(tipVal)
}

function setPeopleVal(){
    peopleVal = parseFloat(people.value)
    if(peopleVal <= 0 ) {
        error.innerHTML = 'number must be greater than zero'
        setTimeout(function(){
            error.innerHTML = ''
        },2000)
    }
    console.log(peopleVal)
    calculate() 
}

function calculate() {
    if(peopleVal >= 1 ) {
        let tip = billVal * tipVal / peopleVal;
        let totalAmount = billVal * (tipVal + 1) / peopleVal;

        totalVal[0].innerHTML = '$' + tip.toFixed(2);
        totalVal[1].innerHTML = '$' + totalAmount.toFixed(2);
    }
}

function handleReset(){
    input.value = 0.0;
    validateBill()

    button[2].click();
    people.value = 1;
    setPeopleVal()
}