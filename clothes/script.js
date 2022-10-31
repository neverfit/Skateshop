function displayPics () {
    var photos = document.getElementById('galerie_mini'); //on recupere l'element galerie_mini
    var liens = photos.getElementsByTagName('a'); //on recupere dans une variable tous les liens dans galerie_mini
    var big_photo = document.getElementById('big_pic'); //on recupere big_pic
    
    var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0]; //et enfin le titre de la photo en taille normale
    
    //Une boucle parcourant l'ensemble des liens dans galerie_mini
    for (var i = 0; i < liens.length; i++) {
        //au clique sur ces liens
        liens[i].onclick = function() {
            big_photo.src = this.href; //on change l'attribut de l'image en le remplaçcant par la valeur du lien
            big_photo.alt = this.title; //on change son titre
            titre_photo.firstChild.nodeValue = this.title; //on change le texte du titre
            return false; //et pour finir on inhibe l'action réelle du lien
        };
    }
}

//enfin on appelle la fonction
window.onload = displayPics;