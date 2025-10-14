function moyenne(){
    var n1 = prompt("Donner la première note");
    var n2 = prompt("Donner la deuxième note");
    var n3 = prompt("Donner la troisième note");

    var somme = Number(n1) + Number(n2) + Number(n3);
    
    document.write("Voici la somme : " + somme + " <br> ");
    var moyenne = somme/3

    document.write("Voici la moyenne : " + moyenne + " <br> ");

    if (moyenne < 10) {
        document.write("Vous avez Flop dommage");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        
    }
    else {
        document.write("Bravo t'est à ton Prime");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        
    }
}

function age(){
    var age = prompt("Donner la première note")
    
    document.write("Voici votre âge : " + age + " <br> ");

    if (age < 18) {
        document.write("T'es trop jeune, Va faire tes devoirs");
        document.bgColor = "red"
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        
    }
    else {
        document.write("T'es majeur, kiffe ta vie mec ");
        document.bgColor = "green"
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        
    }
}


function nomprenom(){
    var nom = prompt("Donner le Nom")
    var prenom = prompt("Donner le Prénom")
    
    document.write('<div style="margin: auto; width: 300px; border: 2px solid blue;"> ');
    document.write("Bonjour : " + prenom + " " + nom );
    document.write(" </div> ");
    document.write(" <br> ");
    document.write(" <br> ");
    document.write(" <br> ");
    

}

function couleur(){
    var couleur = prompt("Donner la première note");

    if (couleur == "rouge" || couleur == "red") {
        document.body.style.backgroundColor = "red"
    }
    else if(couleur == "bleu" || couleur == "blue") {
        document.body.style.backgroundColor = "blue"
    }

    else if(couleur == "vert" || couleur == "green") {
        document.body.style.backgroundColor = "green"
    }

    else if(couleur == "violet" || couleur == "purple") {
        document.body.style.backgroundColor = "purple"
    }
}
