(function (e) { function t(t) { for (var r, o, i = t[0], u = t[1], b = t[2], s = 0, d = []; s < i.length; s++)o = i[s], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0; for (r in u)Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]); l && l(t); while (d.length)d.shift()(); return c.push.apply(c, b || []), n(); } function n() { for (var e, t = 0; t < c.length; t++) { for (var n = c[t], r = !0, o = 1; o < n.length; o++) { const u = n[o]; a[u] !== 0 && (r = !1); }r && (c.splice(t--, 1), e = i(i.s = n[0])); } return e; } const r = {}; var a = { app: 0 }; var c = []; function o(e) { return `${i.p}js/${{ about: 'about' }[e] || e}.${{ about: 'e02e7bee' }[e]}.js`; } function i(t) { if (r[t]) return r[t].exports; const n = r[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports; }i.e = function (e) { const t = []; let n = a[e]; if (n !== 0) if (n)t.push(n[2]); else { const r = new Promise((((t, r) => { n = a[e] = [t, r]; }))); t.push(n[2] = r); let c; const u = document.createElement('script'); u.charset = 'utf-8', u.timeout = 120, i.nc && u.setAttribute('nonce', i.nc), u.src = o(e); const b = new Error(); c = function (t) { u.onerror = u.onload = null, clearTimeout(s); const n = a[e]; if (n !== 0) { if (n) { const r = t && (t.type === 'load' ? 'missing' : t.type); const c = t && t.target && t.target.src; b.message = `Loading chunk ${e} failed.\n(${r}: ${c})`, b.name = 'ChunkLoadError', b.type = r, b.request = c, n[1](b); }a[e] = void 0; } }; var s = setTimeout((() => { c({ type: 'timeout', target: u }); }), 12e4); u.onerror = u.onload = c, document.head.appendChild(u); } return Promise.all(t); }, i.m = e, i.c = r, i.d = function (e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, i.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, i.t = function (e, t) { if (1 & t && (e = i(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const n = Object.create(null); if (i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const r in e)i.d(n, r, ((t) => e[t]).bind(null, r)); return n; }, i.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return i.d(t, 'a', t), t; }, i.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, i.p = '/', i.oe = function (e) { throw console.error(e), e; }; let u = window.webpackJsonp = window.webpackJsonp || []; const b = u.push.bind(u); u.push = t, u = u.slice(); for (let s = 0; s < u.length; s++)t(u[s]); var l = b; c.push([0, 'chunk-vendors']), n(); }({
  0(e, t, n) { e.exports = n('56d7'); },
  '0669': function (e, t, n) {
    n('640b');
  },
  '1cf3': function (e, t, n) {},
  '1e71': function (e, t, n) {
    n('1cf3');
  },
  '3e61': function (e, t, n) {
    n('9c69');
  },
  '4a66': function (e, t, n) {},
  '4ff7': function (e, t, n) {
    n('85c3');
  },
  '56d7': function (e, t, n) {
    n.r(t); n('e260'), n('e6cf'), n('cca6'), n('a79d'); const r = n('7a23'); const a = Object(r.f)('div', { id: 'nav' }, null, -1); function c(e, t) { const n = Object(r.w)('router-view'); return Object(r.o)(), Object(r.d)(r.a, null, [a, Object(r.f)(n)], 64); }n('3e61'); const o = {}; o.render = c; const i = o; const u = (n('d3b7'), n('3ca3'), n('ddb0'), n('6c02')); const b = Object(r.E)('data-v-2339a80b'); Object(r.r)('data-v-2339a80b'); const s = { class: 'home' }; const l = { class: 'home-headers' }; const d = Object(r.f)('h1', null, 'Your Life in weeks', -1); const f = { class: 'date-container' }; const O = Object(r.f)('label', { class: 'date-label', for: 'date' }, ' Your BirthDate: ', -1); const j = Object(r.f)('button', { class: 'get-calendar-button' }, 'Get Calendar', -1); const p = { key: 0 }; const v = { key: 0, class: 'years' }; Object(r.p)(); let m; const h = b(((e, t, n, a, c, o) => {
      const i = Object(r.w)('Legend'); const u = Object(r.w)('Header'); const b = Object(r.w)('Year'); return Object(r.o)(), Object(r.d)('div', s, [Object(r.f)('div', l, [d, Object(r.f)('div', f, [O, Object(r.f)('span', null, [Object(r.D)(Object(r.f)('input', {
        type: 'date', name: 'date', id: 'date', min: c.minDate, max: c.maxDate, 'onUpdate:modelValue': t[1] || (t[1] = function (e) { return c.date = e; }), onFocus: t[2] || (t[2] = function (e) { return c.show = !1; }), onBlur: t[3] || (t[3] = function (e) { return c.show = !0; }),
      }, null, 40, ['min', 'max']), [[r.A, c.date]]), j])]), c.show ? (Object(r.o)(), Object(r.d)('h2', p, 'Legend')) : Object(r.e)('', !0)]), c.show ? (Object(r.o)(), Object(r.d)('div', v, [Object(r.f)(i), Object(r.f)(u), (Object(r.o)(!0), Object(r.d)(r.a, null, Object(r.u)(c.years, ((e, t) => (Object(r.o)(), Object(r.d)(b, { key: t, year: e, birthDate: o.birthDate }, null, 8, ['year', 'birthDate'])))), 128))])) : Object(r.e)('', !0)]);
    })); const w = n('ade3'); const y = (n('7db0'), n('d81d'), n('cb29'), n('b1d0')); const k = n('d148'); const g = 125; const D = 52; const C = '1994-02-09'; const S = new Date(C); const _ = new Date(0); const A = new Date('2100-02-09'); const L = Object(y.a)(new Date(), g).toISOString; const P = (new Date()).toISOString; const E = ['#00d0ff', '#49e9a6', '#e8ff00', '#ff9800', 'red', '#673ab7']; const M = (m = { 0: { name: 'Birth' } }, Object(w.a)(m, 3837, { name: 'Average Global Life Span' }), Object(w.a)(m, 2861, { name: 'Death of Hitler' }), Object(w.a)(m, 572, { name: 'First Decade' }), Object(w.a)(m, 1092, { name: 'Legal Age to Drink in USA' }), Object(w.a)(m, 936, { name: "You're and adult!" }), Object(w.a)(m, Math.round(53.1 * 52), { name: 'Average Life Span in Central African Republic' }), Object(w.a)(m, Math.round(84.3 * 52), { name: 'Average Life Span in Japan' }), Object(w.a)(m, Math.round(79.3 * 52), { name: 'Average Life Span in Colombia' }), Object(w.a)(m, Math.round(5252), { name: 'A Century' }), Object(w.a)(m, Object(k.a)(new Date('1687-07-05'), new Date('1643-01-04')), { name: 'Newton publish about gravity' }), Object(w.a)(m, Object(k.a)(new Date('2014-08-10'), new Date('1997-07-12')), { name: 'Youngest Nobel Peace Prize winner' }), Object(w.a)(m, Math.round(6344 + 164 / 365 * 52), { name: 'Oldest verified woman ever' }), Object(w.a)(m, Math.round(6032 + 54 / 365 * 52), { name: 'Oldest verified man ever' }), Object(w.a)(m, Object(k.a)(new Date('1905-09-26'), new Date('1879-03-14')), { name: 'Einstein publish about relativity' }), m); const W = [{ name: 'Early Years', from: 0, color: E[0] }, { name: 'Elementary School (USA)', from: 5, color: E[1] }, { name: 'Middle School (USA)', from: 11.5, color: E[2] }, { name: 'High School (USA)', from: 14.5, color: E[3] }, { name: 'College (USA)', from: 18.5, color: E[4] }, { name: 'Career', from: 21.5, color: E[5] }, { name: 'Retirement', from: 63, color: 'blue' }].reverse(); const Y = function (e, t, n) {
      return {
        week: n, year: t, tooltip: M[52 * t + n], phase: e.find(((e) => e.from <= t + n / D)),
      };
    }; const x = function (e, t) { return new Array(D).fill(!1).map(((n, r) => Y(e, t, r))); }; const I = function (e) { return function (t, n) { return { year: n, weeks: x(e, n) }; }; }; const T = function () { return new Array(g).fill(!1).map(I(W)); }; const H = Object(r.E)('data-v-48d6f0f8'); Object(r.r)('data-v-48d6f0f8'); const U = { class: 'year' }; Object(r.p)(); const B = H(((e, t, n, a, c, o) => {
      const i = Object(r.w)('Week'); return Object(r.o)(), Object(r.d)('div', U, [Object(r.f)('span', { class: [{ decade: !(n.year.year % 10) && n.year.year !== 0 }, 'number'] }, Object(r.y)(n.year.year), 3), (Object(r.o)(!0), Object(r.d)(r.a, null, Object(r.u)(n.year.weeks, ((e, t) => (Object(r.o)(), Object(r.d)(i, {
        class: 'week', birthDate: n.birthDate, key: t, week: e,
      }, null, 8, ['birthDate', 'week'])))), 128))]);
    })); const F = n('cdb6'); const J = n('1d9b'); const z = n('3245'); const G = (n('b0c0'), Object(r.E)('data-v-1c9697ee')); const N = G(((e, t, n, a, c, o) => { const i = Object(r.w)('Tooltip'); return Object(r.o)(), Object(r.d)('div', { class: ['week', { isCurrent: o.isCurrent }], style: { borderColor: o.borderColor, backgroundColor: o.backgroundColor } }, [n.week.tooltip ? (Object(r.o)(), Object(r.d)(i, { key: 0, class: 'week-tooltip', name: n.week.tooltip.name }, null, 8, ['name'])) : Object(r.e)('', !0)], 6); })); const R = n('af8b'); const q = n('dfe1'); const V = Object(r.E)('data-v-88618f40'); Object(r.r)('data-v-88618f40'); const $ = { class: 'tooltip-container' }; const K = { class: 'tooltip' }; Object(r.p)(); const Q = V(((e, t, n, a, c, o) => (Object(r.o)(), Object(r.d)('div', $, [Object(r.f)('div', K, Object(r.y)(n.name), 1)])))); const X = { props: { name: String } }; n('a577'); X.render = Q, X.__scopeId = 'data-v-88618f40'; const Z = X; const ee = {
      components: { Tooltip: Z },
      props: { week: { default() { return { week: 0, year: 0, phase: { color: 'black' } }; } }, birthDate: { default: S } },
      computed: {
        currentWeek() { return Object(F.a)(Object(R.a)(this.birthDate, this.week.week), this.week.year); }, isPast() { return Object(J.a)(this.currentWeek); }, isCurrent() { return Object(q.a)(this.currentWeek); }, backgroundColor() { let e; let t; return this.isPast ? (e = this.week) === null || void 0 === e || (t = e.phase) === null || void 0 === t ? void 0 : t.color : 'transparent'; }, borderColor() { let e; let t; return (e = this.week) === null || void 0 === e || (t = e.phase) === null || void 0 === t ? void 0 : t.color; },
      },
    }; n('87e0'); ee.render = N, ee.__scopeId = 'data-v-1c9697ee'; const te = ee; const ne = {
      components: { Week: te },
      props: { year: { default() { return { year: 0, weeks: [] }; } }, birthDate: { default: S } },
      computed: {
        currentWeek() { return Object(F.a)(this.week.year); }, isPast() { return Object(J.a)(this.currentWeek); }, isCurrent() { return Object(z.a)(this.currentWeek); }, optimizedDate() { return this.isCurrent ? this.birthDate : this.isPast ? _ : A; },
      },
    }; n('b828'); ne.render = B, ne.__scopeId = 'data-v-48d6f0f8'; const re = ne; const ae = Object(r.E)('data-v-ec379e76'); Object(r.r)('data-v-ec379e76'); const ce = { class: 'header' }; const oe = Object(r.f)('div', { class: 'year' }, [Object(r.f)('span', null, 'Year')], -1); const ie = { class: 'week' }; const ue = Object(r.f)('span', null, 'Week', -1); const be = { class: 'week-number-container' }; Object(r.p)(); const se = ae(((e, t, n, a, c, o) => (Object(r.o)(), Object(r.d)('div', ce, [oe, Object(r.f)('div', ie, [ue, Object(r.f)('div', be, [(Object(r.o)(), Object(r.d)(r.a, null, Object(r.u)(52, ((e) => Object(r.f)('div', { class: 'week-number', key: e }, Object(r.y)(e), 1))), 64))])])])))); const le = { props: { week: { default() { return { week: 0, year: 0, phase: { color: 'black' } }; } } } }; n('7c4c'); le.render = se, le.__scopeId = 'data-v-ec379e76'; const de = le; const fe = { class: 'legends' }; const Oe = { class: 'column' }; const je = { class: 'column' }; function pe(e, t, n, a, c, o) { const i = Object(r.w)('Week'); const u = Object(r.w)('Legend'); const b = Object(r.w)('Label'); return Object(r.o)(), Object(r.d)('div', fe, [Object(r.f)('div', Oe, [Object(r.f)(u, { description: 'Your past life' }, { default: Object(r.C)((() => [Object(r.f)(i, { week: { phase: { color: 'rgb(73, 233, 166)' }, week: 0, year: -10 }, birthDate: new Date(0) }, null, 8, ['week', 'birthDate'])])), _: 1 }), Object(r.f)(u, { description: 'Your future life' }, { default: Object(r.C)((() => [Object(r.f)(i, { week: { phase: { color: 'rgb(73, 233, 166)' } } }, null, 8, ['week'])])), _: 1 }), Object(r.f)(u, { description: 'Your Current week' }, { default: Object(r.C)((() => [Object(r.f)(i, { week: { phase: { color: 'rgb(73, 233, 166)' } }, class: 'isCurrent', style: { 'border-color': 'none !important' } }, null, 8, ['week'])])), _: 1 }), Object(r.f)(u, { description: 'Interesting Fact' }, { default: Object(r.C)((() => [Object(r.f)(b, { name: 'Label' })])), _: 1 })]), Object(r.f)('div', je, [(Object(r.o)(!0), Object(r.d)(r.a, null, Object(r.u)(c.phases, ((e, t) => (Object(r.o)(), Object(r.d)(u, { key: t, description: e.name }, { default: Object(r.C)((() => [Object(r.f)(i, { week: { phase: { color: e.color }, week: 0, year: -10 }, birthDate: new Date(0) }, null, 8, ['week', 'birthDate'])])), _: 2 }, 1032, ['description'])))), 128))])]); }n('a4d3'), n('e01a'); const ve = { class: 'legend' }; const me = { class: 'component' }; const he = { class: 'description' }; function we(e, t, n, a, c, o) { return Object(r.o)(), Object(r.d)('div', ve, [Object(r.f)('span', me, [Object(r.v)(e.$slots, 'default')]), Object(r.f)('span', he, Object(r.y)(n.description), 1)]); } const ye = { props: { name: String, description: String } }; n('0669'); ye.render = we; const ke = ye; const ge = { components: { Legend: ke, Week: te, Label: Z }, data() { return { phases: W.reverse() }; } }; n('4ff7'); ge.render = pe; const De = ge; const Ce = {
      name: 'Home',
      data() {
        return {
          date: C, years: T(), show: !0, minDate: L, maxDate: P,
        };
      },
      components: { Year: re, Header: de, Legend: De },
      computed: { birthDate() { return new Date(this.date); } },
      methods: { onDateChange() { const e = this; this.show = !1, setTimeout((() => { e.show = !0; }), 100); } },
    }; n('1e71'); Ce.render = h, Ce.__scopeId = 'data-v-2339a80b'; const Se = Ce; const _e = [{ path: '/', name: 'Home', component: Se }, { path: '/about', name: 'About', component() { return n.e('about').then(n.bind(null, 'f820')); } }]; const Ae = Object(u.a)({ history: Object(u.b)(), routes: _e }); const Le = Ae; const Pe = n('5502'); const Ee = Object(Pe.a)({
      state: {}, mutations: {}, actions: {}, modules: {},
    }); Object(r.c)(i).use(Ee).use(Le).mount('#app');
  },
  '640b': function (e, t, n) {},
  '7c4c': function (e, t, n) {
    n('4a66');
  },
  '85c3': function (e, t, n) {},
  '87e0': function (e, t, n) {
    n('e2a3');
  },
  '93b5': function (e, t, n) {},
  '9c69': function (e, t, n) {},
  a434(e, t, n) {},
  a577(e, t, n) {
    n('a434');
  },
  b828(e, t, n) {
    n('93b5');
  },
  e2a3(e, t, n) {},
}));
// # sourceMappingURL=app.3ef90af4.js.map
