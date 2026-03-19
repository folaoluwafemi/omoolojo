import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, AlertTriangle } from 'lucide-react';

export default function SurvivorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-void text-brand-alabaster overflow-hidden">
      
      {/* 1. HERO SECTION - MOODY & GRIPPING */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Deep, gritty background gradients to signify struggle and emerging light */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-brand-void to-[#1a1514] z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-solar/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dawn/5 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 z-0"></div>
        
        {/* Grain overlay for gritty texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

        {/* Top Navigation Back */}
        <div className="absolute top-8 left-4 lg:left-12 z-30">
          <Link href="/books" className="group flex items-center space-x-2 text-brand-alabaster/60 hover:text-brand-alabaster transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-heading uppercase tracking-widest text-xs">Back to Books</span>
          </Link>
        </div>

        <div className="mx-auto max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 pt-20">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 w-full lg:w-1/2">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-brand-alabaster/5 border border-brand-alabaster/10 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-solar animate-pulse"></span>
              <span className="font-heading uppercase tracking-[0.2em] text-[0.65rem] text-brand-alabaster/80">
                Official Literature Text (2014) • Akwa Ibom State
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-alabaster">
              THE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-solar to-brand-dawn">SURVIVORS</span>
            </h1>

            <p className="text-xl md:text-2xl font-sans text-brand-alabaster/70 font-light max-w-xl leading-relaxed">
              A gripping drama of love, betrayal, and the unseen struggles within a broken home. A profound tale of family, faith, and the silent wars fought by the innocent.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a href="https://selar.com/841581t88l" target="_blank" className="flex items-center justify-center space-x-3 bg-brand-solar text-brand-void px-8 py-4 rounded-full font-heading font-bold uppercase tracking-widest text-sm hover:bg-brand-alabaster transition-colors">
                <Download className="w-5 h-5" />
                <span>Get the Book (Free)</span>
              </a>
              <span className="font-sans text-brand-alabaster/40 font-medium text-sm">
                Digitized for the General Public
              </span>
            </div>
          </div>

          {/* Cover Art Treatment */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-sm transform lg:rotate-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-brand-alabaster/10 bg-[#111]">
               <img src="https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/the-survivors-selar.com-68cee18849f88.jpg" alt="The Survivors Book Cover" className="w-full h-full object-cover rounded-sm opacity-90 sepia-[0.2] contrast-125" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Visual Accents */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-brand-solar/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <div className="w-2 h-2 bg-brand-solar rounded-full absolute top-0 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CAMPAIGN & CONTEXT SECTION */}
      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-12 bg-[#0c0a0a] border-t border-brand-alabaster/5">
        <div className="mx-auto max-w-5xl w-full flex flex-col gap-12">
          
          <div className="flex flex-col items-center text-center space-y-6">
            <AlertTriangle className="w-12 h-12 text-brand-dawn opacity-80" />
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-brand-alabaster">
              The Campaign Against Child Abuse
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 item-start">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-solar">
                Contextual Details
              </h3>
              <p className="font-sans font-light text-brand-alabaster/70 leading-relaxed text-lg">
                The campaign against child abuse was a pivotal part of the Akwa Ibom State government's broader response to international and domestic scrutiny regarding "child witches" and widespread child abandonment.
              </p>
              <p className="font-sans font-light text-brand-alabaster/70 leading-relaxed text-lg">
                While the administration, led by Governor Godswill Akpabio, initiated legal action and child protection initiatives, serious concerns were raised about the enforcement of these laws and the welfare of children trapped in stigmatizing situations.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-bold uppercase tracking-widest text-brand-dawn">
                Educational Impact
              </h3>
              <p className="font-sans font-light text-brand-alabaster/70 leading-relaxed text-lg">
                Spearheaded by Her Excellency Mrs. Ekaette Unoma Akpabio's campaign, <span className="font-normal text-brand-alabaster italic">The Survivors</span> explores this exact storyline. It dives deep into the horrific abandonment tied to the "child witch" stigma.
              </p>
              <div className="p-6 bg-brand-solar/10 border-l-4 border-brand-solar mt-4">
                <p className="font-sans font-medium text-brand-alabaster text-lg">
                  Approved in 2014 as an official literature text across primary schools, the book made immense impact on the ground level, and is now being digitized to reach a global scale.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. QUOTE / CONCLUSION SECTION */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-brand-solar mb-12"></div>
        <blockquote className="max-w-4xl">
          <p className="font-heading font-light text-3xl md:text-5xl uppercase tracking-tight leading-tight text-brand-alabaster mb-8">
            "We cannot look away from the silent wars waged at home. Survival is not just staying alive; it is finding the light when abandoned in the dark."
          </p>
          <cite className="font-sans font-bold tracking-widest text-brand-solar uppercase text-sm not-italic">
            — Ọmọ Ọlọ́jọ́
          </cite>
        </blockquote>
      </section>

    </div>
  );
}
