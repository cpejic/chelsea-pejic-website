// Keep approved assets and contact details here. Paths are relative to /public.
// Leave unavailable material null; the site omits it until it is ready.
export const actor = {
  name: 'Chelsea Pejic',
  email: 'chelsea@chelseapejic.com',
  phone: '773-335-9603',
  location: 'Chicago, Illinois',
  height: `5'6"`,
  eyes: 'Brown',
  hair: 'Brown',
  resumePdf: null,
  heroImage: null, // { src: '/headshots/chelsea.jpg', alt: 'Chelsea Pejic', position: '50% 35%' }
  headshots: [], // { src, alt, label } — theatrical and commercial looks
  media: [], // { title, description, url } — approved clips or reel URLs
};

export const resume = [
  { category: 'Theatre', entries: [
    { title: 'The Dinner', detail: 'Improviser · Theater Momentum' },
  ] },
  { category: 'Training', entries: [
    { title: 'Shurtleff Scene Study', detail: 'Jack Bronis · Acting Studio Chicago' },
    { title: 'Script Analysis', detail: 'Jennie Moreau · Acting Studio Chicago' },
    { title: 'Improv Fundamentals', detail: 'Sean Sullivan · Second City Training Center' },
    { title: 'Intro to On Camera', detail: 'Sarah Charipar · Acting Studio Chicago' },
    { title: 'Advanced Scene Study', detail: 'Adrianne Curry · Acting Studio Chicago' },
  ] },
];

export const specialSkills = [
  'Attorney',
  'Financial Anti-Money Laundering Compliance',
  'Public Speaking',
  'Waitress',
  'Restaurant Hostess',
  'Au Pair',
  'Hiking',
  'Biking',
  'Animal Care',
  'Driver',
  'Travel',
  'Typing',
  'Former Vatican Tour Guide',
  'Casual Basketball',
  'Casual Tennis',
  'Casual Pickleball',
];
