// ===== EXERCICE FonctionPhraseMaj (TP6 - Version robuste) =====
// Description : Mettre la première lettre de chaque mot en majuscule avec validation
// Concepts : manipulation de chaînes, réutilisation de fonctions, throw, try/catch
// Objectif TP6 : Gestion d'erreurs robuste avec validation à plusieurs niveaux

console.log("=== EXERCICE FonctionPhraseMaj (TP6) ===\n");

// --- Fonction auxiliaire (avec validation) ---
/**
 * Met la première lettre d'une chaîne en majuscule
 * @param {string} chaine - La chaîne à transformer
 */
function mettreEnMajuscule(chaine) {
    // Validation : c'est bien une chaîne ?
    if (typeof chaine !== "string") {
        throw `Le paramètre doit être une chaîne de caractères (type reçu : ${typeof chaine})`;
    }

    // Cas particulier : chaîne vide
    if (chaine.length === 0) {
        return chaine;
    }

    // Transformation
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// --- Fonction principale (avec validation) ---
/**
 * Met la première lettre de chaque mot en majuscule
 * @param {string} phrase - La phrase à transformer
 */
function mettrePhraseEnMajuscule(phrase) {
    // Validation 1 : Vérifier que le paramètre existe
    if (phrase === undefined || phrase === null) {
        throw "Le paramètre est obligatoire";
    }

    // Validation 2 : Vérifier que c'est bien une chaîne de caractères
    if (typeof phrase !== "string") {
        throw `Le paramètre doit être une chaîne de caractères (type reçu : ${typeof phrase})`;
    }

    // Étape 1 : Découper la phrase en mots (split sur les espaces)
    const mots = phrase.split(" ");

    // Étape 2 : Créer un tableau pour stocker les mots transformés
    const motsTransformes = [];

    // Étape 3 : Parcourir chaque mot et mettre sa première lettre en majuscule
    for (let i = 0; i < mots.length; i++) {
        // Appeler la fonction auxiliaire pour transformer chaque mot
        // Si mettreEnMajuscule lance une erreur, elle sera propagée
        const motAvecMajuscule = mettreEnMajuscule(mots[i]);
        motsTransformes.push(motAvecMajuscule);
    }

    // Étape 4 : Reconstruire la phrase en joignant les mots avec des espaces
    const phraseTransformee = motsTransformes.join(" ");

    return phraseTransformee;
}

// --- Tests avec gestion d'erreurs ---
console.log("Test 1 : Cas nominal (phrase en minuscules)\n");
try {
    const phrase = "bonjour tout le monde";
    console.log(`Entrée : "${phrase}"`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 2 : Autre phrase\n");
try {
    const phrase = "javascript est un langage de programmation";
    console.log(`Entrée : "${phrase}"`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 3 : Phrase courte\n");
try {
    const phrase = "hello world";
    console.log(`Entrée : "${phrase}"`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 4 : Un seul mot\n");
try {
    const phrase = "bonjour";
    console.log(`Entrée : "${phrase}"`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 5 : Phrase déjà en majuscules\n");
try {
    const phrase = "HELLO WORLD";
    console.log(`Entrée : "${phrase}"`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"`);
    console.log("Note : Les premières lettres restent en majuscule\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 6 : Première lettre de chaque mot déjà en majuscule\n");
try {
    const phrase = "Hello World";
    console.log(`Entrée : "${phrase}"`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 7 : Chaîne vide\n");
try {
    const phrase = "";
    console.log(`Entrée : "${phrase}"`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"`);
    console.log("Note : Chaîne vide retournée telle quelle\n");
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 8 : Erreur - Type number\n");
try {
    const phrase = 12345;
    console.log(`Entrée : ${phrase}`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 9 : Erreur - Type boolean\n");
try {
    const phrase = false;
    console.log(`Entrée : ${phrase}`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 10 : Erreur - Tableau\n");
try {
    const phrase = ["hello", "world"];
    console.log(`Entrée :`, phrase);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 11 : Erreur - null\n");
try {
    const phrase = null;
    console.log(`Entrée : ${phrase}`);
    const resultat = mettrePhraseEnMajuscule(phrase);
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("Test 12 : Erreur - Paramètre manquant\n");
try {
    const resultat = mettrePhraseEnMajuscule();
    console.log(`✓ Résultat : "${resultat}"\n`);
} catch (error) {
    console.log(`✗ Erreur capturée : ${error}\n`);
}

console.log("\n" + "=".repeat(50));

// ===== EXPLICATIONS PÉDAGOGIQUES =====
/*
🎓 Concepts clés du TP6 :

1. RÉUTILISATION DE FONCTIONS
   - mettrePhraseEnMajuscule() utilise mettreEnMajuscule()
   - Chaque fonction a une responsabilité claire
   - Code modulaire et réutilisable

2. MÉTHODES DE STRING
   - split(" ") : découpe la phrase en tableau de mots
   - join(" ") : reconstruit la phrase à partir du tableau
   - Exemple : "hello world".split(" ") → ["hello", "world"]
   - Exemple : ["Hello", "World"].join(" ") → "Hello World"

3. VALIDATION À PLUSIEURS NIVEAUX
   - mettrePhraseEnMajuscule valide son paramètre (string)
   - mettreEnMajuscule valide aussi son paramètre
   - Protection en profondeur (defense in depth)

4. PROPAGATION D'ERREURS
   - Si mettreEnMajuscule lance throw, l'erreur remonte
   - mettrePhraseEnMajuscule n'a pas besoin de try/catch interne
   - L'appelant principal gère l'erreur avec try/catch

5. ALGORITHME
   - Découper la phrase en mots (split)
   - Transformer chaque mot (boucle + fonction auxiliaire)
   - Reconstruire la phrase (join)

⚠️ DIFFÉRENCE TP5 vs TP6 :
- TP5 : Pas de validation, crash si type invalide
- TP6 : Validation stricte avec throw/catch à plusieurs niveaux
- TP6 : Messages d'erreur clairs à chaque niveau

💡 EXEMPLE DE TRANSFORMATION :
- "bonjour tout le monde" → "Bonjour Tout Le Monde"
- "hello world" → "Hello World"
- "javascript" → "Javascript"
- "" → ""

💡 ALTERNATIVE MODERNE :
- phrase.split(" ").map(mot => mettreEnMajuscule(mot)).join(" ")
- Plus concis mais on privilégie les boucles pour l'apprentissage
*/
