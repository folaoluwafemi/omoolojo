import Link from 'next/link';

const books = [
  {
    title: "Soul-Aligned Intimacy",
    description: "Unlocking the sacred power of soul-aligned intimacy.",
    link: "https://selar.com/m/%E1%BB%8Cm%E1%BB%8D_Olojo",
    coverUrl: "" // Placeholder
  },
  {
    title: "Pleasure & Security",
    description: "Pleasure is indispensable, security is more significant.",
    link: "https://selar.com/m/%E1%BB%8Cm%E1%BB%8D_Olojo",
    coverUrl: ""
  },
  {
    title: "Models for Life Design",
    description: "Models for life design: circumstance vs time, soul synergy.",
    link: "https://selar.com/m/%E1%BB%8Cm%E1%BB%8D_Olojo",
    coverUrl: ""
  }
];

export default function BooksPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-brand-alabaster">
      <div className="mx-auto max-w-7xl w-full">
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-heading font-black uppercase tracking-tighter leading-[0.85] text-brand-void mb-6">
          Authored <br/> 
          <span className="text-brand-solar">Books</span>
        </h1>
        <p className="text-xl font-sans text-brand-slate max-w-2xl font-light mb-16 md:mb-24">
          A collection of works bridging theology, relationship dynamics, and life design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {books.map((book, idx) => (
            <Link key={idx} href={book.link} target="_blank" className="group flex flex-col items-start gap-4 border-0">
               {/* Cover Image Wrapper */}
               <div className="relative w-full aspect-[3/4] rounded-[2.5rem] bg-brand-void/5 flex flex-col justify-end p-8 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                  {book.coverUrl ? (
                    <img src={book.coverUrl} alt={book.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-void/30 to-transparent opacity-50 z-0"></div>
                      <span className="font-heading text-brand-void uppercase tracking-widest text-[0.65rem] z-10 opacity-40">
                        [ BOOK COVER PLACEHOLDER ]
                      </span>
                      <h3 className="font-heading font-bold text-2xl uppercase tracking-tighter text-brand-void z-10 mt-2 pr-4">{book.title}</h3>
                    </>
                  )}
               </div>

               {/* Meta Details */}
               <div className="flex flex-col space-y-2 px-2">
                 <p className="font-sans text-brand-slate font-light leading-relaxed text-sm md:text-base">
                   {book.description}
                 </p>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
