// Déclaration des variable ciblant les éléments du DOM
const mailInput = document.getElementById("EmailInput");
const passwdInput = document.getElementById("PasswordInput");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", checkCredentials);

function checkCredentials(event) {

    // Ici il faudra appeler l'API pour vérifier les identifiants en BDD car ceci utilise un bouchonage

    if (mailInput.value == "moi@mail.org" && passwdInput.value == "P@5sword!") {
        // Message d'alerte pour vérifier le bon fonctionnement

        // Simulation d'un token qu'il faudra récupérer plus tard du back-end
        const token = "lmlkqsjf=&éjdsojqslkdjf2123jqmlksdjfpolkejrfmqj";
        setToken(token);

        // Placer ce token en cookie

        // Redirection de l'utilisateur vers la page d'accueil en attendant la mise en place des profils
        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwdInput.classList.add("is-invalid");
    }

}

