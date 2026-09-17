// Keep approved assets and contact details here. Paths are relative to /public.
// Leave unavailable material null; the site renders an honest, intentional state.
export const actor = {
  name: 'Chelsea Pejic',
  email: null,
  resumePdf: null,
  heroImage: null, // { src: '/headshots/chelsea.jpg', alt: 'Chelsea Pejic', position: '50% 35%' }
  headshots: [], // { src, alt, label } — theatrical and commercial looks
  media: [], // { title, description, url } — approved clips or reel URLs
};

export const resume = [
  { category: 'Theatre', entries: [{ title: 'The Dinner', detail: 'Theater Momentum · Dramatic improvisation · 2026' }] },
  { category: 'Film & television', entries: [] },
  { category: 'Commercial', entries: [] },
  { category: 'Training', entries: [], note: 'Ongoing acting training since 2026. Class and instructor details to follow.' },
  { category: 'Special skills', entries: [], note: 'Details to follow.' },
];
