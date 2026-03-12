'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const youtubeProductions = [
  {
    title: 'LA Tunechi Entertainment',
    category: 'Brand / Service',
    description: 'Service description film for LA Tunechi Entertainment — brand storytelling through cinematic visuals.',
    videoId: '51Fr28dy_cQ',
    tags: ['Brand Film', 'Entertainment'],
  },
  {
    title: 'Adeola x Chima Wedding Montage',
    category: 'Wedding Film',
    description: 'An intimate, beautifully crafted wedding montage capturing love, family and celebration.',
    videoId: 'qZZnnTYcS4w',
    tags: ['Wedding', 'Montage'],
  },
  {
    title: 'Olatunji Martins — Showreel',
    category: 'Brand / Service',
    description: 'A curated showreel of cinematic work — direction, shooting and editing across multiple genres and formats.',
    videoId: '8k6q67pNqNI',
    tags: ['Showreel', 'Direction'],
  },
  {
    title: 'Prodigy Simplicity Fashion Shoot',
    category: 'Fashion / Editorial',
    description: 'Fashion film for Prodigy Simplicity — clean aesthetics, strong visual direction and editorial pacing.',
    videoId: '2arZb-QlvVg',
    tags: ['Fashion', 'Editorial'],
  },
  {
    title: 'Creative Direction Reel',
    category: 'Brand / Service',
    description: 'A visual narrative of creative direction work — concept to screen, across events, brands and documentary.',
    videoId: '9LNus6YFcbo',
    tags: ['Creative Direction', 'Reel'],
  },
  {
    title: 'Olat Farms — Animated Advert',
    category: 'Animation / Commercial',
    description: 'Animated commercial for Olat Farms — blending motion graphics with brand messaging.',
    videoId: '79qyjhzh9sI',
    tags: ['Animation', 'Commercial'],
  },
  {
    title: 'Success Stories Webisodes',
    category: 'Documentary Series',
    description: 'A web series profiling real success stories — structured storytelling, interview direction and post-production.',
    videoId: 'j2P93JFhtxc',
    tags: ['Documentary', 'Series'],
  },
  {
    title: 'Birthday Wish Animation',
    category: 'Animation',
    description: 'Short-form animated piece — creative concept, visual design and motion execution.',
    videoId: 'enMGM81Uidg',
    tags: ['Animation', 'Short-form'],
  },
  {
    title: '#Raylovelives Wedding',
    category: 'Wedding Film',
    description: 'Full wedding film capturing the emotion and grandeur of the day from ceremony to reception.',
    videoId: 'SauwkwqJl8s',
    tags: ['Wedding', 'Event'],
  },
  {
    title: 'Conversation With Mrs Fam — A Gen-Z Story',
    category: 'Documentary Series',
    description: 'Episode exploring generational perspectives — candid direction, intimate framing and thoughtful editing.',
    videoId: 'hQUGX809avE',
    tags: ['Documentary', 'Interview'],
  },
  {
    title: 'Conversation With Mrs Fam — Rotary Governor',
    category: 'Documentary Series',
    description: 'Leadership and community conversation with a Rotary Governor — professional interview production.',
    videoId: 'z3cGgxvpxUM',
    tags: ['Documentary', 'Interview'],
  },
  {
    title: 'Conversation With Mrs Fam — Domestic Abuse',
    category: 'Documentary Series',
    description: 'Sensitively produced episode on domestic abuse — purposeful, impact-driven storytelling.',
    videoId: 'TrD40Of9h-w',
    tags: ['Documentary', 'Social Impact'],
  },
]

const instagramEvents = [
  {
    title: 'Studio Video & Photo Shoot',
    reelId: 'DTRKr7rCDiO',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DTRKr7rCDiO/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:calc(100% - 2px);"></blockquote>`,
  },
  {
    title: 'Family Celebration Shoot',
    reelId: 'DTSb4d-jD-v',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DTSb4d-jD-v/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:calc(100% - 2px);"></blockquote>`,
  },
  {
    title: 'An Unveiling Fit For Royalty',
    reelId: 'DS2qokcjMu0',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DS2qokcjMu0/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:calc(100% - 2px);"></blockquote>`,
  },
  {
    title: 'A Union Blessed By Culture & History',
    reelId: 'DSmVm7hDHdN',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DSmVm7hDHdN/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:calc(100% - 2px);"></blockquote>`,
  },
  {
    title: 'She Ministers Heaven — Dr. AjokeSings',
    reelId: 'DSPa8F0kYRe',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DSPa8F0kYRe/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:calc(100% - 2px);"></blockquote>`,
  },
  {
    title: 'Celebrating Music Icons — Adeyinka Alaseyori',
    reelId: 'DNoM0avROIJ',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DNoM0avROIJ/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:calc(100% - 2px);"></blockquote>`,
  },
]

// Profile toggle — shared component
function ProfileToggle({ active }: { active: 'engineering' | 'video' }) {
  return (
    <div className="flex items-center rounded-full border border-slate-700 bg-slate-900 p-0.5">
      <Link
        href="/"
        className={`text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full transition-all ${
          active === 'engineering'
            ? 'bg-[#1e711e] text-white'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        ⌨ Engineering
      </Link>
      <Link
        href="/video"
        className={`text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full transition-all ${
          active === 'video'
            ? 'bg-[#1e711e] text-white'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        🎬 Video
      </Link>
    </div>
  )
}

// YouTube thumbnail with multi-quality fallback
function YTThumbnail({ videoId, title, onPlay }: { videoId: string; title: string; onPlay: () => void }) {
  const [src, setSrc] = useState(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)

  return (
    <div className="relative w-full aspect-video bg-black group cursor-pointer" onClick={onPlay}>
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover"
        onError={() => setSrc(`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`)}
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function VideoPage() {
  const [dark, setDark] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
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

  // Close both popovers on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) setShowContact(false)
      if (headerContactRef.current && !headerContactRef.current.contains(e.target as Node)) setShowHeaderContact(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Load Instagram embed script and process blockquotes
  useEffect(() => {
    const loadIG = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process()
        return
      }
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        if ((window as any).instgrm) (window as any).instgrm.Embeds.process()
      }
      document.body.appendChild(script)
    }
    loadIG()
  }, [])

  const categories = ['All', 'Wedding Film', 'Documentary Series', 'Brand / Service', 'Fashion / Editorial', 'Animation / Commercial', 'Animation']

  const filtered = activeCategory === 'All'
    ? youtubeProductions
    : youtubeProductions.filter(p => p.category === activeCategory)

  const bg       = dark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f0]'
  const surface  = dark ? 'bg-[#111111]' : 'bg-white'
  const surface2 = dark ? 'bg-[#1a1a1a]' : 'bg-[#efefea]'
  const text     = dark ? 'text-white'   : 'text-slate-900'
  const subtext  = dark ? 'text-slate-400' : 'text-slate-600'
  const muted    = dark ? 'text-slate-500' : 'text-slate-500'
  const hdrBdr   = dark ? 'border-slate-800' : 'border-slate-200'
  const cardBdr  = dark ? 'border-slate-800' : 'border-slate-200'
  const toggleBtn= dark
    ? 'border-slate-700 bg-slate-900 text-yellow-400 hover:bg-slate-800'
    : 'border-slate-300 bg-slate-100 text-slate-600 hover:bg-slate-200'
  const catActive= 'bg-[#1e711e] text-white border-[#1e711e]'
  const catIdle  = dark
    ? 'border-slate-700 text-slate-400 hover:border-[#1e711e] hover:text-white'
    : 'border-slate-300 text-slate-500 hover:border-[#1e711e] hover:text-[#1e711e]'
  const tagStyle = dark ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-500'
  const heroTag  = dark ? 'border-slate-700 text-slate-300' : 'border-slate-400 text-slate-600'
  const statsBg  = dark ? 'bg-[#111111] border-slate-800' : 'bg-white border-slate-200'
  const footerBdr= dark ? 'border-slate-800' : 'border-slate-200'
  const footerCta= dark
    ? 'border-slate-600 text-slate-200 hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
    : 'border-black text-black hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white'
  const footerCopy = dark ? 'text-slate-700' : 'text-slate-400'
  const popoverBg  = dark ? 'bg-[#1a2a1a] border-slate-700' : 'bg-white border-slate-200'

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${bg} ${text}`}>

      {/* ── Header ── */}
      <header className={`sticky top-0 z-50 ${surface} border-b ${hdrBdr} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/" aria-label="Home" className="shrink-0">
            <img src="/logo-10.png" alt="Olatunji logo" className="h-11 w-auto" />
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Link href="/resume/video" className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1e711e] transition-colors">
              Resume
            </Link>
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

      <main className="max-w-6xl mx-auto px-5 py-12">

        {/* ── Hero ── */}
        <section className="mb-16 pt-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">

          {/* Profile card — same style as engineering page */}
          <div className={`relative w-[260px] sm:w-[280px] p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.14)] border shrink-0 -rotate-2 transition-colors duration-300 ${dark ? 'bg-[#1a1a1a] border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-slate-800">
              <img src="/video.jpg" alt="Olatunji" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex justify-between items-center px-2 pb-1">
              <div>
                <p className={`text-[13px] font-bold leading-none ${text}`}>@kingtunechiz</p>
                <p className="text-[11px] text-slate-400 mt-1">Instagram</p>
              </div>
              <a
                href="https://www.instagram.com/latunechient"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[11px] font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:scale-105 transition-transform active:scale-95"
                style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-md text-center md:text-left">
            <p className={`text-[11px] font-bold uppercase tracking-[0.3em] mb-4 ${muted}`}>
              Cinematographer &amp; Video Editor · Lagos, Nigeria
            </p>
            
            <h2 className={`text-[23px] md:text-[29px] font-medium leading-[1.7] ${text}`}>
              I'm Olatunji — a cinematographer who believes{' '}
              <span className="font-bold italic text-[#1e711e]">every story deserves to be told well.</span>{' '}
              Not just recorded.{' '}
              <span className="font-bold italic">Crafted, paced, and felt.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              {['Adobe Premiere Pro', 'CapCut', 'Multi-Camera', 'Drone & Aerial', 'Animation', 'Documentary'].map((tag, i) => (
                <span key={i} className={`text-[11px] font-semibold px-4 py-2 border rounded-full ${dark ? 'border-slate-700 text-slate-300' : 'border-slate-400 text-slate-600'}`}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── YouTube Productions ── */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className={`text-2xl font-serif ${text}`}>Productions</h2>
          </div>

          {/* Category filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full border transition-all ${activeCategory === cat ? catActive : catIdle}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((prod, idx) => (
              <motion.div
                key={prod.videoId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className={`rounded-[1.5rem] overflow-hidden border ${cardBdr} ${surface2}`}
              >
                {activeVideo === prod.videoId ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${prod.videoId}?autoplay=1&rel=0`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <YTThumbnail
                    videoId={prod.videoId}
                    title={prod.title}
                    onPlay={() => setActiveVideo(prod.videoId)}
                  />
                )}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {prod.tags.map((tag, i) => (
                      <span key={i} className={`text-[9px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border ${tagStyle}`}>{tag}</span>
                    ))}
                  </div>
                  <h3 className={`text-[16px] font-bold mb-1 ${text}`}>{prod.title}</h3>
                  <p className="text-[11px] text-[#4caf50] font-semibold mb-2">{prod.category}</p>
                  <p className={`text-[13px] leading-[1.65] ${subtext}`}>{prod.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Instagram Events Section ── */}
        <section className="mb-24">
          {/* Section header with Klala credit */}
          <div className={`rounded-[1.5rem] border ${cardBdr} ${surface} p-6 md:p-8 mb-8`}>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#1e711e]/20 text-[#4caf50] border border-[#1e711e]/30">
                    Events
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-purple-800 text-purple-400 bg-purple-900/20">
                    Instagram
                  </span>
                </div>
                <h2 className={`text-2xl font-serif mb-2 ${text}`}>Event Coverage</h2>
                <p className={`text-[13px] leading-relaxed max-w-xl ${subtext}`}>
                  A selection of live event productions shot and edited as part of my role as
                  Lead Videographer at{' '}
                  <a
                    href="https://www.instagram.com/klalaphotography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4caf50] font-semibold hover:underline"
                  >
                    Klala Films and Pictures
                  </a>
                  . Each event was directed, shot with a multi-camera setup, and fully edited
                  in-house under my supervision.
                </p>
              </div>
              <div className={`shrink-0 rounded-xl border border-slate-700 px-5 py-4 text-center ${surface2}`}>
                <p className="text-2xl font-serif text-[#1e711e]">6</p>
                <p className={`text-[10px] font-bold uppercase tracking-[0.15em] mt-1 ${muted}`}>Events</p>
              </div>
            </div>
          </div>

          {/* Instagram embeds grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {instagramEvents.map((event, idx) => (
              <motion.div
                key={event.reelId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col gap-3"
              >
                {/* Instagram embed blockquote */}
                <div
                  className="w-full overflow-hidden rounded-[1.2rem]"
                  dangerouslySetInnerHTML={{ __html: event.embedHtml }}
                />
                {/* Title + meta below embed */}
                <div className="px-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full bg-[#1e711e]/20 text-[#4caf50] border border-[#1e711e]/20">Event</span>
                    <span className={`text-[9px] font-semibold ${muted}`}>Klala Films</span>
                  </div>
                  <h3 className={`text-[14px] font-bold leading-snug ${text}`}>{event.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <section className={`mb-20 rounded-[2rem] border ${statsBg} p-8 md:p-12`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '50+', label: 'Productions' },
              { number: '8', label: 'Crew Members Led' },
              { number: '30+', label: 'Live Events Shot' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-serif text-[#1e711e] mb-2">{stat.number}</p>
                <p className={`text-[11px] font-bold uppercase tracking-[0.15em] ${muted}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className={`text-center py-16 border-t ${footerBdr}`}>
          <p className={`font-serif text-3xl md:text-4xl mb-4 leading-tight ${text}`}>
            Let's make something<br />
            <span className="italic text-[#1e711e]">worth watching.</span>
          </p>
          <p className={`text-[13px] mb-10 ${muted}`}>Available for freelance · Remote · Lagos, Nigeria</p>

          <div className="flex flex-wrap items-center justify-center gap-4">

            {/* Get in touch — contact popover */}
            <div className="relative" ref={contactRef}>
              <button
                onClick={() => setShowContact(!showContact)}
                className={`text-[11px] font-bold uppercase tracking-[0.4em] px-10 py-5 border rounded-full transition-all duration-300 ${footerCta}`}
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
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${muted}`}>WhatsApp</span>
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
                      <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${muted}`}>Email</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Back to Engineering */}
            <Link
              href="/"
              className={`text-[11px] font-bold uppercase tracking-[0.25em] px-8 py-5 border rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${dark ? 'border-slate-700 text-slate-400 hover:border-[#1e711e] hover:text-[#1e711e]' : 'border-slate-300 text-slate-500 hover:border-[#1e711e] hover:text-[#1e711e]'}`}
            >
              ⌨ Also an Engineer
            </Link>
          </div>

          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-14 ${footerCopy}`}>
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </footer>
      </main>
    </div>
  )
}
