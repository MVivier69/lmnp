# Fiche de facturation électronique — VIVIER MICHEL LMNP

Page web mobile, à publier sur GitHub Pages à l'adresse :
**https://mvivier69.github.io/lmnp/**

## Contenu du dépôt

- `index.html` — la page (structure, style, logique). Normalement, pas besoin d'y toucher.
- `config.js` — **le seul fichier à modifier** pour changer les données affichées (SIRET, TVA, cabinet comptable, etc.). Il n'y a pas de formulaire d'édition sur la page elle-même : toute modification passe par ce fichier.
- `Fiche_Facturation_Electronique_-_VIVIER_MICHEL_LMNP.pdf` — la fiche au format PDF, hébergée telle quelle et téléchargeable depuis le bouton de la page.
- `favicon.png` (32×32) et `apple-touch-icon.png` (180×180) — déclinaisons du logo fourni, utilisées comme icône d'onglet / icône d'écran d'accueil. Générées à partir de `Logo_VIVIER_MICHEL_LMNP.png`.
- `qr_url.png` — QR code pointant vers la page publiée (à insérer où vous voulez : signature mail, document, impression).

## Publier sur GitHub Pages

1. Créer un dépôt nommé `lmnp` sur le compte `mvivier69`.
2. Y déposer `index.html`, `config.js` et le PDF à la racine (via l'interface web GitHub : "Add file" → "Upload files", ou via `git push`).
3. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → Branch : main / (root)**.
4. Après quelques minutes, la page est accessible à `https://mvivier69.github.io/lmnp/`.

## Modifier les données affichées

Éditer `config.js` (format JavaScript volontairement simple, pas du JSON strict, pour que la page fonctionne même sans serveur, en double-clic direct sur `index.html`) :

```js
window.SITE_DATA = {
  plateforme: "PENNYLANE",
  entreprise: "VIVIER MICHEL LMNP",
  siret: "497 607 663 00018",
  ...
};
```

Enregistrer, puis republier (`git push` ou ré-upload du fichier sur GitHub). C'est un site 100 % statique (aucun serveur, aucune base de données) : `config.js` est donc la seule source de vérité, pour tout le monde.

## Bouton « Télécharger au format PDF »

Lien de téléchargement direct (attribut HTML `download`) vers le fichier PDF hébergé dans le dépôt. Le comportement exact (téléchargement immédiat vs. ouverture dans un visualisateur PDF intégré) dépend du navigateur du visiteur ; c'est un comportement standard, pas un bug.

## Garder le PDF synchronisé

Le PDF est un fichier figé, indépendant de `config.js`. Si vous modifiez une donnée dans `config.js` (ex. changement de SIRET ou de cabinet comptable), pensez à régénérer et remplacer le PDF pour qu'il reste cohérent avec la page.

## Si l'URL change un jour

Si le dépôt ou le nom d'utilisateur change, il faut régénérer le QR code (`qr_url.png`) avec la nouvelle adresse. Le bouton de téléchargement PDF utilise un chemin relatif (`./Fiche_...pdf`) : il n'a pas besoin d'être modifié tant que le PDF reste au même endroit que `index.html`.
