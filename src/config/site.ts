/**
 * FoxKey HGV – single source of truth for all site content.
 * Edit this file to change text, prices, makes, contact details and switches.
 * Nothing in the pages/components should need changing for routine updates.
 */

// ---------------------------------------------------------------------------
// SWITCHES & PLACEHOLDERS – fill these in
// ---------------------------------------------------------------------------

/** Formspree form ID, e.g. "xabcdefg" (from https://formspree.io – create a form, copy its ID). */
export const FORMSPREE_ID = 'FORMSPREE_ID';

/** Set to true if your displayed prices include VAT, false if VAT is added on top. */
export const PRICES_INCLUDE_VAT = false;

/** Fleet discount shown on the HGV page and in the fleet section. Example: "10%". */
export const FLEET_DISCOUNT = 'XX%';
/** True once FLEET_DISCOUNT holds a real value; the discount is hidden everywhere until then. */
export const HAS_FLEET_DISCOUNT = FLEET_DISCOUNT.trim() !== '' && !/X/i.test(FLEET_DISCOUNT);

/** Warranty wording shown on service pages. Replace with your actual terms, e.g. "12-month warranty on keys we supply and programme." */
export const WARRANTY_TEXT = 'To be confirmed. Ask when you book.';

/** Google Business Profile link (once your profile is live). Leave empty to hide. */
export const GOOGLE_BUSINESS_URL = '';

/** Set to true once you have real reviews to show; the reviews section stays a placeholder until then. */
export const SHOW_REVIEWS = false;

// ---------------------------------------------------------------------------
// BUSINESS DETAILS
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'FoxKey HGV',
  shortName: 'FoxKey',
  tagline: 'Mobile HGV & Lorry Locksmith and Diagnostics',
  /** Change to your real domain before deploying (also update astro.config.mjs). */
  url: 'https://foxkeyauto.co.uk',
  baseTown: 'Goole',
  baseRegion: 'East Yorkshire',
  /** Public description of where we are based – no street address is published. */
  baseDescription: 'Based in Goole, East Yorkshire. Fully mobile, so we come to you.',
  phoneDisplay: '07944 087924',
  phoneTel: '+447944087924',
  whatsapp: 'https://wa.me/447944087924',
  whatsappPrefill:
    'https://wa.me/447944087924?text=' +
    encodeURIComponent('Hi FoxKey, I need help with a lorry. Make/model: ... Registration: ... Location: ...'),
  hours: '24/7, including weekends and bank holidays',
  hoursShort: '24/7',
  payment: ['Cash', 'card', 'bank transfer'],
  /** Brand mention – used ONCE on the site (dealer comparison on Home). Everywhere else use equipmentGeneric. */
  equipmentLine: 'We use professional Abrites diagnostic equipment.',
  /** Neutral wording for all other mentions of equipment. */
  equipmentGeneric: 'Professional, dealer-level truck key programming and diagnostic equipment.',
  freeCalloutMiles: 25,
  /** How far we travel for a job (radius from Goole). Travel beyond the free call-out zone is quoted before we set off. */
  operatingMiles: 100,
  coverage: {
    primary: 'Up to 100 miles from Goole',
    secondary: 'Further afield on request (travel quoted separately)',
  },
  /** Map embed centred on Goole (no address pin). */
  mapEmbedSrc:
    'https://www.google.com/maps?q=Goole,+East+Yorkshire&z=10&output=embed',
  mapCoords: { lat: 53.7036, lng: -0.8711 },
};

export const VAT_LABEL = PRICES_INCLUDE_VAT ? 'inc. VAT' : '+ VAT';

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'HGV services', href: '/hgv' },
  { label: 'Prices', href: '/prices' },
  { label: 'Makes', href: '/makes' },
  { label: 'Areas', href: '/areas' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'Get a quote', href: '/quote' },
  { label: 'Fleet enquiry', href: '/fleet' },
  { label: 'Privacy policy', href: '/privacy' },
];

// ---------------------------------------------------------------------------
// OWNERSHIP / COMPLIANCE WORDING (used on several pages)
// ---------------------------------------------------------------------------

export const OWNERSHIP_PROOF = {
  title: 'Proof of ownership required',
  text:
    'Before any key, immobiliser or module work we ask for the V5C logbook plus photo ID showing the same address. For fleet lorries and HGVs we can alternatively accept written authorisation on the operator’s letterhead.',
};

export const WHAT_WE_DONT_DO = {
  title: "What we don't do",
  intro: 'We work within the law and the manufacturer’s intended function of the vehicle. We do not offer:',
  items: [
    'Speed limiter modification or removal',
    'Tachograph calibration, adjustment or any tachograph work (this must be carried out at a DVSA-approved tachograph centre)',
    'AdBlue / SCR, EGR or DPF deletion or disabling',
    '“Emissions delete” remaps or any emissions-system defeat',
    'Any alteration of a vehicle’s true recorded mileage',
  ],
  outro:
    'When we replace an instrument cluster we transfer the true mileage to the new unit so the record stays accurate.',
};

// ---------------------------------------------------------------------------
// MAKES
// ---------------------------------------------------------------------------

export type TruckMake = { name: string; enabled: boolean; note?: string };

/** Only makes with enabled: true are shown on the site. Flip to true once you have confirmed licence coverage. */
export const TRUCK_MAKES: TruckMake[] = [
  { name: 'Mercedes-Benz Actros / Arocs / Atego / Antos', enabled: true },
  { name: 'DAF', enabled: false },
  { name: 'Scania', enabled: false },
  { name: 'Volvo Trucks', enabled: false },
  { name: 'MAN', enabled: false },
  { name: 'Renault Trucks', enabled: false },
  { name: 'Iveco (heavy range)', enabled: false },
];

export const enabledTruckMakes = () => TRUCK_MAKES.filter((m) => m.enabled);

// ---------------------------------------------------------------------------
// SERVICE TYPE
// ---------------------------------------------------------------------------

export type Service = {
  id: string;
  title: string;
  /** Short line for cards and tables */
  summary: string;
  /** Longer copy for the Services page */
  description: string;
  priceFrom: string; // e.g. "£49"
  priceNote?: string;
  icon: string; // lucide icon name (see Icon.astro)
};

// ---------------------------------------------------------------------------
// SERVICES & PRICES – HGV & LORRIES
// ---------------------------------------------------------------------------

export const HGV_SERVICES: Service[] = [
  {
    id: 'hgv-diagnostics',
    title: 'Mobile HGV diagnostic scan (yard or roadside)',
    summary: 'Full-system lorry diagnostics where the vehicle stands.',
    description:
      'Truck-level diagnostics brought to your yard, depot or the roadside. We scan engine, transmission, brakes, SCR/AdBlue, body and chassis modules on the lorry and give you a clear fault report so you can decide the next step without a tow.',
    priceFrom: '£134',
    icon: 'activity',
  },
  {
    id: 'hgv-spare-key',
    title: 'HGV / lorry spare key – supplied, cut & programmed',
    summary: 'A spare lorry key programmed at your depot.',
    description:
      'A spare key for a lorry is cheap insurance against a vehicle sitting idle. We supply, cut and programme a spare to the truck’s immobiliser at your yard, at a time that fits your schedule. Proof of ownership or operator authorisation required.',
    priceFrom: '£224',
    icon: 'key-round',
  },
  {
    id: 'hgv-all-keys-lost',
    title: 'HGV / lorry all keys lost',
    summary: 'Lorry stranded with no keys? We attend and programme a new one.',
    description:
      'A lorry with no keys is a load going nowhere. We attend the vehicle at the depot, lorry park or roadside, produce and programme a new key and get the vehicle running again. Proof of ownership or written operator authorisation required.',
    priceFrom: '£449',
    icon: 'search',
  },
  {
    id: 'hgv-remote',
    title: 'HGV remote / fob repair or reprogramming',
    summary: 'Central locking remotes repaired or re-synchronised.',
    description:
      'Remote not locking the cab, buttons worn or key lost sync after a battery change? We repair or reprogramme lorry remotes on site.',
    priceFrom: '£104',
    icon: 'radio',
  },
  {
    id: 'hgv-modules',
    title: 'Module replacement & coding (ECU, cluster, immobiliser, body modules)',
    summary: 'Replacement truck modules coded to the vehicle.',
    description:
      'Engine ECU, instrument cluster, immobiliser and body/chassis modules replaced and coded to the lorry so the vehicle accepts the new unit and existing keys, saving a trip to the main dealer. Proof of ownership or operator authorisation required.',
    priceFrom: '£270',
    icon: 'cpu',
  },
  {
    id: 'hgv-cluster',
    title: 'Instrument cluster replacement with true mileage transfer',
    summary: 'New cluster fitted and coded, true mileage transferred.',
    description:
      'When a lorry cluster fails we code the replacement and transfer the true recorded mileage to the new unit so the odometer reading and vehicle history remain accurate.',
    priceFrom: '£270',
    icon: 'gauge',
  },
  {
    id: 'hgv-dpf',
    title: 'Forced DPF regeneration & service resets',
    summary: 'Regens and service resets at your yard, not the dealer’s.',
    description:
      'Forced DPF regeneration when the truck won’t regenerate on its own, plus service interval resets and other maintenance functions, done at your depot to keep the lorry on the road.',
    priceFrom: '£119',
    icon: 'wrench',
  },
];

/** Starting price of one service, e.g. priceOf('hgv-spare-key') → '£224'. */
export const priceOf = (id: string) => HGV_SERVICES.find((s) => s.id === id)?.priceFrom ?? '';

export const HGV_CALLOUT = {
  title: 'Call-out, day or night',
  text: `Free within ${SITE.freeCalloutMiles} miles of Goole. Further out, we quote the travel before we set off.`,
};

export const HGV_PRICE_NOTE =
  'HGV prices depend on make, model and module. Final price confirmed by phone before we travel. Fleet rates available.';

export const GENERAL_PRICE_NOTE =
  'All prices are “from” prices. The final price depends on the make, model and year of the vehicle and is confirmed by phone before we travel, so there are no surprises on arrival.';

// ---------------------------------------------------------------------------
// WHY FOXKEY
// ---------------------------------------------------------------------------

export const WHY_FOXKEY = [
  {
    title: 'Fully mobile',
    text: 'We come to your yard, depot, a lorry park or the roadside. No heavy recovery, no dealer queue.',
    icon: 'truck',
  },
  {
    title: 'Open 24/7',
    text: 'Days, nights, weekends and bank holidays. Lorries run around the clock and so do we.',
    icon: 'clock',
  },
  {
    title: 'Cheaper than the dealer',
    text: 'Dealer-level key programming and diagnostics without dealer overheads or waiting days for an appointment.',
    icon: 'badge-pound-sterling',
  },
  {
    title: 'Dealer-level equipment',
    text: SITE.equipmentGeneric + ' Genuine key programming, module coding and full-system diagnostics on site.',
    icon: 'cpu',
  },
  {
    title: 'Pay when it starts',
    text: 'For key work you pay once the lorry starts and the key is working. Cash, card or bank transfer.',
    icon: 'circle-check',
  },
];

// ---------------------------------------------------------------------------
// HOME PAGE COPY (each section answers one real question a stranded driver asks)
// ---------------------------------------------------------------------------

export const HOME = {
  /** Owner's exact headline. */
  heroTitle: 'Lost your keys? We come to you – 24/7.',
  heroSubtitle:
    'Keys cut and programmed, remotes repaired and faults diagnosed on lorries and HGVs, wherever they stopped, up to 100 miles from Goole.',
  heroNote: 'Price agreed before we set off. For key work you pay once the lorry starts.',
  heroLabel: 'Mobile HGV locksmith',
  signLabel: 'Road miles from Goole',
  prices: {
    title: 'What will it cost?',
    text: 'Starting prices for lorry work. We confirm the exact figure for your make, model and year on the phone, before we travel.',
  },
  steps: {
    title: 'From the phone call to a running engine',
    items: [
      { title: 'Ring or WhatsApp', text: 'Make, model, registration and where the lorry is. You get the price before we set off.' },
      { title: 'We drive to you', text: 'Keys are cut and programmed at the cab. Nothing is posted away and nothing is towed.' },
      { title: 'Check, test, pay', text: 'We check the V5C and photo ID or the operator’s letter, test every key, and you pay once the lorry starts.' },
    ],
  },
  compare: {
    title: 'Why not just ring the truck dealer?',
    text: 'You can. This is what usually changes when you ring us instead.',
  },
  makes: {
    title: 'Do you work on my lorry?',
    text: 'The truck makes we programme and diagnose today. Not listed? Send the registration and we will tell you straight away.',
    plateLabel: 'Start a quote with your registration',
    plateHint: 'We check it when you send the form. Nothing is looked up automatically.',
  },
  ready: {
    title: 'What should I have ready?',
    text: 'We never programme a key without proof the lorry is yours or that you are authorised. Having these to hand keeps the job quick.',
  },
  close: {
    title: 'Lorry stuck right now?',
    text: 'Ring with the make, the registration and where it is parked. We agree the price before we set off.',
  },
};

/** HGV page hero copy. The make list is built from TRUCK_MAKES, so enabling a make updates the promise. */
export const HGV_PAGE = {
  heroTitle: 'HGV & lorry keys and diagnostics – at your yard or roadside, 24/7.',
  heroSubtitle: () =>
    `Key programming, diagnostics and module coding for ${TRUCK_MAKES.filter((m) => m.enabled).map((m) => m.name).join(', ')} lorries, at yards and roadsides along the M62 and M18.`,
  heroNote: 'Free call-out within 25 miles of Goole, day or night, at your yard or the roadside. Price confirmed by phone before we travel, and for key work you pay once the lorry starts.',
};

/** "Why FoxKey": the dealer route vs FoxKey, row by row. Keep claims general and fair. */
export const DEALER_COMPARE = [
  { topic: 'Getting the lorry there', dealer: 'Usually needs heavy recovery to the workshop.', foxkey: 'We come to the lorry, wherever it stopped.' },
  { topic: 'When', dealer: 'Booked into workshop hours, often days ahead.', foxkey: '24/7, including weekends and bank holidays.' },
  { topic: 'Price', dealer: 'Main-dealer labour rates plus recovery.', foxkey: `From ${priceOf('hgv-spare-key')} ${VAT_LABEL} for a spare lorry key, agreed before we travel.` },
  { topic: 'Equipment', dealer: 'Manufacturer tools in the workshop.', foxkey: 'We use professional Abrites diagnostic equipment.' },
  { topic: 'Paying', dealer: 'Pay when you collect.', foxkey: 'For key work, pay once the lorry starts.' },
];

export const READY_CHECKLIST = [
  { title: 'V5C logbook', text: 'For owner-drivers, in the name of the person we meet.', icon: 'file-text' },
  { title: 'Photo ID with the same address', text: 'Driving licence or passport.', icon: 'id-card' },
  { title: 'Fleet vehicle?', text: 'Written authorisation on the operator’s letterhead works instead.', icon: 'building-2' },
  { title: 'Where the lorry is', text: 'Postcode, What3Words, the depot name or the motorway junction.', icon: 'map-pin' },
];

// ---------------------------------------------------------------------------
// FLEET & OPERATOR ACCOUNTS
// ---------------------------------------------------------------------------

export const FLEET = {
  title: 'Fleet and operator accounts',
  intro:
    'Running a fleet of lorries? An operator account keeps your trucks moving with one number to call and one invoice a month.',
  benefits: [
    { title: 'Monthly invoicing', text: 'One consolidated invoice for all call-outs, with registrations and job details listed.' },
    { title: 'Priority response', text: 'Account holders go to the front of the queue, day or night.' },
    ...(HAS_FLEET_DISCOUNT ? [{ title: `Fleet discount: ${FLEET_DISCOUNT}`, text: 'Discounted rates on keys, diagnostics and module work across your fleet.' }] : [{ title: 'Fleet rates', text: 'Account rates on keys, diagnostics and module work, agreed when you open the account.' }]),
    { title: 'Operator authorisation accepted', text: 'For fleet lorries we accept written authorisation on your company letterhead in place of a V5C and photo ID.' },
  ],
  cta: { label: 'Make a fleet enquiry', href: '/fleet' },
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export type Faq = { q: string; a: string };

export const FAQ_GENERAL: Faq[] = [
  {
    q: 'Do you work on cars or vans?',
    a: 'No. FoxKey works on lorries and HGVs only, so the van, the stock and the equipment are set up for trucks.',
  },
  {
    q: 'Do I need to get the lorry to you?',
    a: 'No. FoxKey is fully mobile. We come to your yard, depot, a lorry park, a service area or the roadside anywhere in our coverage area, with everything needed to cut and programme keys and run diagnostics at the cab.',
  },
  {
    q: 'What areas do you cover?',
    a: `We are based in Goole, East Yorkshire, and travel up to ${SITE.operatingMiles} miles for lorry work. That takes in Yorkshire and the Humber, Teesside and County Durham, Greater Manchester and Merseyside, the East Midlands and Lincolnshire, along the M62, M18, M1, M6, A1(M) and M180. Call-out is free within ${SITE.freeCalloutMiles} miles of Goole; further out, travel is quoted before we set off. Beyond 100 miles, ask and we will tell you.`,
  },
  {
    q: 'Are you really available 24/7?',
    a: 'Yes, including weekends and bank holidays, at the same prices day or night. Call or WhatsApp at any time and we confirm the price before we travel.',
  },
  {
    q: 'How much does a lorry key cost?',
    a: `A spare lorry key starts from ${priceOf('hgv-spare-key')} and an all-keys-lost job from ${priceOf('hgv-all-keys-lost')}, ${VAT_LABEL}. The final price depends on the make, model and year and is confirmed by phone before we set off.`,
  },
  {
    q: 'Is the call-out free?',
    a: `Yes, within ${SITE.freeCalloutMiles} miles of Goole, day or night. Outside that we quote the travel upfront so you know the total before we come.`,
  },
  {
    q: 'What proof of ownership do you need?',
    a: 'For any key, immobiliser or module work we need the V5C logbook and photo ID showing the same address, or written authorisation on the operator’s letterhead for fleet lorries. We will not programme keys without this.',
  },
  {
    q: 'The driver has lost the only key. Can you still help?',
    a: 'Yes. We produce a new key at the lorry, cut it and programme it to the immobiliser on site. Where the system allows it, the lost key is removed from the truck so it no longer works.',
  },
  {
    q: 'Should we get a spare key made?',
    a: 'Yes, if a lorry is down to one key. A spare programmed while you still have a working key is quicker and cheaper than an all-keys-lost call-out later, and we can do it at the yard at a time that suits you.',
  },
  {
    q: 'Which truck makes do you cover?',
    a: 'See the Makes page for the trucks we cover today. We only list a make once our equipment covers it. If yours is not listed, call with the registration and we will tell you straight away.',
  },
  {
    q: 'What equipment do you use?',
    a: `${SITE.equipmentGeneric} It allows dealer-level key programming, module coding and full-system diagnostics from our van.`,
  },
  {
    q: 'How do I pay?',
    a: 'Cash, card or bank transfer. For key work you pay once the lorry starts and the key is working. Fleet accounts can be invoiced monthly.',
  },
  {
    q: 'Do you offer a warranty?',
    a: WARRANTY_TEXT,
  },
];

export const FAQ_HGV: Faq[] = [
  {
    q: 'Can you come to our depot or a lorry park?',
    a: 'Yes. We attend yards, depots, lorry parks, service areas and roadside locations up to 100 miles from Goole, 24/7: along the M62, M18, M1, M6 and A1(M).',
  },
  {
    q: 'What do you need before programming a key to a fleet lorry?',
    a: 'The V5C and photo ID at the same address, or written authorisation on the operator’s letterhead confirming the registration and that we are authorised to carry out the work.',
  },
  {
    q: 'Do you do tachograph work or speed limiter changes?',
    a: 'No. Tachograph calibration and any tachograph intervention must be carried out at a DVSA-approved tachograph centre. We do not modify or remove speed limiters.',
  },
  {
    q: 'Can you remove AdBlue, EGR or DPF faults by deleting the system?',
    a: 'No. We do not offer AdBlue/SCR, EGR or DPF deletes or any emissions “delete”. We can diagnose the fault, carry out forced DPF regenerations and code replacement parts so the system works as designed.',
  },
  {
    q: 'My lorry’s instrument cluster has failed. Can you replace it?',
    a: 'Yes. We code the replacement cluster to the vehicle and transfer the true mileage so the odometer stays accurate. We do not alter recorded mileage for any other reason.',
  },
  {
    q: 'Can you fix a cab remote without replacing the whole key?',
    a: 'Often, yes. Worn buttons, flat batteries, cracked cases and lost remote sync can usually be repaired or re-synchronised on site for far less than a new key.',
  },
  {
    q: 'Do you offer fleet accounts?',
    a: HAS_FLEET_DISCOUNT
      ? `Yes: monthly invoicing, priority response and a fleet discount of ${FLEET_DISCOUNT}. Use the Fleet enquiry form or call us to set one up.`
      : 'Yes: monthly invoicing, priority response and fleet rates agreed when you open the account. Use the Fleet enquiry form or call us to set one up.',
  },
];

// ---------------------------------------------------------------------------
// SERVICE AREAS – one page per area, unique text each
// ---------------------------------------------------------------------------

export type Area = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  body: string[];
  distanceNote: string;
  /** Approximate road miles from Goole (used in the coverage list). */
  roadMiles: number;
  /** Inside the free call-out zone (25 road miles of Goole). */
  free: boolean;
  /** Town centre coordinates, used to place the town on the coverage map. */
  lat: number;
  lng: number;
};

export const AREAS: Area[] = [
  {
    slug: 'goole',
    name: 'Goole',
    title: "Mobile HGV Keys & Diagnostics Goole | Lorry Locksmith 24/7",
    description:
      "FoxKey is based in Goole. Mobile lorry key programming and HGV diagnostics at the docks, haulage yards and lorry parks off the M62. 24/7, free call-out.",
    intro: "Goole is home. Our van starts here, so lorries in the town and around junction 36 get the fastest response and a free call-out.",
    body: [
      "Goole’s port and distribution sites bring a steady flow of lorries through the town. We attend the docks area, haulage yards, distribution sheds and the lorry parks and services around M62 junction 36 for key programming, diagnostics and module coding at any hour, so drivers are not left waiting for a dealer to open.",
      "A lost key, a cab remote that has stopped working or a warning light that will not clear are all handled at the lorry. Spares can be programmed at the yard between shifts, so a truck is never down to its last key.",
      "Being based here also means we know the layout: the Capitol Park and Glews Hollow sites, the estates off Rawcliffe Road and Boothferry Road and the routes out to Howden, Snaith and Rawcliffe are all regular stops.",
    ],
    distanceNote: "Free call-out. Goole is our base.",
    roadMiles: 0,
    free: true,
    lat: 53.7036,
    lng: -0.8711,
  },
  {
    slug: 'doncaster',
    name: 'Doncaster',
    title: "Mobile HGV Keys & Diagnostics Doncaster | M18 Lorry Locksmith 24/7",
    description:
      "Mobile lorry key programming and HGV diagnostics across Doncaster, Thorne, Hatfield and the M18 distribution parks. 24/7 call-out from FoxKey HGV.",
    intro: "Doncaster is a short run down the M18 from our Goole base and one of our busiest areas for lorry work.",
    body: [
      "Doncaster sits at the heart of the M18, M180 and A1(M) logistics belt, and the large distribution parks around the motorway junctions and the airport generate plenty of HGV call-outs. We attend depots, yards and lorry parks for truck key programming, diagnostics and module coding so a stranded lorry gets moving again without a recovery bill.",
      "Owner-drivers and fleet operators in Bentley, Armthorpe, Thorne, Hatfield and Rossington get the same mobile service: lost keys replaced, spares programmed and remotes repaired at the cab, with the price confirmed by phone first.",
      "Thorne and Hatfield lie between Goole and Doncaster, so response times there are among our quickest outside Goole itself.",
    ],
    distanceNote: "Roughly 20 miles from Goole, inside our free call-out zone for most of the borough.",
    roadMiles: 20,
    free: true,
    lat: 53.5228,
    lng: -1.1285,
  },
  {
    slug: 'hull',
    name: 'Hull',
    title: "Mobile HGV Keys & Diagnostics Hull | Port & A63 Lorry Locksmith 24/7",
    description:
      "Mobile lorry key programming and HGV diagnostics across Hull and the East Riding, including the port, the docks lorry parks and the A63. 24/7 from FoxKey HGV.",
    intro: "Hull is a straight run along the M62 and A63 from Goole, and we cover the port, the city and the East Riding 24/7.",
    body: [
      "Hull’s port estate is one of the busiest freight gateways in the country, and the lorry parks and haulage yards around the docks and the A63 see trucks from across Europe. We attend for key programming, diagnostics and module replacement, including out-of-hours roadside call-outs when a driver is stuck ahead of a sailing or a timed delivery.",
      "Yards and depots in Hessle, Melton, Brough, Hedon and along the A63 get the same service: spare keys programmed between runs, cab remotes repaired and warning lights diagnosed without a tow to a dealer.",
      "Travel beyond our free zone is quoted upfront by phone, so operators in Hull always know the full price before we set off.",
    ],
    distanceNote: "Around 30 miles from Goole. Travel is quoted upfront for the city; the western East Riding is free.",
    roadMiles: 30,
    free: false,
    lat: 53.7457,
    lng: -0.3367,
  },
  {
    slug: 'selby',
    name: 'Selby',
    title: "Mobile HGV Keys & Diagnostics Selby | Lorry Locksmith 24/7",
    description:
      "Mobile lorry key programming and HGV diagnostics in Selby, Sherburn-in-Elmet, Tadcaster and the A1(M)/M62 distribution sites. Free call-out from Goole, 24/7.",
    intro: "Selby is just up the A614 and A63 from Goole, so the whole district falls within our free call-out zone.",
    body: [
      "The distribution sites around Sherburn-in-Elmet and the A1(M)/M62 junctions bring regular lorry work. We attend depots and yards for key programming, diagnostics and module coding, keeping trucks on the road rather than waiting for a dealer slot.",
      "We cover Selby town, Barlby, Brayton, Sherburn-in-Elmet, Tadcaster, Carlton and Snaith. Lost keys, spares, cab remotes and fault codes are all dealt with at the lorry.",
      "Rural locations are no problem. If the tractor unit is on a farm track or a quiet lane, send a What3Words or a postcode and we will find it.",
    ],
    distanceNote: "Roughly 15 miles from Goole. Free call-out across the Selby district.",
    roadMiles: 15,
    free: true,
    lat: 53.7836,
    lng: -1.067,
  },
  {
    slug: 'scunthorpe',
    name: 'Scunthorpe',
    title: "Mobile HGV Keys & Diagnostics Scunthorpe | M180 Lorry Locksmith 24/7",
    description:
      "Mobile lorry key programming and HGV diagnostics in Scunthorpe, Brigg and North Lincolnshire, including the M180 lorry parks. 24/7 from FoxKey HGV.",
    intro: "Across the Humber from Goole via the M180, Scunthorpe and North Lincolnshire are well within our everyday working area.",
    body: [
      "The M180 and A18 corridor and the industrial estates around Scunthorpe carry heavy lorry traffic. We attend lorry parks, yards and roadside breakdowns for key programming, diagnostics and module coding, 24 hours a day.",
      "Operators in Scunthorpe, Brigg, Barton-upon-Humber, Crowle and Epworth get the same mobile service as Goole: keys cut and programmed at the cab, remotes repaired and full-system diagnostics, with the price confirmed by phone before we travel.",
      "Scunthorpe is at the edge of our free call-out zone; anything beyond it is quoted upfront so there are no surprises.",
    ],
    distanceNote: "Around 20 miles from Goole. Free call-out for most of the town.",
    roadMiles: 20,
    free: true,
    lat: 53.5809,
    lng: -0.6502,
  },
  {
    slug: 'york',
    name: 'York',
    title: "Mobile HGV Keys & Diagnostics York | Lorry Locksmith 24/7",
    description:
      "Mobile lorry key programming and HGV diagnostics in York and along the A64 and A19. 24/7 call-out from FoxKey HGV in Goole.",
    intro: "York is under an hour from Goole and we regularly attend the industrial estates and depots around the ring road, the A19 and the A64.",
    body: [
      "Truck dealers are rarely open when a lorry stops at night. We attend yards and depots around Clifton Moor, Monks Cross, Osbaldwick and the A64 for key programming, diagnostics and module coding at the lorry.",
      "Drivers stopped on the A64, the A19 or the A1237 ring road get a roadside call-out instead of a heavy recovery, and spares can be programmed at the depot at a time that suits the shift pattern.",
      "Travel beyond our free zone is quoted upfront when you call.",
    ],
    distanceNote: "Around 30 miles from Goole. Travel quoted upfront for the city.",
    roadMiles: 30,
    free: false,
    lat: 53.96,
    lng: -1.0873,
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    title: "Mobile HGV Keys & Diagnostics Leeds | M62 Lorry Locksmith 24/7",
    description:
      "Mobile lorry key programming and HGV diagnostics in Leeds, Castleford, Wakefield and the M62 distribution belt. 24/7 from FoxKey HGV.",
    intro: "Leeds and the M62 corridor through Castleford, Pontefract and Wakefield are a direct motorway run from Goole and part of our regular rounds.",
    body: [
      "The M62 between Goole and Leeds is lined with distribution centres and lorry parks, particularly around junctions 29 to 32. We attend yards and roadside breakdowns along this stretch for key programming, diagnostics and module coding, around the clock.",
      "Depots in Leeds, Garforth, Rothwell, Morley and Normanton get spares programmed at the yard, cab remotes repaired and fault codes read and explained, with the price confirmed by phone first.",
      "Leeds is beyond our free call-out zone, so travel is quoted upfront. It is still usually far less than a heavy recovery to a dealer.",
    ],
    distanceNote: "Around 35 miles from Goole. Travel quoted upfront.",
    roadMiles: 35,
    free: false,
    lat: 53.8008,
    lng: -1.5491,
  },
];

/** Major places inside the 100-mile operating radius (no own page; shown on /areas and on the coverage map). */
export const REACH = [
  { region: 'Yorkshire & the Humber', places: ['Leeds', 'Sheffield', 'Bradford', 'Wakefield', 'Hull', 'York', 'Harrogate'] },
  { region: 'North East', places: ['Middlesbrough', 'Stockton-on-Tees', 'Darlington', 'Durham'] },
  { region: 'North West', places: ['Manchester', 'Warrington', 'Preston', 'Liverpool'] },
  { region: 'East Midlands', places: ['Nottingham', 'Derby', 'Leicester', 'Chesterfield'] },
  { region: 'Lincolnshire', places: ['Lincoln', 'Scunthorpe', 'Grimsby', 'Immingham', 'Boston'] },
];

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const SEO = {
  home: {
    title: 'Mobile HGV Keys & Diagnostics Goole | Lorry Locksmith 24/7 | FoxKey',
    description:
      'Lorry key lost or warning light on? FoxKey comes to your yard or roadside 24/7 from Goole. HGV keys programmed on site. Free call-out within 25 miles.',
  },
  hgv: {
    title: 'HGV Services: Lorry Keys, Diagnostics & Coding | FoxKey HGV',
    description:
      'Mobile HGV key programming, all keys lost, cab remotes, diagnostics, module coding and DPF regens at your yard or roadside along the M62 and M18, 24/7.',
  },
  prices: {
    title: 'HGV Key & Diagnostic Prices | FoxKey HGV',
    description:
      'Clear “from” prices for mobile lorry and HGV key programming, diagnostics and module coding. Free call-out within 25 miles of Goole. Price confirmed by phone.',
  },
  makes: {
    title: 'Truck Makes We Cover | FoxKey HGV',
    description:
      'The lorry and HGV makes FoxKey programmes keys for and diagnoses today. Not listed? Send the registration and we will confirm.',
  },
  quote: {
    title: 'Get a Quote for Mobile HGV Keys & Diagnostics | FoxKey HGV',
    description:
      'Request a quote for mobile lorry and HGV key programming and diagnostics. Tell us the truck and where it is and we confirm a price by phone.',
  },
  fleet: {
    title: 'Fleet & Operator Accounts for Lorry Fleets | FoxKey HGV',
    description:
      'Set up a fleet account with FoxKey: monthly invoicing, priority response and account rates on key programming and diagnostics for lorries and HGVs up to 100 miles from Goole.',
  },
  about: {
    title: 'About | Mobile HGV Locksmith in Goole | FoxKey HGV',
    description:
      'FoxKey HGV is a mobile lorry locksmith and diagnostics service based in Goole, East Yorkshire, covering yards and roadsides up to 100 miles away, 24/7.',
  },
  faq: {
    title: 'FAQ: HGV Keys, Diagnostics & Fleet Accounts | FoxKey HGV',
    description:
      'Answers on mobile lorry key replacement, proof of ownership, operator authorisation, prices, coverage and what we do not do, from FoxKey HGV in Goole.',
  },
  contact: {
    title: 'Contact | 24/7 Mobile HGV Locksmith in Goole | FoxKey HGV',
    description:
      'Call or WhatsApp FoxKey HGV on 07944 087924, 24/7. Mobile lorry and HGV key programming and diagnostics up to 100 miles from Goole.',
  },
  privacy: {
    title: 'Privacy Policy | FoxKey HGV',
    description: 'How FoxKey HGV handles your personal data under UK GDPR, including enquiry forms, cookies and your rights.',
  },
  areas: {
    title: 'Areas We Cover: Up to 100 Miles from Goole | FoxKey HGV',
    description:
      'Mobile HGV keys and diagnostics up to 100 miles from Goole: Yorkshire, Teesside, Manchester and Liverpool, the East Midlands and Lincolnshire. Free call-out within 25 miles.',
  },
  thanks: {
    title: 'Thanks, We’ll Be in Touch | FoxKey HGV',
    description: 'Your enquiry has been sent to FoxKey HGV. For urgent help call or WhatsApp 07944 087924.',
  },
};
