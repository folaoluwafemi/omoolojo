import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/books", label: "Books" },
  { href: "/resources", label: "Resources" },
  { href: "/creative", label: "Creative" },
  { href: "/academic", label: "Academic" },
  { href: "/showcase", label: "Showcase" },
  { href: "/my-story", label: "My Story" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-brand-alabaster/80 backdrop-blur-md border-b ethereal-border">
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
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-heading font-medium uppercase tracking-wide text-brand-void hover:text-brand-solar transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Icon */}
        <div className="flex items-center">
          <Link 
            href="/contact" 
            className="p-2 text-brand-slate hover:text-brand-solar transition-colors"
            aria-label="Contact"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
