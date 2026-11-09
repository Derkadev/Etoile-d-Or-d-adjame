// ============================================================
// ÉTOILE D'OR D'ADJAMÉ — JS SPÉCIFIQUE AUX PAGES INTÉRIEURES
// (n'affecte pas main.js ni la page d'accueil)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- ROSTER TABS (page équipe : Tous / Gardiens / Défenseurs / Milieux / Attaquants) ----------
  const rosterBtns = document.querySelectorAll('.roster-tab-btn');
  const rosterContents = document.querySelectorAll('.roster-content');

  rosterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-roster');

      rosterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      rosterContents.forEach(function (content) {
        content.classList.remove('active');
        if (content.id === target) {
          content.classList.add('active');
        }
      });
    });
  });

  // ---------- SHOP FILTERS (page boutique) ----------
  const shopFilterBtns = document.querySelectorAll('.shop-filter-btn');
  const productCards = document.querySelectorAll('.product-grid .product-card');

  shopFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-shopfilter');

      shopFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      productCards.forEach(function (card) {
        const category = card.getAttribute('data-shopcat');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // ---------- EVENT FILTERS (page événements) ----------
  const eventFilterBtns = document.querySelectorAll('.event-filter-btn');
  const eventCards = document.querySelectorAll('.event-grid .event-card');

  eventFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-eventfilter');

      eventFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      eventCards.forEach(function (card) {
        const category = card.getAttribute('data-eventcat');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // ---------- COMMANDE BOUTIQUE (simulation, pas de paiement réel) ----------
  document.querySelectorAll('.btn-order').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const card = btn.closest('.product-card');
      const name = card ? card.querySelector('h3').textContent : 'cet article';
      alert('Merci pour votre intérêt pour « ' + name + ' ! »\n\nPour finaliser votre commande, contactez-nous directement via le formulaire de contact, WhatsApp ou téléphone. (Boutique de démonstration — aucun paiement en ligne n\'est traité sur ce site.)');
    });
  });

  // ---------- NEWS FILTERS (page actualités) ----------
  const newsFilterBtns = document.querySelectorAll('.news-filter-btn');
  const newsCards = document.querySelectorAll('.news-full-grid .news-card');

  newsFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-newsfilter');

      newsFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      newsCards.forEach(function (card) {
        const category = card.getAttribute('data-newscat');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

});
