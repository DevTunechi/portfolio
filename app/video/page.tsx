'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

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
    title: 'Prodigy Simplicity Fashion Shoot',
    category: 'Fashion / Editorial',
    description: 'Fashion film for Prodigy Simplicity — clean aesthetics, strong visual direction and editorial pacing.',
    videoId: '2arZb-QlvVg',
    tags: ['Fashion', 'Editorial'],
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
    description: 'Studio production — controlled lighting, camera direction and creative visual identity work.',
    url: 'https://www.instagram.com/reel/DTRKr7rCDiO/',
    reelId: 'DTRKr7rCDiO',
  },
  {
    title: 'Family Celebration Shoot',
    description: 'Joyful family celebration — warm, intimate coverage capturing genuine moments.',
    url: 'https://www.instagram.com/reel/DTSb4d-jD-v/',
    reelId: 'DTSb4d-jD-v',
  },
  {
    title: 'An Unveiling Fit for Royalty',
    description: 'The King and Queen crowned in love — a regal union captured with cinematic elegance.',
    url: 'https://www.instagram.com/reel/DS2qokcjMu0/',
    reelId: 'DS2qokcjMu0',
  },
  {
    title: 'A Union Blessed by Culture & History',
    description: 'Love beautifully wrapped in centuries of tradition — rich cultural event coverage.',
    url: 'https://www.instagram.com/reel/DSmVm7hDHdN/',
    reelId: 'DSmVm7hDHdN',
  },
  {
    title: 'She Ministers Heaven',
    description: 'A life fully devoted to God — spiritual performance coverage, sensitively and reverently shot.',
    url: 'https://www.instagram.com/reel/DSPa8F0kYRe/',
    reelId: 'DSPa8F0kYRe',
  },
  {
    title: 'Celebrating Music Icons — Adeyinka Alaseyori',
    description: 'Honouring music legends 60+ whose timeless sounds shaped lives — a milestone event beautifully documented.',
    url: 'https://www.instagram.com/reel/DNoM0avROIJ/',
    reelId: 'DNoM0avROIJ',
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

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(dark))
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const categories = ['All', 'Wedding Film', 'Documentary Series', 'Brand / Service', 'Fashion / Editorial', 'Animation / Commercial', 'Animation']

  const filtered = activeCategory === 'All'
    ? youtubeProductions
    : youtubeProductions.filter(p => p.category === activeCategory)

  const surface  = 'bg-[#111111]'
  const surface2 = 'bg-[#1a1a1a]'
  const subtext  = 'text-slate-400'
  const muted    = 'text-slate-500'
  const hdrBdr   = 'border-slate-800'
  const toggleBtn= 'border-slate-700 bg-slate-900 text-yellow-400 hover:bg-slate-800'
  const catActive= 'bg-[#1e711e] text-white border-[#1e711e]'
  const catIdle  = 'border-slate-700 text-slate-400 hover:border-[#1e711e] hover:text-white'

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-[#0a0a0a] text-white">

      {/* ── Header ── */}
      <header className={`sticky top-0 z-50 ${surface} border-b ${hdrBdr}`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/" aria-label="Home" className="shrink-0">
            <img src="/logo-10.png" alt="Olatunji logo" className="h-11 w-auto" />
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4 min-w-0">
            <ProfileToggle active="video" />
            <Link href="/resume" className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 hover:text-white transition-colors hidden sm:block">
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
            <a
              href="mailto:tunjidare2@yahoo.com"
              className="bg-[#1e711e] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#155315] transition-all whitespace-nowrap"
            >
              Let's talk
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-12">

        {/* ── Hero ── */}
        <section className="mb-16 pt-4">
          <p className={`text-[11px] font-bold uppercase tracking-[0.3em] mb-5 ${muted}`}>
            Cinematographer &amp; Video Editor · Lagos, Nigeria
          </p>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 max-w-4xl">
            Stories that <span className="italic text-[#1e711e]">move</span><br />people.
          </h1>
          <p className={`text-[16px] leading-[1.75] max-w-2xl ${subtext}`}>
            10+ years directing, shooting and editing video across weddings, documentaries,
            brand films, animations and live events. Every frame is intentional.
            Every cut serves the story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Adobe Premiere Pro', 'CapCut', 'Multi-Camera', 'Drone & Aerial', 'Animation', 'Documentary'].map((tag, i) => (
              <span key={i} className="text-[11px] font-semibold px-4 py-2 border border-slate-700 rounded-full text-slate-300">{tag}</span>
            ))}
          </div>
        </section>

        {/* ── YouTube Productions ── */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-serif text-white">Productions</h2>
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
                className={`rounded-[1.5rem] overflow-hidden border border-slate-800 ${surface2}`}
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
                      <span key={i} className="text-[9px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border border-slate-700 text-slate-400">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-1">{prod.title}</h3>
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
          <div className={`rounded-[1.5rem] border border-slate-800 ${surface} p-6 md:p-8 mb-8`}>
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
                <h2 className="text-2xl font-serif text-white mb-2">Event Coverage</h2>
                <p className={`text-[13px] leading-relaxed max-w-xl ${subtext}`}>
                  A selection of live event productions shot and edited as part of my role as
                  Lead Videographer at{' '}
                  <a
                    href="https://www.instagram.com/klalafilmsandpictures/"
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

          {/* Instagram grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {instagramEvents.map((event, idx) => (
              <motion.a
                key={event.reelId}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`group rounded-[1.2rem] overflow-hidden border border-slate-800 ${surface2} block hover:border-[#1e711e]/50 transition-all`}
              >
                {/* Instagram gradient placeholder with play icon */}
                <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-purple-900 via-pink-900 to-orange-700 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 right-3">
                    <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.15em]">Watch on Instagram ↗</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full bg-[#1e711e]/20 text-[#4caf50] border border-[#1e711e]/20">Event</span>
                    <span className={`text-[9px] font-semibold ${muted}`}>Klala Films</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-white mb-1 leading-snug">{event.title}</h3>
                  <p className={`text-[12px] leading-[1.6] ${subtext}`}>{event.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <section className={`mb-20 rounded-[2rem] border border-slate-800 ${surface} p-8 md:p-12`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '16+', label: 'Productions' },
              { number: '8', label: 'Crew Members Led' },
              { number: '6', label: 'Live Events Shot' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-serif text-[#1e711e] mb-2">{stat.number}</p>
                <p className={`text-[11px] font-bold uppercase tracking-[0.15em] ${muted}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="text-center py-16 border-t border-slate-800">
          <p className="font-serif text-3xl md:text-4xl mb-4 leading-tight text-white">
            Let's make something<br />
            <span className="italic text-[#1e711e]">worth watching.</span>
          </p>
          <p className={`text-[13px] mb-10 ${muted}`}>Available for freelance · Remote · Lagos, Nigeria</p>
          <a
            href="mailto:tunjidare2@yahoo.com"
            className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] px-10 py-5 border border-slate-600 text-slate-200 rounded-full hover:bg-[#1e711e] hover:border-[#1e711e] hover:text-white transition-all duration-300"
          >
            Get in touch →
          </a>
          <p className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] mt-14">
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </footer>
      </main>
    </div>
  )
}
