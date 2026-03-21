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
      <section className="relative w-full flex flex-col py-32 lg:py-48 mt-12 bg-brand-alabaster text-brand-void overflow-visible">
        <div className="mx-auto max-w-7xl w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight uppercase text-brand-void">
              The Showcase
            </h2>
            <div className="hidden md:flex items-center gap-4 pb-2">
              <span className="w-16 h-[2px] bg-brand-void/20"></span>
              <p className="text-brand-void/60 font-bold uppercase font-sans tracking-widest text-xs">
                Trending & Current
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            
            {/* Item 1: Book -> mapped to Survivors internally */}
            <Link href="/book/survivors" className="group flex flex-col items-start gap-4 border-0">
               <div className="relative w-full aspect-[4/5] rounded-2xl bg-brand-void/5 flex flex-col justify-end p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-void/50 to-transparent z-0"></div>
                  
                  <span className="font-heading font-bold text-white uppercase tracking-widest text-xs z-10 absolute top-6 left-6 drop-shadow-md">
                    01 // Bestseller
                  </span>

                  <img src="https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/the-survivors-selar.com-68cee18849f88.jpg" alt="The Survivors" className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Arrow overlay */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-brand-void/5 z-20 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 text-brand-void" />
                  </div>
               </div>

               {/* Meta Details */}
               <div className="flex flex-col space-y-3 px-2 mt-2 w-full">
                 <div className="flex justify-between items-start gap-4 w-full">
                    <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-brand-void group-hover:text-brand-solar transition-colors">The Survivors</h3>
                    <span className="bg-brand-void/5 text-brand-void px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest whitespace-nowrap">
                       Book
                    </span>
                 </div>
                 <p className="font-sans text-brand-void/80 font-medium leading-relaxed text-sm md:text-base pr-4">
                   A tale of family, faith, and the silent wars at home.
                 </p>
               </div>
            </Link>

            {/* Item 2: Latest Research Paper */}
            <Link href="/resources" className="group flex flex-col items-start gap-4 border-0">
               <div className="relative w-full aspect-[4/5] rounded-2xl bg-brand-void/5 flex flex-col justify-end p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-void/50 to-transparent z-0"></div>

                  <span className="font-heading font-bold text-white uppercase tracking-widest text-xs z-10 absolute top-6 left-6 drop-shadow-md">
                    02 // Latest Paper
                  </span>

                  <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80" alt="Research Paper" className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-700" />

                  {/* Arrow overlay */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-brand-void/5 z-20 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 text-brand-void" />
                  </div>
               </div>

               {/* Meta Details */}
               <div className="flex flex-col space-y-3 px-2 mt-2 w-full">
                 <div className="flex justify-between items-start gap-4 w-full">
                    <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-brand-void group-hover:text-brand-dawn transition-colors">Metamaterial Integration</h3>
                    <span className="bg-brand-void/5 text-brand-void px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest whitespace-nowrap">
                       Research
                    </span>
                 </div>
                 <p className="font-sans text-brand-void/80 font-medium leading-relaxed text-sm md:text-base pr-4">
                   Theoretical design and practical execution for ultra-wideband modern 5G communication.
                 </p>
               </div>
            </Link>

            {/* Item 3: New Music Release */}
            <Link href="/creative" className="group flex flex-col items-start gap-4 border-0">
               <div className="relative w-full aspect-[4/5] rounded-2xl bg-brand-void/5 flex flex-col justify-end p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-void/50 to-transparent z-0"></div>

                  <span className="font-heading font-bold text-white uppercase tracking-widest text-xs z-10 absolute top-6 left-6 drop-shadow-md">
                    03 // New Release
                  </span>

                  <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" alt="Music Audio" className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-700" />

                  {/* Arrow overlay */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-brand-void/5 z-20 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 text-brand-void" />
                  </div>
               </div>

               {/* Meta Details */}
               <div className="flex flex-col space-y-3 px-2 mt-2 w-full">
                 <div className="flex justify-between items-start gap-4 w-full">
                    <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-brand-void group-hover:text-brand-void/70 transition-colors">Hallelujah! Jesus Reigns</h3>
                    <span className="bg-brand-void/5 text-brand-void px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest whitespace-nowrap">
                       Music
                    </span>
                 </div>
                 <p className="font-sans text-brand-void/80 font-medium leading-relaxed text-sm md:text-base pr-4">
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
