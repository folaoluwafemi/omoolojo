import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-brand-alabaster pt-32 pb-12">
        {/* Large Cut-out Hero Image */}
        <div className="absolute right-0 bottom-0 w-full h-[70vh] md:w-[50vw] md:h-[80vh] flex justify-end items-end z-0 pointer-events-none opacity-50 md:opacity-100 mix-blend-multiply">
          <img 
             src="/israel_hero_image.png" 
             alt="Oluwafemi Israel" 
             className="w-full h-full object-contain object-bottom md:object-right-bottom scale-110 md:scale-100 origin-bottom"
          />
        </div>

        <div className="mx-auto max-w-7xl w-full flex flex-col justify-between h-full relative z-10 min-h-[80vh]">
          
          <div className="flex flex-col space-y-6 w-full md:w-[70%] lg:w-[60%] z-20 mt-8 mb-24">
            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-4">
              THE <br />
              <span className="text-brand-solar">VISIONARY</span> <br />
              ARCHITECT
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-sans max-w-xl leading-relaxed text-brand-slate font-light bg-brand-alabaster/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-2xl md:rounded-none">
              Bridging the gap between strict engineering precision and profound Christian metaphysics
            </p>
          </div>

          {/* Integrated Showcase in Hero */}
          <div className="w-full xl:w-[75%] z-20 grid grid-cols-1 md:grid-cols-3 gap-6 relative mt-auto border-t border-brand-void/10 pt-8">
            {/* Item 1: Book -> mapped to Survivors internally */}
            <Link href="/book/survivors" className="group flex flex-col items-start gap-4 border-0">
               <div className="flex flex-col space-y-2 w-full">
                 <div className="flex justify-between items-start gap-4 w-full">
                    <h3 className="font-heading font-black text-lg uppercase tracking-tight text-brand-void group-hover:text-brand-solar transition-colors line-clamp-1">The Survivors</h3>
                    <ArrowRight className="w-4 h-4 text-brand-void opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </div>
                 <p className="font-sans text-brand-void/60 text-xs md:text-sm line-clamp-2">
                   A tale of family, faith, and the silent wars at home.
                 </p>
               </div>
               <div className="relative w-full h-32 rounded-xl bg-brand-void/5 overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <img src="https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/the-survivors-selar.com-68cee18849f88.jpg" alt="The Survivors" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
            </Link>

            {/* Item 2: Latest Research Paper */}
            <Link href="/resources" className="group flex flex-col items-start gap-4 border-0">
               <div className="flex flex-col space-y-2 w-full">
                 <div className="flex justify-between items-start gap-4 w-full">
                    <h3 className="font-heading font-black text-lg uppercase tracking-tight text-brand-void group-hover:text-brand-dawn transition-colors line-clamp-1">Metamaterials</h3>
                    <ArrowRight className="w-4 h-4 text-brand-void opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </div>
                 <p className="font-sans text-brand-void/60 text-xs md:text-sm line-clamp-2">
                   Theoretical design and execution for ultra-wideband 5G.
                 </p>
               </div>
               <div className="relative w-full h-32 rounded-xl bg-brand-void/5 overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80" alt="Research Paper" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
            </Link>

            {/* Item 3: New Music Release */}
            <Link href="/creative" className="group flex flex-col items-start gap-4 border-0">
               <div className="flex flex-col space-y-2 w-full">
                 <div className="flex justify-between items-start gap-4 w-full">
                    <h3 className="font-heading font-black text-lg uppercase tracking-tight text-brand-void group-hover:text-brand-void/70 transition-colors line-clamp-1">Hallelujah! Jesus</h3>
                    <ArrowRight className="w-4 h-4 text-brand-void opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </div>
                 <p className="font-sans text-brand-void/60 text-xs md:text-sm line-clamp-2">
                   A pure worship and afro-fusion sonic experience.
                 </p>
               </div>
               <div className="relative w-full h-32 rounded-xl bg-brand-void/5 overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" alt="Music Audio" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
