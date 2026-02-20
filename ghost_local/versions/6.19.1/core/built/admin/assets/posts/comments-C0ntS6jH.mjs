import { o as L, j as e, u as T, p as w, b as I, n as P, V as we, F as ns, G as H, H as Q, J as _e, K as as, a as E, q as B, Q as A, v as G, e as is, _ as ie, $ as os } from "./index-BiGQFQkQ.mjs";
import { u as ls, F as cs, T as te, a as re, b as ne, d as ae, c as ds } from "./filters-CWWDQAf0.mjs";
import { c as Y, b as X, a as ms, d as us } from "./hooks-DQYjPsLg.mjs";
import { u as hs, g as ps } from "./posts-C2SKGLoU.mjs";
import { u as fs, U as oe, g as xs, D as bs, b as gs, E as js, d as vs, e as W, h as Cs, S as ys } from "./separator-CJnnsW1a.mjs";
import { e as Ns, i as ks, b as le, a as ws, F as _s, f as Ss, C as Ps, g as Se, D as ce, M as Ts, H as Pe, R as Rs, d as Te, E as Re, h as Le } from "./search-C8k0TFkh.mjs";
import { a as Ls, C as Es, X as Is, k as de, m as me, n as ue, o as he, p as $s, q as pe } from "./dialog-CXEmd-rC.mjs";
import { H as ve, g as Ms, u as Ds } from "./use-infinite-virtual-scroll-CMiIpcDA.mjs";
import { M as Fs } from "./main-layout-D5WnaGr4.mjs";
import { c as zs, P as fe, u as Os, b as Ee, e as Ce, h as Hs, B as S, C as Bs } from "./heading-DZWin3nG.mjs";
import { L as U } from "./loading-indicator-CZQmPRvv.mjs";
import { E as Ie } from "./empty-indicator-CY1NEQZt.mjs";
import { S as As, b as Us, c as Vs, d as qs } from "./sheet-HDzKgNHc.mjs";
var Z = "Checkbox", [Ws] = zs(Z), [Qs, xe] = Ws(Z);
function Ks(s) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: a,
    defaultChecked: n,
    disabled: i,
    form: o,
    name: l,
    onCheckedChange: c,
    required: d,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = s, [x, p] = Os({
    prop: r,
    defaultProp: n ?? !1,
    onChange: c,
    caller: Z
  }), [f, j] = T(null), [g, v] = T(null), b = w(!1), y = f ? !!o || !!f.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: x,
    disabled: i,
    setChecked: p,
    control: f,
    setControl: j,
    name: l,
    form: o,
    value: u,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: $(n) ? !1 : n,
    isFormControl: y,
    bubbleInput: g,
    setBubbleInput: v
  };
  return /* @__PURE__ */ e.jsx(
    Qs,
    {
      scope: t,
      ...C,
      children: Gs(m) ? m(C) : a
    }
  );
}
var $e = "CheckboxTrigger", Me = L(
  ({ __scopeCheckbox: s, onKeyDown: t, onClick: r, ...a }, n) => {
    const {
      control: i,
      value: o,
      disabled: l,
      checked: c,
      required: d,
      setControl: u,
      setChecked: m,
      hasConsumerStoppedPropagationRef: x,
      isFormControl: p,
      bubbleInput: f
    } = xe($e, s), j = Ee(n, u), g = w(c);
    return I(() => {
      const v = i == null ? void 0 : i.form;
      if (v) {
        const b = () => m(g.current);
        return v.addEventListener("reset", b), () => v.removeEventListener("reset", b);
      }
    }, [i, m]), /* @__PURE__ */ e.jsx(
      fe.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": $(c) ? "mixed" : c,
        "aria-required": d,
        "data-state": He(c),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: o,
        ...a,
        ref: j,
        onKeyDown: Ce(t, (v) => {
          v.key === "Enter" && v.preventDefault();
        }),
        onClick: Ce(r, (v) => {
          m((b) => $(b) ? !0 : !b), f && p && (x.current = v.isPropagationStopped(), x.current || v.stopPropagation());
        })
      }
    );
  }
);
Me.displayName = $e;
var be = L(
  (s, t) => {
    const {
      __scopeCheckbox: r,
      name: a,
      checked: n,
      defaultChecked: i,
      required: o,
      disabled: l,
      value: c,
      onCheckedChange: d,
      form: u,
      ...m
    } = s;
    return /* @__PURE__ */ e.jsx(
      Ks,
      {
        __scopeCheckbox: r,
        checked: n,
        defaultChecked: i,
        disabled: l,
        required: o,
        onCheckedChange: d,
        name: a,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: x }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            Me,
            {
              ...m,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          x && /* @__PURE__ */ e.jsx(
            Oe,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
be.displayName = Z;
var De = "CheckboxIndicator", Fe = L(
  (s, t) => {
    const { __scopeCheckbox: r, forceMount: a, ...n } = s, i = xe(De, r);
    return /* @__PURE__ */ e.jsx(
      Ls,
      {
        present: a || $(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ e.jsx(
          fe.span,
          {
            "data-state": He(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...n,
            ref: t,
            style: { pointerEvents: "none", ...s.style }
          }
        )
      }
    );
  }
);
Fe.displayName = De;
var ze = "CheckboxBubbleInput", Oe = L(
  ({ __scopeCheckbox: s, ...t }, r) => {
    const {
      control: a,
      hasConsumerStoppedPropagationRef: n,
      checked: i,
      defaultChecked: o,
      required: l,
      disabled: c,
      name: d,
      value: u,
      form: m,
      bubbleInput: x,
      setBubbleInput: p
    } = xe(ze, s), f = Ee(r, p), j = ls(i), g = fs(a);
    I(() => {
      const b = x;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, h = !n.current;
      if (j !== i && k) {
        const R = new Event("click", { bubbles: h });
        b.indeterminate = $(i), k.call(b, $(i) ? !1 : i), b.dispatchEvent(R);
      }
    }, [x, j, i, n]);
    const v = w($(i) ? !1 : i);
    return /* @__PURE__ */ e.jsx(
      fe.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: o ?? v.current,
        required: l,
        disabled: c,
        name: d,
        value: u,
        form: m,
        ...t,
        tabIndex: -1,
        ref: f,
        style: {
          ...t.style,
          ...g,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Oe.displayName = ze;
function Gs(s) {
  return typeof s == "function";
}
function $(s) {
  return s === "indeterminate";
}
function He(s) {
  return $(s) ? "indeterminate" : s ? "checked" : "unchecked";
}
const Ys = we(
  "inline-flex items-center rounded-sm border px-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Xs({ className: s, variant: t, ...r }) {
  return /* @__PURE__ */ e.jsx("div", { className: P(Ys({ variant: t }), s), ...r });
}
const Be = L(({ className: s, ...t }, r) => /* @__PURE__ */ e.jsx(
  be,
  {
    ref: r,
    className: P(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      s
    ),
    ...t,
    children: /* @__PURE__ */ e.jsx(
      Fe,
      {
        className: P("grid place-content-center text-current"),
        children: /* @__PURE__ */ e.jsx(Es, { className: "size-4" })
      }
    )
  }
));
Be.displayName = be.displayName;
var Zs = Symbol.for("react.lazy"), K = ns[" use ".trim().toString()];
function Js(s) {
  return typeof s == "object" && s !== null && "then" in s;
}
function Ae(s) {
  return s != null && typeof s == "object" && "$$typeof" in s && s.$$typeof === Zs && "_payload" in s && Js(s._payload);
}
// @__NO_SIDE_EFFECTS__
function et(s) {
  const t = /* @__PURE__ */ st(s), r = L((a, n) => {
    let { children: i, ...o } = a;
    Ae(i) && typeof K == "function" && (i = K(i._payload));
    const l = H.toArray(i), c = l.find(rt);
    if (c) {
      const d = c.props.children, u = l.map((m) => m === c ? H.count(d) > 1 ? H.only(null) : Q(d) ? d.props.children : null : m);
      return /* @__PURE__ */ e.jsx(t, { ...o, ref: n, children: Q(d) ? _e(d, void 0, u) : null });
    }
    return /* @__PURE__ */ e.jsx(t, { ...o, ref: n, children: i });
  });
  return r.displayName = `${s}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function st(s) {
  const t = L((r, a) => {
    let { children: n, ...i } = r;
    if (Ae(n) && typeof K == "function" && (n = K(n._payload)), Q(n)) {
      const o = at(n), l = nt(i, n.props);
      return n.type !== as && (l.ref = a ? Hs(a, o) : o), _e(n, l);
    }
    return H.count(n) > 1 ? H.only(null) : null;
  });
  return t.displayName = `${s}.SlotClone`, t;
}
var tt = Symbol("radix.slottable");
function rt(s) {
  return Q(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === tt;
}
function nt(s, t) {
  const r = { ...t };
  for (const a in t) {
    const n = s[a], i = t[a];
    /^on[A-Z]/.test(a) ? n && i ? r[a] = (...l) => {
      const c = i(...l);
      return n(...l), c;
    } : n && (r[a] = n) : a === "style" ? r[a] = { ...n, ...i } : a === "className" && (r[a] = [n, i].filter(Boolean).join(" "));
  }
  return { ...s, ...r };
}
function at(s) {
  var a, n;
  let t = (a = Object.getOwnPropertyDescriptor(s.props, "ref")) == null ? void 0 : a.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? s.ref : (t = (n = Object.getOwnPropertyDescriptor(s, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? s.props.ref : s.props.ref || s.ref);
}
var it = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ot = it.reduce((s, t) => {
  const r = /* @__PURE__ */ et(`Primitive.${t}`), a = L((n, i) => {
    const { asChild: o, ...l } = n, c = o ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ e.jsx(c, { ...l, ref: i });
  });
  return a.displayName = `Primitive.${t}`, { ...s, [t]: a };
}, {}), lt = "Label", Ue = L((s, t) => /* @__PURE__ */ e.jsx(
  ot.label,
  {
    ...s,
    ref: t,
    onMouseDown: (r) => {
      var n;
      r.target.closest("button, input, select, textarea") || ((n = s.onMouseDown) == null || n.call(s, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Ue.displayName = lt;
var Ve = Ue;
const ct = we(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), qe = L(({ className: s, ...t }, r) => /* @__PURE__ */ e.jsx(
  Ve,
  {
    ref: r,
    className: P(ct(), s),
    ...t
  }
));
qe.displayName = Ve.displayName;
const dt = ({ children: s, className: t, ...r }) => /* @__PURE__ */ e.jsx("section", { className: P("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...r, children: s }), We = "MembersResponseType", mt = ms({
  dataType: We,
  path: "/members/"
}), ut = Y({
  dataType: We,
  path: (s) => `/members/${s}/`
}), ht = X({
  method: "POST",
  path: ({ id: s }) => `/members/${s}/commenting/disable`,
  body: ({ reason: s, hideComments: t }) => ({
    reason: s,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), pt = X({
  method: "POST",
  path: ({ id: s }) => `/members/${s}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
});
function ye({
  knownItems: s,
  useSearch: t,
  useGetById: r,
  filters: a,
  filterFieldName: n,
  searchFieldName: i,
  toOption: o
}) {
  const [l, c] = T(""), { data: d, isLoading: u } = t(l), m = E(() => {
    const b = a.find((y) => y.field === n);
    return b != null && b.values[0] ? String(b.values[0]) : "";
  }, [a, n]), x = E(() => !m || s.some((y) => y.id === m) ? !1 : !((d == null ? void 0 : d[i]) ?? []).some((y) => y.id === m), [m, s, d, i]), { data: p, isLoading: f } = r(m || "", {
    enabled: x,
    defaultErrorHandler: !1
  }), j = u || f, g = B((b) => o(b), [o]);
  return {
    options: E(() => {
      var k;
      const b = (d == null ? void 0 : d[i]) ?? [], y = {};
      for (const h of s)
        y[h.id] = g(h);
      for (const h of b)
        y[h.id] = g(h);
      const C = (k = p == null ? void 0 : p[i]) == null ? void 0 : k[0];
      return C != null && C.id && (y[C.id] = g(C)), m && !(m in y) && (y[m] = { value: m, label: `ID: ${m}` }), Object.values(y);
    }, [s, d, i, p, m, g]),
    isLoading: j,
    searchValue: l,
    onSearchChange: c
  };
}
function ft(s, t, r, a) {
  var n = this, i = w(null), o = w(0), l = w(0), c = w(null), d = w([]), u = w(), m = w(), x = w(s), p = w(!0);
  x.current = s;
  var f = typeof window < "u", j = !t && t !== 0 && f;
  if (typeof s != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var g = !!(r = r || {}).leading, v = !("trailing" in r) || !!r.trailing, b = "maxWait" in r, y = "debounceOnServer" in r && !!r.debounceOnServer, C = b ? Math.max(+r.maxWait || 0, t) : null;
  I(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var k = E(function() {
    var h = function(N) {
      var _ = d.current, D = u.current;
      return d.current = u.current = null, o.current = N, l.current = l.current || N, m.current = x.current.apply(D, _);
    }, R = function(N, _) {
      j && cancelAnimationFrame(c.current), c.current = j ? requestAnimationFrame(N) : setTimeout(N, _);
    }, ee = function(N) {
      if (!p.current) return !1;
      var _ = N - i.current;
      return !i.current || _ >= t || _ < 0 || b && N - o.current >= C;
    }, O = function(N) {
      return c.current = null, v && d.current ? h(N) : (d.current = u.current = null, m.current);
    }, F = function N() {
      var _ = Date.now();
      if (g && l.current === o.current && V(), ee(_)) return O(_);
      if (p.current) {
        var D = t - (_ - i.current), q = b ? Math.min(D, C - (_ - o.current)) : D;
        R(N, q);
      }
    }, V = function() {
      a && a({});
    }, M = function() {
      if (f || y) {
        var N = Date.now(), _ = ee(N);
        if (d.current = [].slice.call(arguments), u.current = n, i.current = N, _) {
          if (!c.current && p.current) return o.current = i.current, R(F, t), g ? h(i.current) : m.current;
          if (b) return R(F, t), h(i.current);
        }
        return c.current || R(F, t), m.current;
      }
    };
    return M.cancel = function() {
      var N = c.current;
      N && (j ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), o.current = 0, d.current = i.current = u.current = c.current = null, N && a && a({});
    }, M.isPending = function() {
      return !!c.current;
    }, M.flush = function() {
      return c.current ? O(Date.now()) : m.current;
    }, M;
  }, [g, b, t, C, v, j, f, y, a]);
  return k;
}
function xt(s, t) {
  return s === t;
}
function Qe(s, t, r) {
  var a = xt, n = w(s), i = T({})[1], o = ft(B(function(c) {
    n.current = c, i({});
  }, [i]), t, r, i), l = w(s);
  return a(l.current, s) || (o(s), l.current = s), [n.current, o];
}
function bt(s) {
  const [t] = Qe(s, 200);
  return mt({
    searchParams: {
      ...t && { search: t },
      limit: "100",
      order: "created_at DESC"
    }
  });
}
function gt(s) {
  const [t] = Qe(s, 200), r = t ? `title:~'${t.replace(/'/g, "\\'")}'` : "";
  return hs({
    searchParams: {
      ...r && { filter: r },
      limit: "100",
      fields: "id,title",
      order: "published_at DESC"
    }
  });
}
const jt = ({
  knownPosts: s,
  knownMembers: t,
  filters: r,
  onFiltersChange: a
}) => {
  const n = ye({
    knownItems: s,
    useSearch: gt,
    useGetById: ps,
    searchFieldName: "posts",
    filters: r,
    filterFieldName: "post",
    toOption: (d) => ({
      value: d.id,
      label: d.title || "(Untitled)"
    })
  }), i = ye({
    knownItems: t,
    useSearch: bt,
    useGetById: ut,
    searchFieldName: "members",
    filters: r,
    filterFieldName: "author",
    toOption: (d) => ({
      value: d.id,
      label: d.name || "Unknown name",
      detail: d.email ?? "(Unknown email)"
    })
  }), o = E(
    () => [
      {
        key: "author",
        label: "Author",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(oe, { className: "size-4" }),
        options: i.options,
        isLoading: i.options.length === 0 && i.isLoading,
        onSearchChange: i.onSearchChange,
        searchValue: i.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "post",
        label: "Post",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Ns, { className: "size-4" }),
        options: n.options,
        isLoading: n.options.length === 0 && n.isLoading,
        onSearchChange: n.onSearchChange,
        searchValue: n.searchValue,
        searchable: !0,
        className: "w-full max-w-80",
        popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "body",
        label: "Text",
        type: "text",
        icon: /* @__PURE__ */ e.jsx(ks, { className: "size-4" }),
        placeholder: "Search comment text...",
        operators: [
          { value: "contains", label: "contains" },
          { value: "not_contains", label: "does not contain" }
        ],
        defaultOperator: "contains",
        className: "w-full max-w-48",
        popoverContentClassName: "w-full max-w-48"
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(xs, { className: "size-4" }),
        options: [
          { value: "published", label: "Published" },
          { value: "hidden", label: "Hidden" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "reported",
        label: "Reported",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(le, { className: "size-4" }),
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "created_at",
        label: "Date",
        type: "date",
        className: "w-full max-w-32",
        icon: /* @__PURE__ */ e.jsx(ws, { className: "size-4" }),
        operators: [
          { value: "is", label: "is" },
          { value: "before", label: "before" },
          { value: "after", label: "after" }
        ]
      }
    ],
    [n, i]
  ), l = r.length > 0, c = P(
    "flex flex-row",
    !l && "[grid-area:actions] pt-5 justify-start sm:justify-end sm:pt-0",
    l && "col-start-1 col-end-4 row-start-3 pt-5"
  );
  return /* @__PURE__ */ e.jsx("div", { className: c, children: /* @__PURE__ */ e.jsx(
    cs,
    {
      addButtonIcon: l ? /* @__PURE__ */ e.jsx(_s, {}) : /* @__PURE__ */ e.jsx(Ss, {}),
      addButtonText: l ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${l ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ e.jsx(Is, {}),
      clearButtonText: "Clear",
      fields: o,
      filters: r,
      keyboardShortcut: "f",
      popoverAlign: l ? "start" : "end",
      showClearButton: l,
      showSearchInput: !1,
      onChange: a
    }
  ) });
}, vt = ({ children: s }) => /* @__PURE__ */ e.jsxs(ve, { className: "relative !pb-6 md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(ve.Title, { children: "Comments" }),
  s
] }), Ct = ({ children: s }) => /* @__PURE__ */ e.jsx(Fs, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: s }) }) });
function yt({ onClick: s, expanded: t }) {
  return /* @__PURE__ */ e.jsxs(
    S,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: s,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ e.jsx(Ps, {}) : /* @__PURE__ */ e.jsx(Bs, {})
      ]
    }
  );
}
function Ke({ item: s }) {
  const t = w(null), [r, a] = T(!1), [n, i] = T(!1);
  return I(() => {
    if (n)
      return;
    const o = () => {
      t.current && a(t.current.scrollHeight > t.current.clientHeight);
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [s.html, n]), /* @__PURE__ */ e.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ e.jsxs("div", { className: `flex max-w-full flex-col items-start ${s.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: s.html || "" },
        ref: t,
        className: P(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          n ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ e.jsx(yt, { expanded: n, onClick: () => i(!n) })
  ] }) });
}
const J = "CommentsResponseType", Nt = us({
  dataType: J,
  path: "/comments/",
  defaultNextPageParams: (s, t) => {
    var r, a;
    return (r = s.meta) != null && r.pagination.next ? {
      ...t,
      page: (((a = s.meta) == null ? void 0 : a.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (s) => {
    const { pages: t } = s, r = t.flatMap((n) => n.comments), a = t[t.length - 1].meta;
    return {
      comments: r,
      meta: a,
      isEnd: a ? a.pagination.pages === a.pagination.page : !0
    };
  }
}), Ge = (s) => Nt({
  ...s,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...s == null ? void 0 : s.searchParams
  }
}), Ye = X({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: J
  }
}), Xe = X({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: J
  }
}), kt = Y({
  dataType: J,
  path: (s) => `/comments/${s}/`,
  defaultSearchParams: {
    include: "member,post,count.replies,count.direct_replies,count.likes,count.reports,parent,in_reply_to"
  }
}), wt = Y({
  dataType: "CommentReportsResponseType",
  path: (s) => `/comments/${s}/reports/`
}), _t = (s, t) => wt(s, { ...t }), St = Y({
  dataType: "CommentLikesResponseType",
  path: (s) => `/comments/${s}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), Pt = (s, t) => St(s, { ...t }), Tt = (s, t) => Ge({
  ...t,
  searchParams: {
    filter: `(parent_id:${s}+in_reply_to_id:null),in_reply_to_id:${s}`,
    order: "created_at asc",
    include: "member,post,count.direct_replies,count.likes,count.reports,parent,in_reply_to",
    limit: "100"
  }
});
function z({ avatarImage: s, memberId: t, isHidden: r, className: a }) {
  return /* @__PURE__ */ e.jsxs("div", { className: P(
    "relative flex size-6 min-w-6 items-center justify-center overflow-hidden rounded-full bg-accent md:size-8 md:min-w-8",
    r && "opacity-50",
    a
  ), children: [
    t && s && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ e.jsx("img", { alt: "Member avatar", src: s }) }),
    /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(oe, { className: "!size-3 text-muted-foreground md:!size-4", size: 12 }) })
  ] });
}
function Rt(s) {
  const t = new Date(s);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function Ze({
  memberName: s,
  memberId: t,
  createdAt: r,
  isHidden: a,
  canComment: n,
  onAuthorClick: i,
  postTitle: o,
  onPostClick: l,
  className: c
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: P("flex items-baseline gap-4", c), children: [
    /* @__PURE__ */ e.jsxs("div", { className: P(
      "mb-1 flex min-w-0 items-center gap-x-1 text-sm",
      a && "opacity-50"
    ), children: [
      /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap", children: t && i ? /* @__PURE__ */ e.jsx(
        S,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: i,
          children: s || "Unknown"
        }
      ) : /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold", children: s || "Unknown" }) }),
      n === !1 && /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(re, { children: [
        /* @__PURE__ */ e.jsx(ne, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ e.jsx(
          Se,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ e.jsx(ae, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ e.jsx(ce, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ e.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(re, { children: [
        /* @__PURE__ */ e.jsx(ne, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: A(r) }) }),
        /* @__PURE__ */ e.jsx(ae, { children: Rt(r) })
      ] }) }) }),
      o && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 truncate", children: l ? /* @__PURE__ */ e.jsx(
          S,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: l,
            children: o
          }
        ) : /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: o }) })
      ] })
    ] }),
    a && /* @__PURE__ */ e.jsx(Xs, { variant: "secondary", children: "Hidden" })
  ] });
}
function Lt({
  open: s,
  memberName: t,
  onOpenChange: r,
  onConfirm: a
}) {
  const [n, i] = T(!1), o = (c) => {
    c || i(!1), r(c);
  }, l = () => {
    a(n), i(!1);
  };
  return /* @__PURE__ */ e.jsx(de, { open: s, onOpenChange: o, children: /* @__PURE__ */ e.jsxs(me, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsxs(ue, { children: [
      /* @__PURE__ */ e.jsx(he, { children: "Disable comments" }),
      /* @__PURE__ */ e.jsxs($s, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(
        Be,
        {
          checked: n,
          id: "hide-comments",
          onCheckedChange: (c) => i(c === !0)
        }
      ),
      /* @__PURE__ */ e.jsx(qe, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ e.jsxs(pe, { children: [
      /* @__PURE__ */ e.jsx(S, { variant: "outline", onClick: () => o(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(S, { onClick: l, children: "Disable comments" })
    ] })
  ] }) });
}
function Je({
  comment: s
}) {
  const { mutate: t } = ht(), { mutate: r } = pt(), [a, n] = T(!1), { id: i, post: o, member: l } = s, c = o == null ? void 0 : o.url, d = l == null ? void 0 : l.id, u = l == null ? void 0 : l.can_comment, m = (p) => {
    d && (t({
      id: d,
      reason: `Disabled from comment ${i}`,
      hideComments: p
    }), n(!1));
  }, x = () => {
    d && r({ id: d });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(bs, { children: [
      /* @__PURE__ */ e.jsx(gs, { asChild: !0, children: /* @__PURE__ */ e.jsx(
        S,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ e.jsx(js, {})
        }
      ) }),
      /* @__PURE__ */ e.jsxs(vs, { align: "start", children: [
        c && /* @__PURE__ */ e.jsx(W, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `${c}#ghost-comments-${i}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ e.jsx(Cs, { className: "size-4" }),
          "View on post"
        ] }) }),
        d && /* @__PURE__ */ e.jsx(W, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `#/members/${d}`, children: [
          /* @__PURE__ */ e.jsx(oe, { className: "size-4" }),
          "View member"
        ] }) }),
        d && (u !== !1 ? /* @__PURE__ */ e.jsxs(W, { onClick: () => n(!0), children: [
          /* @__PURE__ */ e.jsx(Se, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ e.jsxs(W, { onClick: x, children: [
          /* @__PURE__ */ e.jsx(Ts, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      Lt,
      {
        memberName: l == null ? void 0 : l.name,
        open: a,
        onConfirm: m,
        onOpenChange: n
      }
    )
  ] });
}
function Et({ comment: s, open: t, onOpenChange: r }) {
  var c, d, u, m, x;
  const { data: a, isLoading: n } = Pt(s.id, { enabled: t }), i = (a == null ? void 0 : a.comment_likes) ?? [], o = ((c = s.count) == null ? void 0 : c.likes) ?? 0, l = o - i.length;
  return /* @__PURE__ */ e.jsx(de, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(me, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(he, { children: [
      o,
      " ",
      o === 1 ? "like" : "likes"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        z,
        {
          avatarImage: (d = s.member) == null ? void 0 : d.avatar_image,
          className: "shrink-0",
          memberId: (u = s.member) == null ? void 0 : u.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((m = s.member) == null ? void 0 : m.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(ce, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && A(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((x = s.post) == null ? void 0 : x.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(U, { size: "md" }) }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      i.map((p) => {
        var f, j, g;
        return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ e.jsx(
                z,
                {
                  avatarImage: (f = p.member) == null ? void 0 : f.avatar_image,
                  memberId: (j = p.member) == null ? void 0 : j.id
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ e.jsx(Pe, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((g = p.member) == null ? void 0 : g.name) || "Deleted member" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: A(p.created_at) })
        ] }, p.id);
      }),
      l > 0 && /* @__PURE__ */ e.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        l,
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(pe, { children: /* @__PURE__ */ e.jsx(S, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function It({ comment: s, open: t, onOpenChange: r }) {
  var l, c, d, u, m;
  const { data: a, isLoading: n } = _t(s.id, { enabled: t }), i = (a == null ? void 0 : a.comment_reports) ?? [], o = ((l = s.count) == null ? void 0 : l.reports) ?? i.length;
  return /* @__PURE__ */ e.jsx(de, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(me, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(he, { children: [
      o,
      " ",
      o === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        z,
        {
          avatarImage: (c = s.member) == null ? void 0 : c.avatar_image,
          className: "shrink-0",
          memberId: (d = s.member) == null ? void 0 : d.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((u = s.member) == null ? void 0 : u.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(ce, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && A(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((m = s.post) == null ? void 0 : m.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(U, { size: "md" }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-3 pb-1", children: i.map((x) => {
      var p, f, j;
      return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ e.jsx(
              z,
              {
                avatarImage: (p = x.member) == null ? void 0 : p.avatar_image,
                memberId: (f = x.member) == null ? void 0 : f.id
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ e.jsx(le, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((j = x.member) == null ? void 0 : j.name) || "Deleted member" })
        ] }),
        /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: A(x.created_at) })
      ] }, x.id);
    }) }) }),
    /* @__PURE__ */ e.jsx(pe, { children: /* @__PURE__ */ e.jsx(S, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function se({ icon: s, count: t, label: r, to: a, onClick: n, className: i, testId: o }) {
  const l = P("flex items-center gap-1 text-xs text-gray-800", i), c = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    s,
    /* @__PURE__ */ e.jsx("span", { children: is(t) })
  ] }), d = a || n;
  return /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(re, { children: [
    /* @__PURE__ */ e.jsx(ne, { asChild: !0, children: a ? /* @__PURE__ */ e.jsx(
      ie,
      {
        className: P(l, "cursor-pointer hover:opacity-70"),
        "data-testid": o,
        to: a,
        onClick: (u) => {
          u.stopPropagation();
        },
        children: c
      }
    ) : n ? /* @__PURE__ */ e.jsx(
      "button",
      {
        className: P(l, "cursor-pointer hover:opacity-70"),
        "data-testid": o,
        type: "button",
        onClick: (u) => {
          u.stopPropagation(), n();
        },
        children: c
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: l, "data-testid": o, children: c }) }),
    /* @__PURE__ */ e.jsx(ae, { children: d ? `View ${r.toLowerCase()}` : r })
  ] }) });
}
function ge(s, t) {
  if (!t)
    return;
  const r = new URLSearchParams(s);
  return r.set("thread", `is:${t}`), `?${r.toString()}`;
}
function es({
  comment: s,
  className: t
}) {
  var f, j, g, v, b;
  const [r] = G(), [a, n] = T(!1), [i, o] = T(!1), l = ge(r, s.id), c = ((f = s.count) == null ? void 0 : f.direct_replies) ?? ((j = s.count) == null ? void 0 : j.replies) ?? ((g = s.replies) == null ? void 0 : g.length) ?? 0, d = ((v = s.count) == null ? void 0 : v.likes) ?? 0, u = ((b = s.count) == null ? void 0 : b.reports) ?? 0, m = c > 0, x = d > 0, p = u > 0;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: P("flex items-center gap-6", t), children: [
      /* @__PURE__ */ e.jsx(
        se,
        {
          count: c,
          icon: /* @__PURE__ */ e.jsx(Rs, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: m ? l : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        se,
        {
          count: d,
          icon: /* @__PURE__ */ e.jsx(Pe, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: x ? () => n(!0) : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        se,
        {
          className: p ? "font-semibold text-red" : void 0,
          count: u,
          icon: /* @__PURE__ */ e.jsx(le, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: p ? () => o(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      Et,
      {
        comment: s,
        open: a,
        onOpenChange: n
      }
    ),
    /* @__PURE__ */ e.jsx(
      It,
      {
        comment: s,
        open: i,
        onOpenChange: o
      }
    )
  ] });
}
function $t({ hasReplies: s }) {
  return s ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function ss({ comment: s, isReply: t = !1, isSelectedComment: r = !1, selectedCommentId: a }) {
  var d, u, m, x, p, f, j, g;
  const [n] = G(), { mutate: i } = Ye(), { mutate: o } = Xe(), l = (((d = s.replies) == null ? void 0 : d.length) ?? 0) > 0 || (((u = s.count) == null ? void 0 : u.direct_replies) ?? ((m = s.count) == null ? void 0 : m.replies) ?? 0) > 0, c = !l || t ? "mb-7" : "mb-0";
  return /* @__PURE__ */ e.jsxs("div", { className: `flex w-full flex-row ${c}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ e.jsx(
        z,
        {
          avatarImage: (x = s.member) == null ? void 0 : x.avatar_image,
          className: "mb-3 shrink-0 md:mb-4",
          isHidden: s.status === "hidden",
          memberId: (p = s.member) == null ? void 0 : p.id
        }
      ),
      /* @__PURE__ */ e.jsx($t, { hasReplies: l && !t })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grow", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${s.id}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ e.jsx(
              Ze,
              {
                canComment: (f = s.member) == null ? void 0 : f.can_comment,
                createdAt: s.created_at,
                isHidden: s.status === "hidden",
                memberId: (j = s.member) == null ? void 0 : j.id,
                memberName: (g = s.member) == null ? void 0 : g.name
              }
            ),
            s.in_reply_to_snippet && r && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${s.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ e.jsx(
                ie,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: ge(n, s.in_reply_to_id || s.parent_id) || "",
                  onClick: (v) => {
                    v.stopPropagation();
                  },
                  children: s.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(Ke, { item: s }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              s.status === "published" && /* @__PURE__ */ e.jsxs(S, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => i({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(Te, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              s.status === "hidden" && /* @__PURE__ */ e.jsxs(S, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => o({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(Re, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ e.jsx(
                es,
                {
                  comment: s
                }
              ),
              /* @__PURE__ */ e.jsx(
                Je,
                {
                  comment: s
                }
              )
            ] })
          ] }),
          l && s.replies && /* @__PURE__ */ e.jsx("div", { className: "-ml-2 mb-4 mt-7 pl-2 md:-ml-3 md:mb-0 md:mt-8 md:pl-3", children: s.replies.map((v) => /* @__PURE__ */ e.jsx(
            ss,
            {
              comment: v,
              isReply: !0,
              selectedCommentId: a
            },
            v.id
          )) })
        ]
      }
    ) })
  ] });
}
const Mt = ({
  selectedComment: s,
  replies: t,
  selectedCommentId: r,
  fetchNextPage: a,
  hasNextPage: n,
  isFetchingNextPage: i
}) => {
  const o = { ...s, replies: t };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ e.jsx(
      ss,
      {
        comment: o,
        isSelectedComment: !0,
        selectedCommentId: r
      }
    ),
    n && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ e.jsx(
      S,
      {
        disabled: i,
        variant: "outline",
        onClick: () => a(),
        children: i ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(U, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, Dt = ({
  commentId: s,
  open: t,
  onOpenChange: r
}) => {
  var g;
  const {
    data: a,
    isLoading: n,
    isError: i,
    fetchNextPage: o,
    hasNextPage: l,
    isFetchingNextPage: c
  } = Tt(s ?? "", {
    enabled: t && !!s
  }), { data: d, isLoading: u, isError: m } = kt(s ?? "", {
    enabled: t && !!s
  }), x = n || u, p = m || i && !d, f = (g = d == null ? void 0 : d.comments) == null ? void 0 : g[0], j = (a == null ? void 0 : a.comments) || [];
  return /* @__PURE__ */ e.jsx(As, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(Us, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[600px]", children: [
    /* @__PURE__ */ e.jsx(Vs, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ e.jsx(qs, { className: "text-md", children: "Thread" }) }),
    (f == null ? void 0 : f.post) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: f.post.title }),
          f.post.excerpt && /* @__PURE__ */ e.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: f.post.excerpt })
        ] }),
        f.post.feature_image && /* @__PURE__ */ e.jsx(
          "img",
          {
            alt: f.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: f.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(ys, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: x ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(U, { size: "lg" }) }) : p || !f ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(
      Ie,
      {
        actions: /* @__PURE__ */ e.jsx(S, { variant: "outline", onClick: () => r(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ e.jsx(Le, {})
      }
    ) }) : /* @__PURE__ */ e.jsx(
      Mt,
      {
        fetchNextPage: o,
        hasNextPage: l,
        isFetchingNextPage: c,
        replies: j,
        selectedComment: f,
        selectedCommentId: s ?? ""
      }
    ) })
  ] }) });
}, Ne = /* @__PURE__ */ new Map();
function Ft({ parentRef: s, enabled: t = !0, isLoading: r = !1 }) {
  const a = os(), [n, i] = T(null), o = w(null);
  I(() => {
    if (!t || !s.current)
      return;
    const l = Ms(s.current);
    i(l);
  }, [t, s]), I(() => {
    if (!t || !n)
      return;
    const l = a.pathname + a.search, c = () => {
      const d = n.scrollTop;
      Ne.set(l, d);
    };
    return n.addEventListener("scroll", c), () => n.removeEventListener("scroll", c);
  }, [t, a.pathname, a.search, n]), I(() => {
    const l = a.pathname + a.search, c = Ne.get(l);
    if (!(!t || !n || r)) {
      if (c !== void 0 && o.current !== l) {
        let d = 0;
        const u = 3, m = () => {
          if (d += 1, !n)
            return;
          const p = n.scrollTop, f = n.scrollHeight, j = n.clientHeight, g = f - j;
          if (c > g && d < u) {
            setTimeout(m, 100);
            return;
          }
          if (Math.abs(c - p) > 5) {
            const v = Math.min(c, g);
            n.scrollTop = v;
          }
        }, x = setTimeout(m, 150);
        return () => clearTimeout(x);
      }
      o.current = l;
    }
  }, [t, a.pathname, a.search, n, r]);
}
const ke = ({ height: s }) => /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: s } }) }), zt = L(function(t, r) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: r,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ e.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function Ot({
  items: s,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: a,
  fetchNextPage: n,
  onAddFilter: i,
  isLoading: o
}) {
  const l = w(null), [c, d] = G(), [u, m] = T(!1), [x, p] = T(null), { mutate: f } = Ye(), { mutate: j } = Xe(), g = (C) => {
    if (m(C), !C) {
      const k = new URLSearchParams(c);
      k.delete("thread"), d(k, { replace: !0 });
    }
  };
  I(() => {
    const C = c.get("thread");
    if (C) {
      const k = C.match(/^is:(.+)$/);
      if (k && k[1]) {
        const h = k[1];
        p(h), m(!0);
      } else
        m(!1), p(null);
    } else
      m(!1), p(null);
  }, [c]), Ft({ parentRef: l, isLoading: o });
  const { visibleItems: v, spaceBefore: b, spaceAfter: y } = Ds({
    items: s,
    totalItems: t,
    hasNextPage: r,
    isFetchingNextPage: a,
    fetchNextPage: n,
    parentRef: l
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: l, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e.jsx(ke, { height: b }),
          v.map(({ key: C, virtualItem: k, item: h, props: R }) => {
            var O, F, V, M, N, _, D, q, je;
            return k.index > s.length - 1 ? /* @__PURE__ */ e.jsx(zt, { ...R }, C) : /* @__PURE__ */ e.jsxs(
              "div",
              {
                ...R,
                className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
                "data-testid": "comment-list-row",
                onClick: () => {
                  u && g(!1);
                },
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e.jsx(
                      z,
                      {
                        avatarImage: (O = h.member) == null ? void 0 : O.avatar_image,
                        isHidden: h.status === "hidden",
                        memberId: (F = h.member) == null ? void 0 : F.id
                      }
                    ),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ e.jsx(
                        Ze,
                        {
                          canComment: (V = h.member) == null ? void 0 : V.can_comment,
                          createdAt: h.created_at,
                          isHidden: h.status === "hidden",
                          memberId: (M = h.member) == null ? void 0 : M.id,
                          memberName: (N = h.member) == null ? void 0 : N.name,
                          postTitle: (_ = h.post) == null ? void 0 : _.title,
                          onAuthorClick: (D = h.member) != null && D.id ? () => i("author", h.member.id) : void 0,
                          onPostClick: (q = h.post) != null && q.id ? () => i("post", h.post.id) : void 0
                        }
                      ),
                      h.in_reply_to_snippet && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl text-sm ${h.status === "hidden" && "opacity-50"}`, children: [
                        /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                        " ",
                        /* @__PURE__ */ e.jsx(
                          ie,
                          {
                            className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                            "data-testid": "replied-to-link",
                            to: ge(c, h.in_reply_to_id || h.parent_id) || "",
                            onClick: (rs) => {
                              rs.stopPropagation();
                            },
                            children: h.in_reply_to_snippet
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(Ke, { item: h }),
                      /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                        h.status === "published" && /* @__PURE__ */ e.jsxs(S, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => f({ id: h.id }), children: [
                          /* @__PURE__ */ e.jsx(Te, {}),
                          "Hide"
                        ] }),
                        h.status === "hidden" && /* @__PURE__ */ e.jsxs(S, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => j({ id: h.id }), children: [
                          /* @__PURE__ */ e.jsx(Re, {}),
                          "Show"
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          es,
                          {
                            className: "ml-2",
                            comment: h
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          Je,
                          {
                            comment: h
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { children: (je = h.post) != null && je.feature_image ? /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      alt: h.post.title || "Post feature image",
                      className: `hidden aspect-video w-36 rounded object-cover lg:block ${h.status === "hidden" && "opacity-50"}`,
                      src: h.post.feature_image
                    }
                  ) : null })
                ]
              },
              C
            );
          }),
          /* @__PURE__ */ e.jsx(ke, { height: y })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      Dt,
      {
        commentId: x,
        open: u,
        onOpenChange: g
      }
    )
  ] });
}
const ts = ["id", "status", "created_at", "body", "post", "author", "reported"];
function Ht(s) {
  const t = [];
  for (const r of s)
    if (r.values[0])
      switch (r.field) {
        case "id":
          t.push(`id:'${r.values[0]}'`);
          break;
        case "status":
          t.push(`status:${r.values[0]}`);
          break;
        case "created_at":
          if (r.operator === "before" && r.values[0])
            t.push(`created_at:<'${r.values[0]}'`);
          else if (r.operator === "after" && r.values[0])
            t.push(`created_at:>'${r.values[0]}'`);
          else if (r.operator === "is" && r.values[0]) {
            const i = String(r.values[0]), o = (/* @__PURE__ */ new Date(i + "T00:00:00")).toISOString(), l = (/* @__PURE__ */ new Date(i + "T23:59:59.999")).toISOString();
            t.push(`created_at:>='${o}'+created_at:<='${l}'`);
          }
          break;
        case "body":
          const n = r.values[0].replace(/'/g, "\\'");
          r.operator === "contains" ? t.push(`html:~'${n}'`) : r.operator === "not_contains" && t.push(`html:-~'${n}'`);
          break;
        case "post":
          r.operator === "is_not" ? t.push(`post_id:-${r.values[0]}`) : t.push(`post_id:${r.values[0]}`);
          break;
        case "author":
          r.operator === "is_not" ? t.push(`member_id:-${r.values[0]}`) : t.push(`member_id:${r.values[0]}`);
          break;
        case "reported":
          r.values[0] === "true" ? t.push("count.reports:>0") : r.values[0] === "false" && t.push("count.reports:0");
          break;
      }
  return t.length ? t.join("+") : void 0;
}
function Bt(s) {
  if (!s)
    return null;
  const t = s.indexOf(":");
  return t <= 0 ? null : {
    operator: s.substring(0, t),
    value: s.substring(t + 1)
  };
}
function At(s) {
  const t = [];
  for (const [r, a] of s.entries()) {
    if (!ts.includes(r) || !a)
      continue;
    const n = Bt(a);
    n && t.push({
      id: r,
      field: r,
      operator: n.operator,
      values: [n.value]
    });
  }
  return t;
}
function Ut(s) {
  const t = new URLSearchParams();
  for (const r of s)
    if (ts.includes(r.field) && r.values[0] !== void 0) {
      const a = `${r.operator}:${String(r.values[0])}`;
      t.set(r.field, a);
    }
  return t;
}
function Vt() {
  const [s, t] = G(), r = E(() => At(s), [s]), a = B((l, c = {}) => {
    const d = typeof l == "function" ? l(r) : l, u = Ut(d), m = c.replace ?? !0;
    t(u, { replace: m });
  }, [r, t]), n = B(({ replace: l = !0 } = {}) => {
    t(new URLSearchParams(), { replace: l });
  }, [t]), i = E(() => Ht(r), [r]), o = E(() => r.length === 1 && r[0].field === "id", [r]);
  return { filters: r, nql: i, setFilters: a, clearFilters: n, isSingleIdFilter: o };
}
function qt({ comments: s }) {
  return E(() => {
    var a, n, i;
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const o of s)
      (a = o.post) != null && a.id && ((n = o.post) != null && n.title) && t.set(o.post.id, {
        id: o.post.id,
        title: o.post.title
      }), (i = o.member) != null && i.id && r.set(o.member.id, {
        id: o.member.id,
        name: o.member.name,
        email: o.member.email
      });
    return {
      knownPosts: Array.from(t.values()),
      knownMembers: Array.from(r.values())
    };
  }, [s]);
}
const ar = () => {
  var g, v;
  const { filters: s, nql: t, setFilters: r, clearFilters: a, isSingleIdFilter: n } = Vt(), i = B((b, y, C = "is") => {
    r((k) => [...k.filter((R) => R.field !== b), ds(b, C, [y])], { replace: !1 });
  }, [r]), {
    data: o,
    isError: l,
    isFetching: c,
    isFetchingNextPage: d,
    isRefetching: u,
    fetchNextPage: m,
    hasNextPage: x
  } = Ge({
    searchParams: t ? { filter: t } : {},
    keepPreviousData: !0
  }), { knownPosts: p, knownMembers: f } = qt({ comments: (o == null ? void 0 : o.comments) ?? [] }), j = c && !d && !u;
  return /* @__PURE__ */ e.jsxs(Ct, { children: [
    /* @__PURE__ */ e.jsx(vt, { children: !n && /* @__PURE__ */ e.jsx(
      jt,
      {
        filters: s,
        knownMembers: f,
        knownPosts: p,
        onFiltersChange: r
      }
    ) }),
    /* @__PURE__ */ e.jsx(dt, { children: j ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(U, { size: "lg" }) }) : l ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(S, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : o != null && o.comments.length ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        Ot,
        {
          fetchNextPage: m,
          hasNextPage: x,
          isFetchingNextPage: d,
          isLoading: c && !d,
          items: (o == null ? void 0 : o.comments) ?? [],
          totalItems: ((v = (g = o == null ? void 0 : o.meta) == null ? void 0 : g.pagination) == null ? void 0 : v.total) ?? 0,
          onAddFilter: i
        }
      ),
      n && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ e.jsx(S, { variant: "outline", onClick: () => a({ replace: !1 }), children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      Ie,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ e.jsx(Le, {})
      }
    ) }) })
  ] });
};
export {
  ar as default
};
//# sourceMappingURL=comments-C0ntS6jH.mjs.map
