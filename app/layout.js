import './globals.css';
import { actor } from './content';

export const metadata = {
  metadataBase: new URL('https://chelsea-pejic-website.vercel.app'),
  title: 'Chelsea Pejic | Chicago Actor',
  description: 'Chelsea Pejic is a Chicago-based actor working across theatre, film, television, and commercial performance.',
  openGraph: {
    title: 'Chelsea Pejic | Chicago Actor',
    description: 'Chicago actor · Theatre · Film & television · Commercial.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  const navigation = [
    ['About', 'about'],
    ...(actor.headshots.length ? [['Headshots', 'headshots']] : []),
    ...(actor.media.length ? [['Media', 'media']] : []),
    ['Résumé', 'resume'],
    ['Current work', 'current-work'],
    ['Contact', 'contact'],
  ];
  return <html lang="en"><body id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap"><a className="wordmark" href="#top" aria-label="Chelsea Pejic home">Chelsea Pejic<span>Actor</span></a><nav aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></header>
    {children}
  </body></html>;
}
