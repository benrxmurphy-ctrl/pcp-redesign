export interface Solution {
  id: string;
  title: string;
  tagline: string;
  heroStatement: string;
  heroImage: string;
  overview: string;
  challenges: string[];
  approaches: {
    title: string;
    description: string;
  }[];
  equipment: {
    name: string;
    description: string;
    image: string;
    productId?: string;
  }[];
  industries: string[];
  color: string;
  faqs?: { q: string; a: string }[];
}

export const solutions: Solution[] = [
  {
    id: 'dust',
    title: 'Dust Solutions',
    tagline: 'Keep dust below site limits.',
    heroStatement: 'Reduce airborne dust before it spreads across your site.',
    heroImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    overview: 'Dust suppression is designed to capture dust at source before it can spread through the wider environment. Effective at tipping areas, tanks, open process zones and transfer spaces.',
    challenges: [
      'Nuisance dust around task areas, tipping and transfer operations',
      'Complaint pressure from nearby residents, loading activity or material changes',
      'Pressure to reduce impact without major structural changes first',
      'Need for a practical response before progressing to a larger abatement project',
    ],
    approaches: [
      { title: 'Atomised Suppression', description: 'Dust suppression routes for first odour knockdown in open or semi-open source areas.' },
      { title: 'Misting Line Systems', description: 'Continuous suppression routes for repeated source points where visible coverage matters.' },
      { title: 'Perimeter Treatment', description: 'Support for where source control is needed closer to boundary or complaint-sensitive edges.' },
      { title: 'Tank & Hopper Dosing', description: 'Targeted treatment routes for tanks, hoppers and known process emission points.' },
    ],
    equipment: [
      { name: 'MINIAT Mobile Atomiser', productId: 'miniat-mobile-atomiser', description: 'Rotary atomiser providing significant dust suppression for waste recycling facilities and construction sites.', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg' },
      { name: 'Dust Cannons (Fog Cannon)', productId: 'fog-cannon', description: 'Large area dust suppression with 30–70 metre coverage for open stockpiles and loading areas.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
      { name: 'DUSTELIM Foam System', productId: 'dustelim-foam', description: 'More effective than water at trapping dust before it becomes airborne. Ideal for crushing and screening plants.', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg' },
      { name: 'High Pressure Fogging', productId: 'fogging-lines-dust', description: 'MINIAT Fog nozzle fogging lines — effective fence line dust suppression, also suitable for indoor recycling.', image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg' },
      { name: 'Rain Guns', productId: 'rain-guns', description: 'Uniform water droplet distribution for dust suppression over larger areas, haul roads and stockpiles.', image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg' },
      { name: 'Industrial Vacuums', productId: 'industrial-vacuums', description: 'Heavy-duty industrial vacuum systems for site clean-down. Available to purchase or hire.', image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg' },
    ],
    industries: ['Ports', 'Quarrying', 'Recycling', 'Waste', 'Construction', 'Manufacturing'],
    color: '#E8621A',
    faqs: [
      { q: 'Will dust suppression affect production speed or material quality?', a: 'No. Our systems treat material at conveyors, crushers, shredders and transfer points without reducing throughput or over-wetting materials.' },
      { q: 'How much water do your systems use?', a: 'Up to 90% less than traditional water spraying methods, thanks to fine mist and foam technology that bonds to dust particles rather than flooding the area.' },
      { q: 'Can dust suppression be automated?', a: 'Yes — systems can activate via conveyor start/stop signals, dust sensors, timers, or full PLC/SCADA integration, removing the need for manual operation.' },
      { q: 'Are your dust suppression agents environmentally safe?', a: 'All additives are biodegradable, non-toxic and safe for soil, water, marine and public environments.' },
      { q: 'Can one system cover multiple work areas?', a: 'Yes. Mobile cannons, trailer units and zoned fogging lines can serve multiple loading points, berths or production zones from a single installation.' },
      { q: 'Can you provide monitoring data for EPA audits and inspections?', a: 'Yes — we supply real-time particulate monitoring with cloud-based reporting to support EPA audits, ISO14001 frameworks and Environmental Management Plans.' },
      { q: 'Can systems run without mains water or power?', a: 'Yes. Self-contained units with integrated water tanks and generators are available for remote or temporary sites.' },
      { q: 'What is the typical return on investment?', a: 'Most sites recover costs within 12–24 months through reduced downtime, lower maintenance spend, fewer regulatory incidents and significantly reduced water consumption.' },
    ],
  },
  {
    id: 'metal',
    title: 'Tramp Metal Solutions',
    tagline: 'Protect your operations. Contamination stops here.',
    heroStatement: 'Stop tramp metal before it damages your equipment, contaminates your product or halts your operation.',
    heroImage: '/metal-industry-worker-sprays-protective-suit-night-generated-by-ai-scaled.jpg',
    overview: 'Tramp metal detection and magnetic separation protect conveyors, crushers, mills and processing lines from damage caused by unwanted metal contamination. PCP Group supplies and installs metal detectors and magnet systems across recycling, food, pharma, mining and manufacturing operations — with spares stocked locally in Ireland and full lifecycle support.',
    challenges: [
      'Tramp metal entering shredders, balers or crushers causing costly damage and unplanned downtime',
      'Contaminated product streams failing quality, HACCP or BRC compliance checks',
      'Mixed waste streams carrying ferrous and non-ferrous metal through processing lines',
      'No real-time detection to trigger conveyor stops before metal reaches critical equipment',
    ],
    approaches: [
      { title: 'Inline Metal Detection', description: 'Conveyor-mounted detectors stop lines instantly when tramp metal is identified — before damage occurs.' },
      { title: 'Magnetic Separation', description: 'Humps, grates and trap magnets remove ferrous metal continuously from product and material flows.' },
      { title: 'PLC / E-Stop Integration', description: 'Standard integration with existing plant control systems and SCADA — no separate operator intervention required.' },
      { title: 'Compliance Logging', description: 'All detection events are recorded and exportable for HACCP, BRC, ISO22000 and EPA audit requirements.' },
    ],
    equipment: [
      { name: 'Eriez X8 Metal Detectors', productId: 'eriez-x8-metal-detector', description: 'High-sensitivity conveyor metal detectors for ferrous and non-ferrous detection across industrial and food-grade applications.', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg' },
      { name: 'Metal Detectors', productId: 'inline-metal-detector', description: 'Inline detectors designed for mixed waste, recycling, mining and food processing lines. Integrates with PLC/E-stop.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
      { name: 'Magnetic Humps', productId: 'magnetic-hump', description: 'Installed over conveyor belts to continuously extract ferrous tramp metal from fast-moving material streams.', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg' },
      { name: 'Trap Magnets', productId: 'trap-magnet', description: 'Positioned at chutes and drop points to capture ferrous contamination before it enters downstream equipment.', image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg' },
      { name: 'Grate Magnets', productId: 'grate-magnet', description: 'Grid-style magnets for hoppers, gravity chutes and bin outlets — removes fine ferrous particles from bulk flows.', image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg' },
      { name: 'Gravity Separators', productId: 'gravity-separator', description: 'Separates tramp metal from free-flowing granular or powder materials in gravity-fed processing lines.', image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg' },
    ],
    industries: ['Recycling', 'Food Processing', 'Pharmaceutical', 'Mining & Minerals', 'Manufacturing', 'Animal Feed', 'Wood Processing', 'Packaging'],
    color: '#E8621A',
    faqs: [
      { q: 'Will tramp metal detection slow down throughput?', a: 'No — detectors run seamlessly inline, stopping the conveyor only when metal is actually detected. When no metal is present, production continues uninterrupted.' },
      { q: 'Can detectors integrate with our existing E-stop or PLC system?', a: 'Yes. Integration into PLC, SCADA and E-stop systems is standard. No separate operator intervention is required once configured.' },
      { q: 'Are detectors reliable in dusty or harsh environments like cement plants?', a: 'Yes — detectors are ruggedised and purpose-built for harsh industrial conditions including dust, heat, moisture and vibration.' },
      { q: 'How quickly can a system be deployed?', a: 'A temporary metal detection system can be deployed at short notice while a permanent bespoke solution is designed and manufactured for your specific application.' },
      { q: 'Do tramp metal detectors meet HACCP and BRC food safety standards?', a: 'Yes — PCP systems are designed for full compliance with HACCP, BRC and ISO22000, with validation documentation supplied for auditors.' },
      { q: 'Can detection events be logged for compliance audits?', a: 'Yes — all detection events are automatically recorded and can be exported for HACCP, BRC, ISO22000 and EPA audit requirements.' },
      { q: 'Are the systems high-maintenance?', a: 'No. Only simple calibration and visual checks are required, typically once per year. We also provide training for your in-house team.' },
      { q: 'What is the ROI on tramp metal detection?', a: 'Preventing a single catastrophic failure on a shredder, baler or crusher can save weeks of unplanned downtime. In food and pharma, avoiding one contamination recall can save far more.' },
    ],
  },
  {
    id: 'odour',
    title: 'Odour Solutions',
    tagline: 'Remove nuisance odours before they leave your site.',
    heroStatement: 'Treat nuisance odours at source before they spread across the wider site.',
    heroImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    overview: 'Odour control targets source emissions before they reach site boundaries. Effective for waste, water treatment, food processing and any operation generating persistent odour complaints.',
    challenges: [
      'Tipping halls, tanks, transfer buildings and yard boundaries generating complaints',
      'Targeted neutralising spray shaped around source points',
      'Quicker odour knockdown with fewer nuisance complaints',
      'Complaint peaks when changes to site operations increase odour impact',
    ],
    approaches: [
      { title: 'Source Suppression', description: 'Neutralise odour at the point of generation — tipping, sorting, transfer and storage.' },
      { title: 'Boundary Treatment', description: 'Perimeter fogging lines and vapour systems that intercept odour before it crosses the site edge.' },
      { title: 'Vapour Deodorising', description: 'Dry vapour with active chemistry for maximum contact time — indoor and outdoor applications.' },
      { title: 'ZC Filtration', description: 'Up to 99.9% H2S removal through adsorption, absorption and conversion of gaseous compounds.' },
    ],
    equipment: [
      { name: 'MINIAT Mobile Atomiser', productId: 'miniat-odour-atomiser', description: 'Rapid deployment odour suppression for leaks, spillages, waste and water treatment facilities.', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg' },
      { name: 'Fogging Line Systems', productId: 'fogging-lines-odour', description: 'High pressure fogging lines for boundary lines and tight indoor locations where coverage needs to be precise.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
      { name: 'Vapour Deodorising', productId: 'vapour-deodorising', description: 'Dry vapour deodorising for indoor and outdoor use. Active chemistry ensures maximum treatment contact time.', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg' },
      { name: 'Vent Odour Filters', productId: 'vent-filters', description: 'Passive or wind-assisted fan filters requiring no water or power. Fits most venting situations.', image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg' },
      { name: 'ZC Odour Filtration', productId: 'zc-filtration', description: '99.9% H2S gas removal through adsorption, absorption and conversion. Passive or active extraction.', image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg' },
      { name: 'Deodorising Liquids', productId: 'oda-liquids', description: 'Complete range of scented and unscented vaporising and suppression liquids to complement any system.', image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg' },
    ],
    industries: ['Waste', 'Water Treatment', 'Recycling', 'Food Processing', 'Ports', 'Manufacturing'],
    color: '#E8621A',
    faqs: [
      { q: 'Are your odour-neutralising agents safe for the environment?', a: 'Yes — all products are fully biodegradable, non-toxic and safe for use around water, soil and sensitive biological processes like anaerobic digestion.' },
      { q: 'Will installing a system help me meet regulatory requirements?', a: 'Yes — our solutions keep odour complaints to a minimum and provide documented evidence to satisfy local authority and EPA requirements.' },
      { q: 'Can odour suppression work alongside existing biofilters or scrubbers?', a: 'Yes — fogging and dosing systems complement existing odour treatment infrastructure, providing an extra layer of control during high-load periods.' },
      { q: 'Do suppression systems work effectively in enclosed halls?', a: 'Yes — our systems produce droplets sized to neutralise odours without saturating the air or wetting floor surfaces, making them ideal for tipping halls and transfer buildings.' },
      { q: 'Can the systems run automatically without operator input?', a: 'Yes — units can be sensor-triggered, timer-based and door-activated to match site activity, running entirely in the background.' },
      { q: 'Can you provide data and reporting to support compliance audits?', a: 'Absolutely — we provide equipment monitoring, control data and can recommend accredited labs for odour reporting to support EPA inspections and licence renewals.' },
      { q: 'Do you offer rental or emergency units for peak odour periods?', a: 'Yes — mobile trailer units are available for rapid deployment during high-odour events or while a permanent solution is being installed.' },
      { q: 'How will I know if my filtration system is starting to fail?', a: "PCP's Acrulog CEMS unit measures before and after performance on any filtration equipment, providing early warning of failing equipment before neighbourhood complaints arise." },
    ],
  },
  {
    id: 'air-filtration',
    title: 'Air Filtration',
    tagline: 'Protect workers from hazardous airborne particles.',
    heroStatement: 'Filter and clean contaminated air streams before they reach workers or leave your facility.',
    heroImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    overview: 'Air filtration captures fine particulate and hazardous emissions at source, protecting both workers and the environment from airborne contaminants generated during processing, handling and manufacturing.',
    challenges: [
      'Fine dust and particles created during processing that escape standard suppression',
      'Worker exposure to hazardous airborne materials requiring extraction at source',
      'Baghouse filter management for industrial productivity and compliance',
      'Stack emissions monitoring and control for EPA and OSHA compliance',
    ],
    approaches: [
      { title: 'Dust Extraction', description: 'Capture dust at the point of generation — conveyors, hoppers, crushers and transfer points.' },
      { title: 'Baghouse Management', description: 'FilterSense systems for baghouse monitoring, productivity and compliance management.' },
      { title: 'Stack Monitoring', description: 'Dynacharge particulate monitors for real-time stack dust emissions data.' },
      { title: 'Personnel Protection', description: 'JetBlack Safety clean-down booths and stations for workers exiting hazardous zones.' },
    ],
    equipment: [
      { name: 'Baghouse Filter Control', productId: 'baghouse-filterSense', description: 'FilterSense — #1 OEM choice for baghouse management, employee health, plant safety and EPA/OSHA compliance.', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg' },
      { name: 'Stack Particulate Monitors', productId: 'stack-monitors', description: 'Dynacharge monitors with Bluetooth data download for environmental results directly at the stack.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
      { name: 'Personnel De-Dusting', productId: 'jetblack-dedusting', description: 'JetBlack Safety cleaning booths and stations — limit exposure to hazardous dust when leaving site.', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg' },
    ],
    industries: ['Manufacturing', 'Quarrying', 'Recycling', 'Food Processing', 'Energy', 'Biomass'],
    color: '#E8621A',
  },
  {
    id: 'monitoring',
    title: 'Environmental Monitoring',
    tagline: 'Know your numbers before regulators do.',
    heroStatement: 'Measure dust, odour and air quality in real time so you can act before complaints arrive.',
    heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    overview: 'Environmental monitoring gives site managers the data they need to respond quickly to changing conditions, demonstrate compliance to regulators and identify where intervention will have the greatest impact.',
    challenges: [
      'Unknown emissions levels leaving the site vulnerable to complaints and enforcement',
      'No real-time data to trigger suppression systems before conditions deteriorate',
      'Difficulty demonstrating compliance during inspections without recorded data',
      'H2S and hazardous gas monitoring in harsh industrial conditions',
    ],
    approaches: [
      { title: 'Particulate Monitoring', description: 'Real-time dust and particle data at fence lines, stack outlets and process areas.' },
      { title: 'Odour Monitoring', description: 'Acrulog H2S and gas monitoring designed for harsh utility and industrial environments.' },
      { title: 'Stack Monitoring', description: 'Continuous emissions monitoring for stack compliance with EPA and environmental regulations.' },
      { title: 'Data Reporting', description: 'Bluetooth and remote data download for environmental reporting without site access.' },
    ],
    equipment: [
      { name: 'Dust Monitoring Systems', productId: 'dust-monitoring', description: 'Particulate monitoring to ensure health, safety and compliance. Data for informed suppression decisions.', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg' },
      { name: 'Acrulog H2S Monitoring', productId: 'acrulog-h2s', description: 'Dedicated odour and gas monitoring for utilities overcoming harsh monitoring environment challenges.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
      { name: 'Stack Emission Monitors', productId: 'stack-monitors', description: 'Dynacharge particulate monitors with Bluetooth download for direct stack emissions compliance data.', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg' },
    ],
    industries: ['Water Treatment', 'Manufacturing', 'Ports', 'Quarrying', 'Waste', 'Energy'],
    color: '#E8621A',
  },
  {
    id: 'extraction',
    title: 'Dust Extraction',
    tagline: 'Control dust around crushers, conveyors and stockpiles.',
    heroStatement: 'Extract dust at the point of generation before it becomes an airborne problem.',
    heroImage: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg',
    overview: 'Dust extraction captures particulate directly at the source — conveyors, transfer points, crushers and hoppers — preventing it from becoming airborne and spreading across the site or beyond the boundary.',
    challenges: [
      'Conveyors producing visible dust clouds at transfer and drop points',
      'Hopper and crusher operations generating high volumes of airborne particles',
      'Enclosed process areas where accumulated dust creates safety and compliance risks',
      'Persistent dust despite water-based suppression in dry or high-throughput conditions',
    ],
    approaches: [
      { title: 'Transfer Point Extraction', description: 'Capture dust at conveyor transfer and drop points before it becomes airborne.' },
      { title: 'Hopper & Crusher Extraction', description: 'Targeted extraction around crushing and screening operations where dust generation is highest.' },
      { title: 'Enclosed Area Filtration', description: 'Recirculating filtration for enclosed process areas, buildings and storage facilities.' },
      { title: 'Portable Units', description: 'Mobile extraction units for areas requiring flexible deployment across changing operations.' },
    ],
    equipment: [
      { name: 'Industrial Vacuum Systems', productId: 'industrial-vacuums', description: 'Heavy-duty vacuums for site clean-down and extraction. Available to purchase or hire.', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg' },
      { name: 'DUSTELIM Foam', productId: 'dustelim-foam', description: 'Traps dust at source before it becomes airborne — more effective than water at crusher and screen points.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
      { name: 'Baghouse Filter Systems', productId: 'baghouse-filterSense', description: 'FilterSense control systems for baghouse productivity, employee health and compliance management.', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg' },
    ],
    industries: ['Quarrying', 'Recycling', 'Construction', 'Manufacturing', 'Ports', 'Biomass'],
    color: '#E8621A',
  },
];

export const solutionById = (id: string) => solutions.find(s => s.id === id);
