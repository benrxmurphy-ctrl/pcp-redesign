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
  faqs?: { category: string; questions: { q: string; a: string }[] }[];
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
      {
        category: 'Quarrying & Aggregates',
        questions: [
          { q: 'Will dust suppression affect throughput at crushers and screens?', a: 'No — systems install at transfer points and crusher heads without affecting production rates or over-wetting material.' },
          { q: 'Can systems handle high dust loads from blasting or primary crushing?', a: 'Yes — fog cannons and atomisers are rated for high-volume dust events including blasting zones and active crusher faces.' },
          { q: 'Can you provide monitoring data for EPA aggregate licence conditions?', a: 'Yes — real-time particulate monitors with cloud reporting support EPA licence conditions, site-specific limits and inspection evidence.' },
          { q: 'Can equipment run unattended during quarry operations?', a: 'Yes — systems integrate with conveyor start/stop signals or wind-triggered sensors for fully automatic operation.' },
        ],
      },
      {
        category: 'Waste & Recycling',
        questions: [
          { q: 'Will dust suppression affect material quality in our shredder or MRF?', a: 'No — fine mist and foam technology bonds to dust particles without over-wetting, keeping material quality and downstream processing intact.' },
          { q: 'Can one system cover multiple loading bays or processing lines?', a: 'Yes — mobile cannons, trailer units and zoned fogging systems can serve multiple areas from a single installation.' },
          { q: 'Can systems run automatically without operator input?', a: 'Yes — units activate via conveyor signals, dust sensors or timers with no manual intervention required.' },
          { q: 'Can you provide compliance data for our waste facility permit?', a: 'Yes — monitoring systems log particulate data in real time, exportable for EPA, ISO14001 and Environmental Management Plans.' },
        ],
      },
      {
        category: 'Ports & Bulk Handling',
        questions: [
          { q: 'Can dust suppression handle open, exposed berths and large stockpile areas?', a: 'Yes — fog cannons deliver 30–70 metre throw for wide coverage across berths, stockpiles and open loading zones.' },
          { q: 'Will suppression affect cargo quality at import or export terminals?', a: 'No — mist droplets are sized to bind dust particles without over-wetting bulk cargo, grain or aggregate quality.' },
          { q: 'Can systems run in coastal conditions with wind and salt exposure?', a: 'Yes — housings are rated for marine environments and systems can be triggered automatically by wind sensors.' },
          { q: 'How much water does suppression use at a busy terminal?', a: 'Up to 90% less than traditional water spraying — fine mist bonds to dust particles rather than flooding the area or cargo.' },
        ],
      },
      {
        category: 'Construction',
        questions: [
          { q: 'Are your systems suitable for demolition and excavation dust?', a: 'Yes — mobile atomisers and trailer units deploy quickly to dust events from breaking, excavation and demolition activity.' },
          { q: 'Can self-contained units work without a mains water supply?', a: 'Yes — units with integrated water tanks and generators are available for remote sites without utilities.' },
          { q: 'Can I hire rather than purchase equipment for a short project?', a: 'Yes — mobile dust suppression units are available on short-term hire for construction projects and temporary sites.' },
          { q: 'Are your dust suppression agents safe around the public?', a: 'Yes — all additives are biodegradable, non-toxic and safe for use around water, soil and public environments.' },
        ],
      },
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
      {
        category: 'Recycling & Waste',
        questions: [
          { q: 'How can tramp metal detection protect our shredders and balers?', a: 'PCP detectors stop conveyor belts instantly before damaging metal reaches shredders, balers or downstream processing equipment — preventing costly unplanned breakdowns.' },
          { q: 'Can one detector cover multiple conveyors?', a: 'No — metal detectors are calibrated to the specific requirements of each individual processing line to ensure reliable performance.' },
          { q: 'How quickly can a system be deployed for urgent protection?', a: 'A temporary detector can be on site at short notice while a permanent bespoke solution is designed and manufactured for your application.' },
          { q: 'Can systems be hired for short-term or emergency use?', a: 'Yes — PCP can supply rental detection units for temporary deployment while a permanent solution is being specified and installed.' },
        ],
      },
      {
        category: 'Food & Pharma',
        questions: [
          { q: 'Do tramp metal detectors meet HACCP and BRC food safety standards?', a: 'Yes — PCP systems are designed for full compliance with HACCP, BRC and ISO22000, with validation documentation supplied for food safety auditors.' },
          { q: 'Can all detection events be logged for compliance audits?', a: 'Yes — all events are automatically recorded and exportable for HACCP, BRC, ISO22000 and EPA audit requirements.' },
          { q: 'Are detectors safe and non-intrusive in food-grade environments?', a: 'Yes — detectors are fully non-intrusive, food-safe and available in hygienic formats for pharmaceutical and food-grade processing lines.' },
          { q: 'What is the ROI for food and pharma operations?', a: 'Preventing one contamination recall can save far more than the cost of the system — plus avoiding regulatory penalties, production shutdowns and reputational damage.' },
        ],
      },
      {
        category: 'Mining & Minerals',
        questions: [
          { q: 'Where should detectors be installed in a mining operation?', a: 'Before crushers, screens and mills — the most vulnerable and costly equipment in the processing chain.' },
          { q: 'Are detectors suitable for extremely high-tonnage conveyors?', a: 'Yes — systems are built for heavy-duty, continuous high-volume mining operations with ruggedised housings for harsh conditions.' },
          { q: 'Can detectors operate in remote or off-grid mining areas?', a: 'Yes — systems run on 24V or generator power, making them fully suitable for remote site operations.' },
          { q: 'How often do systems need calibration on a mine?', a: 'Typically once per year depending on site conditions. PCP trains your maintenance crews for in-house calibration and basic servicing.' },
        ],
      },
      {
        category: 'Manufacturing',
        questions: [
          { q: 'Can detectors integrate with our existing plant PLC or E-stop system?', a: 'Yes — integration into PLC, SCADA and E-stop systems is standard and requires no separate operator intervention once configured.' },
          { q: 'Are systems prone to false alarms in dusty or vibration-prone plants?', a: 'No — sensitivity is tuned specifically to your process conditions and material flow to eliminate nuisance trips.' },
          { q: 'Do you stock spares locally for fast response?', a: 'Yes — coils, sensors and key spares are stocked in Ireland for rapid supply when you need them.' },
          { q: 'Do you offer service contracts for long-term reliability?', a: 'Yes — PCP provides SLAs, maintenance contracts and full lifecycle support across all installed systems.' },
        ],
      },
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
      {
        category: 'Waste & Landfill',
        questions: [
          { q: 'Can systems handle high-intensity odour during peak tipping loads?', a: 'Yes — high-pressure fogging lines and vapour deodorising systems are designed specifically for enclosed tipping halls and transfer buildings during peak activity.' },
          { q: 'Will suppression activate automatically during wind events that carry odour to the boundary?', a: 'Yes — systems activate via wind sensors, triggering increased treatment automatically when boundary impact risk is highest.' },
          { q: 'Can odour agents cope with the variety of odours from mixed waste?', a: 'Yes — our deodorising chemistry is formulated for complex mixed-waste odour profiles, not just single-compound sources.' },
          { q: 'Can you provide data to support our EPA waste facility licence renewal?', a: 'Yes — control data, equipment monitoring records and inspection documentation are supplied to support EPA conditions and licence renewals.' },
        ],
      },
      {
        category: 'Water Treatment',
        questions: [
          { q: 'Are your odour agents safe for use near biological treatment processes?', a: 'Yes — all products are fully biodegradable and non-toxic, safe for use around anaerobic digestion, activated sludge and biological treatment processes.' },
          { q: 'Can systems target H2S specifically in wastewater environments?', a: 'Yes — ZC filtration achieves up to 99.9% H2S removal through adsorption, absorption and conversion of gaseous sulphur compounds.' },
          { q: 'Can Acrulog monitoring provide early warning of odour exceedances?', a: 'Yes — Acrulog CEMS continuously measures H2S and odour levels before and after treatment, flagging performance drops before neighbourhood complaints arise.' },
          { q: 'Can systems activate automatically during high-load periods?', a: 'Yes — sensor-triggered activation responds to H2S or odour concentration thresholds without any operator intervention required.' },
        ],
      },
      {
        category: 'Food Processing',
        questions: [
          { q: 'Are your odour-neutralising agents food-safe?', a: 'Yes — all products are biodegradable, non-toxic and approved for use in food processing, cold store and refrigerated environments.' },
          { q: 'Can systems run in refrigerated or temperature-controlled areas?', a: 'Yes — fogging and vapour systems operate across wide temperature ranges including cold stores and chill rooms without affecting process conditions.' },
          { q: 'Can systems run automatically without disrupting production?', a: 'Yes — units activate via timers, door sensors or production line signals, running completely in the background without operator input.' },
          { q: 'Can you provide documentation for audits or environmental management plans?', a: 'Yes — monitoring data, equipment records and compliance documentation are supplied as standard with every installation.' },
        ],
      },
      {
        category: 'Ports & Logistics',
        questions: [
          { q: 'Can fog cannons cover large open berth and cargo areas effectively?', a: 'Yes — fog cannons deliver 30–70 metre throw for wide odour treatment across open loading zones, berths and stockpile areas.' },
          { q: 'Can systems cope with salt, wind and coastal exposure at ports?', a: 'Yes — housings are built for marine and coastal environments and sensors can trigger automatic response when wind direction changes.' },
          { q: 'Can mobile units be deployed quickly for temporary odour events?', a: 'Yes — trailer-mounted atomiser units are available for rapid deployment during peak cargo events or emergency situations.' },
          { q: 'Are systems effective for fish meal, animal feed or organic cargo odour?', a: 'Yes — our deodorising chemistry addresses the wide range of organic odour compounds common in food, agricultural and bulk cargo operations.' },
        ],
      },
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
