# 🌍 Epitech Exchange Budget Tracker

Un outil de gestion budgétaire open-source pensé pour les étudiants d'Epitech en mobilité internationale. 

Ce projet permet de tracker ses dépenses, de gérer les conversions de devises dynamiquement selon le pays d'accueil, et d'archiver automatiquement les transactions pour garder un dashboard performant.

## 🚀 Installation & Utilisation (En 3 étapes)

1. **Dupliquer le Master Template :**
   👉 [Clique ici pour créer ta propre copie du Google Sheet]([https://docs.google.com/spreadsheets/d/1zKT0se69DHSrHRLyYvT3qo8HiCPZxkdyRFJ4Ne2wWno/copy])

2. **Configurer sa destination :**
   - Rends-toi sur l'onglet `Dashboard`.
   - Utilise le menu déroulant pour sélectionner ton pays (ex: Thaïlande, Corée du Sud, Canada...).
   - Le tableau adaptera automatiquement les taux de change et les symboles monétaires !

3. Utiliser le formulaire mobile :
   - Un Google Form a été automatiquement copié dans ton Drive en même temps que ce tableur !
   - Pour trouver son lien et l'ajouter sur l'écran d'accueil de ton téléphone, va dans ton nouveau tableur, clique sur `Outils > Gérer le formulaire > Accéder au formulaire en ligne`.

## ⚙️ Architecture Technique & Apps Script

Ce projet n'est pas qu'un simple tableur, il embarque une logique logicielle via Google Apps Script (JavaScript) pour automatiser la gestion des données.

### Fonctionnalités scriptées actuelles :
* `clotureMensuelle()` : Transfère automatiquement les dépenses du mois précédent vers l'onglet "Archives" pour maintenir la réactivité du tableau principal.

## 🤝 Comment contribuer ?

Les contributions (PRs) sont les bienvenues pour ajouter de nouvelles destinations, affiner les taux de change ou proposer de nouvelles automatisations !

1. **Fork** le projet.
2. **Clone** en local et connecte ton propre Google Sheet de test via `clasp` :
   ```bash
   npm install -g @google/clasp
   clasp login
   clasp clone <TON_SCRIPT_ID_DE_TEST>