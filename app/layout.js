import './globals.css';

export const metadata = {
  metadataBase: new URL('https://chelsea-pejic-website.vercel.app'),
  title: 'Chelsea Pejic | Chicago Actor',
  description: 'Chelsea Pejic is a Chicago-based actor pursuing film, television, theatre, and commercial work. Explore current work, headshots, media, and acting experience.',
  openGraph: {
    title: 'Chelsea Pejic | Chicago Actor',
    description: 'Film & television · Theatre · Commercial. Current work and acting portfolio.',
    type: 'website',
    locale: 'en_US',
  },
};

const navigation = [['About', 'about'], ['Headshots', 'headshots'], ['Media', 'media'], ['Résumé', 'resume'], ['Current work', 'current-work'], ['Contact', 'contact']];

export default function RootLayout({ children }) {
  return <html lang="en"><body id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap"><a className="wordmark" href="#top" aria-label="Chelsea Pejic home">Chelsea Pejic<span>Actor</span></a><nav aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></header>
    {children}
  </body></html>;
}
