// ===== EXERCICE ControleFormulaire (TP8) =====
// Description : Valider un formulaire avec nom, prénom et date de naissance
// Concepts : Validation de formulaire, contrôle de saisie, manipulation DOM

/**
 * Fonction appelée lors du clic sur le bouton "Valider"
 * Elle contrôle que tous les champs sont remplis
 */
function validerFormulaire() {
    console.log("=== EXERCICE ControleFormulaire ===\n");

    // --- ETAPE 1 : Récupérer les éléments du DOM ---
    const champNom = document.getElementById("nom");
    const champPrenom = document.getElementById("prenom");
    const champDateNaissance = document.getElementById("dateNaissance");
    const divMessageErreur = document.getElementById("messageErreur");

    // --- ETAPE 2 : Récupérer les valeurs saisies ---
    // On utilise .trim() pour supprimer les espaces avant et après
    const nom = champNom.value.trim();
    const prenom = champPrenom.value.trim();
    const dateNaissance = champDateNaissance.value;

    console.log("Nom saisi :", nom);
    console.log("Prénom saisi :", prenom);
    console.log("Date de naissance saisie :", dateNaissance);

    // --- ETAPE 3 : Validation des champs ---
    // On crée un tableau pour stocker les erreurs
    const erreurs = [];

    // ⭐ Contrôle du nom
    if (nom === "") {
        erreurs.push("Le nom doit être renseigné");
        console.log("Erreur : Nom manquant");
    }

    // ⭐ Contrôle du prénom
    if (prenom === "") {
        erreurs.push("Le prénom doit être renseigné");
        console.log("Erreur : Prénom manquant");
    }

    // ⭐ Contrôle de la date de naissance
    if (dateNaissance === "") {
        erreurs.push("La date de naissance doit être renseignée");
        console.log("Erreur : Date de naissance manquante");
    }

    // --- ETAPE 4 : Affichage du résultat ---
    if (erreurs.length > 0) {
        // Il y a au moins une erreur
        console.log("\nNombre d'erreurs :", erreurs.length);

        // Construire le message d'erreur
        let messageErreur = "Erreurs détectées :\n";
        for (let i = 0; i < erreurs.length; i++) {
            messageErreur += "- " + erreurs[i] + "\n";
        }

        // Afficher le message d'erreur sur fond rouge
        divMessageErreur.textContent = messageErreur;
        divMessageErreur.className = "erreur";

        console.log(messageErreur);
    } else {
        // Aucune erreur : le formulaire est valide
        console.log("\n✓ Formulaire valide !");

        // Afficher un message de succès
        divMessageErreur.textContent = "Formulaire validé avec succès !\n" +
                                       "Bienvenue " + prenom + " " + nom + " !";
        divMessageErreur.className = "succes";
    }

    console.log("\n" + "=".repeat(40));
}

// ⚠️ NOTE PÉDAGOGIQUE : Méthode trim()
//
// La méthode trim() supprime les espaces au début et à la fin d'une chaîne :
//
// Exemple :
//    "  hello  ".trim()  → "hello"
//    "hello".trim()      → "hello"
//
// C'est très utile pour la validation car l'utilisateur peut saisir
// des espaces par erreur. Sans trim(), "   " serait considéré comme valide !
//
// Vérification SANS trim() :
//    if (nom === "") { }  // "   " serait considéré valide
//
// Vérification AVEC trim() :
//    if (nom.trim() === "") { }  // "   " est considéré invalide

// ⚠️ NOTE PÉDAGOGIQUE : Stockage des erreurs dans un tableau
//
// On utilise un tableau pour stocker toutes les erreurs :
//
// const erreurs = [];
//
// Ensuite, on ajoute les erreurs avec push() :
// if (nom === "") {
//     erreurs.push("Le nom doit être renseigné");
// }
//
// Avantages :
// 1. On peut afficher TOUTES les erreurs à l'utilisateur (meilleure UX)
// 2. On peut compter le nombre d'erreurs avec erreurs.length
// 3. On peut parcourir les erreurs avec une boucle
//
// Alternative (moins bonne) : utiliser un seul message d'erreur
// → L'utilisateur ne voit qu'une erreur à la fois

// ⚠️ NOTE PÉDAGOGIQUE : Type de bouton dans un formulaire
//
// Dans le HTML, on utilise type="button" au lieu de type="submit" :
//
// <button type="button" onclick="validerFormulaire()">Valider</button>
//
// Pourquoi ?
// - type="submit" recharge la page (comportement par défaut)
// - type="button" n'a pas de comportement par défaut
//
// Si on veut utiliser type="submit", il faut empêcher le rechargement :
//
// function validerFormulaire(event) {
//     event.preventDefault(); // Empêche le rechargement
//     // ... code de validation ...
// }
//
// Et dans le HTML :
// <form onsubmit="validerFormulaire(event); return false;">

// ⚠️ NOTE PÉDAGOGIQUE : Afficher/cacher des éléments
//
// Pour afficher ou cacher un élément, on peut :
//
// 1. Utiliser display: none en CSS et changer avec className
//    CSS : .cache { display: none; }
//    JS  : element.className = "cache";
//
// 2. Utiliser style.display directement
//    element.style.display = "none";   // Cacher
//    element.style.display = "block";  // Afficher
//
// Dans notre cas, on utilise className car ça permet de gérer
// aussi les couleurs et bordures en même temps
