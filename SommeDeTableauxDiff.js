// ===== EXERCICE SommeDeTableauxDiff =====
// Description : Additionner deux tableaux de tailles DIFFÉRENTES, élément par élément
// Concepts : boucles, conditions, gestion de cas limites, Math.max()
// Note : Contrairement à l'exercice précédent, les tableaux peuvent avoir des longueurs différentes

console.log("=== EXERCICE SommeDeTableauxDiff ===\n");

// --- Données ---
// On utilise des tableaux de tailles différentes pour tester
const array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
const array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

console.log("Tableau 1 :", array1);
console.log("Longueur   :", array1.length);
console.log("");
console.log("Tableau 2 :", array2);
console.log("Longueur   :", array2.length);
console.log("");

// --- Traitement ---
// Problème : Si les tableaux ont des longueurs différentes, on doit :
// 1. Parcourir jusqu'à la fin du tableau le plus LONG
// 2. Gérer les cas où un tableau est plus court (éviter undefined)

// On détermine la longueur maximale entre les deux tableaux
const longueurMax = Math.max(array1.length, array2.length);
console.log("Longueur maximale :", longueurMax);
console.log("La boucle ira jusqu'à l'index", longueurMax - 1);
console.log("");

const arraySomme = [];

// On parcourt jusqu'à la longueur du tableau le plus long
for (let i = 0; i < longueurMax; i++) {
    // Gestion des cas limites :
    // - Si array1[i] existe, on l'utilise, sinon on utilise 0
    // - Si array2[i] existe, on l'utilise, sinon on utilise 0

    const valeur1 = i < array1.length ? array1[i] : 0;
    const valeur2 = i < array2.length ? array2[i] : 0;

    arraySomme[i] = valeur1 + valeur2;
}

// --- Résultat ---
console.log("Tableau résultat (somme) :", arraySomme);
console.log("Longueur résultat        :", arraySomme.length);
console.log("");

// Affichage détaillé pour mieux comprendre
console.log("Détail de quelques additions :");
console.log(`  ${array1[0]} + ${array2[0]} = ${arraySomme[0]}`);
console.log(`  ${array1[1]} + ${array2[1]} = ${arraySomme[1]}`);
console.log(`  ${array1[2]} + ${array2[2]} = ${arraySomme[2]}`);
console.log("  ...");

console.log("\n" + "=".repeat(40));

// Note pédagogique : Gestion des tableaux de tailles différentes
//
// 1. Trouver la longueur maximale :
//    Math.max(array1.length, array2.length)
//
// 2. Opérateur ternaire pour gérer les valeurs manquantes :
//    condition ? valeurSiVrai : valeurSiFaux
//    Exemple : i < array1.length ? array1[i] : 0
//    Signifie : "Si i est dans les limites de array1, prendre array1[i], sinon prendre 0"
//
// 3. Pourquoi 0 comme valeur par défaut ?
//    En addition, 0 est l'élément neutre (n + 0 = n)
//    Donc si un tableau est plus court, on considère ses éléments "manquants" comme des 0
//
// 4. Exemple avec tableaux de longueurs différentes :
//    array1 = [1, 2, 3]
//    array2 = [10, 20, 30, 40, 50]
//    résultat = [11, 22, 33, 40, 50]
//    (les éléments 40 et 50 proviennent uniquement de array2)

// Méthode moderne avec map() et gestion des undefined :
//    const longueurMax = Math.max(array1.length, array2.length);
//    const arraySomme = Array.from({ length: longueurMax }, (_, i) =>
//        (array1[i] || 0) + (array2[i] || 0)
//    );
//
// ⚠️ IMPORTANT : Pour cet exercice, l'objectif est de pratiquer les boucles et conditions !
// Les méthodes comme Array.from() et map() sont ce que vous utiliserez dans vos futurs
// projets professionnels, mais ici on veut comprendre comment gérer les cas limites
// avec des boucles for et des conditions (opérateur ternaire).
