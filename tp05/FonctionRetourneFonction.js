// ===== EXERCICE FonctionRetourneFonction =====
// Description : Créer une fonction qui retourne une autre fonction (closure)
// Concepts : fonctions de premier ordre, closures, portée des variables

console.log("=== EXERCICE FonctionRetourneFonction ===\n");

// --- Définition de la fonction ---
// Cette fonction prend un nombre n et retourne une fonction
// qui multiplie son paramètre par n
function creerMultiplicateur(n) {
    // La fonction retournée "capture" la valeur de n (closure)
    return function(nb) {
        return nb * n;
    };
}

// --- Création de deux multiplicateurs différents ---
console.log("Étape 1 : Création de deux multiplicateurs\n");

// Multiplicateur par 3
const multiplierPar3 = creerMultiplicateur(3);
console.log("Création de multiplierPar3 = creerMultiplicateur(3)");

// Multiplicateur par 5
const multiplierPar5 = creerMultiplicateur(5);
console.log("Création de multiplierPar5 = creerMultiplicateur(5)");

console.log("\nÉtape 2 : Utilisation des multiplicateurs\n");

// --- Test avec multiplierPar3 ---
console.log("Test avec multiplierPar3 :");
const resultat1 = multiplierPar3(10);
console.log(`multiplierPar3(10) = ${resultat1}`);
console.log("Explication : 10 * 3 = 30");

const resultat2 = multiplierPar3(7);
console.log(`multiplierPar3(7) = ${resultat2}`);
console.log("Explication : 7 * 3 = 21");

// --- Test avec multiplierPar5 ---
console.log("\nTest avec multiplierPar5 :");
const resultat3 = multiplierPar5(10);
console.log(`multiplierPar5(10) = ${resultat3}`);
console.log("Explication : 10 * 5 = 50");

const resultat4 = multiplierPar5(7);
console.log(`multiplierPar5(7) = ${resultat4}`);
console.log("Explication : 7 * 5 = 35");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Closures et fonctions de premier ordre
//
// Concept de "fonction de premier ordre" (First-class functions) :
// En JavaScript, les fonctions sont des valeurs comme les autres :
// - On peut les stocker dans des variables
// - On peut les passer en paramètres
// - On peut les retourner depuis d'autres fonctions
//
// Concept de "closure" (fermeture) :
// Une fonction qui "capture" des variables de son contexte parent
// - multiplierPar3 "se souvient" que n vaut 3
// - multiplierPar5 "se souvient" que n vaut 5
// - Chaque fonction garde sa propre copie de n
//
// Schéma de fonctionnement :
//
// 1. creerMultiplicateur(3) est appelé
//    → Crée une fonction qui capture n=3
//    → Retourne cette fonction
//    → Stockée dans multiplierPar3
//
// 2. creerMultiplicateur(5) est appelé
//    → Crée une fonction qui capture n=5
//    → Retourne cette fonction
//    → Stockée dans multiplierPar5
//
// 3. multiplierPar3(10) est appelé
//    → Utilise le n capturé (3)
//    → Retourne 10 * 3 = 30
//
// 4. multiplierPar5(10) est appelé
//    → Utilise le n capturé (5)
//    → Retourne 10 * 5 = 50
//
// Variantes syntaxiques :
//
// 1. Avec fonction fléchée (très concis) :
// const creerMultiplicateur = (n) => (nb) => nb * n;
//
// 2. Fonction fléchée avec blocs :
// const creerMultiplicateur = (n) => {
//     return (nb) => {
//         return nb * n;
//     };
// };
//
// 3. Expression de fonction :
// const creerMultiplicateur = function(n) {
//     return function(nb) {
//         return nb * n;
//     };
// };
//
// Cas d'usage des closures :
// - Créer des fonctions personnalisées (comme ici)
// - Encapsuler des données privées
// - Créer des callbacks avec état
// - Factory functions (fonctions fabriques)
//
// Exemple d'application pratique :
// const ajouterTVA = creerMultiplicateur(1.2); // TVA 20%
// const prix = 100;
// const prixTTC = ajouterTVA(prix); // 120
