/**
 * VerifiRent MVP — Client Application Logic
 * Interactive UI, Score Animations, Neighbourhood Explorer, Comparison Engine & Forms
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.VERIFIRENT_DATA;
  if (!data) {
    console.error("VerifiRent data module not loaded.");
    return;
  }

  // ==========================================
  // 1. SVG ICONS REPOSITORY
  // ==========================================
  const ICONS = {
    "zap": (size = 18, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z"/>
      </svg>`,
    "wifi": (size = 18, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>
      </svg>`,
    "shield": (size = 18, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
      </svg>`,
    "droplets": (size = 18, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
      </svg>`,
    "triangle-alert": (size = 18, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>
      </svg>`,
    "car": (size = 18, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
      </svg>`,
    "circle-check": (size = 16, color = "currentColor", stroke = 2.2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
      </svg>`,
    "sparkles": (size = 16, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>
      </svg>`,
    "map-pin": (size = 16, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
      </svg>`,
    "clock": (size = 16, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>`,
    "compass": (size = 22, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>`,
    "search": (size = 22, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>`,
    "lock": (size = 20, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>`,
    "user-check": (size = 22, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      </svg>`,
    "eye": (size = 22, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>
      </svg>`,
    "file-text": (size = 16, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
      </svg>`,
    "file-check": (size = 20, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>
      </svg>`,
    "flag": (size = 20, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>
      </svg>`,
    "refresh-cw": (size = 20, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
      </svg>`,
    "arrow-left-right": (size = 20, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>
      </svg>`,
    "arrow-right": (size = 16, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
      </svg>`,
    "arrow-up": (size = 14, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>
      </svg>`,
    "circle-alert": (size = 16, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
      </svg>`,
    "menu": (size = 20, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
      </svg>`,
    "x": (size = 20, color = "currentColor", stroke = 2) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
      </svg>`
  };

  window.VERIFIRENT_ICONS = ICONS;

  // ==========================================
  // 2. HEADER & SMOOTH NAVIGATION
  // ==========================================
  const header = document.querySelector(".site-header");
  const mobileToggleBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.style.display === "none" || !mobileMenu.style.display;
      if (isHidden) {
        mobileMenu.style.display = "flex";
        mobileToggleBtn.innerHTML = ICONS["x"](20);
        mobileToggleBtn.setAttribute("aria-expanded", "true");
      } else {
        mobileMenu.style.display = "none";
        mobileToggleBtn.innerHTML = ICONS["menu"](20);
        mobileToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Smooth scroll handler for nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        if (mobileMenu && mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          if (mobileToggleBtn) {
            mobileToggleBtn.innerHTML = ICONS["menu"](20);
            mobileToggleBtn.setAttribute("aria-expanded", "false");
          }
        }
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // Back to Top floating button
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==========================================
  // 3. ANIMATED LIVABILITY SCORE CIRCLES
  // ==========================================
  function setupScoreCircle(circleElement, targetScore, duration = 1200) {
    if (!circleElement) return;
    const radius = parseFloat(circleElement.getAttribute("r"));
    const circumference = 2 * Math.PI * radius;
    circleElement.style.strokeDasharray = circumference;
    circleElement.style.strokeDashoffset = circumference;

    const numberElement = circleElement.closest(".score-ring-container")?.querySelector(".score-number");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const offset = circumference - (targetScore / 100) * circumference;
          circleElement.style.strokeDashoffset = offset;

          if (numberElement) {
            const start = performance.now();
            function animateNumber(time) {
              const elapsed = time - start;
              const progress = Math.min(elapsed / duration, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * targetScore);
              numberElement.textContent = current;
              if (progress < 1) {
                requestAnimationFrame(animateNumber);
              } else {
                numberElement.textContent = targetScore;
              }
            }
            requestAnimationFrame(animateNumber);
          }
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(circleElement);
  }

  const heroCircle = document.getElementById("heroScoreCircleFill");
  if (heroCircle) setupScoreCircle(heroCircle, 82);

  const showcaseCircle = document.getElementById("showcaseScoreCircleFill");
  if (showcaseCircle) setupScoreCircle(showcaseCircle, 82);

  // ==========================================
  // 4. LIVABILITY SCORE FACTOR INTERACTIVITY
  // ==========================================
  const factorCards = document.querySelectorAll(".score-interactive-card");
  factorCards.forEach(card => {
    card.addEventListener("click", () => {
      factorCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  // ==========================================
  // 5. NEIGHBOURHOOD INTELLIGENCE EXPLORER
  // ==========================================
  const tabButtons = document.querySelectorAll(".intel-tab-btn");
  const intelName = document.getElementById("intelName");
  const intelSubArea = document.getElementById("intelSubArea");
  const intelFreshness = document.getElementById("intelFreshness");
  const intelConfidence = document.getElementById("intelConfidence");
  const intelScoreBadge = document.getElementById("intelScoreBadge");
  const intelFactorsList = document.getElementById("intelFactorsList");
  const intelStrengthsList = document.getElementById("intelStrengthsList");
  const intelWatchoutsList = document.getElementById("intelWatchoutsList");
  const intelDemoName = document.getElementById("intelDemoName");

  function renderNeighbourhood(key) {
    const hood = data.neighbourhoods[key];
    if (!hood) return;

    if (intelName) intelName.textContent = `${hood.name}, Lagos`;
    if (intelSubArea) intelSubArea.textContent = `${hood.subArea} • ${hood.ratingLabel}`;
    if (intelFreshness) intelFreshness.textContent = hood.dataFreshness;
    if (intelConfidence) intelConfidence.textContent = `Confidence: ${hood.confidence}`;
    if (intelScoreBadge) intelScoreBadge.textContent = hood.score;
    if (intelDemoName) intelDemoName.textContent = hood.name;

    // Render Factor Breakdown
    if (intelFactorsList) {
      intelFactorsList.innerHTML = hood.factors.map(f => `
        <div style="padding: 1rem 1.25rem; border-radius: var(--radius-sm); background-color: var(--color-bg); border: 1px solid var(--color-border);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
            <span style="font-size: 0.925rem; font-weight: 700; color: var(--color-text);">${f.name}</span>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-forest); background-color: var(--color-forest-tint); padding: 0.15rem 0.5rem; border-radius: var(--radius-full);">${f.status}</span>
              <span style="font-size: 0.925rem; font-weight: 800; color: var(--color-text);">${f.displayValue || f.score + '/100'}</span>
            </div>
          </div>
          <div class="factor-meter-track">
            <div class="factor-meter-fill" style="width: ${f.score}%;"></div>
          </div>
          <p style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.45;">${f.detail}</p>
        </div>
      `).join("");
    }

    // Render Strengths
    if (intelStrengthsList) {
      intelStrengthsList.innerHTML = hood.strengths.map(s => `
        <li style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.45; display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="color: var(--color-verified); margin-top: 0.1rem; font-size: 1.1rem; line-height: 1;">•</span>
          <span>${s}</span>
        </li>
      `).join("");
    }

    // Render Watchouts
    if (intelWatchoutsList) {
      intelWatchoutsList.innerHTML = hood.watchouts.map(w => `
        <li style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.45; display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="color: var(--color-warning); margin-top: 0.1rem; font-size: 1.1rem; line-height: 1;">•</span>
          <span>${w}</span>
        </li>
      `).join("");
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.dataset.neighbourhood;
      renderNeighbourhood(key);
    });
  });

  // Initial render
  renderNeighbourhood("ikeja");

  // ==========================================
  // 6. BENCHMARK COMPARISON ENGINE
  // ==========================================
  const selectA = document.getElementById("compSelectA");
  const selectB = document.getElementById("compSelectB");
  const compHeaderA = document.getElementById("compHeaderA");
  const compHeaderB = document.getElementById("compHeaderB");
  const compRowsContainer = document.getElementById("compRowsContainer");

  function updateCompareOptions() {
    if (!selectA || !selectB) return;
    const valA = selectA.value;
    const valB = selectB.value;

    Array.from(selectA.options).forEach(opt => {
      opt.disabled = opt.value === valB;
    });
    Array.from(selectB.options).forEach(opt => {
      opt.disabled = opt.value === valA;
    });
  }

  function renderComparison() {
    if (!selectA || !selectB || !compRowsContainer) return;
    const keyA = selectA.value;
    const keyB = selectB.value;
    const hoodA = data.neighbourhoods[keyA];
    const hoodB = data.neighbourhoods[keyB];
    if (!hoodA || !hoodB) return;

    if (compHeaderA) {
      compHeaderA.innerHTML = `
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-forest);">${hoodA.name}</div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted);">Index: <strong>${hoodA.score}/100</strong></div>
      `;
    }

    if (compHeaderB) {
      compHeaderB.innerHTML = `
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-forest);">${hoodB.name}</div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted);">Index: <strong>${hoodB.score}/100</strong></div>
      `;
    }

    compRowsContainer.innerHTML = data.comparisonFactors.map((row, index) => {
      const valA = row[keyA];
      const valB = row[keyB];
      const aWins = valA > valB;
      const bWins = valB > valA;
      const bgColor = index % 2 === 0 ? "#FFFFFF" : "rgba(250, 249, 245, 0.5)";

      return `
        <div class="comp-row-grid" style="background-color: ${bgColor};">
          <div>
            <div style="font-size: 0.925rem; font-weight: 600; color: var(--color-text);">${row.factor}</div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.15rem;">${row.description}</div>
          </div>
          <div style="padding: 0 1rem; text-align: center;">
            <div style="display: flex; justify-content: center; align-items: baseline; gap: 0.25rem;">
              <span style="font-size: 1.15rem; font-weight: 700; color: ${aWins ? 'var(--color-forest)' : 'var(--color-text)'};">${valA}</span>
              <span style="font-size: 0.7rem; color: var(--color-text-subtle);">${row.unit}</span>
            </div>
            <div style="width: 100%; height: 4px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden; margin-top: 0.35rem;">
              <div style="height: 100%; width: ${valA}%; background-color: ${aWins ? 'var(--color-forest)' : 'var(--color-text-subtle)'}; border-radius: var(--radius-full);"></div>
            </div>
          </div>
          <div style="padding: 0 1rem; text-align: center;">
            <div style="display: flex; justify-content: center; align-items: baseline; gap: 0.25rem;">
              <span style="font-size: 1.15rem; font-weight: 700; color: ${bWins ? 'var(--color-forest)' : 'var(--color-text)'};">${valB}</span>
              <span style="font-size: 0.7rem; color: var(--color-text-subtle);">${row.unit}</span>
            </div>
            <div style="width: 100%; height: 4px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden; margin-top: 0.35rem;">
              <div style="height: 100%; width: ${valB}%; background-color: ${bWins ? 'var(--color-forest)' : 'var(--color-text-subtle)'}; border-radius: var(--radius-full);"></div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  if (selectA && selectB) {
    selectA.addEventListener("change", () => {
      updateCompareOptions();
      renderComparison();
    });
    selectB.addEventListener("change", () => {
      updateCompareOptions();
      renderComparison();
    });
    updateCompareOptions();
    renderComparison();
  }

  // ==========================================
  // 7. WAITLIST SUBMISSIONS & FEEDBACK
  // ==========================================
  // ==========================================
  // 7. WAITLIST SUBMISSIONS & TYPEFORM REDIRECT
  // ==========================================
  const TYPEFORM_URL = "https://form.typeform.com/to/t3echFdS";

  function setupWaitlistForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value.trim() : "";
      const targetUrl = email ? `${TYPEFORM_URL}#email=${encodeURIComponent(email)}` : TYPEFORM_URL;
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    });
  }

  setupWaitlistForm("heroWaitlistForm");
  setupWaitlistForm("footerWaitlistForm");
});
