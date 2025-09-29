# 🚀 Mon Portfolio Numérique

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![Powered by](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Powered by](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Containerized with](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

Bienvenue sur mon portfolio numérique ! Je suis un développeur passionné par la création. Mon portfolio est conçu pour vous montrer mes compétences en développement et mon expertise dans les technologies les plus récentes.
Ce dépôt contient le code source de mon portfolio personnel. Il s'agit d'une application Full-Stack développée avec Next.js (Frontend & API Routes) et conteneurisée avec Docker pour une portabilité maximale.

---

### 📦 Prérequis

Assurez-vous que les logiciels suivants sont installés sur votre machine pour lancer le projet :

* **Docker et Docker Compose**
*  **Git**
---

### 📂 Structure du Projet

Le projet combine l'interface Next.js et la logique d'un serveur Node.js unique à l'intérieur d'un seul conteneur pour une installation simplifiée :

* **compose.yml** : Fichier principal qui orchestre le lancement du service portfolio.
* **.env** : Fichier pour stocker les variables d'environnement de configuration (ports, clés d'API etc).
* **Dockerfile** : Les instructions pour construire l'image Docker de l'application Next.js.
* **package.json** : Métadonnées et dépendances du projet Node.js / Next.js.
* **src/** : Dossier contenant les composants et pages Next.js.

---

### 🚀 Démarrage de l'Environnement

Le projet utilise un seul service conteneurisé qui gère à la fois le Frontend et les routes API de Next.js.

1. Créez le fichier .env et ajoutez-y les variables ci-dessus.
2. Lancez le conteneur en utilisant la commande Docker Compose :

```sh
docker compose up -d --build
```
L'option --build est nécessaire pour compiler l'application Next.js avant de la lancer dans le conteneur.

Le portfolio sera accessible via : http://localhost:${NODE_APP_PORT}.

Pour vérifier les logs du serveur Next.js :
```sh
docker compose logs -f
```

---

### 🛑 Arrêter et Nettoyer
Pour arrêter le conteneur (sans supprimer les volumes de cache Next.js, qui sont légers) :
```sh
docker compose down
```

---

📧 Contact

Ce dépôt est le reflet de ma passion pour la conteneurisation et le développement. Si vous souhaitez en discuter ou si vous avez des questions, n'hésitez pas à me contacter par e-mail ou [LinkedIn](https://www.linkedin.com/in/el-beressa/). Je serais ravi d'échanger avec vous.

---


### 🌟 Licence et Attribution

Ce projet est sous licence **MIT**, ce qui signifie que vous pouvez l'utiliser, le modifier et le distribuer librement.

Bien que l'attribution ne soit pas une obligation légale, la bonne pratique est de citer le travail original. Si vous utilisez ce code comme base pour votre propre projet, veuillez me créditer :

* **GitHub** fournit un format de citation automatique (bouton "Cite this repository").
* **Citation Manuelle Recommandée :** `[Mon Portfolio [Next.js/Node.js]](https://github.com/eberess/portfolio.git) par Amin Beressa`