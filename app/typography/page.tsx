// app/typography-modern/page.tsx
import {
  Inter,
  Manrope,
  Plus_Jakarta_Sans,
  DM_Sans,
  Outfit,
  Work_Sans,
  Urbanist,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plusjakarta" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

type Pair = {
  id: string;
  name: string;
  headingVar: string;
  bodyVar: string;
  notes: string;
};

const OPTIONS: Pair[] = [
  { id: "M1", name: "Inter / Inter", headingVar: "--font-inter", bodyVar: "--font-inter",
    notes: "Neutral, clean, safe default. Great metrics & legibility." },
  { id: "M2", name: "Manrope / Inter", headingVar: "--font-manrope", bodyVar: "--font-inter",
    notes: "Slightly friendlier headings; professional body." },
  { id: "M3", name: "Plus Jakarta Sans / Inter", headingVar: "--font-plusjakarta", bodyVar: "--font-inter",
    notes: "Crisp, polished headlines; enterprise feel." },
  { id: "M4", name: "DM Sans / Inter", headingVar: "--font-dmsans", bodyVar: "--font-inter",
    notes: "Rounded but not cute; modern product vibe." },
  { id: "M5", name: "Outfit / Inter", headingVar: "--font-outfit", bodyVar: "--font-inter",
    notes: "Minimalist headings; pairs well with data-heavy UI." },
  { id: "M6", name: "Work Sans / Inter", headingVar: "--font-worksans", bodyVar: "--font-inter",
    notes: "Workhorse headings; solid readability at small sizes." },
  { id: "M7", name: "Urbanist / Inter", headingVar: "--font-urbanist", bodyVar: "--font-inter",
    notes: "Sleek headings; good for dashboards & hero copy." },
];

function UISample({ headingVar, bodyVar }: { headingVar: string; bodyVar: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ backgroundColor: "var(--surface)", color: "var(--text)", borderColor: "var(--border)" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-2 text-xs"
        style={{ backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="font-semibold" style={{ fontFamily: `var(${headingVar})` }}>Brand</div>
        <div className="flex items-center gap-3" style={{ fontFamily: `var(${bodyVar})` }}>
          <span className="opacity-80">Docs</span>
          <span className="opacity-80">Blog</span>
          <button className="rounded px-2 py-1 text-xs"
                  style={{ backgroundColor: "var(--primary)", color: "#0B0F19" }}>
            Get Started
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold mb-2"
            style={{ fontFamily: `var(${headingVar})`, color: "var(--text)" }}>
          Headline preview — numbers 12,345 look like this
        </h3>
        <p className="text-xs md:text-sm opacity-80" style={{ fontFamily: `var(${bodyVar})` }}>
          Body text preview for dashboards, notes, and explanations. Check rhythm, x-height, and contrast.
        </p>

        {/* Card */}
        <div className="mt-4 rounded-lg border p-4"
             style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
          <div className="text-sm font-medium mb-2" style={{ fontFamily: `var(${headingVar})` }}>
            Card title
          </div>
          <p className="text-xs opacity-80" style={{ fontFamily: `var(${bodyVar})` }}>
            Secondary text sample. Verify hierarchy and readability.
          </p>

          {/* Buttons */}
          <div className="mt-3 flex items-center gap-2">
            <button className="rounded px-3 py-1.5 text-xs font-medium"
                    style={{ backgroundColor: "var(--primary)", color: "#0B0F19", fontFamily: `var(${bodyVar})` }}>
              Primary
            </button>
            <button className="rounded px-3 py-1.5 text-xs font-medium border"
                    style={{ borderColor: "var(--border)", color: "var(--text)", backgroundColor: "transparent", fontFamily: `var(${bodyVar})` }}>
              Secondary
            </button>
          </div>

          {/* Numbers & code */}
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded border p-3 text-sm"
                 style={{ borderColor: "var(--border)", fontFamily: `var(${headingVar})` }}>
              7.8% <span className="opacity-70 text-xs" style={{ fontFamily: `var(${bodyVar})` }}>conversion</span>
            </div>
            <pre className="rounded border p-3 text-xs overflow-auto"
                 style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)", fontFamily: `var(${bodyVar})` }}>
{`SELECT sku, sales, margin
FROM facts
WHERE month >= '2025-01';`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TypographyModernPage() {
  return (
    <div className={[
      inter.variable,
      manrope.variable,
      plusJakarta.variable,
      dmSans.variable,
      outfit.variable,
      workSans.variable,
      urbanist.variable,
    ].join(" ")}>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-6">Modern, clean font pair previews</h1>
          <p className="text-sm opacity-80 mb-6">Toggle your dark/light theme to see both palettes applied.</p>

          <div className="grid gap-6 md:grid-cols-2">
            {OPTIONS.map((p) => (
              <div key={p.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold" style={{ fontFamily: `var(${p.headingVar})` }}>
                    {p.id}. {p.name}
                  </h2>
                </div>
                <div className="text-xs text-slate-400" style={{ fontFamily: `var(${p.bodyVar})` }}>
                  {p.notes}
                </div>
                <UISample headingVar={p.headingVar} bodyVar={p.bodyVar} />
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs opacity-70">
            Pick your favorite 1–2 options (e.g., M3 and M2). I’ll lock them into the theme with a proper type scale.
          </p>
        </div>
      </div>
    </div>
  );
}
