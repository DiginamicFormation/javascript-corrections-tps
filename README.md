# TP JavaScript - CORRECTIONS

Dépôt de corrections des TPs JavaScript pour les modules Introduction JS et JS avancé de Diginamic Formation.

## À propos

Ce dépôt contient les **corrections officielles** des exercices JavaScript organisés par thème :
- **TP3** : Algorithmie (tableaux, boucles, conditions)
- **TP5** : Fonctions (paramètres, return, closures, objets)
- **TP6** : Fonctions et robustesse (validation, exceptions, try/catch)
- **TP8** : Manipulation du DOM (querySelector, événements, formulaires, JSON local)
- **TP9** : AJAX et HTML (requêtes HTTP, manipulation DOM, données JSON distantes)

Ces corrections sont destinées aux apprenants de Diginamic Formation comme support pédagogique et référence pour valider leurs solutions.

## Utilisation pour les apprenants

### Avant de consulter les corrections :
1. Essayez de résoudre l'exercice par vous-même
2. Testez votre solution avec différents cas
3. Comparez votre approche avec la correction proposée
4. Analysez les différences et les optimisations possibles

### Comment utiliser ce dépôt :
- Les exercices sont organisés par dossier (tp03, tp05, tp06, tp08, tp09)
- Chaque exercice est dans un fichier séparé
  - **TP3, TP5, TP6** : fichiers `.js` uniquement
  - **TP8, TP9** : paires de fichiers `.html` + `.js`
- Les corrections sont commentées pour expliquer la logique
- Plusieurs approches peuvent être présentées (classique, moderne, optimisée)
- N'hésitez pas à tester et modifier les corrections pour mieux comprendre

## Objectifs pédagogiques

### TP3 - Algorithmie
- Maîtriser les boucles (for, while)
- Manipuler des tableaux (parcours, recherche, modification)
- Utiliser les conditions
- Développer la logique algorithmique

### TP5 - Fonctions
- Créer et utiliser des fonctions
- Gérer les paramètres et valeurs de retour
- Comprendre les closures
- Manipuler les objets littéraux

### TP6 - Robustesse
- Valider les types de données
- Gérer les erreurs avec throw et try/catch
- Écrire des fonctions robustes
- Créer des messages d'erreur explicites

### TP8 - Manipulation du DOM
- Sélectionner des éléments (getElementById, querySelector)
- Gérer les événements (onclick, onload)
- Valider des formulaires
- Manipuler le DOM (textContent, innerHTML, className)
- Travailler avec des données JSON locales

### TP9 - AJAX et HTML
- Effectuer des requêtes AJAX avec XMLHttpRequest
- Récupérer des données depuis des APIs REST
- Parser du JSON avec JSON.parse()
- Afficher des données dynamiques dans une page
- Gérer les états de requête (readyState, status)

## Structure du projet

```
tp_javascript/
├── tp03/          # TP3 - Algorithmie (16 exercices .js)
├── tp05/          # TP5 - Fonctions (9 exercices .js)
├── tp06/          # TP6 - Fonctions robustes (6 exercices .js)
├── tp08/          # TP8 - Manipulation DOM (5 exercices .html + .js)
├── tp09/          # TP9 - AJAX et HTML (4 exercices .html + .js)
├── tp-03-algorithmie-javascript.pdf
├── tp-05-fonctions.pdf
├── tp-06-fonctions-robustesse.pdf
├── tp-08-manipulation-dom.pdf
├── tp-09-ajax-et-html.pdf
└── CLAUDE.md      # Instructions pour l'assistant IA
```

## Liste des exercices

### TP3 - Algorithmie (16 exercices)

#### Exercices de base
1. **AffichageSuivant** - Afficher les 10 valeurs suivantes d'un nombre
2. **CalculSomme** - Calculer la somme de 1 à N
3. **AffichageInverse** - Parcourir et afficher un tableau dans l'ordre inverse
4. **InversionContenu** - Créer une copie inversée d'un tableau

#### Exercices de filtrage
5. **AffichagePartiel** - Filtrer et afficher des éléments selon différents critères
6. **RechercheMax** - Trouver le plus grand élément d'un tableau
7. **RechercheMin** - Trouver le plus petit élément d'un tableau
8. **CalculMoyenne** - Calculer la moyenne des éléments

#### Exercices avancés
9. **SommeDeTableaux** - Additionner deux tableaux de même taille
10. **SommeDeTableauxDiff** - Additionner deux tableaux de tailles différentes
11. **ComparaisonTableau** - Compter les éléments communs entre deux tableaux
12. **FirstLast6** - Vérifier si le premier ou dernier élément vaut 6
13. **FirstLast** - Vérifier si le premier et dernier élément sont identiques

#### Exercices facultatifs
14. **Rotation** - Effectuer une rotation à droite des éléments
15. **InteractifTableMult** - Afficher la table de multiplication
16. **InteractifFibonnaci** - Calculer la suite de Fibonacci

### TP5 - Fonctions (9 exercices)

1. **FonctionConstante** - Fonction qui retourne une constante
2. **BonjourUntel** - Fonction avec paramètre pour afficher un message
3. **FonctionCalcul** - Fonction avec deux paramètres et calcul
4. **FonctionControleTableau** - Vérifier qu'un tableau contient que des nombres
5. **FonctionMoyenne** - Calculer la moyenne avec gestion d'erreurs basique
6. **FonctionMaj** - Mettre la première lettre en majuscule
7. **FonctionPhraseMaj** - Mettre chaque mot en majuscule
8. **FonctionRetourneFonction** - Fonction qui retourne une fonction (closure)
9. **GestionnaireTaches** - Objet littéral pour gérer des tâches

### TP6 - Fonctions et Robustesse (6 exercices)

1. **FonctionMoyenne** - Version avec throw et try/catch
2. **BonjourUntel** - Version avec validation de type
3. **FonctionCalcul** - Version avec validation des paramètres
4. **FonctionControleTableau** - Version avec messages d'erreur détaillés
5. **FonctionMaj** - Version avec validation de type
6. **FonctionPhraseMaj** - Version avec validation à plusieurs niveaux

### TP8 - Manipulation du DOM (5 exercices)

1. **Addition** ([tp08-addition.html](tp08/tp08-addition.html) + [.js](tp08/tp08-addition.js))
   - Additionner deux nombres avec validation
   - Concepts : getElementById, isNaN(), onclick, messages d'erreur/succès

2. **Operation** ([tp08-operation.html](tp08/tp08-operation.html) + [.js](tp08/tp08-operation.js))
   - Calculatrice avec 4 opérations (+, -, *, /)
   - Concepts : select, switch/case, validation, division par zéro

3. **ControleFormulaire** ([tp08-formulaire.html](tp08/tp08-formulaire.html) + [.js](tp08/tp08-formulaire.js))
   - Validation de formulaire d'inscription (nom, prénom, date de naissance)
   - Concepts : Validation de formulaire, trim(), gestion d'erreurs multiples

4. **AffichageJson** ([tp08-affichage-json.html](tp08/tp08-affichage-json.html) + [.js](tp08/tp08-affichage-json.js))
   - Afficher des données JSON dans la page
   - Concepts : JSON local, body onload, modification h1/h2, boucle sur tableau

5. **TableauPays [DIFFICILE]** ([tp08-tableau-pays.html](tp08/tp08-tableau-pays.html) + [.js](tp08/tp08-tableau-pays.js))
   - Afficher JSON dans un tableau HTML avec drapeaux
   - Concepts : Génération de tbody, images dynamiques, tableaux HTML

### TP9 - AJAX et HTML (4 exercices)

1. **ConstruireTableauPays** ([ConstruireTableauPays.html](tp09/ConstruireTableauPays.html) + [.js](tp09/ConstruireTableauPays.js))
   - Récupérer des données de pollution via AJAX et les afficher dans un tableau HTML
   - API : `https://digicode.cleverapps.io/json/pays/pollution`
   - Concepts : XMLHttpRequest, manipulation DOM, tableaux HTML dynamiques

2. **AffichageDonnees** ([tp09-affichageDonnees.html](tp09/tp09-affichageDonnees.html) + [.js](tp09/tp09-affichageDonnees.js))
   - Récupérer les données des pays et les afficher en JSON brut
   - API : RestCountries v2
   - Concepts : XMLHttpRequest, readyState, status

3. **AffichagePaysInfos** ([tp09-affichagePaysInfos.html](tp09/tp09-affichagePaysInfos.html) + [.js](tp09/tp09-affichagePaysInfos.js))
   - Afficher les informations sélectionnées de chaque pays (nom, capitale, population, région)
   - API : RestCountries v2
   - Concepts : JSON.parse(), accès aux propriétés d'objets, affichage formaté

4. **AffichagePaysEtCapitaleListe [DIFFICILE]** ([tp09-affichagePaysEtCapitaleListe.html](tp09/tp09-affichagePaysEtCapitaleListe.html) + [.js](tp09/tp09-affichagePaysEtCapitaleListe.js))
   - Afficher les pays dans un tableau HTML avec tri sur la population
   - API : RestCountries v2
   - Concepts : Tableaux HTML, tri de données (sort()), icônes Font Awesome, gestion d'états
   - Fonctionnalité : Tri cyclique (non trié → croissant → décroissant → non trié)

## Consignes qualité

- Soigner la présentation des résultats
- Respecter les consignes de chaque exercice
- Coder de manière professionnelle
- Nommer les fichiers correctement
- Commenter le code si nécessaire

## Technologies

- JavaScript (ES6+)
- Node.js (pour l'exécution des TP3, TP5, TP6)
- HTML5 / CSS3 (pour les TP8 et TP9)
- APIs REST publiques (pour le TP9)

## Exécution des corrections

### TP3, TP5, TP6 : Exécution avec Node.js

```bash
# TP3 - Algorithmie
node tp03/AffichageSuivant.js
node tp03/CalculSomme.js

# TP5 - Fonctions (version simple)
node tp05/FonctionMoyenne.js
node tp05/GestionnaireTaches.js

# TP6 - Fonctions robustes (version améliorée)
node tp06/FonctionMoyenne.js
node tp06/BonjourUntel.js
```

### TP8, TP9 : Ouverture dans un navigateur

```bash
# Option 1 : Double-clic sur les fichiers HTML
tp08/tp08-addition.html
tp08/tp08-tableau-pays.html
tp09/ConstruireTableauPays.html

# Option 2 : Serveur local (recommandé pour éviter les problèmes CORS avec TP9)
# Avec Live Server (VSCode)
# Avec http-server (npm install -g http-server)
http-server
```

**Notes importantes** :
- Le **TP6** reprend les exercices du TP5 en ajoutant la gestion d'erreurs robuste. Les apprenants peuvent comparer les deux versions pour comprendre l'importance de la validation.
- Les **TP8 et TP9** nécessitent un navigateur web pour fonctionner.
- Pour le **TP9**, un serveur local est recommandé pour éviter les problèmes de CORS lors des requêtes AJAX.

## APIs utilisées (TP9)

- **API Pollution** : `https://digicode.cleverapps.io/json/pays/pollution`
  - Données de pollution CO2 par pays

- **API REST Countries** : `https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital`
  - Informations sur tous les pays du monde

## Notes pour les formateurs

Ce dépôt est conçu pour être facilement maintenu et étendu. Chaque correction inclut :
- Le code fonctionnel testé
- Des commentaires pédagogiques expliquant la logique
- Des exemples d'affichage clairs
- Des notes sur les méthodes modernes (comparaison classique vs ES6+)
- Éventuellement des variantes de solution

Le fichier [CLAUDE.md](CLAUDE.md) contient des instructions détaillées pour l'assistant IA qui aide à maintenir ce dépôt.

## Progression pédagogique recommandée

1. **TP3** : Bases de l'algorithmie avec JavaScript
2. **TP5** : Introduction aux fonctions
3. **TP6** : Robustesse et gestion d'erreurs
4. **TP8** : Manipulation du DOM et événements
5. **TP9** : AJAX et communication avec des APIs

## Auteur et maintenance

**Lucas Preaux** (lpreaux)
Formateur - Diginamic Formation

Corrections générées avec l'assistance de Claude Code (Anthropic) pour garantir la qualité pédagogique et le respect des bonnes pratiques.

## Licence

Ce contenu pédagogique est destiné exclusivement aux apprenants de Diginamic Formation.
