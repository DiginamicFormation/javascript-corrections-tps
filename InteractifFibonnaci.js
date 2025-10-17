// ===== EXERCICE InteractifFibonnaci (FACULTATIF) =====
// Description : Calculer la valeur de Fibonacci de rang N
// Concepts : suite mathématique, boucles, variables d'état
// Rappel : Suite de Fibonacci = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//          Chaque nombre est la somme des deux précédents

console.log("=== EXERCICE InteractifFibonnaci ===\n");

// --- Données ---
const n = 10; // Rang de la suite de Fibonacci
console.log("Calcul de Fibonacci pour le rang", n);
console.log("");

// --- Traitement ---
// Cas particuliers pour les premiers rangs
if (n === 0) {
    console.log("Résultat : Fibonacci(0) = 0");
} else if (n === 1) {
    console.log("Résultat : Fibonacci(1) = 1");
} else {
    // Pour les rangs >= 2, on utilise une boucle
    // On a besoin de garder en mémoire les deux valeurs précédentes

    let precedent1 = 0; // Fibonacci(0)
    let precedent2 = 1; // Fibonacci(1)
    let fibonacciActuel = 0;

    // On calcule de rang 2 jusqu'au rang n
    for (let i = 2; i <= n; i++) {
        // Le nombre actuel est la somme des deux précédents
        fibonacciActuel = precedent1 + precedent2;

        // On décale les valeurs pour la prochaine itération
        precedent1 = precedent2;
        precedent2 = fibonacciActuel;
    }

    // --- Affichage ---
    console.log("Résultat : Fibonacci(" + n + ") = " + fibonacciActuel);
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Affichons toute la suite pour mieux comprendre
console.log("\n=== Affichage de la suite complète jusqu'au rang", n, "===\n");

console.log("Rang 0 : 0");
console.log("Rang 1 : 1");

let prec1 = 0;
let prec2 = 1;

for (let i = 2; i <= n; i++) {
    const fibActuel = prec1 + prec2;
    console.log("Rang " + i + " : " + fibActuel + " (= " + prec1 + " + " + prec2 + ")");

    // Décalage des valeurs
    prec1 = prec2;
    prec2 = fibActuel;
}

console.log("\n" + "=".repeat(40));

// Note pédagogique : Explication du fonctionnement
//
// La suite de Fibonacci commence par 0 et 1
// Chaque nombre suivant = somme des deux précédents
//
// Rang 0 : 0
// Rang 1 : 1
// Rang 2 : 0 + 1 = 1
// Rang 3 : 1 + 1 = 2
// Rang 4 : 1 + 2 = 3
// Rang 5 : 2 + 3 = 5
// Rang 6 : 3 + 5 = 8
// Rang 7 : 5 + 8 = 13
// Rang 8 : 8 + 13 = 21
// Rang 9 : 13 + 21 = 34
// Rang 10 : 21 + 34 = 55
//
// Algorithme :
// - On garde deux variables pour stocker les deux valeurs précédentes
// - À chaque itération, on calcule la nouvelle valeur
// - On décale les valeurs : precedent1 prend la valeur de precedent2
//                          precedent2 prend la valeur calculée
//
// Exemple de tests :
// n = 0 → 0
// n = 1 → 1
// n = 5 → 5
// n = 10 → 55
// n = 15 → 610
