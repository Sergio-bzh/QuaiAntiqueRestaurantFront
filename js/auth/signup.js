// Implémentation du JS sur ma page
//alert('Oups !s')
// Déclaration des éléments à vérifier
const prenomInput = document.getElementById('nameInput');
const nomInput = document.getElementById('familyNameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const btnSignup = document.getElementById('btn-signup');

// Mise en place des écouteurs d'évenements
prenomInput.addEventListener("keyup", validateForm);
nomInput.addEventListener("keyup", validateForm);
emailInput.addEventListener("keyup", validateForm);
passwordInput.addEventListener("keyup", validateForm);
confirmPasswordInput.addEventListener("keyup", validateForm);

// Déclaration des fonctions de rappel
function validateForm() {
    const prenomOk = validateRequired(prenomInput);
    const nomOk = validateRequired(nomInput);
    const mailOk = validateEmail(emailInput);
    const passwdOk = validatePasswordInput(passwordInput);
    const passwdMatchOK = validatePasswdMatch(confirmPasswordInput, passwordInput);

    if (prenomOk && nomOk && mailOk && passwdOk && passwdMatchOK) {
        // btnSignup.disabled = false;
        btnSignup.classList.add('enabled');
        btnSignup.classList.remove('disabled');
    }
    else {
        // btnSignup.disabled = true;
        btnSignup.classList.add('disabled');
        btnSignup.classList.remove('enabled');
    }
}

const validateRequired = (input) => {
    if (input.value != "") {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function validateEmail(input) {
    // Création du regex pour vérifier l'email
    const emailRegex = /^[a-zA-Z]+[^\s@]+@[^\s@]+\.[^\s@]{1,3}$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true
    }
    else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function validatePasswordInput(input) {
    const passwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{9,}$/;
    const userPasswd = input.value;
    if (userPasswd.match(passwdRegex)) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function validatePasswdMatch(input, passwordInput) {
    // const passwdVerif = input.value;
    if (input.value === passwordInput.value) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}