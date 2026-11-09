// ============================================================
// ÉTOILE D'OR D'ADJAMÉ — MAIN JS
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- AOS INIT ----------
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic'
    });
  }

  // ---------- PRELOADER ----------
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', function () {
    setTimeout(function () {
      if (preloader) preloader.classList.add('hidden');
    }, 400);
  });
  // Fallback in case load already fired
  setTimeout(function () {
    if (preloader) preloader.classList.add('hidden');
  }, 2500);

  // ---------- NAVBAR SCROLL STATE ----------
  const navbar = document.getElementById('navbar');
  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll();

  // ---------- MOBILE MENU ----------
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ---------- NAV DROPDOWN "PLUS" (desktop click + hover via CSS, mobile tap) ----------
  document.querySelectorAll('.nav-item-dropdown').forEach(function (item) {
    const toggle = item.querySelector('.dropdown-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.nav-item-dropdown.open').forEach(function (other) {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-item-dropdown.open').forEach(function (item) {
      if (!item.contains(e.target)) item.classList.remove('open');
    });
  });

  // ---------- ACTIVE LINK ON SCROLL ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveLink);

  // ---------- BACK TO TOP ----------
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // ---------- ANIMATED STAT COUNTERS ----------
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateStats() {
    statNumbers.forEach(function (el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      let current = 0;
      const duration = 1600;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          el.textContent = target.toLocaleString('fr-FR');
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current).toLocaleString('fr-FR');
        }
      }, stepTime);
    });
  }

  function checkStatsInView() {
    const statsSection = document.querySelector('.about-stats');
    if (!statsSection || statsAnimated) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      statsAnimated = true;
      animateStats();
    }
  }
  window.addEventListener('scroll', checkStatsInView);
  checkStatsInView();

  // ---------- MATCHES TABS ----------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      tabContents.forEach(function (content) {
        content.classList.remove('active');
        if (content.id === target) {
          content.classList.add('active');
        }
      });
    });
  });

  // ---------- GALLERY FILTER ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      galleryItems.forEach(function (item) {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // ---------- LIGHTBOX (uniquement si présent sur la page) ----------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg && lightboxClose) {
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const imgSrc = item.querySelector('img').getAttribute('src');
        const imgAlt = item.querySelector('img').getAttribute('alt');
        lightboxImg.setAttribute('src', imgSrc);
        lightboxImg.setAttribute('alt', imgAlt);
        lightbox.classList.add('active');
      });
    });

    var closeLightbox = function () {
      lightbox.classList.remove('active');
    };
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ---------- CONTACT FORM (client-side only, no backend) ----------
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formSuccess.classList.add('show');
      contactForm.reset();
      setTimeout(function () {
        formSuccess.classList.remove('show');
      }, 5000);
    });
  }

});
