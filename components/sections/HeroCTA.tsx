// components/sections/HeroCTA.tsx
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function HeroCTA() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
      <Container className="py-20 text-center">
        {/* Eyebrow */}
        <p className="font-heading text-small text-[var(--primary)] tracking-wide uppercase mb-3">
          Welcome to Data & Growth Lab
        </p>

        {/* Headline */}
        <h1 className="font-heading text-h1 font-semibold tracking-tight mb-4 max-w-3xl mx-auto">
          Turn your data into decisions that actually drive growth.
        </h1>

        {/* Subtext */}
        <p className="font-body text-body text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          I share hands-on analytics, visualization, and automation insights to help
          small businesses and professionals turn numbers into real-world impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" variant="primary">
            Get Started
          </Button>
          <Button size="lg" variant="secondary">
            View Projects
          </Button>
        </div>

        {/* Background gradient flare */}
        <div
          className="absolute inset-x-0 bottom-0 h-[200px] opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%)",
          }}
        ></div>
      </Container>
    </section>
  );
}
