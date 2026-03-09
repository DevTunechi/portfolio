'use client'

import Link from 'next/link'

export default function Resume() {
  const navItemClass = "text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-black transition-colors"
  const talkBtnClass = "bg-[#1e711e] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-[#155315] transition-all"

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
    { name: 'Backend Software Engineering', issuer: 'ALX Africa / Holberton College', year: '2024' },
    { name: 'Soft Skills Training', issuer: 'Jobberman', year: '2023' },
    { name: 'Cinematography', issuer: 'Akin Alabi Film Institute', year: '2013' },
    { name: 'CISCO Networking (CCNA)', issuer: 'Karrox Nigeria Limited', year: '2009' },
  ]

  const techSkills = [
    'React / Next.js', 'Node.js', 'TypeScript', 'REST APIs', 'SaaS Architecture', 'QR Systems',
  ]

  const creativeSkills = [
    'Camera Operation (Sony, Canon, Nikon, Blackmagic)', 'Lighting Setup & Composition',
    'Video Editing (Adobe Premiere Pro, CapCut)', 'Drone Filming & Aerial Coverage',
    'Storyboarding & Script Visualization', 'Team Leadership & On-Set Coordination',
  ]

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-white text-foreground">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-[#1e711e]">
          Olatunji
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className={navItemClass}>Work</Link>
          <Link href="/resume" className={navItemClass}>Resume</Link>
          <a href="mailto:tunjidare2@yahoo.com" className={talkBtnClass}>Let's talk</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Page Title */}
        <div className="mb-20 border-b border-slate-100 pb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Resume</p>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-[1.1] mb-8">
            Oluwadare<br />Olatunji
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
            Full Stack Engineer & Creative Technologist. I build reliable digital products and capture compelling stories — 10+ years in visual production, 3+ years in software engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[12px] text-slate-500 font-medium">
            <a href="tel:+2348107467220" className="hover:text-black transition-colors">+234 810 746 7220</a>
            <a href="mailto:tunjidare2@yahoo.com" className="hover:text-black transition-colors">tunjidare2@yahoo.com</a>
            <a href="https://www.linkedin.com/in/olatunji-oluwadare/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">linkedin.com/in/olatunji-oluwadare</a>
            <span className="text-slate-400">Based in Lagos, Nigeria</span>
          </div>
        </div>

        {/* Tech Experience */}
        <section className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Software Engineering</p>
          <div className="space-y-14">
            {techExperience.map((role, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                <div className="pt-0.5">
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.1em] leading-relaxed">{role.period}</p>
                  <p className="text-[13px] font-semibold text-[#1e711e] mt-1">{role.company}</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-serif italic text-slate-800 mb-4">{role.title}</h4>
                  <ul className="space-y-2">
                    {role.points.map((point, i) => (
                      <li key={i} className="text-[14px] text-slate-500 leading-relaxed flex gap-3">
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

        {/* Divider */}
        <div className="border-t border-slate-100 my-20" />

        {/* Creative Experience */}
        <section className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Film & Production</p>
          <div className="space-y-14">
            {creativeExperience.map((role, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                <div className="pt-0.5">
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.1em] leading-relaxed">{role.period}</p>
                  <p className="text-[13px] font-semibold text-[#1e711e] mt-1">{role.company}</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-serif italic text-slate-800 mb-4">{role.title}</h4>
                  <ul className="space-y-2">
                    {role.points.map((point, i) => (
                      <li key={i} className="text-[14px] text-slate-500 leading-relaxed flex gap-3">
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

        {/* Divider */}
        <div className="border-t border-slate-100 my-20" />

        {/* Skills */}
        <section className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[13px] font-bold text-slate-700 mb-5 uppercase tracking-[0.1em]">Engineering</p>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill, i) => (
                  <span key={i} className="text-[11px] font-medium px-4 py-1.5 bg-[#f0fdf4] border border-[#dcfce7] rounded-full text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[13px] font-bold text-slate-700 mb-5 uppercase tracking-[0.1em]">Production</p>
              <div className="flex flex-wrap gap-2">
                {creativeSkills.map((skill, i) => (
                  <span key={i} className="text-[11px] font-medium px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-100 my-20" />

        {/* Certifications */}
        <section className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">Certifications</p>
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-baseline border-b border-slate-50 pb-6">
                <div>
                  <p className="text-[15px] font-semibold text-slate-800">{cert.name}</p>
                  <p className="text-[12px] text-slate-400 mt-1">{cert.issuer}</p>
                </div>
                <span className="text-[12px] font-bold text-slate-400 shrink-0 ml-4">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-20 border-t border-slate-100">
          <p className="font-serif text-3xl md:text-4xl mb-10 text-slate-900 leading-tight">
            Let's build something <br />
            <span className="italic text-[#1e711e]">worth remembering.</span>
          </p>
          <a
            href="mailto:tunjidare2@yahoo.com"
            className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] px-12 py-6 border border-black rounded-full hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white transition-all duration-300"
          >
            Get in touch →
          </a>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-16">
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </div>
      </main>
    </div>
  )
}
