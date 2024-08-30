# Back-End

## Description

Partie back-end de l'application, construite en utilisant Node.js et Express. Il gère la logique métier, les API, et la communication avec la base de données via Sequelize.

## Prérequis

Avant de commencer, assurez-vous que vous avez les éléments suivants installés sur votre machine :

-   [Node.js](https://nodejs.org/) (version 12 ou supérieure)
-   [MySQL](https://www.mysql.com/) (ou toute autre base de données compatible avec Sequelize)

## Installation

1. Clonez le dépôt :
   `bash
git clone https://github.com/username/repository.git
cd repository/back-end
`
2. Installez les dépendances :

```bash
npm install
```

3. Créez un fichier .env à la racine du projet pour les variables d'environnement :

```env
# Exemple de configuration .env
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME_DEV=yourdatabasenamefordev
DB_NAME_TEST=yourdatabasenamefortest
DB_NAME_PROD=yourdatabasenameforprod
DB_HOST=localhost
SECRET_KEY=yourjwtsecret
```

4. Initialisez la base de données avec Sequelize CLI :

```bash
npx sequelize-cli db:migrate
```

## Utilisation

Pour démarrer le serveur en développement :

```bash
npm start
```

Le serveur sera accessible à http://localhost:3000.

## Scripts npm

npm start : Démarre le serveur.
npm run test : Lancer les tests (aucun test n'est configuré pour l'instant).

## Dépendances

bcrypt : Utilisé pour le hachage des mots de passe.
cors : Middleware pour gérer les requêtes cross-origin.
dotenv : Charge les variables d'environnement depuis un fichier .env.
express : Framework web pour Node.js.
jsonwebtoken : Pour la gestion des tokens JWT.
mysql2 : Connecteur MySQL pour Node.js.
sequelize : ORM pour la gestion de la base de données.

## Dépendances de développement

sequelize-cli : Outils en ligne de commande pour Sequelize, utilisé pour gérer les migrations et modèles.
