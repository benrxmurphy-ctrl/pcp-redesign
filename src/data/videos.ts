export interface VideoGuide {
  id: string;
  title: string;
  topic: string;
  duration: string;
  thumbnail: string;
  description: string;
  solutionId?: string;
  highlights: string[];
}

export const videoGuides: VideoGuide[] = [
  {
    id: 'how-miniat-atomiser-works',
    title: 'How the MINIAT Atomiser Works',
    topic: 'Dust Suppression',
    duration: '4:32',
    thumbnail: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    description: 'A walkthrough of the MINIAT Mobile rotary atomiser — how it generates fine mist, what happens when it contacts dust particles, and how to deploy it on site in under 30 minutes.',
    solutionId: 'dust',
    highlights: [
      'Rotary drum atomisation explained',
      'Droplet size and dust capture mechanism',
      'On-site deployment walkthrough',
      'Hire vs purchase — when to choose each',
    ],
  },
  {
    id: 'quarry-dust-management',
    title: 'Quarry Dust Management — A Site Walkthrough',
    topic: 'Quarrying',
    duration: '7:15',
    thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    description: 'PCP Group engineers walk through an active quarry site, identifying each dust source and explaining which suppression method is most effective at each point — from crusher face to haul road to stockpile.',
    solutionId: 'dust',
    highlights: [
      'Crusher face dust — foam vs water comparison',
      'Haul road treatment options',
      'Stockpile suppression with fog cannon',
      'Boundary fence fogging line installation',
    ],
  },
  {
    id: 'epa-compliance-explained',
    title: 'EPA Dust Compliance — What Site Operators Need to Know',
    topic: 'Compliance',
    duration: '6:48',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    description: 'A concise guide to Irish EPA dust compliance requirements — what licenced sites must demonstrate, what local authority planning conditions typically require, and how to build a defensible monitoring record.',
    highlights: [
      'IEL licence requirements simplified',
      'Planning condition dust management',
      'What EPA inspectors look for',
      'Building a compliant monitoring record',
    ],
  },
  {
    id: 'odour-suppression-vs-abatement',
    title: 'Odour Suppression vs Abatement — Choosing the Right Approach',
    topic: 'Odour Control',
    duration: '5:20',
    thumbnail: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    description: 'When should you use a mist suppression system and when do you need abatement filtration? This video explains the key differences, when to layer both approaches and how to decide which is right for your operation.',
    solutionId: 'odour',
    highlights: [
      'Suppression: what it is, when it works',
      'Abatement: enclosed sources and high H2S',
      'Layered approach — combining both',
      'Decision criteria for your site',
    ],
  },
  {
    id: 'filtersen-baghouse-setup',
    title: 'FilterSense Baghouse Control — System Overview',
    topic: 'Air Filtration',
    duration: '8:05',
    thumbnail: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    description: 'An overview of how FilterSense baghouse management goes beyond differential pressure monitoring to provide continuous bag leak detection, optimised cleaning and real-time emissions data.',
    solutionId: 'air-filtration',
    highlights: [
      'Why differential pressure alone is not enough',
      'Triboelectric bag leak detection explained',
      'Demand-based pulse-jet cleaning — the saving',
      'Compliance data logging and reporting',
    ],
  },
  {
    id: 'h2s-wastewater-treatment',
    title: 'H2S Odour Control at Wastewater Treatment Plants',
    topic: 'Water Treatment',
    duration: '9:12',
    thumbnail: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    description: 'Where H2S is generated at Irish WWTPs, why standard monitors fail in wet environments, and which treatment approach is most effective for each source type — from primary settlement to pump stations.',
    solutionId: 'odour',
    highlights: [
      'H2S generation at each WWTP process stage',
      'Monitoring challenges in harsh environments',
      'ZC filtration for enclosed structures',
      'Boundary suppression for open treatment',
    ],
  },
  {
    id: 'dust-monitoring-selection',
    title: 'Selecting the Right Dust Monitor for Your Site',
    topic: 'Monitoring',
    duration: '5:55',
    thumbnail: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    description: 'The different types of dust monitor explained — optical particle counters, triboelectric sensors and gravimetric samplers — and how to choose based on what the data will be used for.',
    solutionId: 'monitoring',
    highlights: [
      'Three monitor types — when to use each',
      'Triggering automated suppression systems',
      'EPA-defensible compliance data',
      'Optimal boundary monitor placement',
    ],
  },
  {
    id: 'construction-dust-planning',
    title: 'Construction Site Dust Management — Planning Requirements',
    topic: 'Construction',
    duration: '6:30',
    thumbnail: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    description: 'What planning authorities require for dust management on Irish construction projects, why hire is the cost-effective choice for contractors, and how to satisfy planning conditions with a monitoring record.',
    solutionId: 'dust',
    highlights: [
      'When dust is a planning condition',
      'Construction dust sources and risks',
      'Hire options for project-duration sites',
      'Satisfying planning condition monitoring',
    ],
  },
];
