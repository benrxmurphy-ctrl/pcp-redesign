export interface Project {
  id: string;
  title: string;
  industry: string;
  industryId: string;
  solution: string;
  solutionId: string;
  location: string;
  year: string;
  image: string;
  images: string[];
  result: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  productsUsed: string[];
  quote?: { text: string; author: string; role: string };
}

export const projects: Project[] = [
  {
    id: 'port-cork',
    title: 'Port of Cork — Bulk Cargo Dust Control',
    industry: 'Ports',
    industryId: 'ports',
    solution: 'Dust Suppression',
    solutionId: 'dust',
    location: 'Cork, Ireland',
    year: '2022',
    image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    images: [
      'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
      'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    ],
    result: 'Zero boundary complaints in 18 months following installation of MINIAT atomiser network.',
    challenge: 'Visible dust from fertiliser and grain unloading operations reaching the adjacent residential area, generating weekly complaints to the port authority and the local authority environmental section. The port\'s operating licence required demonstrable remediation action.',
    approach: 'A network of three MINIAT Mobile atomisers was positioned at the main bulk cargo berth, covering both the discharge point and the primary conveyor transfer. High-pressure fogging lines were installed along the boundary fence adjacent to the residential area. Wind-sensor automation ensures the fogging system activates when wind direction is towards the receptor.',
    outcomes: [
      'Zero boundary dust complaints in 18 months post-installation',
      'EPA environmental licence remediation condition closed out',
      'Significant reduction in visible dust across the whole berth area',
      'Port operations continued without interruption during installation',
      'System operating cost significantly lower than projected by client',
    ],
    productsUsed: ['miniat-mobile-atomiser', 'fogging-lines-dust'],
    quote: {
      text: 'The system has completely changed how we manage dust at the berth. We used to get calls from the council almost every week. We haven\'t had a single dust complaint since installation.',
      author: 'Operations Manager',
      role: 'Port Authority',
    },
  },
  {
    id: 'quarry-wicklow',
    title: 'Wicklow Quarry — Crusher Dust Suppression',
    industry: 'Quarrying',
    industryId: 'quarrying',
    solution: 'Dust Suppression',
    solutionId: 'dust',
    location: 'Wicklow, Ireland',
    year: '2023',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    images: [
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
      'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    ],
    result: '94% reduction in visible dust at crusher face. EPA inspection passed on first assessment.',
    challenge: 'Persistent dust from primary and secondary crushers creating visible dust clouds visible from the public road during dry weather. The quarry had received an improvement notice from the EPA requiring active dust management at the crusher face.',
    approach: 'DUSTELIM Foam was installed at the primary crusher feed and secondary crusher feed points. A MINIAT Mobile atomiser was positioned to cover the transfer between crushers. A high-pressure fogging line was installed along the quarry road perimeter. All systems were connected to a central control panel with manual override.',
    outcomes: [
      '94% reduction in visible dust measured at crusher face',
      'EPA improvement notice closed out — first inspection pass',
      'No visible dust from public road during normal operations',
      'Haul road dust addressed separately with rain gun deployment',
      'Full service and maintenance contract established',
    ],
    productsUsed: ['dustelim-foam', 'miniat-mobile-atomiser', 'fogging-lines-dust', 'rain-guns'],
    quote: {
      text: 'We\'d tried water systems before but they never really worked on the fine limestone dust. The foam system at the crusher feed made the biggest difference — the dust just doesn\'t lift off the material anymore.',
      author: 'Site Manager',
      role: 'Quarry Operations',
    },
  },
  {
    id: 'mrf-dublin',
    title: 'Dublin MRF — Tipping Hall Odour System',
    industry: 'Recycling',
    industryId: 'recycling',
    solution: 'Odour Control',
    solutionId: 'odour',
    location: 'Dublin, Ireland',
    year: '2023',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    images: [
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
      'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
      'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    ],
    result: 'Odour complaints reduced from 14 per month to zero within 8 weeks of installation.',
    challenge: 'Organic fraction tipping hall generating H2S and organic compound odours reaching a nearby housing estate during tipping operations. The facility received 14 documented complaints in a single month and faced formal enforcement action from the local authority.',
    approach: 'Vapour deodorising units were installed within the tipping hall to treat air at source. A high-pressure ODA fogging line was installed along the boundary fence between the facility and the housing estate. The system was integrated with tipping hall door sensors — suppression activates automatically when doors open.',
    outcomes: [
      'Complaints reduced from 14 per month to zero within 8 weeks',
      'Formal enforcement action from local authority withdrawn',
      'Tipping hall odour levels reduced significantly for workers',
      'Door-sensor automation prevents odour releases during tipping',
      'No disruption to facility operations throughout installation',
    ],
    productsUsed: ['vapour-deodorising', 'fogging-lines-odour', 'oda-liquids'],
    quote: {
      text: 'The source treatment gave us a much quicker response to complaint peaks. The site felt easier to manage and the impact outside the boundary reduced noticeably within weeks.',
      author: 'Operations Lead',
      role: 'Materials Recovery Facility',
    },
  },
  {
    id: 'wwtp-limerick',
    title: 'Limerick WWTP — H2S Odour Abatement',
    industry: 'Water Treatment',
    industryId: 'water-treatment',
    solution: 'Odour Control',
    solutionId: 'odour',
    location: 'Limerick, Ireland',
    year: '2021',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    images: [
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    ],
    result: '99.7% H2S removal achieved. Environmental licence renewal secured without condition breach.',
    challenge: 'Sludge dewatering and primary settlement generating H2S exceeding licence threshold during seasonal high-load periods. The facility faced licence condition breach at renewal, with significant reputational and operational implications for the water utility.',
    approach: 'ZC Odour Filters were installed at the primary settlement structure exhaust points and the sludge dewatering building. Acrulog H2S monitors were installed at the site boundary to provide real-time compliance data. The filtration system was designed for passive operation with active extraction available for high-load periods.',
    outcomes: [
      '99.7% H2S removal achieved across all filtered exhaust points',
      'Environmental licence renewed without odour-related conditions',
      'Real-time boundary monitoring data available for compliance reporting',
      'System operates passively at base load — no energy cost in normal conditions',
      'Full maintenance contract established with PCP Group engineers',
    ],
    productsUsed: ['zc-filtration', 'acrulog-h2s', 'vent-filters'],
    quote: {
      text: 'Once the abatement route was in place, the H2S issue stopped feeling reactive. We now have stable, documented performance data for every licence submission.',
      author: 'Environmental Engineer',
      role: 'Water Utility',
    },
  },
  {
    id: 'biomass-kildare',
    title: 'Kildare Biomass Plant — Wood Chip Dust Control',
    industry: 'Biomass',
    industryId: 'biomass',
    solution: 'Dust Extraction',
    solutionId: 'extraction',
    location: 'Kildare, Ireland',
    year: '2022',
    image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    images: [
      'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
      'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    ],
    result: 'Dust levels at extraction conveyor reduced below ATEX threshold. Insurance requirement met.',
    challenge: 'Fine wood chip dust accumulating in the enclosed fuel store and at the extraction conveyor creating fire and explosion risk. The facility\'s insurer had issued a formal requirement for demonstrable ATEX compliance improvement at the fuel reception and conveying area.',
    approach: 'Industrial vacuum systems with ATEX-rated components were installed at the fuel reception conveyor discharge and the enclosed fuel store transfer point. DUSTELIM Foam was applied at the receiving conveyor to suppress fine dust at the point of delivery. A dust monitoring system was installed to provide real-time ATEX zone data.',
    outcomes: [
      'Dust concentrations at conveyor reduced below ATEX lower explosive limit',
      'Insurance ATEX compliance requirement formally closed',
      'Real-time monitoring provides ongoing compliance evidence',
      'Fuel reception operations continued during phased installation',
      'Fire risk significantly reduced across fuel storage area',
    ],
    productsUsed: ['industrial-vacuums', 'dustelim-foam', 'dust-monitoring'],
    quote: {
      text: 'The ATEX requirement had been hanging over the project for months. PCP understood the compliance requirement immediately and designed a solution that met it without disrupting fuel delivery operations.',
      author: 'Plant Manager',
      role: 'Biomass Energy Facility',
    },
  },
  {
    id: 'construction-m50',
    title: 'M50 Construction — Site Dust Management',
    industry: 'Construction',
    industryId: 'construction',
    solution: 'Dust Suppression',
    solutionId: 'dust',
    location: 'Dublin, Ireland',
    year: '2023',
    image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg',
    images: [
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg',
      'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    ],
    result: 'Planning dust condition met throughout 14-month project duration. No enforcement notices received.',
    challenge: 'Major road construction project requiring active dust management to satisfy planning condition and protect adjacent residential properties and a primary school. The planning condition required evidence of active, continuous dust suppression throughout the project.',
    approach: 'Hired MINIAT Mobile atomisers were deployed at the primary earthworks and demolition zones. Hired fog cannons covered the material stockpile areas. Dust monitoring stations were installed at the site boundary adjacent to the residential zone and school, providing real-time data and an auditable compliance record for the planning authority.',
    outcomes: [
      'Planning dust condition satisfied throughout 14-month project',
      'No enforcement notices received from Dublin City Council',
      'Real-time monitoring data available for planning authority review',
      'School and residential areas shielded from visible dust throughout',
      'Hire arrangement reduced capital cost while meeting all requirements',
    ],
    productsUsed: ['miniat-mobile-atomiser', 'fog-cannon', 'dust-monitoring'],
    quote: {
      text: 'The hire arrangement was exactly what we needed for a time-limited project. The monitoring data gave us the evidence trail for the planning condition and we never had a dust enforcement issue throughout the project.',
      author: 'Site Engineer',
      role: 'Civil Engineering Contractor',
    },
  },
];

export const projectById = (id: string) => projects.find(p => p.id === id);
