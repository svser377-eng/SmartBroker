/**
 * SmartBroker – Controllers Layer
 * Maneja eventos, interacciones y lógica de presentación.
 * No conoce los datos de negocio (eso es Models).
 * No genera HTML directamente (eso es Views).
 */

export const Controllers = {

  /* ═══════════════════════════════════════
     NAV CONTROLLER
  ═══════════════════════════════════════ */
  initNav() {
    const header    = document.getElementById("header");
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-cta");
    const navLinks    = document.querySelectorAll(".nav-link");

    if (!header || !hamburger) return;

    /* ── Scroll: sticky shadow + active link ── */
    const onScroll = () => {
      header.classList.toggle("header--scrolled", window.scrollY > 30);
      this._updateActiveNav(navLinks);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ── Hamburger toggle ── */
    hamburger.addEventListener("click", () => {
      const open = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!open));
      hamburger.classList.toggle("is-open", !open);
      mobileMenu.classList.toggle("is-open", !open);
      mobileMenu.setAttribute("aria-hidden", String(open));
      document.body.classList.toggle("no-scroll", !open);
    });

    /* ── Close mobile menu on link click ── */
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("no-scroll");
      });
    });

    /* ── Smooth scroll for all anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        const offset = header.offsetHeight;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: "smooth",
        });
      });
    });
  },

  _updateActiveNav(links) {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 120;
    let current = "";

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    });

    links.forEach(link => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${current}`
      );
    });
  },

  /* ═══════════════════════════════════════
     SCROLL REVEAL CONTROLLER
  ═══════════════════════════════════════ */
  initScrollReveal() {
    const opts = {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.style.getPropertyValue("--delay") || "0ms";
          setTimeout(() => {
            el.classList.add("is-visible");
          }, parseInt(delay) || 0);
          observer.unobserve(el);
        }
      });
    }, opts);

    document.querySelectorAll(".reveal, .reveal--right, .reveal--up").forEach(el => {
      observer.observe(el);
    });
  },

  /* ═══════════════════════════════════════
     TESTIMONIALS CAROUSEL CONTROLLER
  ═══════════════════════════════════════ */
  initTestimonials() {
    const track  = document.getElementById("testimonials-track");
    const dots   = document.querySelectorAll(".tc-dot");
    const prevBtn = document.getElementById("tc-prev");
    const nextBtn = document.getElementById("tc-next");

    if (!track) return;

    let current = 0;
    const total = dots.length;
    let autoplay;
    let startX = 0;

    const goTo = (index) => {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === current);
        d.setAttribute("aria-selected", String(i === current));
      });
    };

    /* Buttons */
    prevBtn?.addEventListener("click", () => { goTo(current - 1); resetAuto(); });
    nextBtn?.addEventListener("click", () => { goTo(current + 1); resetAuto(); });

    /* Dot navigation */
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => { goTo(i); resetAuto(); });
    });

    /* Touch / swipe */
    track.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(current + (diff > 0 ? 1 : -1)); resetAuto(); }
    });

    /* Autoplay */
    const startAuto = () => { autoplay = setInterval(() => goTo(current + 1), 5000); };
    const resetAuto = () => { clearInterval(autoplay); startAuto(); };

    startAuto();
    goTo(0);
  },

  /* ═══════════════════════════════════════
     FORM CONTROLLER
  ═══════════════════════════════════════ */
  initContactForm() {
    const form    = document.getElementById("contact-form");
    const submit  = document.getElementById("form-submit");
    const btnText = document.getElementById("btn-text");
    const btnLoad = document.getElementById("btn-loading");
    const success = document.getElementById("form-success");

    if (!form) return;

    /* ── Real-time validation ── */
    const fields = form.querySelectorAll("input[required], textarea[required]");
    fields.forEach(field => {
      field.addEventListener("blur", () => this._validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("is-invalid")) this._validateField(field);
      });
    });

    /* ── Submit ── */
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let valid = true;

      fields.forEach(field => {
        if (!this._validateField(field)) valid = false;
      });

      if (!valid) {
        const firstErr = form.querySelector(".is-invalid");
        firstErr?.focus();
        return;
      }

      /* Simulate async submission */
      this._setFormLoading(true, btnText, btnLoad, submit);
      await this._simulateSubmit();
      this._setFormLoading(false, btnText, btnLoad, submit);

      form.reset();
      success.hidden = false;
      success.focus();

      setTimeout(() => { success.hidden = true; }, 6000);
    });
  },

  _validateField(field) {
    const errEl = document.getElementById(`err-${field.name}`);
    const value = field.value.trim();
    let msg = "";

    if (!value) {
      msg = "Este campo es obligatorio.";
    } else if (field.type === "email") {
      const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRx.test(value)) msg = "Ingresa un correo válido.";
    } else if (field.type === "tel" && value) {
      const telRx = /^[\d\s()+-]{7,20}$/;
      if (!telRx.test(value)) msg = "Ingresa un teléfono válido.";
    } else if (field.tagName === "TEXTAREA" && value.length < 10) {
      msg = "El mensaje debe tener al menos 10 caracteres.";
    }

    field.classList.toggle("is-invalid", !!msg);
    field.classList.toggle("is-valid", !msg && !!value);
    if (errEl) errEl.textContent = msg;

    return !msg;
  },

  _setFormLoading(loading, btnText, btnLoad, submit) {
    btnText.hidden  = loading;
    btnLoad.hidden  = !loading;
    submit.disabled = loading;
    if (loading) btnLoad.removeAttribute("aria-hidden");
    else btnLoad.setAttribute("aria-hidden", "true");
  },

  _simulateSubmit() {
    return new Promise(resolve => setTimeout(resolve, 1800));
  },

  /* ═══════════════════════════════════════
     COUNTER ANIMATION (stats in hero)
  ═══════════════════════════════════════ */
  initCounters() {
    const counters = document.querySelectorAll(".hero__stat strong");
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const raw = el.textContent;
        const num = parseFloat(raw.replace(/[^\d.]/g, ""));
        const suffix = raw.replace(/[\d.]/g, "");
        if (isNaN(num)) return;

        let start = 0;
        const step = num / 60;
        const tick = () => {
          start = Math.min(start + step, num);
          el.textContent = (Number.isInteger(num)
            ? Math.floor(start)
            : start.toFixed(0)) + suffix;
          if (start < num) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  },

  /* ═══════════════════════════════════════
     MODAL CONTROLLER – POLÍTICA DE DATOS
  ═══════════════════════════════════════ */
  initDataModal() {
    const backdrop  = document.getElementById("modal-data-policy");
    if (!backdrop) return;

    const openModal = () => {
      backdrop.removeAttribute("hidden");
      // Force reflow before adding class for transition
      backdrop.offsetHeight;
      backdrop.classList.add("is-open");
      document.body.classList.add("no-scroll");
      document.getElementById("modal-close-top")?.focus();
    };

    const closeModal = () => {
      backdrop.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
      setTimeout(() => { backdrop.setAttribute("hidden", ""); }, 320);
    };

    /* Trigger links */
    document.querySelectorAll('[data-modal="data-policy"]').forEach(el => {
      el.addEventListener("click", (e) => { e.preventDefault(); openModal(); });
    });

    /* Close buttons */
    document.getElementById("modal-close-top")?.addEventListener("click", closeModal);
    document.getElementById("modal-close-bottom")?.addEventListener("click", closeModal);
    document.getElementById("modal-accept")?.addEventListener("click", closeModal);

    /* Click outside modal */
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });

    /* Escape key */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop.classList.contains("is-open")) closeModal();
    });
  },

  /* ─── INIT ALL ─── */
  init() {
    this.initNav();
    this.initScrollReveal();
    this.initTestimonials();
    this.initContactForm();
    this.initCounters();
    this.initDataModal();
  },

  /* ─── SPIDER RADIAL MENU ─── */
  initSpiderMenu(services) {
    const scene      = document.getElementById("spiderScene");
    const centerBtn  = document.getElementById("spiderCenter");
    const nodesWrap  = document.getElementById("spiderNodes");
    const svg        = document.getElementById("spiderSvg");
    const hint       = document.getElementById("spiderHint");
    if (!scene || !centerBtn || !nodesWrap || !svg) return;

    const SCENE_W  = 520;
    const CX       = SCENE_W / 2;   // 260
    const CY       = SCENE_W / 2;   // 260
    const R1       = 130;            // orbit 1 radius (main nodes)
    const R2       = 240;            // orbit 2 radius (child nodes)
    const DEG      = Math.PI / 180;

    let menuOpen  = false;
    let activeId  = null;

    /* helpers */
    function radPos(angleDeg, r) {
      return {
        x: CX + r * Math.cos(angleDeg * DEG),
        y: CY + r * Math.sin(angleDeg * DEG),
      };
    }

    function drawLine(id, x1, y1, x2, y2, opacity) {
      let el = svg.querySelector(`#${id}`);
      if (!el) {
        el = document.createElementNS("http://www.w3.org/2000/svg", "line");
        el.id = id;
        svg.appendChild(el);
      }
      el.setAttribute("x1", x1); el.setAttribute("y1", y1);
      el.setAttribute("x2", x2); el.setAttribute("y2", y2);
      el.setAttribute("stroke", "#E8571A");
      el.setAttribute("stroke-width", "1");
      el.setAttribute("stroke-opacity", opacity);
      el.setAttribute("stroke-dasharray", "5 4");
    }

    function removeLine(id) {
      svg.querySelector(`#${id}`)?.remove();
    }

    /* Build DOM nodes */
    services.forEach((svc) => {
      const p = radPos(svc.angle, R1);

      /* Main node */
      const node = document.createElement("button");
      node.className = "spider-node";
      node.id        = "sn-" + svc.id;
      node.setAttribute("aria-label", svc.label.replace("\n", " "));
      node.style.left = (p.x - 31) + "px";
      node.style.top  = (p.y - 31) + "px";
      node.innerHTML  = `<span class="sn-icon">${svc.icon}</span><span class="sn-label">${svc.label.replace("\n", "<br>")}</span>`;
      nodesWrap.appendChild(node);

      /* Child nodes */
      svc.children.forEach((child, j) => {
        const spread = svc.angle - 20 + j * 20;
        const cp     = radPos(spread, R2);
        const childEl = document.createElement("a");
        childEl.className = "spider-child";
        childEl.id        = `sc-${svc.id}-${j}`;
        childEl.href      = child.href || "#contacto";
        childEl.setAttribute("aria-label", child.label.replace("\n", " "));
        childEl.style.left = (cp.x - 24) + "px";
        childEl.style.top  = (cp.y - 24) + "px";
        childEl.innerHTML  = `<span class="sc-icon">${child.icon}</span><span class="sc-label">${child.label.replace("\n", "<br>")}</span>`;
        nodesWrap.appendChild(childEl);
      });

      /* Main node click / hover */
      node.addEventListener("click",      (e) => { e.stopPropagation(); toggleChildren(svc, p); });
      node.addEventListener("mouseenter", ()  => { if (menuOpen) openChildren(svc, p); });
    });

    /* ── toggle main menu ── */
    function openMenu() {
      menuOpen = true;
      centerBtn.classList.add("is-open");
      centerBtn.setAttribute("aria-expanded", "true");
      hint.textContent = "Selecciona una categoría";
      services.forEach((svc, i) => {
        const p  = radPos(svc.angle, R1);
        const el = document.getElementById("sn-" + svc.id);
        setTimeout(() => {
          el.classList.add("is-visible");
          drawLine("ln-" + svc.id, CX, CY, p.x, p.y, "0.30");
        }, i * 65);
      });
    }

    function closeMenu() {
      menuOpen = false;
      activeId = null;
      centerBtn.classList.remove("is-open");
      centerBtn.setAttribute("aria-expanded", "false");
      hint.textContent = "Pasa el cursor o haz clic para explorar nuestros servicios";
      services.forEach((svc) => {
        document.getElementById("sn-" + svc.id)?.classList.remove("is-visible", "is-active");
        removeLine("ln-" + svc.id);
        closeChildrenOf(svc);
      });
    }

    /* ── children ── */
    function openChildren(svc, parentPos) {
      activeId = svc.id;
      document.getElementById("sn-" + svc.id)?.classList.add("is-active");
      hint.textContent = svc.label.replace("\n", " ") + " — elige una opción";
      svc.children.forEach((child, j) => {
        const spread  = svc.angle - 20 + j * 20;
        const cp      = radPos(spread, R2);
        const childEl = document.getElementById(`sc-${svc.id}-${j}`);
        setTimeout(() => {
          childEl?.classList.add("is-visible");
          drawLine(`lc-${svc.id}-${j}`, parentPos.x, parentPos.y, cp.x, cp.y, "0.45");
        }, j * 75);
      });
    }

    function closeChildrenOf(svc) {
      document.getElementById("sn-" + svc.id)?.classList.remove("is-active");
      svc.children.forEach((_, j) => {
        document.getElementById(`sc-${svc.id}-${j}`)?.classList.remove("is-visible");
        removeLine(`lc-${svc.id}-${j}`);
      });
    }

    function toggleChildren(svc, parentPos) {
      const wasActive = activeId === svc.id;
      /* close all children first */
      services.forEach((s) => closeChildrenOf(s));
      if (!wasActive) {
        openChildren(svc, parentPos);
      } else {
        activeId = null;
        hint.textContent = "Selecciona una categoría";
      }
    }

    /* ── center button ── */
    centerBtn.addEventListener("click", () => {
      if (menuOpen) closeMenu(); else openMenu();
    });

    /* hover on center: auto-open */
    centerBtn.addEventListener("mouseenter", () => {
      if (!menuOpen) openMenu();
    });

    /* click outside: close children but keep menu open; double-click outside closes all */
    scene.addEventListener("click", (e) => {
      if (!e.target.closest(".spider-node") && !e.target.closest(".spider-center") && !e.target.closest(".spider-child")) {
        if (activeId) {
          services.forEach((s) => closeChildrenOf(s));
          activeId = null;
          hint.textContent = "Selecciona una categoría";
        }
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".spider-scene") && menuOpen) closeMenu();
    });
  },
};
export default Controllers;
