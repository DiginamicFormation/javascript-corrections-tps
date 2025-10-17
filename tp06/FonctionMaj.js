// ===== EXERCICE FonctionMaj - VERSION ROBUSTE (TP6) =====
// Description : Mettre la première lettre d'une chaîne en majuscule avec validation
// Concepts : manipulation de chaînes, validation de type
// Nouveauté TP6 : Validation que le paramètre est bien une chaîne de caractères

console.log("=== EXERCICE FonctionMaj - Version Robuste ===\n");

// --- Définition de la fonction ---
// Cette fonction met la première lettre d'une chaîne en majuscule
// Retourne un message d'erreur si le paramètre n'est pas une chaîne
function mettreEnMajuscule(chaine) {
    // Vérification : Le paramètre est-il une chaîne de caractères ?
    if (typeof chaine !== 'string') {
        return `Erreur : le paramètre doit être une chaîne de caractères (type reçu: ${typeof chaine})`;
    }

    // Si la chaîne est vide, on la retourne telle quelle
    if (chaine.length === 0) {
        return chaine;
    }

    // On prend la première lettre et on la met en majuscule
    const premiereLettreMaj = chaine.charAt(0).toUpperCase();

    // On prend le reste de la chaîne (à partir du caractère 1)
    const resteChaine = chaine.slice(1);

    // On concatène les deux parties
    return premiereLettreMaj + resteChaine;
}

// --- Test 1 : Avec une chaîne valide ---
console.log("Test 1 - Avec une chaîne valide :");
const texte1 = "bonjour";
console.log(`Entrée : "${texte1}"`);
const resultat1 = mettreEnMajuscule(texte1);
console.log(`Résultat : "${resultat1}"`);

// --- Test 2 : Avec une autre chaîne ---
console.log("\nTest 2 - Avec une autre chaîne :");
const texte2 = "javascript";
console.log(`Entrée : "${texte2}"`);
const resultat2 = mettreEnMajuscule(texte2);
console.log(`Résultat : "${resultat2}"`);

// --- Test 3 : Avec un nombre ---
console.log("\nTest 3 - Avec un nombre (invalide) :");
const texte3 = 12345;
console.log(`Entrée : ${texte3}`);
const resultat3 = mettreEnMajuscule(texte3);
console.log(`Résultat : ${resultat3}`);

// --- Test 4 : Avec un booléen ---
console.log("\nTest 4 - Avec un booléen (invalide) :");
const texte4 = true;
console.log(`Entrée : ${texte4}`);
const resultat4 = mettreEnMajuscule(texte4);
console.log(`Résultat : ${resultat4}`);

// --- Test 5 : Avec un objet ---
console.log("\nTest 5 - Avec un objet (invalide) :");
const texte5 = {texte: "hello"};
console.log(`Entrée :`, texte5);
const resultat5 = mettreEnMajuscule(texte5);
console.log(`Résultat : ${resultat5}`);

// --- Test 6 : Avec null ---
console.log("\nTest 6 - Avec null (invalide) :");
const texte6 = null;
console.log(`Entrée : ${texte6}`);
const resultat6 = mettreEnMajuscule(texte6);
console.log(`Résultat : ${resultat6}`);

// --- Test 7 : Cas limites avec des chaînes ---
console.log("\nTest 7 - Cas limites avec des chaînes valides :");
console.log(`Chaîne vide "" → "${mettreEnMajuscule("")}"`);
console.log(`Un caractère "a" → "${mettreEnMajuscule("a")}"`);
console.log(`Déjà en majuscule "Hello" → "${mettreEnMajuscule("Hello")}"`);

console.log("\n" + "=".repeat(40));

// Note pédagogique : Validation de type pour chaînes
//
// NOUVEAUTÉ TP6 : Vérifier le type avant traitement
//
// Différence TP5 vs TP6 :
//
// TP5 : Aucune validation
// function mettreEnMajuscule(chaine) {
//     if (chaine.length === 0) return chaine;
//     return chaine.charAt(0).toUpperCase() + chaine.slice(1);
// }
// mettreEnMajuscule(123) → CRASH ! (TypeError: chaine.charAt is not a function)
//
// TP6 : Validation en amont
// function mettreEnMajuscule(chaine) {
//     if (typeof chaine !== 'string') {
//         return "Erreur : le paramètre doit être une chaîne de caractères";
//     }
//     if (chaine.length === 0) return chaine;
//     return chaine.charAt(0).toUpperCase() + chaine.slice(1);
// }
// mettreEnMajuscule(123) → Message d'erreur clair (pas de crash)
//
// Pourquoi cette validation est cruciale :
// - Les méthodes de chaînes (charAt, slice, etc.) ne fonctionnent que sur des strings
// - Sans validation, le code crashe avec des types incompatibles
// - Meilleure expérience utilisateur (message clair vs crash)
//
// Types qui ne sont pas des strings :
// - number : 123, 45.67, NaN, Infinity
// - boolean : true, false
// - object : {}, [], null
// - undefined : undefined
// - function : function() {}
//
// Comportement sans validation :
// mettreEnMajuscule(123) → TypeError: chaine.charAt is not a function
// mettreEnMajuscule(null) → TypeError: Cannot read property 'length' of null
// mettreEnMajuscule(undefined) → TypeError: Cannot read property 'length' of undefined
//
// Avec validation :
// Tous ces cas retournent un message d'erreur explicite
//
// Variante avec throw :
// function mettreEnMajuscule(chaine) {
//     if (typeof chaine !== 'string') {
//         throw new TypeError("Le paramètre doit être une chaîne de caractères");
//     }
//     if (chaine.length === 0) return chaine;
//     return chaine.charAt(0).toUpperCase() + chaine.slice(1);
// }
//
// Variante avec conversion automatique :
// function mettreEnMajuscule(chaine) {
//     // Convertir en string si ce n'en est pas une
//     chaine = String(chaine);
//     if (chaine.length === 0) return chaine;
//     return chaine.charAt(0).toUpperCase() + chaine.slice(1);
// }
// mettreEnMajuscule(123) → "123" (fonctionne, mais change le comportement)
//
// Quelle approche choisir ?
// - throw : Pour les bibliothèques et le code strict
// - return message : Pour les applications pédagogiques
// - conversion : Pour les fonctions utilitaires permissives
//
// Le choix dépend du contexte et des besoins !
