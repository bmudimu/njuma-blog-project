// components/mdx/Callout.tsx
import { ReactNode } from "react";

type Props = {
  type?: "info" | "tip" | "warn" | "danger";
  title?: string;
  children: ReactNode;
};

const colors: Record<NonNullable<Props["type"]>, string> = {
  info:   "border-[color:rgb(59_130_246/0.5)] bg-[color:rgb(59_130_246/0.08)]",
  tip:    "border-[color:rgb(34_197_94/0.5)] bg-[color:rgb(34_197_94/0.08)]",
  warn:   "border-[color:rgb(234_179_8/0.5)] bg-[color:rgb(234_179_8/0.08)]",
  danger: "border-[color:rgb(239_68_68/0.5)] bg-[color:rgb(239_68_68/0.08)]",
};

export default function Callout({ type = "info", title, children }: Props) {
  return (
    <div
      className={[
        "my-4 rounded-lg border px-4 py-3 text-sm leading-relaxed",
        "font-body",
        colors[type],
      ].join(" ")}
    >
      {title && (
        <div className="mb-1 font-semibold uppercase tracking-wide text-xs opacity-70">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
