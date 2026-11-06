// Carrd blog additions. Loaded by carrd-cover-fix.html.
(() => {
  if (window.__zarakuroBlogReady) return;
  window.__zarakuroBlogReady = true;
  let mermaidModule;
  let diagramSequence = 0;
  async function renderDiagrams(root) {
    const blocks = [...root.querySelectorAll('.bc')].filter(block =>
      block.querySelector('.bcl')?.textContent.trim().toLowerCase() === 'mermaid'
    );
    if (!blocks.length) return;
    try {
      mermaidModule ||= import('https://cdn.jsdelivr.net/npm/mermaid@11.12.0/dist/mermaid.esm.min.mjs').then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          fontFamily: 'Arial, sans-serif',
          flowchart: { htmlLabels: false, curve: 'basis', useMaxWidth: true },
          themeVariables: {
            background: '#101c25', primaryColor: '#16465E', primaryTextColor: '#eef6fa',
            primaryBorderColor: '#66ccff', lineColor: '#9fc4d6', secondaryColor: '#233748',
            tertiaryColor: '#192b38', clusterBkg: '#142735', clusterBorder: '#54798c',
            edgeLabelBackground: '#101c25', titleColor: '#eef6fa', fontSize: '16px'
          }
        });
        return mermaid;
      }).catch(error => { mermaidModule = null; throw error; });
      const mermaid = await mermaidModule;
      for (const block of blocks) {
        if (!root.isConnected) return;
        try {
          const { svg } = await mermaid.render(`blog-diagram-${++diagramSequence}`, block.querySelector('code').textContent);
          if (!root.isConnected) return;
          const documentSvg = new DOMParser().parseFromString(svg, 'image/svg+xml');
          const element = documentSvg.documentElement;
          const viewBox = element.getAttribute('viewBox')?.split(/[ ,]+/).map(Number);
          if (viewBox?.length === 4 && viewBox[2] > 0 && viewBox[3] > 0) {
            element.setAttribute('width', Math.ceil(viewBox[2] * 2));
            element.setAttribute('height', Math.ceil(viewBox[3] * 2));
            element.style.removeProperty('max-width');
          }
          const figure = document.createElement('figure');
          figure.className = 'blog-diagram';
          const image = document.createElement('img');
          image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(element));
          image.alt = element.querySelector('title')?.textContent || 'Ablauf- und Speicherdiagramm';
          image.tabIndex = 0;
          image.setAttribute('role', 'button');
          image.setAttribute('aria-haspopup', 'dialog');
          const caption = document.createElement('figcaption');
          caption.textContent = 'Diagramm anklicken, um die Details groß anzusehen.';
          figure.append(image, caption);
          block.replaceWith(figure);
        } catch (error) {
          const notice = document.createElement('p');
          notice.textContent = 'Diagramm konnte nicht dargestellt werden. Der Quelltext bleibt unten sichtbar.';
          block.prepend(notice);
          console.warn('Carrd Blog: Mermaid-Diagramm konnte nicht dargestellt werden.', error);
        }
      }
    } catch (error) {
      console.warn('Carrd Blog: Diagrammbibliothek konnte nicht geladen werden; der Quelltext bleibt sichtbar.', error);
    }
  }
  const diagramStyle = document.createElement('style');
  diagramStyle.textContent = '#text85 .blog-diagram{box-sizing:border-box;margin:1.5em 0;padding:1em;max-width:100%;border:1px solid #54798c;border-radius:12px;background:#101c25}#text85 .blog-diagram img{display:block;width:100%;height:auto;border-radius:8px}#text85 .blog-diagram figcaption{margin-top:.7em;font-size:.75em;opacity:.8;text-align:center}';
  document.head.appendChild(diagramStyle);
  const e = (e, t, n) => e.setAttribute(t, n), t = (e, t) => e.appendChild(t), n = e => document.createElement(e), o = () => document.querySelector('script[src*="/pk-blog-embed@"][data-owner][data-repo]');
  let r, i, a;
  function s(t = "Bilder, die du herunterladen darfst, findest du im Bereich „Downloads“.") {
    r || (r = n("div"), r.id = "blog-download-notice", e(r, "role", "status"), e(r, "aria-live", "polite"), 
    Object.assign(r.style, {
      position: "fixed",
      bottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
      left: "50%",
      transform: "translateX(-50%)",
      width: "max-content",
      maxWidth: "calc(100vw - 32px)",
      boxSizing: "border-box",
      padding: "14px 20px",
      borderRadius: "10px",
      backgroundColor: "#16465E",
      color: "#fff",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      fontFamily: "sans-serif",
      fontSize: "15px",
      lineHeight: "1.5",
      textAlign: "center",
      zIndex: "100001",
      pointerEvents: "none"
    }), document.body.appendChild(r)), r.hidden = !1, r.textContent = t, clearTimeout(i), 
    i = setTimeout((() => {
      r.hidden = !0, r.textContent = "";
    }), 5e3);
  }
  function c(e) {
    if (!(e.target instanceof Element)) return;
    const image = e.target.closest("#text85 img,#photo-zoom img,#blog-section img,#gallery-section img,#gallery04 img");
    const thumbnail = e.target.closest("#blog-section a.thumbnail,#gallery-section a.thumbnail,#gallery04 a.thumbnail");
    const modalImage = e.target.closest(".gallery-component-modal img");
    const protectedModal = modalImage && [...document.querySelectorAll("#gallery-section a.thumbnail[href],#blog-section a.thumbnail[href]")]
      .some(link => link.href === modalImage.src);
    if (!image && !thumbnail?.querySelector("img") && !protectedModal) return;
    e.preventDefault();
    s();
  }
  function l() {
    !function() {
      const e = document.querySelector("#gallery04 ul");
      function t() {
        for (const t of e.children) {
          const e = t.querySelector("a[href]");
          if (!e || !new URL(e.href, location.href).searchParams.has("slug")) continue;
          const n = t.querySelector("img");
          if (!n || !/^https?:\/\//i.test(n.getAttribute("src") || "")) continue;
          n.removeAttribute("data-src"), n.removeAttribute("data-srcset"), n.removeAttribute("srcset"), 
          n.removeAttribute("sizes"), n.style.opacity = "1", n.style.removeProperty("transition-property"), 
          n.style.removeProperty("transition-timing-function"), n.style.removeProperty("transition-duration");
          const o = n.closest(".frame");
          o && (o.classList.remove("deferred", "loading"), o.style.backgroundImage = "none");
        }
      }
      e && (new MutationObserver(t).observe(e, {
        childList: !0
      }), t());
    }(), function() {
      const e = o(), t = document.getElementById(e?.dataset.date || "text84"), r = new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "UTC"
      });
      function i(e) {
        if ("string" != typeof e || !/^\d{4}-\d{2}-\d{2}$/.test(e)) return !1;
        const t = new Date(`${e}T00:00:00Z`);
        return !Number.isNaN(t.getTime()) && t.toISOString().slice(0, 10) === e;
      }
      function a() {
        const e = window.carrdBlog?.posts;
        if (!Array.isArray(e)) return;
        const o = new Map(e.map((e => [ e.slug, e ]))), a = new URL(location.href).searchParams.get("slug"), s = o.get(a), c = t?.querySelector(".blog-author"), l = s && function(e) {
          if (!i(e.published_date) || !i(e.date)) return "";
          let t = `Veröffentlicht am ${r.format(new Date(`${e.published_date}T00:00:00Z`))}`;
          return e.date > e.published_date && (t += ` · Aktualisiert am ${r.format(new Date(`${e.date}T00:00:00Z`))}`), 
          t;
        }(s);
        if (!c || !l) return;
        let d = t.querySelector(".blog-dates");
        if (!d) {
          d = n("span"), d.className = "blog-dates";
          for (const e of [ ...t.childNodes ]) e.nodeType === Node.TEXT_NODE && e.remove();
          t.insertBefore(d, c), t.style.flexWrap = "wrap";
        }
        d.textContent !== l && (d.textContent = l);
      }
      const s = new MutationObserver(a);
      t && s.observe(t, {
        childList: !0
      }), a();
    }(), function() {
      const e = o(), t = document.getElementById(e?.dataset.content || "text85");
      if (!t) return;
      const r = n("style");
      function i() {
        for (const e of t.querySelectorAll("spoiler-text")) {
          const t = n("details");
          t.className = "bs";
          const o = n("summary");
          o.textContent = "Spoiler anzeigen";
          const r = n("span");
          r.className = "bsc", r.append(...e.childNodes), t.append(o, r), t.addEventListener("toggle", (() => {
            const e = t.open ? "Spoiler verbergen" : "Spoiler anzeigen";
            o.textContent !== e && (o.textContent = e);
          })), e.replaceWith(t);
        }
      }
      r.textContent = `#${CSS.escape(t.id)}\n\n.bs{ display:inline-block;max-width:100%;vertical-align:top;color:inherit;}\n\n#${CSS.escape(t.id)}\n\n.bs > summary{ display:list-item;list-style-position:inside;cursor:pointer;padding:2px 10px;border-radius:6px;background:#16465E;color:#fff;}\n\n#${CSS.escape(t.id)}\n\n.bs > summary:focus-visible{ outline:2px solid #66ccff;outline-offset:3px;}\n\n#${CSS.escape(t.id)}\n\n.bsc{ display:block;padding:6px 0;color:inherit;}\n`, 
      document.head.appendChild(r), new MutationObserver(i).observe(t, {
        childList: !0,
        subtree: !0
      }), i();
    }(), function() {
      const r = o(), i = document.getElementById(r?.dataset.content || "text85");
      if (!r || !i) return;
      const a = `#${CSS.escape(i.id)} .brc`, s = n("style");
      let c;
      s.textContent = `${a}\n{ min-width:0;max-width:100%;}\n\n${a}\n\n.bts{ max-width:100%;overflow-x:auto;margin:1em 0;border:1px solid #667780;border-radius:12px;}\n\n${a}\n\n.bts:focus-visible{ outline:2px solid #66ccff;}\n\n${a}\n\ntable{ border-collapse:collapse;width:100%;font:inherit;color:inherit;}\n\n${a}\n\nth, ${a}\n\ntd{ padding:0.65em 0.9em;border:1px solid #667780;text-align:left;vertical-align:top;min-width:7em;}\n\n${a}\n\nth{ background:#16465E;color:#fff;font-weight:700;}\n\n${a}\n\ntbody tr:nth-child(even){ background:rgba(127,127,127,0.12);}\n\n${a}\n\n.bc{ margin:1em 0;overflow:hidden;border-radius:12px;background:#151b20;color:#e8eef2;}\n\n${a}\n\n.bcl{ padding:0.4em 1em;background:#16465E;color:#fff;font-size:0.85em;}\n\n${a}\n\npre{ margin:0;padding:1em;overflow-x:auto;white-space:pre;font:inherit;line-height:1.5;text-align:left;}\n\n${a}\n\npre code{ padding:0;background:none;color:inherit;font-family:monospace;white-space:pre;}\n\n${a}\n\nhr{ border:0;border-top:1px solid #667780;margin:1.5em 0;}\n\n${a}\n\nblockquote{ margin:1em 0;padding:0.6em 1em;border-left:4px solid #66ccff;background:rgba(127,127,127,0.1);color:inherit;text-align:left;}\n\n${a}\n\n.btl{ list-style:none;margin:1em 0;padding:0;}\n\n${a}\n\n.btl li{ display:flex;gap:0.6em;align-items:flex-start;margin:0.35em 0;}\n\n${a}\n\n.btl input{ appearance:none;display:inline-grid;place-content:center;position:static;opacity:1;flex:0 0 auto;width:1.2em;height:1.2em;margin:0.15em 0 0;border:2px solid #fff;border-radius:3px;background:#fff;}\n`, 
      s.textContent += `${a}\n\n.btl input:checked{ background:#16465E;border-color:#66ccff;}\n\n${a}\n\n.btl input:checked::after{ content:'✓';color:#fff;font:bold 1em/1 sans-serif;}\n\n${a}\n\n.bfn{ margin-top:2em;padding-top:1em;border-top:1px solid #667780;font-size:0.9em;}\n\n${a}\n\n.bfn ol{ padding-left:1.5em;}\n\n${a}\n\n.bfn li{ margin:0.6em 0;}\n\n${a}\n\n.bfr a{ color:#66ccff;text-decoration:underline;}\n\n${a}\n\n[data-bn]{ cursor:pointer;}\n`, 
      document.head.appendChild(s);
      const l = new Map;
      let d = 0;
      function p(e) {
        const t = [];
        let n = "", o = 0;
        const r = e.trim().replace(/^\|/, "").replace(/(?<!\\)\|$/, "");
        for (let e = 0; e < r.length; e++) if ("\\" === r[e] && "|" === r[e + 1]) n += "|", 
        e++; else if ("`" === r[e]) {
          const t = r.slice(e).match(/^`+/)[0];
          o ? o === t.length && (o = 0) : o = t.length, n += t, e += t.length - 1;
        } else "|" !== r[e] || o ? n += r[e] : (t.push(n.trim()), n = "");
        return t.push(n.trim()), t;
      }
      function u(o, r, i = 0) {
        const a = document.createDocumentFragment(), s = o.replace(/\r\n?/g, "\n").split("\n");
        let c = [];
        function l() {
          if (!c.length) return;
          const o = n("div");
          o.className = "bp", o.innerHTML = r(c.join("\n"));
          for (const t of o.querySelectorAll("img")) {
            t.tabIndex = 0, e(t, "role", "button"), e(t, "aria-haspopup", "dialog");
            let o = t.nextSibling;
            for (;o && ("BR" === o.nodeName || 3 === o.nodeType && !o.textContent.trim()); ) o = o.nextSibling;
            if ("STRONG" !== o?.nodeName || "Brennweite:" !== o.textContent) continue;
            for (;t.nextSibling !== o; ) t.nextSibling.remove();
            const r = n("figure"), i = n("figcaption");
            for (r.style.cssText = "max-width:100%;margin:1em auto;width:" + (t.style.width || "100%"), 
            i.style.cssText = "font-size:.72em;line-height:1.5;opacity:.8;text-align:left;margin-top:.5em", 
            t.before(r), r.append(t, i), t.style.width = "100%"; o; ) {
              let e = o.nextSibling;
              if ("BR" === o.nodeName) {
                let t = e;
                for (;3 === t?.nodeType && !t.textContent.trim(); ) t = t.nextSibling;
                if ("STRONG" !== t?.nodeName || !/^(Kamera|Standort|Beispielstandort):$/.test(t.textContent)) break;
              }
              i.append(o), o = e;
            }
          }
          t(a, o), c = [];
        }
        for (let m = 0; m < s.length; ) {
          const f = s[m].match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
          if (f) {
            l();
            const g = [];
            for (m++; m < s.length; ) {
              const $ = s[m].match(/^ {0,3}(`+|~+)\s*$/);
              if ($ && $[1][0] === f[1][0] && $[1].length >= f[1].length) {
                m++;
                break;
              }
              g.push(s[m++]);
            }
            const x = n("div");
            x.className = "bc";
            const y = f[2].trim();
            if (y) {
              const k = n("div");
              k.className = "bcl", k.textContent = y, t(x, k);
            }
            const w = n("pre");
            w.tabIndex = 0;
            const v = n("code");
            v.textContent = g.join("\n"), t(w, v), t(x, w), t(a, x);
            continue;
          }
          const h = p(s[m]), b = m + 1 < s.length ? p(s[m + 1]) : [];
          if (s[m].includes("|") && h.length === b.length && b.every((e => /^:?-{3,}:?$/.test(e)))) {
            l();
            const C = n("div");
            C.className = "bts", C.tabIndex = 0, e(C, "role", "region"), e(C, "aria-label", "Tabelle, bei Bedarf horizontal scrollbar");
            const S = n("table"), E = n("thead"), T = n("tbody");
            function d(e, o, i) {
              const a = n("tr");
              h.forEach(((o, s) => {
                const c = n(i);
                "th" === i && (c.scope = "col");
                const l = b[s];
                c.style.textAlign = l.startsWith(":") && l.endsWith(":") ? "center" : l.endsWith(":") ? "right" : "left", 
                c.innerHTML = r(e[s] || ""), t(a, c);
              })), t(o, a);
            }
            for (d(h, E, "th"), m += 2; m < s.length && s[m].trim() && s[m].includes("|") && !/^ {0,3}(#{1,6}\s|>|`{3,}|~{3,})/.test(s[m]); ) d(p(s[m++]), T, "td");
            S.append(E, T), t(C, S), t(a, C);
          } else if (/^ {0,3}>/.test(s[m]) && i < 10) {
            l();
            const L = [];
            for (;m < s.length && /^ {0,3}>/.test(s[m]); ) L.push(s[m++].replace(/^ {0,3}> ?/, ""));
            const N = n("blockquote");
            t(N, u(L.join("\n"), r, i + 1)), t(a, N);
          } else if (/^\s*[-+*]\s+\[[ xX]\]\s+/.test(s[m])) {
            l();
            const z = n("ul");
            let I;
            for (z.className = "btl"; m < s.length && (I = s[m].match(/^\s*[-+*]\s+\[([ xX])\]\s+(.*)$/)); ) {
              const R = n("li"), A = n("input");
              A.type = "checkbox", A.checked = "x" === I[1].toLowerCase(), A.disabled = !0, e(A, "aria-label", I[2]);
              const B = n("span");
              B.innerHTML = r(I[2]), R.append(A, B), t(z, R), m++;
            }
            t(a, z);
          } else /^ {0,3}(?:(?:-\s*){3,}|(?:\*\s*){3,}|(?:_\s*){3,})$/.test(s[m]) ? (l(), 
          t(a, n("hr")), m++) : c.push(s[m++]);
        }
        return l(), a;
      }
      async function m() {
        if (1 === i.children.length && i.firstElementChild.classList.contains("brc")) return;
        const o = ++d, a = new URL(location.href).searchParams.get("slug"), s = window.carrdBlog?.posts?.find((e => e.slug === a));
        if (!s || !s.path || !s.sha) return;
        const p = r.dataset.branch || "main", m = `https://raw.githubusercontent.com/${encodeURIComponent(r.dataset.owner)}/${encodeURIComponent(r.dataset.repo)}/${encodeURIComponent(p)}/${s.path.split("/").map(encodeURIComponent).join("/")}?v=${encodeURIComponent(s.sha)}`;
        try {
          c || (c = import(new URL("./markdown.js", r.src).href).catch((e => {
            throw c = null, e;
          }))), l.has(m) || l.set(m, fetch(m, {
            cache: "no-cache"
          }).then((e => {
            if (!e.ok) throw new Error(`HTTP ${e.status}`);
            return e.text();
          })).catch((e => {
            throw l.delete(m), e;
          })));
          const [s, p] = await Promise.all([ c, l.get(m) ]);
          if (o !== d || new URL(location.href).searchParams.get("slug") !== a) return;
          const f = p.replace(/^\uFEFF/, "").replace(/^\s*---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/, ""), h = n("div");
          h.className = "brc";
          const b = function(e) {
            const t = new Map, n = e.split("\n");
            let o = null;
            for (let e = 0; e < n.length; e++) {
              const r = n[e].match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
              if (r) {
                o ? r[1][0] === o[0] && r[1].length >= o.length && !r[2].trim() && (o = null) : o = r[1];
                continue;
              }
              if (o) continue;
              const i = n[e].match(/^ {0,3}\[\^([^\]\s]+)\]:[ \t]*(.*)$/);
              if (!i) continue;
              const a = [ i[2] ];
              for (n[e] = ""; e + 1 < n.length && /^(?: {4}|\t)/.test(n[e + 1]); ) a.push(n[++e].replace(/^(?: {4}|\t)/, "")), 
              n[e] = "";
              t.has(i[1]) || t.set(i[1], a.join("\n"));
            }
            return {
              markdown: n.join("\n"),
              definitions: t
            };
          }(f.replace(/\r\n?/g, "\n")), g = [], x = e => s.markdownToHtml(e.replace(/(`+)[\s\S]*?\1|\[\^([^\]\s]+)\]/g, ((e, t, n) => t || !b.definitions.has(n) ? e : (g.push(n), 
          `${g.length - 1}`))));
          t(h, u(b.markdown, x)), function(o, r, i, a, s) {
            const c = new Map, l = `blog-note-${encodeURIComponent(a)}-`, d = document.createTreeWalker(o, NodeFilter.SHOW_TEXT), p = [];
            for (;d.nextNode(); ) {
              const e = d.currentNode;
              !e.parentElement.closest("pre, code, a") && /\uE000\d+\uE001/.test(e.textContent) && p.push(e);
            }
            for (const o of p) {
              const i = document.createDocumentFragment(), a = /\uE000(\d+)\uE001/g;
              let d, p = 0;
              for (;d = a.exec(o.textContent); ) {
                i.append(o.textContent.slice(p, d.index));
                const u = s[Number(d[1])];
                if (r.has(u)) {
                  c.has(u) || c.set(u, {
                    number: c.size + 1,
                    references: []
                  });
                  const o = c.get(u), r = `${l}ref-${o.number}-${o.references.length + 1}`;
                  o.references.push(r);
                  const a = n("sup");
                  a.className = "bfr";
                  const s = n("a");
                  s.id = r, s.href = new URL(`#${l}${o.number}`, location.href).href, s.dataset.bn = `${l}${o.number}`, 
                  e(s, "role", "doc-noteref"), e(s, "aria-label", `Fußnote ${o.number}`), s.textContent = o.number, 
                  t(a, s), t(i, a);
                } else i.append(d[0]);
                p = a.lastIndex;
              }
              i.append(o.textContent.slice(p)), o.replaceWith(i);
            }
            if (!c.size) return;
            const u = n("section");
            u.className = "bfn", e(u, "role", "doc-endnotes"), e(u, "aria-label", "Fußnoten");
            const m = n("strong");
            m.textContent = "Fußnoten";
            const f = n("ol");
            for (const [o, a] of c) {
              const s = n("li");
              s.id = `${l}${a.number}`, s.tabIndex = -1;
              const c = n("span");
              c.innerHTML = i(r.get(o)), t(s, c), a.references.forEach(((t, o) => {
                const r = n("a");
                r.href = new URL(`#${t}`, location.href).href, r.dataset.bn = t, e(r, "aria-label", `Zurück zu Fußnotenverweis ${a.number}, Stelle ${o + 1}`), 
                r.textContent = " ↩", s.append(" ", r);
              })), t(f, s);
            }
            u.append(m, f), t(o, u);
          }(h, b.definitions, s.markdownToHtml, a, g), i.replaceChildren(h);
          renderDiagrams(h);
        } catch (e) {
          console.warn("Carrd Blog: Zusatzformatierung konnte nicht geladen werden.", e);
        }
      }
      i.addEventListener("click", (e => {
        const t = e.target instanceof Element && e.target.closest("a[data-bn]");
        if (!t) return;
        const n = document.getElementById(t.dataset.bn);
        n && (e.preventDefault(), e.stopPropagation(), n.scrollIntoView({
          block: "center"
        }), n.focus({
          preventScroll: !0
        }));
      }), !0), new MutationObserver(m).observe(i, {
        childList: !0
      }), m();
    }(), function() {
      const t = o(), r = document.getElementById(t?.dataset.content || "text85");
      function i() {
        for (const t of r.querySelectorAll("a[onclick], a[data-cms-copy]")) {
          const n = (t.getAttribute("onclick") || "").match(/^_(?:copy|clipboard)\(event,\s*'([\s\S]*)'\);\s*return false;?$/);
          (n || t.hasAttribute("data-cms-copy")) && (t.dataset.bc = n ? n[1] : t.getAttribute("data-cms-copy"), 
          t.removeAttribute("onclick"), e(t, "role", "button"), t.tabIndex = 0, t.style.cursor = "pointer");
        }
      }
      async function a(e) {
        const t = e.target instanceof Element && e.target.closest("a[data-bc]");
        if (t && ("keydown" !== e.type || [ "Enter", " " ].includes(e.key))) {
          e.preventDefault(), e.stopPropagation();
          try {
            try {
              if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
              await navigator.clipboard.writeText(t.dataset.bc);
            } catch {
              !function(e) {
                const t = document.activeElement, o = n("textarea");
                o.value = e, o.readOnly = !0, Object.assign(o.style, {
                  position: "fixed",
                  top: "0",
                  left: "0",
                  opacity: "0",
                  userSelect: "text"
                }), document.body.appendChild(o), o.select(), o.setSelectionRange(0, e.length);
                try {
                  if (!document.execCommand("copy")) throw new Error("Clipboard unavailable");
                } finally {
                  o.remove(), t?.focus({
                    preventScroll: !0
                  });
                }
              }(t.dataset.bc);
            }
            s("Text in die Zwischenablage kopiert.");
          } catch {
            s("Kopieren wurde vom Browser blockiert. Bitte den Text manuell kopieren.");
          }
        }
      }
      r && (r.addEventListener("click", a, !0), r.addEventListener("keydown", a, !0), 
      new MutationObserver(i).observe(r, {
        childList: !0,
        subtree: !0
      }), i());
    }();
  }
  const d = n("style");
  function p(t) {
    if ("keydown" === t.type && ![ "Enter", " " ].includes(t.key)) return;
    const o = t.target instanceof Element && t.target.closest("#text85 img");
    if (!o) return;
    if (t.preventDefault(), t.stopPropagation(), !a) {
      a = n("dialog"), a.id = "photo-zoom", e(a, "aria-label", "Fotoansicht"), a.style.cssText = "width:95vw;height:95vh;box-sizing:border-box;padding:12px;border:0;border-radius:12px;background:#151b20;color:white;overflow:auto";
      const t = n("button"), o = n("img");
      t.textContent = "Schließen", t.style.cssText = "position:sticky;top:0;display:block;margin:0 0 12px auto;background:#16465E;color:white;padding:8px;border:0;cursor:pointer", 
      t.onclick = () => a.close(), o.draggable = !1, o.style.cssText = "display:block;margin:auto", 
      o.onclick = () => {
        const e = "none" !== o.style.maxWidth;
        o.style.maxWidth = e ? "none" : "100%", o.style.maxHeight = e ? "none" : "calc(95vh - 80px)", 
        o.style.cursor = e ? "zoom-out" : "zoom-in";
      }, a.onclick = e => {
        e.target === a && a.close();
      }, a.append(t, o), document.body.appendChild(a);
    }
    const r = a.querySelector("img");
    r.src = o.currentSrc || o.src, r.alt = o.alt, r.style.maxWidth = "100%", r.style.maxHeight = "calc(95vh - 80px)", 
    r.style.cursor = "zoom-in", a.open || a.showModal(), a.scrollTo(0, 0);
  }
  d.textContent = "#text85 img{cursor:zoom-in}#photo-zoom::backdrop{background:#000c}", 
  document.head.appendChild(d), document.addEventListener("click", p, !0), document.addEventListener("keydown", p, !0), 
  document.addEventListener("contextmenu", c, !0), document.addEventListener("dragstart", c, !0), 
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", l, {
    once: !0
  }) : l();
})();
