// ===== EXERCICE Addition (TP8) =====
// Description : Additionner deux nombres saisis par l'utilisateur avec validation
// Concepts : querySelector, getElementById, validation de saisie, manipulation DOM, événements

/**
 * Fonction appelée lors du clic sur le bouton "Calculer"
 * Elle récupère les valeurs des champs, les valide et affiche le résultat
 */
function calculerAddition() {
    console.log("=== EXERCICE Addition ===\n");

    // --- ETAPE 1 : Récupérer les éléments du DOM ---
    // querySelector permet de sélectionner un élément par son sélecteur CSS
    // getElementById fait la même chose avec l'attribut id
    const champNombre1 = document.getElementById("nombre1");
    const champNombre2 = document.getElementById("nombre2");
    const spanResultat = document.getElementById("resultat");

    // --- ETAPE 2 : Récupérer les valeurs saisies ---
    // .value permet d'obtenir la valeur d'un champ input
    const valeur1 = champNombre1.value;
    const valeur2 = champNombre2.value;

    console.log("Valeur 1 saisie :", valeur1);
    console.log("Valeur 2 saisie :", valeur2);

    // --- ETAPE 3 : Validation des saisies ---
    // isNaN() vérifie si une valeur n'est pas un nombre (is Not a Number)
    // On teste aussi si les champs ne sont pas vides
    if (valeur1 === "" || valeur2 === "" || isNaN(valeur1) || isNaN(valeur2)) {
        console.log("Erreur : Les valeurs saisies ne sont pas valides");

        // Afficher un message d'erreur sur fond rouge
        spanResultat.textContent = "Vous devez saisir un nombre";
        spanResultat.className = "erreur"; // Applique la classe CSS "erreur"

        return; // On arrête la fonction ici
    }

    // --- ETAPE 4 : Conversion en nombres ---
    // Les valeurs des champs input sont toujours des chaînes de caractères
    // On les convertit en nombres avec parseFloat() (ou Number())
    const nombre1 = parseFloat(valeur1);
    const nombre2 = parseFloat(valeur2);

    console.log("Nombre 1 :", nombre1);
    console.log("Nombre 2 :", nombre2);

    // --- ETAPE 5 : Calcul de l'addition ---
    const resultat = nombre1 + nombre2;
    console.log("Résultat :", resultat);

    // --- ETAPE 6 : Affichage du résultat ---
    spanResultat.textContent = "Le résultat de l'addition est : " + resultat;
    spanResultat.className = "succes"; // Applique la classe CSS "succes"

    console.log("\n" + "=".repeat(40));
}

// ⚠️ NOTE PÉDAGOGIQUE : querySelector vs getElementById
//
// Il existe plusieurs façons de sélectionner des éléments dans le DOM :
//
// 1. getElementById("monId") - Sélectionne un élément par son id
//    const element = document.getElementById("resultat");
//
// 2. querySelector("#monId") - Utilise un sélecteur CSS
//    const element = document.querySelector("#resultat");
//
// 3. querySelector(".maClasse") - Sélectionne le premier élément avec cette classe
//    const element = document.querySelector(".erreur");
//
// 4. querySelectorAll(".maClasse") - Sélectionne tous les éléments avec cette classe
//    const elements = document.querySelectorAll(".erreur");
//
// Pour cet exercice, on utilise getElementById car on a des id uniques.
// querySelector est plus flexible mais légèrement plus lent.

// ⚠️ NOTE PÉDAGOGIQUE : Validation de nombres
//
// Pour vérifier qu'une valeur est un nombre, on peut utiliser :
//
// 1. isNaN(value) - Retourne true si ce n'est PAS un nombre
//    if (isNaN("abc")) { } // true
//    if (isNaN("123")) { } // false
//
// 2. typeof - Vérifie le type de la variable
//    if (typeof value === "number") { }
//
// 3. Number.isNaN() - Version moderne plus stricte
//    if (Number.isNaN(value)) { }
//
// Dans notre cas, on combine plusieurs vérifications :
// - Champ vide : valeur === ""
// - Pas un nombre : isNaN(valeur)

// ⚠️ NOTE PÉDAGOGIQUE : Manipulation du DOM
//
// Pour modifier le contenu et l'apparence d'un élément :
//
// 1. textContent - Modifie le texte (sécurisé, recommandé)
//    element.textContent = "Nouveau texte";
//
// 2. innerHTML - Permet d'insérer du HTML (attention XSS !)
//    element.innerHTML = "<strong>Texte</strong>";
//
// 3. className - Change la classe CSS
//    element.className = "erreur";
//
// 4. classList - Ajoute/supprime des classes
//    element.classList.add("erreur");
//    element.classList.remove("erreur");
