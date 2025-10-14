function moyenne(){
    var n1 = prompt("Donner la première note");
    var n2 = prompt("Donner la deuxième note");
    var n3 = prompt("Donner la troisième note");

    var somme = Number(n1) + Number(n2) + Number(n3);
    
    document.write("Voici la somme : " + somme + " <br> ");
    var moyenne = somme/3

    document.write("Voici la moyenne : " + moyenne + " <br> ");

    if (moyenne < 10) {
        document.write("Redoublant");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
    }
    else if (moyenne < 12) {
        document.write("Admis-Passable");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
        
    }
    else if (moyenne < 14) {
        document.write("Admis-Bien");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
        
    }
    else {
        document.write("Admis-Très Bien");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
        
    }
}

function temp(){
    var n1 = prompt("Quelle est la température actuelle ?");
    

    if (Number(n1) < 10) {
        document.write("Il fait" + " " + Number(n1) + "°C." + "Il fait froid");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
        
    }
    else if (Number(n1) < 25) {
        document.write("Il fait" + " " + Number(n1) + "°C." + "Il fait Normal")
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
        
    }
    else {
        document.write("Il fait" + " " + Number(n1) + "°C." + "Il fait Chaud")
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
        
    }
}

function compare(){
    var n1 = prompt("Donner un nombre");
    var n2 = prompt("Donner un autre nombre");

    
    if (Number(n1) < Number(n2)) {
        document.write(Number(n2) + "Est le plus grand." + "<br>" + Number(n1) + "Est le plus petit.");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');   
        
    }
    else {
        document.write(Number(n1) + "Est le plus grand." + "<br>" + Number(n2) + "Est le plus petit.");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write(" <br> ");
        document.write('<a href="index.html">Retour</a>');
    }   
    }