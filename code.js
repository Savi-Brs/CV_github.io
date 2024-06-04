// Fonction pour changer l'image d'intervention en fonction du numéro donné
function intervention(numéro) {
    var image;
    // Sélectionner l'image en fonction du numéro
    if (numéro == 0) {
        image = "Pictures/Intervention 0.jpg";
    } else if (numéro == 1) {
        image = "Pictures/Intervention 1.jpg";
    } else {
        image = "Pictures/Intervention 2.jpg";
    }
    // Obtenir l'élément d'image par son ID
    var imgElement = document.getElementById('interventionImage');
    // Changer la source de l'image
    imgElement.src = image;
    // Redimensionner l'image
    imgElement.style.width = 'auto'; // Garder la largeur automatique pour maintenir le ratio
    imgElement.style.height = '400px'; // Définir la hauteur à 400px
}

// Fonction pour changer l'image ODM en fonction de la photo donnée
function ODM(photo) {
    var image;
    // Sélectionner l'image en fonction de la photo
    if (photo == 0) {
        image = "Pictures/ODM_logo.png";
    } else if (photo == 1) {
        image = "Pictures/ODM.png";
    } else {
        image = "Pictures/ODM2.png";
    }
    // Obtenir l'élément d'image par son ID
    var imgElement = document.getElementById('ODMImage');
    // Changer la source de l'image
    imgElement.src = image;
    // Redimensionner l'image
    imgElement.style.width = 'auto'; // Garder la largeur automatique pour maintenir le ratio
    imgElement.style.height = '400px'; // Définir la hauteur à 400px
}

// Fonction pour changer l'image JE en fonction de la photo donnée
function JE(photo) {
    var image;
    // Sélectionner l'image en fonction de la photo
    if (photo == 0) {
        image = "Pictures/JE_logo.jpg";
    } else if (photo == 1) {
        image = "Pictures/Alternateur.jpg";
    } else {
        image = "Pictures/SM.jpg";
    }
    // Obtenir l'élément d'image par son ID
    var imgElement = document.getElementById('JEImage');
    // Changer la source de l'image
    imgElement.src = image;
    // Redimensionner l'image
    imgElement.style.width = 'auto'; // Garder la largeur automatique pour maintenir le ratio
    imgElement.style.height = '400px'; // Définir la hauteur à 400px
}
