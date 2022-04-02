
# Responsive Spacer

  

## Un espaceur responsive pour Gutenberg

  

Le repo suivant vous permet d'ajouter à votre site Wordpress un espaceur multi-supports.

Cette exemple à été rédiger pour les biens de l'article ["Un espacement responsive sur Gutenberg"](https://pierrelejeune.fr/responsive-espacement-gutenberg/)

  

# Pré-requis

  

```
Terminal Windows ou Mac

WordPress  ^v4.9

Gutenberg ^v4.0

PHP ^5.4

Node ^8+

```

# Installation

Cloner ou télécharger le repository dans votre fichier de plugins Wordpress. 
Rendez-vous sur votre back-office et installer l'extension.

# Edition

Les contenus du répertoire `src` peuvent être modifier. Pour les compiler, ouvrez un terminal à la racine de l'extension et utiliser les commandes suivantes : 
  

La commande suivante qui vous permet d'installer les dépendances nécessaires à l'extension. (Il vous faut node d'installé sur votre machine pour pouvoir lancer cette commande).

C'est une commande que vous ne devez lancer théoriquement qu'une seule fois.

```
npm install

```


La commande suivante vous permet de compiler le code de votre extension.
``` 
npm run build

```


Et la commande suivante de la compiler à chaque fois que vous modifier un fichier (lancer tout de même la commande précédente une fois vos modifications terminées.)

```

npm run start

```
