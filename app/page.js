import Image from 'next/image';
import { actor, resume } from './content';

const Arrow = () => <span aria-hidden="true">↗</span>;

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
          <p className="hero-line">Truth in the<br />unspoken moments.</p>
          <p className="disciplines">Film & television · Theatre · Commercial</p>
          <div className="hero-links"><a className="button" href="#about">About Chelsea <Arrow /></a><a className="text-link" href="#contact">Get in touch <Arrow /></a></div>
          <p className="hero-footnote">Based in Chicago, Illinois</p>
        </div>
        <Portrait photo={actor.heroImage} priority />
      </section>

      <section className="about section wrap" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">01 / About</p><h2 id="about-title">Presence.<br /><em>Depth. Truth.</em></h2></div>
        <div className="about-copy"><p className="lead">Chelsea Pejic is a Chicago-based actor working across theatre, film, television, and commercial performance.</p><p>Drawn especially to dramatic material, Chelsea is interested in complicated relationships, emotional restraint, quiet tension, and characters whose inner lives reveal more than they say.</p><p>She brings a grounded perspective, curiosity, and substantial life experience to her work, with a particular interest in emotionally complex characters and stories.</p></div>
      </section>

      <section className="headshots section wrap" id="headshots" aria-labelledby="headshots-title">
        <div className="section-heading"><div><p className="eyebrow">02 / Headshots</p><h2 id="headshots-title">Theatrical & commercial.</h2></div>{actor.headshots.length ? null : <p>Professional portraits will be added here.</p>}</div>
        {actor.headshots.length ? <div className="headshot-grid">{actor.headshots.map(photo => <figure key={photo.src}><Portrait photo={photo} /><figcaption>{photo.label}</figcaption></figure>)}</div> : <div className="headshot-pending"><span className="eyebrow">Chelsea Pejic · Chicago</span><p>Portraits in preparation.</p></div>}
      </section>

      {actor.media.length ? <section className="media section" id="media" aria-labelledby="media-title"><div className="wrap media-layout">
        <div><p className="eyebrow">03 / Media</p><h2 id="media-title">Selected<br /><em>performances.</em></h2></div>
        <div>{actor.media.map(clip => <article className="clip" key={clip.url}><h3>{clip.title}</h3><p>{clip.description}</p><a className="text-link" href={clip.url} target="_blank" rel="noopener noreferrer">Watch selection <span className="sr-only">(opens in a new tab)</span><Arrow /></a></article>)}</div>
      </div></section> : null}

      <section className="resume section wrap" id="resume" aria-labelledby="resume-title"><div className="section-heading"><div><p className="eyebrow">03 / Résumé</p><h2 id="resume-title">Experience.</h2></div><div>{actor.resumePdf ? <div className="resume-actions"><a className="text-link" href={actor.resumePdf} target="_blank" rel="noopener noreferrer">View résumé (PDF) <Arrow /></a><a className="text-link" href={actor.resumePdf} download>Download PDF ↓</a></div> : null}</div></div>
        <div className="resume-table">{resume.map(group => <div className="resume-row" key={group.category}><h3>{group.category}</h3><div>{group.entries.map(entry => <div key={entry.title}><h4>{entry.title}</h4><p>{entry.detail}</p></div>)}</div></div>)}</div>
      </section>

      <section className="current-work wrap" id="current-work" aria-labelledby="work-title">
        <div className="work-date"><p className="eyebrow">04 / Current work</p><p>September 18<br /><span>— October 10, 2026</span></p></div>
        <div className="work-description"><p className="eyebrow">Theater Momentum · Chicago</p><h2 id="work-title">The Dinner</h2><p>A dinner party. Private secrets. Stories unfolding through dramatic improvisation.</p></div>
        <a className="text-link" href="#resume">View résumé <Arrow /></a>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><div className="wrap contact-layout"><div><p className="eyebrow">05 / Contact</p><h2 id="contact-title">Let’s<br /><em>connect.</em></h2></div><div className="contact-copy"><p>For casting, creative collaborations,<br />and representation inquiries.</p>{actor.email ? <a className="contact-email" href={`mailto:${actor.email}`}>{actor.email} <Arrow /></a> : null}<p className="eyebrow">Chicago, Illinois</p></div></div></section>
    </main>
    <footer className="wrap"><a href="#top">Chelsea Pejic</a><span>Actor · Chicago</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
