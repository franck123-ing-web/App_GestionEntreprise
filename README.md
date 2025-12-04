Ce projet consiste à créer une application permettant de consulter, ajouter, modifier et supprimer des entreprises extraites de la base de données belge KBO

L'application repose sur :

Un backend Node.js/Express avec ORM Sequelize

Une base de données MySQL (via XAMPP)

Un loader CSV performant permettant d’importer des millions de lignes sans surcharge mémoire

Un frontend React offrant une interface CRUD simple

Le résultat final permet :

. D’importer automatiquement les données depuis les fichiers KBO (CSV)
. De visualiser toutes les entreprises
. D’effectuer des opérations CRUD (Create, Read, Update, Delete)
. De manipuler directement les données MySQL via l’interface web
. D’avoir une base de données propre et normalisée

 Base de données structurée et documentée

La base de données MySQL utilisée se nomme :

kbo_db

Un fichier loadCsv.js permet de charger les CSV en streaming pour éviter l’erreur "heap memory out of memory".

Il insère les données par batch de 500 lignes pour éviter la surcharge mémoire.

Lancement :

node loadCsv.js

Interface (Frontend – React)

Le frontend propose :

. Liste des entreprises

Avec actions :

Voir

Éditer

Supprimer

. Formulaire d’ajout

Permet d’ajouter une entreprise dans la BD.

. Détails d’une entreprise

Affiche toutes ses informations.

Toutes les actions CRUD communiquent avec la base MySQL via Axios.

 Documentation technique
 Choix techniques
Choix	Justification
Node.js + Express	Rapidité, simplicité et flexibilité pour des API REST
Sequelize	ORM robuste, permet de synchroniser la BD et définir facilement les modèles
MySQL (XAMPP)	Outil familier pour les étudiants, facile à administrer
React	Facile pour créer une interface CRUD moderne
CSV streaming	Indispensable pour éviter les crash mémoire (fichiers KBO très volumineux)

Opérations CRUD
. Create (Ajout)

Le frontend envoie un POST vers :

POST /api/enterprises

. Read (Lecture)

Liste complète : GET /api/enterprises

Détail : GET /api/enterprises/:id

. Update (Modification)
PUT /api/enterprises/:id


La modification met bien à jour MySQL.

. Delete (Suppression)
DELETE /api/enterprises/:id


Suppression directe dans MySQL + mise à jour instantanée du frontend.

Installation & Exécution
 Backend
.cd backend
.npm install
.node loadCsv.js 
.npm start

 Frontend
.cd frontend
.npm install
.npm start
