# Reiner Knizia's Decathlon : Saut en longueur

---
## Introduction
C'est un projet de cours Serveur Web à Ecole Centrale Marseille (2A). Le but de ce projet est de concevoir le jeu Saut en Longueur de Reiner Knizia's Decathlon.
<br>Reiner Knizia's Decathlon est une série de 10 jeux de dés courts avec le thème libre des événements d'un Décathlon Olympique. Il se compose : 100 Mètres, Saut en Longueur, Lancer de Poids, Saut Enhauteur, 400 Mètres, 110 Mètres Haies, Lancer de Disque, Saut à La Perche, Javelot, 1500 Mètres.
<br>Ici, dans notre projet, on va faire le jeu Long Jump par HTML, CSS, JavaScript et Node.

---
## Règles du jeu (5 dés, 3 tentatives)
**Course d’élan** : Commencez par lancer les cinq dés. Conservez alors au moins l’un d’eux. Si vous le désirez,relancez tous les dés restants. Vous pouvez réitérer l’opération plusieurs fois, mais avant de relancer vous deveztoujours écarter au moins un dé supplémentaire, en essayant d’obtenir de la sorte le plus de dés possibles defaible valeur. Si la somme des dés écartés dépasse 8, vous avez mordu sur la ligne et votre tentative se solde par un échec. Sivous décidez d’interrompre les lancers alors que la somme des dés écartés est inférieure à 8, alors vous pouvezsauter.
<br>**Le saut** :  Ramassez les dés mis à l’écart et lancez-les. Conservez au moins un dé et relancez les autres. Procédezde cette manière jusqu’à avoir écarté tous les dés. Essayez de conserver les plus grosses valeurs de dés.
<br>**Marque** : Inscrire la somme des valeurs dés conservés utilisés pour sauter.

---
## Annuaires
```
BoardGame-LongJump :.
├─ models
│  ├─ message.js
│
├─ static
│  ├─ back
│  │  ├─ index2.js
│  │  ├─ jump_screen_rank.js
│  │  ├─ jump_screen_share.js
│  │  └─ longjump2.js
│  │
│  ├─ dices
│  │  └─ (Des images de dices)
│  │
│  ├─ music
│  │  └─ (Des musiques du jeu)
│  │
│  ├─ other
│  │  └─ (Des images du jeu)
│  │
│  ├─ before_index.html
│  ├─ before_main.css
│  ├─ index2.css
│  ├─ index2.html
│  └─ package.json
│
├─ README.md
├─ db.js
├─ db.sqlite
├─ index.js
├─ node_modules.rar
├─ package-lock.json  
└─ package.json
```

---
## Supports
1. Pour exécuter ce jeu, dans un terminal placé dans le dossier où se trouve “index.js”, tapez la commande :
   ```
   $ node index.js
   ```
2. Pour que npm puisse gérer nos module, il faut lui laisser créer un fichier de configuration nommé “package.json”. Pour cela, tapez dans un terminal placé à la racine de notre projet :
   ```
   $ npm init
   ```
3. Pour ajout d’un module (dans notre projet est node_modules.rar), tapez dans un terminal placé à la racine de notre projet :
   ```
   $ npm add --save express
   ```
4. Nous allons voir ici comment créer une base de donnée et l’utiliser avec sequelize qui va nous permettre de gérer tout le côté configuration et utilisation de SQL pour nous.
   - Dans le dossier tapez :
     ```
     $ npm install --save sequelize
     ```
   - Notre base de donnée étant sqlite3, on installe également le driver :
     ```
     $ npm install --save sqlite3
     ```
   - Exécutez le code avec la commande : 
     ```
     $ node db.js
     ```

---
## Référence
https://francoisbrucker.github.io/cours_informatique/2A/mie_web_back.html
