import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative w-full border-b-[1.5px] border-brand-void pt-12 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col space-y-8 z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tighter leading-[0.9]">
              The <br />
              <span className="text-brand-solar">Visionary</span> <br />
              Architect.
            </h1>
            <p className="text-xl md:text-2xl font-sans max-w-lg leading-relaxed text-brand-void/80 font-medium">
              I am Oluwafemi Israel — bridging the gap between engineering precision and Christian metaphysics.
            </p>
            <div>
              <Link href="/my-story" className="brutal-btn inline-flex items-center gap-2">
                Discover the Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto md:ml-auto">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-[1.5px] border-brand-void bg-brand-dawn z-0"></div>
            <div className="relative z-10 w-full h-full border-[1.5px] border-brand-void bg-brand-void flex items-center justify-center p-4">
               {/* B/W Image Placeholder */}
               <div className="w-full h-full border border-brand-alabaster/30 bg-brand-void flex items-center justify-center grayscale">
                  <span className="font-heading text-brand-alabaster/50 uppercase tracking-widest text-sm">
                    [ B/W Portrait Placeholder ]
                  </span>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE SHOWCASE SECTION */}
      <section className="w-full border-b-[1.5px] border-brand-void bg-brand-void text-brand-alabaster overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
              The Showcase
            </h2>
            <p className="hidden md:block text-brand-slate uppercase font-heading tracking-widest text-sm">
              Trending & Current
            </p>
          </div>

          {/* Carousel Container (Horizontal Scroll) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
            
            {/* Item 1: Upcoming Book */}
            <Link href="/books" className="group relative shrink-0 w-[85vw] md:w-[600px] aspect-[4/3] rounded-none border-[1.5px] border-brand-alabaster bg-brand-alabaster text-brand-void snap-center flex flex-col justify-between p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform shadow-[4px_4px_0px_#FF5E00] hover:shadow-[8px_8px_0px_#FF5E00]">
              <div className="flex justify-between items-start">
                <span className="bg-brand-void text-brand-alabaster px-3 py-1 font-heading text-xs uppercase tracking-widest">
                  Upcoming Book
                </span>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-brand-solar" />
              </div>
              <div>
                <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-4">
                  Spiritual <br /> Mathematics
                </h3>
                <p className="font-sans font-medium text-brand-slate max-w-md">
                  Models for life design: circumstance vs time, and the deep structures of good and evil.
                </p>
              </div>
            </Link>

            {/* Item 2: Latest Research Paper */}
            <Link href="/resources" className="group relative shrink-0 w-[85vw] md:w-[600px] aspect-[4/3] rounded-none border-[1.5px] border-brand-alabaster bg-brand-solar text-brand-void snap-center flex flex-col justify-between p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform shadow-[4px_4px_0px_#F7F7F5] hover:shadow-[8px_8px_0px_#F7F7F5]">
              <div className="flex justify-between items-start">
                <span className="bg-brand-void text-brand-solar px-3 py-1 font-heading text-xs uppercase tracking-widest border border-brand-void">
                  Latest Paper
                </span>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-brand-void" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4 leading-none">
                  Metamaterial <br /> Integration in <br /> 5G Antennas
                </h3>
                <p className="font-sans font-medium text-brand-void/80 max-w-md">
                  Theoretical design and practical execution for ultra-wideband modern communication.
                </p>
              </div>
            </Link>

            {/* Item 3: New Music Release */}
            <Link href="/creative" className="group relative shrink-0 w-[85vw] md:w-[600px] aspect-[4/3] rounded-none border-[1.5px] border-brand-alabaster bg-brand-dawn text-brand-void snap-center flex flex-col justify-between p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[8px_8px_0px_#0A0A0A]">
              <div className="flex justify-between items-start">
                <span className="bg-brand-void text-brand-dawn px-3 py-1 font-heading text-xs uppercase tracking-widest border border-brand-void">
                  New Release
                </span>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-brand-void" />
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-4">
                  Hallelujah! <br /> Jesus Reigns
                </h3>
                <p className="font-sans font-medium text-brand-void/80 max-w-md">
                  A pure worship and afro-fusion experience. Listen on all major platforms.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. ABOUT ME (SHORTENED PHILOSOPHY) */}
      <section className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-brand-alabaster">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          
          <div className="w-16 h-1 bg-brand-solar mb-8"></div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8">
            Faith. Vision. Innovation.
          </h2>
          
          <div className="space-y-6 text-lg md:text-2xl font-sans font-medium leading-relaxed max-w-3xl text-brand-void/80">
            <p>
              I approach engineering not merely as a technical discipline, but as a platform for innovation capable of addressing real societal challenges.
            </p>
            <p>
              Simultaneously, my intellectual framework—Christian metaphysics—seeks to reconcile rigid scientific inquiry with profound spiritual understanding. I analyze life circumstances, human struggles, and spiritual realities using structured reasoning alongside faith-centered insight.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/my-story" className="brutal-btn inline-flex items-center gap-2">
              Read My Full Story
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
