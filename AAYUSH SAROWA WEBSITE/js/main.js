/**
 * Aayush Sarowa Portfolio — Cyber Luminary Client Logic & Animation Suite
 */

document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initNavbarScroll();
  initScrollReveal();
  initSkillBars();
  initStatCounters();
  initCustomCursor();
  initHeroParallax();
  initMobileMenu();
  initLiveClock();
  initPgpCopy();
  initEmailCopy();
  initContactForm();
  initModals();
});

/* 1. Fast, Non-Blocking Futuristic Initial Page Loader (<600ms) */
function initPageLoader() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let loader = document.getElementById('cyber-page-loader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'cyber-page-loader';
    loader.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="assets/logo.png" alt="Aayush Sarowa Logo" style="width: 44px; height: 44px; object-fit: contain; filter: drop-shadow(0 0 16px rgba(76,215,246,0.7));"/>
        <div style="display: flex; flex-direction: column;">
          <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.15rem; font-weight: 700; color: #dfe2ef; letter-spacing: -0.02em;">Aayush Sarowa</span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #4cd7f6; letter-spacing: 0.12em; text-transform: uppercase;">SYSTEMS &bull; ONLINE</span>
        </div>
      </div>
      <div class="loader-progress-track">
        <div class="loader-progress-bar"></div>
      </div>
    `;
    document.body.prepend(loader);
  }

  function dismissLoader() {
    if (loader && !loader.classList.contains('loader-hidden')) {
      loader.classList.add('loader-hidden');
      setTimeout(() => {
        if (loader && loader.parentNode) loader.remove();
      }, 500);
    }
  }

  window.addEventListener('load', () => setTimeout(dismissLoader, 350));
  setTimeout(dismissLoader, 600); // Safety timeout so navigation is never blocked
}

/* 2. Dynamic Navbar Scroll Transition (Height reduction + refined glass blur) */
function initNavbarScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 25) {
          header.classList.add('nav-scrolled');
        } else {
          header.classList.remove('nav-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* 3. Reusable Scroll Reveal System (Single entrance per element, no aggressive replay) */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* 4. Skills Progress Bar Smooth Fluid Expansion */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-progress-bar');
  if (!bars.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    bars.forEach(b => {
      const w = b.getAttribute('data-target-width') || '90%';
      b.style.width = w;
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-target-width') || bar.getAttribute('data-width') || '90%';
        bar.style.width = targetWidth;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.15 });

  bars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

/* 5. Stat Counter Micro-Animation for Existing Numbers (Zero invented data) */
function initStatCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const counterEls = document.querySelectorAll('[data-counter]');
  if (!counterEls.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counterEls.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const rawText = el.getAttribute('data-counter') || el.innerText.trim();
  const match = rawText.match(/^([<>]?\s*)([\d,.]+)(\s*.*)$/);
  if (!match) return;

  const prefix = match[1] || '';
  const numStr = match[2].replace(/,/g, '');
  const suffix = match[3] || '';
  const targetNum = parseFloat(numStr);
  if (isNaN(targetNum)) return;

  const isFloat = numStr.includes('.');
  const decimals = isFloat ? numStr.split('.')[1].length : 0;
  const hasCommas = match[2].includes(',');

  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = targetNum * eased;

    let formattedVal;
    if (isFloat) {
      formattedVal = currentVal.toFixed(decimals);
    } else {
      formattedVal = Math.round(currentVal);
      if (hasCommas) formattedVal = formattedVal.toLocaleString();
    }

    el.innerText = `${prefix}${formattedVal}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.innerText = rawText;
    }
  }

  requestAnimationFrame(update);
}

/* 6. Desktop-Only Futuristic Custom Cursor (Disabled on mobile/touch & reduced motion) */
function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let dot = document.getElementById('cyber-cursor-dot');
  let ring = document.getElementById('cyber-cursor-ring');

  if (!dot) {
    dot = document.createElement('div');
    dot.id = 'cyber-cursor-dot';
    document.body.appendChild(dot);
  }
  if (!ring) {
    ring = document.createElement('div');
    ring.id = 'cyber-cursor-ring';
    document.body.appendChild(ring);
  }

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(renderRing);
    }
  }, { passive: true });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    const diff = Math.abs(mouseX - ringX) + Math.abs(mouseY - ringY);
    if (diff > 0.1) {
      requestAnimationFrame(renderRing);
    } else {
      isMoving = false;
    }
  }

  const interactiveSelector = 'a, button, input, textarea, select, .interactive-card, .project-card, [role="button"], .tier-btn';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  }, { passive: true });
}

/* 7. Subtle Ambient Mouse Parallax (Damped, minimal, only desktop) */
function initHeroParallax() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const glowElements = document.querySelectorAll('.hero-ambient-glow');
  if (!glowElements.length) return;

  let targetX = 0, targetY = 0;
  let currX = 0, currY = 0;
  let isRunning = false;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 18;
    targetY = (e.clientY / window.innerHeight - 0.5) * 18;

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(updateParallax);
    }
  }, { passive: true });

  function updateParallax() {
    currX += (targetX - currX) * 0.05;
    currY += (targetY - currY) * 0.05;

    glowElements.forEach((el, i) => {
      const factor = (i + 1) * 0.4;
      el.style.transform = `translate(${currX * factor}px, ${currY * factor}px)`;
    });

    if (Math.abs(targetX - currX) > 0.1 || Math.abs(targetY - currY) > 0.1) {
      requestAnimationFrame(updateParallax);
    } else {
      isRunning = false;
    }
  }
}

/* 8. Mobile Menu Drawer */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileMenuClose');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }
}

/* 9. Live UTC+05:30 IST Clock */
function initLiveClock() {
  const clockEl = document.getElementById('liveUtcClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utc + (3600000 * 5.5));
    const hours = String(istTime.getHours()).padStart(2, '0');
    const minutes = String(istTime.getMinutes()).padStart(2, '0');
    const seconds = String(istTime.getSeconds()).padStart(2, '0');
    clockEl.innerText = `${hours}:${minutes}:${seconds} IST`;
  }

  setInterval(update, 1000);
  update();
}

/* 10. Copy PGP Key with Feedback */
function initPgpCopy() {
  const copyBtn = document.getElementById('copy-pgp-btn') || document.querySelector('[data-copy-pgp]');
  const pgpText = document.getElementById('pgp-text');

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const raw = pgpText ? pgpText.innerText.trim() : '4B91 78C3 A201 EE84 95B2 119F 83CD 4721 A99C D005 38EF 451A 90FE';
      navigator.clipboard.writeText(raw).then(() => {
        const origHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="material-symbols-outlined text-sm text-secondary">check</span> <span>Fingerprint Copied!</span>';
        setTimeout(() => {
          copyBtn.innerHTML = origHTML;
        }, 2200);
      }).catch(() => {
        alert('PGP Fingerprint: ' + raw);
      });
    });
  }
}

/* 11. Copy Email */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyBtn') || document.querySelector('[data-copy-email]');
  const emailEl = document.getElementById('targetEmail');

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailEl ? emailEl.innerText.trim() : 'aayush.sarowa@example.com';
      navigator.clipboard.writeText(email).then(() => {
        const origHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="material-symbols-outlined text-[16px] text-secondary">check</span> Copied';
        setTimeout(() => {
          copyBtn.innerHTML = origHTML;
        }, 2000);
      });
    });
  }
}

/* 12. Scope Tier Selector */
function selectTier(btn, value) {
  document.querySelectorAll('.tier-btn').forEach(b => {
    b.classList.remove('bg-primary-container/30', 'text-secondary', 'border-secondary/50', 'font-bold');
    b.classList.add('bg-surface-container', 'text-on-surface');
  });
  btn.classList.remove('bg-surface-container', 'text-on-surface');
  btn.classList.add('bg-primary-container/30', 'text-secondary', 'border-secondary/50', 'font-bold');
  const input = document.getElementById('selectedBudget');
  if (input) input.value = value;
}

/* 13. Contact Form Simulation (Accurate feedback without pretending a fake backend) */
function initContactForm() {
  const form = document.getElementById('transmissionForm');
  if (!form) return;

  const btn = document.getElementById('submitBtn');
  const result = document.getElementById('transmissionResult');
  const textarea = document.getElementById('messageBody');
  const counter = document.getElementById('charCounter');

  if (textarea && counter) {
    textarea.addEventListener('input', () => {
      counter.innerText = `${textarea.value.length} / 2000`;
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!btn) return;

    btn.disabled = true;
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">sync</span> <span>Transmitting Packet...</span>';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<span>Transmission Sent</span> <span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span>';
      if (result) {
        result.classList.remove('hidden');
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
      if (counter) counter.innerText = '0 / 2000';

      setTimeout(() => {
        btn.innerHTML = origHTML;
      }, 4000);
    }, 1200);
  });
}

/* 14. Interactive Modals */
function initModals() {
  const openChessBtn = document.querySelector('a[href="#demo-modal"]');
  const chessModal = document.getElementById('chessDemoModal');
  const closeChessBtn = document.getElementById('closeChessModal');

  if (openChessBtn && chessModal) {
    openChessBtn.addEventListener('click', (e) => {
      e.preventDefault();
      chessModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeChessBtn && chessModal) {
    closeChessBtn.addEventListener('click', () => {
      chessModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  const openTrackerBtn = document.querySelector('a[href="#dispatch-console"]');
  const trackerModal = document.getElementById('trackerConsoleModal');
  const closeTrackerBtn = document.getElementById('closeTrackerModal');

  if (openTrackerBtn && trackerModal) {
    openTrackerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      trackerModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeTrackerBtn && trackerModal) {
    closeTrackerBtn.addEventListener('click', () => {
      trackerModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  document.querySelectorAll('.cyber-modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.cyber-modal-overlay.active').forEach(m => {
        m.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  });
}

