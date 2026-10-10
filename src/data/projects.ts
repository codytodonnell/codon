export type ProjectMetadata = {
  id: string;
  to: string;
  title: string;
  shortTitle?: string;
  thumbnail: string;
  tags: string[];
  date: string;
  description: string;
  contributions: string[];
  coverImage: string;
  productType: string;
  prototypeInteractive: boolean;
  prototypeFile?: string;
  prototypeSection?: string;
  differentUrl?: string;
  videoUrl?: string;
};

export const projects: ProjectMetadata[] = [
  {
    id: 'materials-project',
    to: '/projects/materials-project',
    title: 'The Materials Project',
    thumbnail: 'materials-project-cover.png',
    tags: ['Civic Data', 'UX Design', 'Data Visualization'],
    date: '6/3/2022',
    description:
      'A materials science data platform with computed information on known and predicted materials as well as powerful analysis tools to inspire and design novel materials.',
    contributions: [],
    coverImage: 'materials-project-cover.png',
    productType: 'website',
    prototypeInteractive: true,
    differentUrl: 'https://next-gen.materialsproject.org',
  },
  {
    id: 'altstream',
    to: '/projects/altstream',
    title: 'The Alt Stream',
    thumbnail: 'altstream-thumbnail.png',
    tags: ['Data Visualization', 'D3'],
    date: '5/1/2016',
    description:
      'An exploratory visualization tool that examines the bands and sounds from the 90s Alternative Rock Movement.',
    contributions: [],
    coverImage: 'altstream-cover.png',
    productType: 'tool',
    prototypeInteractive: true,
  },
  {
    id: 'breuer',
    to: '/projects/breuer',
    title: 'Marcel Breuer Constituents Network',
    thumbnail: 'breuer-thumbnail.png',
    tags: ['Data Visualization', 'Civic Data', 'D3'],
    date: '8/1/2014',
    description:
      'An interactive network visualization of all the people represented in the Marcel Breuer Digital Archive.',
    contributions: [],
    coverImage: 'breuer-cover.png',
    productType: 'tool',
    prototypeInteractive: true,
  },
  {
    id: 'durations',
    to: '/projects/durations',
    title: 'Alternative Rock Durations',
    thumbnail: 'durations-thumbnail.png',
    tags: ['Data Visualization', 'R'],
    date: '11/1/2015',
    description:
      'A visualization of the song durations for each song by five of the most influential bands from the Alternative Rock Movement.',
    contributions: [],
    coverImage: 'durations-cover.png',
    productType: 'graphic',
    prototypeInteractive: false,
    prototypeFile: 'discographies.jpg',
  },
  {
    id: 'elemental',
    to: '/projects/elemental',
    title: 'Elemental',
    thumbnail: 'elemental-thumbnail.png',
    tags: ['Data Visualization', 'Education Technology', 'D3'],
    date: '5/1/2014',
    description:
      'An experimental learning tool for understanding the elements from the Periodic Table.',
    contributions: [],
    coverImage: 'elemental-cover.png',
    productType: 'tool',
    prototypeInteractive: true,
  },
  {
    id: 'exoplanets',
    to: '/projects/exoplanets',
    title: 'Exoplanets Interactive Catalog',
    thumbnail: 'exoplanets-thumb.png',
    tags: ['Data Visualization', 'Education Technology', 'D3'],
    date: '6/1/2016',
    description:
      'A web-based visualization tool for exploring over 2,000 known exoplanets and their stars.',
    contributions: [],
    coverImage: 'exoplanets-cover.jpg',
    productType: 'tool',
    prototypeInteractive: true,
  },
  {
    id: 'nirvfoo',
    to: '/projects/nirvfoo',
    title: 'Nirvana vs. Foo Fighters',
    thumbnail: 'nirvfoo-thumbnail.png',
    tags: ['Data Visualization', 'R'],
    date: '5/1/2016',
    description:
      'A collection of data visualizations comparing the careers of two popular alternative rock bands: Nirvana and Foo Fighters.',
    contributions: [],
    coverImage: 'nirvfoo-cover.png',
    productType: 'graphic',
    prototypeInteractive: false,
    prototypeFile: 'nirvfoo_web.jpg',
  },
  {
    id: 'tedx',
    to: '/projects/tedx',
    title: 'Taking the Next Step: TEDxSyracuseUniversity',
    shortTitle: 'Taking the Next Step',
    thumbnail: 'tedx-thumbnail.png',
    tags: ['Data Visualization', 'D3'],
    date: '4/1/2016',
    description:
      'An interactive tool for guests of TEDxSyracuseUniversity to learn more about the speakers they just saw.',
    contributions: [],
    coverImage: 'tedx-cover.png',
    productType: 'tool',
    prototypeInteractive: true,
  },
  {
    id: 'bookr',
    to: '/projects/bookr',
    title: 'Bookr',
    thumbnail: 'bookr-thumbnail.png',
    tags: ['UX Design', 'UX Research'],
    date: '12/1/2018',
    description: 'An evidence-based solution to help musicians book gigs.',
    contributions: [],
    coverImage: 'bookr-cover.png',
    productType: 'prototype',
    prototypeInteractive: false,
    prototypeSection: 'bookr-7',
  },
  {
    id: 'moes',
    to: '/projects/moes',
    title: "Moe's Voice",
    thumbnail: 'moes-thumbnail.png',
    tags: ['UX Design', 'UX Research'],
    date: '12/1/2018',
    description:
      'A user-centered research project to design voice interaction technology for Moe’s Southwest Grill.',
    contributions: [],
    coverImage: 'moes-cover.png',
    productType: 'prototype',
    prototypeInteractive: false,
    prototypeSection: 'moes-10',
  },
  {
    id: 'timothy',
    to: '/projects/timothy',
    title: 'Timothy the Turtle',
    thumbnail: 'timothy-thumbnail.png',
    tags: ['Education Technology', 'UX Design', 'UX Research'],
    date: '12/1/2018',
    description:
      'An educational web tool for teaching young children about turtles and tortoises through an interactive narrative.',
    contributions: [],
    coverImage: 'timothy-cover.png',
    productType: 'tool',
    prototypeInteractive: true,
  },
  {
    id: 'reshape',
    to: '/projects/reshape',
    title: 'ReShapeWeb',
    thumbnail: 'reshape-thumbnail.png',
    tags: ['Data Visualization', 'Education Technology', 'UX Research', 'Civic Data', 'D3'],
    date: '1/1/2020',
    description:
      'A web-based visualization tool built for students to critically analyze their movement, their relation to their city, and their relation to their data.',
    contributions: [],
    coverImage: 'reshape-cover.png',
    productType: 'tool',
    prototypeInteractive: true,
  },
  {
    id: 'maproom',
    to: '/projects/maproom',
    title: 'Map Room Teaching Toolkit',
    thumbnail: 'maproom-context.jpg',
    tags: ['Education Technology', 'UX Design', 'Civic Data'],
    date: '12/1/2019',
    description:
      'A collaborative mapping classroom activity designed to raise students’ awareness of the importance of equitable information dissemination during natural disasters.',
    contributions: [],
    coverImage: 'maproom-context.jpg',
    productType: 'toolkit',
    prototypeInteractive: false,
    prototypeFile: 'maproom-toolkit.pdf',
    videoUrl: 'https://www.youtube.com/embed/1bFRf7EgPJE',
  },
  {
    id: 'nhc-data-guide',
    to: '/projects/nhc-data-guide',
    title: 'Civic Data Guide: NHC Data Archive',
    thumbnail: 'nhc-data-guide-thumb.png',
    tags: ['Civic Data'],
    date: '12/1/2019',
    description:
      'A succinct and digestible guide to understanding the National Hurricane Center’s archive of Tropical Cyclone Reports.',
    contributions: [],
    coverImage: 'nhc-data-guide-front.png',
    productType: 'guide',
    prototypeInteractive: false,
    prototypeFile: 'nhc-data-guide.pdf',
  },
  {
    id: 'reefgauge',
    to: '/projects/reefgauge',
    title: 'ReefGauge',
    thumbnail: 'rg-thumb.png',
    tags: ['Data Visualization', 'Education Technology', 'UX Design', 'UX Research'],
    date: '3/1/2020',
    description:
      'A coral reef learning and data visualization tool designed for the scuba community.',
    contributions: [],
    coverImage: 'rg-functional-2.png',
    productType: 'tool',
    prototypeInteractive: true,
  },
];

export const projectsById: Record<string, ProjectMetadata> = Object.fromEntries(
  projects.map((project) => [project.id, project]),
);

export function getProjectById(id: string): ProjectMetadata {
  const project = projectsById[id];

  if (project === undefined) {
    throw new Error(`Project with id "${id}" was not found.`);
  }

  return project;
}
