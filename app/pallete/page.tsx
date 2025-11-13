// app/palette/page.tsx
type Palette = {
  id: string;
  name: string;
  colors: {
    bg: string;
    surface: string;
    border: string;
    text: string;
    primary: string;
    primary700: string;
    accent: string;
    success: string;
    warning: string;
    danger: string;
    neutral: string;
  };
};

const OPTIONS: Palette[] = [
  {
    id: "A",
    name: "Dark Slate + Sky",
    colors: {
      bg: "#0B1220",
      surface: "#111827",
      border: "#1F2937",
      text: "#E5E7EB",
      primary: "#38BDF8",
      primary700: "#0369A1",
      accent: "#F59E0B",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
      neutral: "#94A3B8",
    },
  },
  {
    id: "B",
    name: "Charcoal + Electric Blue",
    colors: {
      bg: "#0A0A0B",
      surface: "#141518",
      border: "#23262B",
      text: "#F2F4F8",
      primary: "#3B82F6",
      primary700: "#1D4ED8",
      accent: "#A78BFA",
      success: "#22C55E",
      warning: "#EAB308",
      danger: "#F43F5E",
      neutral: "#9CA3AF",
    },
  },
  {
    id: "C",
    name: "Deep Indigo + Lime",
    colors: {
      bg: "#0B1020",
      surface: "#111436",
      border: "#20244A",
      text: "#E6E9F5",
      primary: "#6366F1",
      primary700: "#4338CA",
      accent: "#84CC16",
      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      neutral: "#A5B4FC",
    },
  },
  {
    id: "D",
    name: "Warm Light + Teal",
    colors: {
      bg: "#F8FAFC",
      surface: "#FFFFFF",
      border: "#E5E7EB",
      text: "#0F172A",
      primary: "#14B8A6",
      primary700: "#0F766E",
      accent: "#FB923C",
      success: "#16A34A",
      warning: "#F59E0B",
      danger: "#DC2626",
      neutral: "#475569",
    },
  },
];

function Swatch({ label, hex }: { label: string; hex: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-6 w-6 rounded border border-white/10" style={{ backgroundColor: hex }} />
      <div className="text-xs text-slate-300">
        <span className="font-medium">{label}</span> <span className="text-slate-400">{hex}</span>
      </div>
    </div>
  );
}

function UISample({ p }: { p: Palette }) {
  const c = p.colors;
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ backgroundColor: c.bg, color: c.text, borderColor: c.border }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 text-xs" style={{ backgroundColor: c.surface }}>
        <div className="font-semibold" style={{ color: c.text }}>Brand</div>
        <div className="flex items-center gap-3">
          <span className="opacity-80">Docs</span>
          <span className="opacity-80">Blog</span>
          <button
            className="rounded px-2 py-1 text-xs"
            style={{ backgroundColor: c.primary, color: "#0B0F19" }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: c.text }}>
          Headline on {p.name}
        </h3>
        <p className="text-xs md:text-sm opacity-80">
          Body copy preview to test contrast on the background and surface colors.
        </p>

        {/* Card */}
        <div
          className="mt-4 rounded-lg border p-4"
          style={{ backgroundColor: c.surface, borderColor: c.border }}
        >
          <div className="text-sm font-medium mb-2" style={{ color: c.text }}>Card title</div>
          <p className="text-xs opacity-80">Short description lives here.</p>

          <div className="mt-3 flex items-center gap-2">
            <button
              className="rounded px-3 py-1.5 text-xs font-medium"
              style={{ backgroundColor: c.primary, color: "#0B0F19" }}
            >
              Primary
            </button>
            <button
              className="rounded px-3 py-1.5 text-xs font-medium border"
              style={{ borderColor: c.border, color: c.text, backgroundColor: "transparent" }}
            >
              Secondary
            </button>
            <span
              className="rounded px-2 py-1 text-[10px] font-semibold"
              style={{ backgroundColor: c.accent, color: "#0B0F19" }}
            >
              Accent
            </span>
          </div>

          {/* Status chips */}
          <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
            <span className="rounded px-2 py-1 font-semibold" style={{ backgroundColor: c.success, color: "#062b13" }}>
              Success
            </span>
            <span className="rounded px-2 py-1 font-semibold" style={{ backgroundColor: c.warning, color: "#2b1a00" }}>
              Warning
            </span>
            <span className="rounded px-2 py-1 font-semibold" style={{ backgroundColor: c.danger, color: "#2b0005" }}>
              Danger
            </span>
            <span
              className="rounded px-2 py-1 font-semibold"
              style={{ backgroundColor: c.neutral, color: "#0b0f19" }}
            >
              Neutral
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PalettePage() {
  return (
    <>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold tracking-tight mb-6">Color theme previews</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {OPTIONS.map((p) => (
            <div key={p.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{p.id}. {p.name}</h2>
              </div>

              {/* Swatches */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <Swatch label="bg" hex={p.colors.bg} />
                <Swatch label="surface" hex={p.colors.surface} />
                <Swatch label="border" hex={p.colors.border} />
                <Swatch label="text" hex={p.colors.text} />
                <Swatch label="primary" hex={p.colors.primary} />
                <Swatch label="primary-700" hex={p.colors.primary700} />
                <Swatch label="accent" hex={p.colors.accent} />
                <Swatch label="success" hex={p.colors.success} />
                <Swatch label="warning" hex={p.colors.warning} />
                <Swatch label="danger" hex={p.colors.danger} />
                <Swatch label="neutral" hex={p.colors.neutral} />
              </div>

              {/* UI sample */}
              <UISample p={p} />
            </div>
          ))}
        </div>

      </div>
    </div>
        <section className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Hello</h1>

        <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="text-sm opacity-80">Card content</p>

          <div className="mt-4 flex gap-3">
            <button className="rounded px-4 py-2 font-medium text-[color:#0B0F19] bg-[var(--primary)]">
              Primary
            </button>
            <button className="rounded px-4 py-2 font-medium border border-[var(--border)] text-[var(--text)]">
              Secondary
            </button>
            <span className="rounded px-2 py-1 text-xs font-semibold bg-[var(--accent)] text-[color:#0B0F19]">
              Accent
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );

  
}
