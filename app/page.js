export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">ACTOR • CHICAGO</p>

          <h1>
            CHELSEA
            <br />
            PEJIC
          </h1>

          <p className="intro">
            Chicago-based actor bringing intelligence, emotional depth,
            strength, and authenticity to stage and screen.
          </p>

          <div className="buttons">
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>

        <div className="photoPlaceholder">
          <span>HEADSHOT</span>
          <small>Professional photo coming soon</small>
        </div>
      </section>

      <section className="about" id="about">
        <p className="sectionLabel">ABOUT</p>

        <h2>Story. Character. Truth.</h2>

        <p>
          Chelsea Pejic is a Chicago-based actor pursuing work in film,
          television, theatre, and commercial projects. With a professional
          background as an attorney and compliance executive, she brings
          intelligence, presence, life experience, and a distinctive point
          of view to her work as an actor.
        </p>
      </section>

      <section className="work">
        <div>
          <p className="sectionLabel">HEADSHOTS</p>
          <h3>Gallery</h3>
          <p>New professional headshots coming soon.</p>
        </div>

        <div>
          <p className="sectionLabel">RÉSUMÉ</p>
          <h3>Experience & Training</h3>
          <p>View acting credits, training, and special skills.</p>
        </div>

        <div>
          <p className="sectionLabel">MEDIA</p>
          <h3>Reel & Clips</h3>
          <p>Performance footage and self-tape selections.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel">CONTACT</p>
        <h2>Let's work together.</h2>
        <p>Chicago, Illinois</p>
        <p>Representation and professional inquiries</p>
      </section>

      <footer>
        <span>CHELSEA PEJIC</span>
        <span>ACTOR • CHICAGO</span>
      </footer>
    </main>
  );
}
