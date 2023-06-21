let billInput = document.querySelector(".bill-input")
let tipAmount = document.querySelectorAll(".tip-cta")
let customerNumber = document.querySelector(".people-input")
let amountPerPerson = document.querySelector(".amount-value")
let totalPerPerson = document.querySelector(".total-value")
let resetBtn = document.querySelector(".reset-cta")
let customInput = document.querySelector(".tip-input")

let amountValue = 0
let calculateTip = 0
let totalAmount = 0
let customerShareAmount = 0


function calculateTipPerClient(){
    customerShareAmount = billInput.value / customerNumber.value
    console.log(customerShareAmount)
    
}

function calculateTotalPerClient(){
    totalAmount = customerShareAmount + calculateTip
}



const tipValue = (e) =>{
    amountValue = e.target.value
    console.log(amountValue)

    calculateTipPerClient()

    calculateTip = customerShareAmount * amountValue / 100
    amountPerPerson.textContent = `$${calculateTip}`

    calculateTotalPerClient()
    totalPerPerson.textContent = `$${totalAmount}`
    
        
}

for (let i = 0; i < tipAmount.length; i++){
    tipAmount[i].addEventListener("click", tipValue)
}


function reset(){
    amountValue = ""
    calculateTip = ""
    totalAmount = ""
    customerShareAmount = ""

    amountPerPerson.textContent = "$0"
    totalPerPerson.textContent = "$0"
    customerNumber.value = "0"
    billInput.value = 0
    customInput.value = "Custom"
}

resetBtn.addEventListener("click", reset)



