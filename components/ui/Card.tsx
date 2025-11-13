// components/ui/Card.tsx
import { ReactNode } from "react";

type CardProps = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  footer?: ReactNode;
  href?: string;
  hover?: boolean;
  className?: string;
};

export default function Card({
  title,
  subtitle,
  children,
  footer,
  href,
  hover = true,
  className = "",
}: CardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={[
        "block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-[var(--text)]",
        hover && "transition-transform hover:-translate-y-1 hover:shadow-md",
        href && "cursor-pointer no-underline",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {(title || subtitle) && (
        <div className="mb-3">
          {title && <h3 className="font-heading text-h4 font-semibold">{title}</h3>}
          {subtitle && <p className="font-body text-small text-slate-400">{subtitle}</p>}
        </div>
      )}
      {children && <div className="font-body text-body leading-relaxed">{children}</div>}
      {footer && <div className="mt-4 border-t border-[var(--border)] pt-3">{footer}</div>}
    </Wrapper>
  );
}
