import { Flame, Compass, Zap, BookOpen, Hexagon } from 'lucide-react';

export default function MyStoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-alabaster text-brand-void overflow-hidden selection:bg-brand-solar selection:text-brand-void">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-32 pb-16">
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
            An electrical engineer, researcher, author, and philosophical thinker whose life's work is driven by the rigorous integration of <span className="italic">scientific reasoning</span> and <span className="italic">faith-based metaphysics</span>.
          </p>
        </div>
      </section>

      {/* 2. THE DUALITY OF DISCIPLINES */}
      <section className="relative py-32 bg-white px-4 sm:px-6 lg:px-12 border-y border-brand-void/5">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Engineering Panel */}
          <div className="flex flex-col space-y-8 group">
            <div className="w-16 h-16 rounded-2xl bg-brand-void/5 flex items-center justify-center group-hover:bg-brand-void transition-colors duration-500">
              <Zap className="w-8 h-8 text-brand-void group-hover:text-brand-solar transition-colors duration-500" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-black uppercase tracking-tight text-brand-void mb-4">
                The Engineer
              </h2>
              <div className="space-y-6 font-sans text-lg text-brand-void/70 leading-relaxed font-medium">
                <p>
                  Professionally trained in electrical engineering, I approach technology not merely as a technical discipline, but as a primary platform for innovation to solve real societal challenges.
                </p>
                <p>
                  My deep research spans <span className="text-brand-void font-bold">antenna engineering</span>, circular microstrip antennas, and complex energy systems. I actively work on the theoretical design and practical execution of metamaterial integration for modern 5G and ultra-wideband communication systems.
                </p>
              </div>
            </div>
          </div>

          {/* Metaphysics Panel */}
          <div className="flex flex-col space-y-8 group">
            <div className="w-16 h-16 rounded-2xl bg-brand-solar/10 flex items-center justify-center group-hover:bg-brand-solar transition-colors duration-500">
              <Compass className="w-8 h-8 text-brand-solar group-hover:text-brand-void transition-colors duration-500" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-black uppercase tracking-tight text-brand-void mb-4">
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
      <section className="relative py-32 bg-brand-void text-brand-alabaster px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Dark mode break for visual pacing (bento grid layout) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-dawn/5 blur-[120px] rounded-full pointer-events-none"></div>

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
            <p className="text-xl md:text-2xl font-sans font-medium text-brand-alabaster/70 leading-relaxed max-w-2xl">
              Storytelling is the bridge between raw logic and human morality. Since writing my foundational novel <span className="text-brand-solar italic font-bold">Black Blood</span> in 1999, I have continually explored social and moral themes.
            </p>
            <p className="text-lg font-sans font-light text-brand-alabaster/50 leading-relaxed max-w-2xl">
              Today, my conceptual works address "Spiritual Mathematics," strategies for non-carnal conflict resolution, and narrating the survival of humanity through our deepest trials.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE 3 PILLARS */}
      <section className="relative py-32 bg-brand-alabaster px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-brand-void">
              The Operating Principles
            </h2>
            <div className="w-24 h-2 bg-brand-solar mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Pillar 1 */}
            <div className="group flex flex-col items-center text-center space-y-6 p-8 rounded-[2rem] hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="w-20 h-20 bg-brand-void/5 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-solar/10 transition-all duration-500">
                <Flame className="w-8 h-8 text-brand-void group-hover:text-brand-solar" />
              </div>
              <h3 className="text-2xl font-heading font-black uppercase tracking-widest text-brand-void">Faith</h3>
              <p className="font-sans font-medium text-brand-void/70">
                A steadfast commitment to a Christ-centered worldview, providing the untouchable moral and spiritual foundation for all earthly endeavors.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group flex flex-col items-center text-center space-y-6 p-8 rounded-[2rem] hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 mt-0 md:mt-12">
              <div className="w-20 h-20 bg-brand-void/5 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-dawn/10 transition-all duration-500">
                <Hexagon className="w-8 h-8 text-brand-void group-hover:text-brand-dawn" />
              </div>
              <h3 className="text-2xl font-heading font-black uppercase tracking-widest text-brand-void">Vision</h3>
              <p className="font-sans font-medium text-brand-void/70">
                The relentless desire and capacity to see far beyond immediate, physical realities into the broader possibilities of human progress and divine truth.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group flex flex-col items-center text-center space-y-6 p-8 rounded-[2rem] hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 mt-0 md:mt-24">
              <div className="w-20 h-20 bg-brand-void/5 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-slate/10 transition-all duration-500">
                <Zap className="w-8 h-8 text-brand-void group-hover:text-brand-slate" />
              </div>
              <h3 className="text-2xl font-heading font-black uppercase tracking-widest text-brand-void">Innovation</h3>
              <p className="font-sans font-medium text-brand-void/70">
                The practical, unyielding drive to translate abstract thought and faith into tangible, structural solutions—in engineering, writing, and life.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
