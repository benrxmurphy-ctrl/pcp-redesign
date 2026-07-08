export interface Brochure {
  id: string;
  title: string;
  type: 'Solution Brochure' | 'Product Datasheet' | 'Compliance Guide' | 'Technical Note';
  description: string;
  pages: number;
  fileSize: string;
  solutionId?: string;
  productId?: string;
  image: string;
  content: string;
}

export const brochures: Brochure[] = [
  {
    id: 'pcp-dust-suppression-brochure',
    title: 'Dust Suppression Solutions',
    type: 'Solution Brochure',
    description: 'Complete overview of PCP Group dust suppression equipment — atomisers, fog cannons, fogging lines, foam systems and road treatments.',
    pages: 12,
    fileSize: '2.4 MB',
    solutionId: 'dust',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    content: `PCP GROUP — DUST SUPPRESSION SOLUTIONS

OVERVIEW
PCP Group has provided industrial dust suppression systems across Ireland and the UK since 1968. Our product range covers every dust source type — from mobile atomisers for rapid response to fixed fogging line systems for continuous boundary control.

PRODUCT RANGE

MINIAT Mobile Atomiser
Rotary drum atomiser producing 10–100 micron droplets. Coverage radius up to 40 metres. Available to hire or purchase. Towable — deploys in 30 minutes. Dual-function for dust and odour.

Fog Cannon (Hennlick Range)
30–70 metre throw range for large open sites. Oscillating head for automatic coverage. Electric or diesel models. Fixed or trailer-mounted configurations.

DUSTELIM Foam System
Applied at source — crusher feed, screens, transfer points. More effective than water on fine mineral dust. Biodegradable, non-hazardous chemistry. Negligible product moisture addition.

High Pressure Fogging Lines (MINIAT Fog)
Fence line and indoor suppression. 5–50 micron droplets. 40–70 bar operating pressure. Manual or sensor-automated. Low water consumption.

Rain Guns
Uniform wetting pattern for haul roads and stockpile surfaces. Adjustable throw radius and arc. Heavy-duty outdoor construction.

DUSTELIM Road
Biodegradable haul road dust suppressant. Medium-term effectiveness — outlasts water by weeks. No waterway or vegetation contamination risk. Applied by standard tanker spray.

CONTACT
PCP Group
Republic of Ireland: +353 45 863220
Northern Ireland: +44 (0)73 40678343
info@pcpgroup.ie | www.pcpgroup.ie`,
  },
  {
    id: 'pcp-odour-control-brochure',
    title: 'Odour Control Solutions',
    type: 'Solution Brochure',
    description: 'Full range of PCP Group odour management products — suppression, abatement, vapour treatment, filtration and chemistry.',
    pages: 14,
    fileSize: '3.1 MB',
    solutionId: 'odour',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
    content: `PCP GROUP — ODOUR CONTROL SOLUTIONS

OVERVIEW
Odour control for waste, water treatment, recycling and food processing operations. PCP Group combines suppression, abatement and monitoring in a single managed programme.

SUPPRESSION PRODUCTS

MINIAT Odour Atomiser
MINIAT Mobile platform loaded with ODA deodorising chemistry. Covers up to 40 metres. For tipping halls, wastewater areas and emergency response.

Vapour Deodorising Systems
Dry vapour treatment for maximum active contact time. Effective against H2S, ammonia and organic compound odours. Suitable for enclosed structures and indoor operations.

Odour Fogging Line Systems
High-pressure fogging with ODA chemistry along boundary fences. Wind-sensor automated. Neutralises odour — does not mask it.

ABATEMENT PRODUCTS

ZC Odour Filtration
Up to 99.9% H2S removal. Adsorption + absorption + conversion. Compact — suitable for difficult installations. Long media life.

Vent Odour Filters
Passive or wind-assisted. No power or water required. Replaceable media. Effective against H2S, ammonia and organics.

Ground Mount Filters
At-grade installation. Eliminates working at height. Combined media for broad-spectrum treatment.

ODA Deodorising Liquids
Concentrated deodorising chemistry for atomiser, fogging and vapour systems. Scented and unscented. Biodegradable.

CONTACT
PCP Group
Republic of Ireland: +353 45 863220
Northern Ireland: +44 (0)73 40678343
info@pcpgroup.ie | www.pcpgroup.ie`,
  },
  {
    id: 'miniat-atomiser-datasheet',
    title: 'MINIAT Mobile Atomiser — Datasheet',
    type: 'Product Datasheet',
    description: 'Technical datasheet for the MINIAT Mobile rotary atomiser including specifications, performance data and ordering information.',
    pages: 4,
    fileSize: '0.8 MB',
    productId: 'miniat-mobile-atomiser',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    content: `MINIAT MOBILE ATOMISER
TECHNICAL DATASHEET

PRODUCT CODE: MIN-MOB-001

DESCRIPTION
The MINIAT Mobile rotary atomiser produces ultra-fine water droplets (10–100 microns) that capture airborne dust and odour particles, causing them to agglomerate and fall to the ground. Compact, self-contained and towable, it can be deployed in under 30 minutes.

SPECIFICATIONS
Coverage Radius:       Up to 40 metres
Droplet Size:          10–100 microns
Water Consumption:     Minimal (atomised mist)
Power Options:         Electric (230V/400V) or diesel
Deployment:            Towable — 30 min setup
Weight:                Application dependent
Applications:          Dust suppression + Odour control
Availability:          Hire or purchase

PERFORMANCE DATA
Effective dust capture rate: >85% reduction in airborne TSP
Effective odour knockdown: >70% reduction in boundary odour
Water usage vs sprinkler: Significantly lower
Deployment time: <30 minutes from arrival

APPLICATIONS
- Waste tipping halls and reception
- Recycling facility sorting areas
- Construction site earthworks
- Quarry crushing and screening
- Port bulk cargo operations
- Wastewater treatment odour

MAINTENANCE
Recommended service interval: 250 operating hours
Parts availability: Stock held by PCP Group
Service support: PCP Group engineers

ORDERING
Contact PCP Group for hire rates and purchase prices.
Republic of Ireland: +353 45 863220
info@pcpgroup.ie`,
  },
  {
    id: 'fog-cannon-datasheet',
    title: 'Fog Cannon Hennlick Range — Datasheet',
    type: 'Product Datasheet',
    description: 'Technical datasheet for the Hennlick fog cannon range with throw distance data, models and mounting options.',
    pages: 4,
    fileSize: '0.9 MB',
    productId: 'fog-cannon',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    content: `FOG CANNON — HENNLICK RANGE
TECHNICAL DATASHEET

DESCRIPTION
The Hennlick range of dust cannons provide large-area coverage at 30–70 metres throw distance. Oscillating head automatically sweeps the coverage arc, eliminating the need for constant repositioning. Ideal for quarry faces, open stockpile areas and port bulk terminals.

SPECIFICATIONS
Throw Range:           30–70 metres (model dependent)
Coverage Arc:          0–359° continuous oscillation
Droplet Size:          10–200 microns
Power:                 Electric (400V 3-phase)
Mounting:              Fixed floor or trailer-mounted
Models:                HEN-30, HEN-50, HEN-70, HEN-70T (telescopic)

MODEL COMPARISON
HEN-30: 30m throw / 400mm nozzle ring
HEN-50: 50m throw / 600mm nozzle ring
HEN-70: 70m throw / 800mm nozzle ring
HEN-70T: 70m throw / telescopic elevation

APPLICATIONS
- Quarry stockpile and face dust
- Port and bulk terminal storage
- Landfill and waste disposal
- Demolition and clearance sites
- Aggregate and sand processing
- Coal and biomass storage

ORDERING
Contact PCP Group for quotation.
Republic of Ireland: +353 45 863220
info@pcpgroup.ie`,
  },
  {
    id: 'epa-compliance-guide',
    title: 'EPA Dust & Odour Compliance Guide',
    type: 'Compliance Guide',
    description: 'A practical guide to Irish EPA and local authority compliance requirements for dust and odour management.',
    pages: 8,
    fileSize: '1.2 MB',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    content: `EPA DUST & ODOUR COMPLIANCE GUIDE
PCP GROUP — REFERENCE DOCUMENT

INTRODUCTION
This guide summarises the key compliance requirements for dust and odour management in Ireland, covering EPA Industrial Emissions Licences, local authority planning conditions and the Air Pollution Act 1987.

EPA INDUSTRIAL EMISSIONS LICENSING
Sites above regulatory thresholds require an Industrial Emissions Licence (IEL). Licenced activities include quarrying above 500,000t/year, waste management facilities and certain manufacturing operations. Licences specify emission limit values and may require an Emissions Reduction Plan.

Key EPA Requirements:
- Documented Dust Management Plan
- Active suppression equipment — maintained and operational
- Boundary dust monitoring (continuous or periodic, application dependent)
- Complaint response procedure
- Annual environmental reports

LOCAL AUTHORITY PLANNING CONDITIONS
Legally binding. Non-compliance can lead to enforcement notices and suspension of planning permission. Typically require:
- Dust Management Plan submission
- Specified suppression equipment
- Monitoring arrangements
- Complaint response procedures

AIR POLLUTION ACT 1987
Gives local authorities broad powers to issue improvement notices and prohibition notices to any site causing or likely to cause air pollution, including dust. Documented evidence of active suppression and monitoring is the best protection.

WHAT REGULATORS LOOK FOR
1. Active suppression equipment — operational, not just present
2. Documented monitoring with records available for inspection
3. Evidence of complaint response
4. Regular review of the dust management plan
5. Staff training records

HOW PCP GROUP CAN HELP
Free site assessment, equipment supply, installation, monitoring systems, maintenance contracts and assistance preparing documentation for EPA licences and planning conditions.

Contact: +353 45 863220 | info@pcpgroup.ie`,
  },
  {
    id: 'filtersen-baghouse-datasheet',
    title: 'FilterSense Baghouse Control — Datasheet',
    type: 'Product Datasheet',
    description: 'Technical datasheet for FilterSense baghouse control systems including sensor specifications and control features.',
    pages: 6,
    fileSize: '1.1 MB',
    productId: 'baghouse-filterSense',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    content: `FILTERSENSE BAGHOUSE CONTROL SYSTEM
TECHNICAL DATASHEET

DESCRIPTION
FilterSense provides continuous bag leak detection, pulse-jet cleaning optimisation and real-time emissions data for all pulse-jet baghouse filter configurations. The #1 OEM choice for baghouse management worldwide.

KEY FEATURES
- Continuous triboelectric bag leak detection
- Demand-based pulse-jet cleaning control
- Real-time emissions monitoring
- EPA / OSHA data logging
- Wireless and remote monitoring options
- Compatible with all pulse-jet baghouse configurations

SENSOR SPECIFICATIONS
Technology:            Triboelectric / electrodynamic
Detection:             Individual bag leak
Sensitivity:           0.001 grains/ACFM
Response time:         <1 second
Operating temperature: -40°C to +200°C
Probe material:        316L stainless steel

CONTROL SYSTEM
Input channels:        Up to 128 per controller
Outputs:               4–20mA, MODBUS, Ethernet
Data logging:          Internal + remote
Display:               Touchscreen HMI
Alarms:                Configurable threshold alerts
Power:                 24VDC (DIN rail)

BENEFITS
- Reduces compressed air consumption by up to 50%
- Extends filter bag life by preventing over-cleaning
- Provides legally defensible compliance data
- Detects bag failures before visible stack opacity

CONTACT
Republic of Ireland: +353 45 863220
info@pcpgroup.ie | www.pcpgroup.ie`,
  },
  {
    id: 'zc-filter-technical-note',
    title: 'ZC Odour Filtration — Technical Note',
    type: 'Technical Note',
    description: 'Technical note on ZC Filter three-stage H2S removal mechanism, media specifications and sizing guidance.',
    pages: 5,
    fileSize: '0.7 MB',
    productId: 'zc-filtration',
    image: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg',
    content: `ZC ODOUR FILTRATION SYSTEM
TECHNICAL NOTE

MECHANISM OF ACTION
ZC Filters achieve up to 99.9% H2S removal through a three-stage sequential process:

Stage 1 — Physical Adsorption
H2S molecules adsorb onto the high-surface-area media. Effective for low-concentration continuous H2S streams.

Stage 2 — Chemical Absorption
H2S reacts with impregnated active media components. Converts H2S to non-volatile compounds retained within the media bed.

Stage 3 — Catalytic Conversion
Residual H2S is catalytically oxidised. Provides the third-stage polishing that delivers >99.9% total removal efficiency.

MEDIA SPECIFICATION
Media Type:            Combined impregnated activated carbon
H2S Capacity:          High loading capacity (application dependent)
Operating humidity:    5–100% RH (wet conditions acceptable)
Operating temperature: 0–60°C
Media life:            12–36 months (application dependent)
Replacement:           Bulk bag or drum supply

SIZING GUIDANCE
Sizing is based on:
- Flow rate (m³/hour)
- H2S inlet concentration (ppm)
- Required removal efficiency
- Available pressure drop

Contact PCP Group engineering team for a site-specific sizing calculation.

APPLICATIONS
- Wastewater treatment plant enclosed structures
- Pump station and sewer vent treatment
- Biogas and anaerobic digestion
- Chemical storage ventilation

CONTACT
Republic of Ireland: +353 45 863220
info@pcpgroup.ie | www.pcpgroup.ie`,
  },
  {
    id: 'pcp-monitoring-brochure',
    title: 'Environmental Monitoring Systems',
    type: 'Solution Brochure',
    description: 'Overview of PCP Group dust, H2S and stack monitoring systems for compliance and site management.',
    pages: 10,
    fileSize: '1.8 MB',
    solutionId: 'monitoring',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    content: `PCP GROUP — ENVIRONMENTAL MONITORING SYSTEMS

OVERVIEW
Real-time monitoring is the foundation of any effective environmental management programme. PCP Group supplies and supports a complete range of particulate, H2S and stack emissions monitoring systems for Irish industrial sites.

DUST MONITORING SYSTEMS
Real-time PM2.5 and PM10 monitoring for site boundary and process area compliance.
- Fence-line boundary stations
- Process area worker exposure monitoring
- Wireless data transmission
- Alarm outputs to trigger suppression systems
- EPA-compatible data logging

ACRULOG H2S MONITOR
Dedicated H2S monitoring for harsh wastewater and industrial environments.
- Designed for wet and corrosive conditions
- Continuous H2S data logging
- Odour licence compliance reporting
- Extended sensor life in harsh environments

DYNACHARGE STACK MONITORS
Continuous particulate monitoring for stack emissions compliance.
- Bluetooth data download
- No control room wiring required
- Time-stamped compliance records
- EPA / IED compatible

FILTERSEN BAGHOUSE CONTROL
Continuous in-duct monitoring and pulse-jet cleaning optimisation.
- Individual bag leak detection
- Demand-based cleaning control
- Up to 50% compressed air saving

DATA MANAGEMENT
All monitoring systems provide time-stamped logged data accessible remotely. Data is available in formats compatible with EPA reporting templates.

CONTACT
Republic of Ireland: +353 45 863220
info@pcpgroup.ie | www.pcpgroup.ie`,
  },
];

export function triggerDownload(brochure: Brochure): void {
  const blob = new Blob([brochure.content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `PCP-Group_${brochure.title.replace(/[^a-zA-Z0-9]/g, '-')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
