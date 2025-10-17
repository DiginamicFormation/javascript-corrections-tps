// ===== EXERCICE Rotation (FACULTATIF) =====
// Description : Effectuer une rotation à droite des éléments d'un tableau
// Concepts : manipulation de tableaux, décalage d'éléments, boucles
// Exemple : [0, 1, 2, 3] devient [3, 0, 1, 2]

console.log("=== EXERCICE Rotation ===\n");

// --- Données ---
const tableau = [0, 1, 2, 3];
console.log("Tableau initial :", tableau);
console.log("");

// --- Traitement ---
// Principe de la rotation à droite :
// 1. Sauvegarder le dernier élément
// 2. Décaler tous les éléments d'une position vers la droite
// 3. Placer l'ancien dernier élément en première position

// On sauvegarde le dernier élément
const dernierElement = tableau[tableau.length - 1];

// On décale tous les éléments d'une position vers la droite
// On parcourt le tableau de la fin vers le début (sauf le dernier qu'on a déjà sauvegardé)
for (let i = tableau.length - 1; i > 0; i--) {
    tableau[i] = tableau[i - 1]; // L'élément prend la valeur de celui qui le précède
}

// On place l'ancien dernier élément en première position
tableau[0] = dernierElement;

// --- Affichage ---
console.log("Résultat :");
console.log("Tableau après rotation :", tableau);
console.log("");
console.log("Explication : [0, 1, 2, 3] → [3, 0, 1, 2]");
console.log("Le dernier élément (3) est passé en première position");
console.log("Tous les autres éléments se sont décalés d'une position vers la droite");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Visualisation du processus
//
// Tableau initial : [0, 1, 2, 3]
//
// Étape 1 : Sauvegarder le dernier (3)
//   dernierElement = 3
//
// Étape 2 : Décalage vers la droite (boucle de i=3 vers i=1)
//   i=3 : tableau[3] = tableau[2] → [0, 1, 2, 2]
//   i=2 : tableau[2] = tableau[1] → [0, 1, 1, 2]
//   i=1 : tableau[1] = tableau[0] → [0, 0, 1, 2]
//
// Étape 3 : Placer l'ancien dernier en première position
//   tableau[0] = 3 → [3, 0, 1, 2]
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles !
// Avec les méthodes modernes, on pourrait écrire :
// const dernierElement = tableau.pop();
// tableau.unshift(dernierElement);
// Ou encore plus court :
// tableau.unshift(tableau.pop());
//
// Mais ici, on veut comprendre le mécanisme de décalage avec des boucles classiques.
