// ===== EXERCICE FonctionPhraseMaj - VERSION ROBUSTE (TP6) =====
// Description : Mettre la première lettre de chaque mot en majuscule avec validation
// Concepts : manipulation de chaînes, réutilisation de fonctions, validation
// Nouveauté TP6 : Validation que le paramètre est bien une chaîne de caractères

console.log("=== EXERCICE FonctionPhraseMaj - Version Robuste ===\n");

// --- Fonction auxiliaire (avec validation) ---
// Cette fonction met la première lettre d'une chaîne en majuscule
function mettreEnMajuscule(chaine) {
    if (typeof chaine !== 'string') {
        return `Erreur : le paramètre doit être une chaîne de caractères`;
    }
    if (chaine.length === 0) {
        return chaine;
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// --- Définition de la fonction principale ---
// Cette fonction met la première lettre de chaque mot en majuscule
function mettrePhraseEnMajuscule(phrase) {
    // Vérification : Le paramètre est-il une chaîne de caractères ?
    if (typeof phrase !== 'string') {
        return `Erreur : le paramètre doit être une chaîne de caractères (type reçu: ${typeof phrase})`;
    }

    // Étape 1 : Découper la phrase en mots (split sur les espaces)
    const mots = phrase.split(" ");

    // Étape 2 : Créer un tableau pour stocker les mots transformés
    const motsTransformes = [];

    // Étape 3 : Parcourir chaque mot et mettre sa première lettre en majuscule
    for (let i = 0; i < mots.length; i++) {
        const motAvecMajuscule = mettreEnMajuscule(mots[i]);

        // Vérifier que mettreEnMajuscule n'a pas retourné d'erreur
        if (motAvecMajuscule.startsWith("Erreur")) {
            return motAvecMajuscule; // Propager l'erreur
        }

        motsTransformes.push(motAvecMajuscule);
    }

    // Étape 4 : Reconstruire la phrase en joignant les mots avec des espaces
    const phraseTransformee = motsTransformes.join(" ");

    return phraseTransformee;
}

// --- Test 1 : Avec une chaîne valide ---
console.log("Test 1 - Avec une chaîne valide :");
const phrase1 = "bonjour tout le monde";
console.log(`Entrée : "${phrase1}"`);
const resultat1 = mettrePhraseEnMajuscule(phrase1);
console.log(`Résultat : "${resultat1}"`);

// --- Test 2 : Avec une autre phrase ---
console.log("\nTest 2 - Avec une autre phrase :");
const phrase2 = "javascript est un langage de programmation";
console.log(`Entrée : "${phrase2}"`);
const resultat2 = mettrePhraseEnMajuscule(phrase2);
console.log(`Résultat : "${resultat2}"`);

// --- Test 3 : Avec un nombre ---
console.log("\nTest 3 - Avec un nombre (invalide) :");
const phrase3 = 12345;
console.log(`Entrée : ${phrase3}`);
const resultat3 = mettrePhraseEnMajuscule(phrase3);
console.log(`Résultat : ${resultat3}`);

// --- Test 4 : Avec un booléen ---
console.log("\nTest 4 - Avec un booléen (invalide) :");
const phrase4 = false;
console.log(`Entrée : ${phrase4}`);
const resultat4 = mettrePhraseEnMajuscule(phrase4);
console.log(`Résultat : ${resultat4}`);

// --- Test 5 : Avec un tableau ---
console.log("\nTest 5 - Avec un tableau (invalide) :");
const phrase5 = ["hello", "world"];
console.log(`Entrée :`, phrase5);
const resultat5 = mettrePhraseEnMajuscule(phrase5);
console.log(`Résultat : ${resultat5}`);

// --- Test 6 : Avec undefined ---
console.log("\nTest 6 - Avec undefined (invalide) :");
const phrase6 = undefined;
console.log(`Entrée : ${phrase6}`);
const resultat6 = mettrePhraseEnMajuscule(phrase6);
console.log(`Résultat : ${resultat6}`);

// --- Test 7 : Cas limites avec des chaînes valides ---
console.log("\nTest 7 - Cas limites avec des chaînes valides :");
console.log(`Chaîne vide "" → "${mettrePhraseEnMajuscule("")}"`);
console.log(`Un seul mot "bonjour" → "${mettrePhraseEnMajuscule("bonjour")}"`);
console.log(`Déjà en majuscules "Hello World" → "${mettrePhraseEnMajuscule("Hello World")}"`);

console.log("\n" + "=".repeat(40));

// Note pédagogique : Validation dans des fonctions composées
//
// NOUVEAUTÉ TP6 : Validation à plusieurs niveaux
//
// Différence TP5 vs TP6 :
//
// TP5 : Aucune validation
// function mettrePhraseEnMajuscule(phrase) {
//     const mots = phrase.split(" ");
//     const motsTransformes = [];
//     for (let i = 0; i < mots.length; i++) {
//         motsTransformes.push(mettreEnMajuscule(mots[i]));
//     }
//     return motsTransformes.join(" ");
// }
// mettrePhraseEnMajuscule(123) → CRASH ! (TypeError: phrase.split is not a function)
//
// TP6 : Validation en amont
// function mettrePhraseEnMajuscule(phrase) {
//     if (typeof phrase !== 'string') {
//         return "Erreur : le paramètre doit être une chaîne de caractères";
//     }
//     // ... reste du code
// }
// mettrePhraseEnMajuscule(123) → Message d'erreur clair
//
// Principes de validation dans les fonctions composées :
//
// 1. Valider au plus tôt :
//    - Vérifier les types avant tout traitement
//    - Évite des calculs inutiles si les données sont invalides
//
// 2. Valider à chaque niveau :
//    - mettrePhraseEnMajuscule valide son paramètre
//    - mettreEnMajuscule valide aussi son paramètre
//    - Double protection (defense in depth)
//
// 3. Propager les erreurs :
//    - Si une fonction auxiliaire retourne une erreur
//    - La fonction principale doit la détecter et la propager
//
// Exemple de propagation d'erreur :
// const motAvecMajuscule = mettreEnMajuscule(mots[i]);
// if (motAvecMajuscule.startsWith("Erreur")) {
//     return motAvecMajuscule; // Propager l'erreur
// }
//
// Comportement sans validation :
// mettrePhraseEnMajuscule(123) → TypeError
// mettrePhraseEnMajuscule(null) → TypeError
// mettrePhraseEnMajuscule([]) → Comportement inattendu
//
// Avec validation :
// Tous ces cas retournent un message d'erreur explicite
//
// Variante avec throw (plus stricte) :
// function mettrePhraseEnMajuscule(phrase) {
//     if (typeof phrase !== 'string') {
//         throw new TypeError("Le paramètre doit être une chaîne de caractères");
//     }
//     return phrase.split(" ")
//                  .map(mot => mettreEnMajuscule(mot))
//                  .join(" ");
// }
//
// Variante avec validation simplifiée (si les fonctions auxiliaires sont sûres) :
// function mettrePhraseEnMajuscule(phrase) {
//     if (typeof phrase !== 'string') {
//         return "Erreur : le paramètre doit être une chaîne de caractères";
//     }
//     const mots = phrase.split(" ");
//     const motsTransformes = [];
//     for (let i = 0; i < mots.length; i++) {
//         // On peut appeler directement car on sait que mots[i] est une string
//         motsTransformes.push(mots[i].charAt(0).toUpperCase() + mots[i].slice(1));
//     }
//     return motsTransformes.join(" ");
// }
//
// Avantages de la validation multiple :
// - Code plus robuste
// - Erreurs détectées au plus tôt
// - Meilleure maintenabilité
// - Réutilisabilité des fonctions (chaque fonction est autonome)
//
// Inconvénients :
// - Légèrement plus verbeux
// - Petite perte de performance (vérifications multiples)
// - Dans la pratique, le gain en robustesse vaut largement le coût !
