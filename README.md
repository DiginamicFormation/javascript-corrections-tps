# TP JavaScript - CORRECTIONS

Dépôt de corrections des TPs JavaScript pour les modules Introduction JS et JS avancé de Diginamic Formation.

## À propos

Ce dépôt contient les **corrections officielles** des exercices JavaScript organisés par thème :
- **TP3** : Algorithmie (tableaux, boucles, conditions)
- **TP5** : Fonctions (paramètres, return, closures, objets)
- **TP6** : Fonctions et robustesse (validation, exceptions, try/catch)

Ces corrections sont destinées aux apprenants de Diginamic Formation comme support pédagogique et référence pour valider leurs solutions.

## Utilisation pour les apprenants

### Avant de consulter les corrections :
1. Essayez de résoudre l'exercice par vous-même
2. Testez votre solution avec différents cas
3. Comparez votre approche avec la correction proposée
4. Analysez les différences et les optimisations possibles

### Comment utiliser ce dépôt :
- Les exercices sont organisés par dossier (tp03, tp05, tp06)
- Chaque exercice est dans un fichier séparé nommé `nomExercice.js`
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

## Structure du projet

```
tp_javascript/
├── tp03/          # TP3 - Algorithmie (16 exercices)
├── tp05/          # TP5 - Fonctions (9 exercices)
├── tp06/          # TP6 - Fonctions robustes (6 exercices)
├── tp-03-algorithmie-javascript.pdf
├── tp-05-fonctions.pdf
└── tp-06-fonctions-robustesse.pdf
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

## Consignes qualité

- Soigner la présentation des résultats
- Respecter les consignes de chaque exercice
- Coder de manière professionnelle
- Nommer les fichiers correctement
- Commenter le code si nécessaire

## Technologies

- JavaScript (ES6+)
- Node.js (pour l'exécution)

## Exécution des corrections

Pour exécuter une correction :

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

**Note** : Le TP6 reprend les exercices du TP5 en ajoutant la gestion d'erreurs robuste. Les apprenants peuvent comparer les deux versions pour comprendre l'importance de la validation.

## Notes pour les formateurs

Ce dépôt est conçu pour être facilement maintenu et étendu. Chaque correction inclut :
- Le code fonctionnel testé
- Des commentaires expliquant la logique
- Des exemples d'affichage clairs
- Éventuellement des variantes de solution

## Auteur et maintenance

**Lucas Preaux** (lpreaux)
Formateur - Diginamic Formation

## Licence

Ce contenu pédagogique est destiné exclusivement aux apprenants de Diginamic Formation.
