// ===== EXERCICE FonctionMaj =====
// Description : Mettre la première lettre d'une chaîne en majuscule
// Concepts : manipulation de chaînes, charAt(), slice(), toUpperCase()

console.log("=== EXERCICE FonctionMaj ===\n");

// --- Définition de la fonction ---
// Cette fonction met la première lettre d'une chaîne en majuscule
function mettreEnMajuscule(chaine) {
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

// --- Tests ---
console.log("Test 1 :");
const texte1 = "bonjour";
console.log(`Entrée : "${texte1}"`);
console.log(`Résultat : "${mettreEnMajuscule(texte1)}"`);

console.log("\nTest 2 :");
const texte2 = "javascript";
console.log(`Entrée : "${texte2}"`);
console.log(`Résultat : "${mettreEnMajuscule(texte2)}"`);

console.log("\nTest 3 :");
const texte3 = "hello world";
console.log(`Entrée : "${texte3}"`);
console.log(`Résultat : "${mettreEnMajuscule(texte3)}"`);
console.log("Note : Seule la première lettre est en majuscule");

console.log("\nTest 4 - Cas limites :");
const texte4 = "";
const texte5 = "A";
const texte6 = "a";
console.log(`Chaîne vide "" → "${mettreEnMajuscule(texte4)}"`);
console.log(`Un caractère "A" → "${mettreEnMajuscule(texte5)}"`);
console.log(`Un caractère "a" → "${mettreEnMajuscule(texte6)}"`);

console.log("\n" + "=".repeat(40));

// Note pédagogique : Manipulation de chaînes de caractères
//
// Méthodes utilisées :
//
// 1. charAt(index) : retourne le caractère à la position index
//    - "hello".charAt(0) → "h"
//    - Équivalent moderne : "hello"[0] → "h"
//
// 2. slice(start, end) : extrait une partie de la chaîne
//    - "hello".slice(1) → "ello" (du caractère 1 à la fin)
//    - "hello".slice(0, 3) → "hel" (du caractère 0 à 2, 3 exclu)
//
// 3. toUpperCase() : convertit en majuscules
//    - "hello".toUpperCase() → "HELLO"
//
// 4. toLowerCase() : convertit en minuscules
//    - "HELLO".toLowerCase() → "hello"
//
// Algorithme :
// 1. Extraire la première lettre : chaine[0] ou chaine.charAt(0)
// 2. La convertir en majuscule : .toUpperCase()
// 3. Extraire le reste de la chaîne : chaine.slice(1)
// 4. Concaténer les deux parties
//
// Variantes syntaxiques :
//
// 1. Version très concise :
// const mettreEnMajuscule = (chaine) => chaine.charAt(0).toUpperCase() + chaine.slice(1);
//
// 2. Version avec index :
// const mettreEnMajuscule = (chaine) => chaine[0].toUpperCase() + chaine.slice(1);
//
// 3. Version avec template literals :
// const mettreEnMajuscule = (chaine) => `${chaine[0].toUpperCase()}${chaine.slice(1)}`;
//
// Attention aux cas limites :
// - Chaîne vide : il faut tester la longueur avant d'accéder à chaine[0]
// - Un seul caractère : slice(1) retourne une chaîne vide, ce qui fonctionne
