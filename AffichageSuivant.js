// ===== EXERCICE AffichageSuivant =====
// Description : Afficher 10 nombres consécutifs à partir de N+1
// Concepts : boucles for, incrémentation

console.log("=== EXERCICE AffichageSuivant ===\n");

// --- Données ---
const nombre = 10;
console.log("Nombre de départ :", nombre);
console.log("Affichage des 10 nombres suivants :\n");

// --- Traitement et affichage ---
// On commence à nombre+1 et on affiche 10 nombres consécutifs
// Pour afficher 10 nombres, on doit aller de nombre+1 à nombre+10 (inclus)
for (let i = nombre + 1; i <= nombre + 10; i++) {
    console.log(i);
}

// --- Fin ---
console.log("\n" + "=".repeat(40));

// Note pédagogique : Alternative avec compteur
// On peut aussi utiliser un compteur pour afficher exactement 10 nombres :
/*
for (let compteur = 1; compteur <= 10; compteur++) {
    console.log(nombre + compteur);
}
*/
