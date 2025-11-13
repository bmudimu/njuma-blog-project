// components/layout/SiteHeader.tsx

"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import MainNav from "../nav/MainNav";
import TopBar from "../nav/TopBar";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-400 border-b border-[var(--border)] bg-[color:var(--surface)]/85 backdrop-blur ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <TopBar />
      <Container className="py-3">
        <MainNav />
      </Container>
    </header>
  );
}
