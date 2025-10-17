// ===== EXERCICE FonctionMoyenne (TP6 - Version robuste) =====
// Description : Calculer la moyenne d'un tableau avec gestion d'exceptions
// Concepts : fonction, throw, try/catch, validation de tableau
// Objectif TP6 : Gestion d'erreurs robuste avec throw/catch

console.log("=== EXERCICE FonctionMoyenne (TP6) ===\n");

// --- Fonction avec validation ---
/**
 * Calcule la moyenne des éléments d'un tableau
 * @param {Array} tableau - Le tableau de nombres
 */
function calculerMoyenne(tableau) {
    // Validation 1 : Vérifier que le paramètre existe
    if (tableau === undefined || tableau === null) {
        throw "Le paramètre est obligatoire";
    }

    // Validation 2 : Vérifier que c'est bien un tableau
    if (!Array.isArray(tableau)) {
        throw `Le paramètre doit être un tableau (type reçu : ${typeof tableau})`;
    }

    // Validation 3 : Vérifier que le tableau n'est pas vide
    if (tableau.length === 0) {
        throw "Le tableau ne peut pas être vide (impossible de calculer une moyenne)";
    }

    // Validation 4 : Vérifier que tous les éléments sont des nombres
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== "number") {
            throw `L'élément à l'index ${i} n'est pas un nombre (type : ${typeof tableau[i]}, valeur : ${JSON.stringify(tableau[i])})`;
        }

        // Vérifier que ce n'est pas NaN
        if (isNaN(tableau[i])) {
            throw `L'élément à l'index ${i} est NaN (pas un nombre valide)`;
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

// --- Tests avec gestion d'erreurs ---
console.log("Test 1 : Cas nominal (nombres entiers)\n");
try {
    const tableau = [10, 15, 20, 5];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}`);
    console.log("Détail : (10 + 15 + 20 + 5) / 4 = 50 / 4 = 12.5\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 2 : Nombres décimaux\n");
try {
    const tableau = [5.5, 8.2, 3.3, 7.0];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}`);
    console.log("Détail : (5.5 + 8.2 + 3.3 + 7.0) / 4 = 24 / 4 = 6\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 3 : Nombres négatifs et positifs\n");
try {
    const tableau = [-10, 5, 15, -2, 12];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}`);
    console.log("Détail : (-10 + 5 + 15 - 2 + 12) / 5 = 20 / 5 = 4\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 4 : Erreur - Tableau contenant une chaîne\n");
try {
    const tableau = [10, 15, "texte", 20];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 5 : Erreur - Tableau contenant un booléen\n");
try {
    const tableau = [10, 15, true, 20];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 6 : Erreur - Tableau vide\n");
try {
    const tableau = [];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 7 : Erreur - Paramètre n'est pas un tableau\n");
try {
    const parametre = "ceci n'est pas un tableau";
    console.log("Paramètre :", parametre);
    const resultat = calculerMoyenne(parametre);
    console.log(`✓ Moyenne : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 8 : Erreur - Paramètre manquant\n");
try {
    const resultat = calculerMoyenne();
    console.log(`✓ Moyenne : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 9 : Erreur - Tableau avec null\n");
try {
    const tableau = [10, null, 20];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 10 : Erreur - Tableau avec NaN\n");
try {
    const tableau = [10, 15, NaN, 20];
    console.log("Tableau :", tableau);
    const resultat = calculerMoyenne(tableau);
    console.log(`✓ Moyenne : ${resultat}\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("\n" + "=".repeat(50));

// ===== EXPLICATIONS PÉDAGOGIQUES =====
/*
🎓 Concepts clés du TP6 :

1. CALCUL DE MOYENNE
   - Somme de tous les éléments / nombre d'éléments
   - Exemple : [10, 20, 30] → (10 + 20 + 30) / 3 = 20
   - Nécessite un tableau non vide

2. VALIDATION COMPLÈTE
   - Existence du paramètre (undefined/null)
   - Type tableau (Array.isArray)
   - Tableau non vide (length > 0)
   - Tous les éléments sont des nombres
   - Aucun NaN dans le tableau

3. THROW POUR INTERRUPTION
   - throw arrête immédiatement l'exécution
   - Le calcul n'est fait que si toutes les validations passent
   - L'erreur est capturée par le catch
   - Messages descriptifs pour chaque type d'erreur

4. GESTION DU TABLEAU VIDE
   - Impossible de calculer une moyenne avec 0 éléments
   - Division par zéro à éviter
   - throw une erreur explicite

5. ACCUMULATION
   - Variable somme initialisée à 0
   - Boucle for pour parcourir tous les éléments
   - somme += tableau[i] à chaque itération
   - moyenne = somme / tableau.length

⚠️ DIFFÉRENCE TP5 vs TP6 :
- TP5 : Retourne un message d'erreur (string)
- TP6 : throw avec gestion obligatoire par try/catch
- TP6 : Validation stricte de tous les cas d'erreur
- TP6 : Tableau vide génère une erreur (pas un résultat de 0)

💡 POURQUOI THROW ?
- Sépare le code normal du code d'erreur
- Force l'appelant à gérer les erreurs
- Plus professionnel et standard
- Permet de remonter les erreurs dans la pile d'appels
*/
