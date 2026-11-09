# 🏆 Étoile d'Or d'Adjamé — Site Web Officiel (Multipage)

Site web moderne, premium et responsive pour le club de football **Étoile d'Or d'Adjamé**, situé à Adjamé, Abidjan, Côte d'Ivoire.

## 🎯 Objectif du projet

Créer une vitrine digitale professionnelle pour le club, avec une **page d'accueil** riche en aperçus, et des **pages dédiées** approfondissant chaque grand thème du menu (Le Club, Équipe, Matchs, Actualités, Galerie), dans la continuité visuelle du thème vert foncé / or.

---

## 🗂️ Structure du site (multipage)

| Page | Fichier | Contenu |
|---|---|---|
| **Accueil** | `index.html` | *(inchangée — aperçu de toutes les sections)* |
| **Le Club** | `club.html` | Histoire (timeline 2014→2026), fiche d'identité, infrastructures, staff technique |
| **Équipe** | `equipe.html` | Effectif complet filtrable par poste (Tous / Gardiens / Défenseurs / Milieux / Attaquants) + staff |
| **Matchs** | `matchs.html` | Calendrier complet des rencontres, historique des résultats, tableau de classement |
| **Actualités** | `actualites.html` | Article à la une + blog filtrable par catégorie (Matchs / Transferts / Entraînements / Vie du club) |
| **Galerie** | `galerie.html` | Galerie masonry étendue (16 visuels) filtrable par catégorie + lightbox zoom |
| **Autofinancement** | `autofinancement.html` | Activités génératrices de revenus : location d'installations, tournois, événements, prestations, boutique, sponsoring + parcours "Comment ça marche" |
| **Boutique** | `boutique.html` | Vente d'articles officiels (maillots, équipements, accessoires) avec filtres par catégorie |
| **Événements** | `evenements.html` | Agenda des tournois, détections de jeunes talents, stages, rencontres et cérémonies, avec filtres par catégorie |

Ces 3 nouvelles pages sont accessibles via un **menu déroulant "Plus"** ajouté dans la navigation (juste avant "Valeurs"), sur **toutes les pages du site, y compris l'accueil**, ainsi que dans le pied de page ("Nos services" / section "Liens rapides" sur l'accueil).

Chaque page interne s'ouvre sur une **bannière dédiée** (image + titre + fil d'Ariane) reprenant le nom de l'onglet du menu, comme suite logique de l'en-tête, puis approfondit le sujet correspondant.

⚠️ **Important : `index.html` n'a subi aucune modification.** Le rendu de la page d'accueil a été vérifié à l'identique avant/après (hero, sections, styles, comportements).

---

## ✅ Fonctionnalités par page

### 🏠 Accueil (`index.html`)
Hero, À propos + stats animées, Équipe (aperçu), Matchs (aperçu), Actualités (aperçu), Galerie (aperçu), **Sponsors & Partenaires**, Valeurs, Contact, Footer.

**🆕 Section Sponsors** (ajoutée entre Galerie et Valeurs, ancre `#sponsors`) :
- Titre "Ils nous font Confiance" + texte d'intro
- 6 cartes sponsors (icône + nom), en niveaux de gris, qui reprennent leurs couleurs au survol (effet premium classique des sites de clubs)
- Marques d'exemple fictives et neutres (Ivoire Télécom, GoldBank, Aqua Vive, Soleil Énergie, Prestige Assurances, Adjamé Motors) — **à remplacer par vos vrais sponsors et leurs logos réels** dès que vous les aurez (voir note ci-dessous)
- Bouton d'appel à l'action "Devenir partenaire" renvoyant vers le formulaire de contact
- Entièrement responsive (6 → 3 → 2 colonnes selon la taille d'écran)

> ℹ️ **Pourquoi des icônes et pas de vrais logos ?** Je n'ai pas de logos officiels de sponsors réels à utiliser (droits de marque) ni de noms d'entreprises partenaires que vous m'auriez fournis. J'ai donc créé des cartes avec icône + nom, faciles à remplacer : dites-moi les vrais noms de vos sponsors (et envoyez-moi leurs logos si vous les avez) et je les intégrerai directement à la place de ces icônes.

### 💰 Autofinancement (`autofinancement.html`)
- Bannière "Autofinancement"
- 6 cartes d'activités génératrices de revenus : location des installations sportives, organisation de tournois, événements sportifs, prestations diverses, vente de produits dérivés (renvoie vers la Boutique), partenariats & sponsoring (renvoie vers la section Sponsors)
- Section "Comment ça marche" en 4 étapes (Contact → Étude → Validation → Réalisation)
- Bannière d'appel à l'action vers le formulaire de contact

### 🛍️ Boutique (`boutique.html`)
- Bannière "Boutique"
- Filtres par catégorie (Tout / Maillots / Équipements / Accessoires)
- 8 articles (maillots, ballon, kit chaussettes, casquette, écharpe, gourde, survêtement) avec prix en FCFA
- Bouton "Commander" déclenchant une alerte d'information (boutique de démonstration, aucun paiement réel) invitant à contacter le club
- Mention claire : aucun paiement en ligne n'est traité sur ce site

### 🎉 Événements (`evenements.html`)
- Bannière "Événements"
- Événement à la une (détection de jeunes talents) en grand format
- Filtres par catégorie (Tout / Tournois / Détections / Stages / Rencontres / Cérémonies)
- 6 cartes événements avec badge date, lieu et horaire
- Bannière d'appel à l'action pour co-organiser un événement

### 🏛️ Le Club (`club.html`)
- Bannière "Le Club"
- Frise chronologique animée (histoire du club, 5 jalons 2014–2026)
- Fiche d'identité (nom, surnom, fondation, couleurs, stade, président, devise)
- 3 cartes infrastructures (stade, centre d'entraînement, centre de formation)
- 4 cartes staff technique
- Bannière d'appel à l'action

### 👥 Équipe (`equipe.html`)
- Bannière "Notre Équipe"
- **Filtres par poste** (Tous / Gardiens / Défenseurs / Milieux / Attaquants) — 8 joueurs répartis
- Rappel du staff technique

### 🏆 Matchs (`matchs.html`)
- Bannière "Matchs & Résultats"
- **Calendrier complet** (5 rencontres à venir, format liste avec date/heure/lieu)
- **Historique des résultats** (6 matchs avec badges Victoire / Nul / Défaite)
- **Tableau de classement** du championnat régional (7 équipes, club en tête surligné)
- Bannière d'appel à l'action ("Réserver votre place")

### 📰 Actualités (`actualites.html`)
- Bannière "Nos Actualités"
- **Article à la une** en grand format
- **Filtres** (Tout / Matchs / Transferts / Entraînements / Vie du club)
- **9 articles** répartis dans ces catégories

### 🖼️ Galerie (`galerie.html`)
- Bannière "Notre Galerie"
- Galerie masonry **étendue à 16 visuels** (vs 10 sur l'accueil)
- Filtres (Tout / Matchs / Entraînements / Joueurs / Supporters / Événements)
- Lightbox zoom au clic

---

## 🧩 Fichiers ajoutés (n'affectent pas l'existant)

```
club.html            → Nouvelle page "Le Club"
equipe.html          → Nouvelle page "Équipe"
matchs.html          → Nouvelle page "Matchs & Résultats"
actualites.html      → Nouvelle page "Actualités"
galerie.html         → Nouvelle page "Galerie"
css/pages.css        → Styles additionnels dédiés aux pages intérieures (bannières, timeline, tableaux, etc.)
js/pages.js          → Interactivité additionnelle (onglets équipe par poste, filtres actualités)
images/*.jpg         → Nouveaux visuels (coach, staff, stade, supporters, duels de match…)
```

Fichiers **non modifiés dans leur contenu visuel** : `index.html`, `css/style.css`.
Un seul ajustement défensif a été fait dans `js/main.js` (gardes `if (lightbox...)` / `if (contactForm...)`) pour que ce script partagé ne plante pas sur les pages qui n'ont pas ces éléments — cela ne change rien au comportement de la page d'accueil, où ces éléments existent toujours.

### Navigation
Le menu d'en-tête et le pied de page de **toutes les pages** (y compris l'accueil) pointent déjà vers ces nouvelles pages : cliquer sur "Le Club", "Équipe", "Matchs", "Actualités" ou "Galerie" depuis n'importe quelle page mène désormais à la page dédiée correspondante (au lieu d'une ancre sur l'accueil). "Valeurs" et "Contact" restent des ancres vers l'accueil (`index.html#values`, `index.html#contact`).

---

## 🌍 Entrées fonctionnelles

- `index.html` — Accueil (aperçus + ancres `#hero #about #team #matches #news #gallery #values #contact`)
- `club.html` — Le Club
- `equipe.html` — Équipe (onglets JS par poste)
- `matchs.html` — Matchs & Résultats (calendrier, résultats, classement)
- `actualites.html` — Actualités (filtres JS par catégorie)
- `galerie.html` — Galerie (filtres JS + lightbox)

Aucune API externe ni base de données : contenu statique en dur dans le HTML, cohérent entre l'accueil et les pages détaillées.

## 🍪 Confidentialité & Cookies (`confidentialite.html`)

Une nouvelle page légale a été ajoutée, accessible depuis le **pied de page de toutes les pages** du site :

- **Politique de confidentialité complète** : données collectées (aucune collecte automatisée, le site étant statique), utilisation des informations, partage avec des tiers (CDN Google Fonts / Font Awesome / AOS / OpenStreetMap), droits des visiteurs, sécurité, contact.
- **Section dédiée aux cookies** expliquant les 2 catégories utilisées :
  - *Cookies strictement nécessaires* (toujours actifs) : mémorisent uniquement votre choix de consentement.
  - *Cookies de mesure d'audience* (optionnels, **actuellement inactifs** car aucun outil analytics n'est déployé sur le site) — prévus pour une future évolution.
- **Bandeau de consentement aux cookies** affiché en bas de **toutes les pages** du site à la première visite, avec 2 choix : « Essentiels uniquement » ou « Tout accepter ».
- **Modale « Gérer mes préférences »** accessible à tout moment via le lien « Gérer mes cookies » du pied de page, permettant d'activer/désactiver les cookies de mesure d'audience.
- Choix du visiteur mémorisé dans le `localStorage` du navigateur (clé `eoa_cookie_consent`) — **aucune donnée n'est envoyée à un serveur**, cohérent avec le fonctionnement 100% statique du site.
- Nouveau fichier `js/cookies.js`, chargé sur les 9 pages du site, indépendant de `main.js` et `pages.js`.

## 🚧 Fonctionnalités non encore implémentées

- Pages de détail individuelles pour chaque article d'actualité (le bouton "Lire plus" pointe vers `#`).
- Fiche détaillée par joueur (page dédiée avec stats individuelles).
- Formulaire de contact réellement fonctionnel (toujours simulé côté client, disponible uniquement sur l'accueil).
- Classement dynamique / résultats mis à jour automatiquement (actuellement en dur).
- Système d'administration pour gérer joueurs / actualités / matchs sans toucher au code.

## 🔮 Prochaines étapes recommandées

1. Valider les textes, dates, noms de joueurs et résultats avec les vraies informations du club.
2. Remplacer les visuels d'illustration par de vraies photos si disponibles.
3. Si besoin, créer des pages de détail par article/joueur, ou rendre les données dynamiques via des tables.
4. Une fois validé, direction le **Publish tab** pour mettre le site en ligne (ou demande explicite de Hosted Deploy).

## 🎨 Palette de couleurs (identique à l'accueil)

| Couleur | Usage |
|---|---|
| `#062b1c` / `#0a3d26` | Vert foncé principal |
| `#0e5c37` / `#146a44` | Vert clair (accents) |
| `#d4af37` / `#f5d788` / `#a6811f` | Or / doré (CTA, accents) |
| `#ffffff` / `#f5f6f2` | Blanc / blanc cassé |
| `#060907` | Noir profond |

## 📦 Bibliothèques utilisées (CDN)

- Google Fonts (Anton, Poppins)
- Font Awesome 6.4.0
- AOS (Animate On Scroll) 2.3.1
- OpenStreetMap (carte, page Accueil)

## 💾 Stockage de données

Aucune base de données — contenu statique en dur dans le HTML sur toutes les pages.

## 🌐 URL publique

Le site n'est pas encore déployé. Rendez-vous dans l'onglet **Publish** pour le mettre en ligne, ou demandez-moi explicitement un déploiement hébergé.

---

**Prêt pour vos retours !** Dites-moi ce que vous souhaitez ajuster sur ces nouvelles pages (contenus, images, sections supplémentaires) et je les mettrai à jour.
