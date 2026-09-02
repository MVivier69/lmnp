# Fiche de facturation électronique — VIVIER MICHEL LMNP

Page web mobile, à publier sur GitHub Pages à l'adresse :
**https://mvivier69.github.io/lmnp/**

## Contenu du dépôt

- `index.html` — la page (structure, style, logique). Normalement, pas besoin d'y toucher.
- `config.js` — **le seul fichier à modifier** pour changer les données affichées (SIRET, TVA, cabinet comptable, etc.). Il n'y a plus de formulaire d'édition sur la page elle-même : toute modification passe par ce fichier.
- `Fiche_Facturation_Electronique_-_VIVIER_MICHEL_LMNP.pdf` — la fiche au format PDF, hébergée telle quelle et liée depuis le bouton « Envoyer par mail ».
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

## Bouton « Envoyer par mail »

Ouvre le client mail par défaut du visiteur (Gmail, Outlook, Mail…) via un lien `mailto:`, avec un sujet et un message pré-remplis contenant :

- un lien vers la page (`https://mvivier69.github.io/lmnp/`) ;
- un lien vers la fiche PDF hébergée dans le dépôt.

**Limite technique à connaître :** un lien `mailto:` ne peut pas joindre automatiquement un fichier à l'email — c'est une restriction de sécurité des navigateurs, pas un choix de conception. La fiche PDF est donc *liée*, pas jointe : le destinataire clique sur le lien pour l'ouvrir/télécharger. Une vraie pièce jointe automatique nécessiterait un serveur d'envoi d'e-mails, incompatible avec une page 100 % statique sur GitHub Pages.

## Garder le PDF synchronisé

Le PDF est un fichier figé, indépendant de `config.js`. Si vous modifiez une donnée dans `config.js` (ex. changement de SIRET ou de cabinet comptable), pensez à régénérer et remplacer le PDF pour qu'il reste cohérent avec la page.

## Si l'URL change un jour

Si le dépôt ou le nom d'utilisateur change, il faut régénérer le QR code (`qr_url.png`) et les liens codés en dur dans `index.html` (`PAGE_URL` et `PDF_URL`) avec la nouvelle adresse.
