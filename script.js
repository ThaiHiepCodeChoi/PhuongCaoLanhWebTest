/**
 * PHƯỜNG CAO LÃNH - INTERACTIVE JAVASCRIPT
 * Tỉnh Đồng Tháp - Đất Sen Hồng
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Elements
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileToggle');
  const themeToggle = document.getElementById('themeToggle');
  const backToTopBtn = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const zoomableImages = document.querySelectorAll('.zoomable-img');

  // Filter Tabs
  const filterTabs = document.querySelectorAll('.tab-btn');
  const destinationCards = document.querySelectorAll('.destination-card');

  // Stats Counters
  const statNumbers = document.querySelectorAll('.stat-number');

  /* ==========================================================================
     THEME TOGGLE (DARK / LIGHT)
     ========================================================================== */
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-moon';
      themeToggle.setAttribute('title', 'Chuyển sang giao diện Sáng');
    } else {
      icon.className = 'fa-solid fa-sun';
      themeToggle.setAttribute('title', 'Chuyển sang giao diện Tối');
    }
  }

  /* ==========================================================================
     STICKY NAVBAR & BACK TO TOP
     ========================================================================== */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar effect
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Active Navigation Highlight
    highlightActiveSection(scrollY);
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* ==========================================================================
     ACTIVE SECTION HIGHLIGHT
     ========================================================================== */
  function highlightActiveSection(scrollPos) {
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ==========================================================================
     MOBILE NAVIGATION DRAWER
     ========================================================================== */
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const icon = mobileToggle.querySelector('i');
    if (navMenu.classList.contains('open')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    });
  });

  /* ==========================================================================
     ANIMATED NUMBER COUNTERS
     ========================================================================== */
  let countersAnimated = false;
  const statsSection = document.querySelector('.hero-stats');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) {
    countObserver.observe(statsSection);
  }

  function animateCounters() {
    statNumbers.forEach(counter => {
      const targetAttr = counter.getAttribute('data-target') || '0';
      const target = parseFloat(targetAttr);
      const decimalPlaces = targetAttr.includes('.') ? (targetAttr.split('.')[1] || '').length : 0;
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeOut;

        if (decimalPlaces > 0) {
          counter.textContent = currentVal.toFixed(decimalPlaces);
        } else if (target >= 1000) {
          counter.textContent = Math.floor(currentVal).toLocaleString('vi-VN');
        } else {
          counter.textContent = Math.floor(currentVal);
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (decimalPlaces > 0) {
            counter.textContent = target.toFixed(decimalPlaces);
          } else if (target >= 1000) {
            counter.textContent = target.toLocaleString('vi-VN');
          } else {
            counter.textContent = target;
          }
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  /* ==========================================================================
     DESTINATIONS FILTER TABS
     ========================================================================== */
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      destinationCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     IMAGE LIGHTBOX
     ========================================================================== */
  zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt || 'Hình ảnh Phường Cao Lãnh';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Global ESC Key Close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

});
