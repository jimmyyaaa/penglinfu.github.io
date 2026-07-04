import { useEffect, useState } from 'react';

type PageId = 'home' | 'research' | 'gallery';

type SocialIconName = 'github' | 'linkedin' | 'scholar';

const publications = [
  {
    title:
      'SMASH: Mastering Scalable Whole-Body Skills for Humanoid Ping-Pong with Egocentric Vision',
    authors:
      'Junli Ren*, Yinghui Li*, Kai Zhang*, Penglin Fu*, Haoran Jiang, Yixuan Pan, Guangjun Zeng, Tao Huang, Weizhong Guo, Peng Lu, Tianyu Li, Jingbo Wang, Li Chen, Hongyang Li, Ping Luo',
    venue: 'arXiv, 2026',
    video: '/projects/smash/smash-preview-full.mp4',
    poster: 'https://assets.kinetixai.cn/202603262/smash_4.png',
    mediaAlt: 'SMASH humanoid ping-pong robot demonstration',
    links: [
      { label: 'webpage', href: 'https://mmlab.hk/Smash/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.01158' },
    ],
  },
];

const travelSections = [
  {
    continent: 'Asia',
    photos: [
      {
        title: 'Hong Kong',
        date: '2025.03.19',
        country: 'China',
        city: 'Hong Kong',
        image: '/gallery/asia/2025-03-19-hong-kong.jpg',
      },
      {
        title: 'Penida Island',
        date: '2025.06.21',
        country: 'Indonesia',
        city: 'Penida Island',
        image: '/gallery/asia/2025-06-21-penida-island.jpg',
      },
    ],
  },
  {
    continent: 'Europe',
    photos: [
      {
        title: 'Tromso',
        date: '2024.02.12',
        country: 'Norway',
        city: 'Tromso',
        image: '/gallery/europe/2024-02-12-tromso.jpg',
      },
      {
        title: 'Dolomites',
        date: '2025.06.11',
        country: 'Italy',
        city: 'Dolomites',
        image: '/gallery/europe/2025-06-11-dolomites.jpg',
      },
      {
        title: 'Florence',
        date: '2025.06.13',
        country: 'Italy',
        city: 'Florence',
        image: '/gallery/europe/2025-06-13-florence.jpg',
      },
    ],
  },
  {
    continent: 'North America',
    photos: [
      {
        title: 'NYC',
        date: '2025.11.27',
        country: 'U.S.',
        city: 'NYC',
        image: '/gallery/north-america/2025-11-27-nyc.jpg',
      },
      {
        title: 'Boston',
        date: '2025.11.29',
        country: 'U.S.',
        city: 'Boston',
        image: '/gallery/north-america/2025-11-29-boston.jpg',
      },
      {
        title: 'San Diego',
        date: '2025.12.20',
        country: 'U.S.',
        city: 'San Diego',
        image: '/gallery/north-america/2025-12-20-san-diego.jpg',
      },
    ],
  },
];

const links = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'gallery', label: 'Gallery' },
] satisfies Array<{ id: PageId; label: string }>;

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/jimmyyaaa',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/penglin-fu/',
    icon: 'linkedin',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=QSso6z4AAAAJ&hl=en',
    icon: 'scholar',
  },
] satisfies Array<{ label: string; href: string; icon: SocialIconName }>;

function getPageFromHash(): PageId {
  const page = window.location.hash.replace('#', '');

  if (page === 'research' || page === 'gallery') {
    return page;
  }

  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-stone-50 text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm shadow-zinc-950/5 backdrop-blur-xl">
        <nav className="relative mx-auto max-w-6xl px-4 py-3 sm:flex sm:items-center sm:justify-between sm:px-5 sm:py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-sm font-semibold tracking-wide text-zinc-900">
              Penglin FU
            </a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white/70 text-zinc-800 transition hover:bg-white sm:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 stroke-current"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6 6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <div
            className={`${
              mobileMenuOpen ? 'grid' : 'hidden'
            } absolute right-4 top-full z-50 mt-2 w-48 gap-1 rounded-md border border-zinc-200 bg-white/95 p-2 shadow-lg shadow-zinc-950/10 backdrop-blur-xl sm:static sm:mt-0 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none`}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={currentPage === link.id ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  currentPage === link.id
                    ? 'bg-zinc-950 text-white'
                    : 'text-zinc-600 hover:bg-white hover:text-zinc-950'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'research' && <ResearchPage />}
        {currentPage === 'gallery' && <GalleryPage />}
      </div>

      <SiteFooter />
    </main>
  );
}

function HomePage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-5 sm:py-14 md:grid-cols-[1fr_280px] md:items-center md:py-24">
      <div>
        <h1 className="mb-4 text-lg font-semibold uppercase tracking-wide text-emerald-700 sm:text-xl md:mb-5 md:text-2xl">
          Penglin FU / 傅鹏霖 / Jimmy
        </h1>
        <div className="max-w-2xl space-y-4 text-base leading-7 text-zinc-700 sm:leading-8 md:text-lg">
          <p>
            I am a PhD student at the HKU School of Computing and Data Science,
            advised by{' '}
            <a
              href="https://www.hongyang.li/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-emerald-700 hover:text-zinc-950"
            >
              Prof. Hongyang Li
            </a>
            . My research explores embodied AI, robotics, and human motion
            understanding.
          </p>
          <p>
            Before joining HKU, I received my BEng in Electronics Engineering
            from HKUST, during which I also had two memorable exchange
            experiences at Stanford and ETH Zurich.
          </p>
        </div>
      </div>

      <aside className="w-full max-w-[360px] justify-self-center rounded-lg border border-zinc-200 bg-white p-3 shadow-sm sm:p-4 md:max-w-[280px] md:justify-self-end">
        <img
          src="/profile/avatar.jpg"
          alt="Portrait of Penglin FU"
          className="aspect-[4/5] w-full rounded-md object-cover object-center"
        />
        <div className="mt-3 flex items-center justify-center gap-3 sm:mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-200 bg-stone-50 text-zinc-700 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white sm:h-10 sm:w-10"
            >
              <SocialIcon name={link.icon} />
            </a>
          ))}
        </div>
      </aside>
    </section>
  );
}

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.24 3.35.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.04c.98 0 1.94.13 2.86.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.9h4v10.6H3V9.9Zm6.18 0h3.83v1.45h.05c.53-.95 1.85-1.74 3.35-1.74 3.58 0 4.59 2.25 4.59 5.35v5.54h-4v-5.02c0-1.33-.52-2.47-1.89-2.47-1.44 0-1.93 1.03-1.93 2.67v4.82h-4V9.9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 3 1.5 8.7 12 14.4l8-4.35V16h2V8.95L12 3Zm-6 9.25V16c0 2.2 2.68 4 6 4s6-1.8 6-4v-3.75l-6 3.26-6-3.26Z" />
    </svg>
  );
}

function ResearchPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-14 md:py-24">
      <h1 className="mb-8 text-lg font-semibold uppercase tracking-wide text-emerald-700 sm:text-xl md:mb-10 md:text-2xl">
        Publications
      </h1>

      <div className="space-y-9 md:space-y-10">
        {publications.map((publication) => (
          <PublicationItem key={publication.title} publication={publication} />
        ))}
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-14 md:py-24">
      <h1 className="mb-8 text-lg font-semibold uppercase tracking-wide text-emerald-700 sm:text-xl md:mb-10 md:text-2xl">
        Travel
      </h1>

      <div className="space-y-10 md:space-y-12">
        {travelSections.map((section) => (
          <section key={section.continent}>
            <h2 className="text-lg font-semibold text-zinc-950 md:text-xl">
              {section.continent}
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.photos.map((photo) => (
                <article
                  key={`${photo.date}-${photo.country}-${photo.city}`}
                  className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
                >
                  <div
                    className="aspect-video bg-cover bg-center transition duration-300 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${photo.image})` }}
                  />
                  <div className="flex items-start justify-between gap-4 p-3 text-sm text-zinc-600 sm:p-4">
                    <span>{photo.date}</span>
                    <span className="text-right">
                      {photo.city}, {photo.country}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-5 py-10 text-center text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Penglin FU</p>
      </div>
    </footer>
  );
}

function PublicationItem({
  publication,
}: {
  publication: {
    title: string;
    authors: string;
    venue: string;
    video: string;
    poster: string;
    mediaAlt: string;
    links: Array<{ label: string; href: string }>;
  };
}) {
  return (
    <article className="grid gap-5 md:grid-cols-[340px_1fr] md:gap-7 lg:grid-cols-[420px_1fr]">
      <a
        href={publication.links[0]?.href}
        target="_blank"
        rel="noreferrer"
        className="group block aspect-video overflow-hidden rounded-md border border-zinc-200 bg-zinc-100"
        aria-label={`Open project page for ${publication.title}`}
      >
        <video
          src={publication.video}
          poster={publication.poster}
          aria-label={publication.mediaAlt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </a>

      <div>
        <h2 className="text-lg font-semibold leading-snug text-zinc-950 sm:text-xl">
          <a
            href={publication.links[0]?.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-700"
          >
            {publication.title}
          </a>
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-700">{publication.authors}</p>
        <p className="mt-2 text-sm font-semibold text-zinc-950">{publication.venue}</p>
        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm">
          {publication.links.map((link, index) => (
            <span key={link.href} className="text-zinc-500">
              {index > 0 && <span className="mr-2 text-zinc-300">|</span>}
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-emerald-700 hover:text-zinc-950"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
