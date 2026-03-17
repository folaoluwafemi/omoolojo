import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-brand-alabaster">
        {/* Clean Alabaster Background */}

        <div className="mx-auto max-w-7xl w-full flex items-center h-full relative z-10">
          
          <div className="flex flex-col space-y-6 pt-20 w-full md:w-[60%] lg:w-[50%] z-20">
            <h1 className="text-6xl sm:text-7xl lg:text-[8rem] xl:text-[9rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-4">
              THE <br />
              <span className="text-brand-solar">VISIONARY</span> <br />
              ARCHITECT
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-sans max-w-lg leading-relaxed text-brand-slate font-light">
              Bridging the gap between strict engineering precision and profound Christian metaphysics
            </p>
          </div>

        </div>
        
        {/* Large Cut-out Hero Image */}
        <div className="absolute bottom-0 right-0 w-full h-[70vh] md:w-[65vw] md:h-[85vh] flex justify-end items-end z-10 pointer-events-none">
          <img 
             src="/israel_hero_image.png" 
             alt="Oluwafemi Israel" 
             className="w-full h-full object-contain object-bottom md:object-right-bottom scale-110 md:scale-100 origin-bottom pr-0 md:pr-12 lg:pr-24"
          />
        </div>
      </section>

      {/* 2. THE SHOWCASE SECTION */}
      <section className="relative h-screen w-full flex flex-col overflow-hidden bg-brand-void text-brand-alabaster">
        <div className="mx-auto max-w-7xl w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight uppercase text-brand-alabaster/90">
              The Showcase
            </h2>
            <div className="hidden md:flex items-center gap-4 pb-2">
              <span className="w-16 h-[1px] bg-brand-alabaster/30"></span>
              <p className="text-brand-alabaster/50 uppercase font-heading tracking-widest text-xs">
                Trending & Current
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Item 1: Upcoming Book */}
            <Link href="/books" className="group relative flex flex-col justify-between aspect-[4/5] p-10 rounded-[2.5rem] border border-brand-alabaster/10 bg-brand-void hover:bg-brand-alabaster/5 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-solar/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-brand-solar/20 transition-all"></div>
              <div className="flex justify-between items-start z-10">
                <span className="text-brand-alabaster/50 font-heading text-xs uppercase tracking-widest">
                  01 // Upcoming Book
                </span>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-solar" />
              </div>
              <div className="z-10">
                <h3 className="text-3xl font-heading uppercase tracking-tight mb-4 group-hover:text-brand-solar transition-colors">
                  Spiritual Mathematics
                </h3>
                <p className="font-sans font-light text-brand-alabaster/60 text-sm leading-relaxed">
                  Models for life design: circumstance vs time, and the deep structures of good and evil.
                </p>
              </div>
            </Link>

            {/* Item 2: Latest Research Paper */}
            <Link href="/resources" className="group relative flex flex-col justify-between aspect-[4/5] p-10 rounded-[2.5rem] border border-brand-alabaster/10 bg-brand-void hover:bg-brand-alabaster/5 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-dawn/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-brand-dawn/20 transition-all"></div>
              <div className="flex justify-between items-start z-10">
                <span className="text-brand-alabaster/50 font-heading text-xs uppercase tracking-widest">
                  02 // Latest Paper
                </span>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-dawn" />
              </div>
              <div className="z-10">
                <h3 className="text-3xl font-heading uppercase tracking-tight mb-4 group-hover:text-brand-dawn transition-colors">
                  Metamaterial Integration
                </h3>
                <p className="font-sans font-light text-brand-alabaster/60 text-sm leading-relaxed">
                  Theoretical design and practical execution for ultra-wideband modern 5G communication.
                </p>
              </div>
            </Link>

            {/* Item 3: New Music Release */}
            <Link href="/creative" className="group relative flex flex-col justify-between aspect-[4/5] p-10 rounded-[2.5rem] border border-brand-alabaster/10 bg-brand-void hover:bg-brand-alabaster/5 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-slate/20 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-brand-slate/30 transition-all"></div>
              <div className="flex justify-between items-start z-10">
                <span className="text-brand-alabaster/50 font-heading text-xs uppercase tracking-widest">
                  03 // New Release
                </span>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-alabaster" />
              </div>
              <div className="z-10">
                <h3 className="text-3xl font-heading uppercase tracking-tight mb-4 transition-colors">
                  Hallelujah! Jesus Reigns
                </h3>
                <p className="font-sans font-light text-brand-alabaster/60 text-sm leading-relaxed">
                  A pure worship and afro-fusion sonic experience. Available on all major platforms.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. ABOUT ME (SHORTENED PHILOSOPHY) */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-brand-alabaster overflow-hidden">
        
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-void/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-void/5 rounded-full pointer-events-none"></div>
        
        <div className="z-10 mx-auto max-w-4xl flex flex-col items-center">
          <span className="text-brand-solar font-heading text-xs uppercase tracking-[0.3em] font-medium mb-8">
            The Philosophy
          </span>
          
          <h2 className="text-4xl md:text-6xl font-heading font-medium uppercase tracking-tighter mb-12">
            Faith. Vision. Innovation.
          </h2>
          
          <div className="space-y-8 text-xl md:text-3xl font-sans font-light leading-snug max-w-4xl text-brand-void/80">
            <p>
              I approach engineering not merely as a technical discipline, but as a <span className="text-brand-void font-medium">platform for innovation</span> capable of addressing real societal challenges.
            </p>
            <p>
              Simultaneously, my intellectual framework—Christian metaphysics—seeks to <span className="italic">reconcile rigid scientific inquiry</span> with profound spiritual understanding.
            </p>
          </div>

          <div className="mt-16">
            <Link href="/my-story" className="ethereal-btn inline-flex items-center gap-4 group">
              Read My Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
