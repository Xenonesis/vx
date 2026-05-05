"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setIsDark(root.classList.contains("dark"));
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-theme-primary/85 backdrop-blur-md border-b border-theme">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative overflow-hidden rounded-md bg-white">
            <Image src="/logo.webp" alt="Vixon Logo" fill className="object-contain p-1" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter uppercase">Vixon</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-bold">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-[var(--accent-color)]" : "hover:text-[var(--accent-color)] transition-colors"}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-theme hover:border-[var(--accent-color)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2" aria-label="Toggle theme">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMenuOpen((v) => !v)} aria-label="Menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="md:hidden border-t border-theme bg-theme-primary px-6 py-6 flex flex-col gap-5 uppercase tracking-wider text-sm"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
