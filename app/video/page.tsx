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

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(dark))
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

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

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${bg} ${text}`}>

      {/* ── Header ── */}
      <header className={`sticky top-0 z-50 ${surface} border-b ${hdrBdr} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/" aria-label="Home" className="shrink-0">
            <img src="/logo-10.png" alt="Olatunji logo" className="h-11 w-auto" />
          </Link>
          <nav className="flex items-center gap-3 sm:gap-4 min-w-0">
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
          <p className={`text-[13px] font-semibold mb-4 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            ⚠️ This page is 100% addictive 😍
          </p>
          <h1 className={`text-5xl md:text-7xl font-serif leading-[1.1] mb-8 max-w-4xl ${text}`}>
            Stories that <span className="italic text-[#1e711e]">move</span><br />people.
          </h1>
          <p className={`text-[16px] leading-[1.75] max-w-2xl ${subtext}`}>
            10+ years directing, shooting and editing video across weddings, documentaries,
            brand films, animations and live events. Every frame is intentional.
            Every cut serves the story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Adobe Premiere Pro', 'CapCut', 'Multi-Camera', 'Drone & Aerial', 'Animation', 'Documentary'].map((tag, i) => (
              <span key={i} className={`text-[11px] font-semibold px-4 py-2 border rounded-full ${heroTag}`}>{tag}</span>
            ))}
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
          <a
            href="mailto:tunjidare2@yahoo.com"
            className={`inline-block text-[11px] font-bold uppercase tracking-[0.4em] px-10 py-5 border rounded-full transition-all duration-300 ${footerCta}`}
          >
            Get in touch →
          </a>
          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-14 ${footerCopy}`}>
            © {new Date().getFullYear()} Olatunji Studio — Based in Lagos
          </p>
        </footer>
      </main>
    </div>
  )
}
