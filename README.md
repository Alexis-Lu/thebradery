# Test Technique TheBradery

## Instructions

### 1 - Cloner le Dépôt

```bash
git clone https://github.com/Alexis-Lu/thebradery.git
cd thebradery
```

### 2 - Installer les Dépendances

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

### 3 - Créer la Base de Données

Utilisez le fichier "thebradery.sql" fourni pour structurer et remplir la base de données.

### 4 - Lancer les Applications

#### Frontend

Le fichier Dockerfile fonctionne. Vous pouvez l'utiliser pour lancer l'application :

```bash
docker build -t frontend .
docker run -p 8080:8080 frontend
```

Ou simplement avec la commande :

```bash
npm run dev
```

#### Backend

Le fichier Dockerfile ne fonctionne pas correctement. Pour lancer le serveur, utilisez la commande :

```bash
npm start
```

**Note :** J'ai essayé de créer un docker-compose pour lancer toute la pile en une seule fois, mais cela n'a pas été fructueux.

---
