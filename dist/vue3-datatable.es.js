var zr = Object.defineProperty;
var Wr = (e, a, t) => a in e ? zr(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t;
var ce = (e, a, t) => Wr(e, typeof a != "symbol" ? a + "" : a, t);
import { computed as K, openBlock as y, createElementBlock as D, createElementVNode as re, normalizeClass as ge, toDisplayString as Pe, createCommentVNode as H, reactive as _a, ref as Z, defineComponent as Qe, useSlots as Ut, toRef as ya, onMounted as Ze, nextTick as pt, onUnmounted as Ra, watch as ot, createVNode as st, mergeProps as je, unref as m, isRef as Sn, createSlots as Je, renderList as $e, withCtx as _e, renderSlot as se, normalizeProps as Re, guardReactiveProps as Ie, createBlock as xe, resolveDynamicComponent as zt, Teleport as jr, Transition as Kt, normalizeStyle as mt, Fragment as be, withModifiers as Ot, h as Ur, render as Cn, createTextVNode as at, onBeforeUpdate as Kr, withDirectives as dt, vShow as ta, withKeys as Qr, getCurrentScope as Gr, onScopeDispose as Xr, resolveDirective as Jr, toHandlers as Zr, resolveComponent as Rn, vModelCheckbox as el, vModelText as Ua, vModelDynamic as tl, vModelSelect as al } from "vue";
const nl = {
  key: 0,
  class: "flex flex-col justify-center items-center w-full h-96"
}, rl = {
  key: 0,
  class: "mt-2 text-lg"
}, ll = {
  __name: "SpinnerIndicator",
  props: {
    isLoading: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "loading-lg"
    },
    color: {
      type: String,
      default: "text-primary"
    },
    loadingText: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const a = e, t = K(() => `loading loading-dots ${a.size} ${a.color}`);
    return (n, r) => e.isLoading ? (y(), D("div", nl, [
      re("span", {
        class: ge(t.value)
      }, null, 2),
      e.loadingText ? (y(), D("span", rl, Pe(e.loadingText), 1)) : H("", !0)
    ])) : H("", !0);
  }
};
function ve(e) {
  const a = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && a === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || a === "[object Number]" || typeof e == "string" || a === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ae(e, a) {
  return e instanceof Date ? new e.constructor(a) : new Date(a);
}
function ft(e, a) {
  const t = ve(e);
  return isNaN(a) ? Ae(e, NaN) : (a && t.setDate(t.getDate() + a), t);
}
function gt(e, a) {
  const t = ve(e);
  if (isNaN(a)) return Ae(e, NaN);
  if (!a)
    return t;
  const n = t.getDate(), r = Ae(e, t.getTime());
  r.setMonth(t.getMonth() + a + 1, 0);
  const l = r.getDate();
  return n >= l ? r : (t.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    n
  ), t);
}
function ar(e, a) {
  const {
    years: t = 0,
    months: n = 0,
    weeks: r = 0,
    days: l = 0,
    hours: s = 0,
    minutes: d = 0,
    seconds: c = 0
  } = a, $ = ve(e), h = n || t ? gt($, n + t * 12) : $, g = l || r ? ft(h, l + r * 7) : h, b = d + s * 60, S = (c + b * 60) * 1e3;
  return Ae(e, g.getTime() + S);
}
function ol(e, a) {
  const t = +ve(e);
  return Ae(e, t + a);
}
const nr = 6048e5, sl = 864e5, il = 6e4, rr = 36e5, ul = 1e3;
function dl(e, a) {
  return ol(e, a * rr);
}
let cl = {};
function Qt() {
  return cl;
}
function bt(e, a) {
  var d, c, $, h;
  const t = Qt(), n = (a == null ? void 0 : a.weekStartsOn) ?? ((c = (d = a == null ? void 0 : a.locale) == null ? void 0 : d.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((h = ($ = t.locale) == null ? void 0 : $.options) == null ? void 0 : h.weekStartsOn) ?? 0, r = ve(e), l = r.getDay(), s = (l < n ? 7 : 0) + l - n;
  return r.setDate(r.getDate() - s), r.setHours(0, 0, 0, 0), r;
}
function aa(e) {
  return bt(e, { weekStartsOn: 1 });
}
function lr(e) {
  const a = ve(e), t = a.getFullYear(), n = Ae(e, 0);
  n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const r = aa(n), l = Ae(e, 0);
  l.setFullYear(t, 0, 4), l.setHours(0, 0, 0, 0);
  const s = aa(l);
  return a.getTime() >= r.getTime() ? t + 1 : a.getTime() >= s.getTime() ? t : t - 1;
}
function Nn(e) {
  const a = ve(e);
  return a.setHours(0, 0, 0, 0), a;
}
function $a(e) {
  const a = ve(e), t = new Date(
    Date.UTC(
      a.getFullYear(),
      a.getMonth(),
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    )
  );
  return t.setUTCFullYear(a.getFullYear()), +e - +t;
}
function or(e, a) {
  const t = Nn(e), n = Nn(a), r = +t - $a(t), l = +n - $a(n);
  return Math.round((r - l) / sl);
}
function pl(e) {
  const a = lr(e), t = Ae(e, 0);
  return t.setFullYear(a, 0, 4), t.setHours(0, 0, 0, 0), aa(t);
}
function vl(e, a) {
  const t = a * 3;
  return gt(e, t);
}
function pn(e, a) {
  return gt(e, a * 12);
}
function Yn(e, a) {
  const t = ve(e), n = ve(a), r = t.getTime() - n.getTime();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function sr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ha(e) {
  if (!sr(e) && typeof e != "number")
    return !1;
  const a = ve(e);
  return !isNaN(Number(a));
}
function In(e) {
  const a = ve(e);
  return Math.trunc(a.getMonth() / 3) + 1;
}
function ml(e, a) {
  const t = ve(e), n = ve(a);
  return t.getFullYear() - n.getFullYear();
}
function hl(e, a) {
  const t = ve(e), n = ve(a), r = Yn(t, n), l = Math.abs(ml(t, n));
  t.setFullYear(1584), n.setFullYear(1584);
  const s = Yn(t, n) === -r, d = r * (l - +s);
  return d === 0 ? 0 : d;
}
function ir(e, a) {
  const t = ve(e.start), n = ve(e.end);
  let r = +t > +n;
  const l = r ? +t : +n, s = r ? n : t;
  s.setHours(0, 0, 0, 0);
  let d = 1;
  const c = [];
  for (; +s <= l; )
    c.push(ve(s)), s.setDate(s.getDate() + d), s.setHours(0, 0, 0, 0);
  return r ? c.reverse() : c;
}
function qt(e) {
  const a = ve(e), t = a.getMonth(), n = t - t % 3;
  return a.setMonth(n, 1), a.setHours(0, 0, 0, 0), a;
}
function fl(e, a) {
  const t = ve(e.start), n = ve(e.end);
  let r = +t > +n;
  const l = r ? +qt(t) : +qt(n);
  let s = qt(r ? n : t), d = 1;
  const c = [];
  for (; +s <= l; )
    c.push(ve(s)), s = vl(s, d);
  return r ? c.reverse() : c;
}
function yl(e) {
  const a = ve(e);
  return a.setDate(1), a.setHours(0, 0, 0, 0), a;
}
function ur(e) {
  const a = ve(e), t = a.getFullYear();
  return a.setFullYear(t + 1, 0, 0), a.setHours(23, 59, 59, 999), a;
}
function ga(e) {
  const a = ve(e), t = Ae(e, 0);
  return t.setFullYear(a.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function dr(e, a) {
  var d, c, $, h;
  const t = Qt(), n = (a == null ? void 0 : a.weekStartsOn) ?? ((c = (d = a == null ? void 0 : a.locale) == null ? void 0 : d.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((h = ($ = t.locale) == null ? void 0 : $.options) == null ? void 0 : h.weekStartsOn) ?? 0, r = ve(e), l = r.getDay(), s = (l < n ? -7 : 0) + 6 - (l - n);
  return r.setDate(r.getDate() + s), r.setHours(23, 59, 59, 999), r;
}
function En(e) {
  const a = ve(e), t = a.getMonth(), n = t - t % 3 + 3;
  return a.setMonth(n, 0), a.setHours(23, 59, 59, 999), a;
}
const gl = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, bl = (e, a, t) => {
  let n;
  const r = gl[e];
  return typeof r == "string" ? n = r : a === 1 ? n = r.one : n = r.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Ka(e) {
  return (a = {}) => {
    const t = a.width ? String(a.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const wl = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, _l = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, kl = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xl = {
  date: Ka({
    formats: wl,
    defaultWidth: "full"
  }),
  time: Ka({
    formats: _l,
    defaultWidth: "full"
  }),
  dateTime: Ka({
    formats: kl,
    defaultWidth: "full"
  })
}, Dl = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ml = (e, a, t, n) => Dl[e];
function pa(e) {
  return (a, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (n === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, d = t != null && t.width ? String(t.width) : s;
      r = e.formattingValues[d] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, d = t != null && t.width ? String(t.width) : e.defaultWidth;
      r = e.values[d] || e.values[s];
    }
    const l = e.argumentCallback ? e.argumentCallback(a) : a;
    return r[l];
  };
}
const Tl = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Pl = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ol = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, $l = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Al = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Sl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Cl = (e, a) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Rl = {
  ordinalNumber: Cl,
  era: pa({
    values: Tl,
    defaultWidth: "wide"
  }),
  quarter: pa({
    values: Pl,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: pa({
    values: Ol,
    defaultWidth: "wide"
  }),
  day: pa({
    values: $l,
    defaultWidth: "wide"
  }),
  dayPeriod: pa({
    values: Al,
    defaultWidth: "wide",
    formattingValues: Sl,
    defaultFormattingWidth: "wide"
  })
};
function va(e) {
  return (a, t = {}) => {
    const n = t.width, r = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], l = a.match(r);
    if (!l)
      return null;
    const s = l[0], d = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(d) ? Yl(d, (g) => g.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Nl(d, (g) => g.test(s))
    );
    let $;
    $ = e.valueCallback ? e.valueCallback(c) : c, $ = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback($)
    ) : $;
    const h = a.slice(s.length);
    return { value: $, rest: h };
  };
}
function Nl(e, a) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && a(e[t]))
      return t;
}
function Yl(e, a) {
  for (let t = 0; t < e.length; t++)
    if (a(e[t]))
      return t;
}
function Il(e) {
  return (a, t = {}) => {
    const n = a.match(e.matchPattern);
    if (!n) return null;
    const r = n[0], l = a.match(e.parsePattern);
    if (!l) return null;
    let s = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const d = a.slice(r.length);
    return { value: s, rest: d };
  };
}
const El = /^(\d+)(th|st|nd|rd)?/i, Ll = /\d+/i, Fl = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Bl = {
  any: [/^b/i, /^(a|c)/i]
}, Vl = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Hl = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ql = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zl = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Wl = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jl = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ul = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Kl = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ql = {
  ordinalNumber: Il({
    matchPattern: El,
    parsePattern: Ll,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: va({
    matchPatterns: Fl,
    defaultMatchWidth: "wide",
    parsePatterns: Bl,
    defaultParseWidth: "any"
  }),
  quarter: va({
    matchPatterns: Vl,
    defaultMatchWidth: "wide",
    parsePatterns: Hl,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: va({
    matchPatterns: ql,
    defaultMatchWidth: "wide",
    parsePatterns: zl,
    defaultParseWidth: "any"
  }),
  day: va({
    matchPatterns: Wl,
    defaultMatchWidth: "wide",
    parsePatterns: jl,
    defaultParseWidth: "any"
  }),
  dayPeriod: va({
    matchPatterns: Ul,
    defaultMatchWidth: "any",
    parsePatterns: Kl,
    defaultParseWidth: "any"
  })
}, cr = {
  code: "en-US",
  formatDistance: bl,
  formatLong: xl,
  formatRelative: Ml,
  localize: Rl,
  match: Ql,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Gl(e) {
  const a = ve(e);
  return or(a, ga(a)) + 1;
}
function vn(e) {
  const a = ve(e), t = +aa(a) - +pl(a);
  return Math.round(t / nr) + 1;
}
function mn(e, a) {
  var h, g, b, w;
  const t = ve(e), n = t.getFullYear(), r = Qt(), l = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((g = (h = a == null ? void 0 : a.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((w = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, s = Ae(e, 0);
  s.setFullYear(n + 1, 0, l), s.setHours(0, 0, 0, 0);
  const d = bt(s, a), c = Ae(e, 0);
  c.setFullYear(n, 0, l), c.setHours(0, 0, 0, 0);
  const $ = bt(c, a);
  return t.getTime() >= d.getTime() ? n + 1 : t.getTime() >= $.getTime() ? n : n - 1;
}
function Xl(e, a) {
  var d, c, $, h;
  const t = Qt(), n = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((c = (d = a == null ? void 0 : a.locale) == null ? void 0 : d.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((h = ($ = t.locale) == null ? void 0 : $.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, r = mn(e, a), l = Ae(e, 0);
  return l.setFullYear(r, 0, n), l.setHours(0, 0, 0, 0), bt(l, a);
}
function hn(e, a) {
  const t = ve(e), n = +bt(t, a) - +Xl(t, a);
  return Math.round(n / nr) + 1;
}
function Ce(e, a) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(a, "0");
  return t + n;
}
const Ct = {
  // Year
  y(e, a) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return Ce(a === "yy" ? n % 100 : n, a.length);
  },
  // Month
  M(e, a) {
    const t = e.getMonth();
    return a === "M" ? String(t + 1) : Ce(t + 1, 2);
  },
  // Day of the month
  d(e, a) {
    return Ce(e.getDate(), a.length);
  },
  // AM or PM
  a(e, a) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, a) {
    return Ce(e.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(e, a) {
    return Ce(e.getHours(), a.length);
  },
  // Minute
  m(e, a) {
    return Ce(e.getMinutes(), a.length);
  },
  // Second
  s(e, a) {
    return Ce(e.getSeconds(), a.length);
  },
  // Fraction of second
  S(e, a) {
    const t = a.length, n = e.getMilliseconds(), r = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return Ce(r, a.length);
  }
}, Gt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ln = {
  // Era
  G: function(e, a, t) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(n, { width: "abbreviated" });
      case "GGGGG":
        return t.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, a, t) {
    if (a === "yo") {
      const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
      return t.ordinalNumber(r, { unit: "year" });
    }
    return Ct.y(e, a);
  },
  // Local week-numbering year
  Y: function(e, a, t, n) {
    const r = mn(e, n), l = r > 0 ? r : 1 - r;
    if (a === "YY") {
      const s = l % 100;
      return Ce(s, 2);
    }
    return a === "Yo" ? t.ordinalNumber(l, { unit: "year" }) : Ce(l, a.length);
  },
  // ISO week-numbering year
  R: function(e, a) {
    const t = lr(e);
    return Ce(t, a.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, a) {
    const t = e.getFullYear();
    return Ce(t, a.length);
  },
  // Quarter
  Q: function(e, a, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (a) {
      case "Q":
        return String(n);
      case "QQ":
        return Ce(n, 2);
      case "Qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return t.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, a, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (a) {
      case "q":
        return String(n);
      case "qq":
        return Ce(n, 2);
      case "qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return t.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, a, t) {
    const n = e.getMonth();
    switch (a) {
      case "M":
      case "MM":
        return Ct.M(e, a);
      case "Mo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return t.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, a, t) {
    const n = e.getMonth();
    switch (a) {
      case "L":
        return String(n + 1);
      case "LL":
        return Ce(n + 1, 2);
      case "Lo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return t.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, a, t, n) {
    const r = hn(e, n);
    return a === "wo" ? t.ordinalNumber(r, { unit: "week" }) : Ce(r, a.length);
  },
  // ISO week of year
  I: function(e, a, t) {
    const n = vn(e);
    return a === "Io" ? t.ordinalNumber(n, { unit: "week" }) : Ce(n, a.length);
  },
  // Day of the month
  d: function(e, a, t) {
    return a === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Ct.d(e, a);
  },
  // Day of year
  D: function(e, a, t) {
    const n = Gl(e);
    return a === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : Ce(n, a.length);
  },
  // Day of week
  E: function(e, a, t) {
    const n = e.getDay();
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, a, t, n) {
    const r = e.getDay(), l = (r - n.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "e":
        return String(l);
      case "ee":
        return Ce(l, 2);
      case "eo":
        return t.ordinalNumber(l, { unit: "day" });
      case "eee":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, a, t, n) {
    const r = e.getDay(), l = (r - n.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "c":
        return String(l);
      case "cc":
        return Ce(l, a.length);
      case "co":
        return t.ordinalNumber(l, { unit: "day" });
      case "ccc":
        return t.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, a, t) {
    const n = e.getDay(), r = n === 0 ? 7 : n;
    switch (a) {
      case "i":
        return String(r);
      case "ii":
        return Ce(r, a.length);
      case "io":
        return t.ordinalNumber(r, { unit: "day" });
      case "iii":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, a, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, a, t) {
    const n = e.getHours();
    let r;
    switch (n === 12 ? r = Gt.noon : n === 0 ? r = Gt.midnight : r = n / 12 >= 1 ? "pm" : "am", a) {
      case "b":
      case "bb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, a, t) {
    const n = e.getHours();
    let r;
    switch (n >= 17 ? r = Gt.evening : n >= 12 ? r = Gt.afternoon : n >= 4 ? r = Gt.morning : r = Gt.night, a) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, a, t) {
    if (a === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), t.ordinalNumber(n, { unit: "hour" });
    }
    return Ct.h(e, a);
  },
  // Hour [0-23]
  H: function(e, a, t) {
    return a === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Ct.H(e, a);
  },
  // Hour [0-11]
  K: function(e, a, t) {
    const n = e.getHours() % 12;
    return a === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : Ce(n, a.length);
  },
  // Hour [1-24]
  k: function(e, a, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), a === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : Ce(n, a.length);
  },
  // Minute
  m: function(e, a, t) {
    return a === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ct.m(e, a);
  },
  // Second
  s: function(e, a, t) {
    return a === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ct.s(e, a);
  },
  // Fraction of second
  S: function(e, a) {
    return Ct.S(e, a);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, a, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (a) {
      case "X":
        return Bn(n);
      case "XXXX":
      case "XX":
        return Vt(n);
      case "XXXXX":
      case "XXX":
      default:
        return Vt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, a, t) {
    const n = e.getTimezoneOffset();
    switch (a) {
      case "x":
        return Bn(n);
      case "xxxx":
      case "xx":
        return Vt(n);
      case "xxxxx":
      case "xxx":
      default:
        return Vt(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, a, t) {
    const n = e.getTimezoneOffset();
    switch (a) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Fn(n, ":");
      case "OOOO":
      default:
        return "GMT" + Vt(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, a, t) {
    const n = e.getTimezoneOffset();
    switch (a) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Fn(n, ":");
      case "zzzz":
      default:
        return "GMT" + Vt(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, a, t) {
    const n = Math.trunc(e.getTime() / 1e3);
    return Ce(n, a.length);
  },
  // Milliseconds timestamp
  T: function(e, a, t) {
    const n = e.getTime();
    return Ce(n, a.length);
  }
};
function Fn(e, a = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), r = Math.trunc(n / 60), l = n % 60;
  return l === 0 ? t + String(r) : t + String(r) + a + Ce(l, 2);
}
function Bn(e, a) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ce(Math.abs(e) / 60, 2) : Vt(e, a);
}
function Vt(e, a = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), r = Ce(Math.trunc(n / 60), 2), l = Ce(n % 60, 2);
  return t + r + a + l;
}
const Vn = (e, a) => {
  switch (e) {
    case "P":
      return a.date({ width: "short" });
    case "PP":
      return a.date({ width: "medium" });
    case "PPP":
      return a.date({ width: "long" });
    case "PPPP":
    default:
      return a.date({ width: "full" });
  }
}, pr = (e, a) => {
  switch (e) {
    case "p":
      return a.time({ width: "short" });
    case "pp":
      return a.time({ width: "medium" });
    case "ppp":
      return a.time({ width: "long" });
    case "pppp":
    default:
      return a.time({ width: "full" });
  }
}, Jl = (e, a) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], r = t[2];
  if (!r)
    return Vn(e, a);
  let l;
  switch (n) {
    case "P":
      l = a.dateTime({ width: "short" });
      break;
    case "PP":
      l = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      l = a.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      l = a.dateTime({ width: "full" });
      break;
  }
  return l.replace("{{date}}", Vn(n, a)).replace("{{time}}", pr(r, a));
}, on = {
  p: pr,
  P: Jl
}, Zl = /^D+$/, eo = /^Y+$/, to = ["D", "DD", "YY", "YYYY"];
function vr(e) {
  return Zl.test(e);
}
function mr(e) {
  return eo.test(e);
}
function sn(e, a, t) {
  const n = ao(e, a, t);
  if (console.warn(n), to.includes(e)) throw new RangeError(n);
}
function ao(e, a, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${a}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const no = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ro = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, lo = /^'([^]*?)'?$/, oo = /''/g, so = /[a-zA-Z]/;
function Mt(e, a, t) {
  var h, g, b, w, S, M, Y, U;
  const n = Qt(), r = (t == null ? void 0 : t.locale) ?? n.locale ?? cr, l = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((g = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((w = (b = n.locale) == null ? void 0 : b.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((M = (S = t == null ? void 0 : t.locale) == null ? void 0 : S.options) == null ? void 0 : M.weekStartsOn) ?? n.weekStartsOn ?? ((U = (Y = n.locale) == null ? void 0 : Y.options) == null ? void 0 : U.weekStartsOn) ?? 0, d = ve(e);
  if (!ha(d))
    throw new RangeError("Invalid time value");
  let c = a.match(ro).map((Q) => {
    const T = Q[0];
    if (T === "p" || T === "P") {
      const z = on[T];
      return z(Q, r.formatLong);
    }
    return Q;
  }).join("").match(no).map((Q) => {
    if (Q === "''")
      return { isToken: !1, value: "'" };
    const T = Q[0];
    if (T === "'")
      return { isToken: !1, value: io(Q) };
    if (Ln[T])
      return { isToken: !0, value: Q };
    if (T.match(so))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + T + "`"
      );
    return { isToken: !1, value: Q };
  });
  r.localize.preprocessor && (c = r.localize.preprocessor(d, c));
  const $ = {
    firstWeekContainsDate: l,
    weekStartsOn: s,
    locale: r
  };
  return c.map((Q) => {
    if (!Q.isToken) return Q.value;
    const T = Q.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && mr(T) || !(t != null && t.useAdditionalDayOfYearTokens) && vr(T)) && sn(T, a, String(e));
    const z = Ln[T[0]];
    return z(d, T, r.localize, $);
  }).join("");
}
function io(e) {
  const a = e.match(lo);
  return a ? a[1].replace(oo, "'") : e;
}
function uo(e) {
  return ve(e).getDay();
}
function co(e) {
  const a = ve(e), t = a.getFullYear(), n = a.getMonth(), r = Ae(e, 0);
  return r.setFullYear(t, n + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function po() {
  return Object.assign({}, Qt());
}
function $t(e) {
  return ve(e).getHours();
}
function vo(e) {
  let t = ve(e).getDay();
  return t === 0 && (t = 7), t;
}
function Et(e) {
  return ve(e).getMinutes();
}
function De(e) {
  return ve(e).getMonth();
}
function na(e) {
  return ve(e).getSeconds();
}
function ye(e) {
  return ve(e).getFullYear();
}
function ra(e, a) {
  const t = ve(e), n = ve(a);
  return t.getTime() > n.getTime();
}
function ba(e, a) {
  const t = ve(e), n = ve(a);
  return +t < +n;
}
function ea(e, a) {
  const t = ve(e), n = ve(a);
  return +t == +n;
}
function mo(e, a) {
  const t = a instanceof Date ? Ae(a, 0) : new a(0);
  return t.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), t.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), t;
}
const ho = 10;
class hr {
  constructor() {
    ce(this, "subPriority", 0);
  }
  validate(a, t) {
    return !0;
  }
}
class fo extends hr {
  constructor(a, t, n, r, l) {
    super(), this.value = a, this.validateValue = t, this.setValue = n, this.priority = r, l && (this.subPriority = l);
  }
  validate(a, t) {
    return this.validateValue(a, this.value, t);
  }
  set(a, t, n) {
    return this.setValue(a, t, this.value, n);
  }
}
class yo extends hr {
  constructor() {
    super(...arguments);
    ce(this, "priority", ho);
    ce(this, "subPriority", -1);
  }
  set(t, n) {
    return n.timestampIsSet ? t : Ae(t, mo(t, Date));
  }
}
class Se {
  run(a, t, n, r) {
    const l = this.parse(a, t, n, r);
    return l ? {
      setter: new fo(
        l.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: l.rest
    } : null;
  }
  validate(a, t, n) {
    return !0;
  }
}
class go extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 140);
    ce(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, n, r) {
    return n.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const ze = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, kt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function We(e, a) {
  return e && {
    value: a(e.value),
    rest: e.rest
  };
}
function Le(e, a) {
  const t = a.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: a.slice(t[0].length)
  } : null;
}
function xt(e, a) {
  const t = a.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: a.slice(1)
    };
  const n = t[1] === "+" ? 1 : -1, r = t[2] ? parseInt(t[2], 10) : 0, l = t[3] ? parseInt(t[3], 10) : 0, s = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: n * (r * rr + l * il + s * ul),
    rest: a.slice(t[0].length)
  };
}
function fr(e) {
  return Le(ze.anyDigitsSigned, e);
}
function Ve(e, a) {
  switch (e) {
    case 1:
      return Le(ze.singleDigit, a);
    case 2:
      return Le(ze.twoDigits, a);
    case 3:
      return Le(ze.threeDigits, a);
    case 4:
      return Le(ze.fourDigits, a);
    default:
      return Le(new RegExp("^\\d{1," + e + "}"), a);
  }
}
function Aa(e, a) {
  switch (e) {
    case 1:
      return Le(ze.singleDigitSigned, a);
    case 2:
      return Le(ze.twoDigitsSigned, a);
    case 3:
      return Le(ze.threeDigitsSigned, a);
    case 4:
      return Le(ze.fourDigitsSigned, a);
    default:
      return Le(new RegExp("^-?\\d{1," + e + "}"), a);
  }
}
function fn(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function yr(e, a) {
  const t = a > 0, n = t ? a : 1 - a;
  let r;
  if (n <= 50)
    r = e || 100;
  else {
    const l = n + 50, s = Math.trunc(l / 100) * 100, d = e >= l % 100;
    r = e + s - (d ? 100 : 0);
  }
  return t ? r : 1 - r;
}
function gr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class bo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 130);
    ce(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, n, r) {
    const l = (s) => ({
      year: s,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return We(Ve(4, t), l);
      case "yo":
        return We(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          l
        );
      default:
        return We(Ve(n.length, t), l);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r) {
    const l = t.getFullYear();
    if (r.isTwoDigitYear) {
      const d = yr(
        r.year,
        l
      );
      return t.setFullYear(d, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class wo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 130);
    ce(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    const l = (s) => ({
      year: s,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return We(Ve(4, t), l);
      case "Yo":
        return We(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          l
        );
      default:
        return We(Ve(n.length, t), l);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r, l) {
    const s = mn(t, l);
    if (r.isTwoDigitYear) {
      const c = yr(
        r.year,
        s
      );
      return t.setFullYear(
        c,
        0,
        l.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), bt(t, l);
    }
    const d = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(d, 0, l.firstWeekContainsDate), t.setHours(0, 0, 0, 0), bt(t, l);
  }
}
class _o extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 130);
    ce(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n) {
    return Aa(n === "R" ? 4 : n.length, t);
  }
  set(t, n, r) {
    const l = Ae(t, 0);
    return l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0), aa(l);
  }
}
class ko extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 130);
    ce(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, n) {
    return Aa(n === "u" ? 4 : n.length, t);
  }
  set(t, n, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class xo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 120);
    ce(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    switch (n) {
      case "Q":
      case "QQ":
        return Ve(n.length, t);
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Do extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 120);
    ce(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    switch (n) {
      case "q":
      case "qq":
        return Ve(n.length, t);
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Mo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    ce(this, "priority", 110);
  }
  parse(t, n, r) {
    const l = (s) => s - 1;
    switch (n) {
      case "M":
        return We(
          Le(ze.month, t),
          l
        );
      case "MM":
        return We(Ve(2, t), l);
      case "Mo":
        return We(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          l
        );
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class To extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 110);
    ce(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    const l = (s) => s - 1;
    switch (n) {
      case "L":
        return We(
          Le(ze.month, t),
          l
        );
      case "LL":
        return We(Ve(2, t), l);
      case "Lo":
        return We(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          l
        );
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function Po(e, a, t) {
  const n = ve(e), r = hn(n, t) - a;
  return n.setDate(n.getDate() - r * 7), n;
}
class Oo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 100);
    ce(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    switch (n) {
      case "w":
        return Le(ze.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, r, l) {
    return bt(Po(t, r, l), l);
  }
}
function $o(e, a) {
  const t = ve(e), n = vn(t) - a;
  return t.setDate(t.getDate() - n * 7), t;
}
class Ao extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 100);
    ce(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    switch (n) {
      case "I":
        return Le(ze.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, r) {
    return aa($o(t, r));
  }
}
const So = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Co = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Ro extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 90);
    ce(this, "subPriority", 1);
    ce(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    switch (n) {
      case "d":
        return Le(ze.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear(), l = gr(r), s = t.getMonth();
    return l ? n >= 1 && n <= Co[s] : n >= 1 && n <= So[s];
  }
  set(t, n, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
}
class No extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 90);
    ce(this, "subpriority", 1);
    ce(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    switch (n) {
      case "D":
      case "DD":
        return Le(ze.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear();
    return gr(r) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(t, n, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
}
function yn(e, a, t) {
  var g, b, w, S;
  const n = Qt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((b = (g = t == null ? void 0 : t.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? n.weekStartsOn ?? ((S = (w = n.locale) == null ? void 0 : w.options) == null ? void 0 : S.weekStartsOn) ?? 0, l = ve(e), s = l.getDay(), c = (a % 7 + 7) % 7, $ = 7 - r, h = a < 0 || a > 6 ? a - (s + $) % 7 : (c + $) % 7 - (s + $) % 7;
  return ft(l, h);
}
class Yo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 90);
    ce(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, l) {
    return t = yn(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
class Io extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 90);
    ce(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r, l) {
    const s = (d) => {
      const c = Math.floor((d - 1) / 7) * 7;
      return (d + l.weekStartsOn + 6) % 7 + c;
    };
    switch (n) {
      case "e":
      case "ee":
        return We(Ve(n.length, t), s);
      case "eo":
        return We(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, l) {
    return t = yn(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
class Eo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 90);
    ce(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, n, r, l) {
    const s = (d) => {
      const c = Math.floor((d - 1) / 7) * 7;
      return (d + l.weekStartsOn + 6) % 7 + c;
    };
    switch (n) {
      case "c":
      case "cc":
        return We(Ve(n.length, t), s);
      case "co":
        return We(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, l) {
    return t = yn(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
function Lo(e, a) {
  const t = ve(e), n = vo(t), r = a - n;
  return ft(t, r);
}
class Fo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 90);
    ce(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, n, r) {
    const l = (s) => s === 0 ? 7 : s;
    switch (n) {
      case "i":
      case "ii":
        return Ve(n.length, t);
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      case "iii":
        return We(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiiii":
        return We(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiiiii":
        return We(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiii":
      default:
        return We(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 7;
  }
  set(t, n, r) {
    return t = Lo(t, r), t.setHours(0, 0, 0, 0), t;
  }
}
class Bo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 80);
    ce(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(fn(r), 0, 0, 0), t;
  }
}
class Vo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 80);
    ce(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(fn(r), 0, 0, 0), t;
  }
}
class Ho extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 80);
    ce(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(fn(r), 0, 0, 0), t;
  }
}
class qo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 70);
    ce(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "h":
        return Le(ze.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 12;
  }
  set(t, n, r) {
    const l = t.getHours() >= 12;
    return l && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !l && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class zo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 70);
    ce(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "H":
        return Le(ze.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 23;
  }
  set(t, n, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
}
class Wo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 70);
    ce(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "K":
        return Le(ze.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class jo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 70);
    ce(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "k":
        return Le(ze.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 24;
  }
  set(t, n, r) {
    const l = r <= 24 ? r % 24 : r;
    return t.setHours(l, 0, 0, 0), t;
  }
}
class Uo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 60);
    ce(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "m":
        return Le(ze.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, r) {
    return t.setMinutes(r, 0, 0), t;
  }
}
class Ko extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 50);
    ce(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, n, r) {
    switch (n) {
      case "s":
        return Le(ze.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return Ve(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, r) {
    return t.setSeconds(r, 0), t;
  }
}
class Qo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 30);
    ce(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, n) {
    const r = (l) => Math.trunc(l * Math.pow(10, -n.length + 3));
    return We(Ve(n.length, t), r);
  }
  set(t, n, r) {
    return t.setMilliseconds(r), t;
  }
}
class Go extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 10);
    ce(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, n) {
    switch (n) {
      case "X":
        return xt(
          kt.basicOptionalMinutes,
          t
        );
      case "XX":
        return xt(kt.basic, t);
      case "XXXX":
        return xt(
          kt.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return xt(
          kt.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return xt(kt.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : Ae(
      t,
      t.getTime() - $a(t) - r
    );
  }
}
class Xo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 10);
    ce(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, n) {
    switch (n) {
      case "x":
        return xt(
          kt.basicOptionalMinutes,
          t
        );
      case "xx":
        return xt(kt.basic, t);
      case "xxxx":
        return xt(
          kt.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return xt(
          kt.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return xt(kt.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : Ae(
      t,
      t.getTime() - $a(t) - r
    );
  }
}
class Jo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 40);
    ce(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return fr(t);
  }
  set(t, n, r) {
    return [Ae(t, r * 1e3), { timestampIsSet: !0 }];
  }
}
class Zo extends Se {
  constructor() {
    super(...arguments);
    ce(this, "priority", 20);
    ce(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return fr(t);
  }
  set(t, n, r) {
    return [Ae(t, r), { timestampIsSet: !0 }];
  }
}
const es = {
  G: new go(),
  y: new bo(),
  Y: new wo(),
  R: new _o(),
  u: new ko(),
  Q: new xo(),
  q: new Do(),
  M: new Mo(),
  L: new To(),
  w: new Oo(),
  I: new Ao(),
  d: new Ro(),
  D: new No(),
  E: new Yo(),
  e: new Io(),
  c: new Eo(),
  i: new Fo(),
  a: new Bo(),
  b: new Vo(),
  B: new Ho(),
  h: new qo(),
  H: new zo(),
  K: new Wo(),
  k: new jo(),
  m: new Uo(),
  s: new Ko(),
  S: new Qo(),
  X: new Go(),
  x: new Xo(),
  t: new Jo(),
  T: new Zo()
}, ts = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, as = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ns = /^'([^]*?)'?$/, rs = /''/g, ls = /\S/, os = /[a-zA-Z]/;
function un(e, a, t, n) {
  var M, Y, U, Q, T, z, te, E;
  const r = po(), l = (n == null ? void 0 : n.locale) ?? r.locale ?? cr, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((Y = (M = n == null ? void 0 : n.locale) == null ? void 0 : M.options) == null ? void 0 : Y.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((Q = (U = r.locale) == null ? void 0 : U.options) == null ? void 0 : Q.firstWeekContainsDate) ?? 1, d = (n == null ? void 0 : n.weekStartsOn) ?? ((z = (T = n == null ? void 0 : n.locale) == null ? void 0 : T.options) == null ? void 0 : z.weekStartsOn) ?? r.weekStartsOn ?? ((E = (te = r.locale) == null ? void 0 : te.options) == null ? void 0 : E.weekStartsOn) ?? 0;
  if (a === "")
    return e === "" ? ve(t) : Ae(t, NaN);
  const c = {
    firstWeekContainsDate: s,
    weekStartsOn: d,
    locale: l
  }, $ = [new yo()], h = a.match(as).map((_) => {
    const W = _[0];
    if (W in on) {
      const j = on[W];
      return j(_, l.formatLong);
    }
    return _;
  }).join("").match(ts), g = [];
  for (let _ of h) {
    !(n != null && n.useAdditionalWeekYearTokens) && mr(_) && sn(_, a, e), !(n != null && n.useAdditionalDayOfYearTokens) && vr(_) && sn(_, a, e);
    const W = _[0], j = es[W];
    if (j) {
      const { incompatibleTokens: L } = j;
      if (Array.isArray(L)) {
        const ue = g.find(
          (me) => L.includes(me.token) || me.token === W
        );
        if (ue)
          throw new RangeError(
            `The format string mustn't contain \`${ue.fullToken}\` and \`${_}\` at the same time`
          );
      } else if (j.incompatibleTokens === "*" && g.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${_}\` and any other token at the same time`
        );
      g.push({ token: W, fullToken: _ });
      const le = j.run(
        e,
        _,
        l.match,
        c
      );
      if (!le)
        return Ae(t, NaN);
      $.push(le.setter), e = le.rest;
    } else {
      if (W.match(os))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + W + "`"
        );
      if (_ === "''" ? _ = "'" : W === "'" && (_ = ss(_)), e.indexOf(_) === 0)
        e = e.slice(_.length);
      else
        return Ae(t, NaN);
    }
  }
  if (e.length > 0 && ls.test(e))
    return Ae(t, NaN);
  const b = $.map((_) => _.priority).sort((_, W) => W - _).filter((_, W, j) => j.indexOf(_) === W).map(
    (_) => $.filter((W) => W.priority === _).sort((W, j) => j.subPriority - W.subPriority)
  ).map((_) => _[0]);
  let w = ve(t);
  if (isNaN(w.getTime()))
    return Ae(t, NaN);
  const S = {};
  for (const _ of b) {
    if (!_.validate(w, c))
      return Ae(t, NaN);
    const W = _.set(w, S, c);
    Array.isArray(W) ? (w = W[0], Object.assign(S, W[1])) : w = W;
  }
  return Ae(t, w);
}
function ss(e) {
  return e.match(ns)[1].replace(rs, "'");
}
function Hn(e, a) {
  const t = qt(e), n = qt(a);
  return +t == +n;
}
function is(e, a) {
  return ft(e, -a);
}
function br(e, a) {
  const t = ve(e), n = t.getFullYear(), r = t.getDate(), l = Ae(e, 0);
  l.setFullYear(n, a, 15), l.setHours(0, 0, 0, 0);
  const s = co(l);
  return t.setMonth(a, Math.min(r, s)), t;
}
function Ne(e, a) {
  let t = ve(e);
  return isNaN(+t) ? Ae(e, NaN) : (a.year != null && t.setFullYear(a.year), a.month != null && (t = br(t, a.month)), a.date != null && t.setDate(a.date), a.hours != null && t.setHours(a.hours), a.minutes != null && t.setMinutes(a.minutes), a.seconds != null && t.setSeconds(a.seconds), a.milliseconds != null && t.setMilliseconds(a.milliseconds), t);
}
function us(e, a) {
  const t = ve(e);
  return t.setHours(a), t;
}
function wr(e, a) {
  const t = ve(e);
  return t.setMilliseconds(a), t;
}
function ds(e, a) {
  const t = ve(e);
  return t.setMinutes(a), t;
}
function _r(e, a) {
  const t = ve(e);
  return t.setSeconds(a), t;
}
function Dt(e, a) {
  const t = ve(e);
  return isNaN(+t) ? Ae(e, NaN) : (t.setFullYear(a), t);
}
function la(e, a) {
  return gt(e, -a);
}
function cs(e, a) {
  const {
    years: t = 0,
    months: n = 0,
    weeks: r = 0,
    days: l = 0,
    hours: s = 0,
    minutes: d = 0,
    seconds: c = 0
  } = a, $ = la(e, n + t * 12), h = is($, l + r * 7), g = d + s * 60, w = (c + g * 60) * 1e3;
  return Ae(e, h.getTime() - w);
}
function kr(e, a) {
  return pn(e, -a);
}
function ia() {
  return y(), D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      re("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      re("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      re("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      re("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
ia.compatConfig = {
  MODE: 3
};
function xr() {
  return y(), D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      re("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      re("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
xr.compatConfig = {
  MODE: 3
};
function gn() {
  return y(), D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      re("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
gn.compatConfig = {
  MODE: 3
};
function bn() {
  return y(), D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      re("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
bn.compatConfig = {
  MODE: 3
};
function wn() {
  return y(), D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      re("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      re("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
wn.compatConfig = {
  MODE: 3
};
function _n() {
  return y(), D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      re("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
_n.compatConfig = {
  MODE: 3
};
function kn() {
  return y(), D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      re("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
kn.compatConfig = {
  MODE: 3
};
const it = (e, a) => a ? new Date(e.toLocaleString("en-US", { timeZone: a })) : new Date(e), xn = (e, a, t) => dn(e, a, t) || G(), ps = (e, a, t) => {
  const n = a.dateInTz ? it(new Date(e), a.dateInTz) : G(e);
  return t ? nt(n, !0) : n;
}, dn = (e, a, t) => {
  if (!e) return null;
  const n = t ? nt(G(e), !0) : G(e);
  return a ? a.exactMatch ? ps(e, a, t) : it(n, a.timezone) : n;
}, vs = (e) => {
  if (!e) return 0;
  const a = /* @__PURE__ */ new Date(), t = new Date(a.toLocaleString("en-US", { timeZone: "UTC" })), n = new Date(a.toLocaleString("en-US", { timeZone: e })), r = n.getTimezoneOffset() / 60;
  return (+t - +n) / (1e3 * 60 * 60) - r;
};
var ht = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(ht || {}), Ht = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Ht || {}), Wt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Wt || {}), Xe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Xe || {});
const ms = ["timestamp", "date", "iso"];
var tt = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(tt || {}), Ee = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Ee || {});
function qn(e) {
  return (a) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${a}T00:00:00+00:00`)).slice(0, 2);
}
function hs(e) {
  return (a) => Mt(it(/* @__PURE__ */ new Date(`2017-01-0${a}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const fs = (e, a, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7];
  let r;
  if (e !== null)
    try {
      r = n.map(hs(e));
    } catch {
      r = n.map(qn(a));
    }
  else
    r = n.map(qn(a));
  const l = r.slice(0, t), s = r.slice(t + 1, r.length);
  return [r[t]].concat(...s).concat(...l);
}, Dn = (e, a, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: Pr(r, a) });
  return t ? n.reverse() : n;
}, Dr = (e, a, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((l) => {
    const s = l < 10 ? `0${l}` : l;
    return /* @__PURE__ */ new Date(`2017-${s}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const l = t === "long" ? "LLLL" : "LLL";
      return n.map((s, d) => {
        const c = Mt(it(s, "UTC"), l, { locale: e });
        return {
          text: c.charAt(0).toUpperCase() + c.substring(1),
          value: d
        };
      });
    } catch {
    }
  const r = new Intl.DateTimeFormat(a, { month: t, timeZone: "UTC" });
  return n.map((l, s) => {
    const d = r.format(l);
    return {
      text: d.charAt(0).toUpperCase() + d.substring(1),
      value: s
    };
  });
}, ys = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ue = (e) => {
  const a = m(e);
  return a != null && a.$el ? a == null ? void 0 : a.$el : a;
}, gs = (e) => ({ type: "dot", ...e ?? {} }), Mr = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Mn = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ke = (e) => e, zn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Wn = (e) => e === null, Tr = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, bs = (e) => {
  const a = [], t = (n) => n.filter((r) => r);
  for (let n = 0; n < e.length; n += 3) {
    const r = [e[n], e[n + 1], e[n + 2]];
    a.push(t(r));
  }
  return a;
}, wa = (e, a, t) => {
  const n = t != null, r = a != null;
  if (!n && !r) return !1;
  const l = +t, s = +a;
  return n && r ? +e > l || +e < s : n ? +e > l : r ? +e < s : !1;
}, oa = (e, a) => bs(e).map((t) => t.map((n) => {
  const { active: r, disabled: l, isBetween: s, highlighted: d } = a(n);
  return {
    ...n,
    active: r,
    disabled: l,
    className: {
      dp__overlay_cell_active: r,
      dp__overlay_cell: !r,
      dp__overlay_cell_disabled: l,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: l && r,
      dp__cell_in_between: s,
      "dp--highlighted": d
    }
  };
})), Yt = (e, a, t = !1) => {
  e && a.allowStopPropagation && (t && e.stopImmediatePropagation(), e.stopPropagation());
}, ws = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function _s(e, a) {
  let t = [...document.querySelectorAll(ws())];
  t = t.filter((r) => !e.contains(r) || r.hasAttribute("data-datepicker-instance"));
  const n = t.indexOf(e);
  if (n >= 0 && (a ? n - 1 >= 0 : n + 1 <= t.length))
    return t[n + (a ? -1 : 1)];
}
const ks = (e, a) => e == null ? void 0 : e.querySelector(`[data-dp-element="${a}"]`), Pr = (e, a) => new Intl.NumberFormat(a, { useGrouping: !1, style: "decimal" }).format(e), Tn = (e) => Mt(e, "dd-MM-yyyy"), Qa = (e) => Array.isArray(e), Sa = (e, a) => a.get(Tn(e)), xs = (e, a) => e ? a ? a instanceof Map ? !!Sa(e, a) : a(G(e)) : !1 : !0, lt = (e, a, t = !1) => {
  if (e.key === Ee.enter || e.key === Ee.space)
    return t && e.preventDefault(), a();
}, jn = (e, a, t, n, r, l) => {
  const s = un(e, a.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: l });
  return ha(s) && sr(s) ? n || r ? s : Ne(s, {
    hours: +t.hours,
    minutes: +(t == null ? void 0 : t.minutes),
    seconds: +(t == null ? void 0 : t.seconds),
    milliseconds: 0
  }) : null;
}, Ds = (e, a, t, n, r, l) => {
  const s = Array.isArray(t) ? t[0] : t;
  if (typeof a == "string")
    return jn(e, a, s, n, r, l);
  if (Array.isArray(a)) {
    let d = null;
    for (const c of a)
      if (d = jn(e, c, s, n, r, l), d)
        break;
    return d;
  }
  return typeof a == "function" ? a(e) : null;
}, G = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Ms = (e, a, t) => {
  if (a) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), l = e.getDate().toString().padStart(2, "0"), s = e.getHours().toString().padStart(2, "0"), d = e.getMinutes().toString().padStart(2, "0"), c = t ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${r}-${l}T${s}:${d}:${c}.000Z`;
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, nt = (e, a) => {
  const t = G(JSON.parse(JSON.stringify(e))), n = Ne(t, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return a ? yl(n) : n;
}, It = (e, a, t, n) => {
  let r = e ? G(e) : G();
  return (a || a === 0) && (r = us(r, +a)), (t || t === 0) && (r = ds(r, +t)), (n || n === 0) && (r = _r(r, +n)), wr(r, 0);
}, Be = (e, a) => !e || !a ? !1 : ba(nt(e), nt(a)), Te = (e, a) => !e || !a ? !1 : ea(nt(e), nt(a)), qe = (e, a) => !e || !a ? !1 : ra(nt(e), nt(a)), Na = (e, a, t) => e != null && e[0] && e != null && e[1] ? qe(t, e[0]) && Be(t, e[1]) : e != null && e[0] && a ? qe(t, e[0]) && Be(t, a) || Be(t, e[0]) && qe(t, a) : !1, yt = (e) => {
  const a = Ne(new Date(e), { date: 1 });
  return nt(a);
}, Ga = (e, a, t) => a && (t || t === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((n) => n === a ? [n, t] : [n, isNaN(+e[n]) ? void 0 : +e[n]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, jt = (e) => ({
  hours: $t(e),
  minutes: Et(e),
  seconds: na(e)
}), Or = (e, a) => {
  if (a) {
    const t = ye(G(a));
    if (t > e) return 12;
    if (t === e) return De(G(a));
  }
}, $r = (e, a) => {
  if (a) {
    const t = ye(G(a));
    return t < e ? -1 : t === e ? De(G(a)) : void 0;
  }
}, sa = (e) => {
  if (e) return ye(G(e));
}, Ar = (e, a) => {
  const t = qe(e, a) ? a : e, n = qe(a, e) ? a : e;
  return ir({ start: t, end: n });
}, Ts = (e) => {
  const a = gt(e, 1);
  return { month: De(a), year: ye(a) };
}, Tt = (e, a) => {
  const t = bt(e, { weekStartsOn: +a }), n = dr(e, { weekStartsOn: +a });
  return [t, n];
}, Sr = (e, a) => {
  const t = {
    hours: $t(G()),
    minutes: Et(G()),
    seconds: a ? na(G()) : 0
  };
  return Object.assign(t, e);
}, Nt = (e, a, t) => [Ne(G(e), { date: 1 }), Ne(G(), { month: a, year: t, date: 1 })], Pt = (e, a, t) => {
  let n = e ? G(e) : G();
  return (a || a === 0) && (n = br(n, a)), t && (n = Dt(n, t)), n;
}, Cr = (e, a, t, n, r) => {
  if (!n || r && !a || !r && !t) return !1;
  const l = r ? gt(e, 1) : la(e, 1), s = [De(l), ye(l)];
  return r ? !Os(...s, a) : !Ps(...s, t);
}, Ps = (e, a, t) => Be(...Nt(t, e, a)) || Te(...Nt(t, e, a)), Os = (e, a, t) => qe(...Nt(t, e, a)) || Te(...Nt(t, e, a)), Rr = (e, a, t, n, r, l, s) => {
  if (typeof a == "function" && !s) return a(e);
  const d = t ? { locale: t } : void 0;
  return Array.isArray(e) ? `${Mt(e[0], l, d)}${r && !e[1] ? "" : n}${e[1] ? Mt(e[1], l, d) : ""}` : Mt(e, l, d);
}, Xt = (e) => {
  if (e) return null;
  throw new Error(Mn.prop("partial-range"));
}, Pa = (e, a) => {
  if (a) return e();
  throw new Error(Mn.prop("range"));
}, cn = (e) => Array.isArray(e) ? ha(e[0]) && (e[1] ? ha(e[1]) : !0) : e ? ha(e) : !1, $s = (e, a) => Ne(a ?? G(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Xa = (e, a, t, n) => {
  if (!e) return !0;
  if (n) {
    const r = t === "max" ? ba(e, a) : ra(e, a), l = { seconds: 0, milliseconds: 0 };
    return r || ea(Ne(e, l), Ne(a, l));
  }
  return t === "max" ? e.getTime() <= a.getTime() : e.getTime() >= a.getTime();
}, Ja = (e, a, t) => e ? $s(e, a) : G(t ?? a), Un = (e, a, t, n, r) => {
  if (Array.isArray(n)) {
    const s = Ja(e, n[0], a), d = Ja(e, n[1], a);
    return Xa(n[0], s, t, !!a) && Xa(n[1], d, t, !!a) && r;
  }
  const l = Ja(e, n, a);
  return Xa(n, l, t, !!a) && r;
}, Za = (e) => Ne(G(), jt(e)), As = (e, a) => e instanceof Map ? Array.from(e.values()).filter((t) => ye(G(t)) === a).map((t) => De(t)) : [], Nr = (e, a, t) => typeof e == "function" ? e({ month: a, year: t }) : !!e.months.find((n) => n.month === a && n.year === t), Pn = (e, a) => typeof e == "function" ? e(a) : e.years.includes(a), Yr = (e) => Mt(e, "yyyy-MM-dd"), ma = _a({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Ir = () => {
  const e = (t) => {
    ma.menuFocused = t;
  }, a = (t) => {
    ma.shiftKeyInMenu !== t && (ma.shiftKeyInMenu = t);
  };
  return {
    control: K(() => ({ shiftKeyInMenu: ma.shiftKeyInMenu, menuFocused: ma.menuFocused })),
    setMenuFocused: e,
    setShiftKey: a
  };
}, Ye = _a({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), en = Z(null), Oa = Z(!1), tn = Z(!1), an = Z(!1), nn = Z(!1), Ge = Z(0), He = Z(0), Lt = () => {
  const e = K(() => Oa.value ? [...Ye.selectionGrid, Ye.actionRow].filter((g) => g.length) : tn.value ? [
    ...Ye.timePicker[0],
    ...Ye.timePicker[1],
    nn.value ? [] : [en.value],
    Ye.actionRow
  ].filter((g) => g.length) : an.value ? [...Ye.monthPicker, Ye.actionRow] : [Ye.monthYear, ...Ye.calendar, Ye.time, Ye.actionRow].filter((g) => g.length)), a = (g) => {
    Ge.value = g ? Ge.value + 1 : Ge.value - 1;
    let b = null;
    e.value[He.value] && (b = e.value[He.value][Ge.value]), !b && e.value[He.value + (g ? 1 : -1)] ? (He.value = He.value + (g ? 1 : -1), Ge.value = g ? 0 : e.value[He.value].length - 1) : b || (Ge.value = g ? Ge.value - 1 : Ge.value + 1);
  }, t = (g) => {
    He.value === 0 && !g || He.value === e.value.length && g || (He.value = g ? He.value + 1 : He.value - 1, e.value[He.value] ? e.value[He.value] && !e.value[He.value][Ge.value] && Ge.value !== 0 && (Ge.value = e.value[He.value].length - 1) : He.value = g ? He.value - 1 : He.value + 1);
  }, n = (g) => {
    let b = null;
    e.value[He.value] && (b = e.value[He.value][Ge.value]), b ? b.focus({ preventScroll: !Oa.value }) : Ge.value = g ? Ge.value - 1 : Ge.value + 1;
  }, r = () => {
    a(!0), n(!0);
  }, l = () => {
    a(!1), n(!1);
  }, s = () => {
    t(!1), n(!0);
  }, d = () => {
    t(!0), n(!0);
  }, c = (g, b) => {
    Ye[b] = g;
  }, $ = (g, b) => {
    Ye[b] = g;
  }, h = () => {
    Ge.value = 0, He.value = 0;
  };
  return {
    buildMatrix: c,
    buildMultiLevelMatrix: $,
    setTimePickerBackRef: (g) => {
      en.value = g;
    },
    setSelectionGrid: (g) => {
      Oa.value = g, h(), g || (Ye.selectionGrid = []);
    },
    setTimePicker: (g, b = !1) => {
      tn.value = g, nn.value = b, h(), g || (Ye.timePicker[0] = [], Ye.timePicker[1] = []);
    },
    setTimePickerElements: (g, b = 0) => {
      Ye.timePicker[b] = g;
    },
    arrowRight: r,
    arrowLeft: l,
    arrowUp: s,
    arrowDown: d,
    clearArrowNav: () => {
      Ye.monthYear = [], Ye.calendar = [], Ye.time = [], Ye.actionRow = [], Ye.selectionGrid = [], Ye.timePicker[0] = [], Ye.timePicker[1] = [], Oa.value = !1, tn.value = !1, nn.value = !1, an.value = !1, h(), en.value = null;
    },
    setMonthPicker: (g) => {
      an.value = g, h();
    },
    refSets: Ye
    // exposed for testing
  };
}, Kn = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Ss = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (a) => `Increment ${a}`,
  decrementValue: (a) => `Decrement ${a}`,
  openTpOverlay: (a) => `Open ${a} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), Qn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Cs = (e) => {
  const a = typeof e == "object" && e, t = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...t, count: Qn(!1) };
  const n = a ? e : {}, r = a ? n.count ?? !0 : e, l = Qn(r);
  return Object.assign(t, n, { count: l });
}, Rs = (e, a, t) => e || (typeof t == "string" ? t : a), Ns = (e) => typeof e == "boolean" ? e ? Kn({}) : !1 : Kn(e), Ys = (e) => {
  const a = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...a, ...e ?? {}, enabled: !0 } : { ...a, enabled: e };
}, Is = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Es = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Ls = (e) => {
  const a = { input: !1 };
  return typeof e == "object" ? { ...a, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...a
  };
}, Fs = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, arrowLeft: void 0, keepViewOnOffsetClick: !1, timeArrowHoldThreshold: 0, ...e ?? {} }), Bs = (e) => {
  const a = {
    dates: Array.isArray(e) ? e.map((t) => G(t)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...a, ...e ?? {} };
}, Vs = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Hs = (e, a) => typeof e == "object" ? { enabled: !0, ...{
  noDisabledRange: !1,
  showLastInRange: !0,
  minMaxRawRange: !1,
  partialRange: !0,
  disableTimeRangeValidation: !1,
  maxRange: void 0,
  minRange: void 0,
  autoRange: void 0,
  fixedStart: !1,
  fixedEnd: !1
}, ...e } : {
  enabled: e,
  noDisabledRange: a.noDisabledRange,
  showLastInRange: a.showLastInRange,
  minMaxRawRange: a.minMaxRawRange,
  partialRange: a.partialRange,
  disableTimeRangeValidation: a.disableTimeRangeValidation,
  maxRange: a.maxRange,
  minRange: a.minRange,
  autoRange: a.autoRange,
  fixedStart: a.fixedStart,
  fixedEnd: a.fixedEnd
}, qs = (e, a) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: a, convertModel: !0 } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: a ?? e.emitTimezone,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: a }, rn = (e, a, t) => new Map(
  e.map((n) => {
    const r = xn(n, a, t);
    return [Tn(r), r];
  })
), zs = (e, a) => e.length ? new Map(
  e.map((t) => {
    const n = xn(t.date, a);
    return [Tn(n), t];
  })
) : null, Ws = (e) => {
  var a;
  return {
    minDate: dn(e.minDate, e.timezone, e.isSpecific),
    maxDate: dn(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: Qa(e.disabledDates) ? rn(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: Qa(e.allowedDates) ? rn(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && Qa((a = e.highlight) == null ? void 0 : a.dates) ? rn(e.highlight.dates, e.timezone) : e.highlight,
    markers: zs(e.markers, e.timezone)
  };
}, js = (e, a) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: +a } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Us = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((a) => {
      const t = a, n = e[t], r = typeof e[t] == "string" ? { [n]: !0 } : Object.fromEntries(n.map((l) => [l, !0]));
      return [a, r];
    })
  )
}), Fe = (e) => {
  const a = () => {
    const E = e.enableSeconds ? ":ss" : "", _ = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${_}${E}` : `hh${_}${E} aa`;
  }, t = () => {
    var E;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? `${((E = Y.value) == null ? void 0 : E.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy";
  }, n = (E) => Sr(E, e.enableSeconds), r = () => z.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [n(e.startTime[0]), n(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? n(e.startTime) : null, l = K(() => Cs(e.multiCalendars)), s = K(() => r()), d = K(() => Ss(e.ariaLabels)), c = K(() => Is(e.filters)), $ = K(() => Ns(e.transitions)), h = K(() => Es(e.actionRow)), g = K(
    () => Rs(e.previewFormat, e.format, t())
  ), b = K(() => Ys(e.textInput)), w = K(() => Ls(e.inline)), S = K(() => Fs(e.config)), M = K(() => Bs(e.highlight)), Y = K(() => Vs(e.weekNumbers)), U = K(() => qs(e.timezone, e.emitTimezone)), Q = K(() => js(e.multiDates, e.multiDatesLimit)), T = K(
    () => Ws({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: M.value,
      markers: e.markers,
      timezone: U.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), z = K(
    () => Hs(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  ), te = K(() => Us(e.ui));
  return {
    defaultedTransitions: $,
    defaultedMultiCalendars: l,
    defaultedStartTime: s,
    defaultedAriaLabels: d,
    defaultedFilters: c,
    defaultedActionRow: h,
    defaultedPreviewFormat: g,
    defaultedTextInput: b,
    defaultedInline: w,
    defaultedConfig: S,
    defaultedHighlight: M,
    defaultedWeekNumbers: Y,
    defaultedRange: z,
    propDates: T,
    defaultedTz: U,
    defaultedMultiDates: Q,
    defaultedUI: te,
    getDefaultPattern: t,
    getDefaultStartTime: r
  };
}, Ks = (e, a, t) => {
  const n = Z(), { defaultedTextInput: r, defaultedRange: l, defaultedTz: s, defaultedMultiDates: d, getDefaultPattern: c } = Fe(a), $ = Z(""), h = ya(a, "format"), g = ya(a, "formatLocale");
  ot(
    n,
    () => {
      typeof a.onInternalModelChange == "function" && e("internal-model-change", n.value, V(!0));
    },
    { deep: !0 }
  ), ot(l, (f, ie) => {
    f.enabled !== ie.enabled && (n.value = null);
  }), ot(h, () => {
    k();
  });
  const b = (f) => s.value.timezone && s.value.convertModel ? it(f, s.value.timezone) : f, w = (f) => {
    if (s.value.timezone && s.value.convertModel) {
      const ie = vs(s.value.timezone);
      return dl(f, ie);
    }
    return f;
  }, S = (f, ie, ke = !1) => Rr(
    f,
    a.format,
    a.formatLocale,
    r.value.rangeSeparator,
    a.modelAuto,
    ie ?? c(),
    ke
  ), M = (f) => f ? a.modelType ? J(f) : {
    hours: $t(f),
    minutes: Et(f),
    seconds: a.enableSeconds ? na(f) : 0
  } : null, Y = (f) => a.modelType ? J(f) : { month: De(f), year: ye(f) }, U = (f) => Array.isArray(f) ? d.value.enabled ? f.map((ie) => Q(ie, Dt(G(), ie))) : Pa(
    () => [
      Dt(G(), f[0]),
      f[1] ? Dt(G(), f[1]) : Xt(l.value.partialRange)
    ],
    l.value.enabled
  ) : Dt(G(), +f), Q = (f, ie) => (typeof f == "string" || typeof f == "number") && a.modelType ? C(f) : ie, T = (f) => Array.isArray(f) ? [
    Q(
      f[0],
      It(null, +f[0].hours, +f[0].minutes, f[0].seconds)
    ),
    Q(
      f[1],
      It(null, +f[1].hours, +f[1].minutes, f[1].seconds)
    )
  ] : Q(f, It(null, f.hours, f.minutes, f.seconds)), z = (f) => {
    const ie = Ne(G(), { date: 1 });
    return Array.isArray(f) ? d.value.enabled ? f.map((ke) => Q(ke, Pt(ie, +ke.month, +ke.year))) : Pa(
      () => [
        Q(f[0], Pt(ie, +f[0].month, +f[0].year)),
        Q(
          f[1],
          f[1] ? Pt(ie, +f[1].month, +f[1].year) : Xt(l.value.partialRange)
        )
      ],
      l.value.enabled
    ) : Q(f, Pt(ie, +f.month, +f.year));
  }, te = (f) => {
    if (Array.isArray(f))
      return f.map((ie) => C(ie));
    throw new Error(Mn.dateArr("multi-dates"));
  }, E = (f) => {
    if (Array.isArray(f) && l.value.enabled) {
      const ie = f[0], ke = f[1];
      return [
        G(Array.isArray(ie) ? ie[0] : null),
        G(Array.isArray(ke) ? ke[0] : null)
      ];
    }
    return G(f[0]);
  }, _ = (f) => a.modelAuto ? Array.isArray(f) ? [C(f[0]), C(f[1])] : a.autoApply ? [C(f)] : [C(f), null] : Array.isArray(f) ? Pa(
    () => f[1] ? [
      C(f[0]),
      f[1] ? C(f[1]) : Xt(l.value.partialRange)
    ] : [C(f[0])],
    l.value.enabled
  ) : C(f), W = () => {
    Array.isArray(n.value) && l.value.enabled && n.value.length === 1 && n.value.push(Xt(l.value.partialRange));
  }, j = () => {
    const f = n.value;
    return [
      J(f[0]),
      f[1] ? J(f[1]) : Xt(l.value.partialRange)
    ];
  }, L = () => n.value[1] ? j() : J(Ke(n.value[0])), le = () => (n.value || []).map((f) => J(f)), ue = (f = !1) => (f || W(), a.modelAuto ? L() : d.value.enabled ? le() : Array.isArray(n.value) ? Pa(() => j(), l.value.enabled) : J(Ke(n.value))), me = (f) => !f || Array.isArray(f) && !f.length ? null : a.timePicker ? T(Ke(f)) : a.monthPicker ? z(Ke(f)) : a.yearPicker ? U(Ke(f)) : d.value.enabled ? te(Ke(f)) : a.weekPicker ? E(Ke(f)) : _(Ke(f)), I = (f) => {
    const ie = me(f);
    cn(Ke(ie)) ? (n.value = Ke(ie), k()) : (n.value = null, $.value = "");
  }, v = () => {
    const f = (ie) => Mt(ie, r.value.format);
    return `${f(n.value[0])} ${r.value.rangeSeparator} ${n.value[1] ? f(n.value[1]) : ""}`;
  }, A = () => t.value && n.value ? Array.isArray(n.value) ? v() : Mt(n.value, r.value.format) : S(n.value), u = () => n.value ? d.value.enabled ? n.value.map((f) => S(f)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? A() : S(n.value) : "", k = () => {
    !a.format || typeof a.format == "string" || r.value.enabled && typeof r.value.format == "string" ? $.value = u() : $.value = a.format(n.value);
  }, C = (f) => {
    if (a.utc) {
      const ie = new Date(f);
      return a.utc === "preserve" ? new Date(ie.getTime() + ie.getTimezoneOffset() * 6e4) : ie;
    }
    return a.modelType ? ms.includes(a.modelType) ? b(new Date(f)) : a.modelType === "format" && (typeof a.format == "string" || !a.format) ? b(
      un(f, c(), /* @__PURE__ */ new Date(), { locale: g.value })
    ) : b(
      un(f, a.modelType, /* @__PURE__ */ new Date(), { locale: g.value })
    ) : b(new Date(f));
  }, J = (f) => f ? a.utc ? Ms(f, a.utc === "preserve", a.enableSeconds) : a.modelType ? a.modelType === "timestamp" ? +w(f) : a.modelType === "iso" ? w(f).toISOString() : a.modelType === "format" && (typeof a.format == "string" || !a.format) ? S(w(f)) : S(w(f), a.modelType, !0) : w(f) : "", pe = (f, ie = !1, ke = !1) => {
    if (ke) return f;
    if (e("update:model-value", f), s.value.emitTimezone && ie) {
      const F = Array.isArray(f) ? f.map((we) => it(Ke(we), s.value.emitTimezone)) : it(Ke(f), s.value.emitTimezone);
      e("update:model-timezone-value", F);
    }
  }, i = (f) => Array.isArray(n.value) ? d.value.enabled ? n.value.map((ie) => f(ie)) : [
    f(n.value[0]),
    n.value[1] ? f(n.value[1]) : Xt(l.value.partialRange)
  ] : f(Ke(n.value)), O = () => {
    if (Array.isArray(n.value)) {
      const f = Tt(n.value[0], a.weekStart), ie = n.value[1] ? Tt(n.value[1], a.weekStart) : [];
      return [f.map((ke) => G(ke)), ie.map((ke) => G(ke))];
    }
    return Tt(n.value, a.weekStart).map((f) => G(f));
  }, o = (f, ie) => pe(Ke(i(f)), !1, ie), R = (f) => {
    const ie = O();
    return f ? ie : e("update:model-value", O());
  }, V = (f = !1) => (f || k(), a.monthPicker ? o(Y, f) : a.timePicker ? o(M, f) : a.yearPicker ? o(ye, f) : a.weekPicker ? R(f) : pe(ue(f), !0, f));
  return {
    inputValue: $,
    internalModelValue: n,
    checkBeforeEmit: () => n.value ? l.value.enabled ? l.value.partialRange ? n.value.length >= 1 : n.value.length === 2 : !!n.value : !1,
    parseExternalModelValue: I,
    formatInputValue: k,
    emitModelValue: V
  };
}, Qs = (e, a) => {
  const { defaultedFilters: t, propDates: n } = Fe(e), { validateMonthYearInRange: r } = Ft(e), l = (h, g) => {
    let b = h;
    return t.value.months.includes(De(b)) ? (b = g ? gt(h, 1) : la(h, 1), l(b, g)) : b;
  }, s = (h, g) => {
    let b = h;
    return t.value.years.includes(ye(b)) ? (b = g ? pn(h, 1) : kr(h, 1), s(b, g)) : b;
  }, d = (h, g = !1) => {
    const b = Ne(G(), { month: e.month, year: e.year });
    let w = h ? gt(b, 1) : la(b, 1);
    e.disableYearSelect && (w = Dt(w, e.year));
    let S = De(w), M = ye(w);
    t.value.months.includes(S) && (w = l(w, h), S = De(w), M = ye(w)), t.value.years.includes(M) && (w = s(w, h), M = ye(w)), r(S, M, h, e.preventMinMaxNavigation) && c(S, M, g);
  }, c = (h, g, b) => {
    a("update-month-year", { month: h, year: g, fromNav: b });
  }, $ = K(() => (h) => Cr(
    Ne(G(), { month: e.month, year: e.year }),
    n.value.maxDate,
    n.value.minDate,
    e.preventMinMaxNavigation,
    h
  ));
  return { handleMonthYearChange: d, isDisabled: $, updateMonthYear: c };
}, Ya = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, wt = {
  ...Ya,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 }
}, Gs = ["title"], Xs = ["disabled"], Js = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...wt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: a }) {
    const t = a, n = e, {
      defaultedActionRow: r,
      defaultedPreviewFormat: l,
      defaultedMultiCalendars: s,
      defaultedTextInput: d,
      defaultedInline: c,
      defaultedRange: $,
      defaultedMultiDates: h,
      getDefaultPattern: g
    } = Fe(n), { isTimeValid: b, isMonthValid: w } = Ft(n), { buildMatrix: S } = Lt(), M = Z(null), Y = Z(null), U = Z(!1), Q = Z({}), T = Z(null), z = Z(null);
    Ze(() => {
      n.arrowNavigation && S([Ue(M), Ue(Y)], "actionRow"), te(), window.addEventListener("resize", te);
    }), Ra(() => {
      window.removeEventListener("resize", te);
    });
    const te = () => {
      U.value = !1, setTimeout(() => {
        var v, A;
        const u = (v = T.value) == null ? void 0 : v.getBoundingClientRect(), k = (A = z.value) == null ? void 0 : A.getBoundingClientRect();
        u && k && (Q.value.maxWidth = `${k.width - u.width - 20}px`), U.value = !0;
      }, 0);
    }, E = K(() => $.value.enabled && !$.value.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), _ = K(
      () => !b.value(n.internalModelValue) || !w.value(n.internalModelValue) || !E.value
    ), W = () => {
      const v = l.value;
      return n.timePicker || n.monthPicker, v(Ke(n.internalModelValue));
    }, j = () => {
      const v = n.internalModelValue;
      return s.value.count > 0 ? `${L(v[0])} - ${L(v[1])}` : [L(v[0]), L(v[1])];
    }, L = (v) => Rr(
      v,
      l.value,
      n.formatLocale,
      d.value.rangeSeparator,
      n.modelAuto,
      g()
    ), le = K(() => !n.internalModelValue || !n.menuMount ? "" : typeof l.value == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? j() : h.value.enabled ? n.internalModelValue.map((v) => `${L(v)}`) : n.modelAuto ? `${L(n.internalModelValue[0])}` : `${L(n.internalModelValue[0])} -` : L(n.internalModelValue) : W()), ue = () => h.value.enabled ? "; " : " - ", me = K(
      () => Array.isArray(le.value) ? le.value.join(ue()) : le.value
    ), I = () => {
      b.value(n.internalModelValue) && w.value(n.internalModelValue) && E.value ? t("select-date") : t("invalid-select");
    };
    return (v, A) => (y(), D("div", {
      ref_key: "actionRowRef",
      ref: z,
      class: "dp__action_row"
    }, [
      v.$slots["action-row"] ? se(v.$slots, "action-row", Re(je({ key: 0 }, {
        internalModelValue: v.internalModelValue,
        disabled: _.value,
        selectDate: () => v.$emit("select-date"),
        closePicker: () => v.$emit("close-picker")
      }))) : (y(), D(be, { key: 1 }, [
        m(r).showPreview ? (y(), D("div", {
          key: 0,
          class: "dp__selection_preview",
          title: me.value,
          style: mt(Q.value)
        }, [
          v.$slots["action-preview"] && U.value ? se(v.$slots, "action-preview", {
            key: 0,
            value: v.internalModelValue
          }) : H("", !0),
          !v.$slots["action-preview"] && U.value ? (y(), D(be, { key: 1 }, [
            at(Pe(me.value), 1)
          ], 64)) : H("", !0)
        ], 12, Gs)) : H("", !0),
        re("div", {
          ref_key: "actionBtnContainer",
          ref: T,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          v.$slots["action-buttons"] ? se(v.$slots, "action-buttons", {
            key: 0,
            value: v.internalModelValue
          }) : H("", !0),
          v.$slots["action-buttons"] ? H("", !0) : (y(), D(be, { key: 1 }, [
            !m(c).enabled && m(r).showCancel ? (y(), D("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: M,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: A[0] || (A[0] = (u) => v.$emit("close-picker")),
              onKeydown: A[1] || (A[1] = (u) => m(lt)(u, () => v.$emit("close-picker")))
            }, Pe(v.cancelText), 545)) : H("", !0),
            m(r).showNow ? (y(), D("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: A[2] || (A[2] = (u) => v.$emit("select-now")),
              onKeydown: A[3] || (A[3] = (u) => m(lt)(u, () => v.$emit("select-now")))
            }, Pe(v.nowButtonLabel), 33)) : H("", !0),
            m(r).showSelect ? (y(), D("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: Y,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: _.value,
              "data-test": "select-button",
              onKeydown: A[4] || (A[4] = (u) => m(lt)(u, () => I())),
              onClick: I
            }, Pe(v.selectText), 41, Xs)) : H("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Zs = { class: "dp__selection_grid_header" }, ei = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], ti = ["aria-label"], ka = /* @__PURE__ */ Qe({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: a, emit: t }) {
    const { setSelectionGrid: n, buildMultiLevelMatrix: r, setMonthPicker: l } = Lt(), s = t, d = e, { defaultedAriaLabels: c, defaultedTextInput: $, defaultedConfig: h } = Fe(
      d
    ), { hideNavigationButtons: g } = La(), b = Z(!1), w = Z(null), S = Z(null), M = Z([]), Y = Z(), U = Z(null), Q = Z(0), T = Z(null);
    Kr(() => {
      w.value = null;
    }), Ze(() => {
      pt().then(() => le()), d.noOverlayFocus || te(), z(!0);
    }), Ra(() => z(!1));
    const z = (i) => {
      var O;
      d.arrowNavigation && ((O = d.headerRefs) != null && O.length ? l(i) : n(i));
    }, te = () => {
      var i;
      const O = Ue(S);
      O && ($.value.enabled || (w.value ? (i = w.value) == null || i.focus({ preventScroll: !0 }) : O.focus({ preventScroll: !0 })), b.value = O.clientHeight < O.scrollHeight);
    }, E = K(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !d.useRelative,
        "dp--overlay-relative": d.useRelative
      })
    ), _ = K(
      () => d.useRelative ? { height: `${d.height}px`, width: "260px" } : void 0
    ), W = K(() => ({
      dp__overlay_col: !0
    })), j = K(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: b.value,
        dp__button_bottom: d.isLast
      })
    ), L = K(() => {
      var i, O;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((i = d.items) == null ? void 0 : i.length) <= 6,
        dp__container_block: ((O = d.items) == null ? void 0 : O.length) > 6
      };
    });
    ot(
      () => d.items,
      () => le(!1),
      { deep: !0 }
    );
    const le = (i = !0) => {
      pt().then(() => {
        const O = Ue(w), o = Ue(S), R = Ue(U), V = Ue(T), f = R ? R.getBoundingClientRect().height : 0;
        o && (o.getBoundingClientRect().height ? Q.value = o.getBoundingClientRect().height - f : Q.value = h.value.modeHeight - f), O && V && i && (V.scrollTop = O.offsetTop - V.offsetTop - (Q.value / 2 - O.getBoundingClientRect().height) - f);
      });
    }, ue = (i) => {
      i.disabled || s("selected", i.value);
    }, me = () => {
      s("toggle"), s("reset-flow");
    }, I = () => {
      d.escClose && me();
    }, v = (i, O, o, R) => {
      i && ((O.active || O.value === d.focusValue) && (w.value = i), d.arrowNavigation && (Array.isArray(M.value[o]) ? M.value[o][R] = i : M.value[o] = [i], A()));
    }, A = () => {
      var i, O;
      const o = (i = d.headerRefs) != null && i.length ? [d.headerRefs].concat(M.value) : M.value.concat([d.skipButtonRef ? [] : [U.value]]);
      r(Ke(o), (O = d.headerRefs) != null && O.length ? "monthPicker" : "selectionGrid");
    }, u = (i) => {
      d.arrowNavigation || Yt(i, h.value, !0);
    }, k = (i) => {
      Y.value = i, s("hover-value", i);
    }, C = () => {
      if (me(), !d.isLast) {
        const i = ks(d.menuWrapRef ?? null, "action-row");
        if (i) {
          const O = Tr(i);
          O == null || O.focus();
        }
      }
    }, J = (i) => {
      switch (i.key) {
        case Ee.esc:
          return I();
        case Ee.arrowLeft:
          return u(i);
        case Ee.arrowRight:
          return u(i);
        case Ee.arrowUp:
          return u(i);
        case Ee.arrowDown:
          return u(i);
        default:
          return;
      }
    }, pe = (i) => {
      if (i.key === Ee.enter) return me();
      if (i.key === Ee.tab) return C();
    };
    return a({ focusGrid: te }), (i, O) => {
      var o;
      return y(), D("div", {
        ref_key: "gridWrapRef",
        ref: S,
        class: ge(E.value),
        style: mt(_.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: J,
        onClick: O[0] || (O[0] = Ot(() => {
        }, ["prevent"]))
      }, [
        re("div", {
          ref_key: "containerRef",
          ref: T,
          class: ge(L.value),
          role: "grid",
          style: mt({ "--dp-overlay-height": `${Q.value}px` })
        }, [
          re("div", Zs, [
            se(i.$slots, "header")
          ]),
          i.$slots.overlay ? se(i.$slots, "overlay", { key: 0 }) : (y(!0), D(be, { key: 1 }, $e(i.items, (R, V) => (y(), D("div", {
            key: V,
            class: ge(["dp__overlay_row", { dp__flex_row: i.items.length >= 3 }]),
            role: "row"
          }, [
            (y(!0), D(be, null, $e(R, (f, ie) => (y(), D("div", {
              key: f.value,
              ref_for: !0,
              ref: (ke) => v(ke, f, V, ie),
              role: "gridcell",
              class: ge(W.value),
              "aria-selected": f.active || void 0,
              "aria-disabled": f.disabled || void 0,
              tabindex: "0",
              "data-test": f.text,
              onClick: Ot((ke) => ue(f), ["prevent"]),
              onKeydown: (ke) => m(lt)(ke, () => ue(f), !0),
              onMouseover: (ke) => k(f.value)
            }, [
              re("div", {
                class: ge(f.className)
              }, [
                i.$slots.item ? se(i.$slots, "item", {
                  key: 0,
                  item: f
                }) : H("", !0),
                i.$slots.item ? H("", !0) : (y(), D(be, { key: 1 }, [
                  at(Pe(f.text), 1)
                ], 64))
              ], 2)
            ], 42, ei))), 128))
          ], 2))), 128))
        ], 6),
        i.$slots["button-icon"] ? dt((y(), D("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: U,
          type: "button",
          "aria-label": (o = m(c)) == null ? void 0 : o.toggleOverlay,
          class: ge(j.value),
          tabindex: "0",
          onClick: me,
          onKeydown: pe
        }, [
          se(i.$slots, "button-icon")
        ], 42, ti)), [
          [ta, !m(g)(i.hideNavigation, i.type)]
        ]) : H("", !0)
      ], 38);
    };
  }
}), Ia = /* @__PURE__ */ Qe({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const a = e, t = K(
      () => a.multiCalendars > 0 ? [...Array(a.multiCalendars).keys()] : [0]
    ), n = K(() => ({
      dp__instance_calendar: a.multiCalendars > 0
    }));
    return (r, l) => (y(), D("div", {
      class: ge({
        dp__menu_inner: !r.stretch,
        "dp--menu--inner-stretched": r.stretch,
        dp__flex_display: r.multiCalendars > 0,
        "dp--flex-display-collapsed": r.collapse
      })
    }, [
      (y(!0), D(be, null, $e(t.value, (s, d) => (y(), D("div", {
        key: s,
        class: ge(n.value)
      }, [
        se(r.$slots, "default", {
          instance: s,
          index: d
        })
      ], 2))), 128))
    ], 2));
  }
}), ai = ["aria-label", "aria-disabled"], fa = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: a }) {
    const t = a, n = Z(null);
    return Ze(() => t("set-ref", n)), (r, l) => (y(), D("button", {
      ref_key: "elRef",
      ref: n,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": r.ariaLabel,
      "aria-disabled": r.disabled || void 0,
      onClick: l[0] || (l[0] = (s) => r.$emit("activate")),
      onKeydown: l[1] || (l[1] = (s) => m(lt)(s, () => r.$emit("activate"), !0))
    }, [
      re("span", {
        class: ge(["dp__inner_nav", { dp__inner_nav_disabled: r.disabled }])
      }, [
        se(r.$slots, "default")
      ], 2)
    ], 40, ai));
  }
}), ni = { class: "dp--year-mode-picker" }, ri = ["aria-label", "data-test"], Er = /* @__PURE__ */ Qe({
  __name: "YearModePicker",
  props: {
    ...wt,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: a }) {
    const t = a, n = e, { showRightIcon: r, showLeftIcon: l } = La(), { defaultedConfig: s, defaultedMultiCalendars: d, defaultedAriaLabels: c, defaultedTransitions: $, defaultedUI: h } = Fe(n), { showTransition: g, transitionName: b } = xa($), w = (Y = !1, U) => {
      t("toggle-year-picker", { flow: Y, show: U });
    }, S = (Y) => {
      t("year-select", Y);
    }, M = (Y = !1) => {
      t("handle-year", Y);
    };
    return (Y, U) => {
      var Q, T, z, te, E;
      return y(), D("div", ni, [
        m(l)(m(d), e.instance) ? (y(), xe(fa, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (Q = m(c)) == null ? void 0 : Q.prevYear,
          disabled: e.isDisabled(!1),
          class: ge((T = m(h)) == null ? void 0 : T.navBtnPrev),
          onActivate: U[0] || (U[0] = (_) => M(!1))
        }, {
          default: _e(() => [
            Y.$slots["arrow-left"] ? se(Y.$slots, "arrow-left", { key: 0 }) : H("", !0),
            Y.$slots["arrow-left"] ? H("", !0) : (y(), xe(m(gn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : H("", !0),
        re("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (z = m(c)) == null ? void 0 : z.openYearsOverlay,
          "data-test": `year-mode-btn-${e.instance}`,
          onClick: U[1] || (U[1] = () => w(!1)),
          onKeydown: U[2] || (U[2] = Qr(() => w(!1), ["enter"]))
        }, [
          Y.$slots.year ? se(Y.$slots, "year", {
            key: 0,
            year: e.year
          }) : H("", !0),
          Y.$slots.year ? H("", !0) : (y(), D(be, { key: 1 }, [
            at(Pe(e.year), 1)
          ], 64))
        ], 40, ri),
        m(r)(m(d), e.instance) ? (y(), xe(fa, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (te = m(c)) == null ? void 0 : te.nextYear,
          disabled: e.isDisabled(!0),
          class: ge((E = m(h)) == null ? void 0 : E.navBtnNext),
          onActivate: U[3] || (U[3] = (_) => M(!0))
        }, {
          default: _e(() => [
            Y.$slots["arrow-right"] ? se(Y.$slots, "arrow-right", { key: 0 }) : H("", !0),
            Y.$slots["arrow-right"] ? H("", !0) : (y(), xe(m(bn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : H("", !0),
        st(Kt, {
          name: m(b)(e.showYearPicker),
          css: m(g)
        }, {
          default: _e(() => [
            e.showYearPicker ? (y(), xe(ka, {
              key: 0,
              items: e.items,
              "text-input": Y.textInput,
              "esc-close": Y.escClose,
              config: Y.config,
              "is-last": Y.autoApply && !m(s).keepActionRow,
              "hide-navigation": Y.hideNavigation,
              "aria-labels": Y.ariaLabels,
              type: "year",
              onToggle: w,
              onSelected: U[4] || (U[4] = (_) => S(_))
            }, Je({
              "button-icon": _e(() => [
                Y.$slots["calendar-icon"] ? se(Y.$slots, "calendar-icon", { key: 0 }) : H("", !0),
                Y.$slots["calendar-icon"] ? H("", !0) : (y(), xe(m(ia), { key: 1 }))
              ]),
              _: 2
            }, [
              Y.$slots["year-overlay-value"] ? {
                name: "item",
                fn: _e(({ item: _ }) => [
                  se(Y.$slots, "year-overlay-value", {
                    text: _.text,
                    value: _.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : H("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), On = (e, a, t) => {
  if (a.value && Array.isArray(a.value))
    if (a.value.some((n) => Te(e, n))) {
      const n = a.value.filter((r) => !Te(r, e));
      a.value = n.length ? n : null;
    } else (t && +t > a.value.length || !t) && a.value.push(e);
  else
    a.value = [e];
}, $n = (e, a, t) => {
  let n = e.value ? e.value.slice() : [];
  return n.length === 2 && n[1] !== null && (n = []), n.length ? Be(a, n[0]) ? (n.unshift(a), t("range-start", n[0]), t("range-start", n[1])) : (n[1] = a, t("range-end", a)) : (n = [a], t("range-start", a)), n;
}, Ea = (e, a, t, n) => {
  e && (e[0] && e[1] && t && a("auto-apply"), e[0] && !e[1] && n && t && a("auto-apply"));
}, Lr = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((a) => it(G(a), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = it(G(e.value), e.timezone));
}, Fr = (e, a, t, n) => Array.isArray(a.value) && (a.value.length === 2 || a.value.length === 1 && n.value.partialRange) ? n.value.fixedStart && (qe(e, a.value[0]) || Te(e, a.value[0])) ? [a.value[0], e] : n.value.fixedEnd && (Be(e, a.value[1]) || Te(e, a.value[1])) ? [e, a.value[1]] : (t("invalid-fixed-range", e), a.value) : [], Br = ({
  multiCalendars: e,
  range: a,
  highlight: t,
  propDates: n,
  calendars: r,
  modelValue: l,
  props: s,
  filters: d,
  year: c,
  month: $,
  emit: h
}) => {
  const g = K(() => Dn(s.yearRange, s.locale, s.reverseYears)), b = Z([!1]), w = K(() => (L, le) => {
    const ue = Ne(yt(/* @__PURE__ */ new Date()), {
      month: $.value(L),
      year: c.value(L)
    }), me = le ? ur(ue) : ga(ue);
    return Cr(
      me,
      n.value.maxDate,
      n.value.minDate,
      s.preventMinMaxNavigation,
      le
    );
  }), S = () => Array.isArray(l.value) && e.value.solo && l.value[1], M = () => {
    for (let L = 0; L < e.value.count; L++)
      if (L === 0)
        r.value[L] = r.value[0];
      else if (L === e.value.count - 1 && S())
        r.value[L] = {
          month: De(l.value[1]),
          year: ye(l.value[1])
        };
      else {
        const le = Ne(G(), r.value[L - 1]);
        r.value[L] = { month: De(le), year: ye(pn(le, 1)) };
      }
  }, Y = (L) => {
    if (!L) return M();
    const le = Ne(G(), r.value[L]);
    return r.value[0].year = ye(kr(le, e.value.count - 1)), M();
  }, U = (L, le) => {
    const ue = hl(le, L);
    return a.value.showLastInRange && ue > 1 ? le : L;
  }, Q = (L) => s.focusStartDate || e.value.solo ? L[0] : L[1] ? U(L[0], L[1]) : L[0], T = () => {
    if (l.value) {
      const L = Array.isArray(l.value) ? Q(l.value) : l.value;
      r.value[0] = { month: De(L), year: ye(L) };
    }
  }, z = () => {
    T(), e.value.count && M();
  };
  ot(l, (L, le) => {
    s.isTextInputDate && JSON.stringify(L ?? {}) !== JSON.stringify(le ?? {}) && z();
  }), Ze(() => {
    z();
  });
  const te = (L, le) => {
    r.value[le].year = L, h("update-month-year", { instance: le, year: L, month: r.value[le].month }), e.value.count && !e.value.solo && Y(le);
  }, E = K(() => (L) => oa(g.value, (le) => {
    var ue;
    const me = c.value(L) === le.value, I = wa(
      le.value,
      sa(n.value.minDate),
      sa(n.value.maxDate)
    ) || ((ue = d.value.years) == null ? void 0 : ue.includes(c.value(L))), v = Pn(t.value, le.value);
    return { active: me, disabled: I, highlighted: v };
  })), _ = (L, le) => {
    te(L, le), j(le);
  }, W = (L, le = !1) => {
    if (!w.value(L, le)) {
      const ue = le ? c.value(L) + 1 : c.value(L) - 1;
      te(ue, L);
    }
  }, j = (L, le = !1, ue) => {
    le || h("reset-flow"), ue !== void 0 ? b.value[L] = ue : b.value[L] = !b.value[L], b.value[L] ? h("overlay-toggle", { open: !0, overlay: Xe.year }) : (h("overlay-closed"), h("overlay-toggle", { open: !1, overlay: Xe.year }));
  };
  return {
    isDisabled: w,
    groupedYears: E,
    showYearPicker: b,
    selectYear: te,
    toggleYearPicker: j,
    handleYearSelect: _,
    handleYear: W
  };
}, li = (e, a) => {
  const {
    defaultedMultiCalendars: t,
    defaultedAriaLabels: n,
    defaultedTransitions: r,
    defaultedConfig: l,
    defaultedRange: s,
    defaultedHighlight: d,
    propDates: c,
    defaultedTz: $,
    defaultedFilters: h,
    defaultedMultiDates: g
  } = Fe(e), b = () => {
    e.isTextInputDate && z(ye(G(e.startDate)), 0);
  }, { modelValue: w, year: S, month: M, calendars: Y } = Da(e, a, b), U = K(() => Dr(e.formatLocale, e.locale, e.monthNameFormat)), Q = Z(null), { checkMinMaxRange: T } = Ft(e), {
    selectYear: z,
    groupedYears: te,
    showYearPicker: E,
    toggleYearPicker: _,
    handleYearSelect: W,
    handleYear: j,
    isDisabled: L
  } = Br({
    modelValue: w,
    multiCalendars: t,
    range: s,
    highlight: d,
    calendars: Y,
    year: S,
    propDates: c,
    month: M,
    filters: h,
    props: e,
    emit: a
  });
  Ze(() => {
    e.startDate && (w.value && e.focusStartDate || !w.value) && z(ye(G(e.startDate)), 0);
  });
  const le = (o) => o ? { month: De(o), year: ye(o) } : { month: null, year: null }, ue = () => w.value ? Array.isArray(w.value) ? w.value.map((o) => le(o)) : le(w.value) : le(), me = (o, R) => {
    const V = Y.value[o], f = ue();
    return Array.isArray(f) ? f.some((ie) => ie.year === (V == null ? void 0 : V.year) && ie.month === R) : (V == null ? void 0 : V.year) === f.year && R === f.month;
  }, I = (o, R, V) => {
    var f, ie;
    const ke = ue();
    return Array.isArray(ke) ? S.value(R) === ((f = ke[V]) == null ? void 0 : f.year) && o === ((ie = ke[V]) == null ? void 0 : ie.month) : !1;
  }, v = (o, R) => {
    if (s.value.enabled) {
      const V = ue();
      if (Array.isArray(w.value) && Array.isArray(V)) {
        const f = I(o, R, 0) || I(o, R, 1), ie = Pt(yt(G()), o, S.value(R));
        return Na(w.value, Q.value, ie) && !f;
      }
      return !1;
    }
    return !1;
  }, A = K(() => (o) => oa(U.value, (R) => {
    var V;
    const f = me(o, R.value), ie = wa(
      R.value,
      Or(S.value(o), c.value.minDate),
      $r(S.value(o), c.value.maxDate)
    ) || As(c.value.disabledDates, S.value(o)).includes(R.value) || ((V = h.value.months) == null ? void 0 : V.includes(R.value)), ke = v(R.value, o), F = Nr(d.value, R.value, S.value(o));
    return { active: f, disabled: ie, isBetween: ke, highlighted: F };
  })), u = (o, R) => Pt(yt(G()), o, S.value(R)), k = (o, R) => {
    const V = w.value ? w.value : yt(/* @__PURE__ */ new Date());
    w.value = Pt(V, o, S.value(R)), a("auto-apply"), a("update-flow-step");
  }, C = (o, R) => {
    const V = u(o, R);
    s.value.fixedEnd || s.value.fixedStart ? w.value = Fr(V, w, a, s) : w.value ? T(V, w.value) && (w.value = $n(w, u(o, R), a)) : w.value = [u(o, R)], pt().then(() => {
      Ea(w.value, a, e.autoApply, e.modelAuto);
    });
  }, J = (o, R) => {
    On(u(o, R), w, g.value.limit), a("auto-apply", !0);
  }, pe = (o, R) => (Y.value[R].month = o, O(R, Y.value[R].year, o), g.value.enabled ? J(o, R) : s.value.enabled ? C(o, R) : k(o, R)), i = (o, R) => {
    z(o, R), O(R, o, null);
  }, O = (o, R, V) => {
    let f = V;
    if (!f && f !== 0) {
      const ie = ue();
      f = Array.isArray(ie) ? ie[o].month : ie.month;
    }
    a("update-month-year", { instance: o, year: R, month: f });
  };
  return {
    groupedMonths: A,
    groupedYears: te,
    year: S,
    isDisabled: L,
    defaultedMultiCalendars: t,
    defaultedAriaLabels: n,
    defaultedTransitions: r,
    defaultedConfig: l,
    showYearPicker: E,
    modelValue: w,
    presetDate: (o, R) => {
      Lr({
        value: o,
        modelValue: w,
        range: s.value.enabled,
        timezone: R ? void 0 : $.value.timezone
      }), a("auto-apply");
    },
    setHoverDate: (o, R) => {
      Q.value = u(o, R);
    },
    selectMonth: pe,
    selectYear: i,
    toggleYearPicker: _,
    handleYearSelect: W,
    handleYear: j,
    getModelMonthYear: ue
  };
}, oi = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...wt
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = Ut(), l = ct(r, "yearMode"), s = e;
    Ze(() => {
      s.shadow || n("mount", null);
    });
    const {
      groupedMonths: d,
      groupedYears: c,
      year: $,
      isDisabled: h,
      defaultedMultiCalendars: g,
      defaultedConfig: b,
      showYearPicker: w,
      modelValue: S,
      presetDate: M,
      setHoverDate: Y,
      selectMonth: U,
      selectYear: Q,
      toggleYearPicker: T,
      handleYearSelect: z,
      handleYear: te,
      getModelMonthYear: E
    } = li(s, n);
    return a({ getSidebarProps: () => ({
      modelValue: S,
      year: $,
      getModelMonthYear: E,
      selectMonth: U,
      selectYear: Q,
      handleYear: te
    }), presetDate: M, toggleYearPicker: (_) => T(0, _) }), (_, W) => (y(), xe(Ia, {
      "multi-calendars": m(g).count,
      collapse: _.collapse,
      stretch: ""
    }, {
      default: _e(({ instance: j }) => [
        _.$slots["top-extra"] ? se(_.$slots, "top-extra", {
          key: 0,
          value: _.internalModelValue
        }) : H("", !0),
        _.$slots["month-year"] ? se(_.$slots, "month-year", Re(je({ key: 1 }, {
          year: m($),
          months: m(d)(j),
          years: m(c)(j),
          selectMonth: m(U),
          selectYear: m(Q),
          instance: j
        }))) : (y(), xe(ka, {
          key: 2,
          items: m(d)(j),
          "arrow-navigation": _.arrowNavigation,
          "is-last": _.autoApply && !m(b).keepActionRow,
          "esc-close": _.escClose,
          height: m(b).modeHeight,
          config: _.config,
          "no-overlay-focus": !!(_.noOverlayFocus || _.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (L) => m(U)(L, j),
          onHoverValue: (L) => m(Y)(L, j)
        }, Je({
          header: _e(() => [
            st(Er, je(_.$props, {
              items: m(c)(j),
              instance: j,
              "show-year-picker": m(w)[j],
              year: m($)(j),
              "is-disabled": (L) => m(h)(j, L),
              onHandleYear: (L) => m(te)(j, L),
              onYearSelect: (L) => m(z)(L, j),
              onToggleYearPicker: (L) => m(T)(j, L == null ? void 0 : L.flow, L == null ? void 0 : L.show)
            }), Je({ _: 2 }, [
              $e(m(l), (L, le) => ({
                name: L,
                fn: _e((ue) => [
                  se(_.$slots, L, Re(Ie(ue)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          _.$slots["month-overlay-value"] ? {
            name: "item",
            fn: _e(({ item: L }) => [
              se(_.$slots, "month-overlay-value", {
                text: L.text,
                value: L.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), si = (e, a) => {
  const t = () => {
    e.isTextInputDate && (h.value = ye(G(e.startDate)));
  }, { modelValue: n } = Da(e, a, t), r = Z(null), { defaultedHighlight: l, defaultedMultiDates: s, defaultedFilters: d, defaultedRange: c, propDates: $ } = Fe(e), h = Z();
  Ze(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (h.value = ye(G(e.startDate)));
  });
  const g = (M) => Array.isArray(n.value) ? n.value.some((Y) => ye(Y) === M) : n.value ? ye(n.value) === M : !1, b = (M) => c.value.enabled && Array.isArray(n.value) ? Na(n.value, r.value, S(M)) : !1, w = K(() => oa(Dn(e.yearRange, e.locale, e.reverseYears), (M) => {
    const Y = g(M.value), U = wa(
      M.value,
      sa($.value.minDate),
      sa($.value.maxDate)
    ) || d.value.years.includes(M.value), Q = b(M.value) && !Y, T = Pn(l.value, M.value);
    return { active: Y, disabled: U, isBetween: Q, highlighted: T };
  })), S = (M) => Dt(yt(ga(/* @__PURE__ */ new Date())), M);
  return {
    groupedYears: w,
    modelValue: n,
    focusYear: h,
    setHoverValue: (M) => {
      r.value = Dt(yt(/* @__PURE__ */ new Date()), M);
    },
    selectYear: (M) => {
      var Y;
      if (a("update-month-year", { instance: 0, year: M }), s.value.enabled)
        return n.value ? Array.isArray(n.value) && (((Y = n.value) == null ? void 0 : Y.map((U) => ye(U))).includes(M) ? n.value = n.value.filter((U) => ye(U) !== M) : n.value.push(Dt(nt(G()), M))) : n.value = [Dt(nt(ga(G())), M)], a("auto-apply", !0);
      c.value.enabled ? (n.value = $n(n, S(M), a), pt().then(() => {
        Ea(n.value, a, e.autoApply, e.modelAuto);
      })) : (n.value = S(M), a("auto-apply"));
    }
  };
}, ii = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...wt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, { groupedYears: l, modelValue: s, focusYear: d, selectYear: c, setHoverValue: $ } = si(r, n), { defaultedConfig: h } = Fe(r);
    return a({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: c
    }) }), (g, b) => (y(), D("div", null, [
      g.$slots["top-extra"] ? se(g.$slots, "top-extra", {
        key: 0,
        value: g.internalModelValue
      }) : H("", !0),
      g.$slots["month-year"] ? se(g.$slots, "month-year", Re(je({ key: 1 }, {
        years: m(l),
        selectYear: m(c)
      }))) : (y(), xe(ka, {
        key: 2,
        items: m(l),
        "is-last": g.autoApply && !m(h).keepActionRow,
        height: m(h).modeHeight,
        config: g.config,
        "no-overlay-focus": !!(g.noOverlayFocus || g.textInput),
        "focus-value": m(d),
        type: "year",
        "use-relative": "",
        onSelected: m(c),
        onHoverValue: m($)
      }, Je({ _: 2 }, [
        g.$slots["year-overlay-value"] ? {
          name: "item",
          fn: _e(({ item: w }) => [
            se(g.$slots, "year-overlay-value", {
              text: w.text,
              value: w.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), ui = {
  key: 0,
  class: "dp__time_input"
}, di = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], ci = /* @__PURE__ */ re("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), pi = /* @__PURE__ */ re("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), vi = ["aria-label", "disabled", "data-test", "onKeydown", "onClick"], mi = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], hi = /* @__PURE__ */ re("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), fi = /* @__PURE__ */ re("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), yi = { key: 0 }, gi = ["aria-label"], bi = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...wt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, { setTimePickerElements: l, setTimePickerBackRef: s } = Lt(), { defaultedAriaLabels: d, defaultedTransitions: c, defaultedFilters: $, defaultedConfig: h, defaultedRange: g } = Fe(r), { transitionName: b, showTransition: w } = xa(c), S = _a({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), M = Z("AM"), Y = Z(null), U = Z([]), Q = Z();
    Ze(() => {
      n("mounted");
    });
    const T = (p) => Ne(/* @__PURE__ */ new Date(), {
      hours: p.hours,
      minutes: p.minutes,
      seconds: r.enableSeconds ? p.seconds : 0,
      milliseconds: 0
    }), z = K(
      () => (p) => A(p, r[p]) || E(p, r[p])
    ), te = K(() => ({ hours: r.hours, minutes: r.minutes, seconds: r.seconds })), E = (p, B) => g.value.enabled && !g.value.disableTimeRangeValidation ? !r.validateTime(p, B) : !1, _ = (p, B) => {
      if (g.value.enabled && !g.value.disableTimeRangeValidation) {
        const ee = B ? +r[`${p}Increment`] : -+r[`${p}Increment`], X = r[p] + ee;
        return !r.validateTime(p, X);
      }
      return !1;
    }, W = K(() => (p) => !pe(+r[p] + +r[`${p}Increment`], p) || _(p, !0)), j = K(() => (p) => !pe(+r[p] - +r[`${p}Increment`], p) || _(p, !1)), L = (p, B) => ar(Ne(G(), p), B), le = (p, B) => cs(Ne(G(), p), B), ue = K(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !r.timePickerInline,
        dp__time_col_reg_block: !r.enableSeconds && r.is24 && !r.timePickerInline,
        dp__time_col_reg_inline: !r.enableSeconds && r.is24 && r.timePickerInline,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), me = K(() => {
      const p = [{ type: "hours" }];
      return r.enableMinutes && p.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), r.enableSeconds && p.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), p;
    }), I = K(() => me.value.filter((p) => !p.separator)), v = K(() => (p) => {
      if (p === "hours") {
        const B = f(+r.hours);
        return { text: B < 10 ? `0${B}` : `${B}`, value: B };
      }
      return { text: r[p] < 10 ? `0${r[p]}` : `${r[p]}`, value: r[p] };
    }), A = (p, B) => {
      var ee;
      if (!r.disabledTimesConfig) return !1;
      const X = r.disabledTimesConfig(r.order, p === "hours" ? B : void 0);
      return X[p] ? !!((ee = X[p]) != null && ee.includes(B)) : !0;
    }, u = (p, B) => B !== "hours" || M.value === "AM" ? p : p + 12, k = (p) => {
      const B = r.is24 ? 24 : 12, ee = p === "hours" ? B : 60, X = +r[`${p}GridIncrement`], q = p === "hours" && !r.is24 ? X : 0, Me = [];
      for (let P = q; P < ee; P += X)
        Me.push({ value: r.is24 ? P : u(P, p), text: P < 10 ? `0${P}` : `${P}` });
      return p === "hours" && !r.is24 && Me.unshift({ value: M.value === "PM" ? 12 : 0, text: "12" }), oa(Me, (P) => ({ active: !1, disabled: $.value.times[p].includes(P.value) || !pe(P.value, p) || A(p, P.value) || E(p, P.value) }));
    }, C = (p) => p >= 0 ? p : 59, J = (p) => p >= 0 ? p : 23, pe = (p, B) => {
      const ee = r.minTime ? T(Ga(r.minTime)) : null, X = r.maxTime ? T(Ga(r.maxTime)) : null, q = T(
        Ga(
          te.value,
          B,
          B === "minutes" || B === "seconds" ? C(p) : J(p)
        )
      );
      return ee && X ? (ba(q, X) || ea(q, X)) && (ra(q, ee) || ea(q, ee)) : ee ? ra(q, ee) || ea(q, ee) : X ? ba(q, X) || ea(q, X) : !0;
    }, i = (p) => r[`no${p[0].toUpperCase() + p.slice(1)}Overlay`], O = (p) => {
      i(p) || (S[p] = !S[p], S[p] ? n("overlay-opened", p) : n("overlay-closed", p));
    }, o = (p) => p === "hours" ? $t : p === "minutes" ? Et : na, R = () => {
      Q.value && clearTimeout(Q.value);
    }, V = (p, B = !0, ee) => {
      const X = B ? L : le, q = B ? +r[`${p}Increment`] : -+r[`${p}Increment`];
      pe(+r[p] + q, p) && n(
        `update:${p}`,
        o(p)(X({ [p]: +r[p] }, { [p]: +r[`${p}Increment`] }))
      ), !(ee != null && ee.keyboard) && h.value.timeArrowHoldThreshold && (Q.value = setTimeout(() => {
        V(p, B);
      }, h.value.timeArrowHoldThreshold));
    }, f = (p) => r.is24 ? p : (p >= 12 ? M.value = "PM" : M.value = "AM", ys(p)), ie = () => {
      M.value === "PM" ? (M.value = "AM", n("update:hours", r.hours - 12)) : (M.value = "PM", n("update:hours", r.hours + 12)), n("am-pm-change", M.value);
    }, ke = (p) => {
      S[p] = !0;
    }, F = (p, B, ee) => {
      if (p && r.arrowNavigation) {
        Array.isArray(U.value[B]) ? U.value[B][ee] = p : U.value[B] = [p];
        const X = U.value.reduce(
          (q, Me) => Me.map((P, oe) => [...q[oe] || [], Me[oe]]),
          []
        );
        s(r.closeTimePickerBtn), Y.value && (X[1] = X[1].concat(Y.value)), l(X, r.order);
      }
    }, we = (p, B) => (O(p), n(`update:${p}`, B));
    return a({ openChildCmp: ke }), (p, B) => {
      var ee;
      return p.disabled ? H("", !0) : (y(), D("div", ui, [
        (y(!0), D(be, null, $e(me.value, (X, q) => {
          var Me, P, oe;
          return y(), D("div", {
            key: q,
            class: ge(ue.value)
          }, [
            X.separator ? (y(), D(be, { key: 0 }, [
              at(" : ")
            ], 64)) : (y(), D(be, { key: 1 }, [
              re("button", {
                ref_for: !0,
                ref: (fe) => F(fe, q, 0),
                type: "button",
                class: ge({
                  dp__btn: !0,
                  dp__inc_dec_button: !p.timePickerInline,
                  dp__inc_dec_button_inline: p.timePickerInline,
                  dp__tp_inline_btn_top: p.timePickerInline,
                  dp__inc_dec_button_disabled: W.value(X.type)
                }),
                "data-test": `${X.type}-time-inc-btn-${r.order}`,
                "aria-label": (Me = m(d)) == null ? void 0 : Me.incrementValue(X.type),
                tabindex: "0",
                onKeydown: (fe) => m(lt)(fe, () => V(X.type, !0, { keyboard: !0 }), !0),
                onClick: (fe) => m(h).timeArrowHoldThreshold ? void 0 : V(X.type, !0),
                onMousedown: (fe) => m(h).timeArrowHoldThreshold ? V(X.type, !0) : void 0,
                onMouseup: R
              }, [
                r.timePickerInline ? (y(), D(be, { key: 1 }, [
                  p.$slots["tp-inline-arrow-up"] ? se(p.$slots, "tp-inline-arrow-up", { key: 0 }) : (y(), D(be, { key: 1 }, [
                    ci,
                    pi
                  ], 64))
                ], 64)) : (y(), D(be, { key: 0 }, [
                  p.$slots["arrow-up"] ? se(p.$slots, "arrow-up", { key: 0 }) : H("", !0),
                  p.$slots["arrow-up"] ? H("", !0) : (y(), xe(m(_n), { key: 1 }))
                ], 64))
              ], 42, di),
              re("button", {
                ref_for: !0,
                ref: (fe) => F(fe, q, 1),
                type: "button",
                "aria-label": (P = m(d)) == null ? void 0 : P.openTpOverlay(X.type),
                class: ge({
                  dp__time_display: !0,
                  dp__time_display_block: !p.timePickerInline,
                  dp__time_display_inline: p.timePickerInline,
                  "dp--time-invalid": z.value(X.type),
                  "dp--time-overlay-btn": !z.value(X.type)
                }),
                disabled: i(X.type),
                tabindex: "0",
                "data-test": `${X.type}-toggle-overlay-btn-${r.order}`,
                onKeydown: (fe) => m(lt)(fe, () => O(X.type), !0),
                onClick: (fe) => O(X.type)
              }, [
                p.$slots[X.type] ? se(p.$slots, X.type, {
                  key: 0,
                  text: v.value(X.type).text,
                  value: v.value(X.type).value
                }) : H("", !0),
                p.$slots[X.type] ? H("", !0) : (y(), D(be, { key: 1 }, [
                  at(Pe(v.value(X.type).text), 1)
                ], 64))
              ], 42, vi),
              re("button", {
                ref_for: !0,
                ref: (fe) => F(fe, q, 2),
                type: "button",
                class: ge({
                  dp__btn: !0,
                  dp__inc_dec_button: !p.timePickerInline,
                  dp__inc_dec_button_inline: p.timePickerInline,
                  dp__tp_inline_btn_bottom: p.timePickerInline,
                  dp__inc_dec_button_disabled: j.value(X.type)
                }),
                "data-test": `${X.type}-time-dec-btn-${r.order}`,
                "aria-label": (oe = m(d)) == null ? void 0 : oe.decrementValue(X.type),
                tabindex: "0",
                onKeydown: (fe) => m(lt)(fe, () => V(X.type, !1, { keyboard: !0 }), !0),
                onClick: (fe) => m(h).timeArrowHoldThreshold ? void 0 : V(X.type, !1),
                onMousedown: (fe) => m(h).timeArrowHoldThreshold ? V(X.type, !1) : void 0,
                onMouseup: R
              }, [
                r.timePickerInline ? (y(), D(be, { key: 1 }, [
                  p.$slots["tp-inline-arrow-down"] ? se(p.$slots, "tp-inline-arrow-down", { key: 0 }) : (y(), D(be, { key: 1 }, [
                    hi,
                    fi
                  ], 64))
                ], 64)) : (y(), D(be, { key: 0 }, [
                  p.$slots["arrow-down"] ? se(p.$slots, "arrow-down", { key: 0 }) : H("", !0),
                  p.$slots["arrow-down"] ? H("", !0) : (y(), xe(m(kn), { key: 1 }))
                ], 64))
              ], 42, mi)
            ], 64))
          ], 2);
        }), 128)),
        p.is24 ? H("", !0) : (y(), D("div", yi, [
          p.$slots["am-pm-button"] ? se(p.$slots, "am-pm-button", {
            key: 0,
            toggle: ie,
            value: M.value
          }) : H("", !0),
          p.$slots["am-pm-button"] ? H("", !0) : (y(), D("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: Y,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (ee = m(d)) == null ? void 0 : ee.amPmButton,
            tabindex: "0",
            onClick: ie,
            onKeydown: B[0] || (B[0] = (X) => m(lt)(X, () => ie(), !0))
          }, Pe(M.value), 41, gi))
        ])),
        (y(!0), D(be, null, $e(I.value, (X, q) => (y(), xe(Kt, {
          key: q,
          name: m(b)(S[X.type]),
          css: m(w)
        }, {
          default: _e(() => [
            S[X.type] ? (y(), xe(ka, {
              key: 0,
              items: k(X.type),
              "is-last": p.autoApply && !m(h).keepActionRow,
              "esc-close": p.escClose,
              type: X.type,
              "text-input": p.textInput,
              config: p.config,
              "arrow-navigation": p.arrowNavigation,
              "aria-labels": p.ariaLabels,
              onSelected: (Me) => we(X.type, Me),
              onToggle: (Me) => O(X.type),
              onResetFlow: B[1] || (B[1] = (Me) => p.$emit("reset-flow"))
            }, Je({
              "button-icon": _e(() => [
                p.$slots["clock-icon"] ? se(p.$slots, "clock-icon", { key: 0 }) : H("", !0),
                p.$slots["clock-icon"] ? H("", !0) : (y(), xe(zt(p.timePickerInline ? m(ia) : m(wn)), { key: 1 }))
              ]),
              _: 2
            }, [
              p.$slots[`${X.type}-overlay-value`] ? {
                name: "item",
                fn: _e(({ item: Me }) => [
                  se(p.$slots, `${X.type}-overlay-value`, {
                    text: Me.text,
                    value: Me.value
                  })
                ]),
                key: "0"
              } : void 0,
              p.$slots[`${X.type}-overlay-header`] ? {
                name: "header",
                fn: _e(() => [
                  se(p.$slots, `${X.type}-overlay-header`, {
                    toggle: () => O(X.type)
                  })
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : H("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), wi = { class: "dp--tp-wrap" }, _i = ["aria-label", "tabindex"], ki = ["tabindex"], xi = ["aria-label"], Vr = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...wt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, { buildMatrix: l, setTimePicker: s } = Lt(), d = Ut(), { defaultedTransitions: c, defaultedAriaLabels: $, defaultedTextInput: h, defaultedConfig: g, defaultedRange: b } = Fe(r), { transitionName: w, showTransition: S } = xa(c), { hideNavigationButtons: M } = La(), Y = Z(null), U = Z(null), Q = Z([]), T = Z(null);
    Ze(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? l([Ue(Y.value)], "time") : s(!0, r.timePicker);
    });
    const z = K(() => b.value.enabled && r.modelAuto ? Mr(r.internalModelValue) : !0), te = Z(!1), E = (u) => ({
      hours: Array.isArray(r.hours) ? r.hours[u] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[u] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[u] : r.seconds
    }), _ = K(() => {
      const u = [];
      if (b.value.enabled)
        for (let k = 0; k < 2; k++)
          u.push(E(k));
      else
        u.push(E(0));
      return u;
    }), W = (u, k = !1, C = "") => {
      k || n("reset-flow"), te.value = u, n(u ? "overlay-opened" : "overlay-closed", Xe.time), r.arrowNavigation && s(u), pt(() => {
        C !== "" && Q.value[0] && Q.value[0].openChildCmp(C);
      });
    }, j = K(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: r.autoApply && !g.value.keepActionRow
    })), L = ct(d, "timePicker"), le = (u, k, C) => b.value.enabled ? k === 0 ? [u, _.value[1][C]] : [_.value[0][C], u] : u, ue = (u) => {
      n("update:hours", u);
    }, me = (u) => {
      n("update:minutes", u);
    }, I = (u) => {
      n("update:seconds", u);
    }, v = () => {
      if (T.value && !h.value.enabled && !r.noOverlayFocus) {
        const u = Tr(T.value);
        u && u.focus({ preventScroll: !0 });
      }
    }, A = (u) => {
      n("overlay-closed", u);
    };
    return a({ toggleTimePicker: W }), (u, k) => {
      var C;
      return y(), D("div", wi, [
        !u.timePicker && !u.timePickerInline ? dt((y(), D("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: Y,
          type: "button",
          class: ge(j.value),
          "aria-label": (C = m($)) == null ? void 0 : C.openTimePicker,
          tabindex: u.noOverlayFocus ? void 0 : 0,
          "data-test": "open-time-picker-btn",
          onKeydown: k[0] || (k[0] = (J) => m(lt)(J, () => W(!0))),
          onClick: k[1] || (k[1] = (J) => W(!0))
        }, [
          u.$slots["clock-icon"] ? se(u.$slots, "clock-icon", { key: 0 }) : H("", !0),
          u.$slots["clock-icon"] ? H("", !0) : (y(), xe(m(wn), { key: 1 }))
        ], 42, _i)), [
          [ta, !m(M)(u.hideNavigation, "time")]
        ]) : H("", !0),
        st(Kt, {
          name: m(w)(te.value),
          css: m(S) && !u.timePickerInline
        }, {
          default: _e(() => {
            var J;
            return [
              te.value || u.timePicker || u.timePickerInline ? (y(), D("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: T,
                class: ge({
                  dp__overlay: !u.timePickerInline,
                  "dp--overlay-absolute": !r.timePicker && !u.timePickerInline,
                  "dp--overlay-relative": r.timePicker
                }),
                style: mt(u.timePicker ? { height: `${m(g).modeHeight}px` } : void 0),
                tabindex: u.timePickerInline ? void 0 : 0
              }, [
                re("div", {
                  class: ge(
                    u.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  u.$slots["time-picker-overlay"] ? se(u.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ue,
                    setMinutes: me,
                    setSeconds: I
                  }) : H("", !0),
                  u.$slots["time-picker-overlay"] ? H("", !0) : (y(), D("div", {
                    key: 1,
                    class: ge(u.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (y(!0), D(be, null, $e(_.value, (pe, i) => dt((y(), xe(bi, je({
                      key: i,
                      ref_for: !0
                    }, {
                      ...u.$props,
                      order: i,
                      hours: pe.hours,
                      minutes: pe.minutes,
                      seconds: pe.seconds,
                      closeTimePickerBtn: U.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: i === 0 ? u.fixedStart : u.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: Q,
                      "validate-time": (O, o) => e.validateTime(O, le(o, i, O)),
                      "onUpdate:hours": (O) => ue(le(O, i, "hours")),
                      "onUpdate:minutes": (O) => me(le(O, i, "minutes")),
                      "onUpdate:seconds": (O) => I(le(O, i, "seconds")),
                      onMounted: v,
                      onOverlayClosed: A,
                      onOverlayOpened: k[2] || (k[2] = (O) => u.$emit("overlay-opened", O)),
                      onAmPmChange: k[3] || (k[3] = (O) => u.$emit("am-pm-change", O))
                    }), Je({ _: 2 }, [
                      $e(m(L), (O, o) => ({
                        name: O,
                        fn: _e((R) => [
                          se(u.$slots, O, je({ ref_for: !0 }, R))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [ta, i === 0 ? !0 : z.value]
                    ])), 128))
                  ], 2)),
                  !u.timePicker && !u.timePickerInline ? dt((y(), D("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: U,
                    type: "button",
                    class: ge(j.value),
                    "aria-label": (J = m($)) == null ? void 0 : J.closeTimePicker,
                    tabindex: "0",
                    onKeydown: k[4] || (k[4] = (pe) => m(lt)(pe, () => W(!1))),
                    onClick: k[5] || (k[5] = (pe) => W(!1))
                  }, [
                    u.$slots["calendar-icon"] ? se(u.$slots, "calendar-icon", { key: 0 }) : H("", !0),
                    u.$slots["calendar-icon"] ? H("", !0) : (y(), xe(m(ia), { key: 1 }))
                  ], 42, xi)), [
                    [ta, !m(M)(u.hideNavigation, "time")]
                  ]) : H("", !0)
                ], 2)
              ], 14, ki)) : H("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Hr = (e, a, t, n) => {
  const { defaultedRange: r } = Fe(e), l = (T, z) => Array.isArray(a[T]) ? a[T][z] : a[T], s = (T) => e.enableSeconds ? Array.isArray(a.seconds) ? a.seconds[T] : a.seconds : 0, d = (T, z) => T ? z !== void 0 ? It(T, l("hours", z), l("minutes", z), s(z)) : It(T, a.hours, a.minutes, s()) : _r(G(), s(z)), c = (T, z) => {
    a[T] = z;
  }, $ = K(() => e.modelAuto && r.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : r.value.enabled), h = (T, z) => {
    const te = Object.fromEntries(
      Object.keys(a).map((E) => E === T ? [E, z] : [E, a[E]].slice())
    );
    if ($.value && !r.value.disableTimeRangeValidation) {
      const E = (W) => t.value ? It(
        t.value[W],
        te.hours[W],
        te.minutes[W],
        te.seconds[W]
      ) : null, _ = (W) => wr(t.value[W], 0);
      return !(Te(E(0), E(1)) && (ra(E(0), _(1)) || ba(E(1), _(0))));
    }
    return !0;
  }, g = (T, z) => {
    h(T, z) && (c(T, z), n && n());
  }, b = (T) => {
    g("hours", T);
  }, w = (T) => {
    g("minutes", T);
  }, S = (T) => {
    g("seconds", T);
  }, M = (T, z, te, E) => {
    z && b(T), !z && !te && w(T), te && S(T), t.value && E(t.value);
  }, Y = (T) => {
    if (T) {
      const z = Array.isArray(T), te = z ? [+T[0].hours, +T[1].hours] : +T.hours, E = z ? [+T[0].minutes, +T[1].minutes] : +T.minutes, _ = z ? [+T[0].seconds, +T[1].seconds] : +T.seconds;
      c("hours", te), c("minutes", E), e.enableSeconds && c("seconds", _);
    }
  }, U = (T, z) => {
    const te = {
      hours: Array.isArray(a.hours) ? a.hours[T] : a.hours,
      disabledArr: []
    };
    return (z || z === 0) && (te.hours = z), Array.isArray(e.disabledTimes) && (te.disabledArr = r.value.enabled && Array.isArray(e.disabledTimes[T]) ? e.disabledTimes[T] : e.disabledTimes), te;
  }, Q = K(() => (T, z) => {
    var te;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: E, hours: _ } = U(T, z), W = E.filter((j) => +j.hours === _);
      return ((te = W[0]) == null ? void 0 : te.minutes) === "*" ? { hours: [_], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (W == null ? void 0 : W.map((j) => +j.minutes)) ?? [],
        seconds: (W == null ? void 0 : W.map((j) => j.seconds ? +j.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: c,
    updateHours: b,
    updateMinutes: w,
    updateSeconds: S,
    getSetDateTime: d,
    updateTimeValues: M,
    getSecondsValue: s,
    assignStartTime: Y,
    validateTime: h,
    disabledTimesConfig: Q
  };
}, Di = (e, a) => {
  const t = () => {
    e.isTextInputDate && z();
  }, { modelValue: n, time: r } = Da(e, a, t), { defaultedStartTime: l, defaultedRange: s, defaultedTz: d } = Fe(e), { updateTimeValues: c, getSetDateTime: $, setTime: h, assignStartTime: g, disabledTimesConfig: b, validateTime: w } = Hr(e, r, n, S);
  function S() {
    a("update-flow-step");
  }
  const M = (E) => {
    const { hours: _, minutes: W, seconds: j } = E;
    return { hours: +_, minutes: +W, seconds: j ? +j : 0 };
  }, Y = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const _ = M(e.startTime[0]), W = M(e.startTime[1]);
        return [Ne(G(), _), Ne(G(), W)];
      }
      const E = M(e.startTime);
      return Ne(G(), E);
    }
    return s.value.enabled ? [null, null] : null;
  }, U = () => {
    if (s.value.enabled) {
      const [E, _] = Y();
      n.value = [
        it($(E, 0), d.value.timezone),
        it($(_, 1), d.value.timezone)
      ];
    } else
      n.value = it($(Y()), d.value.timezone);
  }, Q = (E) => Array.isArray(E) ? [jt(G(E[0])), jt(G(E[1]))] : [jt(E ?? G())], T = (E, _, W) => {
    h("hours", E), h("minutes", _), h("seconds", e.enableSeconds ? W : 0);
  }, z = () => {
    const [E, _] = Q(n.value);
    return s.value.enabled ? T(
      [E.hours, _.hours],
      [E.minutes, _.minutes],
      [E.seconds, _.seconds]
    ) : T(E.hours, E.minutes, E.seconds);
  };
  Ze(() => {
    if (!e.shadow)
      return g(l.value), n.value ? z() : U();
  });
  const te = () => {
    Array.isArray(n.value) ? n.value = n.value.map((E, _) => E && $(E, _)) : n.value = $(n.value), a("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: b,
    updateTime: (E, _ = !0, W = !1) => {
      c(E, _, W, te);
    },
    validateTime: w
  };
}, Mi = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...wt
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, l = Ut(), s = ct(l, "timePicker"), d = Z(null), { time: c, modelValue: $, disabledTimesConfig: h, updateTime: g, validateTime: b } = Di(r, n);
    return Ze(() => {
      r.shadow || n("mount", null);
    }), a({ getSidebarProps: () => ({
      modelValue: $,
      time: c,
      updateTime: g
    }), toggleTimePicker: (w, S = !1, M = "") => {
      var Y;
      (Y = d.value) == null || Y.toggleTimePicker(w, S, M);
    } }), (w, S) => (y(), xe(Ia, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: _e(() => [
        st(Vr, je({
          ref_key: "tpRef",
          ref: d
        }, w.$props, {
          hours: m(c).hours,
          minutes: m(c).minutes,
          seconds: m(c).seconds,
          "internal-model-value": w.internalModelValue,
          "disabled-times-config": m(h),
          "validate-time": m(b),
          "onUpdate:hours": S[0] || (S[0] = (M) => m(g)(M)),
          "onUpdate:minutes": S[1] || (S[1] = (M) => m(g)(M, !1)),
          "onUpdate:seconds": S[2] || (S[2] = (M) => m(g)(M, !1, !0)),
          onAmPmChange: S[3] || (S[3] = (M) => w.$emit("am-pm-change", M)),
          onResetFlow: S[4] || (S[4] = (M) => w.$emit("reset-flow")),
          onOverlayClosed: S[5] || (S[5] = (M) => w.$emit("overlay-toggle", { open: !1, overlay: M })),
          onOverlayOpened: S[6] || (S[6] = (M) => w.$emit("overlay-toggle", { open: !0, overlay: M }))
        }), Je({ _: 2 }, [
          $e(m(s), (M, Y) => ({
            name: M,
            fn: _e((U) => [
              se(w.$slots, M, Re(Ie(U)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Ti = { class: "dp--header-wrap" }, Pi = {
  key: 0,
  class: "dp__month_year_wrap"
}, Oi = { key: 0 }, $i = { class: "dp__month_year_wrap" }, Ai = ["aria-label", "data-test", "onClick", "onKeydown"], Si = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...wt
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, {
      defaultedTransitions: l,
      defaultedAriaLabels: s,
      defaultedMultiCalendars: d,
      defaultedFilters: c,
      defaultedConfig: $,
      defaultedHighlight: h,
      propDates: g,
      defaultedUI: b
    } = Fe(r), { transitionName: w, showTransition: S } = xa(l), { buildMatrix: M } = Lt(), { handleMonthYearChange: Y, isDisabled: U, updateMonthYear: Q } = Qs(r, n), { showLeftIcon: T, showRightIcon: z } = La(), te = Z(!1), E = Z(!1), _ = Z([null, null, null, null]);
    Ze(() => {
      n("mount");
    });
    const W = (i) => ({
      get: () => r[i],
      set: (O) => {
        const o = i === ht.month ? ht.year : ht.month;
        n("update-month-year", { [i]: O, [o]: r[o] }), i === ht.month ? A(!0) : u(!0);
      }
    }), j = K(W(ht.month)), L = K(W(ht.year)), le = K(() => (i) => ({
      month: r.month,
      year: r.year,
      items: i === ht.month ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: Q,
      toggle: i === ht.month ? A : u
    })), ue = K(() => r.months.find((O) => O.value === r.month) || { text: "", value: 0 }), me = K(() => oa(r.months, (i) => {
      const O = r.month === i.value, o = wa(
        i.value,
        Or(r.year, g.value.minDate),
        $r(r.year, g.value.maxDate)
      ) || c.value.months.includes(i.value), R = Nr(h.value, i.value, r.year);
      return { active: O, disabled: o, highlighted: R };
    })), I = K(() => oa(r.years, (i) => {
      const O = r.year === i.value, o = wa(
        i.value,
        sa(g.value.minDate),
        sa(g.value.maxDate)
      ) || c.value.years.includes(i.value), R = Pn(h.value, i.value);
      return { active: O, disabled: o, highlighted: R };
    })), v = (i, O, o) => {
      o !== void 0 ? i.value = o : i.value = !i.value, i.value ? n("overlay-opened", O) : n("overlay-closed", O);
    }, A = (i = !1, O) => {
      k(i), v(te, Xe.month, O);
    }, u = (i = !1, O) => {
      k(i), v(E, Xe.year, O);
    }, k = (i) => {
      i || n("reset-flow");
    }, C = (i, O) => {
      r.arrowNavigation && (_.value[O] = Ue(i), M(_.value, "monthYear"));
    }, J = K(() => {
      var i, O;
      return [
        {
          type: ht.month,
          index: 1,
          toggle: A,
          modelValue: j.value,
          updateModelValue: (o) => j.value = o,
          text: ue.value.text,
          showSelectionGrid: te.value,
          items: me.value,
          ariaLabel: (i = s.value) == null ? void 0 : i.openMonthsOverlay
        },
        {
          type: ht.year,
          index: 2,
          toggle: u,
          modelValue: L.value,
          updateModelValue: (o) => L.value = o,
          text: Pr(r.year, r.locale),
          showSelectionGrid: E.value,
          items: I.value,
          ariaLabel: (O = s.value) == null ? void 0 : O.openYearsOverlay
        }
      ];
    }), pe = K(() => r.disableYearSelect ? [J.value[0]] : r.yearFirst ? [...J.value].reverse() : J.value);
    return a({
      toggleMonthPicker: A,
      toggleYearPicker: u,
      handleMonthYearChange: Y
    }), (i, O) => {
      var o, R, V, f, ie, ke;
      return y(), D("div", Ti, [
        i.$slots["month-year"] ? (y(), D("div", Pi, [
          se(i.$slots, "month-year", Re(Ie({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: m(Q), handleMonthYearChange: m(Y), instance: e.instance })))
        ])) : (y(), D(be, { key: 1 }, [
          i.$slots["top-extra"] ? (y(), D("div", Oi, [
            se(i.$slots, "top-extra", { value: i.internalModelValue })
          ])) : H("", !0),
          re("div", $i, [
            m(T)(m(d), e.instance) && !i.vertical ? (y(), xe(fa, {
              key: 0,
              "aria-label": (o = m(s)) == null ? void 0 : o.prevMonth,
              disabled: m(U)(!1),
              class: ge((R = m(b)) == null ? void 0 : R.navBtnPrev),
              onActivate: O[0] || (O[0] = (F) => m(Y)(!1, !0)),
              onSetRef: O[1] || (O[1] = (F) => C(F, 0))
            }, {
              default: _e(() => [
                i.$slots["arrow-left"] ? se(i.$slots, "arrow-left", { key: 0 }) : H("", !0),
                i.$slots["arrow-left"] ? H("", !0) : (y(), xe(m(gn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : H("", !0),
            re("div", {
              class: ge(["dp__month_year_wrap", {
                dp__year_disable_select: i.disableYearSelect
              }])
            }, [
              (y(!0), D(be, null, $e(pe.value, (F, we) => (y(), D(be, {
                key: F.type
              }, [
                re("button", {
                  ref_for: !0,
                  ref: (p) => C(p, we + 1),
                  type: "button",
                  class: "dp__btn dp__month_year_select",
                  tabindex: "0",
                  "aria-label": F.ariaLabel,
                  "data-test": `${F.type}-toggle-overlay-${e.instance}`,
                  onClick: F.toggle,
                  onKeydown: (p) => m(lt)(p, () => F.toggle(), !0)
                }, [
                  i.$slots[F.type] ? se(i.$slots, F.type, {
                    key: 0,
                    text: F.text,
                    value: r[F.type]
                  }) : H("", !0),
                  i.$slots[F.type] ? H("", !0) : (y(), D(be, { key: 1 }, [
                    at(Pe(F.text), 1)
                  ], 64))
                ], 40, Ai),
                st(Kt, {
                  name: m(w)(F.showSelectionGrid),
                  css: m(S)
                }, {
                  default: _e(() => [
                    F.showSelectionGrid ? (y(), xe(ka, {
                      key: 0,
                      items: F.items,
                      "arrow-navigation": i.arrowNavigation,
                      "hide-navigation": i.hideNavigation,
                      "is-last": i.autoApply && !m($).keepActionRow,
                      "skip-button-ref": !1,
                      config: i.config,
                      type: F.type,
                      "header-refs": [],
                      "esc-close": i.escClose,
                      "menu-wrap-ref": i.menuWrapRef,
                      "text-input": i.textInput,
                      "aria-labels": i.ariaLabels,
                      onSelected: F.updateModelValue,
                      onToggle: F.toggle
                    }, Je({
                      "button-icon": _e(() => [
                        i.$slots["calendar-icon"] ? se(i.$slots, "calendar-icon", { key: 0 }) : H("", !0),
                        i.$slots["calendar-icon"] ? H("", !0) : (y(), xe(m(ia), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      i.$slots[`${F.type}-overlay-value`] ? {
                        name: "item",
                        fn: _e(({ item: p }) => [
                          se(i.$slots, `${F.type}-overlay-value`, {
                            text: p.text,
                            value: p.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      i.$slots[`${F.type}-overlay`] ? {
                        name: "overlay",
                        fn: _e(() => [
                          se(i.$slots, `${F.type}-overlay`, je({ ref_for: !0 }, le.value(F.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      i.$slots[`${F.type}-overlay-header`] ? {
                        name: "header",
                        fn: _e(() => [
                          se(i.$slots, `${F.type}-overlay-header`, {
                            toggle: F.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : H("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            m(T)(m(d), e.instance) && i.vertical ? (y(), xe(fa, {
              key: 1,
              "aria-label": (V = m(s)) == null ? void 0 : V.prevMonth,
              disabled: m(U)(!1),
              class: ge((f = m(b)) == null ? void 0 : f.navBtnPrev),
              onActivate: O[2] || (O[2] = (F) => m(Y)(!1, !0))
            }, {
              default: _e(() => [
                i.$slots["arrow-up"] ? se(i.$slots, "arrow-up", { key: 0 }) : H("", !0),
                i.$slots["arrow-up"] ? H("", !0) : (y(), xe(m(_n), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : H("", !0),
            m(z)(m(d), e.instance) ? (y(), xe(fa, {
              key: 2,
              ref: "rightIcon",
              disabled: m(U)(!0),
              "aria-label": (ie = m(s)) == null ? void 0 : ie.nextMonth,
              class: ge((ke = m(b)) == null ? void 0 : ke.navBtnNext),
              onActivate: O[3] || (O[3] = (F) => m(Y)(!0, !0)),
              onSetRef: O[4] || (O[4] = (F) => C(F, i.disableYearSelect ? 2 : 3))
            }, {
              default: _e(() => [
                i.$slots[i.vertical ? "arrow-down" : "arrow-right"] ? se(i.$slots, i.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : H("", !0),
                i.$slots[i.vertical ? "arrow-down" : "arrow-right"] ? H("", !0) : (y(), xe(zt(i.vertical ? m(kn) : m(bn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : H("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Ci = ["aria-label"], Ri = {
  class: "dp__calendar_header",
  role: "row"
}, Ni = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Yi = ["aria-label"], Ii = /* @__PURE__ */ re("div", { class: "dp__calendar_header_separator" }, null, -1), Ei = ["aria-label"], Li = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Fi = { class: "dp__cell_inner" }, Bi = ["id", "aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Vi = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...wt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, { buildMultiLevelMatrix: l } = Lt(), {
      defaultedTransitions: s,
      defaultedConfig: d,
      defaultedAriaLabels: c,
      defaultedMultiCalendars: $,
      defaultedWeekNumbers: h,
      defaultedMultiDates: g,
      defaultedUI: b
    } = Fe(r), w = Z(null), S = Z({
      bottom: "",
      left: "",
      transform: ""
    }), M = Z([]), Y = Z(null), U = Z(!0), Q = Z(""), T = Z({ startX: 0, endX: 0, startY: 0, endY: 0 }), z = Z([]), te = Z({ left: "50%" }), E = Z(!1), _ = K(() => r.calendar ? r.calendar(r.mappedDates) : r.mappedDates), W = K(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : fs(r.formatLocale, r.locale, +r.weekStart));
    Ze(() => {
      n("mount", { cmp: "calendar", refs: M }), d.value.noSwipe || Y.value && (Y.value.addEventListener("touchstart", C, { passive: !1 }), Y.value.addEventListener("touchend", J, { passive: !1 }), Y.value.addEventListener("touchmove", pe, { passive: !1 })), r.monthChangeOnScroll && Y.value && Y.value.addEventListener("wheel", o, { passive: !1 });
    });
    const j = (F) => F ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", L = (F, we) => {
      if (r.transitions) {
        const p = nt(Pt(G(), r.month, r.year));
        Q.value = qe(nt(Pt(G(), F, we)), p) ? s.value[j(!0)] : s.value[j(!1)], U.value = !1, pt(() => {
          U.value = !0;
        });
      }
    }, le = K(
      () => ({
        [r.calendarClassName]: !!r.calendarClassName,
        ...b.value.calendar ?? {}
      })
    ), ue = K(() => (F) => {
      const we = gs(F);
      return {
        dp__marker_dot: we.type === "dot",
        dp__marker_line: we.type === "line"
      };
    }), me = K(() => (F) => Te(F, w.value)), I = K(() => ({
      dp__calendar: !0,
      dp__calendar_next: $.value.count > 0 && r.instance !== 0
    })), v = K(() => (F) => r.hideOffsetDates ? F.current : !0), A = async (F, we, p) => {
      const B = Ue(M.value[we][p]);
      if (B) {
        const { width: ee, height: X } = B.getBoundingClientRect();
        w.value = F.value;
        let q = { left: `${ee / 2}px` }, Me = -50;
        if (await pt(), z.value[0]) {
          const { left: P, width: oe } = z.value[0].getBoundingClientRect();
          P < 0 && (q = { left: "0" }, Me = 0, te.value.left = `${ee / 2}px`), window.innerWidth < P + oe && (q = { right: "0" }, Me = 0, te.value.left = `${oe - ee / 2}px`);
        }
        S.value = {
          bottom: `${X}px`,
          ...q,
          transform: `translateX(${Me}%)`
        }, n("tooltip-open", F.marker);
      }
    }, u = async (F, we, p) => {
      var B, ee;
      if (E.value && g.value.enabled && g.value.dragSelect)
        return n("select-date", F);
      n("set-hover-date", F), (ee = (B = F.marker) == null ? void 0 : B.tooltip) != null && ee.length && await A(F, we, p);
    }, k = (F) => {
      w.value && (w.value = null, S.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", F.marker));
    }, C = (F) => {
      T.value.startX = F.changedTouches[0].screenX, T.value.startY = F.changedTouches[0].screenY;
    }, J = (F) => {
      T.value.endX = F.changedTouches[0].screenX, T.value.endY = F.changedTouches[0].screenY, i();
    }, pe = (F) => {
      r.vertical && !r.inline && F.preventDefault();
    }, i = () => {
      const F = r.vertical ? "Y" : "X";
      Math.abs(T.value[`start${F}`] - T.value[`end${F}`]) > 10 && n("handle-swipe", T.value[`start${F}`] > T.value[`end${F}`] ? "right" : "left");
    }, O = (F, we, p) => {
      F && (Array.isArray(M.value[we]) ? M.value[we][p] = F : M.value[we] = [F]), r.arrowNavigation && l(M.value, "calendar");
    }, o = (F) => {
      r.monthChangeOnScroll && (F.preventDefault(), n("handle-scroll", F));
    }, R = (F) => h.value.type === "local" ? hn(F.value, { weekStartsOn: +r.weekStart }) : h.value.type === "iso" ? vn(F.value) : typeof h.value.type == "function" ? h.value.type(F.value) : "", V = (F) => {
      const we = F[0];
      return h.value.hideOnOffsetDates ? F.some((p) => p.current) ? R(we) : "" : R(we);
    }, f = (F, we) => {
      g.value.enabled || (Yt(F, d.value), n("select-date", we));
    }, ie = (F) => {
      Yt(F, d.value);
    }, ke = (F) => {
      g.value.enabled && g.value.dragSelect ? (E.value = !0, n("select-date", F)) : g.value.enabled && n("select-date", F);
    };
    return a({ triggerTransition: L }), (F, we) => {
      var p;
      return y(), D("div", {
        class: ge(I.value)
      }, [
        re("div", {
          ref_key: "calendarWrapRef",
          ref: Y,
          role: "grid",
          class: ge(le.value),
          "aria-label": (p = m(c)) == null ? void 0 : p.calendarWrap
        }, [
          re("div", Ri, [
            F.weekNumbers ? (y(), D("div", Ni, Pe(F.weekNumName), 1)) : H("", !0),
            (y(!0), D(be, null, $e(W.value, (B, ee) => {
              var X, q;
              return y(), D("div", {
                key: ee,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "data-test": "calendar-header",
                "aria-label": (q = (X = m(c)) == null ? void 0 : X.weekDay) == null ? void 0 : q.call(X, ee)
              }, [
                F.$slots["calendar-header"] ? se(F.$slots, "calendar-header", {
                  key: 0,
                  day: B,
                  index: ee
                }) : H("", !0),
                F.$slots["calendar-header"] ? H("", !0) : (y(), D(be, { key: 1 }, [
                  at(Pe(B), 1)
                ], 64))
              ], 8, Yi);
            }), 128))
          ]),
          Ii,
          st(Kt, {
            name: Q.value,
            css: !!F.transitions
          }, {
            default: _e(() => {
              var B;
              return [
                U.value ? (y(), D("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((B = m(c)) == null ? void 0 : B.calendarDays) || void 0,
                  onMouseleave: we[1] || (we[1] = (ee) => E.value = !1)
                }, [
                  (y(!0), D(be, null, $e(_.value, (ee, X) => (y(), D("div", {
                    key: X,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    F.weekNumbers ? (y(), D("div", Li, [
                      re("div", Fi, Pe(V(ee.days)), 1)
                    ])) : H("", !0),
                    (y(!0), D(be, null, $e(ee.days, (q, Me) => {
                      var P, oe, fe;
                      return y(), D("div", {
                        id: m(Yr)(q.value),
                        ref_for: !0,
                        ref: (Oe) => O(Oe, X, Me),
                        key: Me + X,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (q.classData.dp__active_date || q.classData.dp__range_start || q.classData.dp__range_start) ?? void 0,
                        "aria-disabled": q.classData.dp__cell_disabled || void 0,
                        "aria-label": (oe = (P = m(c)) == null ? void 0 : P.day) == null ? void 0 : oe.call(P, q),
                        tabindex: "0",
                        "data-test": q.value,
                        onClick: Ot((Oe) => f(Oe, q), ["prevent"]),
                        onKeydown: (Oe) => m(lt)(Oe, () => F.$emit("select-date", q)),
                        onMouseenter: (Oe) => u(q, X, Me),
                        onMouseleave: (Oe) => k(q),
                        onMousedown: (Oe) => ke(q),
                        onMouseup: we[0] || (we[0] = (Oe) => E.value = !1)
                      }, [
                        re("div", {
                          class: ge(["dp__cell_inner", q.classData])
                        }, [
                          F.$slots.day && v.value(q) ? se(F.$slots, "day", {
                            key: 0,
                            day: +q.text,
                            date: q.value
                          }) : H("", !0),
                          F.$slots.day ? H("", !0) : (y(), D(be, { key: 1 }, [
                            at(Pe(q.text), 1)
                          ], 64)),
                          q.marker && v.value(q) ? (y(), D(be, { key: 2 }, [
                            F.$slots.marker ? se(F.$slots, "marker", {
                              key: 0,
                              marker: q.marker,
                              day: +q.text,
                              date: q.value
                            }) : (y(), D("div", {
                              key: 1,
                              class: ge(ue.value(q.marker)),
                              style: mt(q.marker.color ? { backgroundColor: q.marker.color } : {})
                            }, null, 6))
                          ], 64)) : H("", !0),
                          me.value(q.value) ? (y(), D("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: z,
                            class: "dp__marker_tooltip",
                            style: mt(S.value)
                          }, [
                            (fe = q.marker) != null && fe.tooltip ? (y(), D("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ie
                            }, [
                              (y(!0), D(be, null, $e(q.marker.tooltip, (Oe, rt) => (y(), D("div", {
                                key: rt,
                                class: "dp__tooltip_text"
                              }, [
                                F.$slots["marker-tooltip"] ? se(F.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: Oe,
                                  day: q.value
                                }) : H("", !0),
                                F.$slots["marker-tooltip"] ? H("", !0) : (y(), D(be, { key: 1 }, [
                                  re("div", {
                                    class: "dp__tooltip_mark",
                                    style: mt(Oe.color ? { backgroundColor: Oe.color } : {})
                                  }, null, 4),
                                  re("div", null, Pe(Oe.text), 1)
                                ], 64))
                              ]))), 128)),
                              re("div", {
                                class: "dp__arrow_bottom_tp",
                                style: mt(te.value)
                              }, null, 4)
                            ])) : H("", !0)
                          ], 4)) : H("", !0)
                        ], 2)
                      ], 40, Bi);
                    }), 128))
                  ]))), 128))
                ], 40, Ei)) : H("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Ci)
      ], 2);
    };
  }
}), Gn = (e) => Array.isArray(e), Hi = (e, a, t, n) => {
  const r = Z([]), l = Z(/* @__PURE__ */ new Date()), s = Z(), d = () => J(e.isTextInputDate), { modelValue: c, calendars: $, time: h, today: g } = Da(e, a, d), {
    defaultedMultiCalendars: b,
    defaultedStartTime: w,
    defaultedRange: S,
    defaultedConfig: M,
    defaultedTz: Y,
    propDates: U,
    defaultedMultiDates: Q
  } = Fe(e), { validateMonthYearInRange: T, isDisabled: z, isDateRangeAllowed: te, checkMinMaxRange: E } = Ft(e), { updateTimeValues: _, getSetDateTime: W, setTime: j, assignStartTime: L, validateTime: le, disabledTimesConfig: ue } = Hr(e, h, c, n), me = K(
    () => (x) => $.value[x] ? $.value[x].month : 0
  ), I = K(
    () => (x) => $.value[x] ? $.value[x].year : 0
  ), v = (x) => !M.value.keepViewOnOffsetClick || x ? !0 : !s.value, A = (x, ae, N, ne = !1) => {
    var de, et;
    v(ne) && ($.value[x] || ($.value[x] = { month: 0, year: 0 }), $.value[x].month = Wn(ae) ? (de = $.value[x]) == null ? void 0 : de.month : ae, $.value[x].year = Wn(N) ? (et = $.value[x]) == null ? void 0 : et.year : N);
  }, u = () => {
    e.autoApply && a("select-date");
  };
  Ze(() => {
    e.shadow || (c.value || (we(), w.value && L(w.value)), J(!0), e.focusStartDate && e.startDate && we());
  });
  const k = K(() => {
    var x;
    return (x = e.flow) != null && x.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), C = () => {
    e.autoApply && k.value && a("auto-apply");
  }, J = (x = !1) => {
    if (c.value)
      return Array.isArray(c.value) ? (r.value = c.value, f(x)) : O(c.value, x);
    if (b.value.count && x && !e.startDate)
      return i(G(), x);
  }, pe = () => Array.isArray(c.value) && S.value.enabled ? De(c.value[0]) === De(c.value[1] ?? c.value[0]) : !1, i = (x = /* @__PURE__ */ new Date(), ae = !1) => {
    if ((!b.value.count || !b.value.static || ae) && A(0, De(x), ye(x)), b.value.count && (!b.value.solo || !c.value || pe()))
      for (let N = 1; N < b.value.count; N++) {
        const ne = Ne(G(), { month: me.value(N - 1), year: I.value(N - 1) }), de = ar(ne, { months: 1 });
        $.value[N] = { month: De(de), year: ye(de) };
      }
  }, O = (x, ae) => {
    i(x), j("hours", $t(x)), j("minutes", Et(x)), j("seconds", na(x)), b.value.count && ae && F();
  }, o = (x) => {
    if (b.value.count) {
      if (b.value.solo) return 0;
      const ae = De(x[0]), N = De(x[1]);
      return Math.abs(N - ae) < b.value.count ? 0 : 1;
    }
    return 1;
  }, R = (x, ae) => {
    x[1] && S.value.showLastInRange ? i(x[o(x)], ae) : i(x[0], ae);
    const N = (ne, de) => [
      ne(x[0]),
      x[1] ? ne(x[1]) : h[de][1]
    ];
    j("hours", N($t, "hours")), j("minutes", N(Et, "minutes")), j("seconds", N(na, "seconds"));
  }, V = (x, ae) => {
    if ((S.value.enabled || e.weekPicker) && !Q.value.enabled)
      return R(x, ae);
    if (Q.value.enabled && ae) {
      const N = x[x.length - 1];
      return O(N, ae);
    }
  }, f = (x) => {
    const ae = c.value;
    V(ae, x), b.value.count && b.value.solo && F();
  }, ie = (x, ae) => {
    const N = Ne(G(), { month: me.value(ae), year: I.value(ae) }), ne = x < 0 ? gt(N, 1) : la(N, 1);
    T(De(ne), ye(ne), x < 0, e.preventMinMaxNavigation) && (A(ae, De(ne), ye(ne)), a("update-month-year", { instance: ae, month: De(ne), year: ye(ne) }), b.value.count && !b.value.solo && ke(ae), t());
  }, ke = (x) => {
    for (let ae = x - 1; ae >= 0; ae--) {
      const N = la(Ne(G(), { month: me.value(ae + 1), year: I.value(ae + 1) }), 1);
      A(ae, De(N), ye(N));
    }
    for (let ae = x + 1; ae <= b.value.count - 1; ae++) {
      const N = gt(Ne(G(), { month: me.value(ae - 1), year: I.value(ae - 1) }), 1);
      A(ae, De(N), ye(N));
    }
  }, F = () => {
    if (Array.isArray(c.value) && c.value.length === 2) {
      const x = G(
        G(c.value[1] ? c.value[1] : gt(c.value[0], 1))
      ), [ae, N] = [De(c.value[0]), ye(c.value[0])], [ne, de] = [De(c.value[1]), ye(c.value[1])];
      (ae !== ne || ae === ne && N !== de) && b.value.solo && A(1, De(x), ye(x));
    } else c.value && !Array.isArray(c.value) && (A(0, De(c.value), ye(c.value)), i(G()));
  }, we = () => {
    e.startDate && (A(0, De(G(e.startDate)), ye(G(e.startDate))), b.value.count && ke(0));
  }, p = (x, ae) => {
    if (e.monthChangeOnScroll) {
      const N = (/* @__PURE__ */ new Date()).getTime() - l.value.getTime(), ne = Math.abs(x.deltaY);
      let de = 500;
      ne > 1 && (de = 100), ne > 100 && (de = 0), N > de && (l.value = /* @__PURE__ */ new Date(), ie(e.monthChangeOnScroll !== "inverse" ? -x.deltaY : x.deltaY, ae));
    }
  }, B = (x, ae, N = !1) => {
    e.monthChangeOnArrows && e.vertical === N && ee(x, ae);
  }, ee = (x, ae) => {
    ie(x === "right" ? -1 : 1, ae);
  }, X = (x) => {
    if (U.value.markers)
      return Sa(x.value, U.value.markers);
  }, q = (x, ae) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [x == 0, !0];
      case "fair":
        return [x == 0 || ae > x, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Me = (x, ae, N, ne) => {
    if (e.sixWeeks && x.length < 6) {
      const de = 6 - x.length, et = (ae.getDay() + 7 - ne) % 7, vt = 6 - (N.getDay() + 7 - ne) % 7, [Bt, Ta] = q(et, vt);
      for (let ca = 1; ca <= de; ca++)
        if (Ta ? !!(ca % 2) == Bt : Bt) {
          const St = x[0].days[0], ja = P(ft(St.value, -7), De(ae));
          x.unshift({ days: ja });
        } else {
          const St = x[x.length - 1], ja = St.days[St.days.length - 1], qr = P(ft(ja.value, 1), De(ae));
          x.push({ days: qr });
        }
    }
    return x;
  }, P = (x, ae) => {
    const N = G(x), ne = [];
    for (let de = 0; de < 7; de++) {
      const et = ft(N, de), vt = De(et) !== ae;
      ne.push({
        text: e.hideOffsetDates && vt ? "" : et.getDate(),
        value: et,
        current: !vt,
        classData: {}
      });
    }
    return ne;
  }, oe = (x, ae) => {
    const N = [], ne = new Date(ae, x), de = new Date(ae, x + 1, 0), et = e.weekStart, vt = bt(ne, { weekStartsOn: et }), Bt = (Ta) => {
      const ca = P(Ta, x);
      if (N.push({ days: ca }), !N[N.length - 1].days.some(
        (St) => Te(nt(St.value), nt(de))
      )) {
        const St = ft(Ta, 7);
        Bt(St);
      }
    };
    return Bt(vt), Me(N, ne, de, et);
  }, fe = (x) => {
    const ae = It(G(x.value), h.hours, h.minutes, ut());
    a("date-update", ae), Q.value.enabled ? On(ae, c, Q.value.limit) : c.value = ae, n(), pt().then(() => {
      C();
    });
  }, Oe = (x) => S.value.noDisabledRange ? Ar(r.value[0], x).some((ae) => z(ae)) : !1, rt = () => {
    r.value = c.value ? c.value.slice() : [], r.value.length === 2 && !(S.value.fixedStart || S.value.fixedEnd) && (r.value = []);
  }, he = (x, ae) => {
    const N = [
      G(x.value),
      ft(G(x.value), +S.value.autoRange)
    ];
    te(N) ? (ae && At(x.value), r.value = N) : a("invalid-date", x.value);
  }, At = (x) => {
    const ae = De(G(x)), N = ye(G(x));
    if (A(0, ae, N), b.value.count > 0)
      for (let ne = 1; ne < b.value.count; ne++) {
        const de = Ts(
          Ne(G(x), { year: me.value(ne - 1), month: I.value(ne - 1) })
        );
        A(ne, de.month, de.year);
      }
  }, _t = (x) => {
    if (Oe(x.value) || !E(x.value, c.value, S.value.fixedStart ? 0 : 1))
      return a("invalid-date", x.value);
    r.value = Fr(G(x.value), c, a, S);
  }, ua = (x, ae) => {
    if (rt(), S.value.autoRange) return he(x, ae);
    if (S.value.fixedStart || S.value.fixedEnd) return _t(x);
    r.value[0] ? E(G(x.value), c.value) && !Oe(x.value) ? Be(G(x.value), G(r.value[0])) ? (r.value.unshift(G(x.value)), a("range-end", r.value[0])) : (r.value[1] = G(x.value), a("range-end", r.value[1])) : (e.autoApply && a("auto-apply-invalid", x.value), a("invalid-date", x.value)) : (r.value[0] = G(x.value), a("range-start", r.value[0]));
  }, ut = (x = !0) => e.enableSeconds ? Array.isArray(h.seconds) ? x ? h.seconds[0] : h.seconds[1] : h.seconds : 0, da = (x) => {
    r.value[x] = It(
      r.value[x],
      h.hours[x],
      h.minutes[x],
      ut(x !== 1)
    );
  }, Fa = () => {
    var x, ae;
    r.value[0] && r.value[1] && +((x = r.value) == null ? void 0 : x[0]) > +((ae = r.value) == null ? void 0 : ae[1]) && (r.value.reverse(), a("range-start", r.value[0]), a("range-end", r.value[1]));
  }, Ma = () => {
    r.value.length && (r.value[0] && !r.value[1] ? da(0) : (da(0), da(1), n()), Fa(), c.value = r.value.slice(), Ea(r.value, a, e.autoApply, e.modelAuto));
  }, Ba = (x, ae = !1) => {
    if (z(x.value) || !x.current && e.hideOffsetDates) return a("invalid-date", x.value);
    if (s.value = JSON.parse(JSON.stringify(x)), !S.value.enabled) return fe(x);
    Gn(h.hours) && Gn(h.minutes) && !Q.value.enabled && (ua(x, ae), Ma());
  }, Va = (x, ae) => {
    var N;
    A(x, ae.month, ae.year, !0), b.value.count && !b.value.solo && ke(x), a("update-month-year", { instance: x, month: ae.month, year: ae.year }), t(b.value.solo ? x : void 0);
    const ne = (N = e.flow) != null && N.length ? e.flow[e.flowStep] : void 0;
    !ae.fromNav && (ne === Xe.month || ne === Xe.year) && n();
  }, Ha = (x, ae) => {
    Lr({
      value: x,
      modelValue: c,
      range: S.value.enabled,
      timezone: ae ? void 0 : Y.value.timezone
    }), u(), e.multiCalendars && pt().then(() => J(!0));
  }, qa = () => {
    const x = xn(G(), Y.value);
    S.value.enabled ? c.value && Array.isArray(c.value) && c.value[0] ? c.value = Be(x, c.value[0]) ? [x, c.value[0]] : [c.value[0], x] : c.value = [x] : c.value = x, u();
  }, za = () => {
    if (Array.isArray(c.value))
      if (Q.value.enabled) {
        const x = Wa();
        c.value[c.value.length - 1] = W(x);
      } else
        c.value = c.value.map((x, ae) => x && W(x, ae));
    else
      c.value = W(c.value);
    a("time-update");
  }, Wa = () => Array.isArray(c.value) && c.value.length ? c.value[c.value.length - 1] : null;
  return {
    calendars: $,
    modelValue: c,
    month: me,
    year: I,
    time: h,
    disabledTimesConfig: ue,
    today: g,
    validateTime: le,
    getCalendarDays: oe,
    getMarker: X,
    handleScroll: p,
    handleSwipe: ee,
    handleArrow: B,
    selectDate: Ba,
    updateMonthYear: Va,
    presetDate: Ha,
    selectCurrentDate: qa,
    updateTime: (x, ae = !0, N = !1) => {
      _(x, ae, N, za);
    },
    assignMonthAndYear: i
  };
}, qi = { key: 0 }, zi = /* @__PURE__ */ Qe({
  __name: "DatePicker",
  props: {
    ...wt
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, {
      calendars: l,
      month: s,
      year: d,
      modelValue: c,
      time: $,
      disabledTimesConfig: h,
      today: g,
      validateTime: b,
      getCalendarDays: w,
      getMarker: S,
      handleArrow: M,
      handleScroll: Y,
      handleSwipe: U,
      selectDate: Q,
      updateMonthYear: T,
      presetDate: z,
      selectCurrentDate: te,
      updateTime: E,
      assignMonthAndYear: _
    } = Hi(r, n, pe, i), W = Ut(), { setHoverDate: j, getDayClassData: L, clearHoverDate: le } = ou(c, r), { defaultedMultiCalendars: ue } = Fe(r), me = Z([]), I = Z([]), v = Z(null), A = ct(W, "calendar"), u = ct(W, "monthYear"), k = ct(W, "timePicker"), C = (p) => {
      r.shadow || n("mount", p);
    };
    ot(
      l,
      () => {
        r.shadow || setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), ot(
      ue,
      (p, B) => {
        p.count - B.count > 0 && _();
      },
      { deep: !0 }
    );
    const J = K(() => (p) => w(s.value(p), d.value(p)).map((B) => ({
      ...B,
      days: B.days.map((ee) => (ee.marker = S(ee), ee.classData = L(ee), ee))
    })));
    function pe(p) {
      var B;
      p || p === 0 ? (B = I.value[p]) == null || B.triggerTransition(s.value(p), d.value(p)) : I.value.forEach((ee, X) => ee.triggerTransition(s.value(X), d.value(X)));
    }
    function i() {
      n("update-flow-step");
    }
    const O = (p, B = !1) => {
      Q(p, B), r.spaceConfirm && n("select-date");
    }, o = (p, B, ee = 0) => {
      var X;
      (X = me.value[ee]) == null || X.toggleMonthPicker(p, B);
    }, R = (p, B, ee = 0) => {
      var X;
      (X = me.value[ee]) == null || X.toggleYearPicker(p, B);
    }, V = (p, B, ee) => {
      var X;
      (X = v.value) == null || X.toggleTimePicker(p, B, ee);
    }, f = (p, B) => {
      var ee;
      if (!r.range) {
        const X = c.value ? c.value : g, q = B ? new Date(B) : X, Me = p ? bt(q, { weekStartsOn: 1 }) : dr(q, { weekStartsOn: 1 });
        Q({
          value: Me,
          current: De(q) === s.value(0),
          text: "",
          classData: {}
        }), (ee = document.getElementById(Yr(Me))) == null || ee.focus();
      }
    }, ie = (p) => {
      var B;
      (B = me.value[0]) == null || B.handleMonthYearChange(p, !0);
    }, ke = (p) => {
      T(0, { month: s.value(0), year: d.value(0) + (p ? 1 : -1), fromNav: !0 });
    }, F = (p, B) => {
      p === Xe.time && n(`time-picker-${B ? "open" : "close"}`), n("overlay-toggle", { open: B, overlay: p });
    }, we = (p) => {
      n("overlay-toggle", { open: !1, overlay: p }), n("focus-menu");
    };
    return a({
      clearHoverDate: le,
      presetDate: z,
      selectCurrentDate: te,
      toggleMonthPicker: o,
      toggleYearPicker: R,
      toggleTimePicker: V,
      handleArrow: M,
      updateMonthYear: T,
      getSidebarProps: () => ({
        modelValue: c,
        month: s,
        year: d,
        time: $,
        updateTime: E,
        updateMonthYear: T,
        selectDate: Q,
        presetDate: z
      }),
      changeMonth: ie,
      changeYear: ke,
      selectWeekDate: f
    }), (p, B) => (y(), D(be, null, [
      st(Ia, {
        "multi-calendars": m(ue).count,
        collapse: p.collapse
      }, {
        default: _e(({ instance: ee, index: X }) => [
          p.disableMonthYearSelect ? H("", !0) : (y(), xe(Si, je({
            key: 0,
            ref: (q) => {
              q && (me.value[X] = q);
            },
            months: m(Dr)(p.formatLocale, p.locale, p.monthNameFormat),
            years: m(Dn)(p.yearRange, p.locale, p.reverseYears),
            month: m(s)(ee),
            year: m(d)(ee),
            instance: ee
          }, p.$props, {
            onMount: B[0] || (B[0] = (q) => C(m(Wt).header)),
            onResetFlow: B[1] || (B[1] = (q) => p.$emit("reset-flow")),
            onUpdateMonthYear: (q) => m(T)(ee, q),
            onOverlayClosed: we,
            onOverlayOpened: B[2] || (B[2] = (q) => p.$emit("overlay-toggle", { open: !0, overlay: q }))
          }), Je({ _: 2 }, [
            $e(m(u), (q, Me) => ({
              name: q,
              fn: _e((P) => [
                se(p.$slots, q, Re(Ie(P)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          st(Vi, je({
            ref: (q) => {
              q && (I.value[X] = q);
            },
            "mapped-dates": J.value(ee),
            month: m(s)(ee),
            year: m(d)(ee),
            instance: ee
          }, p.$props, {
            onSelectDate: (q) => m(Q)(q, ee !== 1),
            onHandleSpace: (q) => O(q, ee !== 1),
            onSetHoverDate: B[3] || (B[3] = (q) => m(j)(q)),
            onHandleScroll: (q) => m(Y)(q, ee),
            onHandleSwipe: (q) => m(U)(q, ee),
            onMount: B[4] || (B[4] = (q) => C(m(Wt).calendar)),
            onResetFlow: B[5] || (B[5] = (q) => p.$emit("reset-flow")),
            onTooltipOpen: B[6] || (B[6] = (q) => p.$emit("tooltip-open", q)),
            onTooltipClose: B[7] || (B[7] = (q) => p.$emit("tooltip-close", q))
          }), Je({ _: 2 }, [
            $e(m(A), (q, Me) => ({
              name: q,
              fn: _e((P) => [
                se(p.$slots, q, Re(Ie({ ...P })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      p.enableTimePicker ? (y(), D("div", qi, [
        p.$slots["time-picker"] ? se(p.$slots, "time-picker", Re(je({ key: 0 }, { time: m($), updateTime: m(E) }))) : (y(), xe(Vr, je({
          key: 1,
          ref_key: "timePickerRef",
          ref: v
        }, p.$props, {
          hours: m($).hours,
          minutes: m($).minutes,
          seconds: m($).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": m(h),
          "validate-time": m(b),
          onMount: B[8] || (B[8] = (ee) => C(m(Wt).timePicker)),
          "onUpdate:hours": B[9] || (B[9] = (ee) => m(E)(ee)),
          "onUpdate:minutes": B[10] || (B[10] = (ee) => m(E)(ee, !1)),
          "onUpdate:seconds": B[11] || (B[11] = (ee) => m(E)(ee, !1, !0)),
          onResetFlow: B[12] || (B[12] = (ee) => p.$emit("reset-flow")),
          onOverlayClosed: B[13] || (B[13] = (ee) => F(ee, !1)),
          onOverlayOpened: B[14] || (B[14] = (ee) => F(ee, !0)),
          onAmPmChange: B[15] || (B[15] = (ee) => p.$emit("am-pm-change", ee))
        }), Je({ _: 2 }, [
          $e(m(k), (ee, X) => ({
            name: ee,
            fn: _e((q) => [
              se(p.$slots, ee, Re(Ie(q)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : H("", !0)
    ], 64));
  }
}), Wi = (e, a) => {
  const t = Z(), {
    defaultedMultiCalendars: n,
    defaultedConfig: r,
    defaultedHighlight: l,
    defaultedRange: s,
    propDates: d,
    defaultedFilters: c,
    defaultedMultiDates: $
  } = Fe(e), { modelValue: h, year: g, month: b, calendars: w } = Da(e, a), { isDisabled: S } = Ft(e), { selectYear: M, groupedYears: Y, showYearPicker: U, isDisabled: Q, toggleYearPicker: T, handleYearSelect: z, handleYear: te } = Br({
    modelValue: h,
    multiCalendars: n,
    range: s,
    highlight: l,
    calendars: w,
    propDates: d,
    month: b,
    year: g,
    filters: c,
    props: e,
    emit: a
  }), E = (v, A) => [v, A].map((u) => Mt(u, "MMMM", { locale: e.formatLocale })).join("-"), _ = K(() => (v) => h.value ? Array.isArray(h.value) ? h.value.some((A) => Hn(v, A)) : Hn(h.value, v) : !1), W = (v) => {
    if (s.value.enabled) {
      if (Array.isArray(h.value)) {
        const A = Te(v, h.value[0]) || Te(v, h.value[1]);
        return Na(h.value, t.value, v) && !A;
      }
      return !1;
    }
    return !1;
  }, j = (v, A) => v.quarter === In(A) && v.year === ye(A), L = (v) => typeof l.value == "function" ? l.value({ quarter: In(v), year: ye(v) }) : !!l.value.quarters.find((A) => j(A, v)), le = K(() => (v) => {
    const A = Ne(/* @__PURE__ */ new Date(), { year: g.value(v) });
    return fl({
      start: ga(A),
      end: ur(A)
    }).map((u) => {
      const k = qt(u), C = En(u), J = S(u), pe = W(k), i = L(k);
      return {
        text: E(k, C),
        value: k,
        active: _.value(k),
        highlighted: i,
        disabled: J,
        isBetween: pe
      };
    });
  }), ue = (v) => {
    On(v, h, $.value.limit), a("auto-apply", !0);
  }, me = (v) => {
    h.value = $n(h, v, a), Ea(h.value, a, e.autoApply, e.modelAuto);
  }, I = (v) => {
    h.value = v, a("auto-apply");
  };
  return {
    defaultedConfig: r,
    defaultedMultiCalendars: n,
    groupedYears: Y,
    year: g,
    isDisabled: Q,
    quarters: le,
    showYearPicker: U,
    modelValue: h,
    setHoverDate: (v) => {
      t.value = v;
    },
    selectYear: M,
    selectQuarter: (v, A, u) => {
      if (!u)
        return w.value[A].month = De(En(v)), $.value.enabled ? ue(v) : s.value.enabled ? me(v) : I(v);
    },
    toggleYearPicker: T,
    handleYearSelect: z,
    handleYear: te
  };
}, ji = { class: "dp--quarter-items" }, Ui = ["data-test", "disabled", "onClick", "onMouseover"], Ki = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...wt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, l = Ut(), s = ct(l, "yearMode"), {
      defaultedMultiCalendars: d,
      defaultedConfig: c,
      groupedYears: $,
      year: h,
      isDisabled: g,
      quarters: b,
      modelValue: w,
      showYearPicker: S,
      setHoverDate: M,
      selectQuarter: Y,
      toggleYearPicker: U,
      handleYearSelect: Q,
      handleYear: T
    } = Wi(r, n);
    return a({ getSidebarProps: () => ({
      modelValue: w,
      year: h,
      selectQuarter: Y,
      handleYearSelect: Q,
      handleYear: T
    }) }), (z, te) => (y(), xe(Ia, {
      "multi-calendars": m(d).count,
      collapse: z.collapse,
      stretch: ""
    }, {
      default: _e(({ instance: E }) => [
        re("div", {
          class: "dp-quarter-picker-wrap",
          style: mt({ minHeight: `${m(c).modeHeight}px` })
        }, [
          z.$slots["top-extra"] ? se(z.$slots, "top-extra", {
            key: 0,
            value: z.internalModelValue
          }) : H("", !0),
          re("div", null, [
            st(Er, je(z.$props, {
              items: m($)(E),
              instance: E,
              "show-year-picker": m(S)[E],
              year: m(h)(E),
              "is-disabled": (_) => m(g)(E, _),
              onHandleYear: (_) => m(T)(E, _),
              onYearSelect: (_) => m(Q)(_, E),
              onToggleYearPicker: (_) => m(U)(E, _ == null ? void 0 : _.flow, _ == null ? void 0 : _.show)
            }), Je({ _: 2 }, [
              $e(m(s), (_, W) => ({
                name: _,
                fn: _e((j) => [
                  se(z.$slots, _, Re(Ie(j)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          re("div", ji, [
            (y(!0), D(be, null, $e(m(b)(E), (_, W) => (y(), D("div", { key: W }, [
              re("button", {
                type: "button",
                class: ge(["dp--qr-btn", {
                  "dp--qr-btn-active": _.active,
                  "dp--qr-btn-between": _.isBetween,
                  "dp--qr-btn-disabled": _.disabled,
                  "dp--highlighted": _.highlighted
                }]),
                "data-test": _.value,
                disabled: _.disabled,
                onClick: (j) => m(Y)(_.value, E, _.disabled),
                onMouseover: (j) => m(M)(_.value)
              }, [
                z.$slots.quarter ? se(z.$slots, "quarter", {
                  key: 0,
                  value: _.value,
                  text: _.text
                }) : (y(), D(be, { key: 1 }, [
                  at(Pe(_.text), 1)
                ], 64))
              ], 42, Ui)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Qi = ["id", "aria-label"], Gi = {
  key: 0,
  class: "dp--menu-load-container"
}, Xi = /* @__PURE__ */ re("span", { class: "dp--menu-loader" }, null, -1), Ji = [
  Xi
], Zi = {
  key: 0,
  class: "dp__sidebar_left"
}, eu = ["data-test", "onClick", "onKeydown"], tu = {
  key: 2,
  class: "dp__sidebar_right"
}, au = {
  key: 3,
  class: "dp__action_extra"
}, Xn = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Ya,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, l = Z(null), s = K(() => {
      const { openOnTop: P, ...oe } = r;
      return {
        ...oe,
        flowStep: j.value,
        collapse: r.collapse,
        noOverlayFocus: r.noOverlayFocus,
        menuWrapRef: l.value
      };
    }), { setMenuFocused: d, setShiftKey: c, control: $ } = Ir(), h = Ut(), { defaultedTextInput: g, defaultedInline: b, defaultedConfig: w, defaultedUI: S } = Fe(r), M = Z(null), Y = Z(0), U = Z(null), Q = Z(!1), T = Z(null);
    Ze(() => {
      if (!r.shadow) {
        Q.value = !0, z(), window.addEventListener("resize", z);
        const P = Ue(l);
        if (P && !g.value.enabled && !b.value.enabled && (d(!0), A()), P) {
          const oe = (fe) => {
            w.value.allowPreventDefault && fe.preventDefault(), Yt(fe, w.value, !0);
          };
          P.addEventListener("pointerdown", oe), P.addEventListener("mousedown", oe);
        }
      }
    }), Ra(() => {
      window.removeEventListener("resize", z);
    });
    const z = () => {
      const P = Ue(U);
      P && (Y.value = P.getBoundingClientRect().width);
    }, { arrowRight: te, arrowLeft: E, arrowDown: _, arrowUp: W } = Lt(), { flowStep: j, updateFlowStep: L, childMount: le, resetFlow: ue, handleFlow: me } = su(r, n, T), I = K(() => r.monthPicker ? oi : r.yearPicker ? ii : r.timePicker ? Mi : r.quarterPicker ? Ki : zi), v = K(() => {
      var P;
      if (w.value.arrowLeft) return w.value.arrowLeft;
      const oe = (P = l.value) == null ? void 0 : P.getBoundingClientRect(), fe = r.getInputRect();
      return (fe == null ? void 0 : fe.width) < (Y == null ? void 0 : Y.value) && (fe == null ? void 0 : fe.left) <= ((oe == null ? void 0 : oe.left) ?? 0) ? `${(fe == null ? void 0 : fe.width) / 2}px` : (fe == null ? void 0 : fe.right) >= ((oe == null ? void 0 : oe.right) ?? 0) && (fe == null ? void 0 : fe.width) < (Y == null ? void 0 : Y.value) ? `${(Y == null ? void 0 : Y.value) - (fe == null ? void 0 : fe.width) / 2}px` : "50%";
    }), A = () => {
      const P = Ue(l);
      P && P.focus({ preventScroll: !0 });
    }, u = K(() => {
      var P;
      return ((P = T.value) == null ? void 0 : P.getSidebarProps()) || {};
    }), k = () => {
      r.openOnTop && n("recalculate-position");
    }, C = ct(h, "action"), J = K(() => r.monthPicker || r.yearPicker ? ct(h, "monthYear") : r.timePicker ? ct(h, "timePicker") : ct(h, "shared")), pe = K(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), i = K(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly,
      "dp-menu-loading": r.loading
    })), O = K(
      () => ({
        dp__menu: !0,
        dp__menu_index: !b.value.enabled,
        dp__relative: b.value.enabled,
        [r.menuClassName]: !!r.menuClassName,
        ...S.value.menu ?? {}
      })
    ), o = (P) => {
      Yt(P, w.value, !0);
    }, R = () => {
      r.escClose && n("close-picker");
    }, V = (P) => {
      if (r.arrowNavigation) {
        if (P === tt.up) return W();
        if (P === tt.down) return _();
        if (P === tt.left) return E();
        if (P === tt.right) return te();
      } else P === tt.left || P === tt.up ? we("handleArrow", tt.left, 0, P === tt.up) : we("handleArrow", tt.right, 0, P === tt.down);
    }, f = (P) => {
      c(P.shiftKey), !r.disableMonthYearSelect && P.code === Ee.tab && P.target.classList.contains("dp__menu") && $.value.shiftKeyInMenu && (P.preventDefault(), Yt(P, w.value, !0), n("close-picker"));
    }, ie = () => {
      A(), n("time-picker-close");
    }, ke = (P) => {
      var oe, fe, Oe;
      (oe = T.value) == null || oe.toggleTimePicker(!1, !1), (fe = T.value) == null || fe.toggleMonthPicker(!1, !1, P), (Oe = T.value) == null || Oe.toggleYearPicker(!1, !1, P);
    }, F = (P, oe = 0) => {
      var fe, Oe, rt;
      return P === "month" ? (fe = T.value) == null ? void 0 : fe.toggleMonthPicker(!1, !0, oe) : P === "year" ? (Oe = T.value) == null ? void 0 : Oe.toggleYearPicker(!1, !0, oe) : P === "time" ? (rt = T.value) == null ? void 0 : rt.toggleTimePicker(!0, !1) : ke(oe);
    }, we = (P, ...oe) => {
      var fe, Oe;
      (fe = T.value) != null && fe[P] && ((Oe = T.value) == null || Oe[P](...oe));
    }, p = () => {
      we("selectCurrentDate");
    }, B = (P, oe) => {
      we("presetDate", P, oe);
    }, ee = () => {
      we("clearHoverDate");
    }, X = (P, oe) => {
      we("updateMonthYear", P, oe);
    }, q = (P, oe) => {
      P.preventDefault(), V(oe);
    }, Me = (P) => {
      var oe;
      if (f(P), P.key === Ee.home || P.key === Ee.end)
        return we(
          "selectWeekDate",
          P.key === Ee.home,
          P.target.getAttribute("id")
        );
      switch ((P.key === Ee.pageUp || P.key === Ee.pageDown) && (P.shiftKey ? we("changeYear", P.key === Ee.pageUp) : we("changeMonth", P.key === Ee.pageUp), P.target.getAttribute("id") && ((oe = l.value) == null || oe.focus({ preventScroll: !0 }))), P.key) {
        case Ee.esc:
          return R();
        case Ee.arrowLeft:
          return q(P, tt.left);
        case Ee.arrowRight:
          return q(P, tt.right);
        case Ee.arrowUp:
          return q(P, tt.up);
        case Ee.arrowDown:
          return q(P, tt.down);
        default:
          return;
      }
    };
    return a({
      updateMonthYear: X,
      switchView: F,
      handleFlow: me
    }), (P, oe) => {
      var fe, Oe, rt;
      return y(), D("div", {
        id: P.uid ? `dp-menu-${P.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: l,
        tabindex: "0",
        role: "dialog",
        "aria-label": (fe = P.ariaLabels) == null ? void 0 : fe.menu,
        class: ge(O.value),
        style: mt({ "--dp-arrow-left": v.value }),
        onMouseleave: ee,
        onClick: o,
        onKeydown: Me
      }, [
        (P.disabled || P.readonly) && m(b).enabled || P.loading ? (y(), D("div", {
          key: 0,
          class: ge(i.value)
        }, [
          P.loading ? (y(), D("div", Gi, Ji)) : H("", !0)
        ], 2)) : H("", !0),
        !m(b).enabled && !P.teleportCenter ? (y(), D("div", {
          key: 1,
          class: ge(pe.value)
        }, null, 2)) : H("", !0),
        re("div", {
          ref_key: "innerMenuRef",
          ref: U,
          class: ge({
            dp__menu_content_wrapper: ((Oe = P.presetDates) == null ? void 0 : Oe.length) || !!P.$slots["left-sidebar"] || !!P.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((rt = P.presetDates) == null ? void 0 : rt.length) || !!P.$slots["left-sidebar"] || !!P.$slots["right-sidebar"])
          }),
          style: mt({ "--dp-menu-width": `${Y.value}px` })
        }, [
          P.$slots["left-sidebar"] ? (y(), D("div", Zi, [
            se(P.$slots, "left-sidebar", Re(Ie(u.value)))
          ])) : H("", !0),
          P.presetDates.length ? (y(), D("div", {
            key: 1,
            class: ge({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (y(!0), D(be, null, $e(P.presetDates, (he, At) => (y(), D(be, { key: At }, [
              he.slot ? se(P.$slots, he.slot, {
                key: 0,
                presetDate: B,
                label: he.label,
                value: he.value
              }) : (y(), D("button", {
                key: 1,
                type: "button",
                style: mt(he.style || {}),
                class: ge(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test": he.testId ?? void 0,
                onClick: Ot((_t) => B(he.value, he.noTz), ["prevent"]),
                onKeydown: (_t) => m(lt)(_t, () => B(he.value, he.noTz), !0)
              }, Pe(he.label), 47, eu))
            ], 64))), 128))
          ], 2)) : H("", !0),
          re("div", {
            ref_key: "calendarWrapperRef",
            ref: M,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (y(), xe(zt(I.value), je({
              ref_key: "dynCmpRef",
              ref: T
            }, s.value, {
              "flow-step": m(j),
              onMount: m(le),
              onUpdateFlowStep: m(L),
              onResetFlow: m(ue),
              onFocusMenu: A,
              onSelectDate: oe[0] || (oe[0] = (he) => P.$emit("select-date")),
              onDateUpdate: oe[1] || (oe[1] = (he) => P.$emit("date-update", he)),
              onTooltipOpen: oe[2] || (oe[2] = (he) => P.$emit("tooltip-open", he)),
              onTooltipClose: oe[3] || (oe[3] = (he) => P.$emit("tooltip-close", he)),
              onAutoApply: oe[4] || (oe[4] = (he) => P.$emit("auto-apply", he)),
              onRangeStart: oe[5] || (oe[5] = (he) => P.$emit("range-start", he)),
              onRangeEnd: oe[6] || (oe[6] = (he) => P.$emit("range-end", he)),
              onInvalidFixedRange: oe[7] || (oe[7] = (he) => P.$emit("invalid-fixed-range", he)),
              onTimeUpdate: oe[8] || (oe[8] = (he) => P.$emit("time-update")),
              onAmPmChange: oe[9] || (oe[9] = (he) => P.$emit("am-pm-change", he)),
              onTimePickerOpen: oe[10] || (oe[10] = (he) => P.$emit("time-picker-open", he)),
              onTimePickerClose: ie,
              onRecalculatePosition: k,
              onUpdateMonthYear: oe[11] || (oe[11] = (he) => P.$emit("update-month-year", he)),
              onAutoApplyInvalid: oe[12] || (oe[12] = (he) => P.$emit("auto-apply-invalid", he)),
              onInvalidDate: oe[13] || (oe[13] = (he) => P.$emit("invalid-date", he)),
              onOverlayToggle: oe[14] || (oe[14] = (he) => P.$emit("overlay-toggle", he)),
              "onUpdate:internalModelValue": oe[15] || (oe[15] = (he) => P.$emit("update:internal-model-value", he))
            }), Je({ _: 2 }, [
              $e(J.value, (he, At) => ({
                name: he,
                fn: _e((_t) => [
                  se(P.$slots, he, Re(Ie({ ..._t })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          P.$slots["right-sidebar"] ? (y(), D("div", tu, [
            se(P.$slots, "right-sidebar", Re(Ie(u.value)))
          ])) : H("", !0),
          P.$slots["action-extra"] ? (y(), D("div", au, [
            P.$slots["action-extra"] ? se(P.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: p
            }) : H("", !0)
          ])) : H("", !0)
        ], 6),
        !P.autoApply || m(w).keepActionRow ? (y(), xe(Js, je({
          key: 2,
          "menu-mount": Q.value
        }, s.value, {
          "calendar-width": Y.value,
          onClosePicker: oe[16] || (oe[16] = (he) => P.$emit("close-picker")),
          onSelectDate: oe[17] || (oe[17] = (he) => P.$emit("select-date")),
          onInvalidSelect: oe[18] || (oe[18] = (he) => P.$emit("invalid-select")),
          onSelectNow: p
        }), Je({ _: 2 }, [
          $e(m(C), (he, At) => ({
            name: he,
            fn: _e((_t) => [
              se(P.$slots, he, Re(Ie({ ..._t })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : H("", !0)
      ], 46, Qi);
    };
  }
});
var Zt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Zt || {});
const nu = ({
  menuRef: e,
  menuRefInner: a,
  inputRef: t,
  pickerWrapperRef: n,
  inline: r,
  emit: l,
  props: s,
  slots: d
}) => {
  const c = Z({}), $ = Z(!1), h = Z({
    top: "0",
    left: "0"
  }), g = Z(!1), b = ya(s, "teleportCenter");
  ot(b, () => {
    h.value = JSON.parse(JSON.stringify({})), z();
  });
  const w = (v) => {
    if (s.teleport) {
      const A = v.getBoundingClientRect();
      return {
        left: A.left + window.scrollX,
        top: A.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, S = (v, A) => {
    h.value.left = `${v + A - c.value.width}px`;
  }, M = (v) => {
    h.value.left = `${v}px`;
  }, Y = (v, A) => {
    s.position === Zt.left && M(v), s.position === Zt.right && S(v, A), s.position === Zt.center && (h.value.left = `${v + A / 2 - c.value.width / 2}px`);
  }, U = (v) => {
    const { width: A, height: u } = v.getBoundingClientRect(), { top: k, left: C } = s.altPosition ? s.altPosition(v) : w(v);
    return { top: +k, left: +C, width: A, height: u };
  }, Q = () => {
    h.value.left = "50%", h.value.top = "50%", h.value.transform = "translate(-50%, -50%)", h.value.position = "fixed", delete h.value.opacity;
  }, T = () => {
    const v = Ue(t), { top: A, left: u, transform: k } = s.altPosition(v);
    h.value = { top: `${A}px`, left: `${u}px`, transform: k ?? "" };
  }, z = (v = !0) => {
    var A;
    if (!r.value.enabled) {
      if (b.value) return Q();
      if (s.altPosition !== null) return T();
      if (v) {
        const u = s.teleport ? (A = a.value) == null ? void 0 : A.$el : e.value;
        u && (c.value = u.getBoundingClientRect()), l("recalculate-position");
      }
      return le();
    }
  }, te = ({ inputEl: v, left: A, width: u }) => {
    window.screen.width > 768 && !$.value && Y(A, u), W(v);
  }, E = (v) => {
    const { top: A, left: u, height: k, width: C } = U(v);
    h.value.top = `${k + A + +s.offset}px`, g.value = !1, $.value || (h.value.left = `${u + C / 2 - c.value.width / 2}px`), te({ inputEl: v, left: u, width: C });
  }, _ = (v) => {
    const { top: A, left: u, width: k } = U(v);
    h.value.top = `${A - +s.offset - c.value.height}px`, g.value = !0, te({ inputEl: v, left: u, width: k });
  }, W = (v) => {
    if (s.autoPosition) {
      const { left: A, width: u } = U(v), { left: k, right: C } = c.value;
      if (!$.value) {
        if (Math.abs(k) !== Math.abs(C)) {
          if (k <= 0)
            return $.value = !0, M(A);
          if (C >= document.documentElement.clientWidth)
            return $.value = !0, S(A, u);
        }
        return Y(A, u);
      }
    }
  }, j = () => {
    const v = Ue(t);
    if (v) {
      const { height: A } = c.value, { top: u, height: k } = v.getBoundingClientRect(), C = window.innerHeight - u - k, J = u;
      return A <= C ? Ht.bottom : A > C && A <= J ? Ht.top : C >= J ? Ht.bottom : Ht.top;
    }
    return Ht.bottom;
  }, L = (v) => j() === Ht.bottom ? E(v) : _(v), le = () => {
    const v = Ue(t);
    if (v)
      return s.autoPosition ? L(v) : E(v);
  }, ue = function(v) {
    if (v) {
      const A = v.scrollHeight > v.clientHeight, u = window.getComputedStyle(v).overflowY.indexOf("hidden") !== -1;
      return A && !u;
    }
    return !0;
  }, me = function(v) {
    return !v || v === document.body || v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : ue(v) ? v : me(v.assignedSlot ? v.assignedSlot.parentNode : v.parentNode);
  }, I = (v) => {
    if (v)
      switch (s.position) {
        case Zt.left:
          return { left: 0, transform: "translateX(0)" };
        case Zt.right:
          return { left: `${v.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${v.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: g,
    menuStyle: h,
    xCorrect: $,
    setMenuPosition: z,
    getScrollableParent: me,
    shadowRender: (v, A) => {
      var u, k, C;
      const J = document.createElement("div"), pe = (u = Ue(t)) == null ? void 0 : u.getBoundingClientRect();
      J.setAttribute("id", "dp--temp-container");
      const i = (k = n.value) != null && k.clientWidth ? n.value : document.body;
      i.append(J);
      const O = I(pe), o = Ur(
        v,
        {
          ...A,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...O }
        },
        Object.fromEntries(
          Object.keys(d).filter((R) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(R)).map((R) => [R, d[R]])
        )
      );
      Cn(o, J), c.value = (C = o.el) == null ? void 0 : C.getBoundingClientRect(), Cn(null, J), i.removeChild(J);
    }
  };
}, Rt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] }
], ru = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], lu = {
  all: () => Rt,
  monthYear: () => Rt.filter((e) => e.use.includes("month-year")),
  input: () => ru,
  timePicker: () => Rt.filter((e) => e.use.includes("time")),
  action: () => Rt.filter((e) => e.use.includes("action")),
  calendar: () => Rt.filter((e) => e.use.includes("calendar")),
  menu: () => Rt.filter((e) => e.use.includes("menu")),
  shared: () => Rt.filter((e) => e.use.includes("shared")),
  yearMode: () => Rt.filter((e) => e.use.includes("year-mode"))
}, ct = (e, a, t) => {
  const n = [];
  return lu[a]().forEach((r) => {
    e[r.name] && n.push(r.name);
  }), t != null && t.length && t.forEach((r) => {
    r.slot && n.push(r.slot);
  }), n;
}, xa = (e) => {
  const a = K(() => (n) => e.value ? n ? e.value.open : e.value.close : ""), t = K(() => (n) => e.value ? n ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: a, showTransition: !!e.value, menuTransition: t };
}, Da = (e, a, t) => {
  const { defaultedRange: n, defaultedTz: r } = Fe(e), l = G(it(G(), r.value.timezone)), s = Z([{ month: De(l), year: ye(l) }]), d = (b) => {
    const w = {
      hours: $t(l),
      minutes: Et(l),
      seconds: 0
    };
    return n.value.enabled ? [w[b], w[b]] : w[b];
  }, c = _a({
    hours: d("hours"),
    minutes: d("minutes"),
    seconds: d("seconds")
  });
  ot(
    n,
    (b, w) => {
      b.enabled !== w.enabled && (c.hours = d("hours"), c.minutes = d("minutes"), c.seconds = d("seconds"));
    },
    { deep: !0 }
  );
  const $ = K({
    get: () => e.internalModelValue,
    set: (b) => {
      !e.readonly && !e.disabled && a("update:internal-model-value", b);
    }
  }), h = K(
    () => (b) => s.value[b] ? s.value[b].month : 0
  ), g = K(
    () => (b) => s.value[b] ? s.value[b].year : 0
  );
  return ot(
    $,
    (b, w) => {
      t && JSON.stringify(b ?? {}) !== JSON.stringify(w ?? {}) && t();
    },
    { deep: !0 }
  ), {
    calendars: s,
    time: c,
    modelValue: $,
    month: h,
    year: g,
    today: l
  };
}, ou = (e, a) => {
  const {
    defaultedMultiCalendars: t,
    defaultedMultiDates: n,
    defaultedUI: r,
    defaultedHighlight: l,
    defaultedTz: s,
    propDates: d,
    defaultedRange: c
  } = Fe(a), { isDisabled: $ } = Ft(a), h = Z(null), g = Z(it(/* @__PURE__ */ new Date(), s.value.timezone)), b = (o) => {
    !o.current && a.hideOffsetDates || (h.value = o.value);
  }, w = () => {
    h.value = null;
  }, S = (o) => Array.isArray(e.value) && c.value.enabled && e.value[0] && h.value ? o ? qe(h.value, e.value[0]) : Be(h.value, e.value[0]) : !0, M = (o, R) => {
    const V = () => e.value ? R ? e.value[0] || null : e.value[1] : null, f = e.value && Array.isArray(e.value) ? V() : null;
    return Te(G(o.value), f);
  }, Y = (o) => {
    const R = Array.isArray(e.value) ? e.value[0] : null;
    return o ? !Be(h.value ?? null, R) : !0;
  }, U = (o, R = !0) => (c.value.enabled || a.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? a.hideOffsetDates && !o.current ? !1 : Te(G(o.value), e.value[R ? 0 : 1]) : c.value.enabled ? M(o, R) && Y(R) || Te(o.value, Array.isArray(e.value) ? e.value[0] : null) && S(R) : !1, Q = (o, R) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const V = Te(o.value, h.value);
      return R ? qe(e.value[0], o.value) && V : Be(e.value[0], o.value) && V;
    }
    return !1;
  }, T = (o) => !e.value || a.hideOffsetDates && !o.current ? !1 : c.value.enabled ? a.modelAuto && Array.isArray(e.value) ? Te(o.value, e.value[0] ? e.value[0] : g.value) : !1 : n.value.enabled && Array.isArray(e.value) ? e.value.some((R) => Te(R, o.value)) : Te(o.value, e.value ? e.value : g.value), z = (o) => {
    if (c.value.autoRange || a.weekPicker) {
      if (h.value) {
        if (a.hideOffsetDates && !o.current) return !1;
        const R = ft(h.value, +c.value.autoRange), V = Tt(G(h.value), a.weekStart);
        return a.weekPicker ? Te(V[1], G(o.value)) : Te(R, G(o.value));
      }
      return !1;
    }
    return !1;
  }, te = (o) => {
    if (c.value.autoRange || a.weekPicker) {
      if (h.value) {
        const R = ft(h.value, +c.value.autoRange);
        if (a.hideOffsetDates && !o.current) return !1;
        const V = Tt(G(h.value), a.weekStart);
        return a.weekPicker ? qe(o.value, V[0]) && Be(o.value, V[1]) : qe(o.value, h.value) && Be(o.value, R);
      }
      return !1;
    }
    return !1;
  }, E = (o) => {
    if (c.value.autoRange || a.weekPicker) {
      if (h.value) {
        if (a.hideOffsetDates && !o.current) return !1;
        const R = Tt(G(h.value), a.weekStart);
        return a.weekPicker ? Te(R[0], o.value) : Te(h.value, o.value);
      }
      return !1;
    }
    return !1;
  }, _ = (o) => Na(e.value, h.value, o.value), W = () => a.modelAuto && Array.isArray(a.internalModelValue) ? !!a.internalModelValue[0] : !1, j = () => a.modelAuto ? Mr(a.internalModelValue) : !0, L = (o) => {
    if (a.weekPicker) return !1;
    const R = c.value.enabled ? !U(o) && !U(o, !1) : !0;
    return !$(o.value) && !T(o) && !(!o.current && a.hideOffsetDates) && R;
  }, le = (o) => c.value.enabled ? a.modelAuto ? W() && T(o) : !1 : T(o), ue = (o) => l.value ? xs(o.value, d.value.highlight) : !1, me = (o) => {
    const R = $(o.value);
    return R && (typeof l.value == "function" ? !l.value(o.value, R) : !l.value.options.highlightDisabled);
  }, I = (o) => {
    var R;
    return typeof l.value == "function" ? l.value(o.value) : (R = l.value.weekdays) == null ? void 0 : R.includes(o.value.getDay());
  }, v = (o) => (c.value.enabled || a.weekPicker) && (!(t.value.count > 0) || o.current) && j() && !(!o.current && a.hideOffsetDates) && !T(o) ? _(o) : !1, A = (o) => {
    const { isRangeStart: R, isRangeEnd: V } = J(o), f = c.value.enabled ? R || V : !1;
    return {
      dp__cell_offset: !o.current,
      dp__pointer: !a.disabled && !(!o.current && a.hideOffsetDates) && !$(o.value),
      dp__cell_disabled: $(o.value),
      dp__cell_highlight: !me(o) && (ue(o) || I(o)) && !le(o) && !f && !E(o) && !(v(o) && a.weekPicker) && !V,
      dp__cell_highlight_active: !me(o) && (ue(o) || I(o)) && le(o),
      dp__today: !a.noToday && Te(o.value, g.value) && o.current,
      "dp--past": Be(o.value, g.value),
      "dp--future": qe(o.value, g.value)
    };
  }, u = (o) => ({
    dp__active_date: le(o),
    dp__date_hover: L(o)
  }), k = (o) => {
    if (e.value && !Array.isArray(e.value)) {
      const R = Tt(e.value, a.weekStart);
      return {
        ...i(o),
        dp__range_start: Te(R[0], o.value),
        dp__range_end: Te(R[1], o.value),
        dp__range_between_week: qe(o.value, R[0]) && Be(o.value, R[1])
      };
    }
    return {
      ...i(o)
    };
  }, C = (o) => {
    if (e.value && Array.isArray(e.value)) {
      const R = Tt(e.value[0], a.weekStart), V = e.value[1] ? Tt(e.value[1], a.weekStart) : [];
      return {
        ...i(o),
        dp__range_start: Te(R[0], o.value) || Te(V[0], o.value),
        dp__range_end: Te(R[1], o.value) || Te(V[1], o.value),
        dp__range_between_week: qe(o.value, R[0]) && Be(o.value, R[1]) || qe(o.value, V[0]) && Be(o.value, V[1]),
        dp__range_between: qe(o.value, R[1]) && Be(o.value, V[0])
      };
    }
    return {
      ...i(o)
    };
  }, J = (o) => {
    const R = t.value.count > 0 ? o.current && U(o) && j() : U(o) && j(), V = t.value.count > 0 ? o.current && U(o, !1) && j() : U(o, !1) && j();
    return { isRangeStart: R, isRangeEnd: V };
  }, pe = (o) => {
    const { isRangeStart: R, isRangeEnd: V } = J(o);
    return {
      dp__range_start: R,
      dp__range_end: V,
      dp__range_between: v(o),
      dp__date_hover: Te(o.value, h.value) && !R && !V && !a.weekPicker,
      dp__date_hover_start: Q(o, !0),
      dp__date_hover_end: Q(o, !1)
    };
  }, i = (o) => ({
    ...pe(o),
    dp__cell_auto_range: te(o),
    dp__cell_auto_range_start: E(o),
    dp__cell_auto_range_end: z(o)
  }), O = (o) => c.value.enabled ? c.value.autoRange ? i(o) : a.modelAuto ? { ...u(o), ...pe(o) } : a.weekPicker ? C(o) : pe(o) : a.weekPicker ? k(o) : u(o);
  return {
    setHoverDate: b,
    clearHoverDate: w,
    getDayClassData: (o) => a.hideOffsetDates && !o.current ? {} : {
      ...A(o),
      ...O(o),
      [a.dayClass ? a.dayClass(o.value, a.internalModelValue) : ""]: !0,
      [a.calendarCellClassName]: !!a.calendarCellClassName,
      ...r.value.calendarCell ?? {}
    }
  };
}, Ft = (e) => {
  const { defaultedFilters: a, defaultedRange: t, propDates: n, defaultedMultiDates: r } = Fe(e), l = (I) => n.value.disabledDates ? typeof n.value.disabledDates == "function" ? n.value.disabledDates(G(I)) : !!Sa(I, n.value.disabledDates) : !1, s = (I) => n.value.maxDate ? e.yearPicker ? ye(I) > ye(n.value.maxDate) : qe(I, n.value.maxDate) : !1, d = (I) => n.value.minDate ? e.yearPicker ? ye(I) < ye(n.value.minDate) : Be(I, n.value.minDate) : !1, c = (I) => {
    const v = s(I), A = d(I), u = l(I), k = a.value.months.map((O) => +O).includes(De(I)), C = e.disabledWeekDays.length ? e.disabledWeekDays.some((O) => +O === uo(I)) : !1, J = w(I), pe = ye(I), i = pe < +e.yearRange[0] || pe > +e.yearRange[1];
    return !(v || A || u || k || i || C || J);
  }, $ = (I, v) => Be(...Nt(n.value.minDate, I, v)) || Te(...Nt(n.value.minDate, I, v)), h = (I, v) => qe(...Nt(n.value.maxDate, I, v)) || Te(...Nt(n.value.maxDate, I, v)), g = (I, v, A) => {
    let u = !1;
    return n.value.maxDate && A && h(I, v) && (u = !0), n.value.minDate && !A && $(I, v) && (u = !0), u;
  }, b = (I, v, A, u) => {
    let k = !1;
    return u ? n.value.minDate && n.value.maxDate ? k = g(I, v, A) : (n.value.minDate && $(I, v) || n.value.maxDate && h(I, v)) && (k = !0) : k = !0, k;
  }, w = (I) => Array.isArray(n.value.allowedDates) && !n.value.allowedDates.length ? !0 : n.value.allowedDates ? !Sa(I, n.value.allowedDates) : !1, S = (I) => !c(I), M = (I) => t.value.noDisabledRange ? !ir({ start: I[0], end: I[1] }).some((v) => S(v)) : !0, Y = (I) => {
    if (I) {
      const v = ye(I);
      return v >= +e.yearRange[0] && v <= e.yearRange[1];
    }
    return !0;
  }, U = (I, v) => !!(Array.isArray(I) && I[v] && (t.value.maxRange || t.value.minRange) && Y(I[v])), Q = (I, v, A = 0) => {
    if (U(v, A) && Y(I)) {
      const u = or(I, v[A]), k = Ar(v[A], I), C = k.length === 1 ? 0 : k.filter((pe) => S(pe)).length, J = Math.abs(u) - (t.value.minMaxRawRange ? 0 : C);
      if (t.value.minRange && t.value.maxRange)
        return J >= +t.value.minRange && J <= +t.value.maxRange;
      if (t.value.minRange) return J >= +t.value.minRange;
      if (t.value.maxRange) return J <= +t.value.maxRange;
    }
    return !0;
  }, T = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, z = (I) => Array.isArray(I) ? [I[0] ? Za(I[0]) : null, I[1] ? Za(I[1]) : null] : Za(I), te = (I, v, A) => I.find(
    (u) => +u.hours === $t(v) && u.minutes === "*" ? !0 : +u.minutes === Et(v) && +u.hours === $t(v)
  ) && A, E = (I, v, A) => {
    const [u, k] = I, [C, J] = v;
    return !te(u, C, A) && !te(k, J, A) && A;
  }, _ = (I, v) => {
    const A = Array.isArray(v) ? v : [v];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? E(e.disabledTimes, A, I) : !A.some((u) => te(e.disabledTimes, u, I)) : I;
  }, W = (I, v) => {
    const A = Array.isArray(v) ? [jt(v[0]), v[1] ? jt(v[1]) : void 0] : jt(v), u = !e.disabledTimes(A);
    return I && u;
  }, j = (I, v) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? _(v, I) : W(v, I) : v, L = (I) => {
    let v = !0;
    if (!I || T()) return !0;
    const A = !n.value.minDate && !n.value.maxDate ? z(I) : I;
    return (e.maxTime || n.value.maxDate) && (v = Un(
      e.maxTime,
      n.value.maxDate,
      "max",
      Ke(A),
      v
    )), (e.minTime || n.value.minDate) && (v = Un(
      e.minTime,
      n.value.minDate,
      "min",
      Ke(A),
      v
    )), j(I, v);
  }, le = (I) => {
    if (!e.monthPicker) return !0;
    let v = !0;
    const A = G(yt(I));
    if (n.value.minDate && n.value.maxDate) {
      const u = G(yt(n.value.minDate)), k = G(yt(n.value.maxDate));
      return qe(A, u) && Be(A, k) || Te(A, u) || Te(A, k);
    }
    if (n.value.minDate) {
      const u = G(yt(n.value.minDate));
      v = qe(A, u) || Te(A, u);
    }
    if (n.value.maxDate) {
      const u = G(yt(n.value.maxDate));
      v = Be(A, u) || Te(A, u);
    }
    return v;
  }, ue = K(() => (I) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : L(I)), me = K(() => (I) => e.monthPicker ? Array.isArray(I) && (t.value.enabled || r.value.enabled) ? !I.filter((v) => !le(v)).length : le(I) : !0);
  return {
    isDisabled: S,
    validateDate: c,
    validateMonthYearInRange: b,
    isDateRangeAllowed: M,
    checkMinMaxRange: Q,
    isValidTime: L,
    isTimeValid: ue,
    isMonthValid: me
  };
}, La = () => {
  const e = K(() => (n, r) => n == null ? void 0 : n.includes(r)), a = K(() => (n, r) => n.count ? n.solo ? !0 : r === 0 : !0), t = K(() => (n, r) => n.count ? n.solo ? !0 : r === n.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: a, showRightIcon: t };
}, su = (e, a, t) => {
  const n = Z(0), r = _a({
    [Wt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Wt.calendar]: !1,
    [Wt.header]: !1
  }), l = K(() => e.monthPicker || e.timePicker), s = (g) => {
    var b;
    if ((b = e.flow) != null && b.length) {
      if (!g && l.value) return h();
      r[g] = !0, Object.keys(r).filter((w) => !r[w]).length || h();
    }
  }, d = () => {
    var g, b;
    (g = e.flow) != null && g.length && n.value !== -1 && (n.value += 1, a("flow-step", n.value), h()), ((b = e.flow) == null ? void 0 : b.length) === n.value && pt().then(() => c());
  }, c = () => {
    n.value = -1;
  }, $ = (g, b, ...w) => {
    var S, M;
    e.flow[n.value] === g && t.value && ((M = (S = t.value)[b]) == null || M.call(S, ...w));
  }, h = (g = 0) => {
    g && (n.value += g), $(Xe.month, "toggleMonthPicker", !0), $(Xe.year, "toggleYearPicker", !0), $(Xe.calendar, "toggleTimePicker", !1, !0), $(Xe.time, "toggleTimePicker", !0, !0);
    const b = e.flow[n.value];
    (b === Xe.hours || b === Xe.minutes || b === Xe.seconds) && $(b, "toggleTimePicker", !0, !0, b);
  };
  return { childMount: s, updateFlowStep: d, resetFlow: c, handleFlow: h, flowStep: n };
}, iu = {
  key: 1,
  class: "dp__input_wrap"
}, uu = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], du = {
  key: 2,
  class: "dp__clear_icon"
}, cu = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Ya
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, {
      defaultedTextInput: l,
      defaultedAriaLabels: s,
      defaultedInline: d,
      defaultedConfig: c,
      defaultedRange: $,
      defaultedMultiDates: h,
      defaultedUI: g,
      getDefaultPattern: b,
      getDefaultStartTime: w
    } = Fe(r), { checkMinMaxRange: S } = Ft(r), M = Z(), Y = Z(null), U = Z(!1), Q = Z(!1), T = K(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !l.value.enabled,
        dp__disabled: r.disabled,
        dp__input_readonly: !l.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: !!r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: U.value || r.isMenuOpen,
        dp__input_reg: !l.value.enabled,
        [r.inputClassName]: !!r.inputClassName,
        ...g.value.input ?? {}
      })
    ), z = () => {
      n("set-input-date", null), r.clearable && r.autoApply && (n("set-empty-date"), M.value = null);
    }, te = (u) => {
      const k = w();
      return Ds(
        u,
        l.value.format ?? b(),
        k ?? Sr({}, r.enableSeconds),
        r.inputValue,
        Q.value,
        r.formatLocale
      );
    }, E = (u) => {
      const { rangeSeparator: k } = l.value, [C, J] = u.split(`${k}`);
      if (C) {
        const pe = te(C.trim()), i = J ? te(J.trim()) : null;
        if (ra(pe, i)) return;
        const O = pe && i ? [pe, i] : [pe];
        S(i, O, 0) && (M.value = pe ? O : null);
      }
    }, _ = () => {
      Q.value = !0;
    }, W = (u) => {
      if ($.value.enabled)
        E(u);
      else if (h.value.enabled) {
        const k = u.split(";");
        M.value = k.map((C) => te(C.trim())).filter((C) => C);
      } else
        M.value = te(u);
    }, j = (u) => {
      var k;
      const C = typeof u == "string" ? u : (k = u.target) == null ? void 0 : k.value;
      C !== "" ? (l.value.openMenu && !r.isMenuOpen && n("open"), W(C), n("set-input-date", M.value)) : z(), Q.value = !1, n("update:input-value", C);
    }, L = (u) => {
      l.value.enabled ? (W(u.target.value), l.value.enterSubmit && cn(M.value) && r.inputValue !== "" ? (n("set-input-date", M.value, !0), M.value = null) : l.value.enterSubmit && r.inputValue === "" && (M.value = null, n("clear"))) : me(u);
    }, le = (u) => {
      l.value.enabled && l.value.tabSubmit && W(u.target.value), l.value.tabSubmit && cn(M.value) && r.inputValue !== "" ? (n("set-input-date", M.value, !0, !0), M.value = null) : l.value.tabSubmit && r.inputValue === "" && (M.value = null, n("clear", !0));
    }, ue = () => {
      U.value = !0, n("focus"), pt().then(() => {
        var u;
        l.value.enabled && l.value.selectOnFocus && ((u = Y.value) == null || u.select());
      });
    }, me = (u) => {
      u.preventDefault(), Yt(u, c.value, !0), l.value.enabled && l.value.openMenu && !d.value.input && !r.isMenuOpen ? n("open") : l.value.enabled || n("toggle");
    }, I = () => {
      n("real-blur"), U.value = !1, (!r.isMenuOpen || d.value.enabled && d.value.input) && n("blur"), r.autoApply && l.value.enabled && M.value && !r.isMenuOpen && (n("set-input-date", M.value), n("select-date"), M.value = null);
    }, v = (u) => {
      Yt(u, c.value, !0), n("clear");
    }, A = (u) => {
      if (u.key === "Tab" && le(u), u.key === "Enter" && L(u), !l.value.enabled) {
        if (u.code === "Tab") return;
        u.preventDefault();
      }
    };
    return a({
      focusInput: () => {
        var u;
        (u = Y.value) == null || u.focus({ preventScroll: !0 });
      },
      setParsedDate: (u) => {
        M.value = u;
      }
    }), (u, k) => {
      var C;
      return y(), D("div", { onClick: me }, [
        u.$slots.trigger && !u.$slots["dp-input"] && !m(d).enabled ? se(u.$slots, "trigger", { key: 0 }) : H("", !0),
        !u.$slots.trigger && (!m(d).enabled || m(d).input) ? (y(), D("div", iu, [
          u.$slots["dp-input"] && !u.$slots.trigger && (!m(d).enabled || m(d).enabled && m(d).input) ? se(u.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: j,
            onEnter: L,
            onTab: le,
            onClear: v,
            onBlur: I,
            onKeypress: A,
            onPaste: _,
            onFocus: ue,
            openMenu: () => u.$emit("open"),
            closeMenu: () => u.$emit("close"),
            toggleMenu: () => u.$emit("toggle")
          }) : H("", !0),
          u.$slots["dp-input"] ? H("", !0) : (y(), D("input", {
            key: 1,
            id: u.uid ? `dp-input-${u.uid}` : void 0,
            ref_key: "inputRef",
            ref: Y,
            "data-test": "dp-input",
            name: u.name,
            class: ge(T.value),
            inputmode: m(l).enabled ? "text" : "none",
            placeholder: u.placeholder,
            disabled: u.disabled,
            readonly: u.readonly,
            required: u.required,
            value: e.inputValue,
            autocomplete: u.autocomplete,
            "aria-label": (C = m(s)) == null ? void 0 : C.input,
            "aria-disabled": u.disabled || void 0,
            "aria-invalid": u.state === !1 ? !0 : void 0,
            onInput: j,
            onBlur: I,
            onFocus: ue,
            onKeypress: A,
            onKeydown: A,
            onPaste: _
          }, null, 42, uu)),
          re("div", {
            onClick: k[2] || (k[2] = (J) => n("toggle"))
          }, [
            u.$slots["input-icon"] && !u.hideInputIcon ? (y(), D("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: k[0] || (k[0] = (J) => n("toggle"))
            }, [
              se(u.$slots, "input-icon")
            ])) : H("", !0),
            !u.$slots["input-icon"] && !u.hideInputIcon && !u.$slots["dp-input"] ? (y(), xe(m(ia), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: k[1] || (k[1] = (J) => n("toggle"))
            })) : H("", !0)
          ]),
          u.$slots["clear-icon"] && e.inputValue && u.clearable && !u.disabled && !u.readonly ? (y(), D("span", du, [
            se(u.$slots, "clear-icon", { clear: v })
          ])) : H("", !0),
          u.clearable && !u.$slots["clear-icon"] && e.inputValue && !u.disabled && !u.readonly ? (y(), xe(m(xr), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: k[3] || (k[3] = Ot((J) => v(J), ["prevent"]))
          })) : H("", !0)
        ])) : H("", !0)
      ]);
    };
  }
}), pu = typeof window < "u" ? window : void 0, ln = () => {
}, vu = (e) => Gr() ? (Xr(e), !0) : !1, mu = (e, a, t, n) => {
  if (!e) return ln;
  let r = ln;
  const l = ot(
    () => m(e),
    (d) => {
      r(), d && (d.addEventListener(a, t, n), r = () => {
        d.removeEventListener(a, t, n), r = ln;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    l(), r();
  };
  return vu(s), s;
}, hu = (e, a, t, n = {}) => {
  const { window: r = pu, event: l = "pointerdown" } = n;
  return r ? mu(r, l, (s) => {
    const d = Ue(e), c = Ue(a);
    !d || !c || d === s.target || s.composedPath().includes(d) || s.composedPath().includes(c) || t(s);
  }, { passive: !0 }) : void 0;
}, fu = /* @__PURE__ */ Qe({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Ya
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: a, emit: t }) {
    const n = t, r = e, l = Ut(), s = Z(!1), d = ya(r, "modelValue"), c = ya(r, "timezone"), $ = Z(null), h = Z(null), g = Z(null), b = Z(!1), w = Z(null), S = Z(!1), M = Z(!1), Y = Z(!1), U = Z(!1), { setMenuFocused: Q, setShiftKey: T } = Ir(), { clearArrowNav: z } = Lt(), { validateDate: te, isValidTime: E } = Ft(r), {
      defaultedTransitions: _,
      defaultedTextInput: W,
      defaultedInline: j,
      defaultedConfig: L,
      defaultedRange: le,
      defaultedMultiDates: ue
    } = Fe(r), { menuTransition: me, showTransition: I } = xa(_);
    Ze(() => {
      R(r.modelValue), pt().then(() => {
        if (!j.value.enabled) {
          const N = pe(w.value);
          N == null || N.addEventListener("scroll", X), window == null || window.addEventListener("resize", q);
        }
      }), j.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", Me), window == null || window.addEventListener("keydown", P);
    }), Ra(() => {
      if (!j.value.enabled) {
        const N = pe(w.value);
        N == null || N.removeEventListener("scroll", X), window == null || window.removeEventListener("resize", q);
      }
      window == null || window.removeEventListener("keyup", Me), window == null || window.removeEventListener("keydown", P);
    });
    const v = ct(l, "all", r.presetDates), A = ct(l, "input");
    ot(
      [d, c],
      () => {
        R(d.value);
      },
      { deep: !0 }
    );
    const { openOnTop: u, menuStyle: k, xCorrect: C, setMenuPosition: J, getScrollableParent: pe, shadowRender: i } = nu({
      menuRef: $,
      menuRefInner: h,
      inputRef: g,
      pickerWrapperRef: w,
      inline: j,
      emit: n,
      props: r,
      slots: l
    }), {
      inputValue: O,
      internalModelValue: o,
      parseExternalModelValue: R,
      emitModelValue: V,
      formatInputValue: f,
      checkBeforeEmit: ie
    } = Ks(n, r, b), ke = K(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: j.value.enabled,
        "dp--flex-display-collapsed": Y.value,
        dp__flex_display_with_input: j.value.input
      })
    ), F = K(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), we = K(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: !r.teleport || j.value.enabled
    } : {}), p = K(() => ({ class: "dp__outer_menu_wrap" })), B = K(() => j.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)), ee = () => {
      var N, ne;
      return (ne = (N = g.value) == null ? void 0 : N.$el) == null ? void 0 : ne.getBoundingClientRect();
    }, X = () => {
      s.value && (L.value.closeOnScroll ? ut() : J());
    }, q = () => {
      var N;
      s.value && J();
      const ne = (N = h.value) == null ? void 0 : N.$el.getBoundingClientRect().width;
      Y.value = document.body.offsetWidth <= ne;
    }, Me = (N) => {
      N.key === "Tab" && !j.value.enabled && !r.teleport && L.value.tabOutClosesMenu && (w.value.contains(document.activeElement) || ut()), M.value = N.shiftKey;
    }, P = (N) => {
      M.value = N.shiftKey;
    }, oe = () => {
      !r.disabled && !r.readonly && (i(Xn, r), J(!1), s.value = !0, s.value && n("open"), s.value || ua(), R(r.modelValue));
    }, fe = () => {
      var N;
      O.value = "", ua(), (N = g.value) == null || N.setParsedDate(null), n("update:model-value", null), n("update:model-timezone-value", null), n("cleared"), L.value.closeOnClearValue && ut();
    }, Oe = () => {
      const N = o.value;
      return !N || !Array.isArray(N) && te(N) ? !0 : Array.isArray(N) ? ue.value.enabled || N.length === 2 && te(N[0]) && te(N[1]) ? !0 : le.value.partialRange && !r.timePicker ? te(N[0]) : !1 : !1;
    }, rt = () => {
      ie() && Oe() ? (V(), ut()) : n("invalid-select", o.value);
    }, he = (N) => {
      At(), V(), L.value.closeOnAutoApply && !N && ut();
    }, At = () => {
      g.value && W.value.enabled && g.value.setParsedDate(o.value);
    }, _t = (N = !1) => {
      r.autoApply && E(o.value) && Oe() && (le.value.enabled && Array.isArray(o.value) ? (le.value.partialRange || o.value.length === 2) && he(N) : he(N));
    }, ua = () => {
      W.value.enabled || (o.value = null);
    }, ut = () => {
      j.value.enabled || (s.value && (s.value = !1, C.value = !1, Q(!1), T(!1), z(), n("closed"), O.value && R(d.value)), ua(), n("blur"));
    }, da = (N, ne, de = !1) => {
      if (!N) {
        o.value = null;
        return;
      }
      const et = Array.isArray(N) ? !N.some((Bt) => !te(Bt)) : te(N), vt = E(N);
      et && vt && (U.value = !0, o.value = N, ne && (S.value = de, rt(), n("text-submit")), pt().then(() => {
        U.value = !1;
      }));
    }, Fa = () => {
      r.autoApply && E(o.value) && V(), At();
    }, Ma = () => s.value ? ut() : oe(), Ba = (N) => {
      o.value = N;
    }, Va = () => {
      W.value.enabled && (b.value = !0, f()), n("focus");
    }, Ha = () => {
      if (W.value.enabled && (b.value = !1, R(r.modelValue), S.value)) {
        const N = _s(w.value, M.value);
        N == null || N.focus();
      }
      n("blur");
    }, qa = (N) => {
      h.value && h.value.updateMonthYear(0, {
        month: zn(N.month),
        year: zn(N.year)
      });
    }, za = (N) => {
      R(N ?? r.modelValue);
    }, Wa = (N, ne) => {
      var de;
      (de = h.value) == null || de.switchView(N, ne);
    }, x = (N) => L.value.onClickOutside ? L.value.onClickOutside(N) : ut(), ae = (N = 0) => {
      var ne;
      (ne = h.value) == null || ne.handleFlow(N);
    };
    return hu($, g, () => x(Oe)), a({
      closeMenu: ut,
      selectDate: rt,
      clearValue: fe,
      openMenu: oe,
      onScroll: X,
      formatInputValue: f,
      // exposed for testing purposes
      updateInternalModelValue: Ba,
      // modify internal modelValue
      setMonthYear: qa,
      parseModel: za,
      switchView: Wa,
      toggleMenu: Ma,
      handleFlow: ae
    }), (N, ne) => (y(), D("div", {
      ref_key: "pickerWrapperRef",
      ref: w,
      class: ge(ke.value),
      "data-datepicker-instance": ""
    }, [
      st(cu, je({
        ref_key: "inputRef",
        ref: g,
        "input-value": m(O),
        "onUpdate:inputValue": ne[0] || (ne[0] = (de) => Sn(O) ? O.value = de : null),
        "is-menu-open": s.value
      }, N.$props, {
        onClear: fe,
        onOpen: oe,
        onSetInputDate: da,
        onSetEmptyDate: m(V),
        onSelectDate: rt,
        onToggle: Ma,
        onClose: ut,
        onFocus: Va,
        onBlur: Ha,
        onRealBlur: ne[1] || (ne[1] = (de) => b.value = !1)
      }), Je({ _: 2 }, [
        $e(m(A), (de, et) => ({
          name: de,
          fn: _e((vt) => [
            se(N.$slots, de, Re(Ie(vt)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (y(), xe(zt(N.teleport ? jr : "div"), Re(Ie(we.value)), {
        default: _e(() => [
          st(Kt, {
            name: m(me)(m(u)),
            css: m(I) && !m(j).enabled
          }, {
            default: _e(() => [
              s.value ? (y(), D("div", je({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: $
              }, p.value, {
                class: { "dp--menu-wrapper": !m(j).enabled },
                style: m(j).enabled ? void 0 : m(k)
              }), [
                st(Xn, je({
                  ref_key: "dpMenuRef",
                  ref: h
                }, N.$props, {
                  "internal-model-value": m(o),
                  "onUpdate:internalModelValue": ne[2] || (ne[2] = (de) => Sn(o) ? o.value = de : null),
                  class: { [F.value]: !0, "dp--menu-wrapper": N.teleport },
                  "open-on-top": m(u),
                  "no-overlay-focus": B.value,
                  collapse: Y.value,
                  "get-input-rect": ee,
                  "is-text-input-date": U.value,
                  onClosePicker: ut,
                  onSelectDate: rt,
                  onAutoApply: _t,
                  onTimeUpdate: Fa,
                  onFlowStep: ne[3] || (ne[3] = (de) => N.$emit("flow-step", de)),
                  onUpdateMonthYear: ne[4] || (ne[4] = (de) => N.$emit("update-month-year", de)),
                  onInvalidSelect: ne[5] || (ne[5] = (de) => N.$emit("invalid-select", m(o))),
                  onAutoApplyInvalid: ne[6] || (ne[6] = (de) => N.$emit("invalid-select", de)),
                  onInvalidFixedRange: ne[7] || (ne[7] = (de) => N.$emit("invalid-fixed-range", de)),
                  onRecalculatePosition: m(J),
                  onTooltipOpen: ne[8] || (ne[8] = (de) => N.$emit("tooltip-open", de)),
                  onTooltipClose: ne[9] || (ne[9] = (de) => N.$emit("tooltip-close", de)),
                  onTimePickerOpen: ne[10] || (ne[10] = (de) => N.$emit("time-picker-open", de)),
                  onTimePickerClose: ne[11] || (ne[11] = (de) => N.$emit("time-picker-close", de)),
                  onAmPmChange: ne[12] || (ne[12] = (de) => N.$emit("am-pm-change", de)),
                  onRangeStart: ne[13] || (ne[13] = (de) => N.$emit("range-start", de)),
                  onRangeEnd: ne[14] || (ne[14] = (de) => N.$emit("range-end", de)),
                  onDateUpdate: ne[15] || (ne[15] = (de) => N.$emit("date-update", de)),
                  onInvalidDate: ne[16] || (ne[16] = (de) => N.$emit("invalid-date", de)),
                  onOverlayToggle: ne[17] || (ne[17] = (de) => N.$emit("overlay-toggle", de))
                }), Je({ _: 2 }, [
                  $e(m(v), (de, et) => ({
                    name: de,
                    fn: _e((vt) => [
                      se(N.$slots, de, Re(Ie({ ...vt })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : H("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Ca = /* @__PURE__ */ (() => {
  const e = fu;
  return e.install = (a) => {
    a.component("Vue3DatePicker", e);
  }, e;
})(), yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(yu).forEach(([e, a]) => {
  e !== "default" && (Ca[e] = a);
});
var gu = Object.defineProperty, bu = Object.defineProperties, wu = Object.getOwnPropertyDescriptors, Jn = Object.getOwnPropertySymbols, _u = Object.prototype.hasOwnProperty, ku = Object.prototype.propertyIsEnumerable, Zn = (e, a, t) => a in e ? gu(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, Jt = (e, a) => {
  for (var t in a || (a = {}))
    _u.call(a, t) && Zn(e, t, a[t]);
  if (Jn)
    for (var t of Jn(a))
      ku.call(a, t) && Zn(e, t, a[t]);
  return e;
}, er = (e, a) => bu(e, wu(a));
const xu = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var e;
      const a = ((e = this.$refs.dropdownMenu) == null ? void 0 : e.children[this.typeAheadPointer]) || !1;
      if (a) {
        const t = this.getDropdownViewport(), { top: n, bottom: r, height: l } = a.getBoundingClientRect();
        if (n < t.top)
          return this.$refs.dropdownMenu.scrollTop = a.offsetTop;
        if (r > t.bottom)
          return this.$refs.dropdownMenu.scrollTop = a.offsetTop - (t.height - l);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, Du = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, Mu = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, An = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of a)
    t[n] = r;
  return t;
}, Tu = {}, Pu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Ou = /* @__PURE__ */ re("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), $u = [
  Ou
];
function Au(e, a) {
  return y(), D("svg", Pu, $u);
}
const Su = /* @__PURE__ */ An(Tu, [["render", Au]]), Cu = {}, Ru = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Nu = /* @__PURE__ */ re("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), Yu = [
  Nu
];
function Iu(e, a) {
  return y(), D("svg", Ru, Yu);
}
const Eu = /* @__PURE__ */ An(Cu, [["render", Iu]]), tr = {
  Deselect: Su,
  OpenIndicator: Eu
}, Lu = {
  mounted(e, { instance: a }) {
    if (a.appendToBody) {
      const {
        height: t,
        top: n,
        left: r,
        width: l
      } = a.$refs.toggle.getBoundingClientRect();
      let s = window.scrollX || window.pageXOffset, d = window.scrollY || window.pageYOffset;
      e.unbindPosition = a.calculatePosition(e, a, {
        width: l + "px",
        left: s + r + "px",
        top: d + n + t + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: a }) {
    a.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function Fu(e) {
  const a = {};
  return Object.keys(e).sort().forEach((t) => {
    a[t] = e[t];
  }), JSON.stringify(a);
}
let Bu = 0;
function Vu() {
  return ++Bu;
}
const Hu = {
  components: Jt({}, tr),
  directives: { appendToBody: Lu },
  mixins: [xu, Du, Mu],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : Fu(e);
        } catch (a) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, a);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, a, t) {
        return (a || "").toLocaleLowerCase().indexOf(t.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, a) {
        return e.filter((t) => {
          let n = this.getOptionLabel(t);
          return typeof n == "number" && (n = n.toString()), this.filterBy(t, n, a);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: a }) {
        return e && !a;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, a) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, a, { width: t, top: n, left: r }) {
        e.style.top = n, e.style.left = r, e.style.width = t;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: a, mutableLoading: t }) {
        return e ? !1 : a && !t;
      }
    },
    uid: {
      type: [String, Number],
      default: () => Vu()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue > "u" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: Jt({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (a) => this.search = a.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: er(Jt({}, e), { deselect: this.deselect }),
        footer: er(Jt({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Jt(Jt({}, tr), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const a = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const t = this.createOption(this.search);
        this.optionExists(t) || a.unshift(t);
      }
      return a;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, a) {
      const t = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, a, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && t() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((a) => this.findOptionFromReducedValue(a)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((a) => !this.optionComparator(a, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue > "u" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((a) => this.reduce(a)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const a = e.target !== this.searchEl;
      a && e.preventDefault();
      const t = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || t.filter(Boolean).some((n) => n.contains(e.target) || n === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && a ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((a) => this.optionComparator(a, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, a) {
      return this.getOptionKey(e) === this.getOptionKey(a);
    },
    findOptionFromReducedValue(e) {
      const a = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(e), t = [...this.options, ...this.pushedTags].filter(a);
      return t.length === 1 ? t[0] : t.find((n) => this.optionComparator(n, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((a) => this.optionComparator(a, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: a } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: a }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const a = (r) => (r.preventDefault(), !this.isComposing && this.typeAheadSelect()), t = {
        8: (r) => this.maybeDeleteValue(),
        9: (r) => this.onTab(),
        27: (r) => this.onEscape(),
        38: (r) => (r.preventDefault(), this.typeAheadUp()),
        40: (r) => (r.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((r) => t[r] = a);
      const n = this.mapKeydown(t, this);
      if (typeof n[e.keyCode] == "function")
        return n[e.keyCode](e);
    }
  }
}, qu = ["dir"], zu = ["id", "aria-expanded", "aria-owns"], Wu = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, ju = ["disabled", "title", "aria-label", "onClick"], Uu = {
  ref: "actions",
  class: "vs__actions"
}, Ku = ["disabled"], Qu = { class: "vs__spinner" }, Gu = ["id"], Xu = ["id", "aria-selected", "onMouseover", "onClick"], Ju = {
  key: 0,
  class: "vs__no-options"
}, Zu = /* @__PURE__ */ at(" Sorry, no matching options. "), ed = ["id"];
function td(e, a, t, n, r, l) {
  const s = Jr("append-to-body");
  return y(), D("div", {
    dir: t.dir,
    class: ge(["v-select", l.stateClasses])
  }, [
    se(e.$slots, "header", Re(Ie(l.scope.header))),
    re("div", {
      id: `vs${t.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": l.dropdownOpen.toString(),
      "aria-owns": `vs${t.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: a[1] || (a[1] = (d) => l.toggleDropdown(d))
    }, [
      re("div", Wu, [
        (y(!0), D(be, null, $e(l.selectedValue, (d, c) => se(e.$slots, "selected-option-container", {
          option: l.normalizeOptionForSlot(d),
          deselect: l.deselect,
          multiple: t.multiple,
          disabled: t.disabled
        }, () => [
          (y(), D("span", {
            key: t.getOptionKey(d),
            class: "vs__selected"
          }, [
            se(e.$slots, "selected-option", Re(Ie(l.normalizeOptionForSlot(d))), () => [
              at(Pe(t.getOptionLabel(d)), 1)
            ]),
            t.multiple ? (y(), D("button", {
              key: 0,
              ref_for: !0,
              ref: ($) => r.deselectButtons[c] = $,
              disabled: t.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${t.getOptionLabel(d)}`,
              "aria-label": `Deselect ${t.getOptionLabel(d)}`,
              onClick: ($) => l.deselect(d)
            }, [
              (y(), xe(zt(l.childComponents.Deselect)))
            ], 8, ju)) : H("", !0)
          ]))
        ])), 256)),
        se(e.$slots, "search", Re(Ie(l.scope.search)), () => [
          re("input", je({ class: "vs__search" }, l.scope.search.attributes, Zr(l.scope.search.events)), null, 16)
        ])
      ], 512),
      re("div", Uu, [
        dt(re("button", {
          ref: "clearButton",
          disabled: t.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: a[0] || (a[0] = (...d) => l.clearSelection && l.clearSelection(...d))
        }, [
          (y(), xe(zt(l.childComponents.Deselect)))
        ], 8, Ku), [
          [ta, l.showClearButton]
        ]),
        se(e.$slots, "open-indicator", Re(Ie(l.scope.openIndicator)), () => [
          t.noDrop ? H("", !0) : (y(), xe(zt(l.childComponents.OpenIndicator), Re(je({ key: 0 }, l.scope.openIndicator.attributes)), null, 16))
        ]),
        se(e.$slots, "spinner", Re(Ie(l.scope.spinner)), () => [
          dt(re("div", Qu, "Loading...", 512), [
            [ta, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, zu),
    st(Kt, { name: t.transition }, {
      default: _e(() => [
        l.dropdownOpen ? dt((y(), D("ul", {
          id: `vs${t.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${t.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: a[2] || (a[2] = Ot((...d) => l.onMousedown && l.onMousedown(...d), ["prevent"])),
          onMouseup: a[3] || (a[3] = (...d) => l.onMouseUp && l.onMouseUp(...d))
        }, [
          se(e.$slots, "list-header", Re(Ie(l.scope.listHeader))),
          (y(!0), D(be, null, $e(l.filteredOptions, (d, c) => (y(), D("li", {
            id: `vs${t.uid}__option-${c}`,
            key: t.getOptionKey(d),
            role: "option",
            class: ge(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": l.isOptionDeselectable(d) && c === e.typeAheadPointer,
              "vs__dropdown-option--selected": l.isOptionSelected(d),
              "vs__dropdown-option--highlight": c === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !t.selectable(d)
            }]),
            "aria-selected": c === e.typeAheadPointer ? !0 : null,
            onMouseover: ($) => t.selectable(d) ? e.typeAheadPointer = c : null,
            onClick: Ot(($) => t.selectable(d) ? l.select(d) : null, ["prevent", "stop"])
          }, [
            se(e.$slots, "option", Re(Ie(l.normalizeOptionForSlot(d))), () => [
              at(Pe(t.getOptionLabel(d)), 1)
            ])
          ], 42, Xu))), 128)),
          l.filteredOptions.length === 0 ? (y(), D("li", Ju, [
            se(e.$slots, "no-options", Re(Ie(l.scope.noOptions)), () => [
              Zu
            ])
          ])) : H("", !0),
          se(e.$slots, "list-footer", Re(Ie(l.scope.listFooter)))
        ], 40, Gu)), [
          [s]
        ]) : (y(), D("ul", {
          key: 1,
          id: `vs${t.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, ed))
      ]),
      _: 3
    }, 8, ["name"]),
    se(e.$slots, "footer", Re(Ie(l.scope.footer)))
  ], 10, qu);
}
const ad = /* @__PURE__ */ An(Hu, [["render", td]]), nd = { class: "bg-white rounded-lg text-primary custom-scrollbar overscroll-auto min-w-full" }, rd = { class: "overflow-x-auto" }, ld = { key: 1 }, od = {
  class: "relative",
  style: { "max-height": "600px", "overflow-y": "scroll" }
}, sd = { class: "table rounded-lg" }, id = { class: "bg-gray-100 sticky rounded-lg top-0 z-10 py-3" }, ud = { class: "text-primary flex" }, dd = ["onClick"], cd = { class: "flex justify-between w-full group" }, pd = { class: "break-words whitespace-normal" }, vd = ["onClick"], md = {
  key: 0,
  class: "justify-self-end"
}, hd = {
  key: 0,
  class: "text-gray-400 bg-white",
  style: { "font-family": "'Inter'" }
}, fd = {
  key: 0,
  class: "inline-flex"
}, yd = {
  tabindex: "0",
  class: "dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52 absolute",
  style: { top: "100%", left: "0" }
}, gd = ["onClick"], bd = ["onClick"], wd = ["onClick"], _d = { key: 1 }, kd = { key: 0 }, xd = ["onUpdate:modelValue", "onChange", "disabled"], Dd = {
  key: 3,
  class: "grow"
}, Md = { key: 1 }, Td = {
  key: 1,
  class: "badge mr-2"
}, Pd = { key: 4 }, Od = ["href"], $d = ["href"], Ad = ["onUpdate:modelValue", "onInput"], Sd = {
  key: 5,
  class: "grow"
}, Cd = { class: "badge mr-2" }, Rd = { key: 6 }, Nd = ["onUpdate:modelValue", "disabled", "onInput"], Yd = {
  key: 1,
  class: "text-base text-primary"
}, Id = { key: 7 }, Ed = ["type", "onUpdate:modelValue", "disabled", "onInput"], Ld = {
  key: 1,
  class: "text-base text-primary"
}, Fd = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center sticky top-0 left-0 right-0 bg-white shadow-lg z-10 py-3"
}, Bd = {
  key: 1,
  class: "fixed inset-0 flex items-center justify-center z-50"
}, Vd = { class: "bg-white p-6 rounded-lg shadow-lg" }, Hd = { class: "text-lg font-bold mb-4" }, qd = {
  key: 2,
  class: "sticky top-0 left-0 right-0 bg-white shadow-lg z-10 py-6"
}, zd = { class: "flex justify-between items-center px-4" }, Wd = { class: "flex justify-center" }, jd = { class: "btn-group" }, Ud = ["disabled"], Kd = ["onClick", "disabled"], Qd = ["disabled"], Gd = { class: "flex items-center" }, Xd = ["value"], Jd = {
  __name: "DataTable",
  props: {
    items: Array,
    columns: Array,
    enableDeleteRow: {
      type: Boolean,
      default: !1
    },
    deleteRowHandler: {
      type: Function,
      default: () => {
      }
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    singleRowEdit: {
      type: Boolean,
      default: !0
    },
    rowEditState: Object,
    actions: {
      type: Array,
      default: () => []
    },
    showExpireDateHighlight: {
      type: Boolean,
      default: !1,
      required: !1
    },
    enablePagination: {
      type: Boolean,
      default: !1,
      required: !1
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalItem: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  emits: [
    "toggle-edit-mode",
    "update-item",
    "update:currentPage",
    "update:itemsPerPage"
  ],
  setup(e, { emit: a }) {
    Qe({
      components: {
        VueDatePicker: Ca,
        VueSelect: ad
      }
    });
    const t = e, n = a, r = Z(!0), l = Z(""), s = Z("asc"), d = Z(t.currentPage), c = Z(t.itemsPerPage), $ = [10, 20, 50, 100], h = K(() => t.totalItem === 0 ? 0 : (t.currentPage - 1) * t.itemsPerPage + 1), g = K(() => Math.min(t.currentPage * t.itemsPerPage, t.totalItem)), b = Z(!1), w = Z(""), S = Z(null), M = (k) => {
      S.value = k, b.value = !0;
    }, Y = () => {
      b.value = !1, w.value = "";
    }, U = () => {
      S.value && w.value !== "" && (t.items.forEach((k, C) => {
        W(
          C,
          S.value.key,
          w.value,
          k
        );
      }), Y());
    };
    ot(
      () => t.currentPage,
      (k) => {
        d.value = k;
      }
    ), ot(
      () => t.itemsPerPage,
      (k) => {
        c.value = k;
      }
    );
    const Q = K(() => [...t.items].sort((k, C) => k[l.value] < C[l.value] ? s.value === "asc" ? -1 : 1 : k[l.value] > C[l.value] ? s.value === "asc" ? 1 : -1 : 0)), T = K(() => Math.ceil(t.totalItem / c.value)), z = (k) => {
      k >= 1 && k <= T.value && (d.value = k, n("update:currentPage", k));
    }, te = () => {
      n("update:itemsPerPage", c.value), d.value = 1, n("update:currentPage", 1);
    }, E = (k, C) => {
      t.deleteRowHandler && t.enableDeleteRow && !t.readonly && t.deleteRowHandler(k, C);
    }, _ = (k) => {
      l.value === k ? s.value = s.value === "asc" ? "desc" : "asc" : (l.value = k, s.value = "asc");
    }, W = (k, C, J, pe) => {
      n("update-item", k, C, J, pe);
    }, j = (k, C, J, pe) => {
      const i = J.map((O) => ({
        [C.value_key]: O
      }));
      W(k, C.key, i, pe);
    }, L = (k, C) => {
      C.handler(k), document.activeElement instanceof HTMLElement && document.activeElement.blur(), r.value = !1;
    }, le = (k) => {
      n("toggle-edit-mode", k);
    }, ue = (k, C) => t.singleRowEdit ? !!t.rowEditState[k] && C.editable : !t.readonly && C.editable, me = (k, C, J, pe) => {
      const i = J.toISOString().split("T")[0];
      W(k, C, i, pe);
    }, I = (k, C) => {
      switch (C) {
        case "float": {
          const J = parseFloat(k);
          return isNaN(J) ? null : J;
        }
        case "number": {
          const J = parseInt(k);
          return isNaN(J) ? null : J;
        }
        case "string":
          return k.toString();
        default:
          return k;
      }
    }, v = (k, C, J, pe, i) => {
      const O = I(pe, k);
      W(C, J, O, i);
    }, A = (k, C) => {
      const J = k[C.key], pe = C.cellPreLabel;
      return J === null ? "" : pe === void 0 ? J : `${pe}${J}`;
    }, u = K(() => {
      const k = [], J = T.value, pe = d.value;
      let i = Math.max(
        1,
        pe - Math.floor(3 / 2)
      ), O = i + 3 - 1;
      O > J && (O = J, i = Math.max(1, O - 3 + 1)), i > 1 && (k.push(1), i > 2 && k.push("..."));
      for (let o = i; o <= O; o++)
        k.push(o);
      return O < J && (O < J - 1 && k.push("..."), k.push(J)), k;
    });
    return (k, C) => {
      const J = Rn("VueSelect"), pe = Rn("router-link");
      return y(), D("div", nd, [
        re("div", rd, [
          e.loading ? (y(), xe(ll, {
            key: 0,
            isLoading: e.loading,
            loadingText: "Loading Data..."
          }, null, 8, ["isLoading"])) : (y(), D("div", ld, [
            re("div", od, [
              re("table", sd, [
                re("thead", id, [
                  re("tr", ud, [
                    (y(!0), D(be, null, $e(e.columns, (i, O) => (y(), D("th", {
                      key: i.key,
                      class: ge([
                        "font-bold py-6 hover:bg-custom-blue hover:bg-opacity-30 cursor-pointer flex justify-between items-center",
                        i.cellWidth || "w-[12rem]",
                        O !== e.columns.length - 1 ? "border-r-2 border-gray-400" : ""
                      ]),
                      onClick: (o) => _(i.key)
                    }, [
                      re("div", cd, [
                        re("span", pd, [
                          at(Pe(i.text) + " ", 1),
                          i.bulkColumnUpdate ? (y(), D("span", {
                            key: 0,
                            class: "ml-2 icon-[ic--baseline-edit] cursor-pointer text-lg",
                            onClick: Ot((o) => M(i), ["stop"])
                          }, null, 8, vd)) : H("", !0)
                        ]),
                        l.value === i.key ? (y(), D("span", md, C[5] || (C[5] = [
                          re("span", { class: "icon-[uil--sort] opacity-0 group-hover:opacity-100" }, null, -1)
                        ]))) : H("", !0)
                      ])
                    ], 10, dd))), 128))
                  ])
                ]),
                e.items.length > 0 ? (y(), D("tbody", hd, [
                  (y(!0), D(be, null, $e(Q.value, (i, O) => (y(), D("tr", {
                    key: i.id,
                    class: "flex"
                  }, [
                    (y(!0), D(be, null, $e(e.columns, (o, R) => (y(), D("td", {
                      key: o.key,
                      class: ge([
                        "flex items-center",
                        o.cellWidth || "w-[12rem]"
                      ])
                    }, [
                      R === 0 ? (y(), D("div", fd, [
                        e.actions.length ? (y(), D("div", {
                          key: 0,
                          class: "dropdown dropdown-right",
                          onMouseleave: C[0] || (C[0] = (V) => r.value = !0)
                        }, [
                          C[6] || (C[6] = re("span", {
                            tabindex: "0",
                            role: "button",
                            class: "icon-[formkit--reorder] mr-2 cursor-pointer relative"
                          }, null, -1)),
                          re("ul", yd, [
                            (y(!0), D(be, null, $e(e.actions, (V) => (y(), D("li", {
                              key: V.text,
                              class: "text-primary font-bold hover:bg-custom-blue hover:bg-opacity-30",
                              onClick: Ot((f) => L(i, V), ["stop"])
                            }, [
                              re("a", null, Pe(V.text), 1)
                            ], 8, gd))), 128))
                          ])
                        ], 32)) : H("", !0),
                        !e.readonly && e.singleRowEdit ? (y(), D("span", {
                          key: 1,
                          class: "mr-2 icon-[ic--baseline-edit] cursor-pointer",
                          onClick: (V) => le(O)
                        }, null, 8, bd)) : H("", !0),
                        e.enableDeleteRow ? (y(), D("span", {
                          key: 2,
                          class: "icon-[gridicons--cross] text-red-700 cursor-pointer",
                          onClick: (V) => E(O, i)
                        }, null, 8, wd)) : H("", !0)
                      ])) : H("", !0),
                      o.type === "date" ? (y(), D("div", _d, [
                        o.type === "date" ? (y(), D("span", kd, [
                          st(m(Ca), {
                            modelValue: i[o.key],
                            "onUpdate:modelValue": [(V) => i[o.key] = V, (V) => me(O, o.key, V, i)],
                            clearable: !1,
                            dark: !1,
                            "input-class-name": "input w-full border-none",
                            "auto-apply": "",
                            format: "yyyy-MM-dd",
                            readonly: !ue(O, o),
                            placement: "top",
                            teleport: "body"
                          }, {
                            "action-row": _e(() => C[7] || (C[7] = [])),
                            "clock-icon": _e(() => C[8] || (C[8] = [])),
                            "input-icon": _e(() => C[9] || (C[9] = [])),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "readonly"])
                        ])) : H("", !0)
                      ])) : o.type === "checkbox" ? dt((y(), D("input", {
                        key: 2,
                        type: "checkbox",
                        "onUpdate:modelValue": (V) => i[o.key] = V,
                        class: "checkbox",
                        onChange: (V) => W(O, o.key, V.target.checked, i),
                        disabled: !ue(O, o)
                      }, null, 40, xd)), [
                        [el, i[o.key]]
                      ]) : o.type === "select" ? (y(), D("span", Dd, [
                        !o.render || ue(O, o) ? (y(), xe(J, {
                          key: 0,
                          class: "w-full",
                          options: o.options,
                          label: o.label_key,
                          clearable: !1,
                          disabled: !ue(O, o),
                          reduce: (V) => V[o.value_key],
                          modelValue: i[o.key],
                          "onUpdate:modelValue": (V) => W(O, o.key, V, i),
                          "append-to-body": ""
                        }, null, 8, ["options", "label", "disabled", "reduce", "modelValue", "onUpdate:modelValue"])) : (y(), D("span", Md, [
                          o.isLink ? (y(), xe(pe, {
                            key: 0,
                            to: {
                              name: o.routeName,
                              params: o.routeParams(i)
                            },
                            class: "text-blue-500 underline w-full"
                          }, {
                            default: _e(() => [
                              at(Pe(o.render ? o.render(i[o.key]) : i[o.key]), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (y(), D("span", Td, Pe(o.render ? o.render(i[o.key]) : i[o.key]), 1))
                        ]))
                      ])) : o.type === "link" ? (y(), D("span", Pd, [
                        !ue(O, o) && o.routeName ? (y(), xe(pe, {
                          key: 0,
                          to: {
                            name: o.routeName,
                            params: o.routeParams(i)
                          },
                          class: "text-blue-500 underline w-full break-all whitespace-normal"
                        }, {
                          default: _e(() => [
                            at(Pe(i[o.key]), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])) : !ue(O, o) && o.manualLink ? (y(), D("a", {
                          key: 1,
                          href: o.manualLink(i),
                          class: "text-blue-500 underline w-full break-all whitespace-normal"
                        }, Pe(i[o.key]), 9, Od)) : ue(O, o) ? dt((y(), D("textarea", {
                          key: 3,
                          class: "textarea textarea-bordered w-full text-black disabled:bg-white disabled:border-none",
                          "onUpdate:modelValue": (V) => i[o.key] = V,
                          onInput: (V) => W(O, o.key, V.target.value, i)
                        }, null, 40, Ad)), [
                          [Ua, i[o.key]]
                        ]) : (y(), D("a", {
                          key: 2,
                          href: i[o.key],
                          target: "_blank",
                          class: "text-blue-500 underline w-full break-all whitespace-normal"
                        }, Pe(i[o.key]), 9, $d))
                      ])) : o.type === "multiselect" ? (y(), D("span", Sd, [
                        ue(O, o) ? (y(), xe(J, {
                          key: 0,
                          class: "w-full",
                          options: typeof o.options == "function" ? o.options(i) : o.options,
                          label: o.label_key,
                          clearable: !1,
                          multiple: "",
                          reduce: (V) => V[o.value_key],
                          modelValue: o.valueFormat ? o.valueFormat(i[o.key]) : i[o.key],
                          "onUpdate:modelValue": (V) => j(O, o, V, i),
                          "append-to-body": ""
                        }, null, 8, ["options", "label", "reduce", "modelValue", "onUpdate:modelValue"])) : (y(!0), D(be, { key: 1 }, $e(o.render(i), (V, f) => (y(), D("span", { key: f }, [
                          re("span", Cd, Pe(V), 1)
                        ]))), 128))
                      ])) : o.type === "float" || o.type === "number" ? (y(), D("span", Rd, [
                        ue(O, o) ? dt((y(), D("input", {
                          key: 0,
                          type: "number",
                          "onUpdate:modelValue": (V) => i[o.key] = V,
                          disabled: o.calculative,
                          step: "any",
                          class: ge(["input input-bordered w-full text-black", o.calculative ? "disabled:text-black" : ""]),
                          onInput: (V) => v(
                            o.type,
                            O,
                            o.key,
                            V.target.value,
                            i
                          )
                        }, null, 42, Nd)), [
                          [Ua, i[o.key]]
                        ]) : (y(), D("span", Yd, Pe(A(i, o)), 1))
                      ])) : (y(), D("span", Id, [
                        ue(O, o) ? dt((y(), D("input", {
                          key: 0,
                          type: o.type,
                          "onUpdate:modelValue": (V) => i[o.key] = V,
                          disabled: o.calculative,
                          class: ge(["input input-bordered w-full text-black", o.calculative ? "disabled:text-black" : ""]),
                          onInput: (V) => v(
                            o.type,
                            O,
                            o.key,
                            V.target.value,
                            i
                          )
                        }, null, 42, Ed)), [
                          [tl, i[o.key]]
                        ]) : (y(), D("span", Ld, Pe(A(i, o)), 1))
                      ]))
                    ], 2))), 128))
                  ]))), 128))
                ])) : H("", !0)
              ])
            ]),
            e.items.length === 0 ? (y(), D("div", Fd, C[10] || (C[10] = [
              re("div", { class: "text-center bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300" }, [
                re("i", { class: "text-4xl mb-4 text-gray-200" }, "🔍"),
                re("p", { class: "text-lg font-semibold text-gray-600" }, "No results found"),
                re("p", { class: "text-sm text-gray-500 mt-2" }, " Try adjusting your search or filter criteria. ")
              ], -1)
            ]))) : H("", !0),
            b.value ? (y(), D("div", Bd, [
              re("div", Vd, [
                re("h3", Hd, " Bulk Update " + Pe(S.value.text), 1),
                dt(re("input", {
                  "onUpdate:modelValue": C[1] || (C[1] = (i) => w.value = i),
                  type: "text",
                  class: "input input-bordered w-full mb-4",
                  placeholder: "Enter new value"
                }, null, 512), [
                  [Ua, w.value]
                ]),
                re("div", { class: "flex justify-end" }, [
                  re("button", {
                    onClick: Y,
                    class: "btn btn-secondary mr-2"
                  }, " Cancel "),
                  re("button", {
                    onClick: U,
                    class: "btn btn-primary"
                  }, " Update ")
                ])
              ])
            ])) : H("", !0),
            e.enablePagination ? (y(), D("div", qd, [
              re("div", zd, [
                re("div", null, " Showing " + Pe(h.value) + " to " + Pe(g.value) + " of " + Pe(e.totalItem) + " entries ", 1),
                re("div", Wd, [
                  re("div", jd, [
                    re("button", {
                      class: ge(["btn", { "btn-disabled": d.value === 1 }]),
                      onClick: C[2] || (C[2] = (i) => z(d.value - 1)),
                      disabled: d.value === 1
                    }, " « ", 10, Ud),
                    (y(!0), D(be, null, $e(u.value, (i) => (y(), D("button", {
                      key: i,
                      class: ge(["btn", {
                        "btn-active": d.value === i,
                        "btn-disabled": i === "..."
                      }]),
                      onClick: (O) => i !== "..." && z(i),
                      disabled: i === "..."
                    }, Pe(i), 11, Kd))), 128)),
                    re("button", {
                      class: ge(["btn", { "btn-disabled": d.value === T.value }]),
                      onClick: C[3] || (C[3] = (i) => z(d.value + 1)),
                      disabled: d.value === T.value
                    }, " » ", 10, Qd)
                  ])
                ]),
                re("div", Gd, [
                  C[11] || (C[11] = re("label", {
                    for: "itemsPerPage",
                    class: "mr-2"
                  }, "Items per page:", -1)),
                  dt(re("select", {
                    id: "itemsPerPage",
                    "onUpdate:modelValue": C[4] || (C[4] = (i) => c.value = i),
                    onChange: te,
                    class: "select select-bordered select-sm"
                  }, [
                    (y(), D(be, null, $e($, (i) => re("option", {
                      key: i,
                      value: i
                    }, Pe(i), 9, Xd)), 64))
                  ], 544), [
                    [al, c.value]
                  ])
                ])
              ])
            ])) : H("", !0)
          ]))
        ])
      ]);
    };
  }
};
function tc(e) {
  e.component("DataTable", Jd);
}
export {
  Jd as DataTable,
  tc as install
};
