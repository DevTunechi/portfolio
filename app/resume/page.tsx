'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Resume() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(dark))
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const techExperience = [
    {
      title: 'Full Stack Developer',
      company: 'EventFlowNG',
      period: 'Dec 2025 – Mar 2026',
      points: [
        'Built a SaaS event management platform from the ground up using Next.js, React, and TypeScript.',
        'Engineered QR-based guest verification processing check-ins in under 3 seconds with zero gatecrasher entry.',
        'Developed a precision catering module delivering exact meal counts before events begin.',
        'Replaced fragmented vendor WhatsApp communication with a unified in-app coordination system.',
      ],
    },
    {
      title: 'Backend Engineer',
      company: 'SwaysBankUS',
      period: 'Dec 2024 – Nov 2025',
      points: [
        'Built and maintained the backend infrastructure for a U.S.-based banking platform using Node.js.',
        'Designed and implemented secure, scalable REST APIs for core banking operations.',
        'Integrated third-party financial services and payment processors to extend platform functionality.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'WealthRun',
      period: '2023 – Present',
      points: [
        'Developed and maintained a crypto investment platform serving active users.',
        'Built responsive frontend with React and Next.js; engineered backend services with Node.js.',
        'Ensured platform reliability, security, and performance across full stack.',
      ],
    },
  ]

  const creativeExperience = [
    {
      title: 'Lead Videographer',
      company: 'Klala Films and Pictures',
      period: '2024 – 2025',
      points: [
        'Led videography team for high-profile events across Nigeria.',
        'Managed a team of 8 staff and coordinated multiple professional camera setups.',
        'Supervised editing workflow ensuring visual and audio quality consistency.',
      ],
    },
    {
      title: 'South-West Coordinator & Official Cinematographer',
      company: 'National Inter-School Music Competition & Academic Awards',
      period: '2013 – Present',
      points: [
        'Directed event coverage and cinematic documentation for national competitions.',
        'Handled planning, logistics, and coordination with secondary schools across the region.',
        'Managed post-production delivery and media archiving.',
      ],
    },
    {
      title: 'Studio Manager / Director of Photography',
      company: 'R.G.D Media Productions',
      period: '2014 – 2015',
      points: [
        'Directed music videos and short films.',
        'Oversaw equipment management and studio facility operations.',
        'Sourced and negotiated with clients for media production projects.',
      ],
    },
    {
      title: 'Manager / Social Media Handler',
      company: 'China Garden Restaurant',
      period: '2017 – 2021',
      points: [
        'Supervised daily operations and managed staff.',
        'Handled digital promotion and online presence for the restaurant.',
      ],
    },
  ]

  const certifications = [
    { name: 'AI Starter Kit', issuer: 'ALX Africa', year: 'Mar 2025' },
    { name: 'Foundations in Specialization', issuer: 'ALX Africa — Professional Development Skills for the Digital Age & Tech Career Specialization', year: 'Feb 2025' },
    { name: 'Agile Project Management', issuer: 'HP LIFE / HP Foundation', year: 'Feb 2025' },
    { name: 'Software Engineering — Back-End Specialization (12 Months)', issuer: 'ALX Africa / Holberton Inc', year: 'Nov 2024' },
    { name: 'File & Folder Management Using PowerShell', issuer: 'Udemy — Luxmi Narayan', year: 'Sep 2023' },
    { name: 'Soft-Skills Training', issuer: 'Jobberman Nigeria (in partnership with Mastercard Foundation & Young Africa Works)', year: 'Sep 2023' },
    { name: 'Cinematography', issuer: 'Akin Alabi Film Institute', year: '2013' },
    { name: 'CISCO Networking (CCNA)', issuer: 'Karrox Nigeria Limited', year: '2009' },
  ]

  const techSkills = ['React / Next.js', 'Node.js', 'TypeScript', 'REST APIs', 'SaaS Architecture', 'QR Systems']
  const creativeSkills = [
    'Camera Operation (Sony, Canon, Nikon, Blackmagic)', 'Lighting Setup & Composition',
    'Video Editing (Adobe Premiere Pro, CapCut)', 'Drone Filming & Aerial Coverage',
    'Storyboarding & Script Visualization', 'Team Leadership & On-Set Coordination',
  ]

  // Theme tokens — mirrors page.tsx exactly
  const bg         = dark ? 'bg-[#0f1310]'                  : 'bg-white'
  const text       = dark ? 'text-white'                     : 'text-slate-900'
  const subtext    = dark ? 'text-slate-300'                 : 'text-slate-700'
  const muted      = dark ? 'text-slate-400'                 : 'text-slate-500'
  const navText    = dark ? 'text-slate-300 hover:text-white': 'text-slate-600 hover:text-black'
  const hdrBdr     = dark ? 'border-slate-800'               : 'border-slate-100'
  const divider    = dark ? 'border-slate-800'               : 'border-slate-100'
  const toggleBtn  = dark
    ? 'border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700'
    : 'border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200'
  const roleTitle  = dark ? 'text-slate-100'                 : 'text-slate-800'
  const certName   = dark ? 'text-slate-100'                 : 'text-slate-800'
  const skillEngBg = dark ? 'bg-[#1a2a1a] border-[#2a3f2a] text-slate-200' : 'bg-[#f0fdf4] border-[#dcfce7] text-slate-700'
  const skillPrdBg = dark ? 'bg-slate-800 border-slate-700 text-slate-300'  : 'bg-slate-50 border-slate-200 text-slate-600'
  const skillLabel = dark ? 'text-slate-300'                 : 'text-slate-700'
  const footerCta  = dark
    ? 'border-slate-600 text-slate-200 hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
    : 'border-black text-black hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${bg} ${text}`}>

      {/* ── Header — identical structure to homepage ── */}
      <header className={`sticky top-0 z-50 ${bg} border-b ${hdrBdr} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">

          {/* Logo only */}
          <Link href="/" aria-label="Home" className="shrink-0">
            <img src="/logo-10.png" alt="Olatunji logo" className="h-11 w-auto" />
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-3 sm:gap-5 min-w-0">
            <a
              href="/#experience"
              className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${navText}`}
            >
              Work
            </a>
            <Link
              href="/resume"
              className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors text-[#1e711e]`}
            >
              Resume
            </Link>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${toggleBtn}`}
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            <a
              href="mailto:tunjidare2@yahoo.com"
              className="bg-[#1e711e] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#155315] transition-all whitespace-nowrap"
            >
              Let's talk
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-12">

        {/* ── Page Title ── */}
        <div className={`mb-14 border-b ${divider} pb-12`}>
          <p className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-4 ${muted}`}>Resume</p>
          <h2 className={`text-5xl md:text-6xl font-serif leading-[1.1] mb-7 ${text}`}>
            Oluwadare<br />Olatunji
          </h2>
          <p className={`text-[15px] leading-relaxed max-w-2xl ${subtext}`}>
            Full Stack Engineer & Creative Technologist. I build reliable digital products and capture compelling stories — 10+ years in visual production, 3+ years in software engineering.
          </p>
          <div className={`mt-7 flex flex-wrap gap-5 text-[12px] font-medium ${muted}`}>
            <a href="tel:+2348107467220" className="hover:text-[#1e711e] transition-colors">+234 810 746 7220</a>
            <a href="mailto:tunjidare2@yahoo.com" className="hover:text-[#1e711e] transition-colors">tunjidare2@yahoo.com</a>
            <a href="https://www.linkedin.com/in/olatunji-oluwadare/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e711e] transition-colors">linkedin.com/in/olatunji-oluwadare</a>
            <span>Based in Lagos, Nigeria</span>
          </div>
        </div>

        {/* ── Software Engineering ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-10 ${muted}`}>Software Engineering</p>
          <div className="space-y-12">
            {techExperience.map((role, idx) => (
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

        {/* ── Film & Production ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-10 ${muted}`}>Film & Production</p>
          <div className="space-y-12">
            {creativeExperience.map((role, idx) => (
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

        {/* ── Skills ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-10 ${muted}`}>Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className={`text-[12px] font-bold mb-4 uppercase tracking-[0.1em] ${skillLabel}`}>Engineering</p>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill, i) => (
                  <span key={i} className={`text-[11px] font-medium px-4 py-1.5 border rounded-full ${skillEngBg}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className={`text-[12px] font-bold mb-4 uppercase tracking-[0.1em] ${skillLabel}`}>Production</p>
              <div className="flex flex-wrap gap-2">
                {creativeSkills.map((skill, i) => (
                  <span key={i} className={`text-[11px] font-medium px-4 py-1.5 border rounded-full ${skillPrdBg}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className={`border-t ${divider} my-14`} />

        {/* ── Certifications ── */}
        <section className="mb-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-10 ${muted}`}>Certifications</p>
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

        {/* ── Footer CTA ── */}
        <div className={`text-center py-16 border-t ${divider}`}>
          <p className={`font-serif text-3xl md:text-4xl mb-10 leading-tight ${text}`}>
            Let's build something <br />
            <span className="italic text-[#1e711e]">worth remembering.</span>
          </p>
          <a
            href="mailto:tunjidare2@yahoo.com"
            className={`inline-block text-[11px] font-bold uppercase tracking-[0.4em] px-10 py-5 border rounded-full transition-all duration-300 ${footerCta}`}
          >
            Get in touch →
          </a>
          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-14 ${muted}`}>
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </div>
      </main>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(dark))
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const roles = [
    {
      id: 'EventFlowNG',
      title: 'Full Stack Developer',
      company: 'EventFlowNG',
      period: 'Dec 2025 – Mar 2026',
      description: 'Built EventFlowNG, a SaaS event management platform designed to eliminate common event-day chaos. Developed QR-based guest verification that processes check-ins in under 3 seconds, a precision catering module for exact pre-event meal counts, and a vendor coordination system to replace fragmented WhatsApp-based communication. Built with React, Next.js, and TypeScript.',
    },
    {
      id: 'SwaysBank',
      title: 'Backend Engineer',
      company: 'SwaysBankUS',
      period: 'Dec 2024 – Nov 2025',
      description: 'Built the backend for the banking platform using Node.js. Implemented secure APIs and integrated third-party services to enhance functionality.',
    },
    {
      id: 'WealthRun',
      title: 'Full Stack Developer',
      company: 'WealthRun Official Website',
      period: '2023 – Present',
      description: 'Developed and maintained a crypto investment platform for WealthRun using React and Next.js for frontend and Node.js for backend.',
    },
  ]

  const caseStudies = [
    {
      title: 'Every great event begins with precision.',
      tags: ['🚀 Self Project', 'SaaS', 'TypeScript'],
      imgLeft: '/eventflow-1.jpeg',
      imgRight: '/eventflow-2.jpeg',
      href: 'https://eventflowng.vercel.app',
    },
    {
      title: 'Crypto investments made easy, reliable and trustworthy for everyone.',
      tags: ['🚀 Self Project', 'Crypto', 'Investment'],
      imgLeft: '/1.jpeg',
      imgRight: '/2.jpeg',
      href: 'https://wealthrun.vercel.app',
    },
    {
      title: 'Easy to use online banking platform, hardcore backend.',
      tags: ['Self Project', 'Web Based', 'Finance'],
      imgLeft: '/3.jpeg',
      imgRight: '/4.jpeg',
      href: 'https://swaysbankonline.vercel.app',
    },
  ]

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

  const bg        = dark ? 'bg-[#0f1310]'               : 'bg-white'
  const text      = dark ? 'text-white'                  : 'text-slate-900'
  const subtext   = dark ? 'text-slate-300'              : 'text-slate-700'
  const cardBg    = dark ? 'bg-[#1a2a1a] border-[#2a3f2a]' : 'bg-[#f0fdf4] border-[#dcfce7]'
  const tagBg     = dark ? 'bg-[#1a2a1a] border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700'
  const navText   = dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'
  const divider   = dark ? 'divide-slate-800 border-slate-800' : 'divide-slate-200 border-slate-200'
  const roleTitle = dark ? 'text-slate-100'              : 'text-slate-800'
  const roleMeta  = dark ? 'text-slate-400'              : 'text-slate-600'
  const expandIcon= dark ? 'text-slate-500'              : 'text-slate-400'
  const footerBdr = dark ? 'border-slate-800'            : 'border-slate-200'
  const hdrBdr    = dark ? 'border-slate-800'            : 'border-slate-100'
  const resumeBtn = dark
    ? 'border-slate-600 text-slate-200 hover:bg-slate-800'
    : 'border-slate-400 text-slate-800 hover:bg-slate-50'
  const toggleBtn = dark
    ? 'border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700'
    : 'border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200'
  const footerCta = dark
    ? 'border-slate-600 text-slate-200 hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
    : 'border-black text-black hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
  const allBtn    = dark ? 'bg-white text-black' : 'bg-black text-white'

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${bg} ${text}`}>

      {/* ── Header ── */}
      <header className={`sticky top-0 z-50 ${bg} border-b ${hdrBdr} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">

          {/* Home — Logo only */}
          <Link href="/" aria-label="Home" className="shrink-0">
            <img
              src="/logo-10.png"
              alt="Olatunji logo"
              className="h-11 w-auto"
            />
          </Link>

          {/* Nav items */}
          <nav className="flex items-center gap-3 sm:gap-5 min-w-0">
            <a
              href="#experience"
              className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${navText}`}
            >
              Work
            </a>
            <Link
              href="/resume"
              className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${navText}`}
            >
              Resume
            </Link>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${toggleBtn}`}
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            <a
              href="mailto:tunjidare2@yahoo.com"
              className="bg-[#1e711e] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#155315] transition-all whitespace-nowrap"
            >
              Let's talk
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-10">

        {/* ── Hero ── */}
        <section className="mb-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-6">
          {/* Profile card */}
          <div className={`relative w-[260px] sm:w-[280px] p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.14)] border shrink-0 -rotate-2 transition-colors duration-300 ${dark ? 'bg-[#1a2a1a] border-slate-700' : 'bg-white border-slate-100'}`}>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-slate-200">
              <img src="/5.JPG" alt="Olatunji" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex justify-between items-center px-2 pb-1">
              <div>
                <p className={`text-[13px] font-bold leading-none ${text}`}>@DevTunechi</p>
                <p className="text-[11px] text-slate-400 mt-1">LinkedIn</p>
              </div>
              <a
                href="https://www.linkedin.com/in/olatunji-oluwadare/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:scale-105 transition-transform active:scale-95"
              >
                <span className="text-xs">‹</span> Connect
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-md text-center md:text-left">
            <h2 className={`text-[23px] md:text-[29px] font-medium leading-[1.5] ${text}`}>
              I'm Olatunji — I've spent 10+ years telling stories through a{' '}
              <span className="font-bold italic text-[#1e711e]">lens,</span> and the last few building the{' '}
              <span className="font-bold italic">software</span> that brings those stories to life.
            </h2>
            <div className="mt-8 flex justify-center md:justify-start gap-3 flex-wrap">
              <Link
                href="/resume"
                className={`px-8 py-3 rounded-full border text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${resumeBtn}`}
              >
                Resume
              </Link>
              <a
                href="https://github.com/DevTunechi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-slate-800 transition-colors"
              >
                About me
              </a>
            </div>
          </div>
        </section>

        {/* ── Case Studies ── */}
        <section className="mb-20">
          <h3 className={`text-3xl md:text-4xl font-serif text-center mb-14 ${text}`}>Selected case studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {caseStudies.map((study, idx) => (
              <motion.a
                key={idx}
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative cursor-pointer"
              >
                <div className={`relative h-[360px] w-full ${cardBg} rounded-[2.5rem] border flex justify-center items-end`}>
                  <motion.div
                    variants={{ rest: { opacity: 0, scale: 0.85 }, hover: { opacity: 1, scale: 1 } }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-4 right-4 z-40 bg-black text-white text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full"
                  >
                    Visit site ↗
                  </motion.div>

                  <motion.div
                    variants={{ rest: { y: -40, x: 25, rotate: -6, scale: 1 }, hover: { y: -80, x: -40, rotate: -12, scale: 1.05 } }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="relative z-30 w-[150px] aspect-[9/19] bg-black rounded-[2.2rem] border-[7px] border-black shadow-2xl overflow-hidden flex flex-col"
                  >
                    <PhoneStatusBar />
                    <div className="mt-8 w-full h-full overflow-hidden">
                      <img src={study.imgLeft} alt="App Screen" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-[60]" />
                  </motion.div>

                  <motion.div
                    variants={{ rest: { y: 30, x: -25, rotate: 6, scale: 1 }, hover: { y: -15, x: 58, rotate: 12, scale: 1.05 } }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="relative z-20 w-[150px] aspect-[9/19] bg-black rounded-[2.2rem] border-[7px] border-black shadow-2xl overflow-hidden flex flex-col ml-[-62px]"
                  >
                    <PhoneStatusBar />
                    <div className="mt-8 w-full h-full overflow-hidden">
                      <img src={study.imgRight} alt="App Screen" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-[60]" />
                  </motion.div>
                </div>

                <div className="mt-7 px-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag, i) => (
                      <span key={i} className={`text-[11px] font-semibold px-4 py-1.5 border rounded-full select-none ${tagBg}`}>{tag}</span>
                    ))}
                  </div>
                  <h4 className={`text-[15px] font-bold leading-[1.45] transition-colors group-hover:text-[#1e711e] ${text}`}>
                    {study.title}
                  </h4>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button className={`px-12 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform active:scale-95 shadow-md ${allBtn}`}>
              See all case studies
            </button>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="mb-20 scroll-mt-20">
          <h3 className={`text-[11px] uppercase tracking-[0.22em] font-bold mb-10 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Experience
          </h3>
          <div className={`divide-y border-y ${divider}`}>
            {roles.map((role) => (
              <div key={role.id} className="py-7">
                <button
                  onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                  className="w-full text-left flex justify-between items-baseline group"
                >
                  <div>
                    <h4 className={`text-xl sm:text-2xl font-serif italic group-hover:translate-x-2 transition-transform duration-300 ${roleTitle}`}>
                      {role.title}
                    </h4>
                    <p className={`text-[13px] mt-1.5 font-medium ${roleMeta}`}>
                      @ {role.company} — {role.period}
                    </p>
                  </div>
                  <span className={`text-2xl font-light ml-4 shrink-0 ${expandIcon}`}>
                    {expandedRole === role.id ? '−' : '+'}
                  </span>
                </button>
                {expandedRole === role.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className={`mt-5 leading-relaxed max-w-2xl text-[15px] ${subtext}`}
                  >
                    {role.description}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className={`text-center py-20 border-t ${footerBdr}`}>
          <p className={`font-serif text-3xl md:text-4xl mb-10 leading-tight ${text}`}>
            I build meaningful <br /> digital experiences.
          </p>
          <a
            href="mailto:tunjidare2@yahoo.com"
            className={`inline-block text-[11px] font-bold uppercase tracking-[0.4em] px-10 py-5 border rounded-full transition-all duration-300 ${footerCta}`}
          >
            Get in touch →
          </a>
          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-14 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </footer>
      </main>
    </div>
  )
}
