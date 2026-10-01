export type PageId = 'home' | 'research' | 'gallery';

export type SocialIconName = 'github' | 'linkedin' | 'scholar';

export const publications = [
  {
    title:
      'SMASH: Mastering Scalable Whole-Body Skills for Humanoid Ping-Pong with Egocentric Vision',
    authors:
      'Junli Ren*, Yinghui Li*, Kai Zhang*, Penglin Fu*, Haoran Jiang, Yixuan Pan, Guangjun Zeng, Tao Huang, Weizhong Guo, Peng Lu, Tianyu Li, Jingbo Wang, Li Chen, Hongyang Li, Ping Luo',
    venue: 'arXiv, 2026',
    video: '/projects/smash/smash-preview-full.mp4',
    poster: '/projects/smash/poster.jpg',
    mediaAlt: 'SMASH humanoid ping-pong robot demonstration',
    links: [
      { label: 'webpage', href: 'https://mmlab.hk/Smash/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.01158' },
    ],
  },
];

export const travelSections = [
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

export const links = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'gallery', label: 'Gallery' },
] satisfies Array<{ id: PageId; label: string }>;

export const socialLinks = [
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

