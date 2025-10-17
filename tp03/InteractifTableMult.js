// ===== EXERCICE InteractifTableMult (FACULTATIF) =====
// Description : Afficher la table de multiplication d'un nombre donné
// Concepts : boucles, opérations arithmétiques, formatage d'affichage

console.log("=== EXERCICE InteractifTableMult ===\n");

// --- Données ---
const nombre = 3; // Variable entre 1 et 10
console.log("Table de", nombre, ":\n");

// --- Traitement et Affichage ---
// On parcourt les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    const resultat = nombre * i;
    console.log(nombre + " * " + i + " = " + resultat);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Autres exemples avec différentes valeurs
console.log("\n=== Autre exemple : Table de 7 ===\n");
const nombre2 = 7;
console.log("Table de", nombre2, ":\n");

for (let i = 1; i <= 10; i++) {
    const resultat = nombre2 * i;
    console.log(nombre2 + " * " + i + " = " + resultat);
}

console.log("\n" + "=".repeat(40));

// Version avec template literals (syntaxe moderne ES6+)
console.log("\n=== Version moderne avec template literals ===\n");
const nombre3 = 5;
console.log(`Table de ${nombre3} :\n`);

for (let i = 1; i <= 10; i++) {
    const resultat = nombre3 * i;
    console.log(`${nombre3} * ${i} = ${resultat}`);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Explication
//
// La boucle for parcourt de 1 à 10 (inclus)
// À chaque itération, on multiplie le nombre de départ par i
// On affiche le résultat sous la forme "nombre * i = resultat"
//
// Formatage de l'affichage :
// - Concaténation classique avec + : "3 * 1 = " + resultat
// - Template literals (moderne) avec ${} : `${nombre} * ${i} = ${resultat}`
//
// Les template literals (avec des backticks `) sont plus lisibles et pratiques
// pour insérer des variables dans des chaînes de caractères.
