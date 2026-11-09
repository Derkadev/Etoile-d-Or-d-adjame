// ============================================================
// ÉTOILE D'OR D'ADJAMÉ — GESTION DU CONSENTEMENT AUX COOKIES
// Fichier partagé, chargé sur toutes les pages.
// Stocke le choix du visiteur dans localStorage (clé: eoa_cookie_consent).
// Aucune donnée envoyée à un serveur : ce site est 100% statique.
// ============================================================

(function () {
  'use strict';

  var STORAGE_KEY = 'eoa_cookie_consent';
  // Valeur stockée : { necessary: true, analytics: bool, timestamp: ISOString }

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(analytics) {
    var data = {
      necessary: true,
      analytics: !!analytics,
      timestamp: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) { /* localStorage indisponible : on ignore silencieusement */ }
    return data;
  }

  function applyConsent(data) {
    // Point d'extension : si un jour un outil analytics (ex. Google Analytics)
    // est ajouté, c'est ICI qu'il faudrait l'activer/désactiver selon data.analytics.
    // Pour l'instant, ce site n'utilise aucun cookie de mesure d'audience.
    document.dispatchEvent(new CustomEvent('eoa:consent-updated', { detail: data }));
  }

  function hideBanner(banner) {
    if (!banner) return;
    banner.classList.remove('show');
    setTimeout(function () { banner.style.display = 'none'; }, 400);
  }

  function showBanner(banner) {
    if (!banner) return;
    banner.style.display = 'flex';
    requestAnimationFrame(function () { banner.classList.add('show'); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var banner = document.getElementById('cookie-banner');
    var btnAcceptAll = document.getElementById('cookie-accept-all');
    var btnNecessaryOnly = document.getElementById('cookie-necessary-only');
    var btnSettings = document.getElementById('cookie-settings-link');

    // Modale de préférences détaillées (présente sur toutes les pages)
    var modal = document.getElementById('cookie-modal');
    var modalClose = document.getElementById('cookie-modal-close');
    var modalSave = document.getElementById('cookie-modal-save');
    var analyticsToggle = document.getElementById('cookie-analytics-toggle');

    var existing = getConsent();

    if (existing) {
      if (banner) banner.style.display = 'none';
      applyConsent(existing);
    } else if (banner) {
      showBanner(banner);
    }

    if (btnAcceptAll) {
      btnAcceptAll.addEventListener('click', function () {
        var data = saveConsent(true);
        applyConsent(data);
        hideBanner(banner);
      });
    }

    if (btnNecessaryOnly) {
      btnNecessaryOnly.addEventListener('click', function () {
        var data = saveConsent(false);
        applyConsent(data);
        hideBanner(banner);
      });
    }

    function openModal() {
      if (!modal) return;
      var current = getConsent();
      if (analyticsToggle) analyticsToggle.checked = current ? !!current.analytics : false;
      modal.classList.add('show');
    }
    function closeModal() {
      if (modal) modal.classList.remove('show');
    }

    if (btnSettings) {
      btnSettings.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    }
    // Lien "Gérer mes cookies" dans le footer (toutes pages)
    document.querySelectorAll('.footer-cookie-settings').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
      });
    }
    if (modalSave) {
      modalSave.addEventListener('click', function () {
        var analytics = analyticsToggle ? analyticsToggle.checked : false;
        var data = saveConsent(analytics);
        applyConsent(data);
        closeModal();
        hideBanner(banner);
      });
    }
  });
})();
