'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoResume() {
  const [dark, setDark] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(dark))
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) setShowContact(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const experience = [
    {
      title: 'Lead Videographer & Video Editor',
      company: 'Klala Films and Pictures',
      period: '2024 – 2025',
      points: [
        'Led videography team for high-profile events across Nigeria, including weddings, brand shoots, and live concerts.',
        'Managed a crew of 8 staff across multiple professional camera setups (Sony, Canon, Blackmagic).',
        'Supervised full post-production workflow — colour grading, audio sync, and final delivery.',
        'Produced Instagram reels and event films for clients with audiences across Nigeria and the diaspora.',
      ],
    },
    {
      title: 'South-West Coordinator & Official Cinematographer',
      company: 'National Inter-School Music Competition & Academic Awards',
      period: '2013 – Present',
      points: [
        'Directed cinematic documentation for a national competition spanning secondary schools across South-West Nigeria.',
        'Managed event logistics, school coordination, and on-site crew for annual productions.',
        'Oversaw full post-production pipeline — editing, colour, archiving, and broadcast-ready delivery.',
      ],
    },
    {
      title: 'Studio Manager / Director of Photography',
      company: 'R.G.D Media Productions',
      period: '2014 – 2015',
      points: [
        'Directed music videos and short-form narrative films.',
        'Managed studio equipment, facility scheduling, and client acquisition.',
        'Oversaw lighting design, camera placement, and on-set creative decisions.',
      ],
    },
    {
      title: 'Cinematographer (Freelance)',
      company: 'Independent',
      period: '2013 – Present',
      points: [
        '10+ years of independent work across weddings, documentaries, brand films, and live event coverage.',
        'Produced 50+ video projects spanning animation, documentary series, fashion editorials, and worship events.',
        'Delivered work for clients including Adeyinka Alaseyori, Dr. AjokeSings, and multiple Lagos-based brands.',
      ],
    },
  ]

  const skills = [
    'Camera Operation (Sony, Canon, Nikon, Blackmagic)',
    'Adobe Premiere Pro',
    'CapCut',
    'Drone & Aerial Filming',
    'Multi-Camera Production',
    'Storyboarding & Script Visualization',
    'Colour Grading',
    'Audio Sync & Mixing',
    'Animation (2D)',
    'On-Set Crew Leadership',
    'Live Event Coverage',
    'Documentary Direction',
  ]

  const productions = [
    { title: 'LA Tunechi Entertainment', type: 'Brand Film', year: '2024' },
    { title: 'Adeola x Chima Wedding Montage', type: 'Wedding Film', year: '2024' },
    { title: 'Olatunji Martins — Showreel', type: 'Showreel', year: '2024' },
    { title: 'Prodigy Simplicity Fashion Shoot', type: 'Fashion / Editorial', year: '2024' },
    { title: 'Creative Direction Reel', type: 'Brand Film', year: '2024' },
    { title: 'Olat Farms Animated Advert', type: 'Animation / Commercial', year: '2024' },
    { title: 'Success Stories Webisodes', type: 'Documentary Series', year: '2024' },
    { title: 'Celebrating Music Icons — Adeyinka Alaseyori', type: 'Event Film', year: '2024' },
    { title: 'She Ministers Heaven — Dr. AjokeSings', type: 'Event Film', year: '2024' },
    { title: '#Raylovelives Wedding', type: 'Wedding Film', year: '2024' },
    { title: 'Conversation With Mrs Fam — Gen-Z Story', type: 'Documentary', year: '2023' },
    { title: 'Conversation With Mrs Fam — Domestic Abuse', type: 'Documentary', year: '2023' },
  ]

  const certifications = [
    { name: 'Cinematography', issuer: 'Akin Alabi Film Institute', year: '2013' },
    { name: 'Soft-Skills Training', issuer: 'Jobberman Nigeria (Mastercard Foundation & Young Africa Works)', year: 'Sep 2023' },
    { name: 'AI Starter Kit', issuer: 'ALX Africa', year: 'Mar 2025' },
  ]

  const bg        = dark ? 'bg-[#0a0a0a]'   : 'bg-[#f5f5f0]'
  const text      = dark ? 'text-white'      : 'text-slate-900'
  const subtext   = dark ? 'text-slate-300'  : 'text-slate-700'
  const muted     = dark ? 'text-slate-400'  : 'text-slate-500'
  const navText   = dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'
  const hdrBdr    = dark ? 'border-slate-800' : 'border-slate-200'
  const divider   = dark ? 'border-slate-800' : 'border-slate-200'
  const roleTitle = dark ? 'text-slate-100'  : 'text-slate-800'
  const certName  = dark ? 'text-slate-100'  : 'text-slate-800'
  const skillPill = dark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-300 text-slate-700'
  const prodRow   = dark ? 'border-slate-800' : 'border-slate-200'
  const toggleBtn = dark ? 'border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'border-slate-300 bg-slate-100 text-slate-600 hover:bg-slate-200'
  const popoverBg = dark ? 'bg-[#1a1a1a] border-slate-700' : 'bg-white border-slate-200'

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${bg} ${text}`}>

      {/* ── Header ── */}
      <header className={`sticky top-0 z-50 ${bg} border-b ${hdrBdr} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/video" aria-label="Home" className="shrink-0">
            <img src="/logo-10.png" alt="Olatunji logo" className="h-11 w-auto" />
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Link href="/video" className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hidden sm:block ${navText}`}>Productions</Link>
            <Link href="/resume/video" className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1e711e]">Resume</Link>
            <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${toggleBtn}`}>
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="5" /><path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              )}
            </button>
            <div className="relative" ref={contactRef}>
              <button onClick={() => setShowContact(!showContact)} className="bg-[#1e711e] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#155315] transition-all whitespace-nowrap">
                Let's talk
              </button>
              <AnimatePresence>
                {showContact && (
                  <motion.div initial={{ opacity: 0, y: -8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.95 }} transition={{ duration: 0.15 }} className={`absolute top-full mt-3 right-0 rounded-2xl border shadow-xl px-7 py-5 flex gap-8 items-center z-50 ${popoverBg}`}>
                    <a href="https://wa.me/+2348107467220" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${muted}`}>WhatsApp</span>
                    </a>
                    <a href="mailto:tunjidare2@yahoo.com" className="flex flex-col items-center gap-2 group">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md ${dark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                        <svg className="w-7 h-7 text-[#1e711e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${muted}`}>Email</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12">

        {/* ── Title ── */}
        <div className={`mb-14 border-b ${divider} pb-12`}>
          <p className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-4 ${muted}`}>Film & Production Resume</p>
          <h2 className={`text-5xl md:text-6xl font-serif leading-[1.1] mb-7 ${text}`}>
            Oluwadare<br />Olatunji
          </h2>
          <p className={`text-[15px] leading-relaxed max-w-2xl ${subtext}`}>
            I'm a cinematographer who believes every story deserves to be told well. Not just recorded. Crafted, paced, and felt. 10+ years behind the lens across weddings, documentaries, brand films, animation, and live events.
          </p>
          <div className={`mt-7 flex flex-wrap gap-5 text-[12px] font-medium ${muted}`}>
            <a href="tel:+2348107467220" className="hover:text-[#1e711e] transition-colors">+234 810 746 7220</a>
            <a href="mailto:tunjidare2@yahoo.com" className="hover:text-[#1e711e] transition-colors">tunjidare2@yahoo.com</a>
            <a href="https://www.instagram.com/kingtunechiz" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e711e] transition-colors">instagram.com/kingtunechiz</a>
            <a href="https://devtunechi.vercel.app/video" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e711e] transition-colors">devtunechi.vercel.app/video</a>
            <span>Lagos, Nigeria · Available for remote & travel</span>
          </div>
        </div>

        {/* ── Experience ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-10 ${muted}`}>Experience</p>
          <div className="space-y-12">
            {experience.map((role, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-3 md:gap-10">
                <div className="pt-0.5">
                  <p className={`text-[11px] font-bold uppercase tracking-[0.1em] leading-relaxed ${muted}`}>{role.period}</p>
                  <p className="text-[13px] font-semibold text-[#1e711e] mt-1">{role.company}</p>
                </div>
                <div>
                  <h4 className={`text-[19px] font-serif italic mb-3 ${roleTitle}`}>{role.title}</h4>
                  <ul className="space-y-2">
                    {role.points.map((point, i) => (
                      <li key={i} className={`text-[14px] leading-relaxed flex gap-3 ${subtext}`}>
                        <span className="text-[#1e711e] mt-1.5 shrink-0">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={`border-t ${divider} my-14`} />

        {/* ── Selected Productions ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-10 ${muted}`}>Selected Productions</p>
          <div className="space-y-0">
            {productions.map((prod, idx) => (
              <div key={idx} className={`flex justify-between items-baseline py-4 border-b ${prodRow}`}>
                <p className={`text-[14px] font-medium ${text}`}>{prod.title}</p>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <span className={`text-[11px] hidden sm:block ${muted}`}>{prod.type}</span>
                  <span className={`text-[11px] font-bold ${muted}`}>{prod.year}</span>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://devtunechi.vercel.app/video"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-6 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#1e711e] transition-colors ${muted}`}
          >
            Watch full showreel → devtunechi.vercel.app/video
          </a>
        </section>

        <div className={`border-t ${divider} my-14`} />

        {/* ── Skills ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-8 ${muted}`}>Skills & Tools</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className={`text-[11px] font-medium px-4 py-1.5 border rounded-full ${skillPill}`}>{skill}</span>
            ))}
          </div>
        </section>

        <div className={`border-t ${divider} my-14`} />

        {/* ── Certifications ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-10 ${muted}`}>Training & Certifications</p>
          <div className="space-y-5">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`flex justify-between items-baseline border-b ${divider} pb-5`}>
                <div>
                  <p className={`text-[15px] font-semibold ${certName}`}>{cert.name}</p>
                  <p className={`text-[12px] mt-1 ${muted}`}>{cert.issuer}</p>
                </div>
                <span className={`text-[12px] font-bold shrink-0 ml-4 ${muted}`}>{cert.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <div className={`text-center py-16 border-t ${divider}`}>
          <p className={`font-serif text-3xl md:text-4xl mb-8 leading-tight ${text}`}>
            Let's make something<br />
            <span className="italic text-[#1e711e]">worth watching.</span>
          </p>
          <Link
            href="/resume"
            className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 border rounded-full transition-all mb-14 ${dark ? 'border-slate-700 text-slate-400 hover:border-[#1e711e] hover:text-[#1e711e]' : 'border-slate-300 text-slate-500 hover:border-[#1e711e] hover:text-[#1e711e]'}`}
          >
            ⌨ View Engineering Resume
          </Link>
          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-6 ${muted}`}>
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </div>
      </main>
    </div>
  )
}
