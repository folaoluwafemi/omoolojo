import { FileText, Cpu, Radio, Network, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster text-brand-void">
      <div className="mx-auto max-w-7xl w-full">
        
        <header className="mb-20 md:mb-32 max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-6">
            Applied <br /> <span className="text-brand-solar">Research</span>
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
            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500">
              <Link href="https://doi.org/10.53982/ajerd.2024.0702.25-j" target="_blank" rel="noopener noreferrer" className="block h-64 bg-brand-void/5 relative group-hover:bg-brand-solar/5 transition-colors duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-brand-solar" />
                </div>
              </Link>
              <div className="flex flex-col gap-4 p-10 flex-1">
                <span className="bg-brand-solar/10 text-brand-solar px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                  AJERD (2024)
                </span>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">
                  <Link href="https://doi.org/10.53982/ajerd.2024.0702.25-j" target="_blank" rel="noopener noreferrer" className="hover:text-brand-solar transition-colors duration-300">
                    Circular Microstrip Antenna in 5G: Evaluating Metamaterial Integration
                  </Link>
                </h3>
                <div className="mt-auto pt-2">
                  <Link href="https://doi.org/10.53982/ajerd.2024.0702.25-j" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-solar uppercase tracking-widest hover:underline">
                    <span>View Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-500">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-void/5 transition-colors duration-500 relative">
                  <FileText className="w-10 h-10 text-brand-void/50" />
              </div>
              <div className="flex flex-col gap-4 p-10 flex-1">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-void/10 text-brand-void px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                    Manuscript
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-widest font-bold text-brand-void/40">In Review</span>
                </div>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug text-brand-void/80">
                  Design of Dual-Band CMSA Using Metamaterial
                </h3>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-500">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-void/10 transition-colors duration-500 relative">
                  <FileText className="w-10 h-10 text-brand-void/50" />
              </div>
              <div className="flex flex-col gap-4 p-10 flex-1">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-void/10 text-brand-void px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                    Manuscript
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-widest font-bold text-brand-void/40">In Review</span>
                </div>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug text-brand-void/80">
                  3-Layered SSR Integrated Metamaterial Antenna
                </h3>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-500">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-solar/10 transition-colors duration-500 relative">
                  <FileText className="w-10 h-10 text-brand-solar/50" />
              </div>
              <div className="flex flex-col gap-4 p-10 flex-1">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-solar/10 text-brand-solar px-3 py-1 font-sans text-[0.65rem] font-bold rounded-full uppercase tracking-widest w-fit">
                    Proposal
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-widest font-bold text-brand-void/40">In Review</span>
                </div>
                <h3 className="font-heading font-black text-2xl tracking-tight leading-snug text-brand-void/80">
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
            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-solar/5 transition-colors duration-500">
                <Radio className="w-10 h-10 text-brand-solar" />
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h3 className="font-heading font-black text-xl uppercase tracking-tight">Metamaterial/CMSA Antenna Design</h3>
                <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                  Developing compact antennas specifically engineered for ultra-wideband (UWB), 5G networks, IoT applications, and CP monitoring systems.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-void/5 transition-colors duration-500">
                <Network className="w-10 h-10 text-brand-void" />
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h3 className="font-heading font-black text-xl uppercase tracking-tight">CP Remote Monitoring</h3>
                <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                  Building robust infrastructure for potentials logging, employing specialized electrodes and advanced DAQ/MCU telemetry implementations.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-solar/5 transition-colors duration-500">
                <Cpu className="w-10 h-10 text-brand-solar" />
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h3 className="font-heading font-black text-xl uppercase tracking-tight">Instrumentation & Control</h3>
                <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                  Architecting complete measurement chains, low-noise frontends, and SSR integrations. Actively upgrading CP voltage loggers with hardware like Arduino, ADS1115, and NI USB-6211 DAQs.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

