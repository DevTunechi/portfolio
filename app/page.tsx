'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null)

  const roles = [
    {
      id: 'SwaysBank',
      title: 'Backend Engineer',
      company: 'SwaysBankUS',
      period: 'Dec 2024 - Present',
      description: 'Built the backend for the banking platform using Node.js. Implemented secure APIs and integrated third-party services to enhance functionality.',
    },
    {
      id: 'WealthRun',
      title: 'Full Stack Developer',
      company: 'WealthRun Official Website',
      period: '2023 - Present',
      description: 'Developed and maintained a crypto investment platform for WealthRun using React and Next.js for frontend and Node.js for backend.',
    }
  ]

  const caseStudies = [
    {
      title: 'Crypto investments made easy, reliable and trustworthy for everyone.',
      tags: ['🚀Shipped product', 'Dashboard', 'Marketplace'],
      imgLeft: '/1.jpeg',
      imgRight: '/2.jpeg',
    },
    {
      title: 'Easy to use online banking platform, hardcore backend.',
      tags: ['🚀Shipped product', 'Web Based', 'Finance'],
      imgLeft: '/3.jpeg',
      imgRight: '/4.jpeg',
    },
  ]

  const navItemClass = "text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-black transition-colors";
  const talkBtnClass = "bg-[#1e711e] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-[#155315] transition-all";
  const tagClass = "text-[11px] font-medium px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600 select-none shadow-sm";

  const PhoneStatusBar = () => (
    <div className="absolute top-0 left-0 w-full px-5 pt-4 flex justify-between items-center z-50 text-[7px] font-bold text-white bg-black/10 backdrop-blur-sm">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span>5G</span>
        <div className="w-3.5 h-1.5 border border-white/60 rounded-[1px] relative flex items-center px-[0.5px]">
          <div className="bg-white h-[2px] w-full rounded-[0.5px]"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-white text-foreground">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold tracking-tight text-[#1e711e]">
          Olatunji
        </h1>
        <nav className="flex items-center gap-8">
          <Link href="/" className={navItemClass}>Work</Link>
          <Link href="/resume" className={navItemClass}>Resume</Link>
          <a href="mailto:tunjidare2@yahoo.com" className={talkBtnClass}>Let's talk</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Profile / Hero Section */}
        <section className="mb-48 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          {/* Profile Card */}
          <div className="relative w-[300px] bg-white p-3 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100 -rotate-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
               <img src="/5.JPG" alt="Olatunji" className="w-full h-full object-cover" />
            </div>
            <div className="mt-5 flex justify-between items-center px-2 pb-1">
              <div>
                <p className="text-[13px] font-bold text-slate-900 leading-none">@kunledare</p>
                <p className="text-[10px] text-slate-400 mt-1">LinkedIn</p>
              </div>
              <a 
                href="https://www.linkedin.com/in/olatunji-oluwadare/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white text-[11px] font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform active:scale-95"
              >
                <span className="text-xs">‹</span> Connect
              </a>
            </div>
          </div>

          {/* Intro Text - Updated per request */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-[26px] md:text-[32px] font-medium leading-[1.4] text-slate-800">
              I’m Olatunji, a backend engineer who solves problems by understanding people and turning <span className="font-bold italic text-[#1e711e]">ideas</span> into <span className="font-bold italic">practical solutions.</span>
            </h2>
            <div className="mt-10 flex justify-center md:justify-start gap-4">
               <Link 
                href="/resume" 
                className="px-10 py-3.5 rounded-full border border-slate-200 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-slate-50 transition-colors text-center"
               >
                 Resume
               </Link>
               <a 
                href="https://github.com/DevTunechi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-3.5 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-slate-800 transition-colors text-center"
               >
                 About me
               </a>
            </div>
          </div>
        </section>

        {/* Selected Case Studies */}
        <section className="mb-40">
          <h3 className="text-4xl md:text-5xl font-serif text-center mb-24">Selected case studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={idx} 
                initial="rest" 
                whileHover="hover" 
                animate="rest"
                className="group relative"
              >
                <div className="relative h-[420px] w-full bg-[#f0fdf4] rounded-[2.5rem] border border-[#dcfce7] flex justify-center items-end">
                  <motion.div
                    variants={{
                      rest: { y: -40, x: 25, rotate: -6, scale: 1 },
                      hover: { y: -90, x: -45, rotate: -12, scale: 1.05 }
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="relative z-30 w-[170px] aspect-[9/19] bg-black rounded-[2.2rem] border-[7px] border-black shadow-2xl overflow-hidden flex flex-col"
                  >
                    <PhoneStatusBar />
                    <div className="mt-8 w-full h-full overflow-hidden">
                      <img src={study.imgLeft} alt="App Screen" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-[60]"></div>
                  </motion.div>

                  <motion.div
                    variants={{
                      rest: { y: 30, x: -25, rotate: 6, scale: 1 },
                      hover: { y: -20, x: 65, rotate: 12, scale: 1.05 }
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="relative z-20 w-[170px] aspect-[9/19] bg-black rounded-[2.2rem] border-[7px] border-black shadow-2xl overflow-hidden flex flex-col ml-[-70px]"
                  >
                    <PhoneStatusBar />
                    <div className="mt-8 w-full h-full overflow-hidden">
                      <img src={study.imgRight} alt="App Screen" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-[60]"></div>
                  </motion.div>
                </div>

                <div className="mt-12 px-2">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, i) => (
                      <span key={i} className={tagClass}>{tag}</span>
                    ))}
                  </div>
                  <h4 className="text-[22px] font-bold leading-[1.3] text-slate-900 underline decoration-slate-300 underline-offset-[6px] group-hover:decoration-[#1e711e] transition-all">
                    {study.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 flex justify-center">
            <button className="bg-black text-white px-14 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-black/10">
              See all case studies
            </button>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-40">
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-12">Experience</h3>
          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {roles.map((role) => (
              <div key={role.id} className="py-10">
                <button 
                  onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                  className="w-full text-left flex justify-between items-baseline group"
                >
                  <div>
                    <h4 className="text-2xl font-serif italic text-slate-800 group-hover:translate-x-2 transition-transform duration-300">{role.title}</h4>
                    <p className="text-[13px] text-slate-400 mt-2 font-medium">@ {role.company} — {role.period}</p>
                  </div>
                  <span className="text-2xl font-light text-slate-300">{expandedRole === role.id ? '−' : '+'}</span>
                </button>
                {expandedRole === role.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-8 text-slate-500 leading-relaxed max-w-2xl text-[15px]"
                  >
                    {role.description}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-40 border-t border-slate-100">
          <p className="font-serif text-4xl md:text-5xl mb-12 text-slate-900 leading-tight">
            I build meaningful <br /> digital experiences.
          </p>
          <a 
            href="mailto:tunjidare2@yahoo.com" 
            className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] px-12 py-6 border border-black rounded-full hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white transition-all duration-300"
          >
            Get in touch →
          </a>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-24">
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </footer>
      </main>
    </div>
  )
}