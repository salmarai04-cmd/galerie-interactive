function upDate(previewPic) {
    console.log("mouseover:", previewPic.alt, previewPic.src);

    let displayDiv = document.getElementById("image");

    // Mettre à jour le texte
    displayDiv.innerHTML = previewPic.alt;

    // Mettre à jour l'image de fond
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("mouseout déclenché");

    let displayDiv = document.getElementById("image");

    // Texte d'origine
    displayDiv.innerHTML = "Hover over an image below to display here.";

    // Image d'arrière-plan vide
    displayDiv.style.backgroundImage = "url('')";
}
