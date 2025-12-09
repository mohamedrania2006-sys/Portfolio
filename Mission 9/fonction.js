/* Ouhichi Mohamed Aziz*/

const reponses_correctes = [
    // Q1: Dracaufeu (a), Aligatueur (b)
    ['a', 'b'],    
    // Q2: Méga-Rayquaza (a)
    ['a'],         
    // Q3: Hoenn (a)
    ['a'],     
    // Q4: Clepto-Mâne (a)
    ['a'],       
    // Q5: Téméraire (a), Intimidation (b)
    ['a', 'b'],   
    // Q6: Lunatique (b)
    ['b'],        
    // Q7: Regieleki (a)
    ['a'],      
    // Q8: Kalos (c)
    ['c'],        
    // Q9: Reshiram (a), Zekrom (b)
    ['a', 'b'],   
    // Q10: Galéking (b)
    ['b']         
];

function testqcm() {
    let score = 0;
    const form = document.forms["qcm"];
    
    
    for (let i = 1; i <= 10; i++) {
        const nomQuestion = `q${i}`;
        const inputs = form.elements[nomQuestion];
        
        let estCorrecte = true;
        let reponsesCochees = [];

        
        for (const input of inputs) {
            if (input.checked) {
                reponsesCochees.push(input.value);
            }
        }

        const bonnesReponses = reponses_correctes[i - 1]; 

        const estUnSousEnsemble = reponsesCochees.every(val => bonnesReponses.includes(val));
        estCorrecte = estUnSousEnsemble && (reponsesCochees.length === bonnesReponses.length);

        if (estCorrecte) {
            score++; 
        }
        
        const questionDiv = document.getElementById(`q-${i}`); 
        if (questionDiv) {
            questionDiv.style.border = estCorrecte ? '2px solid green' : '2px solid red';
            questionDiv.style.padding = '10px'; 
        }
    }

    document.getElementById("resultat").innerHTML = `Votre score est de ${score} / 10 !`;
}


function afficherCorrigé() {
    let contenuCorrigé = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Corrigé du Quiz Pokémon</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #0056b3; }
                li { margin-bottom: 15px; }
                p { font-weight: bold; color: green; }
                button { padding: 10px 15px; margin-top: 20px; cursor: pointer; }
            </style>
        </head>
        <body>
            <h1>Corrigé du Quiz sur l'univers de Pokémon</h1>
            <ol>
                <li>
                    <h3>Question 1 : Quels Pokémons obtient le type dragon en méga-évoluant depuis pokémon Legends: ZA ?</h3>
                    <p>Réponse : Dracaufeu et Aligatueur</p>
                </li>
                <li>
                    <h3>Question 2 : Quel Pokémon fût le premier à avoir été banni en AG (Anything Goes) ?</h3>
                    <p>Réponse : Méga-Rayquaza</p>
                </li>
                <li>
                    <h3>Question 3 : Dans Quelle Région se déroule les jeux Pokémon Ruby, Saphire et Emeraude ?</h3>
                    <p>Réponse : Hoenn</p>
                </li>
                <li>
                    <h3>Question 4 : Quel est l'attaque signature de Marshadow ?</h3>
                    <p>Réponse : Clepto-Mâne</p>
                </li>
                <li>
                    <h3>Question 5 : Quels sont les 2 Talents D'Etouraptor ?</h3>
                    <p>Réponse : Téméraire et Intimidation</p>
                </li>
                <li>
                    <h3>Question 6 : Quel Talent Pokémon reduit d'1 cran une statistiques et en monte une autre de 2 cran de manière aléatoire ?</h3>
                    <p>Réponse : Lunatique</p>
                </li>
                <li>
                    <h3>Question 7 : Quel est le Pokémon avec la vitesse de base la plus rapide du jeu ?</h3>
                    <p>Réponse : Regieleki</p>
                </li>
                <li>
                    <h3>Question 8 : Quelle région Pokémon est inspiré de La France</h3>
                    <p>Réponse : Kalos</p>
                </li>
                <li>
                    <h3>Question 9 : Quels sont les Pokémon représentant le Yin et le Yang ?</h3>
                    <p>Réponse : Reshiram et Zekrom</p>
                </li>
                <li>
                    <h3>Question 10 : Quel pokémon, en Méga-évoluant, perd un type ?</h3>
                    <p>Réponse : Galéking</p>
                </li>
            </ol>
            <button onclick="window.close()">Fermer la fenêtre</button>
        </body>
        </html>
    `;

    const fenetreCorrigé = window.open("", "Corrigé", "width=600,height=500,scrollbars=yes");
    
    fenetreCorrigé.document.write(contenuCorrigé);
    fenetreCorrigé.document.close();
}


function effacerCoches() {
    document.forms["qcm"].reset(); 
    
    document.getElementById("resultat").innerHTML = ""; 
    
    for (let i = 1; i <= 10; i++) {
        const questionDiv = document.getElementById(`q-${i}`);
        if (questionDiv) {
            questionDiv.style.border = 'none'; 
            questionDiv.style.padding = '0';
        }
    }
}
