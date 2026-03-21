import { Shield, Lightbulb, BookCopy, GraduationCap, Flame } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster text-brand-void">
      <div className="mx-auto max-w-7xl w-full">
        
        <header className="mb-20 md:mb-32 max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-6">
            Tutoring <br /> & <span className="text-brand-solar">Ministry</span>
          </h1>
          <p className="text-xl font-sans text-brand-void/80 max-w-2xl font-medium leading-relaxed">
            Making the complex accessible. Whether it is breaking down opaque engineering theories or rigorous faith-based protocols, these are spaces for deep learning.
          </p>
        </header>

        {/* Tutoring Services */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-brand-void">
              Academic Tutoring
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col p-8 bg-white border border-brand-void/5 rounded-[2rem] hover:bg-brand-void/5 transition-colors duration-300">
               <Lightbulb className="w-8 h-8 text-brand-solar mb-6" />
               <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Circuit Theory</h3>
               <p className="font-sans text-brand-void/70 mt-2 text-sm font-medium">Deep dives into foundational electronics and networked systems.</p>
            </div>
            
            <div className="flex flex-col p-8 bg-white border border-brand-void/5 rounded-[2rem] hover:bg-brand-void/5 transition-colors duration-300">
               <Shield className="w-8 h-8 text-brand-dawn mb-6" />
               <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Analogue Electronics</h3>
               <p className="font-sans text-brand-void/70 mt-2 text-sm font-medium">From signal processing to advanced hardware prototyping components.</p>
            </div>

            <div className="flex flex-col p-8 bg-white border border-brand-void/5 rounded-[2rem] hover:bg-brand-void/5 transition-colors duration-300">
               <GraduationCap className="w-8 h-8 text-brand-slate mb-6" />
               <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Measurement & Control</h3>
               <p className="font-sans text-brand-void/70 mt-2 text-sm font-medium">Mastering instrumentation, DAQs, sensors and system feedback loops.</p>
            </div>

            <div className="flex flex-col p-8 bg-brand-solar text-brand-void rounded-[2rem] shadow-xl shadow-brand-solar/20 hover:-translate-y-1 transition-transform duration-300">
               <BookCopy className="w-8 h-8 text-brand-void mb-6" />
               <h3 className="font-heading font-black text-xl uppercase tracking-tighter">GRE & Quant Prep</h3>
               <p className="font-sans text-brand-void/80 mt-2 text-sm font-bold">Making high-level quantitative analysis simple and structurally accessible.</p>
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
            <div className="relative overflow-hidden flex flex-col justify-end p-10 min-h-[400px] rounded-[2.5rem] bg-brand-void/5 text-brand-void group border border-brand-void/10">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-brand-alabaster via-brand-alabaster/80 to-transparent"></div>
               
               <div className="relative z-10 flex flex-col gap-4">
                 <Flame className="w-8 h-8 text-brand-solar mb-2" />
                 <h3 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tight leading-none text-brand-void">
                   Dynamic Silence <br /> <span className="text-brand-solar">On The Supernatural Battlefield</span>
                 </h3>
                 <p className="font-sans text-brand-void/70 text-lg font-medium leading-relaxed max-w-sm mt-2">
                   A masterclass unpacking the robust intersection of rigorous reason and unseen spiritual dynamics.
                 </p>
               </div>
            </div>

            <div className="relative overflow-hidden flex flex-col justify-end p-10 min-h-[400px] rounded-[2.5rem] bg-brand-void/5 text-brand-void group border border-brand-void/10">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507693527203-d14457313bf9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-brand-alabaster via-brand-alabaster/80 to-transparent"></div>
               
               <div className="relative z-10 flex flex-col gap-4">
                 <Shield className="w-8 h-8 text-brand-dawn mb-2" />
                 <h3 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tight leading-none text-brand-void">
                   Life Prayer <br /> <span className="text-brand-dawn">Protocol</span>
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
