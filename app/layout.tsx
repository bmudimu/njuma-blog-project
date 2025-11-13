// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

import { Inter, Urbanist } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-urbanist" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Do Data",
  description: "Personal data, analytics, and growth experiments.",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${urbanist.variable}`}> {/* add $mono.variable if needed */}
//       <body className="min-h-screen bg-slate-950 text-slate-100 font-body bg-[var(--bg)] text-[var(--text)]">
//         <div className="flex min-h-screen flex-col">
//           {/* Top bar */}  
//             <div className="flex max-full items-center justify-between px-4 py-1 bg-[#eee]">
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link href="#" className="gap-2 hover:text-sky-400 text-[#666666]"><span className=""></span> <span className="hidden md:inline">znjumacreations@gmail.com</span></Link>
//                 <Link href="#" className="gap-2 hover:text-sky-400 text-[#666666]"><span className=""></span> <span className="hidden md:inline">+27 82 562 8797</span></Link>
//               </div>
//               <div className="flex gap-4 text-sm">
//                 <Link href="#" className="gap-2 hover:text-sky-400 text-[#666666]"><span className="icon-twitter"></span> <span className="hidden md:inline">Twitter</span></Link>
//                 <Link href="#" className="gap-2 hover:text-sky-400 text-[#666666]"><span className="icon-facebook"></span> <span className="hidden md:inline">Facebook</span></Link>
//               </div>
//             </div>
      
//           {/* Top nav */}
//           <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur py-4">
//             <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
//               <Link href="/" className="text-sky-500 font-semibold tracking-tight text-2xl uppercase">
//                 DoData
//               </Link>
//               <nav className="flex gap-6 text-lg">
//                 <Link href="/about" className="text-white hover:text-sky-400">
//                   About
//                 </Link>
//                 <Link href="/projects" className="text-white hover:text-sky-400">
//                   Projects
//                 </Link>
//                 <Link href="/blog" className="text-white hover:text-sky-400">
//                   Blog
//                 </Link>
//                 <Link href="/lab" className="text-white hover:text-sky-400">
//                   Lab
//                 </Link>
//                 <Link href="/pallete" className="text-white hover:text-sky-400">
//                   Pallete
//                 </Link>
//                 <Link href="/typography" className="text-white hover:text-sky-400">
//                   Typography
//                 </Link>
//                 <Link href="/typofonts" className="text-white hover:text-sky-400">
//                   Typoground
//                 </Link>
//               </nav>
//               <ThemeToggle />
//             </div>
//           </header>

//           {/* Page content */}
//           <main className="mx-auto flex w-full max-w-5xl flex-1 px-4 py-8">
//             {children}
//           </main>

//           {/* Footer */}
//           <footer className="border-t border-slate-800 bg-slate-900/80">
//             <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-400">
//               <span>© {new Date().getFullYear()} Data &amp; Growth Lab</span>
//               <span>Built with Next.js &amp; Vercel</span>
//             </div>
//           </footer>
//         </div>
//       </body>
//     </html>
//   );
// }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--text)] font-body">
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}