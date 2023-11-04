# Utilisez une image Node.js comme image de base
FROM node:14

# Définissez le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json (ou yarn.lock) dans le conteneur
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez l'ensemble du projet dans le conteneur
COPY . .

# Exposez le port sur lequel votre application Express.js s'exécute (par défaut 3000)
EXPOSE 3001

# Commande pour démarrer l'application avec Nodemon (remplacez "app.js" par le point d'entrée de votre application)
CMD ["npx", "nodemon", "app.js"]
