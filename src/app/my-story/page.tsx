import { Flame, Compass, Zap, BookOpen, Hexagon } from 'lucide-react';

export default function MyStoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-alabaster text-brand-void overflow-hidden selection:bg-brand-solar selection:text-brand-void">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-32 pb-16">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-solar/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-dawn/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl w-full relative z-10 flex flex-col items-start">
          <div className="inline-flex items-center space-x-3 mb-8 px-4 py-2 border border-brand-void/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-solar animate-pulse"></span>
            <span className="font-heading uppercase font-bold tracking-[0.2em] text-[0.65rem] text-brand-void/60">
              The Multidisciplinary Thinker
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-12">
            Oluwafemi <br/>
            <span className="text-brand-void/20">Israel</span>
            <span className="block text-3xl md:text-5xl lg:text-7xl mt-4 text-brand-solar">
              ( ỌMỌ ỌLỌ́JỌ́ )
            </span>
          </h1>

          <p className="text-2xl md:text-4xl font-sans font-medium text-brand-void/80 max-w-4xl leading-tight">
            An electrical engineer, researcher, author, and philosophical thinker whose life&apos;s work is driven by the rigorous integration of <span className="italic">scientific reasoning</span> and <span className="italic">faith-based metaphysics</span>.
          </p>
        </div>
      </section>

      {/* 2. THE DUALITY OF DISCIPLINES */}
      <section className="relative py-32 bg-white px-4 sm:px-6 lg:px-12 border-y border-brand-void/5">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Engineering Panel */}
          <div className="flex flex-col group">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] bg-brand-void/10 overflow-hidden flex items-end justify-center mb-10 transition-all duration-700 ease-in-out">
              {/* Background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-slate/30 to-transparent blur-[80px] rounded-full mix-blend-multiply opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"></div>
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-void/20 via-brand-void/5 to-transparent z-10"></div>
              
              <img 
                src="/academic_image_transparent.png" 
                alt="The Engineer" 
                className="relative z-20 w-auto h-[90%] object-contain object-bottom drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 origin-bottom mix-blend-normal"
              />
              
              {/* Floating icon badge */}
              <div className="absolute top-6 left-6 z-30 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/50">
                <Zap className="w-5 h-5 text-brand-slate" />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tight text-brand-void mb-5">
                The Engineer
              </h2>
              <div className="space-y-6 font-sans text-lg text-brand-void/70 leading-relaxed font-medium">
                <p>
                  Professionally trained in electrical engineering, I approach technology not merely as a technical discipline, but as a primary platform for innovation to solve real societal challenges.
                </p>
                <p>
                  <span className="text-brand-void font-bold">Currently pursuing my Ph.D. in Electrical Engineering</span>, my deep research spans circular microstrip antennas and complex energy systems. I actively work on the theoretical design and practical execution of metamaterial integration for modern 5G and ultra-wideband communication systems.
                </p>
              </div>
            </div>
          </div>

          {/* Metaphysics Panel */}
          <div className="flex flex-col group mt-12 lg:mt-32">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] bg-brand-solar/10 overflow-hidden flex items-end justify-center mb-10 transition-all duration-700 ease-in-out">
              {/* Background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-solar/30 to-brand-dawn/10 blur-[80px] rounded-full mix-blend-multiply opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"></div>
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-void/20 via-brand-void/5 to-transparent z-10"></div>
              
              <img 
                src="/ministry_image_transparent.png" 
                alt="The Metaphysician" 
                className="relative z-20 w-auto h-[90%] object-contain object-bottom drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 origin-bottom mix-blend-normal"
              />

              {/* Floating icon badge */}
              <div className="absolute top-6 left-6 z-30 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/50">
                <Compass className="w-5 h-5 text-brand-solar" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tight text-brand-void mb-5">
                The Metaphysician
              </h2>
              <div className="space-y-6 font-sans text-lg text-brand-void/70 leading-relaxed font-medium">
                <p>
                  Alongside the lab and the lecture hall, I am an independent thinker exploring the most profound philosophical questions regarding human existence, consciousness, and divine principles.
                </p>
                <p>
                  Rooted heavily in <span className="text-brand-void font-bold">Christian Metaphysics</span>, my intellectual framework seeks to reconcile the strict methodologies of scientific inquiry with the boundless depths of spiritual understanding. It is a systematic, faith-centered insight into the deeper structures of good and evil.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE AUTHOR */}
      <section className="relative py-32 bg-brand-alabaster text-brand-void px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-brand-void/5">
        <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
             <div className="w-48 h-48 rounded-full border border-brand-solar/30 flex items-center justify-center animate-[spin_20s_linear_infinite] relative">
               <div className="absolute inset-2 border border-brand-dawn/20 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
               <BookOpen className="w-12 h-12 text-brand-solar animate-none" />
             </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight">
              The Storyteller
            </h2>
            <p className="text-xl md:text-2xl font-sans font-medium text-brand-void/70 leading-relaxed max-w-2xl">
              I have an inherent need to translate the profound realities of the human condition and my faith into narratives. Since writing my foundational novel <span className="text-brand-solar italic font-bold">Black Blood</span> in 1999, storytelling has been the lifeblood of how I interact with and explain the world. It is the very essence of my intellect and curiosity taking creative form.
            </p>
            <p className="text-lg font-sans font-light text-brand-void/70 leading-relaxed max-w-2xl">
              Today, my conceptual works unpack &quot;Spiritual Mathematics,&quot; strategies for non-carnal conflict resolution, and narrating the survival of humanity through our deepest trials—bringing abstract theories down to deeply personal human experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE 3 PILLARS */}
      <section className="relative py-32 bg-brand-alabaster px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-void mb-6">
              The Operating Principles
            </h2>
            <p className="max-w-2xl mx-auto font-sans text-xl text-brand-void/50 leading-relaxed font-medium">
              These fundamental elements interlock, forming the overarching philosophy that shapes every undertaking.
            </p>
            <div className="w-24 h-1.5 bg-brand-solar mx-auto mt-10 rounded-full opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            
            {/* Pillar 1 */}
            <div className="group relative flex flex-col space-y-8 p-10 bg-white shadow-xl shadow-brand-void/5 rounded-[2.5rem] overflow-hidden border border-brand-void/5 hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-solar/5 rounded-full blur-[80px] group-hover:bg-brand-solar/10 transition-colors duration-700 pointer-events-none"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-brand-void/10 to-transparent rounded-2xl flex items-center justify-center relative z-10 shadow-inner">
                <Flame className="w-10 h-10 text-brand-void group-hover:text-brand-solar transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-heading font-black uppercase tracking-widest text-brand-void">Faith</h3>
                <p className="font-sans text-lg font-medium text-brand-void/70 leading-relaxed">
                  A steadfast commitment to a Christ-centered worldview, providing the untouchable moral and spiritual foundation for all earthly endeavors.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative flex flex-col space-y-8 p-10 bg-white shadow-xl shadow-brand-void/5 rounded-[2.5rem] overflow-hidden border border-brand-void/5 hover:-translate-y-2 transition-transform duration-500 md:mt-12">
              <div className="absolute top-0 -left-12 w-64 h-64 bg-brand-dawn/5 rounded-full blur-[80px] group-hover:bg-brand-dawn/10 transition-colors duration-700 pointer-events-none"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-brand-void/10 to-transparent rounded-2xl flex items-center justify-center relative z-10 shadow-inner">
                <Hexagon className="w-10 h-10 text-brand-void group-hover:text-brand-dawn transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-heading font-black uppercase tracking-widest text-brand-void">Vision</h3>
                <p className="font-sans text-lg font-medium text-brand-void/70 leading-relaxed">
                  The relentless desire and capacity to see far beyond immediate, physical realities into the broader possibilities of human progress and divine truth.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative flex flex-col space-y-8 p-10 bg-white shadow-xl shadow-brand-void/5 rounded-[2.5rem] overflow-hidden border border-brand-void/5 hover:-translate-y-2 transition-transform duration-500 md:mt-24">
              <div className="absolute -bottom-10 right-0 w-64 h-64 bg-brand-slate/5 rounded-full blur-[80px] group-hover:bg-brand-slate/10 transition-colors duration-700 pointer-events-none"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-brand-void/10 to-transparent rounded-2xl flex items-center justify-center relative z-10 shadow-inner">
                <Zap className="w-10 h-10 text-brand-void group-hover:text-brand-slate transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-heading font-black uppercase tracking-widest text-brand-void">Innovation</h3>
                <p className="font-sans text-lg font-medium text-brand-void/70 leading-relaxed">
                  The practical, unyielding drive to translate abstract thought and faith into tangible, structural solutions—in engineering, writing, and life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
