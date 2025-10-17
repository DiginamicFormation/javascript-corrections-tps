// ===== EXERCICE CalculSomme =====
// Description : Calculer la somme de tous les nombres entiers de 1 à N
// Concepts : boucles, accumulation, variable compteur

console.log("=== EXERCICE CalculSomme ===\n");

// --- Données ---
const nombre = 10;
console.log("Calculer la somme de 1 à", nombre);
console.log("");

// --- Traitement ---
// On utilise une variable pour accumuler la somme
let somme = 0;

// On parcourt tous les nombres de 1 à nombre (inclus)
for (let i = 1; i <= nombre; i++) {
    somme += i; // On ajoute chaque nombre à la somme
}

// --- Résultat ---
console.log("Résultat :", somme);
console.log("La somme de 1 à", nombre, "vaut", somme);

console.log("\n" + "=".repeat(40));

// Note pédagogique : Il existe une formule mathématique pour calculer
// directement cette somme : n * (n + 1) / 2
// Vérification avec la formule : 10 * 11 / 2 = 55 ✓