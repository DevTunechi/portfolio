'use client'

import Link from 'next/link'

export default function ResumePage() {
  const btnClass = "inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 border border-foreground rounded-full hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white transition-all duration-300";

  return (
    <div className="min-h-screen font-sans bg-background selection:bg-[#1e711e] selection:text-white">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 py-10 flex justify-between items-center border-b border-border">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-[#1e711e]">
          Olatunji
        </Link>
        <div className="flex gap-3">
          <Link href="/" className={btnClass}>← Back to Work</Link>
          <button onClick={() => window.print()} className={btnClass}>Print PDF</button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Resume Header */}
        <header className="mb-20">
          <h1 className="text-5xl font-serif italic mb-4">Resume</h1>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Backend Engineer / Full-Stack Developer</p>
        </header>

        {/* Experience Section (Tabular) */}
        <section className="grid gap-12">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#1e711e]">Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-t border-border pt-8">
            <div className="text-sm text-muted-foreground font-medium">Dec 2024 — Present</div>
            <div>
              <h3 className="text-xl font-bold">SwaysBankUS</h3>
              <p className="italic text-muted-foreground mb-4 font-serif">Backend Engineer</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 text-sm">
                <li>Built robust backend architecture for banking platforms using Node.js and TypeScript.</li>
                <li>Implemented secure RESTful APIs and integrated third-party financial services.</li>
                <li>Optimized database queries and ensured high availability for transactional data.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-t border-border pt-8">
            <div className="text-sm text-muted-foreground font-medium">2023 — 2024</div>
            <div>
              <h3 className="text-xl font-bold">WealthRun</h3>
              <p className="italic text-muted-foreground mb-4 font-serif">Full Stack Developer</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/80 text-sm">
                <li>Developed a crypto investment platform using Next.js and Node.js.</li>
                <li>Integrated real-time market data APIs and secure wallet authentication.</li>
                <li>Designed responsive dashboards for complex financial data visualization.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="grid gap-12 mt-32">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#1e711e]">Stack & Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8 text-sm">
            <div>
              <p className="font-bold mb-2">Languages</p>
              <p className="text-muted-foreground leading-relaxed">TypeScript, JavaScript, Python, SQL</p>
            </div>
            <div>
              <p className="font-bold mb-2">Backend</p>
              <p className="text-muted-foreground leading-relaxed">Node.js, Express, PostgreSQL, Prisma Schema</p>
            </div>
            <div>
              <p className="font-bold mb-2">Frontend</p>
              <p className="text-muted-foreground leading-relaxed">React, Next.js, Tailwind CSS, Framer Motion</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 mt-32 border-t border-border pt-8">
           <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#1e711e]">Education</h2>
           <div>
             <h3 className="text-lg font-bold uppercase">Bachelor of Science</h3>
             <p className="text-muted-foreground">Certificate in Software Engineering & Data Structures</p>
           </div>
        </section>
      </main>

      {/* Simple Resume Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-20 border-t border-border text-center">
         <a href="mailto:tunjidare2@yahoo.com" className="text-sm font-bold uppercase tracking-[0.4em] hover:text-[#1e711e] transition-colors">
            tunjidare2@yahoo.com
         </a>
      </footer>
    </div>
  )
}