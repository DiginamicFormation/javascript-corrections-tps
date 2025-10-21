// ===== EXERCICE Operation (TP8) =====
// Description : Calculatrice avec 4 opérations arithmétiques (+, -, *, /)
// Concepts : querySelector, select, validation, switch/case, manipulation DOM

/**
 * Fonction appelée lors du clic sur le bouton "Calculer"
 * Elle effectue l'opération sélectionnée par l'utilisateur
 */
function calculerOperation() {
    console.log("=== EXERCICE Operation ===\n");

    // --- ETAPE 1 : Récupérer les éléments du DOM ---
    const champNombre1 = document.getElementById("nombre1");
    const champNombre2 = document.getElementById("nombre2");
    const selectOperateur = document.getElementById("operateur");
    const spanResultat = document.getElementById("resultat");

    // --- ETAPE 2 : Récupérer les valeurs saisies ---
    const valeur1 = champNombre1.value;
    const valeur2 = champNombre2.value;
    // Pour un select, .value donne la valeur de l'option sélectionnée
    const operateur = selectOperateur.value;

    console.log("Valeur 1 :", valeur1);
    console.log("Valeur 2 :", valeur2);
    console.log("Opérateur :", operateur);

    // --- ETAPE 3 : Validation des saisies ---
    if (valeur1 === "" || valeur2 === "" || isNaN(valeur1) || isNaN(valeur2)) {
        console.log("Erreur : Les valeurs saisies ne sont pas valides");

        spanResultat.textContent = "Vous devez saisir un nombre";
        spanResultat.className = "erreur";

        return;
    }

    // --- ETAPE 4 : Conversion en nombres ---
    const nombre1 = parseFloat(valeur1);
    const nombre2 = parseFloat(valeur2);

    console.log("Nombre 1 :", nombre1);
    console.log("Nombre 2 :", nombre2);

    // --- ETAPE 5 : Calcul en fonction de l'opérateur ---
    // On utilise une structure switch pour gérer les différents cas
    let resultat;
    let nomOperation;

    switch (operateur) {
        case "+":
            resultat = nombre1 + nombre2;
            nomOperation = "l'addition";
            break;
        case "-":
            resultat = nombre1 - nombre2;
            nomOperation = "la soustraction";
            break;
        case "*":
            resultat = nombre1 * nombre2;
            nomOperation = "la multiplication";
            break;
        case "/":
            // ⭐ Cas particulier : division par zéro
            if (nombre2 === 0) {
                spanResultat.textContent = "Erreur : Division par zéro impossible";
                spanResultat.className = "erreur";
                console.log("Erreur : Division par zéro");
                return;
            }
            resultat = nombre1 / nombre2;
            nomOperation = "la division";
            break;
        default:
            spanResultat.textContent = "Erreur : Opérateur inconnu";
            spanResultat.className = "erreur";
            return;
    }

    console.log("Résultat :", resultat);

    // --- ETAPE 6 : Affichage du résultat ---
    spanResultat.textContent = "Le résultat de " + nomOperation + " est : " + resultat;
    spanResultat.className = "succes";

    console.log("\n" + "=".repeat(40));
}

// ⚠️ NOTE PÉDAGOGIQUE : Élément <select>
//
// Pour récupérer la valeur sélectionnée dans un <select> :
//
// 1. Récupérer l'élément select
//    const select = document.getElementById("operateur");
//
// 2. Obtenir la valeur de l'option sélectionnée
//    const valeur = select.value;
//
// 3. Obtenir le texte de l'option sélectionnée
//    const texte = select.options[select.selectedIndex].text;
//
// Dans notre cas, on utilise simplement .value pour obtenir "+", "-", "*" ou "/"

// ⚠️ NOTE PÉDAGOGIQUE : Switch vs If/Else
//
// Le switch est recommandé quand on a plusieurs valeurs possibles à tester :
//
// switch (operateur) {
//     case "+":
//         // Code pour l'addition
//         break;
//     case "-":
//         // Code pour la soustraction
//         break;
//     default:
//         // Code si aucun cas ne correspond
// }
//
// Équivalent avec if/else (moins lisible) :
// if (operateur === "+") {
//     // Code pour l'addition
// } else if (operateur === "-") {
//     // Code pour la soustraction
// } else {
//     // Code par défaut
// }
//
// Le mot-clé "break" est IMPORTANT : il arrête l'exécution du switch.
// Sans break, le code continuerait à exécuter les cas suivants !

// ⚠️ NOTE PÉDAGOGIQUE : Cas particuliers mathématiques
//
// Certaines opérations nécessitent des vérifications :
//
// 1. Division par zéro : toujours vérifier que le diviseur n'est pas 0
//    if (nombre2 === 0) { return; }
//
// 2. Racine carrée d'un nombre négatif : vérifier que le nombre est positif
//    if (nombre < 0) { return; }
//
// 3. Dépassement de capacité : les très grands nombres peuvent donner Infinity
//    if (resultat === Infinity) { return; }
