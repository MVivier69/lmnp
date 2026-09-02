# Fiche de facturation électronique — VIVIER MICHEL LMNP

Page web mobile, à publier sur GitHub Pages à l'adresse :
**https://mvivier69.github.io/lmnp/**

## Contenu du dépôt

- `index.html` — la page (structure, style, logique). Normalement, pas besoin d'y toucher.
- `config.js` — **le seul fichier à modifier** pour changer les données affichées par défaut (SIRET, TVA, cabinet comptable, etc.).
- `qr_url.png` — QR code pointant vers la page publiée (à insérer où vous voulez : signature mail, document, impression).

## Publier sur GitHub Pages

1. Créer un dépôt nommé `lmnp` sur le compte `mvivier69`.
2. Y déposer `index.html` et `config.js` à la racine (via l'interface web GitHub : "Add file" → "Upload files", ou via `git push`).
3. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → Branch : main / (root)**.
4. Après quelques minutes, la page est accessible à `https://mvivier69.github.io/lmnp/`.

## Modifier les données affichées à tout le monde

Éditer `config.js` (format JavaScript volontairement simple, pas du JSON strict, pour que la page fonctionne même sans serveur, en double-clic direct sur `index.html`) :

```js
window.SITE_DATA = {
  plateforme: "PENNYLANE",
  entreprise: "VIVIER MICHEL LMNP",
  siret: "497 607 663 00018",
  ...
};
```

Enregistrer, puis republier (`git push` ou ré-upload du fichier sur GitHub). La page publique se met à jour pour tous les visiteurs.

## Fonctionnement du bouton « Modifier » (sur la page elle-même)

Ce bouton permet à un visiteur de corriger temporairement les données **depuis son propre téléphone**. Ces modifications sont enregistrées uniquement dans le stockage local de son navigateur (`localStorage`) :

- elles ne sont **jamais envoyées à GitHub** ni visibles par qui que ce soit d'autre ;
- elles disparaissent si l'utilisateur change de navigateur/appareil, vide son cache, ou clique sur « Réinitialiser aux valeurs par défaut du dépôt ».

C'est un site 100 % statique (aucun serveur, aucune base de données) : `config.js` est donc la seule source de vérité pour tout le monde.

## Si l'URL change un jour

Si le dépôt ou le nom d'utilisateur change, il faut régénérer le QR code (`qr_url.png`) avec la nouvelle URL — le contenu du fichier `index.html`/`config.js` n'a pas besoin d'être modifié pour ça.
