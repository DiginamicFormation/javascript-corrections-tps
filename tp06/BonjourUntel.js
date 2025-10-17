// ===== EXERCICE BonjourUntel - VERSION ROBUSTE (TP6) =====
// Description : Afficher "Bonjour" + nom avec validation de type
// Concepts : fonction avec paramètre, validation de type, messages d'erreur
// Nouveauté TP6 : Validation du type de paramètre

console.log("=== EXERCICE BonjourUntel - Version Robuste ===\n");

// --- Définition de la fonction ---
// Cette fonction vérifie que le paramètre est bien une chaîne de caractères
function direBonjour(nom) {
    // Vérification : Le paramètre est-il une chaîne de caractères ?
    if (typeof nom !== 'string') {
        return `Erreur : le paramètre doit être une chaîne de caractères (reçu: ${typeof nom})`;
    }

    console.log("Bonjour " + nom);
}

// --- Test 1 : Avec une chaîne de caractères valide ---
console.log("Test 1 - Avec une chaîne de caractères :");
const resultat1 = direBonjour("Marcel");
if (resultat1) {
    console.log(resultat1);
}

console.log("\nTest 2 - Avec une autre chaîne :");
const resultat2 = direBonjour("Sophie");
if (resultat2) {
    console.log(resultat2);
}

// --- Test 3 : Avec un nombre ---
console.log("\nTest 3 - Avec un nombre (invalide) :");
const resultat3 = direBonjour(123);
if (resultat3) {
    console.log(resultat3);
}

// --- Test 4 : Avec un booléen ---
console.log("\nTest 4 - Avec un booléen (invalide) :");
const resultat4 = direBonjour(true);
if (resultat4) {
    console.log(resultat4);
}

// --- Test 5 : Avec un objet ---
console.log("\nTest 5 - Avec un objet (invalide) :");
const resultat5 = direBonjour({nom: "Marcel"});
if (resultat5) {
    console.log(resultat5);
}

// --- Test 6 : Avec undefined ---
console.log("\nTest 6 - Avec undefined (invalide) :");
const resultat6 = direBonjour(undefined);
if (resultat6) {
    console.log(resultat6);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Validation de type
//
// NOUVEAUTÉ TP6 : Contrôle du type de paramètre
//
// typeof permet de vérifier le type d'une variable :
// - typeof "texte" === 'string'
// - typeof 123 === 'number'
// - typeof true === 'boolean'
// - typeof undefined === 'undefined'
// - typeof null === 'object' (quirk JavaScript)
// - typeof {} === 'object'
// - typeof [] === 'object'
//
// Différence TP5 vs TP6 :
//
// TP5 : Pas de validation
// function direBonjour(nom) {
//     console.log("Bonjour " + nom);
// }
//
// TP6 : Validation du type
// function direBonjour(nom) {
//     if (typeof nom !== 'string') {
//         return "Erreur : le paramètre doit être une chaîne de caractères";
//     }
//     console.log("Bonjour " + nom);
// }
//
// Comportement sans validation :
// direBonjour(123) → affiche "Bonjour 123"
// direBonjour(true) → affiche "Bonjour true"
// direBonjour({nom: "Marcel"}) → affiche "Bonjour [object Object]"
//
// Avec validation :
// direBonjour(123) → retourne un message d'erreur
//
// Bonne pratique :
// - Toujours valider les types des paramètres
// - Retourner des messages d'erreur explicites
// - Documenter les types attendus
//
// Variante avec throw (plus stricte) :
// function direBonjour(nom) {
//     if (typeof nom !== 'string') {
//         throw new TypeError("Le paramètre doit être une chaîne de caractères");
//     }
//     console.log("Bonjour " + nom);
// }
//
// Variante avec template literals :
// function direBonjour(nom) {
//     if (typeof nom !== 'string') {
//         return `Erreur : attendu string, reçu ${typeof nom}`;
//     }
//     console.log(`Bonjour ${nom}`);
// }
//
// Pourquoi return et pas throw ici ?
// - L'énoncé demande un "message d'erreur"
// - return permet de continuer l'exécution
// - throw arrêterait brutalement le programme sans try/catch
// - Les deux approches sont valides selon le contexte
