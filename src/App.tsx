import { useEffect, useRef, useState } from 'react';
import './site.css';

import { links, publications, socialLinks, travelSections } from './site-data';

type Photo = (typeof travelSections)[number]['photos'][number];
const publication = publications[0];
const contacts = [
  { label: 'Email', href: 'mailto:jimmyyyaaaa@gmail.com' },
  ...['Google Scholar', 'GitHub', 'LinkedIn'].map(label => socialLinks.find(link => link.label === label)!),
];
const monthYear = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric', timeZone: 'UTC' });
function photoCaption(photo: Photo) {
  const [year, month, day] = photo.date.split('.').map(Number);
  return `${photo.country} · ${monthYear.format(new Date(Date.UTC(year, month - 1, day)))}`;
}
function photoTitle(photo: Photo) {
  return photo.city === 'Tromso' ? 'Tromsø' : photo.city;
}
function Authors({ compact }: { compact: boolean }) {
  const authors = publication.authors.split(', ');
  return <p className="authors">{(compact ? authors.slice(0, 4) : authors).map((author, index) =>
    <span key={author}>{index > 0 && ', '}{author === 'Penglin Fu*' ? <strong>{author}</strong> : author}</span>
  )}{compact && ', et al.'}</p>;
}
const requestedPage = new URLSearchParams(window.location.search).get('page') ?? window.location.hash.slice(1);
const page = requestedPage === 'research' || requestedPage === 'gallery' ? requestedPage : 'home';
document.title = `${page === 'home' ? 'Home' : page === 'research' ? 'Research' : 'Gallery'} — Penglin Fu`;
const pageUrl = `https://penglinfu.me/${page === 'home' ? '' : `?page=${page}`}`;
document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl);
document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl);
document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title);

export default function App() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  return <div className="site">
    <header className="site-nav"><a href="/" className="wordmark">Penglin Fu<span>.</span></a><nav aria-label="Main navigation">{links.map(({ id, label }) => <a key={id} href={id === 'home' ? '/' : `/?page=${id}`} aria-current={page === id ? 'page' : undefined}>{label}</a>)}</nav></header>
    <main>
      {page === 'home' &&
      <section className="intro">
        <div><p className="eyebrow">ROBOTICS · EMBODIED AI</p><h1>Penglin Fu</h1><p className="name-detail">傅鹏霖 <span>·</span> Jimmy</p><p className="role">PhD Student at The University of Hong Kong</p>
          <div className="bio"><p>I study embodied AI, robotics, and human motion understanding at the HKU School of Computing and Data Science, advised by <a href="https://www.hongyang.li/">Prof. Hongyang Li</a>.</p><p>Previously, I received my BEng in Electronics Engineering from HKUST, with exchange experiences at Stanford and ETH Zurich.</p></div>
          <div className="contact-links">{contacts.map(({label, href}) => <a key={label} href={href}>{label} <span aria-hidden="true">↗</span></a>)}</div>
        </div>
        <figure className="portrait"><img src="/profile/avatar.jpg" alt="Penglin Fu by the coast"/><figcaption>Research, and a little curiosity beyond it.</figcaption></figure>
      </section>}
      {page !== 'gallery' && <section>{page === 'home' ? <div className="section-heading"><h2>Selected research</h2><a className="all-research" href="/?page=research">All research →</a></div> : <div className="page-heading"><p className="eyebrow">RESEARCH</p><h1>Publications</h1><p>Embodied AI, robotics, and human motion understanding.</p></div>}
        <article className="featured-project"><a className="project-media" href={publication.links[0].href} aria-label="Visit the SMASH project"><video src={publication.video} poster={publication.poster} autoPlay muted loop playsInline preload="metadata"/></a>
          <div className="project-copy"><p className="eyebrow">HUMANOID ROBOTICS <span> / </span> ARXIV 2026</p><h2 className="project-name">SMASH</h2><p className="project-title">{publication.title.replace(/^SMASH: /, '')}</p><p className="project-summary">Exploring whole-body humanoid skills through the challenge of visually guided table tennis.</p><Authors compact={page === 'home'} /><div className="project-links"><a href={publication.links[0].href}>Project page ↗</a><a href={publication.links[1].href}>Read paper ↗</a></div></div>
        </article>
      </section>}
      {page === 'gallery' && <section><div className="page-heading"><p className="eyebrow">BEYOND RESEARCH</p><h1>Travel gallery</h1><p>A few places along the way.</p></div>{travelSections.map(section => <section className="gallery-group" key={section.continent}><h2>{section.continent}</h2><div className="photo-grid">{section.photos.map(p => <figure key={p.image}><button onClick={() => setPhoto(p)} aria-label={`Enlarge ${photoTitle(p)} photo`}><img src={p.image} alt={photoTitle(p)} loading="lazy"/></button><figcaption><strong>{photoTitle(p)}</strong><span>{photoCaption(p)}</span></figcaption></figure>)}</div></section>)}</section>}
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Penglin Fu</span><a href="mailto:jimmyyyaaaa@gmail.com">Let’s connect ↗</a></footer>
    {photo && <PhotoDialog photo={photo} onClose={() => setPhoto(null)} />}

  </div>;
}
function PhotoDialog({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current!;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return (
    <dialog ref={dialogRef} className="lightbox" aria-label={photoTitle(photo)} onClose={onClose}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <button autoFocus onClick={onClose} aria-label="Close photo">Close ×</button>
      <img src={photo.image} alt={photoTitle(photo)} />
    </dialog>
  );
}
