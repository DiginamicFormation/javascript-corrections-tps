// ===== EXERCICE FonctionMoyenne =====
// Description : Calculer la moyenne d'un tableau avec gestion d'erreurs
// Concepts : fonction, boucles, validation de données, gestion d'erreurs

console.log("=== EXERCICE FonctionMoyenne ===\n");

// --- Définition de la fonction ---
// Cette fonction calcule la moyenne d'un tableau en gérant les cas d'erreur
function calculerMoyenne(tableau) {
    // Vérification 1 : Le paramètre est-il un tableau ?
    if (!Array.isArray(tableau)) {
        return "Erreur : le paramètre doit être un tableau";
    }

    // Vérification 2 : Le tableau est-il vide ?
    if (tableau.length === 0) {
        return 0; // Retourne 0 pour un tableau vide
    }

    // Vérification 3 : Tous les éléments sont-ils des nombres ?
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== 'number') {
            return "Erreur : tous les éléments doivent être des nombres";
        }
    }

    // Calcul de la somme
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    // Calcul de la moyenne
    const moyenne = somme / tableau.length;
    return moyenne;
}

// --- Test 1 : Tableau contenant des éléments ---
console.log("Test 1 - Tableau contenant des nombres :");
const tableau1 = [10, 15, 20, 5];
console.log("Tableau :", tableau1);
const resultat1 = calculerMoyenne(tableau1);
console.log("Résultat :", resultat1);
console.log("Détail : (10 + 15 + 20 + 5) / 4 = 50 / 4 = 12.5");

// --- Test 2 : Tableau vide ---
console.log("\nTest 2 - Tableau vide :");
const tableau2 = [];
console.log("Tableau :", tableau2);
const resultat2 = calculerMoyenne(tableau2);
console.log("Résultat :", resultat2);
console.log("Explication : La fonction retourne 0 pour un tableau vide");

// --- Test 3 : Chaîne de caractères au lieu d'un tableau ---
console.log("\nTest 3 - Chaîne de caractères au lieu d'un tableau :");
const tableau3 = "ceci n'est pas un tableau";
console.log("Paramètre :", tableau3);
const resultat3 = calculerMoyenne(tableau3);
console.log("Résultat :", resultat3);
console.log("Explication : La fonction détecte que ce n'est pas un tableau");

// --- Test 4 : Tableau contenant des nombres et une chaîne ---
console.log("\nTest 4 - Tableau contenant des nombres et une chaîne :");
const tableau4 = [10, 15, "texte", 20];
console.log("Tableau :", tableau4);
const resultat4 = calculerMoyenne(tableau4);
console.log("Résultat :", resultat4);
console.log("Explication : La fonction détecte un élément qui n'est pas un nombre");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Gestion d'erreurs et validation
//
// Une fonction robuste doit gérer les cas limites et erreurs :
//
// 1. Vérifier le type du paramètre avec Array.isArray()
//    - Un tableau est aussi de type 'object', donc typeof ne suffit pas
//    - Array.isArray() est la méthode recommandée pour vérifier un tableau
//
// 2. Gérer le cas du tableau vide
//    - Mathématiquement, la moyenne d'un ensemble vide est indéfinie
//    - Ici, on choisit de retourner 0 comme demandé dans l'énoncé
//    - On pourrait aussi retourner null ou un message d'erreur
//
// 3. Vérifier que tous les éléments sont des nombres
//    - Utiliser typeof pour chaque élément
//    - Retourner un message d'erreur explicite si ce n'est pas le cas
//
// 4. Messages d'erreur clairs
//    - Expliquer ce qui ne va pas
//    - Aider l'utilisateur de la fonction à corriger son code
//
// Structure de validation recommandée :
// 1. Vérifier le type des paramètres
// 2. Vérifier les cas limites (vide, null, undefined)
// 3. Vérifier les contraintes métier
// 4. Effectuer le traitement
//
// Variante avec méthode moderne :
// function calculerMoyenne(tableau) {
//     if (!Array.isArray(tableau)) {
//         return "Erreur : le paramètre doit être un tableau";
//     }
//     if (tableau.length === 0) return 0;
//     if (!tableau.every(el => typeof el === 'number')) {
//         return "Erreur : tous les éléments doivent être des nombres";
//     }
//     const somme = tableau.reduce((acc, val) => acc + val, 0);
//     return somme / tableau.length;
// }
