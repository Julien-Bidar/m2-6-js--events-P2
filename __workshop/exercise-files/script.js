// add js here
const submitBtn = document.querySelector("#submit")
const termsChecked = document.querySelector("#terms-input")
const passwordInput = document.querySelector("#password-input")
const confirmPassword = document.querySelector("#confirm-password-input")
const errorMessage = document.querySelector("#error-message")
const errorMessageShort = document.querySelector("#too-short")
const doesNotMatch = document.querySelector("#do-not-match")
const form = document.querySelector("#form")

function clearErrors(){
    errorMessage.style.display = "none"
    passwordInput.style.border = "1px solid grey"
    passwordInput.style.outline = "none"
    confirmPassword.style.display = "1px solid grey"
    confirmPassword.style.outline = "none"
}

submitBtn.addEventListener("click", ()=>{
    clearErrors();
    if(termsChecked.checked === false){
        alert("you must agree to the terms of service to continue")
    }
    if(passwordInput.value.length < 10){
        errorMessage.style.display= "block"
        errorMessageShort.style.display="block"
        passwordInput.style.outline = "solid pink 2px"
        passwordInput.focus()
        passwordInput.style.border = "solid blue 2px"
        passwordInput.style.borderRadius = "2px"
    }
    if(passwordInput.value !== confirmPassword.value){
        console.log(confirmPassword.value)
        errorMessage.style.display= "block"
        doesNotMatch.style.display="block"
        confirmPassword.style.outline = "solid pink 3px"
        confirmPassword.focus()
        confirmPassword.style.border = "solid blue 2px"
        confirmPassword.style.borderRadius = "2px"
    } 
    if(termsChecked.checked === true && passwordInput.value.length >= 10 && passwordInput.value === confirmPassword.value){
        alert('Submited successfully')
    }
    
})
