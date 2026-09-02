/*
 * ============================================================
 *  CONFIGURATION — Fiche de facturation électronique
 * ============================================================
 *  C'est le SEUL fichier à modifier pour changer les données
 *  affichées par défaut sur la page (index.html n'a pas besoin
 *  d'être touché).
 *
 *  Format : JavaScript (pas du JSON strict) pour que la page
 *  fonctionne aussi en ouverture directe du fichier (double-clic),
 *  sans serveur web — un fetch() d'un fichier .json local est
 *  bloqué par les navigateurs dans ce cas (règle de sécurité CORS).
 *
 *  Après modification, il suffit d'enregistrer ce fichier et de
 *  pousser (git push) le dépôt : la page publique est mise à jour.
 *
 *  Ces valeurs ne sont utilisées que si aucune donnée modifiée
 *  depuis le téléphone (bouton "Modifier") n'est déjà enregistrée
 *  dans le navigateur du visiteur.
 * ============================================================
 */
window.SITE_DATA = {
  plateforme: "PENNYLANE",
  entreprise: "VIVIER MICHEL LMNP",
  siret: "497 607 663 00018",
  tva: "FR82 497607663",
  adresse: "768 route de Beaujeu — 69220 Belleville-en-Beaujolais",
  email: "michel.vivier@gmail.com",
  telephone: "06 20 02 45 21",
  cabinetNom: "Alexandra DAVRIL",
  cabinetFonction: "Expertise TPE & PME | Responsable de mission",
  cabinetSociete: "COGEPARC LYON",
  cabinetEmail: "adavril@COGEPARC.com",
  cabinetTelephone: "+33 (0)4 72 53 25 64",
  cabinetSite: "www.cogeparc.com"
};
