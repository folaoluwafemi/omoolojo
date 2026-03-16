import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-[1.5px] border-brand-void bg-brand-void text-brand-alabaster py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-heading text-lg font-bold uppercase tracking-tight mb-2">
              Ọmọ Ọlọ́jọ́
            </span>
            <p className="font-sans text-sm text-brand-slate max-w-sm">
              Bridging the gap between engineering precision and spiritual philosophy. A visionary architect of the technical and the theological.
            </p>
          </div>

          <div className="flex gap-6 font-heading text-sm uppercase tracking-wide">
            <Link href="/contact" className="hover:text-brand-solar transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-brand-solar transition-colors">
              About
            </Link>
          </div>

        </div>
        
        <div className="mt-12 flex flex-col items-center border-t border-brand-slate pt-6 text-sm text-brand-slate">
          <p>© {new Date().getFullYear()} Omo Olojo Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
