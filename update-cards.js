const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(/className="relative w-full aspect-\[4\/5\] rounded-2xl bg-brand-void\/5 flex flex-col justify-end p-8 overflow-hidden transition-all duration-500 hover:shadow-\[0_20px_40px_-15px_rgba\\(0,0,0,0.15\\)\]"/g, 'className="relative w-full aspect-[4/5] rounded-3xl bg-brand-void/5 overflow-hidden border border-brand-void/10"');
content = content.replace(/<div className="absolute inset-0 bg-gradient-to-t from-brand-void\/50 to-transparent z-0"><\/div>/g, '');
content = content.replace(/<span className="font-heading font-bold text-white uppercase tracking-widest text-xs z-10 absolute top-6 left-6 drop-shadow-md">[\s\S]*?<\/span>/g, '');
content = content.replace(/<img (.*?) className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-700" \/>/g, '<img $1 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />');
content = content.replace(/<div className="absolute top-6 right-6(.*?)">/g, '<div className="absolute top-4 right-4 w-10 h-10 bg-white\/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-brand-void\/10 z-20 group-hover:scale-105 transition-transform duration-300">');
content = content.replace(/<Link href="(.*?)" className="group flex flex-col items-start gap-4 border-0">/g, '<Link href="$1" className="group flex flex-col items-start gap-6 border-0">');
// Note the backticks for regex replace group in powershell. Oh wait, inside string literals the syntax $1 might be replaced by powershell. So I used backtick $1.

fs.writeFileSync('src/app/page.tsx', content);
