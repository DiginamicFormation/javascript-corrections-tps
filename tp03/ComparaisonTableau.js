// ===== EXERCICE ComparaisonTableau =====
// Description : Compter le nombre d'éléments en commun entre deux tableaux
// Concepts : boucles imbriquées, conditions, compteur

console.log("=== EXERCICE ComparaisonTableau ===\n");

// --- Données ---
const array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
const array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

console.log("Tableau 1 :", array1);
console.log("Tableau 2 :", array2);
console.log("");

// --- Traitement ---
// On va compter le nombre d'éléments en commun
let nombreElementsCommuns = 0;

// On parcourt chaque élément du premier tableau
for (let i = 0; i < array1.length; i++) {
    const elementActuel = array1[i];

    // On vérifie si cet élément existe dans le deuxième tableau
    for (let j = 0; j < array2.length; j++) {
        if (array2[j] === elementActuel) {
            // On a trouvé un élément en commun
            nombreElementsCommuns++;
            break; // On arrête la recherche pour cet élément (évite de compter plusieurs fois)
        }
    }
}

// --- Affichage ---
console.log("Résultat :");
console.log("Nombre d'éléments en commun :", nombreElementsCommuns);

console.log("\n" + "=".repeat(40));

// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles !
// Les méthodes comme filter() et includes() sont ce que vous utiliserez
// dans vos futurs projets professionnels, mais ici on veut maîtriser l'algorithme
// de base avec des boucles for classiques.
//
// Note pédagogique : Avec les méthodes modernes, on pourrait écrire :
// const nombreCommuns = array1.filter(el => array2.includes(el)).length;
// - filter() parcourt array1 et garde les éléments qui sont dans array2
// - includes() vérifie si un élément existe dans un tableau
// - .length donne le nombre total d'éléments trouvés
//
// Attention : Cette approche compte les doublons. Pour éviter ça en version moderne :
// const nombreCommuns = new Set(array1.filter(el => array2.includes(el))).size;
