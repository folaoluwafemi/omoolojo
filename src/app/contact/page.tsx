export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-6">
        Contact
      </h1>
      <p className="text-xl font-sans text-brand-slate max-w-2xl mb-8">
        Get in touch for engineering consulting, speaking engagements, and creative collaborations.
      </p>
      <a href="mailto:hello@omoolojo.com" className="brutal-btn">
        hello@omoolojo.com
      </a>
    </div>
  );
}
