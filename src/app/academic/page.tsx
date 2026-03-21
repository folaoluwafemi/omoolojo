import { FileText, Lightbulb, Shield, BookCopy, GraduationCap } from "lucide-react";

export default function AcademicPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster text-brand-void">
      <div className="mx-auto max-w-7xl w-full">
        
        <header className="mb-20 md:mb-32 max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-6">
            Academic <br /> <span className="text-brand-dawn">Mentorship</span>
          </h1>
          <p className="text-xl font-sans text-brand-void/80 max-w-2xl font-medium leading-relaxed">
            Distilling complex engineering concepts into accessible structures. A portfolio of tutoring, teaching, and technical editing.
          </p>
        </header>

        {/* Documentation & Teaching */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-brand-void">
              Teaching & Technical Editing
            </h2>
            <div className="flex-1 h-[1px] bg-brand-void/10 ml-4"></div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-slate/5 transition-colors duration-500">
                <Lightbulb className="w-10 h-10 text-brand-slate" />
              </div>
              <div className="flex flex-col gap-4 p-10">
               <h3 className="font-heading font-black text-2xl uppercase tracking-tight">Curriculum & Course Materials</h3>
               <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                 Extensive datasets and teaching materials covering Circuit Theory, Analogue Electronics, Measurement & Control, and Technical Entrepreneurship.
               </p>
              </div>
             </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
              <div className="h-64 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-void/10 transition-colors duration-500">
                <FileText className="w-10 h-10 text-brand-void" />
              </div>
              <div className="flex flex-col gap-4 p-10">
               <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-brand-void">Technical Writing</h3>
               <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                 Expert editing and drafting for engineering proposals, academic journal submissions, and technical curriculums complying strictly with APA and IEEE standards.
               </p>
              </div>
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

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
               <div className="h-56 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-solar/10 transition-colors duration-500">
                 <Lightbulb className="w-10 h-10 text-brand-solar" />
               </div>
               <div className="p-8">
                 <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Circuit Theory</h3>
                 <p className="font-sans text-brand-void/70 mt-2 text-sm font-medium">Deep dives into foundational electronics and networked systems.</p>
               </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
               <div className="h-56 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-dawn/10 transition-colors duration-500">
                 <Shield className="w-10 h-10 text-brand-dawn" />
               </div>
               <div className="p-8">
                 <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Analogue Electronics</h3>
                 <p className="font-sans text-brand-void/70 mt-2 text-sm font-medium">From signal processing to advanced hardware prototyping components.</p>
               </div>
            </div>

            <div className="flex flex-col bg-white border border-brand-void/10 rounded-3xl overflow-hidden group">
               <div className="h-56 bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-slate/10 transition-colors duration-500">
                 <GraduationCap className="w-10 h-10 text-brand-slate" />
               </div>
               <div className="p-8">
                 <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Measurement & Control</h3>
                 <p className="font-sans text-brand-void/70 mt-2 text-sm font-medium">Mastering instrumentation, DAQs, sensors and system feedback loops.</p>
               </div>
            </div>

            <div className="flex flex-col bg-brand-solar border border-brand-void/10 rounded-3xl overflow-hidden group">
               <div className="h-56 bg-brand-void/10 flex items-center justify-center group-hover:bg-brand-void/20 transition-colors duration-500">
                 <BookCopy className="w-10 h-10 text-brand-void" />
               </div>
               <div className="p-8 text-brand-void">
                 <h3 className="font-heading font-black text-xl uppercase tracking-tighter">GRE & Quant Prep</h3>
                 <p className="font-sans text-brand-void/80 mt-2 text-sm font-bold">Making high-level quantitative analysis simple and structurally accessible.</p>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}


