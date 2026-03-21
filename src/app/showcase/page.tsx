import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ShowcasePage() {
  const showcaseItems = [
    {
      title: "The Scholar",
      description: "Research in smart agriculture and telecommunications engineering.",
      href: "/academic",
      tag: "Academic",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    },
    {
      title: "The Artist",
      description: "Original music composition, audio production, and published works.",
      href: "/creative",
      tag: "Creative",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
    },
    {
      title: "The Author",
      description: "Exploring legacy, spirituality, and systemic thought.",
      href: "/books",
      tag: "Books",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80",
    },
    {
      title: "The Teacher",
      description: "Mentoring the next generation in engineering and applied logic.",
      href: "/resources",
      tag: "Resources",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster text-brand-void">
      <div className="mx-auto max-w-7xl w-full">
        
        <header className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-6">
            The <br /> <span className="text-brand-solar">Showcase</span>
          </h1>
          <p className="text-xl font-sans text-brand-void/80 max-w-2xl font-medium leading-relaxed">
            A unified portfolio mapping the intersections between engineering precision, creative expression, and spiritual architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {showcaseItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="group flex flex-col gap-6 w-full"
            >
              {/* Image Container with precise aspect ratio */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-void/5">
                {/* Tag Overlay */}
                <div className="absolute top-6 left-6 z-20 flex items-center justify-center px-4 py-2 bg-brand-void/10 backdrop-blur-md rounded-full border border-brand-void/20 text-brand-void text-xs font-heading font-bold uppercase tracking-widest">
                  {item.tag}
                </div>
                
                {/* Arrow Overlay */}
                <div className="absolute top-6 right-6 z-20 flex items-center justify-center w-12 h-12 bg-brand-solar text-brand-void rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Soft gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-void/60 via-transparent to-transparent opacity-50"></div>
              </div>
              
              {/* Meta Data Layer sitting outside the image */}
              <div className="flex flex-col gap-2 px-2">
                <h3 className="font-heading font-black text-3xl uppercase tracking-tighter text-brand-void group-hover:text-brand-solar transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-brand-void/70 font-medium text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
