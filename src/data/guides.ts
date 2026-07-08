export interface Guide {
  id: string;
  title: string;
  topic: string;
  solutionId?: string;
  industryId?: string;
  readTime: string;
  image: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
  relatedProducts: string[];
  relatedGuides: string[];
}

export const guides: Guide[] = [
  {
    id: 'manage-dust-quarry',
    title: 'How to Manage Dust on a Quarry Site',
    topic: 'Dust Suppression',
    solutionId: 'dust',
    industryId: 'quarrying',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    intro: 'Dust is the most visible and frequently complained-about environmental issue on quarry sites. This guide explains where dust is generated, which suppression methods are most effective and how to build a robust management programme that satisfies EPA and planning requirements.',
    sections: [
      {
        heading: 'Where Does Quarry Dust Come From?',
        body: 'Quarry dust is generated at multiple points across the operation. Understanding each source is the first step to selecting the right suppression method.',
        bullets: [
          'Primary and secondary crusher operations — fine particles liberated during rock breakage',
          'Vibrating screens — dust generated during material separation',
          'Conveyor transfer and drop points — dust released when material falls between conveyors',
          'Stockpiles — wind erosion from exposed aggregate surfaces',
          'Haul roads — vehicle movement disturbing fine surface material',
          'Blasting — though typically a short-duration, episodic source',
        ],
      },
      {
        heading: 'Which Suppression Method is Right for Each Source?',
        body: 'Different sources require different approaches. Matching the technology to the source is critical to cost-effective performance.',
        bullets: [
          'Crusher and screen face — DUSTELIM Foam applied directly at the material gives the highest effectiveness for fine mineral dust',
          'Transfer and drop points — fogging nozzles or DUSTELIM Foam at the point of fall',
          'Stockpiles and open areas — fog cannons with 30–70m throw, covering the full stockpile surface',
          'Haul roads — rain guns or DUSTELIM Road additive for medium-term surface stabilisation',
          'Site boundary — high-pressure fogging lines along fence perimeter',
        ],
      },
      {
        heading: 'Monitoring: Knowing When You Have a Problem',
        body: 'Dust monitoring transforms a reactive management programme into a proactive one. Real-time particulate data at the site boundary allows site managers to act before dust crosses the perimeter and before complaints arrive. Data logs also provide the evidence base for EPA compliance reporting.',
      },
      {
        heading: 'Building a Compliant Dust Management Plan',
        body: 'Irish quarries operating under planning consent or an EPA licence are typically required to have a documented Dust Management Plan. A compliant plan identifies all dust sources, specifies the control measures in place, documents monitoring arrangements and records complaint response procedures. PCP Group can assist in developing and documenting this plan alongside implementing the suppression technology.',
      },
      {
        heading: 'Common Mistakes',
        body: 'The most common mistakes in quarry dust management are:',
        bullets: [
          'Relying on water sprinklers alone — water is rarely effective on fine limestone or silica dust without foam or atomisation',
          'Treating symptoms at the boundary rather than sources at the crusher — boundary treatment helps but source control is always more effective',
          'Installing systems that are too difficult to maintain — complexity leads to downtime and uncontrolled periods',
          'No monitoring — without data, you cannot demonstrate compliance or target intervention where it is most needed',
        ],
      },
    ],
    relatedProducts: ['dustelim-foam', 'fog-cannon', 'miniat-mobile-atomiser', 'dust-monitoring'],
    relatedGuides: ['epa-dust-compliance', 'choose-right-monitoring'],
  },
  {
    id: 'odour-suppression-vs-abatement',
    title: 'Understanding Odour Suppression vs Odour Abatement',
    topic: 'Odour Control',
    solutionId: 'odour',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    intro: 'Odour suppression and odour abatement are not the same thing. Choosing the wrong approach for your site can lead to significant wasted investment and continued complaints. This guide explains the difference, when to use each approach and how to select the right technology for your specific situation.',
    sections: [
      {
        heading: 'What is Odour Suppression?',
        body: 'Odour suppression treats odorous air in the open atmosphere — typically by introducing deodorising chemistry as a mist or vapour that reacts with odour molecules before they disperse. Suppression is most effective close to the source and in calm weather conditions. It is the appropriate first response for most waste, recycling and composting operations, particularly where the odour source is distributed across an open tipping or processing area.',
        bullets: [
          'Best for: open tipping areas, sorting halls, waste reception areas',
          'Technology: atomisers, fogging lines, vapour systems',
          'Strength: rapid deployment, low capital cost, flexible repositioning',
          'Limitation: effectiveness reduces in windy conditions and at distance from source',
        ],
      },
      {
        heading: 'What is Odour Abatement?',
        body: 'Odour abatement captures and treats contaminated air in an enclosed or semi-enclosed system before it is released to atmosphere. The air is drawn through filtration media — carbon, biological media or chemical scrubbing — and the odorous compounds are removed before the treated air exits. Abatement is appropriate where odour loads are high, persistent and where suppression alone cannot achieve the required performance.',
        bullets: [
          'Best for: enclosed process buildings, pump stations, enclosed tank venting, high H2S environments',
          'Technology: ZC filters, biofilters, chemical scrubbers, carbon vent filters',
          'Strength: high removal efficiency (up to 99.9% H2S), continuous performance, weather-independent',
          'Limitation: higher capital cost, requires enclosed or semi-enclosed source, media maintenance',
        ],
      },
      {
        heading: 'When Do You Need Both?',
        body: 'Many sites benefit from a layered approach — abatement at the highest-intensity enclosed sources, and suppression for the broader open areas. A waste facility might use ZC filtration on the sludge dewatering building (abatement) and fogging lines on the tipping hall and boundary fence (suppression). The combination addresses both the concentrated point sources and the distributed ambient odour in one integrated programme.',
      },
      {
        heading: 'How to Choose',
        body: 'The right choice depends on three factors: the nature of the odour source (enclosed vs open), the odour load (H2S concentration, organic content) and the receptor sensitivity (proximity and sensitivity of nearby properties). A free site assessment by a PCP Group engineer will identify which approach — or combination of approaches — is appropriate for your specific situation.',
      },
    ],
    relatedProducts: ['miniat-odour-atomiser', 'vapour-deodorising', 'zc-filtration', 'fogging-lines-odour'],
    relatedGuides: ['h2s-water-treatment', 'epa-dust-compliance'],
  },
  {
    id: 'epa-dust-compliance',
    title: 'EPA Dust Compliance: What Irish Sites Need to Know',
    topic: 'Compliance',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    intro: 'Environmental compliance for dust in Ireland is governed by a combination of EPA industrial emissions licences, local authority planning conditions and the Air Pollution Act. This guide explains what Irish site operators need to know to stay compliant and avoid enforcement action.',
    sections: [
      {
        heading: 'Which Sites Require an EPA Licence?',
        body: 'Sites above certain thresholds — determined by activity type and throughput — require an Industrial Emissions Licence (IEL) from the EPA. Activities typically licenced for dust control include quarrying above 500,000 tonnes per year, waste management facilities, certain manufacturing operations and port bulk cargo handling. The licence will specify dust emission limit values and require an Emissions Reduction Plan where limits are exceeded.',
      },
      {
        heading: 'Local Authority Planning Conditions',
        body: 'Even for sites below EPA licence thresholds, planning conditions frequently require dust management measures. These are legally binding planning conditions attached to planning permissions for quarries, waste facilities and construction projects. Non-compliance can lead to enforcement notices and, ultimately, suspension of the planning permission.',
        bullets: [
          'Dust management plan — typically required as a submission to the planning authority',
          'Suppression equipment — a condition specifying that suppression equipment must be in place and operating',
          'Monitoring — some conditions require boundary dust monitoring with records available for inspection',
          'Complaint response — a documented procedure for responding to dust complaints',
        ],
      },
      {
        heading: 'The Air Pollution Act',
        body: 'The Air Pollution Act 1987 (as amended) gives local authorities broad powers to issue notices to any site causing or likely to cause air pollution — including dust. Local authority environmental sections can issue improvement notices, prohibition notices and ultimately seek prosecutions. Documented evidence of active suppression and monitoring is the best protection against enforcement action under this Act.',
      },
      {
        heading: 'What Does a Compliant Dust Management Programme Look Like?',
        body: 'Regulators — whether EPA or local authority — look for the same things:',
        bullets: [
          'Active suppression equipment that is maintained and operational',
          'A documented monitoring programme with records',
          'Evidence of complaint response and investigation procedures',
          'Regular review and update of the dust management plan',
          'Staff training in dust management responsibilities',
        ],
      },
      {
        heading: 'How PCP Group Can Help',
        body: 'PCP Group provides the complete package: site assessment, equipment supply and installation, monitoring systems and a maintenance contract that keeps everything operational. We can also assist in preparing the dust management plan documentation required for EPA licences and planning conditions.',
      },
    ],
    relatedProducts: ['dust-monitoring', 'miniat-mobile-atomiser', 'fog-cannon', 'dustelim-foam'],
    relatedGuides: ['manage-dust-quarry', 'choose-right-monitoring'],
  },
  {
    id: 'choose-right-monitoring',
    title: 'Choosing the Right Dust Monitoring System',
    topic: 'Monitoring',
    solutionId: 'monitoring',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    intro: 'Not all dust monitoring systems are equal — and choosing the wrong one for your application can leave you without the data you need when a regulator or complaint requires it. This guide covers the main types of dust monitor, where each is appropriate and what to look for when specifying a system.',
    sections: [
      {
        heading: 'Types of Dust Monitor',
        body: 'There are three main monitoring approaches used in industrial dust management, each suited to different applications:',
        bullets: [
          'Optical particle counters — real-time PM2.5 and PM10 data, suitable for boundary monitoring and process area monitoring. Battery or mains powered, wireless data transmission available',
          'Triboelectric monitors — continuous in-duct monitoring for baghouse and stack compliance. Detects bag leaks and process upsets in real time',
          'Gravimetric samplers — the regulatory reference method for compliance measurement. Collects particles on a filter for laboratory weighing. Not real-time but provides legally defensible data for EPA submissions',
        ],
      },
      {
        heading: 'What Do You Need the Data For?',
        body: 'The most important question when selecting a monitoring system is: what decision will the data support? Different use cases require different approaches.',
        bullets: [
          'Triggering suppression systems automatically — requires real-time output with alarm contacts; optical particle counter',
          'Demonstrating EPA licence compliance — may require gravimetric reference data or EPA-approved continuous monitor',
          'Providing evidence for complaint defence — requires time-stamped logged data correlated with weather conditions',
          'Internal operational awareness — real-time display sufficient; optical particle counter or simple dust meter',
        ],
      },
      {
        heading: 'Placement: Where to Put Your Monitors',
        body: 'Monitor placement is as important as monitor selection. Boundary monitors should be positioned between the primary dust source and the nearest sensitive receptor, ideally at the fence line. Multiple monitors allow wind-direction correlation — essential for complaint defence. Process area monitors should be at worker breathing zones near high-risk operations.',
      },
      {
        heading: 'Data Management',
        body: 'A monitoring system that does not log data is only useful in real time — and real-time observations are almost impossible to use in a regulatory or legal defence. All monitoring systems should log time-stamped data and, ideally, transmit it to a central dashboard accessible by site management and EHS staff remotely.',
      },
    ],
    relatedProducts: ['dust-monitoring', 'stack-monitors', 'acrulog-h2s', 'baghouse-filterSense'],
    relatedGuides: ['epa-dust-compliance', 'manage-dust-quarry'],
  },
  {
    id: 'h2s-water-treatment',
    title: 'H2S Odour Control in Water Treatment Plants',
    topic: 'Water Treatment',
    solutionId: 'odour',
    industryId: 'water-treatment',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    intro: 'H2S (hydrogen sulphide) is the primary driver of odour complaints at wastewater treatment works in Ireland. Understanding where it is generated, how to measure it and which treatment technology is most appropriate is essential for EHS managers and environmental engineers at water utilities.',
    sections: [
      {
        heading: 'Where Does H2S Come From at a WWTP?',
        body: 'H2S is generated by anaerobic bacterial activity — sulphate-reducing bacteria that thrive in the absence of oxygen. In a wastewater treatment plant, the primary generation points are:',
        bullets: [
          'Inlet works and primary settlement tanks — where dissolved sulphides in the incoming wastewater are released',
          'Sludge handling, thickening and dewatering — where concentrated sludge is agitated or aerated',
          'Covered primary and secondary treatment structures — where biological processes generate H2S that accumulates in the headspace',
          'Pump stations and rising mains — where long detention times in sealed pipes allow anaerobic conditions to develop',
        ],
      },
      {
        heading: 'Monitoring H2S',
        body: 'H2S monitoring in wastewater environments presents specific challenges — high humidity, corrosive gas mixtures and outdoor exposure cause many standard monitors to fail prematurely. The Acrulog system is designed specifically to overcome these challenges, providing reliable continuous H2S data in exactly the conditions that defeat standard monitors.',
      },
      {
        heading: 'Treatment Options by Source Type',
        body: 'The most effective treatment approach depends on the source characteristics:',
        bullets: [
          'Enclosed structures (settlement tanks, dewatering buildings) — ZC Filtration or biofilter for high-efficiency H2S removal from extracted air',
          'Pump station and sewer vents — vent filters or ground mount filters for passive treatment at point-source vents',
          'Open treatment structures — MINIAT atomiser with deodorising chemistry for suppression of dissolved H2S released at liquid surfaces',
          'Boundary perimeter odour control — fogging lines with ODA chemistry to intercept H2S before it reaches receptors',
        ],
      },
      {
        heading: 'Licence Compliance',
        body: 'Irish water utilities operating under EPA licences are required to demonstrate odour management performance. Documented H2S monitoring data is the key evidence for licence compliance and, increasingly, for licence renewal. A combination of source treatment and boundary monitoring — with all data logged and time-stamped — is the most defensible compliance position.',
      },
    ],
    relatedProducts: ['zc-filtration', 'acrulog-h2s', 'vent-filters', 'miniat-odour-atomiser'],
    relatedGuides: ['odour-suppression-vs-abatement', 'epa-dust-compliance'],
  },
  {
    id: 'construction-dust-guide',
    title: 'Dust Suppression for Construction Sites: A Practical Guide',
    topic: 'Construction',
    solutionId: 'dust',
    industryId: 'construction',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    intro: 'Construction site dust management is a planning condition requirement on most medium-to-large projects in Ireland. This guide explains what site managers need to do, which technologies work best for different construction activities and how to build a dust management programme that satisfies the planning authority.',
    sections: [
      {
        heading: 'When Is Dust Management a Planning Condition?',
        body: 'Planning authorities — particularly Dublin City Council, Cork City Council and other urban authorities — routinely attach dust management conditions to planning permissions for large construction projects, particularly those adjacent to residential areas, schools and sensitive receptors. The condition typically requires a Dust Management Plan to be submitted and approved before site commencement.',
      },
      {
        heading: 'The Main Dust Sources on Construction Sites',
        body: 'Construction dust comes from several distinct activities, each with different characteristics:',
        bullets: [
          'Earthworks and site clearing — coarse to fine soil dust, high volume, weather-dependent',
          'Demolition — fine concrete, masonry and silica dust — highest health risk category',
          'Material stockpiles — wind-blown dust from sand, aggregate and fill material',
          'Site roads and HGV movement — tyre and wheel wash dust from site access routes',
          'Saw cutting, grinding — fine silica dust at the point of cutting — requires extraction not suppression',
        ],
      },
      {
        heading: 'Hire vs Purchase for Construction Projects',
        body: 'Construction projects have a defined duration — making equipment hire the most cost-effective approach for most contractors. PCP Group offers hired MINIAT atomisers, fog cannons and dust monitoring stations on short-term and project-length contracts. Equipment is delivered, installed and collected at project end — no capital purchase, no storage and no maintenance burden.',
      },
      {
        heading: 'Dust Monitoring for Planning Compliance',
        body: 'Many planning conditions require evidence that dust is being actively managed — not just that equipment is present. Dust monitoring stations at the site boundary provide the time-stamped data record that planning authorities require. PCP Group can supply, install and monitor fence-line dust stations with regular data reports issued to the planning authority on your behalf.',
      },
      {
        heading: 'Health: Silica Dust and Construction Workers',
        body: 'Respirable crystalline silica (RCS) is generated during saw cutting, grinding and demolition of concrete, brick and natural stone. RCS is a known carcinogen classified as a Category 1A substance under CLP regulations. Construction dust control must address both the neighbour nuisance aspect (covered by planning conditions) and the worker health aspect (covered by HSA regulations). PCP Group personnel de-dusting systems address the worker health requirement.',
      },
    ],
    relatedProducts: ['miniat-mobile-atomiser', 'fog-cannon', 'dust-monitoring', 'jetblack-dedusting'],
    relatedGuides: ['epa-dust-compliance', 'choose-right-monitoring'],
  },
];

export const guideById = (id: string) => guides.find(g => g.id === id);
