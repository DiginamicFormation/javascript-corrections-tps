// ===== EXERCICE FonctionControleTableau =====
// Description : Vérifier qu'un tableau ne contient que des nombres
// Concepts : fonction avec paramètre tableau, boucles, typeof, booléens

console.log("=== EXERCICE FonctionControleTableau ===\n");

// --- Définition de la fonction ---
// Cette fonction vérifie si tous les éléments d'un tableau sont des nombres
function contientQueDesNombres(tableau) {
    // On parcourt tous les éléments du tableau
    for (let i = 0; i < tableau.length; i++) {
        // Si on trouve un élément qui n'est pas un nombre
        if (typeof tableau[i] !== 'number') {
            return false; // On retourne false immédiatement
        }
    }
    // Si on arrive ici, tous les éléments sont des nombres
    return true;
}

// --- Test 1 : Tableau contenant uniquement des nombres ---
console.log("Test 1 - Tableau contenant uniquement des nombres :");
const tableau1 = [1, 5, -3, 0, 8, 7, 4, -2];
console.log("Tableau :", tableau1);
const resultat1 = contientQueDesNombres(tableau1);
console.log("Résultat :", resultat1);
console.log("Attendu : true");

// --- Test 2 : Tableau contenant des nombres et une chaîne ---
console.log("\nTest 2 - Tableau contenant des nombres et une chaîne :");
const tableau2 = [1, 5, "texte", 0, 8, 7];
console.log("Tableau :", tableau2);
const resultat2 = contientQueDesNombres(tableau2);
console.log("Résultat :", resultat2);
console.log("Attendu : false (présence de 'texte')");

// --- Test 3 : Tableau vide ---
console.log("\nTest 3 - Tableau vide :");
const tableau3 = [];
console.log("Tableau :", tableau3);
const resultat3 = contientQueDesNombres(tableau3);
console.log("Résultat :", resultat3);
console.log("Attendu : true (aucun élément qui n'est pas un nombre)");

console.log("\n" + "=".repeat(40));

// Note pédagogique : L'opérateur typeof
//
// typeof permet de vérifier le type d'une variable
// Valeurs possibles :
// - 'number' pour les nombres (1, 5.5, -3, NaN)
// - 'string' pour les chaînes de caractères ("texte", '123')
// - 'boolean' pour les booléens (true, false)
// - 'undefined' pour une variable non définie
// - 'object' pour les objets et les tableaux
// - 'function' pour les fonctions
//
// Attention : NaN est de type 'number' !
// Si on veut exclure NaN, on peut utiliser Number.isNaN()
//
// Logique de la fonction :
// - On parcourt le tableau élément par élément
// - Dès qu'on trouve un élément qui n'est pas un nombre, on retourne false
// - Si on arrive à la fin sans avoir retourné false, c'est que tous sont des nombres
//
// Cas particulier du tableau vide :
// - La boucle ne s'exécute jamais (length = 0)
// - On arrive directement au return true
// - C'est logique : il n'y a aucun élément qui ne soit pas un nombre
//
// Variante avec méthode moderne :
// function contientQueDesNombres(tableau) {
//     return tableau.every(element => typeof element === 'number');
// }
// La méthode every() vérifie que tous les éléments respectent une condition
