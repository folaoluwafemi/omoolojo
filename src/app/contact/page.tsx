import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster text-brand-void relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-solar/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-dawn/10 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <header className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-6">
            Let&apos;s <br /> <span className="text-brand-solar">Connect</span>
          </h1>
          <p className="text-xl font-sans text-brand-void/70 max-w-2xl font-medium leading-relaxed">
            Whether for research collaborations, production inquiries, or spiritual consulting, I am always open to exploring profound intersections.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-12">
            
            <a 
              href="mailto:iaoluwafemi@gmail.com" 
              className="group flex flex-col p-10 bg-white border border-brand-void/5 rounded-[2.5rem] hover:bg-brand-void/5 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8 cursor-pointer">
                <div className="p-4 bg-brand-solar/10 rounded-full">
                  <Mail className="w-8 h-8 text-brand-solar" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-brand-solar opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-brand-void mb-2">
                Email / Direct
              </h3>
              <p className="font-sans text-brand-void/70 text-lg font-medium">
                iaoluwafemi@gmail.com
              </p>
            </a>

            <Link 
              href="https://www.linkedin.com/in/israeladeolu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-10 bg-white border border-brand-void/5 rounded-[2.5rem] hover:bg-brand-void/5 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8 cursor-pointer">
                <div className="p-4 bg-brand-slate/10 rounded-full">
                  <Linkedin className="w-8 h-8 text-brand-slate" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-brand-slate opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-brand-void mb-2">
                Professional Network
              </h3>
              <p className="font-sans text-brand-void/70 text-lg font-medium">
                Connect on LinkedIn
              </p>
            </Link>

          </div>

          {/* Contact Form / Info card */}
          <div className="flex flex-col justify-between p-12 bg-white text-brand-void outline outline-1 outline-brand-void/5 rounded-[2.5rem] max-w-xl self-start">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-brand-solar w-6 h-6" />
                <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Current Base</h3>
              </div>
              <p className="font-sans text-brand-void/80 text-lg font-semibold border-l-4 border-brand-solar pl-4 py-2">
                Johannesburg, South Africa
              </p>
              <p className="font-sans text-brand-void/60 text-sm mt-4 font-medium max-w-xs">
                Available globally for digital collaborations, consulting, and editorial projects.
              </p>
            </div>
            
            <div className="w-full h-[1px] bg-brand-void/10 mb-12"></div>

            <div>
              <h4 className="font-heading font-bold uppercase tracking-tight text-brand-void mb-3">Response Time</h4>
              <p className="font-sans text-brand-void/70 font-medium leading-relaxed">
                Due to current teaching and research commitments, please allow 48-72 hours for a response. For urgent matters regarding music production stems or academic peer review deadlines, please note &quot;[URGENT]&quot; in the subject line.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
