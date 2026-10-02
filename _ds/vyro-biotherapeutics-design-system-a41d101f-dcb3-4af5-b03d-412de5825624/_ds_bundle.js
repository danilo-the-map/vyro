/* @ds-bundle: {"format":4,"namespace":"VyroBiotherapeuticsDesignSystem_a41d10","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"080e4abd339d","components/content/Card.jsx":"56017b882c3a","components/content/NewsCard.jsx":"ce32aee2913e","components/content/StatCard.jsx":"1b23de2318db","components/core/Button.jsx":"9d9ea63f2721","components/core/Eyebrow.jsx":"76d74f7857f0","components/core/Tag.jsx":"f262226bbd2a","slides/PipelineSlide.jsx":"76e02d776108","slides/QuoteSlide.jsx":"516eece93c42","slides/StatSlide.jsx":"ffb29ea06d64","slides/TitleSlide.jsx":"f431c0f1ee1f","ui_kits/website/AboutScreen.jsx":"47dcb67160b3","ui_kits/website/App.jsx":"cd3fbaef820b","ui_kits/website/Footer.jsx":"85b44dd82c70","ui_kits/website/HomeScreen.jsx":"0fc32fd72fda","ui_kits/website/NavBar.jsx":"26746c6ebce7","ui_kits/website/PressScreen.jsx":"0b1b93e14db6","ui_kits/website/TechnologyScreen.jsx":"9dde60b1a003"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VyroBiotherapeuticsDesignSystem_a41d10 = window.VyroBiotherapeuticsDesignSystem_a41d10 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  full: {
    light: "/assets/logos/vyro-horizontal.png",
    dark: "/assets/logos/vyro-horizontal-white.png"
  },
  stacked: {
    light: "/assets/logos/vyro-stacked.png",
    dark: "/assets/logos/vyro-stacked-white.png"
  },
  wordmark: {
    light: "/assets/logos/vyro-wordmark.png",
    dark: "/assets/logos/vyro-wordmark-white.png"
  }
};

/**
 * Renders the official Vyro logo. Picks the colour lockup on light grounds and
 * the white/negative lockup on dark grounds, in horizontal / stacked / wordmark
 * variants. All are transparent PNGs derived from the supplied brand artwork.
 */
function Logo({
  height = 44,
  variant = "full",
  ground = "light",
  style = {},
  ...rest
}) {
  const key = variant === "full" ? "full" : variant === "stacked" ? "stacked" : "wordmark";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: SRC[key][ground === "dark" ? "dark" : "light"],
    alt: "Vyro Biotherapeutics",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = "elevated",
  padding = "var(--space-6)",
  style = {},
  ...rest
}) {
  const variants = {
    elevated: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    brand: {
      background: "var(--surface-brand)",
      border: "1px solid var(--indigo-700)",
      boxShadow: "var(--shadow-brand)",
      color: "var(--text-on-brand)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-card)",
      padding,
      boxSizing: "border-box",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  source,
  tone = "brand",
  style = {},
  ...rest
}) {
  const accents = {
    brand: "var(--indigo-700)",
    red: "var(--signal-red)",
    teal: "var(--signal-teal)",
    amber: "var(--signal-amber)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-sm)",
      padding: "var(--space-6)",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: "var(--text-4xl)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      color: accents[tone]
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)"
    }
  }, label), source && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "4px",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.02em",
      color: "var(--text-muted)"
    }
  }, source));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 18px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "13px 28px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "17px 40px",
      fontSize: "var(--text-md)"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid var(--brand)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--brand)",
      border: "1px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand)",
      border: "1px solid transparent"
    },
    inverse: {
      background: "var(--white)",
      color: "var(--indigo-800)",
      border: "1px solid var(--white)"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.01em",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? "100%" : "auto",
      transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      textDecoration: "none",
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(0)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  color = "var(--brand)",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--eyebrow-weight)",
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = "brand",
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      background: "var(--indigo-50)",
      color: "var(--indigo-700)"
    },
    neutral: {
      background: "var(--grey-100)",
      color: "var(--grey-700)"
    },
    solid: {
      background: "var(--brand)",
      color: "var(--white)"
    },
    red: {
      background: "var(--signal-red-soft)",
      color: "var(--signal-red)"
    },
    teal: {
      background: "var(--signal-teal-soft)",
      color: "#0e7c78"
    },
    amber: {
      background: "var(--signal-amber-soft)",
      color: "#a56b12"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.02em",
      lineHeight: 1,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NewsCard({
  title,
  category,
  date,
  image,
  href = "#",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      textDecoration: "none",
      color: "inherit",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.transform = "translateY(-4px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      background: image ? `center / cover no-repeat url(${image})` : "linear-gradient(135deg, var(--indigo-700), var(--indigo-500))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "brand"
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-strong)"
    }
  }, title), date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, date)));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsCard.jsx", error: String((e && e.message) || e) }); }

// slides/PipelineSlide.jsx
try { (() => {
const {
  Tag: PTag,
  Eyebrow: PPEyebrow
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function PipelineSlide() {
  const rows = [{
    p: "VYR-001",
    ind: "Glioblastoma (adult CNS)",
    phase: "Preclinical",
    pct: 55
  }, {
    p: "VYR-002",
    ind: "Pediatric CNS tumors",
    phase: "Discovery",
    pct: 32
  }, {
    p: "ZIKV platform",
    ind: "Oncolytic virus engineering",
    phase: "Research",
    pct: 78
  }];
  const stages = ["Research", "Discovery", "Preclinical", "Phase I", "Phase II"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: "#fff",
      padding: 80,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PPEyebrow, null, "Pipeline"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 52,
      margin: "16px 0 36px",
      letterSpacing: "-0.02em"
    }
  }, "Our lead programs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      gap: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${stages.length},1fr)`,
      marginBottom: 14
    }
  }, stages.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, s))), rows.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.p
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: 16,
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 18,
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--ink)"
    }
  }, r.p), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, r.ind)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      borderRadius: 999,
      background: "var(--grey-100)",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: r.pct + "%",
      borderRadius: 999,
      background: "linear-gradient(90deg, var(--indigo-600), var(--signal-teal))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: `calc(${r.pct}% - 6px)`,
      top: -30
    }
  }, /*#__PURE__*/React.createElement(PTag, {
    tone: "brand"
  }, r.phase))))))));
}
window.PipelineSlide = PipelineSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/PipelineSlide.jsx", error: String((e && e.message) || e) }); }

// slides/QuoteSlide.jsx
try { (() => {
function QuoteSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: "var(--indigo-800)",
      color: "#fff",
      padding: 96,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 68,
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      maxWidth: "22ch"
    }
  }, "So just get infected with the Zika virus to treat these tumors? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--signal-red)"
    }
  }, "No.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      color: "var(--indigo-200)",
      maxWidth: "60ch",
      marginTop: 32
    }
  }, "Vyro uses a proprietary Zika virus, engineered so its reformulated RNA attacks only cancer cells \u2014 a safe, manufacturable oncolytic platform."));
}
window.QuoteSlide = QuoteSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/QuoteSlide.jsx", error: String((e && e.message) || e) }); }

// slides/StatSlide.jsx
try { (() => {
const {
  StatCard: SStatCard,
  Eyebrow: SEyebrow
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function StatSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: "#fff",
      padding: 80,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SEyebrow, null, "A huge unmet medical need"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 52,
      margin: "16px 0 40px",
      maxWidth: "20ch",
      letterSpacing: "-0.02em"
    }
  }, "Malignant CNS tumors remain incurable."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SStatCard, {
    value: "~26,000",
    label: "New malignant CNS tumor cases in the US in 2022",
    source: "Source: CBTRUS"
  }), /*#__PURE__*/React.createElement(SStatCard, {
    value: "76%",
    label: "Mortality rate of malignant CNS tumors",
    source: "Source: NCI",
    tone: "red"
  }), /*#__PURE__*/React.createElement(SStatCard, {
    value: "~5,000",
    label: "Pediatric cases diagnosed in the US in 2022",
    source: "Source: CBTRUS",
    tone: "teal"
  })));
}
window.StatSlide = StatSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/StatSlide.jsx", error: String((e && e.message) || e) }); }

// slides/TitleSlide.jsx
try { (() => {
const {
  Logo
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function TitleSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: "radial-gradient(120% 120% at 15% 10%, var(--indigo-700), var(--indigo-900) 65%, #0c0326)",
      color: "#fff",
      padding: 80,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    ground: "dark",
    height: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--signal-teal)"
    }
  }, "Investor overview \xB7 2024"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 84,
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      margin: "18px 0 0",
      maxWidth: "16ch"
    }
  }, "From enemy to hero."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      color: "var(--indigo-200)",
      maxWidth: "44ch",
      marginTop: 20
    }
  }, "Turning the Zika virus into a revolutionary treatment for CNS cancers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--indigo-300)"
    }
  }, "vyrobio.com \xB7 info@vyrobio.com"));
}
window.TitleSlide = TitleSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/TitleSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  Eyebrow: AEyebrow,
  StatCard,
  Button: AButton
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function AboutScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px clamp(20px,5vw,64px) 64px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(AEyebrow, null, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(34px,5vw,61px)",
      margin: "14px 0 18px",
      lineHeight: 1.03
    }
  }, "The enemy", /*#__PURE__*/React.createElement("br", null), "who became a hero."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      maxWidth: "60ch"
    }
  }, "Vyro is a biotechnology company focused on developing oncolytic viruses \u2014 cancer-killing viruses to attack central nervous system tumors in adults and children."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      maxWidth: "60ch",
      color: "var(--text-muted)"
    }
  }, "Founded by scientists from the Human Genome and Stem Cell Research Center (HUG-CELL) of the University of S\xE3o Paulo."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad) clamp(20px,5vw,64px)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(AEyebrow, null, "A huge unmet medical need"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(26px,3vw,39px)",
      margin: "12px 0 28px",
      maxWidth: "20ch"
    }
  }, "Malignant Central Nervous System tumors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "~26,000",
    label: "New malignant CNS tumor cases in the US in 2022",
    source: "Source: CBTRUS"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "76%",
    label: "Mortality rate of malignant CNS tumors",
    source: "Source: NCI",
    tone: "red"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "~5,000",
    label: "Pediatric cases diagnosed in the US in 2022",
    source: "Source: CBTRUS",
    tone: "teal"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      maxWidth: "62ch",
      marginTop: 24
    }
  }, "Malignant CNS tumors have overtaken leukemia as the deadliest form of childhood cancer. Even so, no drug has ever been developed and approved specifically for them."), /*#__PURE__*/React.createElement(AButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("Technology"),
    style: {
      marginTop: 8
    }
  }, "But now there is Vyro."))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  useState
} = React;
const {
  Button: AppButton
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function ContactModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      background: "rgba(12,3,38,0.6)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(480px,100%)",
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      padding: 36,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--brand)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      margin: "10px 0 6px"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Sign up for our newsletter to receive more news, or reach the team directly."), /*#__PURE__*/React.createElement("input", {
    placeholder: "your@email.com",
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "13px 16px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      fontSize: 15,
      fontFamily: "var(--font-body)",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement(AppButton, {
    variant: "primary",
    fullWidth: true,
    onClick: onClose
  }, "Subscribe"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 16,
      marginBottom: 0
    }
  }, "info@vyrobio.com")));
}
function App() {
  const [screen, setScreen] = useState("Home");
  const [contact, setContact] = useState(false);
  const go = s => {
    setScreen(s);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    current: screen,
    onNavigate: go,
    onContact: () => setContact(true)
  }), screen === "Home" && /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: go
  }), screen === "About" && /*#__PURE__*/React.createElement(AboutScreen, {
    onNavigate: go
  }), screen === "Technology" && /*#__PURE__*/React.createElement(TechnologyScreen, null), screen === "Press" && /*#__PURE__*/React.createElement(PressScreen, null), /*#__PURE__*/React.createElement(Footer, {
    onContact: () => setContact(true)
  }), /*#__PURE__*/React.createElement(ContactModal, {
    open: contact,
    onClose: () => setContact(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer({
  onContact
}) {
  const {
    Logo
  } = window.VyroBiotherapeuticsDesignSystem_a41d10;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--indigo-900)",
      color: "var(--indigo-200)",
      padding: "56px clamp(20px,5vw,64px) 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 32,
      justifyContent: "space-between",
      alignItems: "flex-start",
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "stacked",
    ground: "dark",
    height: 96
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--indigo-300)"
    }
  }, "A biotechnology company creating revolutionary health treatments based on genetically engineered viruses.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--indigo-400)",
      marginBottom: 12
    }
  }, "Company"), ["About", "Technology", "Press"].map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontSize: 14,
      marginBottom: 8,
      color: "#fff",
      cursor: "pointer"
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--indigo-400)",
      marginBottom: 12
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    onClick: onContact,
    style: {
      fontSize: 14,
      marginBottom: 8,
      color: "#fff",
      cursor: "pointer"
    }
  }, "info@vyrobio.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--indigo-300)"
    }
  }, "Instagram \xB7 YouTube \xB7 LinkedIn")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "36px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 12,
      color: "var(--indigo-400)"
    }
  }, "\xA9 2024 Vyro Biotherapeutics. All rights reserved."));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button: HButton,
  Eyebrow,
  Tag,
  NewsCard
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function HomeScreen({
  onNavigate
}) {
  const news = [{
    category: "Our history",
    title: "Do you want to know more about Vyro?",
    date: "Jul 2024"
  }, {
    category: "Press",
    title: "Rede Bandeirantes visits Vyro's lab",
    date: "Jul 2024"
  }, {
    category: "Award",
    title: "Vyro is selected for CNPEM's PACE program",
    date: "Jun 2024"
  }, {
    category: "Regulatory",
    title: "Vyro is selected by Anvisa for regulatory monitoring",
    date: "May 2024"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 620,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "120px clamp(20px,5vw,64px)",
      background: "radial-gradient(120% 120% at 15% 10%, var(--indigo-700) 0%, var(--indigo-900) 60%, #0c0326 100%)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.16,
      background: "radial-gradient(closest-side, var(--signal-teal), transparent 70%)",
      width: 520,
      height: 520,
      right: -80,
      top: -60,
      left: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(36px,5.4vw,68px)",
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: 0
    }
  }, "We are a biotechnology company that creates revolutionary health treatments based on genetically engineered viruses."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNavigate("Technology")
  }, "Learn about our technology"), /*#__PURE__*/React.createElement(HButton, {
    variant: "ghost",
    size: "lg",
    onClick: () => onNavigate("About"),
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.4)"
    }
  }, "About us")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad) clamp(20px,5vw,64px)",
      background: "#fff",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(30px,4vw,49px)",
      margin: "12px 0 16px"
    }
  }, "From enemy", /*#__PURE__*/React.createElement("br", null), "to hero."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: "48ch"
    }
  }, "Discover how Vyro is transforming the scourge of the Zika virus into revolutionary treatments against cancer."), /*#__PURE__*/React.createElement(HButton, {
    variant: "primary",
    size: "md",
    onClick: () => onNavigate("Technology"),
    style: {
      marginTop: 10
    }
  }, "Watch the video")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/10",
      borderRadius: "var(--radius-lg)",
      background: "linear-gradient(135deg, var(--indigo-700), var(--indigo-500))",
      boxShadow: "var(--shadow-brand)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 66,
      height: 66,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      borderLeft: "20px solid var(--indigo-700)",
      borderTop: "13px solid transparent",
      borderBottom: "13px solid transparent",
      marginLeft: 5
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad) clamp(20px,5vw,64px)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Pipeline"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(26px,3vw,39px)",
      margin: "12px 0 28px"
    }
  }, "Our lead programs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, [{
    p: "VYR-001 · Glioblastoma (adult CNS)",
    phase: "Preclinical",
    pct: 55
  }, {
    p: "VYR-002 · Pediatric CNS tumors",
    phase: "Discovery",
    pct: 32
  }, {
    p: "ZIKV oncolytic platform",
    phase: "Research",
    pct: 78
  }].map(row => /*#__PURE__*/React.createElement("div", {
    key: row.p,
    style: {
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: "18px 22px",
      display: "grid",
      gridTemplateColumns: "1.4fr auto 2fr",
      gap: 20,
      alignItems: "center",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, row.p), /*#__PURE__*/React.createElement(Tag, {
    tone: "brand"
  }, row.phase), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: "var(--grey-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: row.pct + "%",
      height: "100%",
      borderRadius: 999,
      background: "linear-gradient(90deg, var(--indigo-500), var(--signal-teal))"
    }
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad) clamp(20px,5vw,64px)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Press"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(26px,3vw,39px)",
      margin: "12px 0 0"
    }
  }, "In the news")), /*#__PURE__*/React.createElement(HButton, {
    variant: "secondary",
    size: "sm",
    onClick: () => onNavigate("Press")
  }, "See all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
      gap: 20
    }
  }, news.map((n, i) => /*#__PURE__*/React.createElement(NewsCard, _extends({
    key: i
  }, n)))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NavBar.jsx
try { (() => {
const {
  useState
} = React;
const {
  Button
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
const {
  Logo
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function NavBar({
  current,
  onNavigate,
  onContact
}) {
  const links = ["Home", "About", "Technology", "Press"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px clamp(20px,5vw,64px)",
      background: "rgba(20,6,56,0.72)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("Home"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    ground: "dark",
    height: 38
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(14px,2.4vw,34px)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate(l),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 500,
      color: current === l ? "#fff" : "var(--indigo-200)",
      borderBottom: current === l ? "2px solid var(--signal-teal)" : "2px solid transparent",
      paddingBottom: 3,
      transition: "color .2s"
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      color: "var(--indigo-300)",
      fontSize: 13,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "EN"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    }
  }, "PT")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    onClick: onContact
  }, "Contact")));
}
window.NavBar = NavBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PressScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow: PEyebrow,
  NewsCard: PNewsCard,
  Tag: PTag
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function PressScreen() {
  const cats = ["All", "Press", "Events", "Science", "Awards"];
  const items = [{
    category: "Science",
    title: "Meet Vyro: Zika virus, the enemy that turned hero",
    date: "Feb 2024"
  }, {
    category: "Press",
    title: "Vyro's pioneering study is featured in Veja Magazine",
    date: "Feb 2024"
  }, {
    category: "Awards",
    title: "Vyro wins the Deep Techs category at the innovation summit",
    date: "Mar 2024"
  }, {
    category: "Events",
    title: "Vyro represents Brazil among the top 51 startups at BIO",
    date: "May 2024"
  }, {
    category: "Science",
    title: "Glossary — Oncolytic viruses",
    date: "Apr 2024"
  }, {
    category: "Press",
    title: "Vyro is featured on TV Cultura",
    date: "Feb 2024"
  }, {
    category: "Events",
    title: "#TBT — BIO2024 International Convention",
    date: "Jul 2024"
  }, {
    category: "Awards",
    title: "Vyro receives the Inovo Award",
    date: "May 2024"
  }];
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? items : items.filter(i => i.category === active);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px clamp(20px,5vw,64px) 40px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(PEyebrow, null, "Press"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(34px,5vw,61px)",
      margin: "14px 0 24px"
    }
  }, "Newsroom"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    onClick: () => setActive(c),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(PTag, {
    tone: active === c ? "solid" : "neutral"
  }, c)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 clamp(20px,5vw,64px) var(--section-pad)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
      gap: 20
    }
  }, shown.map((n, i) => /*#__PURE__*/React.createElement(PNewsCard, _extends({
    key: i
  }, n))))));
}
window.PressScreen = PressScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PressScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TechnologyScreen.jsx
try { (() => {
const {
  Eyebrow: TEyebrow
} = window.VyroBiotherapeuticsDesignSystem_a41d10;
function TechnologyScreen() {
  const steps = [{
    n: "01",
    t: "ZIKV crosses the blood-brain barrier",
    d: "The engineered Zika virus reaches the central nervous system where most therapies cannot."
  }, {
    n: "02",
    t: "ZIKV selectively targets cancer stem cells",
    d: "It infects neural stem-like cells present in malignant CNS tumors — sparing healthy neurons."
  }, {
    n: "03",
    t: "ZIKV infects cancer stem cells in tumorspheres",
    d: "Oncolysis destroys the tumor's self-renewing core, the source of recurrence."
  }, {
    n: "04",
    t: "Tropism to the tumor border activates an immune response",
    d: "Infection flags tumor cells the immune system could not otherwise identify, triggering an anti-tumoral response."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px clamp(20px,5vw,64px) 72px",
      background: "radial-gradient(120% 120% at 80% 0%, var(--indigo-700), var(--indigo-900))",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement(TEyebrow, {
    color: "var(--signal-teal)"
  }, "Technology"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: "clamp(34px,5vw,61px)",
      margin: "14px 0 18px",
      lineHeight: 1.03
    }
  }, "The right virus", /*#__PURE__*/React.createElement("br", null), "in the right place."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      maxWidth: "56ch",
      color: "var(--indigo-200)"
    }
  }, "How and why the Zika virus helps treat malignant Central Nervous System tumors \u2014 a proprietary, genetically engineered oncolytic platform."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad) clamp(20px,5vw,64px)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(24px,3vw,34px)",
      maxWidth: "22ch"
    }
  }, "So just get infected with the Zika virus to treat these tumors? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--signal-red)"
    }
  }, "No.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: "62ch",
      marginTop: 12
    }
  }, "Vyro's technology uses a proprietary Zika virus, modified by genetic engineering, that keeps its oncolytic abilities while a reformulated RNA technology makes it attack only cancer cells \u2014 producing a safe, efficient virus manufacturable at the scale of new medicines."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 clamp(20px,5vw,64px) var(--section-pad)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      display: "grid",
      gap: 18
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 24,
      alignItems: "start",
      padding: "26px 28px",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-subtle)",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: "var(--indigo-300)",
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: "2px 0 6px",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "var(--indigo-700)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16
    }
  }, s.d)))))));
}
window.TechnologyScreen = TechnologyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TechnologyScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

})();
