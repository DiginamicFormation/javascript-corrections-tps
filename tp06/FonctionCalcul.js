// ===== EXERCICE FonctionCalcul (TP6 - Version robuste) =====
// Description : Calculer a * b + a + b avec validation des paramètres
// Concepts : fonction avec plusieurs paramètres, validation de type, throw, try/catch
// Objectif TP6 : Ajouter une gestion d'erreurs robuste avec exceptions

console.log("=== EXERCICE FonctionCalcul (TP6) ===\n");

// --- Fonction avec validation ---
/**
 * Calcule a * b + a + b
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 */
function calculer(a, b) {
    // Validation 1 : Vérifier que le premier paramètre existe
    if (a === undefined || a === null) {
        throw "Le premier paramètre est obligatoire";
    }

    // Validation 2 : Vérifier que le premier paramètre est un nombre
    if (typeof a !== "number") {
        throw `Le premier paramètre doit être un nombre (type reçu : ${typeof a})`;
    }

    // Validation 3 : Vérifier que le deuxième paramètre existe
    if (b === undefined || b === null) {
        throw "Le deuxième paramètre est obligatoire";
    }

    // Validation 4 : Vérifier que le deuxième paramètre est un nombre
    if (typeof b !== "number") {
        throw `Le deuxième paramètre doit être un nombre (type reçu : ${typeof b})`;
    }

    // Validation 5 : Vérifier que les nombres sont valides (pas NaN)
    if (isNaN(a)) {
        throw "Le premier paramètre n'est pas un nombre valide (NaN)";
    }

    if (isNaN(b)) {
        throw "Le deuxième paramètre n'est pas un nombre valide (NaN)";
    }

    // Calcul : a * b + a + b
    return a * b + a + b;
}

// --- Tests avec gestion d'erreurs ---
console.log("Test 1 : Cas nominal (nombres valides)\n");
try {
    const resultat = calculer(5, 3);
    console.log(`calculer(5, 3) = ${resultat}`);
    console.log("Détail : 5 * 3 + 5 + 3 = 15 + 5 + 3 = 23");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 2 : Autres nombres\n");
try {
    const resultat = calculer(10, 2);
    console.log(`calculer(10, 2) = ${resultat}`);
    console.log("Détail : 10 * 2 + 10 + 2 = 20 + 10 + 2 = 32");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 3 : Nombres négatifs\n");
try {
    const resultat = calculer(-4, 7);
    console.log(`calculer(-4, 7) = ${resultat}`);
    console.log("Détail : -4 * 7 + (-4) + 7 = -28 - 4 + 7 = -25");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 4 : Erreur - Premier paramètre n'est pas un nombre\n");
try {
    const resultat = calculer("texte", 5);
    console.log(`Résultat : ${resultat}`);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 5 : Erreur - Deuxième paramètre n'est pas un nombre\n");
try {
    const resultat = calculer(5, "texte");
    console.log(`Résultat : ${resultat}`);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 6 : Erreur - Deux chaînes de caractères\n");
try {
    const resultat = calculer("Hello", "World");
    console.log(`Résultat : ${resultat}`);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 7 : Erreur - Booléens\n");
try {
    const resultat = calculer(true, false);
    console.log(`Résultat : ${resultat}`);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 8 : Erreur - Premier paramètre manquant\n");
try {
    const resultat = calculer();
    console.log(`Résultat : ${resultat}`);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 9 : Erreur - Deuxième paramètre manquant\n");
try {
    const resultat = calculer(5);
    console.log(`Résultat : ${resultat}`);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 10 : Erreur - NaN comme paramètre\n");
try {
    const resultat = calculer(NaN, 5);
    console.log(`Résultat : ${resultat}`);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("\n" + "=".repeat(50));

// ===== EXPLICATIONS PÉDAGOGIQUES =====
/*
🎓 Concepts clés du TP6 :

1. VALIDATION MULTIPLE
   - Vérifier chaque paramètre individuellement
   - Messages d'erreur spécifiques pour chaque cas
   - Ordre logique : existence → type → validité

2. isNaN()
   - Vérifie si une valeur est NaN (Not a Number)
   - NaN est de type 'number' mais invalide
   - typeof NaN === 'number' → true
   - isNaN(NaN) → true

3. MESSAGES D'ERREUR PRÉCIS
   - Indiquer quel paramètre pose problème (premier ou deuxième)
   - Préciser le type attendu et le type reçu
   - Facilite le débogage pour le développeur

4. TRY/CATCH AVEC CALCUL
   - Le résultat n'est calculé que si toutes les validations passent
   - En cas d'erreur, le calcul n'est jamais effectué
   - Le catch récupère le message d'erreur

5. FORMULE MATHÉMATIQUE
   - calculer(a, b) = a * b + a + b
   - Exemple : calculer(5, 3) = 5 * 3 + 5 + 3 = 15 + 5 + 3 = 23

⚠️ DIFFÉRENCE TP5 vs TP6 :
- TP5 : Pas de validation, retourne NaN si types invalides
- TP6 : Validation stricte avec throw, erreurs explicites
- TP6 : Vérification de NaN pour éviter les calculs invalides
*/
