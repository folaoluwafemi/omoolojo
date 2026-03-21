import { FileText, Cpu, Radio, Network, Lightbulb, Shield, BookCopy, GraduationCap } from "lucide-react";

export default function AcademicPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster text-brand-void">
      <div className="mx-auto max-w-7xl w-full">
        
        <header className="mb-20 md:mb-32 max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-6">
            Academic <br /> & <span className="text-brand-dawn">Research</span>
          </h1>
          <p className="text-xl font-sans text-brand-void/80 max-w-2xl font-medium leading-relaxed">
            Rigorously investigating circular microstrip antennas, metamaterial integration, and complex energy systems to solve real-world communication challenges.
          </p>
        </header>

        {/* Selected Publications */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-brand-void">
              Selected Publications
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative flex flex-col justify-between p-10 bg-white rounded-3xl border border-brand-void/5 shadow-xl shadow-brand-void/5 hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dawn/5 rounded-full blur-[80px] group-hover:bg-brand-dawn/10 pointer-events-none transition-colors duration-700"></div>
              <div className="relative z-10 flex flex-col gap-6">
                <span className="bg-brand-dawn/10 text-brand-dawn px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                  AJERD (2024)
                </span>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">
                  Circular Microstrip Antenna in 5G: Evaluating Metamaterial Integration
                </h3>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between p-10 bg-white rounded-3xl border border-brand-void/5 shadow-xl shadow-brand-void/5 hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-slate/5 rounded-full blur-[80px] group-hover:bg-brand-slate/10 pointer-events-none transition-colors duration-700"></div>
              <div className="relative z-10 flex flex-col gap-6">
                <span className="bg-brand-slate/10 text-brand-slate px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                  Manuscript
                </span>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">
                  Design of Dual-Band CMSA Using Metamaterial
                </h3>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between p-10 bg-white rounded-3xl border border-brand-void/5 shadow-xl shadow-brand-void/5 hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-void/5 rounded-full blur-[80px] group-hover:bg-brand-void/10 pointer-events-none transition-colors duration-700"></div>
              <div className="relative z-10 flex flex-col gap-6">
                <span className="bg-brand-void/10 text-brand-void px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                  Manuscript
                </span>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">
                  3-Layered SSR Integrated Metamaterial Antenna
                </h3>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between p-10 bg-white rounded-3xl border border-brand-void/5 shadow-xl shadow-brand-void/5 hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-solar/5 rounded-full blur-[80px] group-hover:bg-brand-solar/10 pointer-events-none transition-colors duration-700"></div>
              <div className="relative z-10 flex flex-col gap-6">
                <span className="bg-brand-solar/10 text-brand-solar px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                  Proposal
                </span>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">
                  CP Remote Monitoring via Compact Metasurface Antenna
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Services & Hardware */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-brand-void">
              Engineering Expertise
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="w-14 h-14 bg-brand-dawn/10 rounded-2xl flex items-center justify-center mb-2">
                <Radio className="w-6 h-6 text-brand-dawn" />
              </div>
              <h3 className="font-heading font-black text-xl uppercase tracking-tight">Metamaterial/CMSA Antenna Design</h3>
              <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                Developing compact antennas specifically engineered for ultra-wideband (UWB), 5G networks, IoT applications, and CP monitoring systems.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="w-14 h-14 bg-brand-slate/10 rounded-2xl flex items-center justify-center mb-2">
                <Network className="w-6 h-6 text-brand-slate" />
              </div>
              <h3 className="font-heading font-black text-xl uppercase tracking-tight">CP Remote Monitoring</h3>
              <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                Building robust infrastructure for potentials logging, employing specialized electrodes and advanced DAQ/MCU telemetry implementations.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="w-14 h-14 bg-brand-solar/10 rounded-2xl flex items-center justify-center mb-2">
                <Cpu className="w-6 h-6 text-brand-solar" />
              </div>
              <h3 className="font-heading font-black text-xl uppercase tracking-tight">Instrumentation & Control</h3>
              <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                Architecting complete measurement chains, low-noise frontends, and SSR integrations. Actively upgrading CP voltage loggers with hardware like Arduino, ADS1115, and NI USB-6211 DAQs.
              </p>
            </div>
          </div>
        </section>

        {/* Documentation & Teaching */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-brand-void">
              Teaching & Technical Editing
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-8 bg-brand-void/5 text-brand-void rounded-3xl flex flex-col justify-center space-y-6 relative overflow-hidden">
               <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-slate/10 blur-[80px] rounded-full pointer-events-none"></div>
               <Lightbulb className="w-8 h-8 text-brand-slate relative z-10" />
               <h3 className="font-heading font-black text-2xl uppercase tracking-tight relative z-10">Curriculum & Course Materials</h3>
               <p className="font-sans text-brand-void/70 font-medium leading-relaxed relative z-10">
                 Extensive datasets and teaching materials covering Circuit Theory, Analogue Electronics, Measurement & Control, and Technical Entrepreneurship.
               </p>
             </div>

             <div className="p-8 bg-white border border-brand-void/10 rounded-3xl flex flex-col justify-center space-y-6">
               <FileText className="w-8 h-8 text-brand-void" />
               <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-brand-void">Technical Writing</h3>
               <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                 Expert editing and drafting for engineering proposals, academic journal submissions, and technical curriculums complying strictly with APA and IEEE standards.
               </p>
             </div>
          </div>
        </section>

        {/* Tutoring Services */}
        <section>
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

      </div>
    </div>
  );
}
