// ===== EXERCICE FonctionMoyenne - VERSION ROBUSTE (TP6) =====
// Description : Calculer la moyenne d'un tableau avec gestion d'exceptions
// Concepts : fonction, exceptions (throw), try/catch, validation de données
// Nouveauté TP6 : Utilisation de throw pour lever des exceptions

console.log("=== EXERCICE FonctionMoyenne - Version Robuste ===\n");

// --- Définition de la fonction ---
// Cette fonction calcule la moyenne d'un tableau en levant des exceptions en cas d'erreur
function calculerMoyenne(tableau) {
    // Vérification 1 : Le paramètre est-il un tableau ?
    if (!Array.isArray(tableau)) {
        throw new Error("Le paramètre doit être un tableau");
    }

    // Vérification 2 : Le tableau est-il vide ?
    if (tableau.length === 0) {
        return 0; // Retourne 0 pour un tableau vide
    }

    // Vérification 3 : Tous les éléments sont-ils des nombres ?
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== 'number') {
            throw new Error(`L'élément à l'index ${i} n'est pas un nombre (valeur: ${tableau[i]})`);
        }
    }

    // Calcul de la somme
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    // Calcul de la moyenne
    const moyenne = somme / tableau.length;
    return moyenne;
}

// --- Test 1 : Tableau contenant des nombres (avec try/catch) ---
console.log("Test 1 - Tableau contenant uniquement des nombres :");
try {
    const tableau1 = [10, 15, 20, 5];
    console.log("Tableau :", tableau1);
    const resultat1 = calculerMoyenne(tableau1);
    console.log("✓ Résultat :", resultat1);
    console.log("Détail : (10 + 15 + 20 + 5) / 4 = 50 / 4 = 12.5");
} catch (erreur) {
    console.log("✗ Erreur attrapée :", erreur.message);
}

// --- Test 2 : Tableau contenant des nombres et une chaîne ---
console.log("\nTest 2 - Tableau contenant des nombres et une chaîne :");
try {
    const tableau2 = [10, 15, "texte", 20];
    console.log("Tableau :", tableau2);
    const resultat2 = calculerMoyenne(tableau2);
    console.log("✓ Résultat :", resultat2);
} catch (erreur) {
    console.log("✗ Erreur attrapée :", erreur.message);
    console.log("Explication : La fonction a détecté un élément qui n'est pas un nombre");
}

// --- Test 3 : Paramètre qui n'est pas un tableau ---
console.log("\nTest 3 - Paramètre qui n'est pas un tableau :");
try {
    const parametre3 = "ceci n'est pas un tableau";
    console.log("Paramètre :", parametre3);
    const resultat3 = calculerMoyenne(parametre3);
    console.log("✓ Résultat :", resultat3);
} catch (erreur) {
    console.log("✗ Erreur attrapée :", erreur.message);
    console.log("Explication : La fonction a détecté que le paramètre n'est pas un tableau");
}

// --- Test 4 : Tableau vide ---
console.log("\nTest 4 - Tableau vide :");
try {
    const tableau4 = [];
    console.log("Tableau :", tableau4);
    const resultat4 = calculerMoyenne(tableau4);
    console.log("✓ Résultat :", resultat4);
    console.log("Explication : Pas d'exception levée, retourne 0");
} catch (erreur) {
    console.log("✗ Erreur attrapée :", erreur.message);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Gestion d'erreurs avec throw et try/catch
//
// NOUVEAUTÉ TP6 : Lever des exceptions
//
// throw new Error(message) :
// - Permet de lever une exception (arrêter l'exécution normale)
// - Crée une erreur avec un message explicatif
// - L'erreur remonte jusqu'à être attrapée par un bloc catch
//
// Blocs try/catch :
// try {
//     // Code susceptible de lever une exception
// } catch (erreur) {
//     // Code exécuté si une exception est levée
//     // erreur.message contient le message de l'erreur
// }
//
// Différence entre TP5 et TP6 :
//
// TP5 : Retourne un message d'erreur
// if (!Array.isArray(tableau)) {
//     return "Erreur : le paramètre doit être un tableau";
// }
//
// TP6 : Lève une exception
// if (!Array.isArray(tableau)) {
//     throw new Error("Le paramètre doit être un tableau");
// }
//
// Avantages de throw :
// - Sépare le code "normal" du code de gestion d'erreur
// - Force l'appelant à gérer l'erreur (ou le programme plante)
// - Permet de remonter l'erreur dans la pile d'appels
// - Plus professionnel et standard en JavaScript
//
// Quand utiliser throw vs return :
// - throw : Pour les erreurs qui ne devraient pas arriver (bug, mauvaise utilisation)
// - return : Pour les cas normaux (résultat valide ou état attendu)
//
// Types d'erreurs en JavaScript :
// - Error : erreur générique
// - TypeError : erreur de type
// - RangeError : erreur de plage/intervalle
// - ReferenceError : erreur de référence
//
// Exemple avec TypeError :
// throw new TypeError("Le paramètre doit être un tableau");
//
// Variante moderne avec validation :
// function calculerMoyenne(tableau) {
//     if (!Array.isArray(tableau)) {
//         throw new TypeError("Le paramètre doit être un tableau");
//     }
//     if (tableau.length === 0) return 0;
//     if (!tableau.every(el => typeof el === 'number')) {
//         throw new TypeError("Tous les éléments doivent être des nombres");
//     }
//     return tableau.reduce((acc, val) => acc + val, 0) / tableau.length;
// }
