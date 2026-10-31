export type NovaProject = readonly [title: string, category: string, imageUrl: string, imageAlt: string];

export interface NovaContent {
  projects: readonly NovaProject[];
  descriptions: readonly string[];
  labels: {
    logo: string;
    availability: string;
    nav: readonly string[];
    heroKicker: string;
    heroTitle: readonly string[];
    heroDescription: string;
    heroCta: string;
    sections: readonly string[];
    filters: readonly string[];
    pause: string;
    play: string;
    projectCount: string;
    projectBadge: string;
    projectCaption: string;
    archive: readonly string[];
    footerDescription: readonly string[];
    contactTitle: string;
    contactCta: string;
    shareLabel: string;
    copyLabel: string;
    closeLabel: string;
  };
  about: { eyebrow: string; title: string; paragraphs: readonly string[]; link: string };
  innovation: { eyebrow: string; title: string; description: readonly string[]; cards: readonly { title: string; icon: string; tag: string; summary: string; detail: string }[] };
  possibilities: { eyebrow: string; title: string; description: readonly string[]; cta: string; footer: readonly string[] };
}

export const novaContent: NovaContent = {
  projects: [
    ['Beyond the horizon', 'Art direction', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85', 'Dramatic mountain peaks beneath atmospheric clouds'],
    ['Synthetic nature', '3D & CGI', 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=85', 'A luminous violet nebula in deep space'],
    ['Concrete utopia', 'Photography', 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85', 'Sculptural white architecture against the sky'],
    ['After hours', 'Art direction', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85', 'Dreamlike purple and pink night sky'],
    ['Liquid state', '3D & CGI', 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1400&q=85', 'Fluid electric blue and violet gradients'],
    ['Into the void', 'Photography', 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=85', 'The glowing curve of Earth seen from orbit'],
    ['Desert frequency', 'Art direction', 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=85', 'Sculptural golden sand dunes'],
    ['Future in bloom', '3D & CGI', 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=85', 'Ocean waves meeting a soft blue horizon'],
  ],
  descriptions: [
    'An exploration of scale, silence, and landscapes that exist just beyond the familiar.',
    'Organic energy meets digital imagination in a study of light and impossible worlds.',
    'Finding a new perspective through architectural rhythm and negative space.',
    'A cinematic color story for the moments between day and night.',
    'An experiment in transformation, turning pure color into a digital landscape.',
    'A perspective shift exploring our connection to a world without borders.',
    'Minimal forms and infinite repetition, inspired by the natural geometry of the desert.',
    'An imagined future built around fluid shapes, open space, and quiet optimism.',
  ],
  labels: {
    logo: 'nova', availability: 'Available for select projects',
    nav: ['Work', 'About', 'Let\'s talk ↗'], heroKicker: 'DESIGNING TOMORROW, TODAY.',
    heroTitle: ['Beyond', 'Imagination.', 'Into the Future.'],
    heroDescription: 'Immersive worlds. Bold identities. Digital experiences that live beyond the screen.',
    heroCta: 'Explore the future ↗', sections: ['01 / ABOUT THE FUTURE', '02 / INNOVATION SHOWCASE', '03 / DIGITAL EXPERIENCES', '04 / EXPLORE POSSIBILITIES'],
    filters: ['All work', 'Art direction', '3D & CGI', 'Photography'], pause: 'Pause animations', play: 'Play animations', projectCount: '08', projectBadge: 'MOTION STUDY', projectCaption: 'NOVA STUDIO — VISUAL EXPLORATIONS', archive: ['END OF SELECTION', 'ALWAYS EXPLORING. ALWAYS EVOLVING.'], footerDescription: ['Independent minds.', 'Extraordinary futures.'], contactTitle: 'Have a wild idea?', contactCta: 'Let\'s make it real. ↗', shareLabel: 'Share portfolio on LinkedIn', copyLabel: 'Copy portfolio link', closeLabel: 'Close project',
  },
  about: { eyebrow: 'A DIFFERENT WAY TO SEE.', title: "The future isn't somewhere we go. It's something we create.", paragraphs: ['We imagine a world where technology feels instinctive and every digital encounter inspires something real. Where a bold idea becomes an identity, an experience, or an entirely new reality.', 'Nova is a concept studio at the meeting point of design and possibility. These visual explorations are our invitation to look beyond the familiar.'], link: 'Discover our approach ↗' },
  innovation: { eyebrow: 'Ideas with no edges.', title: 'New tools. Unfamiliar perspectives.', description: ['One endlessly curious creative practice.'], cards: [{ title: 'Spatial worlds', icon: 'spatial', tag: '01 / IMMERSIVE DESIGN', summary: 'Experiences that extend beyond the frame.', detail: 'We explore spatial interfaces, dimensional storytelling, and environments that invite people to step inside the idea.' }, { title: 'Intelligent artistry', icon: 'intelligence', tag: '02 / GENERATIVE THINKING', summary: 'Human intuition. Computational possibility.', detail: 'A creative practice where emerging tools open new directions in composition, material, and visual expression, guided by a human point of view.' }, { title: 'Living identities', icon: 'identity', tag: '03 / DIGITAL EXPRESSION', summary: 'Brands designed to move, adapt, and connect.', detail: 'Visual systems imagined in motion: expressive typography, responsive interactions, and a recognizable character across every touchpoint.' }] },
  possibilities: { eyebrow: 'What if was just the beginning?', title: 'The next extraordinary experience starts with a single, wonderfully unexpected idea.', description: ['NO BLUEPRINT. NO BOUNDARIES.', 'ONLY POSSIBILITY. ✦'], cta: 'Make the leap ↗', footer: ['NO BLUEPRINT. NO BOUNDARIES.', 'ONLY POSSIBILITY. ✦'] },
};
