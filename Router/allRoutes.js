import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    // new Route("/accueil", "Accueil", "/pages/home.html"),
    // new Route("/home", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/gallery.html"),
    // new Route("/gallery", "La Galerie", "/pages/gallery.html"),
    new Route("/connexion", "Connexion", "/pages/signin.html"),
    new Route("/inscription", "Inscription", "/pages/signup.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";