export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <section className="page-container text-center max-w-2xl">
        <span className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4 block">
          Welcome
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          <span className="text-gradient">Archftp</span>
        </h1>
        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
          Your new marketing site — built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary hover:bg-surface-secondary transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="page-container mt-32 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fast by Default",
              desc: "Static export with Next.js — ships as plain HTML and CSS. No server needed.",
            },
            {
              title: "Clean Design",
              desc: "Minimal, modern foundation. Easy to extend with your own brand and content.",
            },
            {
              title: "Ready to Deploy",
              desc: "Drop the `out/` folder on any static host — Vercel, Netlify, or plain S3.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="page-container mt-32 pt-8 border-t border-border text-center text-sm text-text-tertiary">
        <p>&copy; {new Date().getFullYear()} Archftp. All rights reserved.</p>
      </footer>
    </main>
  );
}
