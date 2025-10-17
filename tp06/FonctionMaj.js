// ===== EXERCICE FonctionMaj (TP6 - Version robuste) =====
// Description : Mettre la première lettre d'une chaîne en majuscule avec validation
// Concepts : manipulation de chaînes, throw, try/catch, validation de type
// Objectif TP6 : Gestion d'erreurs robuste avec throw/catch

console.log("=== EXERCICE FonctionMaj (TP6) ===\n");

// --- Fonction avec validation ---
/**
 * Met la première lettre d'une chaîne en majuscule
 * @param {string} chaine - La chaîne à transformer
 */
function mettreEnMajuscule(chaine) {
    // Validation 1 : Vérifier que le paramètre existe
    if (chaine === undefined || chaine === null) {
        throw "Le paramètre est obligatoire";
    }

    // Validation 2 : Vérifier que c'est bien une chaîne de caractères
    if (typeof chaine !== "string") {
        throw `Le paramètre doit être une chaîne de caractères (type reçu : ${typeof chaine})`;
    }

    // Cas particulier : chaîne vide (retourner telle quelle)
    if (chaine.length === 0) {
        return chaine;
    }

    // Transformation : première lettre en majuscule + reste de la chaîne
    const premiereLettreMaj = chaine.charAt(0).toUpperCase();
    const resteChaine = chaine.slice(1);

    return premiereLettreMaj + resteChaine;
}

// --- Tests avec gestion d'erreurs ---
console.log("Test 1 : Cas nominal (mot en minuscules)\n");
try {
    const texte = "bonjour";
    console.log(`Entrée : "${texte}"`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 2 : Autre mot\n");
try {
    const texte = "javascript";
    console.log(`Entrée : "${texte}"`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 3 : Mot déjà en majuscule\n");
try {
    const texte = "HELLO";
    console.log(`Entrée : "${texte}"`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"`);
    console.log("Note : La première lettre reste en majuscule\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 4 : Première lettre déjà en majuscule\n");
try {
    const texte = "Hello";
    console.log(`Entrée : "${texte}"`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 5 : Un seul caractère\n");
try {
    const texte = "a";
    console.log(`Entrée : "${texte}"`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 6 : Chaîne vide\n");
try {
    const texte = "";
    console.log(`Entrée : "${texte}"`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"`);
    console.log("Note : Chaîne vide retournée telle quelle\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 7 : Phrase complète\n");
try {
    const texte = "hello world";
    console.log(`Entrée : "${texte}"`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"`);
    console.log("Note : Seule la première lettre est en majuscule\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 8 : Erreur - Type number\n");
try {
    const texte = 12345;
    console.log(`Entrée : ${texte}`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 9 : Erreur - Type boolean\n");
try {
    const texte = true;
    console.log(`Entrée : ${texte}`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 10 : Erreur - Objet\n");
try {
    const texte = {valeur: "hello"};
    console.log(`Entrée :`, texte);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 11 : Erreur - null\n");
try {
    const texte = null;
    console.log(`Entrée : ${texte}`);
    const resultat = mettreEnMajuscule(texte);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 12 : Erreur - Paramètre manquant\n");
try {
    const resultat = mettreEnMajuscule();
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("\n" + "=".repeat(50));

// ===== EXPLICATIONS PÉDAGOGIQUES =====
/*
🎓 Concepts clés du TP6 :

1. MANIPULATION DE CHAÎNES
   - charAt(0) : récupère le premier caractère
   - toUpperCase() : convertit en majuscule
   - slice(1) : récupère tout sauf le premier caractère
   - Concaténation : premiereLettre + reste

2. MÉTHODES DE STRING
   - charAt(index) : caractère à la position index
   - slice(début, fin) : extrait une portion de chaîne
   - toUpperCase() : convertit tout en majuscules
   - toLowerCase() : convertit tout en minuscules

3. CAS PARTICULIER : CHAÎNE VIDE
   - length === 0
   - Pas de première lettre à mettre en majuscule
   - Retourner la chaîne telle quelle

4. VALIDATION STRICTE
   - Vérifier l'existence (undefined/null)
   - Vérifier le type (string)
   - throw si invalide
   - Les méthodes de string ne fonctionnent que sur des strings

5. POURQUOI LA VALIDATION EST CRITIQUE
   - Sans validation, chaine.charAt(0) crash si chaine n'est pas string
   - TypeError: chaine.charAt is not a function
   - Meilleur message d'erreur avec validation

⚠️ DIFFÉRENCE TP5 vs TP6 :
- TP5 : Pas de validation, crash si type invalide
- TP6 : Validation avec throw/catch, messages d'erreur clairs
- TP6 : Gestion des cas limites (null, undefined)

💡 EXEMPLE DE TRANSFORMATION :
- "bonjour" → "Bonjour"
- "hello world" → "Hello world" (un seul mot mis en majuscule)
- "a" → "A"
- "" → ""

💡 ALTERNATIVE MODERNE :
- chaine[0] au lieu de chaine.charAt(0)
- Mais charAt() est plus explicite pour l'apprentissage
*/
