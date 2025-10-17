// ===== EXERCICE GestionnaireTaches =====
// Description : Créer un gestionnaire de tâches avec objet littéral
// Concepts : objets littéraux, méthodes, encapsulation, gestion d'état

console.log("=== EXERCICE GestionnaireTaches ===\n");

// --- Définition de la fonction creerGestionnaire ---
// Cette fonction retourne un objet avec des méthodes pour gérer des tâches
function creerGestionnaire() {
    // L'objet retourné contient un tableau de tâches et des méthodes
    return {
        // Propriété : tableau des tâches
        taches: [],

        // Méthode : Ajouter une tâche
        ajouterTache: function(description) {
            // Une tâche est un objet avec description et état terminée
            const nouvelleTache = {
                description: description,
                terminee: false
            };
            this.taches.push(nouvelleTache);
            console.log(`✓ Tâche ajoutée : "${description}"`);
        },

        // Méthode : Marquer une tâche comme terminée
        terminerTache: function(index) {
            // Vérifier que l'index est valide
            if (index >= 0 && index < this.taches.length) {
                this.taches[index].terminee = true;
                console.log(`✓ Tâche ${index} marquée comme terminée : "${this.taches[index].description}"`);
            } else {
                console.log(`✗ Erreur : index ${index} invalide`);
            }
        },

        // Méthode : Afficher toutes les tâches
        afficherTaches: function() {
            console.log("\n--- Liste des tâches ---");

            if (this.taches.length === 0) {
                console.log("Aucune tâche");
                return;
            }

            for (let i = 0; i < this.taches.length; i++) {
                const tache = this.taches[i];
                const statut = tache.terminee ? "[✓ Terminée]" : "[ ] À faire";
                console.log(`${i}. ${statut} ${tache.description}`);
            }
            console.log("------------------------\n");
        }
    };
}

// --- Utilisation du gestionnaire ---
console.log("Création du gestionnaire de tâches\n");
const gestionnaire = creerGestionnaire();

// --- Test 1 : Ajouter des tâches ---
console.log("=== Ajout de tâches ===\n");
gestionnaire.ajouterTache("Apprendre JavaScript");
gestionnaire.ajouterTache("Faire les exercices du TP5");
gestionnaire.ajouterTache("Créer un projet personnel");
gestionnaire.ajouterTache("Réviser les concepts de base");

// --- Test 2 : Afficher toutes les tâches ---
console.log("\n");
gestionnaire.afficherTaches();

// --- Test 3 : Marquer des tâches comme terminées ---
console.log("=== Marquage de tâches comme terminées ===\n");
gestionnaire.terminerTache(0); // Apprendre JavaScript
gestionnaire.terminerTache(2); // Créer un projet personnel

// --- Test 4 : Afficher à nouveau les tâches ---
console.log("\n");
gestionnaire.afficherTaches();

// --- Test 5 : Tester un index invalide ---
console.log("=== Test d'un index invalide ===\n");
gestionnaire.terminerTache(10); // Index qui n'existe pas

console.log("\n" + "=".repeat(40));

// Note pédagogique : Objets littéraux et méthodes
//
// Un objet littéral est une structure de données qui regroupe :
// - Des propriétés (données)
// - Des méthodes (fonctions)
//
// Syntaxe :
// const objet = {
//     propriete: valeur,
//     methode: function() {
//         // code
//     }
// };
//
// Le mot-clé "this" :
// - Dans une méthode, "this" fait référence à l'objet lui-même
// - this.taches accède à la propriété taches de l'objet
// - Permet aux méthodes de manipuler les données de l'objet
//
// Encapsulation :
// - Les données (taches) et les opérations (méthodes) sont regroupées
// - L'objet gère son propre état
// - On interagit avec l'objet via ses méthodes
//
// Structure d'une tâche :
// {
//     description: "Texte de la tâche",
//     terminee: false // ou true
// }
//
// Avantages de cette approche :
// - Code organisé et structuré
// - Facile à comprendre et maintenir
// - Réutilisable (on peut créer plusieurs gestionnaires)
// - Évolutif (facile d'ajouter de nouvelles méthodes)
//
// Variantes syntaxiques modernes :
//
// 1. Méthodes avec syntaxe raccourcie (ES6+) :
// const objet = {
//     ajouterTache(description) {
//         // code
//     }
// };
//
// 2. Arrow functions (ATTENTION : pas de "this") :
// Ne pas utiliser d'arrow functions pour les méthodes d'objets
// car elles ne bindent pas "this" correctement
//
// Extensions possibles :
// - supprimerTache(index) : supprimer une tâche
// - modifierTache(index, nouvelleDescription) : modifier une tâche
// - nombreTachesRestantes() : compter les tâches non terminées
// - viderTaches() : supprimer toutes les tâches
// - filtrerParStatut(terminee) : afficher seulement terminées ou à faire
