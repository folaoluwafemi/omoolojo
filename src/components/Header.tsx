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
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled 
          ? "bg-brand-alabaster/80 backdrop-blur-md border-b ethereal-border py-1" 
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Area */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <Image 
                src="/logo.svg" 
                alt="Ọmọ Ọlọ́jọ́ Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight uppercase text-brand-void hidden sm:block">
              Ọmọ Ọlọ́jọ́
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
            "hidden md:flex items-center gap-6 px-6 py-2 transition-all duration-500",
            scrolled ? "rounded-full bg-brand-void/5" : ""
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-heading font-medium uppercase tracking-wide text-brand-void/80 hover:text-brand-solar hover:scale-105 transition-all"
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
