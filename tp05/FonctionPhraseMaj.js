// ===== EXERCICE FonctionPhraseMaj =====
// Description : Mettre la première lettre de chaque mot en majuscule
// Concepts : manipulation de chaînes, split(), boucles, réutilisation de fonctions

console.log("=== EXERCICE FonctionPhraseMaj ===\n");

// --- Fonction auxiliaire (réutilisée de l'exercice précédent) ---
// Cette fonction met la première lettre d'une chaîne en majuscule
function mettreEnMajuscule(chaine) {
    if (chaine.length === 0) {
        return chaine;
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// --- Définition de la fonction principale ---
// Cette fonction met la première lettre de chaque mot en majuscule
function mettrePhraseEnMajuscule(phrase) {
    // Étape 1 : Découper la phrase en mots (split sur les espaces)
    const mots = phrase.split(" ");

    // Étape 2 : Créer un tableau pour stocker les mots transformés
    const motsTransformes = [];

    // Étape 3 : Parcourir chaque mot et mettre sa première lettre en majuscule
    for (let i = 0; i < mots.length; i++) {
        const motAvecMajuscule = mettreEnMajuscule(mots[i]);
        motsTransformes.push(motAvecMajuscule);
    }

    // Étape 4 : Reconstruire la phrase en joignant les mots avec des espaces
    const phraseTransformee = motsTransformes.join(" ");

    return phraseTransformee;
}

// --- Tests ---
console.log("Test 1 :");
const phrase1 = "bonjour tout le monde";
console.log(`Entrée : "${phrase1}"`);
console.log(`Résultat : "${mettrePhraseEnMajuscule(phrase1)}"`);

console.log("\nTest 2 :");
const phrase2 = "javascript est un langage de programmation";
console.log(`Entrée : "${phrase2}"`);
console.log(`Résultat : "${mettrePhraseEnMajuscule(phrase2)}"`);

console.log("\nTest 3 :");
const phrase3 = "hello world";
console.log(`Entrée : "${phrase3}"`);
console.log(`Résultat : "${mettrePhraseEnMajuscule(phrase3)}"`);

console.log("\nTest 4 - Cas limites :");
const phrase4 = "a";
const phrase5 = "";
console.log(`Un mot "${phrase4}" → "${mettrePhraseEnMajuscule(phrase4)}"`);
console.log(`Chaîne vide "${phrase5}" → "${mettrePhraseEnMajuscule(phrase5)}"`);

console.log("\n" + "=".repeat(40));

// Note pédagogique : Composition de fonctions
//
// Principe important : Réutilisation du code
// - On a déjà une fonction qui met une lettre en majuscule
// - On la réutilise pour chaque mot de la phrase
// - Cela évite de dupliquer du code
//
// Méthodes de manipulation de chaînes :
//
// 1. split(separateur) : découpe une chaîne en tableau
//    - "hello world".split(" ") → ["hello", "world"]
//    - "a,b,c".split(",") → ["a", "b", "c"]
//
// 2. join(separateur) : reconstitue une chaîne depuis un tableau
//    - ["hello", "world"].join(" ") → "hello world"
//    - ["a", "b", "c"].join(",") → "a,b,c"
//
// Algorithme :
// 1. Découper la phrase en mots avec split(" ")
// 2. Pour chaque mot :
//    - Appeler la fonction mettreEnMajuscule()
//    - Stocker le résultat dans un nouveau tableau
// 3. Rejoindre les mots avec join(" ")
//
// Variantes syntaxiques :
//
// 1. Version concise avec map (méthode moderne) :
// function mettrePhraseEnMajuscule(phrase) {
//     return phrase.split(" ")
//                  .map(mot => mettreEnMajuscule(mot))
//                  .join(" ");
// }
//
// 2. Version ultra-concise :
// const mettrePhraseEnMajuscule = (phrase) =>
//     phrase.split(" ").map(mot => mot[0].toUpperCase() + mot.slice(1)).join(" ");
//
// 3. Sans fonction auxiliaire (tout en une) :
// function mettrePhraseEnMajuscule(phrase) {
//     const mots = phrase.split(" ");
//     const motsTransformes = [];
//     for (let i = 0; i < mots.length; i++) {
//         const mot = mots[i];
//         if (mot.length > 0) {
//             motsTransformes.push(mot[0].toUpperCase() + mot.slice(1));
//         }
//     }
//     return motsTransformes.join(" ");
// }
//
// Avantages de la réutilisation :
// - Code plus lisible et maintenable
// - Évite les bugs de duplication
// - Facilite les tests unitaires
// - Principe DRY (Don't Repeat Yourself)
