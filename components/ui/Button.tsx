// components/ui/Button.tsx
"use client";

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";

type Variant = "primary" | "secondary" | "subtle" | "ghost" | "danger";
type Size = "sm" | "md" | "lg" | "icon";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  title?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Pick<LinkProps, "href" | "prefetch" | "replace" | "scroll" | "shallow" | "locale"> & {
    as: "link";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-opacity select-none whitespace-nowrap " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] " +
  "disabled:opacity-50 disabled:pointer-events-none";

const sizeMap: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
  icon: "h-10 w-10 p-0",
};

const variantMap: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-[color:#0B0F19)] hover:opacity-90 border border-transparent",
  secondary:
    "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:opacity-90",
  subtle:
    "bg-[color:rgb(0_0_0/0.04)] dark:bg-[color:rgb(255_255_255/0.04)] text-[var(--text)] border border-[color:rgb(0_0_0/0.06)] dark:border-[color:rgb(255_255_255/0.06)] hover:opacity-90",
  ghost:
    "bg-transparent text-[var(--text)] hover:bg-[color:rgb(0_0_0/0.04)] dark:hover:bg-[color:rgb(255_255_255/0.06)] border border-transparent",
  danger:
    "bg-[color:#EF4444] text-white hover:opacity-90 border border-transparent",
};

function cx(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-90" d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
  );
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      as = "button",
      variant = "primary",
      size = "md",
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      className,
      children,
      ...rest
    } = props as any;

    const sizeClass = sizeMap[size as Size];
    const variantClass = variantMap[variant as Variant];

    const classes = cx(base, sizeClass, variantClass, fullWidth && "w-full", className);


    const content = (
      <>
        {/* left icon or spinner */}
        <span className={cx("mr-2 inline-flex", !(leftIcon || loading) && "hidden")}>
          {loading ? <Spinner /> : leftIcon}
        </span>

        {/* label */}
        <span className={cx(loading && "opacity-75")}>{children}</span>

        {/* right icon */}
        <span className={cx("ml-2 inline-flex", !rightIcon && "hidden")}>
          {rightIcon}
        </span>
      </>
    );

    if (as === "link") {
      const { href, ...anchorProps } = rest as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href!}
          className={classes}
          {...anchorProps}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={loading || (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
