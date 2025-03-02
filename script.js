const form = document.getElementById("contactForm");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const queryTypeRadios = document.querySelectorAll("input[name='queryType']");
const message = document.getElementById("message");
const consent = document.getElementById("consent");

firstName.addEventListener("input", () => validateFirstName(firstName));
lastName.addEventListener("input", () => validateLastName(lastName));
email.addEventListener("input", () => emailValidation(email));
queryTypeRadios.forEach(radio => radio.addEventListener("change", () => queryTypeValidation()));
message.addEventListener("input", () => messageValidation(message));
consent.addEventListener("input", () => consentValidation(consent));

form.addEventListener("submit", function(e) {
    e.preventDefault();

    firstName.addEventListener("input", () => validateFirstName(firstName));
    lastName.addEventListener("input", () => validateLastName(lastName));
    email.addEventListener("input", () => emailValidation(email));
    queryTypeRadios.forEach(radio => radio.addEventListener("change", () => queryTypeValidation()));
    message.addEventListener("input", () => messageValidation(message));
    consent.addEventListener("change", () => consentValidation(consent));

    // Real-time Validation
    if (validateForm()) {
        alert("Form Submitted Successfully!");
        this.reset();
    } else {
        console.error("Fill in all details.");
    }
});

const validateForm = () => {
    let isValid = true;
    if (!validateFirstName(firstName)) isValid = false;
    if (!validateLastName(lastName)) isValid = false;
    if (!emailValidation(email)) isValid = false;
    if (!queryTypeValidation(queryType)) isValid = false;
    if (!consentValidation(consent)) isValid = false;
    return isValid;
}

// Name Validation
const namePattern = /^[a-zA-Z ]+$/;
const validateFirstName = (firstName) => {
    if (firstName.value.trim() === "" || firstName.value.length < 3) {
        document.getElementById("firstNameError").style.visibility = "visible";
        firstName.classList.remove("success");
        firstName.classList.add("error");
        return false;
    } else if (!namePattern.test(firstName.value)) {
        document.getElementById("firstNameError").textContent = 'Enter a valid name(Only letters Allowed)';
        document.getElementById("firstNameError").style.visibility = "visible";
        firstName.classList.remove("success");
        firstName.classList.add("error");
        return false;
    } else if (namePattern.test(firstName.value) && firstName.value.trim() != "" && firstName.value.length >= 3) {
        document.getElementById("firstNameError").style.visibility = "hidden";
        firstName.classList.remove("error");
        firstName.classList.add("success");
        return true;
    }
}

const validateLastName = (lastName) => {
    if (lastName.value.trim() === "" || lastName.value.length < 3) {
        document.getElementById("lastNameError").style.visibility = "visible";
        lastName.classList.remove("success");
        lastName.classList.add("error");
        return false;
    } else if (!namePattern.test(lastName.value)) {
        document.getElementById("lastNameError").textContent = 'Enter a valid name(Only letters Allowed)';
        document.getElementById("lastNameError").style.visibility = "visible";
        lastName.classList.remove("success");
        lastName.classList.add("error");
        return false;
    } else if (namePattern.test(lastName.value) && lastName.value.trim() != "" && lastName.value.length >= 3) {
        document.getElementById("lastNameError").style.visibility = "hidden";
        lastName.classList.remove("error");
        lastName.classList.add("success");
        return true;
    }
}

// Email Validation
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailValidation = (email) => {
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        document.getElementById("emailError").style.visibility = "visible";
        email.classList.remove("success");
        email.classList.add("error");
        return false;
    } else if (emailPattern.test(email.value) && !email.value.trim() === '') {
        document.getElementById("emailError").style.visibility = "hidden";
        email.classList.remove("error");
        email.classList.add("success");
        return true;
    }
}

// Query Type Validation
const queryTypeValidation = () => {
    const selectedQueryType = document.querySelector("input[name='queryType']:checked");
    if (!selectedQueryType) {
        document.getElementById("queryTypeError").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("queryTypeError").style.visibility = "hidden";
        return true;
    }
}

// Message Validation
const messageValidation = (message) => {
    if (message.value.trim() === "" || message.value.length < 10) {
        document.getElementById("messageError").style.visibility = "visible";
        message.classList.remove("success");
        message.classList.add("error");
        return false;
    } else if (message.value.length >= 10 && message.value.trim() != "") {
        document.getElementById("messageError").style.visibility = "hidden";
        message.classList.remove("error");
        message.classList.add("success");
        return true;
    }
}

// Consent Checkbox Validation
const consentValidation = (consent) => {
    if (!consent.checked) {
        document.getElementById("consentError").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("consentError").style.visibility = "hidden";
        return true;
    }
}