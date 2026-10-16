/* Branch fork and the light AI-automation branch on / (the hero above is the dark main-site hero). All copy comes from
   window.VI_AI (next/ai/content.js); the design branch is untouched existing markup. */
(function () {
  'use strict';

  var doc = document, root = doc.documentElement;
  var COPY = window.VI_AI;
  var PICK_KEYS = ['p', 'q', 'cat', 'co', 'view', 'y'];
  var HASH_RE = /^#(work|contact|ai-work|year-\d+)$/;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var state = { branch: null };
  var lastLang = null;
  var aiRevealed = false;
  var designShown = false;

  /* ───────── helpers ───────── */
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }
  function h(tag, cls, attrs) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function svgEl(d, box) {
    var ns = 'http://www.w3.org/2000/svg';
    var s = doc.createElementNS(ns, 'svg');
    s.setAttribute('viewBox', '0 0 ' + box + ' ' + box);
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('focusable', 'false');
    var p = doc.createElementNS(ns, 'path');
    p.setAttribute('d', d);
    s.appendChild(p);
    return s;
  }
  function arrowRight() { return svgEl('M2.5 8h10M8.7 4.2 12.5 8l-3.8 3.8', 16); }
  function setText(n, s) { if (s && n.textContent !== s) n.textContent = s; }

  function lang() {
    var l = root.getAttribute('data-lang');
    if (l === 'en' || l === 'ua') return l;
    return /^uk/i.test(root.lang) ? 'ua' : 'en';
  }
  function T() { return COPY ? (COPY[lang()] || COPY.en) : null; }
  function byPath(key) {
    var t = T();
    if (!t || !key) return null;
    var cur = t, parts = key.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (cur === null || typeof cur !== 'object' || cur[parts[i]] === undefined) return null;
      cur = cur[parts[i]];
    }
    return typeof cur === 'string' ? cur : null;
  }
  function params() { return new URLSearchParams(window.location.search); }
  function pickParam(search, key) {
    try { return new URLSearchParams(search).get(key); } catch (e) { return null; }
  }
  /* app.js rewrites the address bar from its own state on load — it drops every param it does not
     own (?p=, ?q=, ?art=…) and, depending on which task runs first, it may already have done so
     before we run. The navigation entry keeps the URL the visitor actually opened; use it for the
     initial decision only (later navigations must read the live URL). */
  function openedUrl() {
    try {
      var nav = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType('navigation');
      if (nav && nav[0] && nav[0].name) return nav[0].name;
    } catch (e) { /* ignore */ }
    return window.location.href;
  }
  function searchOf(url) {
    var q = url.split('#')[0].split('?')[1];
    return q ? '?' + q : '';
  }
  function hashOf(url) {
    var i = url.indexOf('#');
    return i > -1 ? url.slice(i) : '';
  }
  function artUrl(path, size) { return path + (size === 480 ? '-480.webp' : '.webp'); }
  function imgEl(path, size, alt, priority) {
    var im = doc.createElement('img');
    im.setAttribute('src', artUrl(path, size));
    im.setAttribute('width', String(size));
    im.setAttribute('height', String(size));
    im.setAttribute('alt', alt || '');
    if (priority) im.setAttribute('fetchpriority', 'high');
    else { im.setAttribute('loading', 'lazy'); im.setAttribute('decoding', 'async'); }
    im.addEventListener('error', function () { im.hidden = true; });
    return im;
  }
  function pageUrl(slug) { return '/portfolio-ai-automation/ai/' + slug + '/' + (lang() === 'ua' ? '?lang=ua' : ''); }

  /* ───────── URL ↔ branch ───────── */
  function branchFrom(search, hash) {
    var v = pickParam(search, 'b');
    if (v === 'design' || v === 'ai') return v;
    for (var i = 0; i < PICK_KEYS.length; i++) { if (pickParam(search, PICK_KEYS[i])) return 'design'; }
    return HASH_RE.test(hash) ? 'design' : null;
  }
  function writeUrl(branch, mode) {
    var u = params();
    if (branch) u.set('b', branch); else u.delete('b');
    var qs = u.toString();
    var next = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
    if (next === window.location.pathname + window.location.search + window.location.hash) return;
    try { window.history[mode](null, '', next); } catch (e) { /* sandboxed */ }
  }

  /* ───────── branch visibility ───────── */
  function branchStart(branch) {
    if (branch === 'design') return doc.getElementById('work') || doc.getElementById('branch-design');
    return doc.getElementById('vhForWhom') || doc.getElementById('branch-ai');
  }
  function setBranch(branch, opts) {
    opts = opts || {};
    state.branch = branch;
    var design = doc.getElementById('branch-design');
    var ai = doc.getElementById('branch-ai');
    if (design) design.hidden = branch !== 'design';
    if (ai) ai.hidden = branch !== 'ai';
    /* the page frame (header, hero, fork, footer) is always dark; only #branch-ai is light */
    if (doc.body) {
      doc.body.classList.remove('vh-light');
      doc.body.classList.add('vh-dark');
    }
    $$('[data-branch-pick]').forEach(function (c) {
      c.setAttribute('aria-pressed', String(c.getAttribute('data-branch-pick') === branch));
    });
    syncTitle();
    if (branch === 'design' && !designShown) {
      designShown = true;
      /* the atlas laid out while hidden — let it measure again */
      window.dispatchEvent(new Event('resize'));
      requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
    }
    if (branch === 'ai' && opts.animate !== false) revealAi();
  }
  function revealAi() {
    var ai = doc.getElementById('branch-ai');
    if (!ai || aiRevealed || reduce) return;
    aiRevealed = true;
    ai.classList.add('vh-anim');
    setTimeout(function () { ai.classList.remove('vh-anim'); }, 1600);
  }
  function focusBranch(branch) {
    var el = branchStart(branch);
    if (!el) return;
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    try { el.focus({ preventScroll: true }); } catch (e) { try { el.focus(); } catch (e2) { /* ignore */ } }
    requestAnimationFrame(function () {
      try { el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
      catch (e) { el.scrollIntoView(); }
    });
  }

  /* ───────── AI branch markup ───────── */
  function renderAi() {
    var box = doc.getElementById('branch-ai');
    var t = T();
    if (!box || !t || !COPY.art) return;
    var A = COPY.art, C = COPY.contacts || {};
    var AUD = COPY.audiences || [];

    /* keep focus if the visitor is switching language while tabbed into the branch */
    var active = doc.activeElement, key = null;
    if (active && box.contains(active)) key = active.id || active.getAttribute('data-key');

    box.innerHTML = '';

    var forSec = h('section', 'vh-for', { 'aria-labelledby': 'vhForWhom' });
    var forWrap = h('div', 'vh-wrap');
    var forHead = h('h2', null, { id: 'vhForWhom', tabindex: '-1' });
    setText(forHead, t.forWhom);
    forWrap.appendChild(forHead);
    var grid = h('div', 'vh-for-grid');
    AUD.forEach(function (slug) {
      var aud = t.aud && t.aud[slug];
      if (!aud) return;
      var a = h('a', 'vh-for-btn', { href: '#aud-' + slug, 'data-key': 'for:' + slug });
      var label = h('span', 'vh-for-label');
      setText(label, aud.btn);
      a.appendChild(label);
      grid.appendChild(a);
    });
    forWrap.appendChild(grid);
    forSec.appendChild(forWrap);
    box.appendChild(forSec);

    AUD.forEach(function (slug) {
      var aud = t.aud && t.aud[slug];
      if (!aud) return;
      var sec = h('section', 'vh-aud vh-aud--' + slug, { id: 'aud-' + slug, 'aria-labelledby': 'aud-' + slug + '-title' });
      var wrap = h('div', 'vh-wrap vh-aud-grid');
      var figId = COPY.figures && COPY.figures[slug];
      var fig = h('figure', 'vh-aud-art' + (figId && window.VIAnatomy ? ' vh-aud-art--figure' : ''));
      if (figId && window.VIAnatomy) window.VIAnatomy.mount(fig, slug);
      wrap.appendChild(fig);
      var copy = h('div', 'vh-aud-copy');
      var h3 = h('h3', null, { id: 'aud-' + slug + '-title', tabindex: '-1' });
      setText(h3, aud.title);
      copy.appendChild(h3);
      var lead = h('p', 'vh-aud-lead');
      setText(lead, aud.lead || aud.line);
      copy.appendChild(lead);
      if (aud.bullets && aud.bullets.length) {
        var ul = h('ul', 'vh-points');
        aud.bullets.forEach(function (point) {
          var li = h('li');
          setText(li, point);
          ul.appendChild(li);
        });
        copy.appendChild(ul);
      }
      var pill = h('a', 'vh-pill', { href: pageUrl(slug), 'data-key': 'pill:' + slug });
      var plabel = h('span');
      setText(plabel, t.how);
      pill.appendChild(plabel);
      pill.appendChild(arrowRight());
      copy.appendChild(pill);
      wrap.appendChild(copy);
      sec.appendChild(wrap);
      box.appendChild(sec);
    });

    var c = t.contact;
    if (c) {
      var csec = h('section', 'vh-contact', { id: 'ai-contact', 'aria-labelledby': 'vhContactTitle' });
      var cwrap = h('div', 'vh-wrap vh-contact-plain');
      var cc = h('div', 'vh-contact-copy');
      var ch = h('h2', null, { id: 'vhContactTitle', tabindex: '-1' });
      setText(ch, c.title);
      cc.appendChild(ch);
      if (C.telegram) {
        var cta = h('a', 'vh-pill vh-pill--primary', { href: C.telegram, target: '_blank', rel: 'noopener', 'data-key': 'contact:cta' });
        var ctal = h('span');
        setText(ctal, c.cta);
        cta.appendChild(ctal);
        cta.appendChild(arrowRight());
        cc.appendChild(cta);
      }
      var quiet = h('p', 'vh-quiet');
      if (C.email) {
        var em = h('a', null, { href: C.email, 'data-key': 'contact:email' });
        setText(em, c.email);
        quiet.appendChild(em);
      }
      if (C.linkedin) {
        var ln = h('a', null, { href: C.linkedin, target: '_blank', rel: 'noopener', 'data-key': 'contact:linkedin' });
        setText(ln, 'LinkedIn');
        quiet.appendChild(ln);
      }
      cc.appendChild(quiet);
      cwrap.appendChild(cc);
      csec.appendChild(cwrap);
      box.appendChild(csec);
    }

    if (key) {
      var again = doc.getElementById(key) || box.querySelector('[data-key="' + key + '"]');
      if (again) { try { again.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
    }
  }

  /* ───────── shared light copy ───────── */
  function fillStatic() {
    $$('[data-ai]').forEach(function (el) {
      var v = byPath(el.getAttribute('data-ai'));
      if (v) setText(el, v);
    });
    $$('[data-ai-alt]').forEach(function (el) {
      var v = byPath(el.getAttribute('data-ai-alt'));
      if (v) el.setAttribute('alt', v);
    });
  }
  function syncIntroArt() {
    var im = doc.getElementById('vhIntroArt');
    if (!im || !COPY.art) return;
    var path = pickParam(searchOf(openedUrl()), 'art') === 'abstract' ? COPY.art.introAbstract : COPY.art.introMe;
    if (path && im.getAttribute('src') !== artUrl(path, 960)) im.setAttribute('src', artUrl(path, 960));
  }
  function syncBrand() {
    var brand = $('.brand');
    if (brand) brand.setAttribute('href', lang() === 'ua' ? '/portfolio-ai-automation/?lang=ua' : '/portfolio-ai-automation/');
  }
  function syncTitle() {
    if (state.branch === 'design') return; /* the design branch keeps app.js's title */
    var t = T();
    if (t && t.pageTitle) doc.title = t.pageTitle;
  }

  /* ───────── wiring ───────── */
  function init() {
    var box = doc.getElementById('branch-ai');
    if (!box || !doc.body || !COPY) return false;

    var opened = openedUrl();
    state.branch = branchFrom(searchOf(opened) || window.location.search, hashOf(opened) || window.location.hash);
    renderAi();
    setBranch(state.branch, { animate: false });
    fillStatic();
    syncIntroArt();
    syncBrand();
    syncTitle();

    doc.addEventListener('click', function (e) {
      var t = e.target;
      var pick = t && t.closest ? t.closest('[data-branch-pick]') : null;
      if (!pick) return;
      var branch = pick.getAttribute('data-branch-pick');
      if (branch !== 'design' && branch !== 'ai') return;
      e.preventDefault();
      writeUrl(branch, 'pushState');
      setBranch(branch);
      focusBranch(branch);
    });

    window.addEventListener('popstate', function () {
      setBranch(branchFrom(window.location.search, window.location.hash), { animate: false });
    });

    /* a branch opened from the URL was hidden when the browser tried to jump to its hash */
    var designBox = doc.getElementById('branch-design');
    var bootHash = hashOf(opened) || window.location.hash;
    if (state.branch && bootHash.length > 1) {
      var target = doc.getElementById(bootHash.slice(1));
      if (target && ((designBox && designBox.contains(target)) || box.contains(target))) {
        requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
      }
    }
    if (state.branch === 'ai') revealAi();

    lastLang = lang();
    new MutationObserver(function () {
      var l = lang();
      if (l === lastLang) return;
      lastLang = l;
      renderAi();
      fillStatic();
      syncIntroArt();
      syncBrand();
      syncTitle();
    }).observe(root, { attributes: true, attributeFilter: ['lang', 'data-lang'] });

    return true;
  }

  if (!init() && doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', function () { init(); });
})();
