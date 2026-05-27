/**
 * SmartBroker – Controllers Layer
 * Maneja eventos, interacciones y lógica de presentación.
 * No conoce los datos de negocio (eso es Models).
 * No genera HTML directamente (eso es Views).
 */

const Controllers = {

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
    /* El carrusel de aseguradoras es 100% CSS (animation marquee).
       No requiere lógica JS — este método se mantiene para compatibilidad. */
  },

  /* ═══════════════════════════════════════
     FORM CONTROLLER
  ═══════════════════════════════════════ */

  /* ── Configuración EmailJS ── */
  _emailConfig: {
    serviceId:  "service_1cqahbr",
    templateId: "template_ay0dj9f",
    toEmail:    "yordonez@smartbroker.com.ec",
  },

  /* ── Rate limiting: 1 envío por email por día ── */
  _canSendEmail(email) {
    try {
      const key  = "sb_last_" + btoa(email.toLowerCase().trim());
      const last = localStorage.getItem(key);
      if (!last) return true;
      return (Date.now() - parseInt(last, 10)) > 86_400_000;
    } catch { return true; }
  },
  _registerSend(email) {
    try {
      const key = "sb_last_" + btoa(email.toLowerCase().trim());
      localStorage.setItem(key, String(Date.now()));
    } catch { /* storage bloqueado */ }
  },
  _timeLeft(email) {
    try {
      const key  = "sb_last_" + btoa(email.toLowerCase().trim());
      const ms   = 86_400_000 - (Date.now() - parseInt(localStorage.getItem(key) || "0", 10));
      return `${Math.floor(ms / 3_600_000)}h ${Math.floor((ms % 3_600_000) / 60_000)}min`;
    } catch { return "24h"; }
  },

  /* ── Leer archivo como base64 ── */
  _fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload  = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  initContactForm() {
    const form    = document.getElementById("contact-form");
    const submit  = document.getElementById("form-submit");
    const btnText = document.getElementById("btn-text");
    const btnLoad = document.getElementById("btn-loading");
    const success = document.getElementById("form-success");

    if (!form) return;

    /* ── Mostrar nombre del archivo seleccionado ── */
    const fileInput   = document.getElementById("cf-attach");
    const fileDisplay = document.getElementById("file-name-display");
    fileInput?.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (!file) { fileDisplay.textContent = "Seleccionar archivo…"; return; }
      if (file.size > 500 * 1024) {
        document.getElementById("err-attach").textContent = "El archivo supera los 500 KB.";
        fileInput.value = "";
        fileDisplay.textContent = "Seleccionar archivo…";
        return;
      }
      document.getElementById("err-attach").textContent = "";
      fileDisplay.textContent = file.name;
    });

    /* ── Validación en tiempo real ── */
    const fields = form.querySelectorAll("input[required], textarea[required]");
    fields.forEach(field => {
      field.addEventListener("blur",  () => this._validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("is-invalid")) this._validateField(field);
      });
    });

    /* ── Submit ── */
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      /* Validar campos requeridos */
      let valid = true;
      fields.forEach(f => { if (!this._validateField(f)) valid = false; });
      if (!valid) { form.querySelector(".is-invalid")?.focus(); return; }

      /* Validar tamaño del adjunto si existe */
      const file = fileInput?.files[0];
      if (file && file.size > 500 * 1024) {
        document.getElementById("err-attach").textContent = "El archivo supera los 500 KB.";
        fileInput.focus();
        return;
      }

      /* Rate limit */
      const emailVal = document.getElementById("cf-email")?.value.trim() || "";
      if (!this._canSendEmail(emailVal)) {
        this._showFormError(form, `Ya enviaste un mensaje hoy. Podrás enviar otro en ${this._timeLeft(emailVal)}.`);
        return;
      }

      /* Preparar parámetros */
      this._setFormLoading(true, btnText, btnLoad, submit);

      const params = {
        from_name:  document.getElementById("cf-name")?.value.trim()    || "",
        from_email: emailVal,
        phone:      document.getElementById("cf-phone")?.value.trim()   || "No indicado",
        service:    document.getElementById("cf-service")?.value        || "No indicado",
        message:    document.getElementById("cf-message")?.value.trim() || "",
        to_email:   this._emailConfig.toEmail,
        has_attach: "No",
        attach_name: "",
        attach_data: "",
      };

      /* Adjuntar archivo como base64 si existe */
      if (file) {
        try {
          params.attach_data = await this._fileToBase64(file);
          params.attach_name = file.name;
          params.has_attach  = `Sí — ${file.name}`;
        } catch {
          params.has_attach = "Error al leer el archivo";
        }
      }

      /* Enviar con EmailJS */
      try {
        await emailjs.send(
          this._emailConfig.serviceId,
          this._emailConfig.templateId,
          params
        );

        this._registerSend(emailVal);
        this._setFormLoading(false, btnText, btnLoad, submit);

        form.reset();
        if (fileDisplay) fileDisplay.textContent = "Seleccionar archivo…";
        fields.forEach(f => f.classList.remove("is-valid", "is-invalid"));

        success.hidden = false;
        success.focus();
        setTimeout(() => { success.hidden = true; }, 7000);

      } catch (err) {
        console.error("EmailJS error:", err);
        this._setFormLoading(false, btnText, btnLoad, submit);
        this._showFormError(form, "Error al enviar. Escríbenos a yordonez@smartbroker.com.ec");
      }
    });
  },

  _showFormError(form, msg) {
    let box = form.querySelector(".form-send-error");
    if (!box) {
      box = document.createElement("div");
      box.className = "form-send-error";
      box.setAttribute("role", "alert");
      box.setAttribute("aria-live", "polite");
      document.getElementById("form-submit").insertAdjacentElement("afterend", box);
    }
    box.textContent = msg;
    box.hidden = false;
    setTimeout(() => { box.hidden = true; }, 9000);
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
    this.initCentralMenu();
    this.initCounters();
    this.initDataModal();
    this.initServiceModal();
  },

  /* ─── MENÚ CENTRAL MÓVIL ─── */
  initCentralMenu() {
    const panel      = document.getElementById("cmenuPanel");
    const panelHdr   = document.getElementById("cmenuPanelHeader");
    const panelItems = document.getElementById("cmenuPanelItems");
    const hint       = document.getElementById("cmenuHint");
    if (!panel) return;

    /* Datos de las ramas — espejo del spiderMenu del modelo */
    const branches = [
      {
        id: "personas", label: "Personas",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
        cols: 1,
        children: [
          { label: "Vehículos",                serviceId: "personas-vehiculos",   icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 28l4-12h28l4 12"/></svg>` },
          { label: "Hogar",                    serviceId: "personas-hogar",       icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-7 9 7v11H3z"/></svg>` },
          { label: "Asistencia Médica", serviceId: "personas-vida-medica", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>` },
          { label: "Seguro de viaje",          serviceId: "personas-viaje",       icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"/></svg>` },
          { label: "Vida y Ahorro",            serviceId: "personas-vida-ahorro", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 12h6"/></svg>` },
        ]
      },
      {
        id: "empresas", label: "Empresas",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="14" rx="2"/></svg>`,
        cols: 2,
        children: [
          { label: "Multirriesgo",           serviceId: "empresas-multirriesgo", icon: `🔐` },
          { label: "Programas de Seguros",   serviceId: "empresas-programas",    icon: `📋` },
          { label: "Transporte",             serviceId: "empresas-transporte",   icon: `🚢` },
          { label: "Responsabilidad Civil",  serviceId: "empresas-rc",           icon: `⚖️` },
          { label: "Accidentes Personales",  serviceId: "empresas-accidentes",   icon: `⛑️` },
          { label: "Casco Aéreo / Marítimo", serviceId: "empresas-casco",        icon: `⚓` },
          { label: "Asistencia Médica",      serviceId: "empresas-medica",       icon: `🏥` },
        ]
      },
      {
        id: "fianzas", label: "Fianzas",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 12h6M9 16h4"/></svg>`,
        cols: 2,
        children: [
          { label: "BUA",   serviceId: "fianzas-bua",   icon: `📄` },
          { label: "CC",    serviceId: "fianzas-cc",    icon: `📄` },
          { label: "EOBCM", serviceId: "fianzas-eobcm", icon: `📄` },
          { label: "SO",    serviceId: "fianzas-so",    icon: `📄` },
          { label: "PGB",   serviceId: "fianzas-pgb",   icon: `📄` },
          { label: "FL",    serviceId: "fianzas-fl",    icon: `📄` },
          { label: "GA",    serviceId: "fianzas-ga",    icon: `📄` },
          { label: "GJ",    serviceId: "fianzas-gj",    icon: `📄` },
          { label: "GAR",   serviceId: "fianzas-gar",   icon: `📄` },
        ]
      }
    ];

    const arrowSvg = `<svg class="cmenu__item-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    let activeBranch = null;

    branches.forEach(branch => {
      const btn = document.getElementById("cmb-" + branch.id);
      if (!btn) return;

      btn.addEventListener("click", () => {
        const isOpen = activeBranch === branch.id;

        branches.forEach(b => {
          const el = document.getElementById("cmb-" + b.id);
          if (el) el.setAttribute("aria-expanded", "false");
        });

        if (isOpen) {
          activeBranch = null;
          panel.classList.remove("is-open");
          panel.setAttribute("aria-hidden", "true");
          hint.textContent = "Toca una categoría para explorar";
        } else {
          activeBranch = branch.id;
          btn.setAttribute("aria-expanded", "true");

          panelHdr.innerHTML = `
            <div class="cmenu__panel-inner">
              <div class="cmenu__panel-header">
                ${branch.iconSvg}
                <span>${branch.label}</span>
              </div>
              <div class="cmenu__panel-items" style="grid-template-columns: repeat(${branch.cols}, 1fr);">
                ${branch.children.map(child => `
                  <a class="cmenu__item" href="#" data-svc="${child.serviceId || ''}" aria-haspopup="dialog">
                    ${child.icon}
                    <span class="cmenu__item-label">${child.label}</span>
                    ${arrowSvg}
                  </a>`).join("")}
              </div>
            </div>`;

          panel.innerHTML = panelHdr.innerHTML;
          panel.classList.add("is-open");
          panel.setAttribute("aria-hidden", "false");
          hint.textContent = branch.label + " — elige una opción";

          setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
        }
      });
    });
  },

  initSpiderMenu(services) {
    const scene      = document.getElementById("spiderScene");
    const centerBtn  = document.getElementById("spiderCenter");
    const nodesWrap  = document.getElementById("spiderNodes");
    const svg        = document.getElementById("spiderSvg");
    const hint       = document.getElementById("spiderHint");
    if (!scene || !centerBtn || !nodesWrap || !svg) return;

    const SCENE_W  = 600;
    const CX       = SCENE_W / 2;
    const CY       = SCENE_W / 2;
    const R1       = 160;
    const R2       = 300;
    const DEG      = Math.PI / 180;

    let menuOpen  = false;
    let activeId  = null;

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

    services.forEach((svc) => {
      const p = radPos(svc.angle, R1);

      const node = document.createElement("button");
      node.className = "spider-node";
      node.id        = "sn-" + svc.id;
      node.setAttribute("aria-label", svc.label.replace("\n", " "));
      node.style.left = (p.x - 31) + "px";
      node.style.top  = (p.y - 31) + "px";
      node.innerHTML  = `<span class="sn-icon">${svc.icon}</span><span class="sn-label">${svc.label.replace("\n", "<br>")}</span>`;
      nodesWrap.appendChild(node);

      const CHILD_STEP = svc.childStep || 9;
      const totalArc   = (svc.children.length - 1) * CHILD_STEP;
      const startAngle = svc.angle - totalArc / 2;
      svc.children.forEach((child, j) => {
        const spread = startAngle + j * CHILD_STEP;
        const cp     = radPos(spread, R2);
        const childEl = document.createElement("a");
        childEl.className = "spider-child";
        childEl.id        = `sc-${svc.id}-${j}`;
        childEl.href      = "#";
        childEl.setAttribute("aria-label", child.label.replace("\n", " "));
        childEl.setAttribute("data-svc", child.serviceId || "");
        childEl.setAttribute("aria-haspopup", "dialog");
        childEl.style.left = (cp.x - 25) + "px";
        childEl.style.top  = (cp.y - 25) + "px";
        childEl.innerHTML  = `<span class="sc-icon">${child.icon}</span><span class="sc-label">${child.label.replace("\n", "<br>")}</span>`;
        childEl.addEventListener("click", (e) => {
          e.preventDefault(); e.stopPropagation();
          if (child.serviceId && window._sbOpenService) window._sbOpenService(child.serviceId);
        });
        nodesWrap.appendChild(childEl);
      });

      node.addEventListener("click",      (e) => { e.stopPropagation(); toggleChildren(svc, p); });
      node.addEventListener("mouseenter", ()  => { if (menuOpen) openChildren(svc, p); });
    });

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

    function openChildren(svc, parentPos) {
      activeId = svc.id;
      document.getElementById("sn-" + svc.id)?.classList.add("is-active");
      hint.textContent = svc.label.replace("\n", " ") + " — elige una opción";
      const childStep2   = svc.childStep || 9;
      const totalArc2    = (svc.children.length - 1) * childStep2;
      const startAngle2  = svc.angle - totalArc2 / 2;
      svc.children.forEach((child, j) => {
        const spread  = startAngle2 + j * childStep2;
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
      services.forEach((s) => closeChildrenOf(s));
      if (!wasActive) {
        openChildren(svc, parentPos);
      } else {
        activeId = null;
        hint.textContent = "Selecciona una categoría";
      }
    }

    centerBtn.addEventListener("click", () => {
      if (menuOpen) closeMenu(); else openMenu();
    });

    centerBtn.addEventListener("mouseenter", () => {
      if (!menuOpen) openMenu();
    });

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

  /* ─── MODAL DE SERVICIO ─── */
  initServiceModal() {
    const backdrop  = document.getElementById("modal-service");
    if (!backdrop) return;

    const info    = window.AppModel?.serviceInfo  || {};
    const waNum   = window.AppModel?.waNumber     || "593998661249";

    const titleEl   = document.getElementById("svc-modal-title");
    const subEl     = document.getElementById("svc-modal-sub");
    const descEl    = document.getElementById("svcDesc");
    const featEl    = document.getElementById("svcFeatures");
    const waBtn     = document.getElementById("svcWaBtn");
    const closeTop  = document.getElementById("svc-modal-close");
    const closeBot  = document.getElementById("svc-modal-close-bottom");
    const contactBtn= document.getElementById("svcContactBtn");

    const openModal = (serviceId) => {
      const svc = info[serviceId];
      if (!svc) return;

      titleEl.textContent = svc.title;
      subEl.textContent   = "Categoría: " + (svc.title.split("—")[0].trim());

      descEl.innerHTML = `<p class="modal-section-title">Descripción</p><p>${svc.desc}</p>`;

      if (svc.features && svc.features.length) {
        featEl.innerHTML = `
          <p class="modal-section-title">Coberturas principales</p>
          <ul>${svc.features.map(f => `<li>${f}</li>`).join("")}</ul>`;
      } else {
        featEl.innerHTML = "";
      }

      const waMsg = encodeURIComponent("Hola SmartBroker, me interesa información sobre: " + svc.title);
      waBtn.href = "https://wa.me/" + waNum + "?text=" + waMsg;

      contactBtn.onclick = (e) => { e.preventDefault(); closeModal(); location.href = "#contacto"; };

      backdrop.removeAttribute("hidden");
      requestAnimationFrame(() => backdrop.classList.add("is-open"));
      document.body.style.overflow = "hidden";
      closeTop.focus();
    };

    const closeModal = () => {
      backdrop.classList.remove("is-open");
      setTimeout(() => backdrop.setAttribute("hidden", ""), 320);
      document.body.style.overflow = "";
    };

    closeTop.addEventListener("click", closeModal);
    closeBot.addEventListener("click", closeModal);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop.classList.contains("is-open")) closeModal();
    });

    window._sbOpenService = openModal;

    document.querySelectorAll(".service-card__cta[data-svc]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(btn.getAttribute("data-svc"));
      });
    });

    document.querySelectorAll(".spider-child[data-svc]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal(el.getAttribute("data-svc"));
      });
    });

    document.addEventListener("click", (e) => {
      const item = e.target.closest(".cmenu__item[data-svc]");
      if (item) { e.preventDefault(); openModal(item.getAttribute("data-svc")); }
    });
  },

};

export default Controllers;
