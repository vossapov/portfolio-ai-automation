/* Anatomy figures (isometric SVG drawings built by next/ai/figures/<id>/build.mjs).
   window.VIAnatomy.mount(host, slug) puts the drawing for an audience into `host`.

   Two kinds, chosen in window.VI_AI.figures[slug]:
   - 'id'                      static: fetch embed-static.html, nothing moves;
   - { id: 'id', live: true }  live:   fetch embed.html once and run live.js once. On a re-render
                               (language switch) the same live node is moved into the new host,
                               so the figure's script keeps its references.

   Corner texts marked data-figure-text="fig|title|caption" are filled from
   window.VI_AI[lang].aud[slug].figure and re-filled when the page language changes. A live
   figure translates its own hint and readout. Missing files leave the host empty. */
(function () {
  'use strict';

  var BASE = '/portfolio-ai-automation/next/ai/figures/';
  var VERSION = 'anatomy-3';
  var COPY = window.VI_AI;
  var htmlCache = {};
  var liveNodes = {};
  var started = {};

  function lang() {
    var root = document.documentElement;
    var v = root.getAttribute('data-lang');
    if (v === 'ua' || v === 'en') return v;
    return /^uk/i.test(root.lang || '') ? 'ua' : 'en';
  }
  function spec(slug) {
    var f = COPY && COPY.figures && COPY.figures[slug];
    if (!f) return null;
    return typeof f === 'string' ? { id: f, live: false } : { id: f.id, live: !!f.live };
  }
  function texts(slug) {
    var t = COPY && COPY[lang()];
    var aud = t && t.aud && t.aud[slug];
    if (!t || !aud) return null;
    var f = aud.figure || {};
    return { fig: t.fig || '', title: f.title || '', caption: f.caption || '' };
  }
  function applyTexts(host, slug) {
    var t = texts(slug);
    if (!t) return;
    Array.prototype.forEach.call(host.querySelectorAll('[data-figure-text]'), function (el) {
      var v = t[el.getAttribute('data-figure-text')];
      if (v && el.textContent !== v) el.textContent = v;
    });
  }
  function fetchHtml(id, file) {
    var key = id + '/' + file;
    if (!htmlCache[key]) {
      htmlCache[key] = fetch(BASE + id + '/' + file + '?v=' + VERSION, { credentials: 'same-origin' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .catch(function () { return null; });
    }
    return htmlCache[key];
  }
  function shell(html) {
    var node = document.createElement('div');
    node.className = 'iso vh-anatomy';
    node.setAttribute('data-theme', 'light');
    node.innerHTML = html;
    return node;
  }
  function startLive(id) {
    if (started[id]) return;
    started[id] = true;
    var s = document.createElement('script');
    s.src = BASE + id + '/live.js?v=' + VERSION;
    s.async = true;
    document.body.appendChild(s);
  }
  function watchLanguage() {
    if (watchLanguage.on) return;
    watchLanguage.on = true;
    new MutationObserver(function () {
      Array.prototype.forEach.call(document.querySelectorAll('[data-anatomy-host]'), function (h) {
        applyTexts(h, h.getAttribute('data-anatomy-host'));
      });
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'data-lang'] });
  }

  window.VIAnatomy = {
    mount: function (host, slug) {
      var s = spec(slug);
      if (!host || !s || !s.id) return;
      host.setAttribute('data-anatomy-host', slug);
      watchLanguage();
      if (s.live) {
        fetchHtml(s.id, 'embed.html').then(function (html) {
          if (!html || !host.isConnected) return;   /* a newer render replaced this host */
          if (!liveNodes[s.id]) liveNodes[s.id] = shell(html);
          host.appendChild(liveNodes[s.id]);          /* moves it out of an old host, if any */
          applyTexts(host, slug);
          startLive(s.id);
        });
        return;
      }
      fetchHtml(s.id, 'embed-static.html').then(function (html) {
        if (!html || !host.isConnected) return;
        host.appendChild(shell(html));
        applyTexts(host, slug);
      });
    }
  };
})();
