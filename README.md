# test technique thebradery

# Instructions : 

1 - Cloner le dépôt:
git clone https://github.com/Alexis-Lu/thebradery.git
cd thebradery

2 - Installer les dépendences.
cd frontend
npm i
cd ../backend
npm i

3 - Créer la base de données
J'ai fourni un fichier "thebradery.sql" avec toutes les commandes pour structurer et remplir la base de données.

4 - Lancer les applications : 
Frontend : 
- Le fichier Dockerfile fonctionne. Vous pouvez vous en servir pour lancer l'application :
docker buld -t frontend .
docker run -p 8080:8080 frontend
- Ou tout simplement avec la commande :
npm run dev

Backend : 
- Le fichier Dockerfile ne fonctionne pas correctement. Je n'arrive pas à le connecter à mysql, le serveur crash quand il tente la connexion.
Vous pouvez lancer le serveur avec la commande :
npm start

J'ai essayer de faire un docker-compose pour lancer toute la pile en une seule fois sans succès.
