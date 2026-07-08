export interface Industry {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  stats: { value: string; label: string }[];
}

export const industries: Industry[] = [
  {
    id: 'ports',
    name: 'Ports',
    tagline: 'Keep bulk handling operations within environmental limits.',
    heroImage: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    overview: 'Port operations involving bulk cargo loading, unloading and storage generate significant dust and odour that can affect neighbouring communities, shipping lanes and environmental permit conditions.',
    challenges: [
      'Dust from bulk commodity loading, unloading and stockpile management',
      'Odour from organic cargo — fertilisers, wood chips, biomass, animal feed',
      'Boundary complaints from nearby residential and commercial areas',
      'Environmental permit compliance for dust and emissions',
    ],
    solutions: ['dust', 'odour', 'monitoring'],
    stats: [{ value: '50+', label: 'Port projects delivered' }, { value: '30m', label: 'Cannon throw distance' }, { value: '24/7', label: 'System uptime capability' }],
  },
  {
    id: 'quarrying',
    name: 'Quarrying',
    tagline: 'Suppress dust at crushing, screening and haulage points.',
    heroImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    overview: 'Quarrying operations generate dust at every stage — blasting, crushing, screening, stockpiling and haulage. Without active suppression, dust drifts beyond site boundaries creating complaints and regulatory risk.',
    challenges: [
      'Crusher and screen operations generating high volumes of fine dust',
      'Haul road dust visible from public roads and nearby properties',
      'Perimeter dust crossing site boundaries despite existing controls',
      'Changing weather conditions making dust suppression unpredictable',
    ],
    solutions: ['dust', 'extraction', 'monitoring'],
    stats: [{ value: '70m', label: 'Maximum cannon coverage' }, { value: '95%', label: 'Dust reduction achievable' }, { value: '50+', label: 'Years in quarry dust control' }],
  },
  {
    id: 'recycling',
    name: 'Recycling',
    tagline: 'Control dust and odour across tipping, sorting and processing.',
    heroImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    overview: 'Recycling facilities face dust and odour challenges at every stage of the material flow — from tipping and shredding to sorting, baling and dispatch. Neighbour complaints and planning compliance require active, consistent control.',
    challenges: [
      'Tipping hall dust and odour generated during material delivery',
      'Shredder and granulator operations producing fine airborne particles',
      'Organic fraction odour from wet recyclables and composting fractions',
      'Boundary complaints from residential areas surrounding the facility',
    ],
    solutions: ['dust', 'odour', 'extraction'],
    stats: [{ value: '200+', label: 'Recycling sites served' }, { value: '99%', label: 'H2S removal achievable' }, { value: '30min', label: 'Rapid deployment option' }],
  },
  {
    id: 'waste',
    name: 'Waste',
    tagline: 'Manage odour and dust from waste reception to final disposal.',
    heroImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    overview: 'Waste management sites face some of the most challenging combinations of dust and odour. Mixed waste streams, biological activity and high throughput create persistent environmental challenges that require robust, reliable solutions.',
    challenges: [
      'Tipping hall and waste bay odour from incoming organic material',
      'Leachate and process water generating persistent boundary odour',
      'Dust from dry waste fractions during tipping, sorting and processing',
      'Environmental permit compliance for odour and particulate emissions',
    ],
    solutions: ['odour', 'dust', 'monitoring'],
    stats: [{ value: '150+', label: 'Waste facility projects' }, { value: '365', label: 'Days per year operation' }, { value: '50+', label: 'Years serving this sector' }],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Protect workers and maintain air quality across production.',
    heroImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    overview: 'Manufacturing facilities generate airborne dust, fumes and odour from a wide range of processes. Worker health, environmental compliance and community relations all depend on effective extraction and suppression.',
    challenges: [
      'Process dust from cutting, grinding, mixing or handling dry materials',
      'Fume and odour from chemical processes, heating or surface treatment',
      'Worker exposure to fine particulate requiring extraction at source',
      'Stack emissions requiring continuous monitoring for permit compliance',
    ],
    solutions: ['air-filtration', 'extraction', 'monitoring'],
    stats: [{ value: '300+', label: 'Manufacturing installations' }, { value: '99.9%', label: 'Filtration efficiency' }, { value: '24/7', label: 'Continuous monitoring' }],
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    tagline: 'Control dust and odour without disrupting production.',
    heroImage: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    overview: 'Food processing facilities require dust and odour control that meets both environmental standards and food safety requirements. Solutions must be hygienic, non-contaminating and deployable without interrupting production.',
    challenges: [
      'Dust from dry ingredient handling, mixing and packaging',
      'Process odour from cooking, rendering, fermentation or waste treatment',
      'Strict hygiene requirements limiting conventional suppression methods',
      'Pest attraction concerns from uncontrolled organic odour at boundaries',
    ],
    solutions: ['dust', 'odour', 'air-filtration'],
    stats: [{ value: 'HACCP', label: 'Compatible solutions' }, { value: '100+', label: 'Food sector installations' }, { value: '0', label: 'Production disruption goal' }],
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    tagline: 'Eliminate H2S and sewage odour from treatment works.',
    heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    overview: 'Water and wastewater treatment plants generate H2S and other odorous gases from biological processes. Reliable odour control is essential for maintaining community relations and meeting environmental licence conditions.',
    challenges: [
      'H2S and organic compound odour from primary and secondary treatment',
      'Sludge handling, dewatering and storage generating persistent odour',
      'Pump station and sewer network vent odour affecting surrounding areas',
      'Monitoring and reporting odour levels to demonstrate permit compliance',
    ],
    solutions: ['odour', 'monitoring'],
    stats: [{ value: '99.9%', label: 'H2S removal achievable' }, { value: '75+', label: 'Water utility projects' }, { value: 'Real-time', label: 'H2S monitoring available' }],
  },
  {
    id: 'energy',
    name: 'Energy',
    tagline: 'Control emissions from biomass, waste-to-energy and combustion.',
    heroImage: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg',
    overview: 'Energy facilities handling biomass, waste-derived fuels and combustion processes face complex dust and odour challenges. Fuel handling, storage and processing all require active environmental management.',
    challenges: [
      'Biomass and wood chip dust from delivery, storage and conveying',
      'Odour from organic fuel feedstocks during storage and handling',
      'Stack and process emissions requiring continuous monitoring',
      'Enclosed fuel storage creating fine dust accumulation risks',
    ],
    solutions: ['dust', 'extraction', 'monitoring'],
    stats: [{ value: '50+', label: 'Energy sector projects' }, { value: 'IEX', label: 'Compliance standards met' }, { value: '24/7', label: 'Monitoring capability' }],
  },
  {
    id: 'construction',
    name: 'Construction',
    tagline: 'Manage site dust to protect neighbours and meet planning conditions.',
    heroImage: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    overview: 'Construction sites generate dust from earthworks, demolition, material handling and road works. Planning conditions and local authority requirements demand visible, documented dust control measures throughout the project.',
    challenges: [
      'Earthworks and demolition creating visible dust clouds during dry conditions',
      'Site access roads generating wheel wash and haul road dust',
      'Material stockpiles producing wind-blown dust affecting neighbours',
      'Planning condition compliance requiring evidence of active dust management',
    ],
    solutions: ['dust', 'monitoring'],
    stats: [{ value: '500+', label: 'Construction site deployments' }, { value: '30min', label: 'Rapid site deployment' }, { value: 'Hire', label: 'Equipment available for hire' }],
  },
  {
    id: 'biomass',
    name: 'Biomass',
    tagline: 'Suppress dust from wood chip, pellet and organic fuel handling.',
    heroImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    overview: 'Biomass handling operations dealing with wood chip, pellets, straw and organic matter face consistent dust challenges across delivery, storage, conveying and feeding operations.',
    challenges: [
      'Fine wood dust from chip and pellet conveying, transfer and storage',
      'Enclosed fuel store accumulation creating fire and health risks',
      'Delivery and tipping operations generating visible dust at reception',
      'ATEX zone requirements in enclosed biomass storage environments',
    ],
    solutions: ['dust', 'extraction', 'air-filtration'],
    stats: [{ value: 'ATEX', label: 'Rated solutions available' }, { value: '80+', label: 'Biomass installations' }, { value: '50+', label: 'Years biomass experience' }],
  },
];

export const industryById = (id: string) => industries.find(i => i.id === id);
