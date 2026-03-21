import { Play, Disc3, Mic2, Sparkles, BookOpen } from "lucide-react";

export default function CreativePage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster text-brand-void overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-solar/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        
        <header className="mb-20 md:mb-32 max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black uppercase tracking-tighter leading-[0.85] mb-6">
            Creative <br /> & <span className="text-brand-solar">Sonic</span>
          </h1>
          <p className="text-xl font-sans text-brand-void/70 max-w-2xl font-medium leading-relaxed">
            Translating the transcendent into the tangible. A collection of afro-fusion, worship, and atmospheric art designed to elevate the human spirit.
          </p>
        </header>

        {/* Music Releases */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
              Latest Singles
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative flex flex-col p-8 bg-white border border-brand-void/5 hover:bg-brand-void/5 transition-colors duration-500 overflow-hidden rounded-[2rem]">
              <div className="w-16 h-16 rounded-full bg-brand-void/5 flex items-center justify-center mb-6 group-hover:bg-brand-slate transition-colors">
                <Play className="w-6 h-6 text-brand-void group-hover:text-white fill-current ml-1" />
              </div>
              <h3 className="font-heading font-black text-2xl tracking-tight mb-2">Hallelujah! Jesus Reigns Forever</h3>
              <p className="font-sans text-brand-void/50 text-sm uppercase tracking-widest font-bold mb-4">Worship / Choral</p>
              <p className="font-sans text-brand-void/70 font-medium">A massive, atmospheric worship anthem declaring eternal truths over cinematic instrumentation.</p>
            </div>

            <div className="group relative flex flex-col p-8 bg-white border border-brand-void/5 hover:bg-brand-void/5 transition-colors duration-500 overflow-hidden rounded-[2rem]">
              <div className="w-16 h-16 rounded-full bg-brand-void/5 flex items-center justify-center mb-6 group-hover:bg-brand-solar transition-colors">
                <Play className="w-6 h-6 text-brand-void group-hover:text-white fill-current ml-1" />
              </div>
              <h3 className="font-heading font-black text-2xl tracking-tight mb-2">Who Be You?</h3>
              <p className="font-sans text-brand-void/50 text-sm uppercase tracking-widest font-bold mb-4">Afro-Fusion</p>
              <p className="font-sans text-brand-void/70 font-medium">A groovy, deeply rhythmic exploration of identity, layered over rich percussive afro-soul beats.</p>
            </div>

            <div className="group relative flex flex-col p-8 bg-white border border-brand-void/5 hover:bg-brand-void/5 transition-colors duration-500 overflow-hidden rounded-[2rem]">
               <div className="w-16 h-16 rounded-full bg-brand-void/5 flex items-center justify-center mb-6 group-hover:bg-brand-dawn transition-colors">
                <Play className="w-6 h-6 text-brand-void group-hover:text-white fill-current ml-1" />
              </div>
              <h3 className="font-heading font-black text-2xl tracking-tight mb-2">My Home Above</h3>
              <p className="font-sans text-brand-void/50 text-sm uppercase tracking-widest font-bold mb-4">Soulful Ballad</p>
              <p className="font-sans text-brand-void/70 font-medium">An introspective, stripped-back vocal performance reflecting on the journey of the soul and eternal rest.</p>
            </div>
          </div>
        </section>

        {/* Creative Services */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
              Production & Publishing
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6 p-10 bg-brand-solar text-brand-void rounded-[2.5rem] shadow-xl shadow-brand-solar/20">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-void/10 flex items-center justify-center">
                  <Mic2 className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-void/10 flex items-center justify-center">
                  <Disc3 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading font-black text-3xl uppercase tracking-tight">Music Production & Collaboration</h3>
              <p className="font-sans text-brand-void/80 font-medium leading-relaxed text-lg">
                I actively collaborate on songwriting, vocal features, and soundtrack briefs. If you have a project, share your reference tracks, concepts, and deadlines. Further expertise extends to mixing, mastering, and the final packaging of musical releases.
              </p>
            </div>

            <div className="flex flex-col space-y-6 p-10 bg-white border border-brand-void/10 rounded-[2.5rem]">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-void/5 flex items-center justify-center text-brand-solar">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-void/5 flex items-center justify-center text-brand-dawn">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading font-black text-3xl uppercase tracking-tight">Publishing Support</h3>
              <p className="font-sans text-brand-void/70 font-medium leading-relaxed text-lg">
                For aspiring authors—I provide end-to-end publishing infrastructure. From setting up optimized Amazon KDP and Selar storefronts, designing covers and writing compelling blurbs, to generating robust launch assets for your book marketing campaigns.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
