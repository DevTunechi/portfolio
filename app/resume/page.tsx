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
    'Camera Operation (Sony, Canon, Nikon, Blackmagic)',
    'Lighting Setup & Composition',
    'Video Editing (Adobe Premiere Pro, CapCut)',
    'Drone Filming & Aerial Coverage',
    'Storyboarding & Script Visualization',
    'Team Leadership & On-Set Coordination',
  ]

  // Theme tokens
  const bg        = dark ? 'bg-[#0f1310]'                     : 'bg-white'
  const text      = dark ? 'text-white'                        : 'text-slate-900'
  const subtext   = dark ? 'text-slate-300'                    : 'text-slate-700'
  const muted     = dark ? 'text-slate-400'                    : 'text-slate-500'
  const navText   = dark ? 'text-slate-300 hover:text-white'   : 'text-slate-600 hover:text-black'
  const hdrBdr    = dark ? 'border-slate-800'                  : 'border-slate-100'
  const divider   = dark ? 'border-slate-800'                  : 'border-slate-100'
  const roleTitle = dark ? 'text-slate-100'                    : 'text-slate-800'
  const certName  = dark ? 'text-slate-100'                    : 'text-slate-800'
  const skillLabel= dark ? 'text-slate-300'                    : 'text-slate-700'
  const skillEng  = dark ? 'bg-[#1a2a1a] border-[#2a3f2a] text-slate-200' : 'bg-[#f0fdf4] border-[#dcfce7] text-slate-700'
  const skillPrd  = dark ? 'bg-slate-800 border-slate-700 text-slate-300'  : 'bg-slate-50 border-slate-200 text-slate-600'
  const toggleBtn = dark
    ? 'border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700'
    : 'border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200'
  const footerCta = dark
    ? 'border-slate-600 text-slate-200 hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
    : 'border-black text-black hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${bg} ${text}`}>

      {/* ── Header ── */}
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
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1e711e]"
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
            10+ years behind the lens. A few more building the software that brings stories to life. I move between cinematography and code because great products — like great films — are built on vision, precision, and people.
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
                  <span key={i} className={`text-[11px] font-medium px-4 py-1.5 border rounded-full ${skillEng}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className={`text-[12px] font-bold mb-4 uppercase tracking-[0.1em] ${skillLabel}`}>Production</p>
              <div className="flex flex-wrap gap-2">
                {creativeSkills.map((skill, i) => (
                  <span key={i} className={`text-[11px] font-medium px-4 py-1.5 border rounded-full ${skillPrd}`}>
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
