"use client";

import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/books", label: "Books" },
  { href: "/creative", label: "Creative" },
  { href: "/academic", label: "Academic" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // We only want to close it if it's currently open
    // However, eslint warns about setting state in an effect. 
    // To resolve this completely without disabling the rule, one would usually use a different pattern.
    // For now, disabling the lint rule is the cleanest approach since it's a standard pattern for route change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  // Strip header completely purely on individual book detail routes
  if (pathname?.startsWith("/book/")) return null;

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-700 ease-in-out font-sans",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="mx-auto px-4 max-w-7xl flex justify-center">
          <div className={cn(
            "w-full flex items-center justify-between transition-all duration-700 ease-in-out relative overflow-hidden",
            scrolled 
              ? "bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-brand-void/10 py-3 px-6 text-brand-void"
              : "bg-transparent py-4 px-2 text-brand-void"
          )}>
            
            {/* Subtle glow effect when scrolled */}
            {scrolled && (
              <div className="absolute top-[-50%] left-[-10%] w-[200px] h-[200px] bg-brand-solar/20 blur-[60px] rounded-full z-0 pointer-events-none"></div>
            )}

            {/* Logo Area */}
            <div className="flex items-center z-10">
              <Link href="/" className="flex items-center gap-3 group">
                <span className={cn(
                  "font-heading text-xl font-black tracking-tighter uppercase transition-colors duration-300",
                  scrolled ? "text-brand-void group-hover:text-brand-solar" : "text-brand-void group-hover:text-brand-solar"
                )}>
                  Ọmọ Ọlọ́jọ́
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 z-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs font-heading font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group",
                      scrolled 
                        ? (isActive ? "text-brand-solar" : "text-brand-void/70 hover:text-brand-void") 
                        : (isActive ? "text-brand-solar" : "text-brand-void/70 hover:text-brand-void")
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                      scrolled ? "bg-brand-solar" : "bg-brand-solar"
                    )}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Contact Icon & Mobile Menu Toggle */}
            <div className="flex items-center gap-4 z-10">
              <Link 
                href="/contact" 
                className={cn(
                  "hidden sm:flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 font-heading text-xs uppercase tracking-widest font-bold",
                  scrolled 
                    ? "bg-brand-void text-brand-alabaster hover:bg-brand-solar hover:text-brand-void" 
                    : "bg-brand-void text-brand-alabaster hover:bg-brand-solar hover:text-brand-void"
                )}
                aria-label="Contact"
              >
                <span>Contact</span>
                <Mail className="h-4 w-4" />
              </Link>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-full transition-colors",
                  "text-brand-void hover:bg-brand-void/5"
                )}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center lg:hidden",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-3xl font-heading font-black uppercase tracking-widest transition-colors",
                pathname === link.href ? "text-brand-solar" : "text-brand-void/70 hover:text-brand-void"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 rounded-full border border-brand-void/20 text-brand-void font-heading text-sm uppercase tracking-[0.2em] font-bold hover:bg-brand-void hover:text-brand-alabaster transition-colors"
          >
            Initiate Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
