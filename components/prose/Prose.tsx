// components/prose/Prose.tsx
import { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <article
      className={[
        "prose max-w-none font-body",
        // base text
        "text-[var(--text)]",
        // paragraphs
        "[&>p]:leading-relaxed [&>p]:mb-4",
        // headings
        "[&>h1]:font-heading [&>h1]:text-h1 [&>h1]:font-semibold [&>h1]:tracking-tight [&>h1]:mb-4",
        "[&>h2]:font-heading [&>h2]:text-h2 [&>h2]:font-semibold [&>h2]:mt-10 [&>h2]:mb-3",
        "[&>h3]:font-heading [&>h3]:text-h3 [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-2",
        "[&>h4]:font-heading [&>h4]:text-h4 [&>h4]:font-semibold [&>h4]:mt-6 [&>h4]:mb-2",
        // lists
        "[&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-1.5",
        // blockquote
        "[&>blockquote]:border-l-4 [&>blockquote]:border-[var(--border)] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-400",
        // code
        "[&>code]:rounded [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-xs [&>code]:bg-[var(--bg)]",
        // pre/code block
        "[&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-auto [&>pre]:text-xs [&>pre]:bg-[var(--bg)] [&>pre]:border [&>pre]:border-[var(--border)]",
        // hr
        "[&>hr]:my-8 [&>hr]:border-[var(--border)]",
        // table
        "[&>table]:w-full [&>table]:text-sm [&>table]:border-separate [&>table]:border-spacing-0",
        "[&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-medium [&>table>thead>tr>th]:px-3 [&>table>thead>tr>th]:py-2",
        "[&>table>tbody>tr>td]:px-3 [&>table>tbody>tr>td]:py-2",
        "[&>table>tbody>tr]:border-t [&>table>tbody>tr]:border-[var(--border)]",
        // images
        "[&>img]:rounded-lg [&>img]:border [&>img]:border-[var(--border)] [&>img]:my-4",
        // links
        "[&>p>a]:text-[var(--primary)] [&>p>a]:underline-offset-4 hover:[&>p>a]:opacity-80",
      ].join(" ")}
    >
      {children}
    </article>
  );
}
