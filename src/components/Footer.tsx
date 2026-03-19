import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-screen w-full flex flex-col justify-center items-center bg-brand-void text-brand-alabaster relative px-4 text-center overflow-hidden">
      
      {/* Absolute positioning background blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-brand-solar/10 blur-[100px] rounded-[100%] pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center space-y-8 max-w-2xl mt-16">
        <span className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-none">
          Ọmọ <br /> Ọlọ́jọ́
        </span>
        <p className="font-sans text-xl md:text-2xl font-light text-brand-alabaster/60 mb-8">
          A visionary architect of the technical and the theological.
        </p>

        <div className="flex gap-12 font-heading text-sm md:text-base uppercase tracking-widest mt-12">
          <Link href="/contact" className="text-brand-alabaster/70 hover:text-brand-solar transition-colors">
            Get in Touch
          </Link>
          <Link href="/my-story" className="text-brand-alabaster/70 hover:text-brand-solar transition-colors">
            Read the Story
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center text-xs font-heading tracking-widest text-brand-alabaster/30 uppercase">
        <p>© {new Date().getFullYear()} Omo Olojo Ltd.</p>
      </div>

    </footer>
  );
}
