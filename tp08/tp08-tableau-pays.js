// ===== EXERCICE TableauPays (TP8) - DIFFICILE =====
// Description : Afficher des données JSON dans un tableau HTML avec drapeaux
// Concepts : JSON, manipulation DOM, tableaux HTML, images dynamiques

/**
 * Fonction appelée au chargement de la page (body onload)
 * Elle initialise le tableau avec les données JSON
 */
function initialiserTableau() {
    console.log("=== EXERCICE TableauPays ===\n");

    // ⭐ Les données sont déjà déclarées dans le HTML (variable globale "data")
    console.log("Données JSON chargées :");
    console.log("- Polluant :", data.polluant);
    console.log("- Unité :", data.unite);
    console.log("- Année :", data.annee);
    console.log("- Nombre de pays :", data.pays.length);

    // --- ETAPE 1 : Modification du h1 ---
    const h1 = document.getElementById("titre");
    h1.textContent = "Pays les plus polluants pour le " + data.polluant +
                     " (" + data.unite + ") en " + data.annee;

    console.log("\nContenu du h1 :", h1.textContent);

    // --- ETAPE 2 : Modification du h2 ---
    const h2 = document.getElementById("annee");
    h2.textContent = "Année : " + data.annee;

    console.log("Contenu du h2 :", h2.textContent);

    // --- ETAPE 3 : Génération du tbody ---
    const tbody = document.getElementById("corps");

    // Variable pour construire le contenu du tbody
    let html = "";

    // ⭐ BOUCLE sur le tableau des pays
    for (let i = 0; i < data.pays.length; i++) {
        const pays = data.pays[i];

        // ⭐ CONSTRUCTION DE L'URL DU DRAPEAU
        // Format : https://flagcdn.com/24x18/CODE.png
        // On remplace CODE par le code du pays (cn, us, in, etc.)
        const urlDrapeau = "https://flagcdn.com/24x18/" + pays.code + ".png";

        console.log("\nPays", i + 1, ":");
        console.log("  - Nom :", pays.nom);
        console.log("  - Valeur :", pays.valeur, data.unite);
        console.log("  - Pourcentage :", pays.pourcentage + "%");
        console.log("  - Code :", pays.code);
        console.log("  - URL drapeau :", urlDrapeau);

        // ⭐ CONSTRUCTION DE LA LIGNE DU TABLEAU
        html += '<tr>';
        // Colonne 1 : Drapeau
        html += '<td><img src="' + urlDrapeau + '" alt="Drapeau ' + pays.nom + '" class="drapeau"></td>';
        // Colonne 2 : Nom du pays
        html += '<td>' + pays.nom + '</td>';
        // Colonne 3 : Valeur
        html += '<td>' + pays.valeur + '</td>';
        // Colonne 4 : Pourcentage
        html += '<td>' + pays.pourcentage + '</td>';
        html += '</tr>';
    }

    // ⭐ INJECTION DU HTML dans le tbody
    tbody.innerHTML = html;

    console.log("\n" + data.pays.length + " lignes de tableau générées");
    console.log("\n" + "=".repeat(40));
}

// ⚠️ NOTE PÉDAGOGIQUE : Génération de tableau HTML dynamiquement
//
// Pour générer un tableau HTML, on construit le code HTML sous forme de chaîne :
//
// Structure d'un tableau :
// <table>
//     <thead>                 ← En-tête (défini dans le HTML)
//         <tr>
//             <th>Colonne 1</th>
//             <th>Colonne 2</th>
//         </tr>
//     </thead>
//     <tbody>                 ← Corps (généré en JavaScript)
//         <tr>                ← Une ligne par pays
//             <td>Donnée 1</td>
//             <td>Donnée 2</td>
//         </tr>
//     </tbody>
// </table>
//
// Dans notre cas :
// 1. Le <thead> est défini directement dans le HTML (colonnes fixes)
// 2. Le <tbody> est généré dynamiquement avec une boucle
// 3. Chaque itération de la boucle crée une ligne <tr> avec 4 cellules <td>

// ⚠️ NOTE PÉDAGOGIQUE : Insertion d'images dans un tableau
//
// Pour afficher une image dans une cellule de tableau :
//
// <td><img src="URL" alt="Description"></td>
//
// Points importants :
// 1. src : URL de l'image (peut être construite dynamiquement)
// 2. alt : Texte alternatif (pour l'accessibilité)
// 3. class : Pour appliquer des styles CSS (optionnel)
//
// Dans notre cas, l'URL est construite avec le code du pays :
// const urlDrapeau = "https://flagcdn.com/24x18/" + pays.code + ".png";
//
// Exemples :
// - Chine (code: cn)  → https://flagcdn.com/24x18/cn.png
// - France (code: fr) → https://flagcdn.com/24x18/fr.png

// ⚠️ NOTE PÉDAGOGIQUE : Variables globales vs locales
//
// Dans cet exercice, la variable "data" est déclarée dans le HTML :
//
// <script>
//     let data = { ... };
// </script>
//
// C'est une variable GLOBALE : elle est accessible partout dans la page.
//
// Avantages :
// - Simple à utiliser
// - Pas besoin de passer la variable en paramètre
//
// Inconvénients :
// - Pollution de l'espace global
// - Risque de conflit de noms
//
// Alternative moderne (meilleure pratique) :
// - Déclarer les données dans le fichier JS
// - Ou utiliser des modules ES6

// ⚠️ NOTE PÉDAGOGIQUE : innerHTML vs createElement
//
// Pour générer du HTML, on a deux approches :
//
// 1. innerHTML (utilisé dans cet exercice) :
//    tbody.innerHTML = '<tr><td>...</td></tr>';
//    ✓ Simple et rapide
//    ✗ Peut poser des problèmes de sécurité (XSS)
//    ✗ Remplace tout le contenu existant
//
// 2. createElement (plus sûr) :
//    const tr = document.createElement("tr");
//    const td = document.createElement("td");
//    td.textContent = "...";
//    tr.appendChild(td);
//    tbody.appendChild(tr);
//    ✓ Plus sûr
//    ✓ Permet d'ajouter sans remplacer
//    ✗ Plus verbeux
//
// Pour cet exercice pédagogique, innerHTML est suffisant car :
// - Les données viennent d'un JSON local (pas de risque XSS)
// - On remplace tout le tbody (pas besoin d'ajouter)
// - Le code est plus simple à comprendre pour les débutants
