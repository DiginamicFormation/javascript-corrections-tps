// ===== EXERCICE FonctionConstante =====
// Description : Créer une fonction qui retourne une constante
// Concepts : fonction sans paramètre, return, appel de fonction

console.log("=== EXERCICE FonctionConstante ===\n");

// --- Définition de la fonction ---
// Cette fonction ne prend aucun paramètre et retourne toujours 33
function retourneConstante() {
    return 33;
}

// --- Appel de la fonction ---
const resultat = retourneConstante();

// --- Affichage ---
console.log("Appel de la fonction retourneConstante() :");
console.log("Résultat :", resultat);

console.log("\n" + "=".repeat(40));

// Note pédagogique : Les fonctions
//
// Une fonction est un bloc de code réutilisable qui peut :
// - Prendre des paramètres (ici aucun)
// - Effectuer des traitements
// - Retourner une valeur avec le mot-clé "return"
//
// Syntaxe :
// function nomDeLaFonction(parametres) {
//     // code à exécuter
//     return valeur;
// }
//
// Pour appeler une fonction, on utilise son nom suivi de parenthèses :
// const resultat = nomDeLaFonction();
//
// Variantes syntaxiques possibles :
//
// 1. Fonction fléchée (arrow function) :
// const retourneConstante = () => 33;
//
// 2. Expression de fonction :
// const retourneConstante = function() {
//     return 33;
// };
//
// 3. Fonction fléchée avec bloc :
// const retourneConstante = () => {
//     return 33;
// };
