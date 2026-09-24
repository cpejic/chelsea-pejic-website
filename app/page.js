import Image from 'next/image';
import { actor, resume } from './content';

const Arrow = () => <span aria-hidden="true">↗</span>;


function SocialLinks() {
  const links = [
    { name: 'Instagram', background: 'radial-gradient(circle at 30% 105%, #fdf497 0%, #fdf497 8%, #fd5949 40%, #d6249f 65%, #285aeb 100%)', href: 'https://www.instagram.com/chelseapejic/', icon: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1.1" /></> },
    { name: 'YouTube', background: '#ff0033', href: 'https://www.youtube.com/@NationStyle', icon: <><rect x="2" y="5" width="20" height="14" rx="4" fill="white" /><path d="M10 8.5 16 12 10 15.5Z" fill="#ff0033" /></> },
    { name: 'Facebook', background: '#0866ff', href: 'https://www.facebook.com/profile.php?id=61592850958330', icon: <path d="M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z" /> },
  ];
  return <nav aria-label="Social media" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 26 }}>
    {links.map(({ name, href, icon, background }) => <a key={name} className="button" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`} title={`${name} (opens in a new tab)`} style={{ width: 48, height: 48, padding: 0, borderRadius: 14, background, color: '#fff', boxShadow: '0 4px 10px rgba(41, 41, 35, 0.14)', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">{icon}</svg>
    </a>)}
  </nav>;
}

function Portrait({ photo, className = '', priority = false }) {
  return <div className={`portrait ${className}`}>
    {photo ? <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={priority ? '(max-width: 700px) 100vw, 58vw' : '(max-width: 700px) 100vw, 45vw'} style={{ objectFit: 'cover', objectPosition: photo.position || '50% 35%' }} /> : <>
      <div className="portrait-frame" aria-hidden="true"><span>CP</span></div>
      <div className="portrait-note"><span className="eyebrow">Chelsea Pejic</span><p>Actor · Chicago</p></div>
    </>}
  </div>;
}

export default function Home() {
  return <>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Actor / Chicago</p>
          <h1 id="hero-title">Chelsea Pejic</h1>
          <p className="hero-line">Truth in the<br />{' '}unspoken moments.</p>
          <p className="disciplines">Film & television · Theatre · Commercial</p>
          <div className="hero-links"><a className="button" href="#about">About Chelsea <Arrow /></a><a className="text-link" href="#contact">Get in touch <Arrow /></a></div>
          <p className="hero-footnote">Based in Chicago, Illinois</p>
        </div>
        <Portrait photo={actor.heroImage} priority />
      </section>

      <section className="about section wrap" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">01 / About</p><h2 id="about-title">Quiet tension.<br /><em>Complex lives.</em></h2></div>
        <div className="about-copy"><p className="lead">Chelsea Pejic is a Chicago-based actor working across theatre, film, television, and commercial performance.</p><p>She is especially drawn to dramatic material: complicated relationships, emotional restraint, and characters navigating what cannot easily be said.</p><p>Her work is grounded in curiosity, close observation, and an interest in the contradictions that make people human.</p></div>
      </section>

      {actor.headshots.length ? <section className="headshots section wrap" id="headshots" aria-labelledby="headshots-title">
        <div className="section-heading"><div><p className="eyebrow">02 / Headshots</p><h2 id="headshots-title">Theatrical & commercial.</h2></div></div>
        <div className="headshot-grid">{actor.headshots.map(photo => <figure key={photo.src}><Portrait photo={photo} /><figcaption>{photo.label}</figcaption></figure>)}</div>
      </section> : null}

      <section className="resume section wrap" id="resume" aria-labelledby="resume-title"><div className="section-heading"><div><p className="eyebrow">03 / Résumé</p><h2 id="resume-title">Experience & training.</h2></div><div>{actor.resumePdf ? <div className="resume-actions"><a className="text-link" href={actor.resumePdf} target="_blank" rel="noopener noreferrer">View full résumé (PDF) <Arrow /></a><a className="text-link" href={actor.resumePdf} download>Download PDF ↓</a></div> : <p>Full résumé available on request.</p>}</div></div>
        <div className="resume-table">{resume.map(group => <div className="resume-row" key={group.category}><h3>{group.category}</h3><div>{group.entries.map(entry => <div key={entry.title}><h4>{entry.title}</h4><p>{entry.detail}</p></div>)}</div></div>)}</div>
        <p className="disciplines">Height {actor.height} · Brown eyes · Brown hair · Based in Chicago</p>
      </section>

      <section className="current-work wrap" id="current-work" aria-labelledby="work-title">
        <div className="work-date"><p className="eyebrow">04 / Current work</p><p>September 18<br /><span>— October 10, 2026</span></p></div>
        <div className="work-description"><p className="eyebrow">Theater Momentum · Chicago</p><h2 id="work-title">The Dinner</h2><p>A dinner party. Private secrets. Stories unfolding through dramatic improvisation.</p></div>
        <a className="text-link" href="#resume">View résumé <Arrow /></a>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><div className="wrap contact-layout"><div><p className="eyebrow">05 / Contact</p><h2 id="contact-title">Let’s<br /><em>connect.</em></h2></div><div className="contact-copy"><p>For casting, creative collaborations,<br />and representation inquiries.</p><a className="contact-email" href={`mailto:${actor.email}`}>{actor.email}</a><p className="eyebrow">Chicago, Illinois</p><SocialLinks /></div></div></section>
    </main>
    <footer className="wrap"><a href="#main">Chelsea Pejic</a><span>Actor · Chicago</span><a href="#main">Back to top ↑</a></footer>
  </>;
}
