import { Play, Disc3, Mic2, Sparkles, BookOpen, Flame, Shield } from "lucide-react";

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
            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-void/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-brand-void text-white flex items-center justify-center shadow-sm">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
              <div className="flex flex-col gap-2 p-8">
                <p className="font-sans text-brand-void/50 text-xs uppercase tracking-widest font-bold">Worship / Choral</p>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">Hallelujah! Jesus Reigns Forever</h3>
                <p className="font-sans text-brand-void/70 font-medium mt-2 leading-relaxed">A massive, atmospheric worship anthem declaring eternal truths over cinematic instrumentation.</p>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-solar/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-brand-solar text-brand-void flex items-center justify-center shadow-sm">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
              <div className="flex flex-col gap-2 p-8">
                <p className="font-sans text-brand-void/50 text-xs uppercase tracking-widest font-bold">Afro-Fusion</p>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">Who Be You?</h3>
                <p className="font-sans text-brand-void/70 font-medium mt-2 leading-relaxed">A groovy, deeply rhythmic exploration of identity, layered over rich percussive afro-soul beats.</p>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-solar/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-brand-solar text-white flex items-center justify-center shadow-sm">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
              <div className="flex flex-col gap-2 p-8">
                <p className="font-sans text-brand-void/50 text-xs uppercase tracking-widest font-bold">Soulful Ballad</p>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">My Home Above</h3>
                <p className="font-sans text-brand-void/70 font-medium mt-2 leading-relaxed">An introspective, stripped-back vocal performance reflecting on the journey of the soul and eternal rest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Services */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
              Production & Publishing
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col bg-white text-brand-void rounded-3xl overflow-hidden group border border-brand-void/10">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-solar/10 transition-colors duration-500">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-void/5 flex items-center justify-center text-brand-solar">
                    <Mic2 className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-void/5 flex items-center justify-center text-brand-solar">
                    <Disc3 className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 p-10">
                <h3 className="font-heading font-black text-3xl uppercase tracking-tight">Music Production & Collaboration</h3>
                <p className="font-sans text-brand-void/70 font-medium leading-relaxed text-lg">
                  I actively collaborate on songwriting, vocal features, and soundtrack briefs. If you have a project, share your reference tracks, concepts, and deadlines. Further expertise extends to mixing, mastering, and the final packaging of musical releases.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-void/10 transition-colors duration-500">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-void/5 flex items-center justify-center text-brand-solar">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-void/5 flex items-center justify-center text-brand-solar">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 p-10">
                <h3 className="font-heading font-black text-3xl uppercase tracking-tight">Publishing Support</h3>
                <p className="font-sans text-brand-void/70 font-medium leading-relaxed text-lg">
                  For aspiring authorsâ€”I provide end-to-end publishing infrastructure. From setting up optimized Amazon KDP and Selar storefronts, designing covers and writing compelling blurbs, to generating robust launch assets for your book marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ministry */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-brand-void">
              Signature Ministry Sessions
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
               <div className="h-80 relative overflow-hidden bg-brand-void/5">
                 <img src="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80" alt="Dynamic Silence" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
               </div>
               <div className="p-10 flex flex-col gap-4">
                 <Flame className="w-8 h-8 text-brand-solar mb-2" />
                 <h3 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tight leading-none text-brand-void">
                   Dynamic Silence <br /> <span className="text-brand-solar">On The Supernatural Battlefield</span>
                 </h3>
                 <p className="font-sans text-brand-void/70 text-lg font-medium leading-relaxed max-w-sm mt-2">
                   A masterclass unpacking the robust intersection of rigorous reason and unseen spiritual dynamics.
                 </p>
               </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
               <div className="h-80 relative overflow-hidden bg-brand-void/5">
                 <img src="/ministry_image.png" alt="Life Prayer Protocol" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
               </div>
               <div className="p-10 flex flex-col gap-4">
                 <Shield className="w-8 h-8 text-brand-solar mb-2" />
                 <h3 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tight leading-none text-brand-void">
                   Life Prayer <br /> <span className="text-brand-solar">Protocol</span>
                 </h3>
                 <p className="font-sans text-brand-void/70 text-lg font-medium leading-relaxed max-w-sm mt-2">
                   Structured, intentional architecture for bringing heavenly realities into earthly manifestation.
                 </p>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

