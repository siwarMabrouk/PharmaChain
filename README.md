
**PharmaChain** est un réseau inter-pharmacie innovant qui permet aux pharmacies de se connecter et de s’échanger des médicaments.  

##  Fonctionnalités
-Les pharmacies peuvent commander des médicaments en rupture de stock auprès d’autres pharmacies du résea
-Rôle Admin : reçoit et valide les commandes.
-Après validation par l’admin, une livraison est automatiquement déclenchée du médicament depuis la pharmacie source vers la pharmacie destinataire.
-Suivi complet de l’historique des commandes et des échanges entre pharmacies.

## Technologies utilisées
- Frontend : Angular  
- Backend : NestJS  
- Base de données : PostgreSQL

 ##  Prérequis pour installer PharmaChain
Avant de pouvoir installer et lancer le projet, assurez-vous que votre machine dispose des éléments suivants :  

 1. Logiciels de base
- Node.js : un environnement d’exécution JavaScript côté serveur(version 16 ou supérieure)  
- npm : le gestionnaire de paquets de Node.js (version 8 ou supérieure)   

2.Installer les outils nécessaires
-NestJS CLI : npm install -g @nestjs/cli
-Angular CLI : npm install -g @angular/cli

##  Base de données et TypeORM
PharmaChain utilise **PostgreSQL** comme base de données et **TypeORM**pour gérer les interactions entre le backend NestJS et la base de données.
TypeORM est un ORM (Object-Relational Mapping) qui permet de manipuler des tables de la base de données comme des objets JavaScript/TypeScript.  

<img width="950" height="315" alt="Capture d&#39;écran 2025-11-30 194602" src="https://github.com/user-attachments/assets/f3b82380-8ea1-4882-850b-f205ffdad37c" />

# Installer les dépendances Backend
cd pharmachain-backend
npm install

-->**npm install** : lit le fichier `package.json` du backend et  télécharge et installe toutes les dépendances nécessaires pour que le backend fonctionne correctement (NestJS, TypeORM, PostgreSQL driver)

# Installer les dépendances Frontend
cd angular
npm install

--> Comme pour le backend, cette commande lit le fichier package.json du frontend et installe toutes les dépendances nécessaires pour Angular (framework Angular, RxJS, Angular CLI, etc.).



## Lancer Back-End 
cd pharmachain-backend /
npm run start:d

## Lancer Front-End 
cd angular /
ng s -o

## Sécurité des mots de passe
-PharmaChain utilise **bcrypt** pour sécuriser les mots de passe des utilisateurs .

-Les mots de passe ne sont jamais stockés en clair dans la base de données.  

-Bcrypt transforme le mot de passeen **hash sécurisé**
 
<img width="393" height="43" alt="Capture d&#39;écran 2025-11-30 201143" src="https://github.com/user-attachments/assets/f969bfac-2afc-4f6b-ad1a-169cf96addd5" />

<img width="685" height="72" alt="Capture d&#39;écran 2025-11-30 201136" src="https://github.com/user-attachments/assets/3a2475b0-893e-4229-a6be-dd8fcd837277" />

- Le nombre `10` dans `bcrypt.hash(password, 10)` correspond aux **salt rounds**, c’est-à-dire le nombre d’itérations pour générer le hash. Plus ce nombre est élevé, plus le hash est sécurisé.





