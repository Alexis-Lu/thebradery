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

# Exposez le port sur lequel votre application Vite.js s'exécute
EXPOSE 5173

# Commande pour démarrer l'application Vite.js
CMD ["npm", "run", "dev"]
