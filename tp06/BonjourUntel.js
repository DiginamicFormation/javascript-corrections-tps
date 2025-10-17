// ===== EXERCICE BonjourUntel (TP6 - Version robuste) =====
// Description : Fonction qui affiche "Bonjour" suivi d'un prénom avec validation stricte
// Concepts : fonctions, paramètres, validation de type, throw, try/catch
// Objectif TP6 : Ajouter une gestion d'erreurs robuste avec exceptions

console.log("=== EXERCICE BonjourUntel (TP6) ===\n");

// --- Fonction avec validation ---
/**
 * Affiche un message de salutation personnalisé
 * @param {string} prenom - Le prénom à afficher (doit être une chaîne non vide)
 */
function bonjourUntel(prenom) {
    // Validation 1 : Vérifier que le paramètre existe
    if (prenom === undefined || prenom === null) {
        throw "Le paramètre 'prenom' est obligatoire";
    }

    // Validation 2 : Vérifier que c'est bien une chaîne de caractères
    if (typeof prenom !== "string") {
        throw `Le paramètre doit être une chaîne de caractères (type reçu : ${typeof prenom})`;
    }

    // Validation 3 : Vérifier que la chaîne n'est pas vide
    if (prenom.trim() === "") {
        throw "Le prénom ne peut pas être vide ou composé uniquement d'espaces";
    }

    // Si toutes les validations passent, afficher le message
    console.log(`Bonjour ${prenom.trim()} !`);
}

// --- Tests avec gestion d'erreurs ---
console.log("Test 1 : Cas nominal (prénom valide)\n");
try {
    bonjourUntel("Alice");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 2 : Cas nominal (autre prénom)\n");
try {
    bonjourUntel("Bob");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 3 : Prénom avec espaces (devrait fonctionner)\n");
try {
    bonjourUntel("  Marie  ");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 4 : Erreur - Chaîne vide\n");
try {
    bonjourUntel("");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 5 : Erreur - Que des espaces\n");
try {
    bonjourUntel("   ");
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 6 : Erreur - Type number\n");
try {
    bonjourUntel(123);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 7 : Erreur - Type boolean\n");
try {
    bonjourUntel(true);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 8 : Erreur - Paramètre manquant (undefined)\n");
try {
    bonjourUntel();
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 9 : Erreur - null\n");
try {
    bonjourUntel(null);
    console.log("✓ Succès\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("\n" + "=".repeat(50));

// ===== EXPLICATIONS PÉDAGOGIQUES =====
/*
🎓 Concepts clés du TP6 :

1. VALIDATION EN CASCADE
   - On vérifie d'abord si le paramètre existe (undefined/null)
   - Puis on vérifie son type (string)
   - Enfin on vérifie sa validité (non vide)

2. THROW
   - throw "message" : déclenche une exception avec un message d'erreur
   - Arrête l'exécution de la fonction immédiatement
   - L'erreur remonte jusqu'au bloc catch le plus proche

3. TRY/CATCH
   - try { } : bloc où on teste le code potentiellement risqué
   - catch (error) { } : bloc qui gère l'erreur si elle survient
   - Le paramètre 'error' contient le message lancé par throw

4. TRIM()
   - Enlève les espaces en début et fin de chaîne
   - Utile pour valider et nettoyer les entrées utilisateur
   - "  Alice  ".trim() => "Alice"

5. MESSAGES D'ERREUR DESCRIPTIFS
   - Indiquer le type attendu vs type reçu
   - Expliquer pourquoi la validation échoue
   - Aider le développeur à corriger rapidement

⚠️ DIFFÉRENCE TP5 vs TP6 :
- TP5 : Validation simple avec if/else et return
- TP6 : Validation robuste avec throw et gestion d'erreurs obligatoire (try/catch)
- TP6 : Messages d'erreur détaillés pour chaque cas invalide
*/
