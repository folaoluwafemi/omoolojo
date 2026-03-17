"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/my-story", label: "My Story" },
  { href: "/showcase", label: "Showcase" },
  { href: "/books", label: "Books" },
  { href: "/resources", label: "Resources" },
  { href: "/creative", label: "Creative" },
  { href: "/academic", label: "Academic" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 z-50 w-full flex justify-center pt-6 px-4 transition-all duration-500"
    >
      <div className={cn(
        "mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-8 transition-all duration-500",
        scrolled 
          ? "bg-brand-alabaster/85 backdrop-blur-md rounded-full shadow-sm border border-brand-void/10 py-2"
          : "bg-transparent border-transparent py-4 rounded-full border"
      )}>
        {/* Logo Area */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <Image 
                src="/logo.svg" 
                alt="Ọmọ Ọlọ́jọ́ Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight uppercase text-brand-void hidden md:block">
              Ọmọ Ọlọ́jọ́
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-heading font-medium uppercase tracking-[0.1em] text-brand-void/80 hover:text-brand-solar hover:scale-105 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Icon */}
        <div className="flex items-center">
          <Link 
            href="/contact" 
            className="p-2 text-brand-void/80 hover:text-brand-solar hover:scale-110 transition-all"
            aria-label="Contact"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
