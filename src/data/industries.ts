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
    id: 'waste-recycling',
    name: 'Waste Recycling',
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
    id: 'wastewater-treatment',
    name: 'Wastewater Treatment',
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
    id: 'quarry',
    name: 'Quarry',
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
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    tagline: 'Meet strict air quality standards in cleanroom and production environments.',
    heroImage: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg',
    overview: 'Pharmaceutical manufacturing demands the highest standards for air quality and dust control. Fine active ingredient dust, solvent vapours and cross-contamination risks require precision extraction and filtration solutions.',
    challenges: [
      'Active pharmaceutical ingredient dust creating operator exposure risk',
      'Cross-contamination between product runs requiring full extraction',
      'Solvent vapour and fume control to meet occupational exposure limits',
      'Regulatory compliance (GMP, COSHH) requiring validated systems',
    ],
    solutions: ['extraction', 'air-filtration', 'monitoring'],
    stats: [{ value: 'GMP', label: 'Compliant solutions' }, { value: '99.99%', label: 'HEPA filtration efficiency' }, { value: '0', label: 'Cross-contamination tolerance' }],
  },
  {
    id: 'wood-processing',
    name: 'Wood Processing',
    tagline: 'Extract fine wood dust at source and protect your workforce.',
    heroImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    overview: 'Wood processing operations produce fine wood dust that presents both health hazards and fire risks. From sawmills and joinery shops to panel board production, effective extraction at source is essential for compliance and safety.',
    challenges: [
      'Fine wood dust exposure exceeding WEL limits without effective extraction',
      'Sawdust accumulation creating fire and explosion risk in enclosed areas',
      'ATEX rated extraction required in high-risk dust accumulation zones',
      'Dust from CNC routing, sanding and finishing operations',
    ],
    solutions: ['extraction', 'air-filtration'],
    stats: [{ value: 'ATEX', label: 'Rated systems available' }, { value: 'WEL', label: 'Compliance supported' }, { value: '100+', label: 'Wood sector installations' }],
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
  {
    id: 'ad-plants',
    name: 'AD Plants',
    tagline: 'Manage odour from feedstock intake to digestate handling.',
    heroImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    overview: 'Anaerobic digestion plants process organic waste streams that generate strong odours during intake, handling, digestion and digestate processing. Reliable odour control is critical to planning consent and community relations.',
    challenges: [
      'Feedstock intake odour from food waste, slurry and organic material',
      'Digestate handling and storage producing H2S and organic compound odour',
      'Biogas venting or leakage creating boundary odour incidents',
      'Planning condition compliance requiring continuous odour management',
    ],
    solutions: ['odour', 'monitoring'],
    stats: [{ value: '99%', label: 'Odour removal achievable' }, { value: '50+', label: 'AD plant projects' }, { value: 'Real-time', label: 'Monitoring available' }],
  },
  {
    id: 'animal-feed',
    name: 'Animal Feed',
    tagline: 'Control dust and odour from ingredient handling to finished product.',
    heroImage: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    overview: 'Animal feed production involves handling dusty raw ingredients, grinding, mixing and pelleting processes that generate significant airborne dust. Odour from organic raw materials also requires active management.',
    challenges: [
      'Grain, fishmeal and ingredient dust during intake and handling',
      'Hammer mill and grinder operations producing high-volume fine dust',
      'Odour from fishmeal, blood meal and organic raw material storage',
      'Pellet mill cooling exhaust carrying dust and process odour',
    ],
    solutions: ['dust', 'extraction', 'odour'],
    stats: [{ value: '100+', label: 'Feed mill installations' }, { value: '99%', label: 'Dust capture rate' }, { value: '24/7', label: 'System uptime' }],
  },
  {
    id: 'meat-production',
    name: 'Meat Production',
    tagline: 'Manage odour and maintain hygiene standards across processing.',
    heroImage: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    overview: 'Meat processing facilities generate persistent odour from rendering, cooking, waste handling and effluent treatment. Managing boundary odour while maintaining strict hygiene standards requires specialist solutions.',
    challenges: [
      'Rendering and cooking process odour reaching site boundaries',
      'Blood, offal and organic waste storage generating strong compound odours',
      'Effluent treatment and lairage areas producing H2S and ammonia',
      'Planning and environmental permit compliance for odour emissions',
    ],
    solutions: ['odour', 'monitoring'],
    stats: [{ value: '99%', label: 'Odour compound removal' }, { value: '75+', label: 'Meat sector projects' }, { value: 'HACCP', label: 'Compatible systems' }],
  },
  {
    id: 'concrete-cement',
    name: 'Concrete & Cement Production',
    tagline: 'Suppress cement dust and protect plant boundaries and workers.',
    heroImage: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    overview: 'Cement and concrete production generates fine alkaline dust at every stage — from raw material handling and kiln operations to finish grinding and dispatch. Worker protection and environmental compliance demand reliable dust control.',
    challenges: [
      'Cement and raw meal dust from milling, transfer and storage operations',
      'Clinker and aggregate dust during loading, unloading and conveying',
      'Kiln and cooler exhaust particulate requiring continuous monitoring',
      'Boundary dust complaints from neighbouring properties and roads',
    ],
    solutions: ['dust', 'extraction', 'monitoring'],
    stats: [{ value: '95%', label: 'Dust suppression achieved' }, { value: '50+', label: 'Cement sector projects' }, { value: '24/7', label: 'Monitoring capability' }],
  },
];

export const industryById = (id: string) => industries.find(i => i.id === id);
