import Image from 'next/image';
import { actor, resume } from './content';

const Arrow = () => <span aria-hidden="true">↗</span>;

function Portrait({ photo, className = '', priority = false }) {
  return <div className={`portrait ${className}`}>
    {photo ? <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={priority ? '(max-width: 700px) 100vw, 58vw' : '(max-width: 700px) 100vw, 45vw'} style={{ objectFit: 'cover', objectPosition: photo.position || '50% 35%' }} /> : <>
      <div className="portrait-frame" aria-hidden="true"><span>CP</span></div>
      <div className="portrait-note"><span className="eyebrow">A portrait, soon.</span><p>Professional headshots · October 2026</p></div>
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
          <p className="hero-line">Drawn to the complexity<br />of being human.</p>
          <p className="disciplines">Film & television · Theatre · Commercial</p>
          <div className="hero-links"><a className="button" href="#current-work">Explore the work <Arrow /></a><a className="text-link" href="#contact">Get in touch <Arrow /></a></div>
          <p className="hero-footnote">Based in Chicago, Illinois</p>
        </div>
        <Portrait photo={actor.heroImage} priority />
      </section>

      <section className="about section wrap" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">01 / About</p><h2 id="about-title">Life experience.<br /><em>A new chapter.</em></h2></div>
        <div className="about-copy"><p className="lead">I’m Chelsea, a Chicago-based actor pursuing film, television, theatre, and commercial work.</p><p>After acting in school and college, I returned to training in 2026. I’m especially drawn to dramatic work: complicated relationships, quiet tensions, and the things people struggle to say.</p><p>My years as an attorney and compliance executive have given me a close view of people under pressure. That experience informs my curiosity about character—and the stories I want to tell.</p><a className="text-link" href="#media">Reel & performance selections <Arrow /></a></div>
      </section>

      <section className="headshots section wrap" id="headshots" aria-labelledby="headshots-title">
        <div className="section-heading"><div><p className="eyebrow">02 / Headshots</p><h2 id="headshots-title">The many sides of a story.</h2></div><p>Theatrical & commercial portraits<br />New photography coming October 2026.</p></div>
        {actor.headshots.length ? <div className="headshot-grid">{actor.headshots.map(photo => <figure key={photo.src}><Portrait photo={photo} /><figcaption>{photo.label}</figcaption></figure>)}</div> : <div className="headshot-pending"><span className="eyebrow">Theatrical / Commercial</span><p>A closer look, coming soon.</p><span className="small-note">Portrait collection in preparation</span></div>}
      </section>

      <section className="media section" id="media" aria-labelledby="media-title"><div className="wrap media-layout">
        <div><p className="eyebrow">03 / Reel & media</p><h2 id="media-title">Moments<br /><em>in character.</em></h2><p>Performance clips and self-tape selections will be collected here as new work develops.</p></div>
        <div>{actor.media.length ? actor.media.map(clip => <article className="clip" key={clip.url}><h3>{clip.title}</h3><p>{clip.description}</p><a className="text-link" href={clip.url} target="_blank" rel="noopener noreferrer">Watch selection <span className="sr-only">(opens in a new tab)</span><Arrow /></a></article>) : <div className="media-pending"><span className="eyebrow">Selected performances</span><div className="film-lines" aria-hidden="true"><i /><i /><i /></div><h3>Work in the making.</h3><p>A professional reel is not yet available.</p></div>}</div>
      </div></section>

      <section className="resume section wrap" id="resume" aria-labelledby="resume-title"><div className="section-heading"><div><p className="eyebrow">04 / Résumé</p><h2 id="resume-title">Experience & exploration.</h2></div><div>{actor.resumePdf ? <div className="resume-actions"><a className="text-link" href={actor.resumePdf} target="_blank" rel="noopener noreferrer">View résumé (PDF) <Arrow /></a><a className="text-link" href={actor.resumePdf} download>Download PDF ↓</a></div> : <p className="small-note">PDF résumé coming soon</p>}</div></div>
        <div className="resume-table">{resume.map(group => <div className="resume-row" key={group.category}><h3>{group.category}</h3><div>{group.entries.length ? group.entries.map(entry => <div key={entry.title}><h4>{entry.title}</h4><p>{entry.detail}</p></div>) : <p className="muted">{group.note || 'Credits to follow.'}</p>}</div></div>)}</div>
      </section>

      <section className="current-work wrap" id="current-work" aria-labelledby="work-title">
        <div className="work-date"><p className="eyebrow">On stage / 2026</p><p>September 18<br /><span>— October 10</span></p></div>
        <div className="work-description"><p className="eyebrow">Theater Momentum · Chicago</p><h2 id="work-title">The Dinner</h2><p>A dinner party. Private secrets. Stories unfolding through dramatic improvisation.</p></div>
        <a className="text-link" href="#resume">View résumé <Arrow /></a>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><div className="wrap contact-layout"><div><p className="eyebrow">05 / Contact</p><h2 id="contact-title">Let’s tell<br /><em>a story.</em></h2></div><div className="contact-copy"><p>For casting, creative collaborations,<br />and representation inquiries.</p>{actor.email ? <a className="contact-email" href={`mailto:${actor.email}`}>{actor.email} <Arrow /></a> : <p className="contact-status">Direct contact details coming soon.</p>}<p className="eyebrow">Chicago, Illinois</p></div></div></section>
    </main>
    <footer className="wrap"><a href="#top">Chelsea Pejic</a><span>Actor · Chicago</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
