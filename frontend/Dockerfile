# Utilisez une image Node.js comme image de base
FROM node:18-alpine

# Définissez le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json (ou yarn.lock) dans le conteneur
COPY package.json .

# Installez les dépendances
RUN npm install

# Copiez l'ensemble du projet dans le conteneur
COPY . .

# Exposez le port 8080 pour que le navigateur puisse y accéder
EXPOSE 8080

# Commande pour démarrer l'application Vite.js
CMD ["npm", "run", "dev"]
