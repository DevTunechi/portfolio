'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// ── Your self-assessed proficiency scores (sorted shortest → longest name) ───
const STACK: { name: string; score: number; color: string; bg: string }[] = [
  { name: 'C',              score: 56,    color: '#555555', bg: 'rgba(85,85,85,0.12)'     },
  { name: 'CSS',            score: 68,    color: '#563d7c', bg: 'rgba(86,61,124,0.12)'    },
  { name: 'PHP Laravel',    score: 47,    color: '#8892be', bg: 'rgba(136,146,190,0.12)'  },
  { name: 'HTML',           score: 55,    color: '#e34c26', bg: 'rgba(227,76,38,0.12)'    },
  { name: 'Python',         score: 88,    color: '#3572A5', bg: 'rgba(53,114,165,0.12)'   },
  { name: 'JavaScript',     score: 76.88, color: '#f1e05a', bg: 'rgba(241,224,90,0.15)'   },
  { name: 'PostgreSQL',     score: 73,    color: '#336791', bg: 'rgba(51,103,145,0.12)'   },
  { name: 'TypeScript',     score: 69.25, color: '#3178c6', bg: 'rgba(49,120,198,0.12)'   },
  { name: 'Prisma Schema',  score: 85,    color: '#0c344b', bg: 'rgba(12,52,75,0.15)'     },
]

function getLevelLabel(score: number): { label: string; color: string; dots: number } {
  if (score >= 80) return { label: 'Expert',       color: '#1e711e', dots: 4 }
  if (score >= 60) return { label: 'Advanced',     color: '#3178c6', dots: 3 }
  if (score >= 40) return { label: 'Intermediate', color: '#f59e0b', dots: 2 }
  return              { label: 'Beginner',      color: '#94a3b8', dots: 1 }
}

function TechStack({ dark }: { dark: boolean }) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 150)
    return () => clearTimeout(t)
  }, [])

  const muted   = dark ? 'text-slate-400' : 'text-slate-500'
  const barBg   = dark ? 'bg-slate-800'   : 'bg-slate-200'
  const textCol = dark ? 'text-white'     : 'text-slate-900'

  return (
    <section className="mb-20">
      <div className="flex items-end justify-between mb-10">
        <h3 className={`text-[11px] uppercase tracking-[0.22em] font-bold ${muted}`}>Tech Stack</h3>
        <a
          href="https://github.com/DevTunechi"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[10px] font-bold uppercase tracking-[0.15em] flex items-center gap-1.5 hover:text-[#1e711e] transition-colors ${muted}`}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          View on GitHub →
        </a>
      </div>

      {/* Cards — 1 col mobile, 2 col sm, 3 col lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACK.map((lang, i) => {
          const { label, color: lvlColor, dots } = getLevelLabel(lang.score)
          return (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: 'easeOut' }}
              className={`relative rounded-[1.5rem] border overflow-hidden`}
              style={{
                borderColor: `${lang.color}35`,
                background: dark ? '#111d11' : '#f8fafc',
              }}
            >
              {/* Gradient wash */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${lang.bg} 0%, transparent 65%)` }}
              />
              {/* Glow blob */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                style={{ backgroundColor: lang.color, opacity: 0.18 }}
              />

              <div className="relative p-5 flex flex-col gap-4" style={{ minHeight: '130px' }}>

                {/* Top: dot + name */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: lang.color, boxShadow: `0 0 8px ${lang.color}99` }}
                  />
                  <span className={`text-[15px] font-bold leading-none ${textCol}`}>{lang.name}</span>
                </div>

                {/* Score bar */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${muted}`}>Proficiency</span>
                    <span className="text-[13px] font-black tabular-nums" style={{ color: lang.color }}>
                      {lang.score % 1 === 0 ? lang.score : lang.score.toFixed(2)} / 100
                    </span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden ${barBg}`}>
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: animated ? `${lang.score}%` : '0%' }}
                      transition={{ duration: 1.2, delay: i * 0.06 + 0.15, ease: 'easeOut' }}
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>

                {/* Level dots */}
                <div className="flex items-center gap-2 mt-auto">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map(d => (
                      <span
                        key={d}
                        className="w-2 h-2 rounded-full transition-colors"
                        style={{
                          backgroundColor: d <= dots ? lvlColor : (dark ? '#334155' : '#e2e8f0'),
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: lvlColor }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Rainbow summary bar */}
      <div className="mt-6 rounded-full overflow-hidden h-2 flex">
        {STACK.map((lang, i) => (
          <motion.div
            key={lang.name}
            className="h-full"
            initial={{ width: '0%' }}
            animate={{ width: animated ? `${100 / STACK.length}%` : '0%' }}
            transition={{ duration: 1.2, delay: i * 0.06, ease: 'easeOut' }}
            style={{ backgroundColor: lang.color }}
            title={`${lang.name} — ${lang.score}/100`}
          />
        ))}
      </div>
    </section>
  )
}

const caseStudies = [
  {
    id: 'eventflow',
    title: 'Every great event begins with precision.',
    tags: ['Dev Tunechi', 'SaaS', 'TypeScript'],
    imgLeft: '/eventflow-1.jpeg',
    imgRight: '/eventflow-2.jpeg',
    href: 'https://eventflowng.vercel.app',
    github: 'https://github.com/DevTunechi/eventflow',
    name: 'EventFlowNG',
    problem: 'Nigerian event organizers were managing 300–500 guests with paper lists and WhatsApp screenshots. Gatecrashers walked in unchecked, caterers over-ordered by guesswork, and vendors were unreachable on event day. The result: chaos, waste, and no accountability.',
    stack: [
      { tech: 'Next.js', reason: 'Server-side rendering for fast load on mobile networks — most Nigerian event vendors are on mobile, often on 3G.' },
      { tech: 'TypeScript', reason: 'The QR validation logic had too many edge cases to trust untyped code. TypeScript caught bugs at compile time that would have caused silent check-in failures.' },
      { tech: 'PostgreSQL + Prisma', reason: 'Guest, vendor, event, and catering data are highly relational. Prisma gave type-safe query building that made complex joins readable and safe.' },
      { tech: 'Node.js + Express', reason: 'Clean REST API layer for the check-in scanner, vendor dashboard, and catering module — each operating independently without blocking each other.' },
    ],
    built: [
      'QR token generation per guest at registration — each token is unique to the guest and event, validated server-side at the gate.',
      'Check-in processes in under 3 seconds with real-time headcount updating for organizers.',
      'Catering module that locks in exact meal counts before the event starts, eliminating over-ordering.',
      'Vendor coordination dashboard replacing scattered WhatsApp threads — vendors confirm, update status, and receive briefs in-app.',
    ],
    differently: 'I would separate the vendor service into its own module from day one. It grew tightly coupled to the event model and required a full refactor when vendor requirements changed. Microservice thinking from the start would have saved significant rework.',
  },
  {
    id: 'luxproptyl',
    title: 'Property management reimagined for African landlords.',
    tags: ['Dev Tunechi', 'SaaS', 'Real Estate'],
    imgLeft: '/lux1.jpeg',
    imgRight: '/lux2.jpeg',
    href: 'https://luxproptyl.vercel.app',
    github: 'https://github.com/DevTunechi/luxprotyl',
    name: 'LuxPropyl',
    problem: 'Nigerian landlords managing multiple properties were operating entirely on phone calls, paper receipts, and memory. No rent history, no tenant records, no way to track overdue payments across properties without physically visiting each one.',
    stack: [
      { tech: 'Next.js', reason: 'Dashboard-heavy product that needed fast navigation between properties and tenants — App Router gave file-based routing that scaled cleanly as the dashboard grew.' },
      { tech: 'PostgreSQL + Prisma', reason: 'Landlord → Properties → Tenants → Rent Records is a deeply relational data model. Prisma made querying across this hierarchy clean and type-safe.' },
      { tech: 'Node.js + Express', reason: 'Lightweight API layer for rent submissions, alert triggers, and tenant communication — kept the backend simple and maintainable.' },
    ],
    built: [
      'Multi-property dashboard — landlords see all properties, occupancy status, and rent health at a glance.',
      'Tenant profiles with full history: move-in date, rent amounts, payment records, and notes.',
      'Automated overdue rent alerts triggered when payment deadlines pass.',
      'In-app landlord-tenant messaging replacing ad hoc phone calls for maintenance and payment queries.',
    ],
    differently: 'I would build mobile-first as a PWA from day one. The majority of Nigerian landlords access everything from a phone — the desktop-first approach meant I had to refactor layouts I had already built. That was avoidable.',
  },
  {
    id: 'wealthrun',
    title: 'Crypto investments made easy, reliable and trustworthy for everyone.',
    tags: ['Dev Tunechi', 'Crypto', 'Investment'],
    imgLeft: '/1.jpeg',
    imgRight: '/2.jpeg',
    href: 'https://wealthrun.vercel.app',
    github: 'https://github.com/DevTunechi/wealthrun',
    name: 'WealthRun',
    problem: 'The Nigerian crypto space is littered with platforms that look like scams — poor UI, no transparency, zero trust signals. WealthRun needed to feel legitimate and trustworthy from the first scroll, while actually delivering a functional investment tracking experience.',
    stack: [
      { tech: 'Next.js', reason: 'SEO matters for trust — a platform that appears in search with proper metadata signals legitimacy. SSR also meant faster first paint, reducing the "is this real?" hesitation.' },
      { tech: 'React', reason: 'Portfolio dashboards with live-updating figures needed reactive UI that rerendered efficiently without full page reloads.' },
      { tech: 'Node.js + Express', reason: 'Backend handles user auth, portfolio state, and price data fetching — async I/O meant concurrent users could query live prices without one blocking another.' },
      { tech: 'PostgreSQL', reason: 'Investment records, user portfolios, and transaction history needed ACID compliance — you cannot lose or corrupt financial records.' },
    ],
    built: [
      'Portfolio dashboard showing holdings, current value, and performance over time.',
      'Investment tracking with entry price, current price, and live P&L calculation.',
      'User authentication with secure session management.',
      'Admin panel for managing platform content and user oversight.',
    ],
    differently: 'I would implement WebSockets for live price updates instead of polling the API on an interval. Polling caused noticeable lag on low-bandwidth connections and added unnecessary server load — a persistent socket connection would have been cleaner and faster.',
  },
  {
    id: 'swaysbank',
    title: 'Easy to use online banking platform, hardcore backend.',
    tags: ['Dev Tunechi', 'Finance', 'Backend'],
    imgLeft: '/3.jpeg',
    imgRight: '/4.jpeg',
    href: 'https://swaysbankonline.vercel.app',
    github: 'https://github.com/DevTunechi/swaysbankus',
    name: 'SwaysBankUS',
    problem: 'A U.S.-based digital banking platform needed a backend that could handle account management, transactions, and third-party integrations securely — with no room for data inconsistency or auth vulnerabilities.',
    stack: [
      { tech: 'Node.js', reason: "Async I/O handles concurrent transaction requests without one user's request blocking another — critical for a banking platform where simultaneous operations are the norm." },
      { tech: 'Express', reason: 'Clean, structured REST API layer made it straightforward to isolate concerns: auth, accounts, transactions, and integrations each in their own route handlers.' },
      { tech: 'PostgreSQL', reason: 'ACID compliance is non-negotiable for financial data. Every transaction either fully commits or fully rolls back — no partial states, no phantom records.' },
    ],
    built: [
      'JWT authentication with refresh token rotation — access tokens expire short, refresh tokens rotate on use to limit exposure from token theft.',
      'Account management APIs: create, read, update account state with full audit trail.',
      'Transaction processing with database-level constraints preventing double-spend and overdraft edge cases.',
      'Third-party payment service integration for external transfers.',
    ],
    differently: 'I would implement event sourcing for the transaction ledger instead of direct DB mutations. Event sourcing means every state change is an immutable event — auditing, rollback, and debugging become dramatically easier. Direct mutations work, but they make "what happened and when" questions harder to answer.',
  },
]

export default function Home() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null)
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null)
  const [dark, setDark] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showHeaderContact, setShowHeaderContact] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)
  const headerContactRef = useRef<HTMLDivElement>(null)

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
      if (headerContactRef.current && !headerContactRef.current.contains(e.target as Node)) setShowHeaderContact(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const roles = [
    {
      id: 'EventFlowNG',
      title: 'Full Stack Developer',
      company: 'EventFlowNG',
      period: 'Dec 2025 – Mar 2026',
      description: 'Built EventFlowNG from scratch — a SaaS event management platform solving the chaos of large-scale Nigerian events. QR-based guest check-in, precision catering module, and a vendor coordination system that replaced fragmented WhatsApp communication.',
    },
    {
      id: 'LuxPropyl',
      title: 'Full Stack Developer',
      company: 'LuxPropyl',
      period: '2025',
      description: 'Built LuxPropyl, an all-in-one property management platform for African landlords. Multi-property dashboard, tenant profiles, automated rent overdue alerts, and in-app landlord-tenant messaging.',
    },
    {
      id: 'SwaysBank',
      title: 'Backend Engineer',
      company: 'SwaysBankUS',
      period: 'Dec 2024 – Nov 2025',
      description: 'Built the entire backend for a U.S.-based digital banking platform. JWT auth with refresh token rotation, ACID-compliant transaction processing, account management APIs, and third-party payment service integration.',
    },
    {
      id: 'WealthRun',
      title: 'Full Stack Developer',
      company: 'WealthRun',
      period: '2023 – Present',
      description: 'Full stack crypto investment platform — portfolio dashboard, live P&L tracking, user authentication, and admin panel. Built with Next.js frontend and Node.js/Express backend.',
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

  const bg        = dark ? 'bg-[#0f1310]' : 'bg-white'
  const text      = dark ? 'text-white'   : 'text-slate-900'
  const subtext   = dark ? 'text-slate-300' : 'text-slate-600'
  const cardBg    = dark ? 'bg-[#1a2a1a] border-[#2a3f2a]' : 'bg-[#f0fdf4] border-[#dcfce7]'
  const tagBg     = dark ? 'bg-[#1a2a1a] border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700'
  const navText   = dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'
  const divider   = dark ? 'divide-slate-800 border-slate-800' : 'divide-slate-200 border-slate-200'
  const roleTitle = dark ? 'text-slate-100' : 'text-slate-800'
  const roleMeta  = dark ? 'text-slate-400' : 'text-slate-600'
  const expandIcon= dark ? 'text-slate-500' : 'text-slate-400'
  const footerBdr = dark ? 'border-slate-800' : 'border-slate-200'
  const hdrBdr    = dark ? 'border-slate-800' : 'border-slate-100'
  const resumeBtn = dark ? 'border-slate-600 text-slate-200 hover:bg-slate-800' : 'border-slate-400 text-slate-800 hover:bg-slate-50'
  const toggleBtn = dark ? 'border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200'
  const expandBg  = dark ? 'bg-[#111d11] border-slate-800' : 'bg-slate-50 border-slate-100'
  const stackRow  = dark ? 'border-slate-800 divide-slate-800' : 'border-slate-200 divide-slate-100'
  const stackCell = dark ? 'bg-[#0f1310]' : 'bg-white'
  const popoverBg = dark ? 'bg-[#1a2a1a] border-slate-700' : 'bg-white border-slate-200'

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${bg} ${text}`}>

      {/* ── Header ── */}
      <header className={`sticky top-0 z-50 ${bg} border-b ${hdrBdr} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/" aria-label="Home" className="shrink-0">
            <img src="/logo-10.png" alt="Olatunji logo" className="h-11 w-auto" />
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4 min-w-0">
            <a href="#work" className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hidden sm:block ${navText}`}>Work</a>
            <Link href="/resume" className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1e711e]">Resume</Link>
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
            {/* Header contact popover */}
            <div className="relative" ref={headerContactRef}>
              <button
                onClick={() => setShowHeaderContact(!showHeaderContact)}
                className="bg-[#1e711e] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#155315] transition-all whitespace-nowrap"
              >
                Let's talk
              </button>
              <AnimatePresence>
                {showHeaderContact && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute top-full mt-3 right-0 rounded-2xl border shadow-xl px-7 py-5 flex gap-8 items-center z-50 ${popoverBg}`}
                  >
                    <a href="https://wa.me/+2348107467220" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>WhatsApp</span>
                    </a>
                    <a href="mailto:tunjidare2@yahoo.com" className="flex flex-col items-center gap-2 group">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md ${dark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                        <svg className="w-7 h-7 text-[#1e711e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Email</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-10">

        {/* ── Hero ── */}
        <section className="mb-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-6">
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
                className="bg-[#0077b5] text-white text-[11px] font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:scale-105 transition-transform active:scale-95"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="max-w-md text-center md:text-left">
            <h2 className={`text-[23px] md:text-[29px] font-medium leading-[1.7] ${text}`}>
              I'm Olatunji. I write code with intention —{' '}
              <span className="font-bold italic text-[#1e711e]">no bloated stacks,</span>{' '}
              no shortcuts on security, no shipping what I wouldn't use myself.{' '}
              <span className="font-bold italic">Engineering is a craft.</span>{' '}
              I take it seriously.
            </h2>
            <div className="mt-8 flex justify-center md:justify-start gap-3 flex-wrap">
              <Link href="/resume" className={`px-8 py-3 rounded-full border text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${resumeBtn}`}>
                Resume
              </Link>
              <a
                href="https://github.com/DevTunechi"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] flex items-center gap-2 transition-colors ${dark ? 'bg-white text-black hover:bg-slate-200' : 'bg-black text-white hover:bg-slate-800'}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ── Case Studies ── */}
        <section id="work" className="mb-20 scroll-mt-20">
          <h3 className={`text-3xl md:text-4xl font-serif text-center mb-14 ${text}`}>Selected case studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {caseStudies.map((study) => (
              <div key={study.id} className="flex flex-col">
                {/* Card */}
                <motion.div
                  initial="rest"
                  whileHover={expandedStudy === study.id ? 'rest' : 'hover'}
                  animate="rest"
                  className="group relative cursor-pointer"
                  onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
                >
                  <div className={`relative h-[320px] sm:h-[360px] w-full ${cardBg} rounded-[2.5rem] border flex justify-center items-end overflow-hidden`}>
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="absolute top-4 right-4 z-40 bg-black text-white text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Visit site ↗
                    </a>
                    <motion.div
                      variants={{ rest: { y: -40, x: 25, rotate: -6 }, hover: { y: -80, x: -40, rotate: -12 } }}
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                      className="relative z-30 w-[140px] sm:w-[150px] aspect-[9/19] bg-black rounded-[2.2rem] border-[7px] border-black shadow-2xl overflow-hidden flex flex-col"
                    >
                      <PhoneStatusBar />
                      <div className="mt-8 w-full h-full overflow-hidden">
                        <img src={study.imgLeft} alt="App Screen" className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-[60]" />
                    </motion.div>
                    <motion.div
                      variants={{ rest: { y: 30, x: -25, rotate: 6 }, hover: { y: -15, x: 58, rotate: 12 } }}
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                      className="relative z-20 w-[140px] sm:w-[150px] aspect-[9/19] bg-black rounded-[2.2rem] border-[7px] border-black shadow-2xl overflow-hidden flex flex-col ml-[-62px]"
                    >
                      <PhoneStatusBar />
                      <div className="mt-8 w-full h-full overflow-hidden">
                        <img src={study.imgRight} alt="App Screen" className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-[60]" />
                    </motion.div>
                  </div>

                  <div className="mt-6 px-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.tags.map((tag, i) => (
                        <span key={i} className={`text-[11px] font-semibold px-4 py-1.5 border rounded-full select-none ${tagBg}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h4 className={`text-[15px] font-bold leading-[1.45] transition-colors group-hover:text-[#1e711e] ${text}`}>
                        {study.title}
                      </h4>
                    </div>
                    <button
                      className={`mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                        expandedStudy === study.id
                          ? 'bg-[#1e711e] border-[#1e711e] text-white'
                          : dark
                            ? 'border-slate-600 text-slate-200 hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
                            : 'border-slate-800 text-slate-800 hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
                      }`}
                    >
                      {expandedStudy === study.id ? (
                        <>Hide case study <span className="text-base leading-none">−</span></>
                      ) : (
                        <>Read case study <span className="text-base leading-none">→</span></>
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Expandable panel */}
                <AnimatePresence>
                  {expandedStudy === study.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-4 rounded-[1.5rem] border p-5 sm:p-7 flex flex-col gap-7 ${expandBg}`}>

                        {/* Problem */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e711e] mb-2">The Problem</p>
                          <p className={`text-[14px] leading-[1.75] ${subtext}`}>{study.problem}</p>
                        </div>

                        {/* Stack */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e711e] mb-3">Stack & Why</p>
                          <div className={`rounded-xl overflow-hidden border divide-y ${stackRow}`}>
                            {study.stack.map((s, i) => (
                              <div key={i} className={`flex flex-col sm:flex-row gap-1 sm:gap-4 px-4 py-3 ${stackCell}`}>
                                <span className="text-[12px] font-bold text-[#1e711e] shrink-0 sm:w-36">{s.tech}</span>
                                <span className={`text-[13px] leading-[1.65] ${subtext}`}>{s.reason}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* What I built */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e711e] mb-3">What I Built</p>
                          <ul className="flex flex-col gap-2.5">
                            {study.built.map((b, i) => (
                              <li key={i} className={`flex gap-3 text-[13px] leading-[1.7] ${subtext}`}>
                                <span className="text-[#1e711e] font-bold shrink-0 mt-0.5">→</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What I'd do differently */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e711e] mb-2">What I'd Do Differently</p>
                          <p className={`text-[13px] leading-[1.75] ${subtext}`}>{study.differently}</p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-1">
                          <a
                            href={study.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-3 rounded-full bg-[#1e711e] text-white hover:bg-[#155315] transition-colors"
                          >
                            Live site ↗
                          </a>
                          <a
                            href={study.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-3 rounded-full border flex items-center gap-2 transition-colors ${dark ? 'border-slate-600 text-slate-200 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            GitHub
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <TechStack dark={dark} />

        {/* ── Experience ── */}
        <section id="experience" className="mb-20 scroll-mt-20">
          <h3 className={`text-[11px] uppercase tracking-[0.22em] font-bold mb-10 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Experience</h3>
          <div className={`divide-y border-y ${divider}`}>
            {roles.map((role) => (
              <div key={role.id} className="py-7">
                <button
                  onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                  className="w-full text-left flex justify-between items-baseline group"
                >
                  <div>
                    <h4 className={`text-xl sm:text-2xl font-serif italic group-hover:translate-x-2 transition-transform duration-300 ${roleTitle}`}>{role.title}</h4>
                    <p className={`text-[13px] mt-1.5 font-medium ${roleMeta}`}>@ {role.company} — {role.period}</p>
                  </div>
                  <span className={`text-2xl font-light ml-4 shrink-0 ${expandIcon}`}>{expandedRole === role.id ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {expandedRole === role.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className={`mt-5 leading-relaxed max-w-2xl text-[15px] ${subtext}`}>{role.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className={`text-center py-20 border-t ${footerBdr}`}>
          <p className={`font-serif text-3xl md:text-4xl mb-10 leading-tight ${text}`}>
            I build meaningful <br /> digital experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Get in touch — contact popover */}
            <div className="relative" ref={contactRef}>
              <button
                onClick={() => setShowContact(!showContact)}
                className={`text-[11px] font-bold uppercase tracking-[0.4em] px-10 py-5 border rounded-full transition-all duration-300 ${dark ? 'border-slate-600 text-slate-200 hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white' : 'border-black text-black hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'}`}
              >
                Get in touch →
              </button>

              <AnimatePresence>
                {showContact && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 rounded-2xl border shadow-xl px-7 py-5 flex gap-8 items-center z-50 ${popoverBg}`}
                  >
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/+2348107467220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>WhatsApp</span>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:tunjidare2@yahoo.com"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md ${dark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                        <svg className="w-7 h-7 text-[#1e711e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Email</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Also a Cinematographer */}
            <Link
              href="/video"
              className={`text-[11px] font-bold uppercase tracking-[0.25em] px-8 py-5 border rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${dark ? 'border-slate-700 text-slate-400 hover:border-[#1e711e] hover:text-[#1e711e]' : 'border-slate-300 text-slate-500 hover:border-[#1e711e] hover:text-[#1e711e]'}`}
            >
              🎬 Also a Cinematographer
            </Link>
          </div>

          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-14 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </footer>
      </main>
    </div>
  )
}
