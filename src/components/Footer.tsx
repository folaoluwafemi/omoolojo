import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between bg-brand-void text-brand-alabaster relative overflow-hidden pt-32 pb-8 px-6 lg:px-12 border-t border-brand-alabaster/10">
      
      {/* Ambient glowing orb in the background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[500px] bg-brand-solar/15 blur-[120px] rounded-[100%] pointer-events-none"></div>

      <div className="z-10 mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
        
        {/* Brand & Hook */}
        <div className="md:col-span-6 flex flex-col items-start space-y-8">
          <span className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8]">
            Ọmọ <br /> Ọlọ́jọ́
          </span>
          <p className="font-sans text-xl font-light text-brand-alabaster/60 max-w-md leading-relaxed">
            A visionary architect of the technical and the theological. Building bridges between logic, faith, and societal innovation.
          </p>
          <a href="mailto:iaoluwafemi@gmail.com" className="inline-flex items-center space-x-2 text-brand-solar hover:text-brand-alabaster transition-colors duration-300 group">
            <Mail className="w-5 h-5" />
            <span className="font-heading uppercase tracking-widest text-sm font-bold">Initiate Contact</span>
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Links Navigation */}
        <div className="md:col-span-3 flex flex-col space-y-6">
          <h4 className="font-heading uppercase tracking-[0.2em] text-brand-alabaster/40 text-xs font-bold mb-2">Explore</h4>
          <nav className="flex flex-col space-y-4 font-sans text-lg font-medium text-brand-alabaster/80">
            <Link href="/" className="hover:text-brand-solar transition-colors w-fit">Home</Link>
            <Link href="/academic" className="hover:text-brand-solar transition-colors w-fit">Academic Work</Link>
            <Link href="/books" className="hover:text-brand-solar transition-colors w-fit">Authorship</Link>
            <Link href="/contact" className="hover:text-brand-solar transition-colors w-fit">Get in Touch</Link>
          </nav>
        </div>

        {/* Socials / Newsletter */}
        <div className="md:col-span-3 flex flex-col space-y-6">
           <h4 className="font-heading uppercase tracking-[0.2em] text-brand-alabaster/40 text-xs font-bold mb-2">Connect</h4>
           <div className="flex flex-col space-y-4 font-sans text-lg font-medium text-brand-alabaster/80">
             <a href="https://www.linkedin.com/in/israeladeolu/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-brand-solar transition-colors w-fit">
               <Linkedin className="w-5 h-5" />
               <span>LinkedIn</span>
             </a>
             <a href="mailto:iaoluwafemi@gmail.com" className="flex items-center space-x-3 hover:text-brand-solar transition-colors w-fit">
               <Mail className="w-5 h-5" />
               <span>Email</span>
             </a>
           </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="z-10 mx-auto max-w-7xl w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-alabaster/10 text-xs font-heading tracking-widest text-brand-alabaster/40 uppercase gap-4">
        <p>© {new Date().getFullYear()} Omo Olojo Ltd. All rights reserved.</p>
      </div>

    </footer>
  );
}
