let billInput = document.querySelector(".bill-input")
let tipAmount = document.querySelectorAll(".tip-cta")
let customerNumber = document.querySelector(".people-input")
let amountPerPerson = document.querySelector(".amount-value")
let totalPerPerson = document.querySelector(".total-value")
let resetBtn = document.querySelector(".reset-cta")
let customInput = document.querySelector(".tip-input")
let errMessage = document.querySelector(".err-people")

let amountValue = 0
let calculateTip = 0
let totalAmount = 0
let customerShareAmount = 0


function calculateTipPerClient(){
    customerShareAmount = billInput.value / customerNumber.value
    
}

function calculateTotalPerClient(){
    totalAmount = customerShareAmount + calculateTip
}



const tipValue = (e) =>{
    amountValue = e.target.value

    tipAmount.forEach(tipBtn => {
        tipBtn.classList.remove("active")
        if (tipBtn.value === amountValue){
            tipBtn.classList.add("active")
        }
    })

    calculateTipPerClient()

    calculateTip = customerShareAmount * amountValue / 100
    calculateTotalPerClient()

    if (customerNumber.value <= 0) {
        customerNumber.classList.add("error")
        errMessage.style.display = "block"
         return (
            (amountPerPerson.textContent = "$0.00") 
            (totalPerPerson.textContent = "$0.00")
            )
    }else {
        customerNumber.classList.remove("error")
        errMessage.style.display = "none"
    }
    
    if (calculateTip > 0 && totalAmount > 0){
        amountPerPerson.textContent = `$${calculateTip.toFixed(2)}`
        totalPerPerson.textContent = `$${totalAmount.toFixed(2)}`
    }
        
}


for (let i = 0; i < tipAmount.length; i++){
    tipAmount[i].addEventListener("click", tipValue)
   
}


function reset(){
    amountValue = ""
    calculateTip = ""
    totalAmount = ""
    customerShareAmount = ""

    amountPerPerson.textContent = "$0.00"
    totalPerPerson.textContent = "$0.00"
    customerNumber.value = "0"
    billInput.value = 0
    customInput.value = "Custom"
    tipAmount.forEach(tipBtn => tipBtn.classList.remove("active"))

    customerNumber.classList.remove("error")
    errMessage.style.display = "none"
}

resetBtn.addEventListener("click", reset)



