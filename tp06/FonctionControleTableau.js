// ===== EXERCICE FonctionControleTableau (TP6 - Version robuste) =====
// Description : Vérifier qu'un tableau contient uniquement des nombres
// Concepts : validation de tableau, throw, try/catch, messages d'erreur détaillés
// Objectif TP6 : Gestion d'erreurs avec throw/catch et messages informatifs

console.log("=== EXERCICE FonctionControleTableau (TP6) ===\n");

// --- Fonction avec validation ---
/**
 * Vérifie qu'un tableau contient uniquement des nombres
 * @param {Array} tableau - Le tableau à vérifier
 */
function contientQueDesNombres(tableau) {
    // Validation 1 : Vérifier que le paramètre existe
    if (tableau === undefined || tableau === null) {
        throw "Le paramètre est obligatoire";
    }

    // Validation 2 : Vérifier que c'est bien un tableau
    if (!Array.isArray(tableau)) {
        throw `Le paramètre doit être un tableau (type reçu : ${typeof tableau})`;
    }

    // Parcourir tous les éléments du tableau
    for (let i = 0; i < tableau.length; i++) {
        // Vérifier que l'élément est un nombre
        if (typeof tableau[i] !== "number") {
            // Message d'erreur détaillé indiquant l'index, le type et la valeur
            throw `L'élément à l'index ${i} n'est pas un nombre (type : ${typeof tableau[i]}, valeur : ${JSON.stringify(tableau[i])})`;
        }

        // Validation supplémentaire : vérifier que ce n'est pas NaN
        if (isNaN(tableau[i])) {
            throw `L'élément à l'index ${i} est NaN (pas un nombre valide)`;
        }
    }

    // Si on arrive ici, tous les éléments sont des nombres valides
    return true;
}

// --- Tests avec gestion d'erreurs ---
console.log("Test 1 : Cas nominal (que des nombres)\n");
try {
    const tableau = [1, 5, -3, 0, 8, 7, 4, -2, 28, 7];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat} (tous les éléments sont des nombres valides)\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 2 : Tableau vide\n");
try {
    const tableau = [];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat} (aucun élément invalide)\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 3 : Erreur - Tableau contenant une chaîne\n");
try {
    const tableau = [1, 5, "texte", 0, 8, 7];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 4 : Erreur - Tableau avec booléen\n");
try {
    const tableau = [1, 2, true, 4];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 5 : Erreur - Tableau avec null\n");
try {
    const tableau = [1, null, 3];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 6 : Erreur - Tableau avec undefined\n");
try {
    const tableau = [1, 2, undefined, 4];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 7 : Erreur - Tableau avec objet\n");
try {
    const tableau = [1, 2, {valeur: 3}, 4];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 8 : Erreur - Tableau avec plusieurs types\n");
try {
    const tableau = [1, "texte", true, null, undefined, {}];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 9 : Erreur - Paramètre n'est pas un tableau\n");
try {
    const pasDeTablieu = "pas un tableau";
    console.log("Paramètre :", pasDeTablieu);
    const resultat = contientQueDesNombres(pasDeTablieu);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 10 : Erreur - Paramètre manquant\n");
try {
    const resultat = contientQueDesNombres();
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 11 : Erreur - NaN dans le tableau\n");
try {
    const tableau = [1, 5, NaN, 8];
    console.log("Tableau :", tableau);
    const resultat = contientQueDesNombres(tableau);
    console.log(`✓ Résultat : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}`);
    console.log("Note : NaN est de type 'number' mais n'est pas valide\n");
}

console.log("\n" + "=".repeat(50));

// ===== EXPLICATIONS PÉDAGOGIQUES =====
/*
🎓 Concepts clés du TP6 :

1. VALIDATION DE TABLEAU
   - Vérifier que le paramètre existe (undefined/null)
   - Vérifier que c'est bien un tableau avec Array.isArray()
   - Parcourir chaque élément et vérifier son type

2. ARRAY.isArray()
   - Méthode pour vérifier si une valeur est un tableau
   - typeof [] === 'object' (pas assez précis)
   - Array.isArray([]) === true
   - Array.isArray("texte") === false

3. MESSAGES D'ERREUR DÉTAILLÉS
   - Indiquer l'index de l'élément problématique
   - Préciser le type reçu
   - Afficher la valeur pour faciliter le débogage
   - Utiliser JSON.stringify() pour afficher les objets

4. CAS PARTICULIER : NaN
   - NaN signifie "Not a Number"
   - typeof NaN === 'number' (quirk JavaScript)
   - Il faut utiliser isNaN() pour détecter NaN
   - NaN !== NaN (seule valeur non égale à elle-même)

5. JSON.stringify()
   - Convertit une valeur en chaîne JSON
   - Utile pour afficher des objets dans les messages d'erreur
   - JSON.stringify({a: 1}) → '{"a":1}'
   - JSON.stringify([1, 2]) → '[1,2]'

⚠️ DIFFÉRENCE TP5 vs TP6 :
- TP5 : Retourne true/false
- TP6 : Throw avec messages détaillés (index, type, valeur)
- TP6 : Validation du paramètre (existence, type tableau)
- TP6 : Gestion de NaN
*/
