/**
 * FoxKey Auto & HGV – single source of truth for all site content.
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
  name: 'FoxKey Auto & HGV',
  shortName: 'FoxKey',
  tagline: 'Mobile Auto Locksmith & Diagnostics – Cars, Vans, Lorries & HGVs',
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
    encodeURIComponent('Hi FoxKey, I need help with my vehicle keys/diagnostics. Vehicle: ... Location: ...'),
  hours: '24/7, including weekends and bank holidays',
  hoursShort: '24/7',
  payment: ['Cash', 'card', 'bank transfer'],
  /** Brand mention – used ONCE on the site (Why FoxKey card). Everywhere else use equipmentGeneric. */
  equipmentLine: 'We use professional Abrites diagnostic equipment.',
  /** Neutral wording for all other mentions of equipment. */
  equipmentGeneric: 'Professional, dealer-level key programming and diagnostic equipment.',
  freeCalloutMiles: 25,
  coverage: {
    primary: 'Goole, Yorkshire and the Humber',
    secondary: 'Rest of the UK on request (travel quoted separately)',
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
  { label: 'Cars & Vans', href: '/services' },
  { label: 'HGV & Lorries', href: '/hgv' },
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

export const CAR_MAKES = [
  'VW / Audi / Seat / Skoda',
  'BMW / MINI',
  'Mercedes-Benz / Smart',
  'Ford',
  'Vauxhall / Opel',
  'Renault / Dacia',
  'Peugeot / Citroën',
  'Fiat / Alfa Romeo / Jeep',
  'Hyundai / Kia',
  'Toyota / Lexus',
  'Nissan',
  'Jaguar / Land Rover',
  'Porsche',
  'Subaru',
  'Mazda',
];

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

/** Light commercial vehicles – shown under the HGV & vans heading. */
export const VAN_MAKES: TruckMake[] = [
  { name: 'Mercedes-Benz Sprinter', enabled: true },
  { name: 'Ford Transit', enabled: true },
  { name: 'VW Crafter / Transporter', enabled: true },
  { name: 'Renault Master / Trafic', enabled: true },
  { name: 'Vauxhall Vivaro / Movano', enabled: true },
  { name: 'Peugeot Boxer', enabled: true },
  { name: 'Citroën Relay', enabled: true },
  { name: 'Fiat Ducato', enabled: true },
  { name: 'Iveco Daily', enabled: true },
];

export const enabledTruckMakes = () => TRUCK_MAKES.filter((m) => m.enabled);
export const enabledVanMakes = () => VAN_MAKES.filter((m) => m.enabled);

// ---------------------------------------------------------------------------
// SERVICES & PRICES – CARS & VANS
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

export const CAR_SERVICES: Service[] = [
  {
    id: 'diagnostics',
    title: 'Mobile diagnostic scan',
    summary: 'Full scan of all modules with a plain-English fault report.',
    description:
      'A full-system scan of every control module on the vehicle (engine, gearbox, ABS, airbags, body and comfort systems), not just the engine light. You get a clear fault report and an honest recommendation on what needs doing, at your home or workplace.',
    priceFrom: '£49',
    icon: 'activity',
  },
  {
    id: 'spare-key',
    title: 'Spare key – supplied, cut & programmed',
    summary: 'A second key cut and coded to your car while you wait.',
    description:
      'Only have one key? A spare costs far less now than an all-keys-lost job later. We supply a quality key or remote, cut it to your locks and programme it to the immobiliser on your driveway. Proof of ownership required.',
    priceFrom: '£99',
    icon: 'key-round',
  },
  {
    id: 'all-keys-lost',
    title: 'All keys lost – new key, cut & programmed',
    summary: 'Lost every key? We come to you and get you driving again.',
    description:
      'No need to recover the vehicle to a dealer. We attend where the car is, read the immobiliser data, produce a new key, cut it and programme it on site. Previously lost keys can usually be deleted so they no longer start the vehicle. Proof of ownership required.',
    priceFrom: '£179',
    priceNote: 'Prestige / VAG MQB / BMW / Mercedes: from £249',
    icon: 'search',
  },
  {
    id: 'remote-repair',
    title: 'Remote / fob reprogramming or repair',
    summary: 'Remote stopped working? Often fixable without a new key.',
    description:
      'Buttons not responding, remote lost sync or key works in the door but not the ignition? We diagnose and repair or re-synchronise the remote, replacing worn buttons, batteries or circuit boards where needed.',
    priceFrom: '£49',
    icon: 'radio',
  },
  {
    id: 'fob-case',
    title: 'Key fob case replacement',
    summary: 'Cracked or worn case? We move your electronics into a new shell.',
    description:
      'Worn-out or cracked key shell? We move your existing chip and remote board into a new case and cut a new blade where needed, keeping the original programming intact.',
    priceFrom: '£35',
    icon: 'package',
  },
  {
    id: 'module-cloning',
    title: 'ECU / BCM / immobiliser cloning & module coding',
    summary: 'Replace a faulty module and code it to the vehicle.',
    description:
      'Faulty engine ECU, body control module or immobiliser? We clone data from the old unit or code a replacement module so it works with your existing keys, often avoiding a full dealer “key set” replacement. Proof of ownership required.',
    priceFrom: '£120',
    icon: 'cpu',
  },
  {
    id: 'coding',
    title: 'Coding & feature activation',
    summary: 'Enable options, retrofit coding and component matching.',
    description:
      'Retrofits coded in, hidden features enabled where the hardware supports it, and replacement components (cameras, sensors, lights, radios) matched to the vehicle so the warning lights stay off.',
    priceFrom: '£60',
    icon: 'sliders-horizontal',
  },
  {
    id: 'service-functions',
    title: 'Service light / oil reset, battery registration, DPF regen, adaptations',
    summary: 'Service resets and workshop functions done at your door.',
    description:
      'Service interval and oil-life resets, battery registration after a battery change, forced DPF regeneration, electronic parking brake service mode, throttle and steering-angle adaptations and more.',
    priceFrom: '£35',
    icon: 'wrench',
  },
  {
    id: 'cluster',
    title: 'Instrument cluster replacement with true mileage transfer',
    summary: 'Replacement cluster coded, with the true mileage transferred.',
    description:
      'When a dashboard cluster fails we code the replacement to your vehicle and transfer the true recorded mileage to the new unit, so the odometer stays accurate and the vehicle history is preserved. Proof of ownership required.',
    priceFrom: '£120',
    icon: 'gauge',
  },
];

export const CAR_CALLOUT = {
  title: 'Call-out',
  text: `Free within ${SITE.freeCalloutMiles} miles of Goole. Outside that, quoted upfront before we travel.`,
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
    priceFrom: '£89',
    icon: 'activity',
  },
  {
    id: 'hgv-spare-key',
    title: 'HGV / lorry spare key – supplied, cut & programmed',
    summary: 'A spare lorry key programmed at your depot.',
    description:
      'A spare key for a lorry is cheap insurance against a vehicle sitting idle. We supply, cut and programme a spare to the truck’s immobiliser at your yard, at a time that fits your schedule. Proof of ownership or operator authorisation required.',
    priceFrom: '£149',
    icon: 'key-round',
  },
  {
    id: 'hgv-all-keys-lost',
    title: 'HGV / lorry all keys lost',
    summary: 'Lorry stranded with no keys? We attend and programme a new one.',
    description:
      'A lorry with no keys is a load going nowhere. We attend the vehicle at the depot, lorry park or roadside, produce and programme a new key and get the vehicle running again. Proof of ownership or written operator authorisation required.',
    priceFrom: '£299',
    icon: 'search',
  },
  {
    id: 'hgv-remote',
    title: 'HGV remote / fob repair or reprogramming',
    summary: 'Central locking remotes repaired or re-synchronised.',
    description:
      'Remote not locking the cab, buttons worn or key lost sync after a battery change? We repair or reprogramme lorry remotes on site.',
    priceFrom: '£69',
    icon: 'radio',
  },
  {
    id: 'hgv-modules',
    title: 'Module replacement & coding (ECU, cluster, immobiliser, body modules)',
    summary: 'Replacement truck modules coded to the vehicle.',
    description:
      'Engine ECU, instrument cluster, immobiliser and body/chassis modules replaced and coded to the lorry so the vehicle accepts the new unit and existing keys, saving a trip to the main dealer. Proof of ownership or operator authorisation required.',
    priceFrom: '£180',
    icon: 'cpu',
  },
  {
    id: 'hgv-cluster',
    title: 'Instrument cluster replacement with true mileage transfer',
    summary: 'New cluster fitted and coded, true mileage transferred.',
    description:
      'When a lorry cluster fails we code the replacement and transfer the true recorded mileage to the new unit so the odometer reading and vehicle history remain accurate.',
    priceFrom: '£180',
    icon: 'gauge',
  },
  {
    id: 'hgv-dpf',
    title: 'Forced DPF regeneration & service resets',
    summary: 'Regens and service resets at your yard, not the dealer’s.',
    description:
      'Forced DPF regeneration when the truck won’t regenerate on its own, plus service interval resets and other maintenance functions, done at your depot to keep the lorry on the road.',
    priceFrom: '£79',
    icon: 'wrench',
  },
];

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
    text: 'We come to your home, workplace, depot, lorry park or the roadside. No recovery truck, no dealer queue.',
    icon: 'truck',
  },
  {
    title: 'Open 24/7',
    text: 'Days, nights, weekends and bank holidays. Lost keys don’t keep office hours and neither do we.',
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
    text: 'For key work you pay once the vehicle starts and the key is working. Cash, card or bank transfer.',
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
    'Keys cut and programmed, remotes repaired and faults diagnosed on cars, vans, lorries and HGVs, wherever they stopped in Goole and Yorkshire.',
  heroNote: 'Price agreed before we set off. For key work you pay once the vehicle starts.',
  signLabel: 'Road miles from Goole',
  lanes: {
    title: 'Car, van or lorry?',
    text: 'One van carries the kit for both. Pick yours for every service and price.',
  },
  cars: {
    title: 'Cars & Vans',
    where: 'On your drive, at work, in a car park or at the roadside.',
    jobs: ['Spare keys and all keys lost', 'Remote and fob repairs', 'ECU, BCM and immobiliser work', 'Diagnostics and service resets'],
  },
  hgv: {
    title: 'Lorries & HGV',
    where: 'At your yard, depot, a lorry park or the hard shoulder.',
    jobs: ['HGV spare keys and all keys lost', 'Yard and roadside diagnostics', 'Module replacement and coding', 'Forced DPF regeneration'],
  },
  prices: {
    title: 'What will it cost?',
    text: 'Starting prices. We confirm the exact figure for your make, model and year on the phone, before we travel.',
  },
  steps: {
    title: 'From the phone call to a running engine',
    items: [
      { title: 'Ring or WhatsApp', text: 'Make, model, year and where the vehicle is. You get the price before we set off.' },
      { title: 'We drive to you', text: 'Keys are cut and programmed at the vehicle. Nothing is posted away and nothing is towed.' },
      { title: 'Check, test, pay', text: 'We check the V5C and photo ID, test every key, and you pay once the vehicle starts.' },
    ],
  },
  compare: {
    title: 'Why not just ring the dealer?',
    text: 'You can. This is what usually changes when you ring us instead.',
  },
  makes: {
    title: 'Do you work on my vehicle?',
    text: 'The makes we programme and diagnose today. Not listed? Send the registration and we will tell you straight away.',
    plateLabel: 'Start a quote with your registration',
    plateHint: 'We check it when you send the form. Nothing is looked up automatically.',
  },
  ready: {
    title: 'What should I have ready?',
    text: 'We never programme a key without proof the vehicle is yours. Having these to hand keeps the job quick.',
  },
  close: {
    title: 'Stuck right now?',
    text: 'Ring with the make, model and where it is. We agree the price before we set off.',
  },
};

/** HGV page hero copy. The make list is built from TRUCK_MAKES, so enabling a make updates the promise. */
export const HGV_PAGE = {
  heroTitle: 'HGV & lorry keys and diagnostics – at your yard or roadside, 24/7.',
  heroSubtitle: () =>
    `Key programming, diagnostics and module coding for ${TRUCK_MAKES.filter((m) => m.enabled).map((m) => m.name).join(', ')} lorries and most vans, at yards and roadsides along the M62 and M18.`,
  heroNote: 'Free call-out within 25 miles of Goole, day or night, at your yard or the roadside. Price confirmed by phone before we travel, and for key work you pay once the lorry starts.',
};

/** "Why FoxKey": the dealer route vs FoxKey, row by row. Keep claims general and fair. */
export const DEALER_COMPARE = [
  { topic: 'Getting the vehicle there', dealer: 'Usually needs recovering to the workshop.', foxkey: 'We come to the vehicle, wherever it stopped.' },
  { topic: 'When', dealer: 'Booked into workshop hours, often days ahead.', foxkey: '24/7, including weekends and bank holidays.' },
  { topic: 'Price', dealer: 'Main-dealer labour rates plus recovery.', foxkey: `From £99 ${VAT_LABEL} for a spare key, agreed before we travel.` },
  { topic: 'Equipment', dealer: 'Manufacturer tools in the workshop.', foxkey: 'We use professional Abrites diagnostic equipment.' },
  { topic: 'Paying', dealer: 'Pay when you collect.', foxkey: 'For key work, pay once the vehicle starts.' },
];

export const READY_CHECKLIST = [
  { title: 'V5C logbook', text: 'In the name of the person we meet.', icon: 'file-text' },
  { title: 'Photo ID with the same address', text: 'Driving licence or passport.', icon: 'id-card' },
  { title: 'Fleet vehicle?', text: 'Written authorisation on the operator’s letterhead works instead.', icon: 'building-2' },
  { title: 'Where the vehicle is', text: 'Postcode, What3Words or the motorway junction.', icon: 'map-pin' },
];

// ---------------------------------------------------------------------------
// FLEET & OPERATOR ACCOUNTS
// ---------------------------------------------------------------------------

export const FLEET = {
  title: 'Fleet and operator accounts',
  intro:
    'Running lorries, vans or a mixed fleet? An operator account keeps your vehicles moving with one number to call and one invoice a month.',
  benefits: [
    { title: 'Monthly invoicing', text: 'One consolidated invoice for all call-outs, with vehicle registrations and job details listed.' },
    { title: 'Priority response', text: 'Account holders go to the front of the queue, day or night.' },
    ...(HAS_FLEET_DISCOUNT ? [{ title: `Fleet discount: ${FLEET_DISCOUNT}`, text: 'Discounted rates on keys, diagnostics and module work across your fleet.' }] : [{ title: 'Fleet rates', text: 'Account rates on keys, diagnostics and module work, agreed when you open the account.' }]),
    { title: 'Operator authorisation accepted', text: 'For fleet vehicles we accept written authorisation on your company letterhead in place of a V5C and photo ID.' },
  ],
  cta: { label: 'Make a fleet enquiry', href: '/fleet' },
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export type Faq = { q: string; a: string };

export const FAQ_GENERAL: Faq[] = [
  {
    q: 'Do I need to bring the car to you?',
    a: 'No. FoxKey is a fully mobile service. We come to your home, workplace, car park or the roadside anywhere in our coverage area, with everything needed to cut and programme keys and carry out diagnostics on site.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We are based in Goole, East Yorkshire and cover Goole, Yorkshire and the Humber as a priority, including Doncaster, Hull, Selby, Scunthorpe, York and Leeds. We can travel to the rest of the UK on request; travel is quoted separately.',
  },
  {
    q: 'Are you really available 24/7?',
    a: 'Yes, including weekends and bank holidays, at the same prices day or night. Call or WhatsApp at any time and we confirm the price before we travel.',
  },
  {
    q: 'How much does a replacement car key cost?',
    a: `A spare key starts from £99 and an all-keys-lost job from £179 (prestige, VAG MQB, BMW and Mercedes from £249), ${VAT_LABEL}. The final price depends on the make, model and year and is confirmed by phone before we set off.`,
  },
  {
    q: 'Is the call-out free?',
    a: `Yes, within ${SITE.freeCalloutMiles} miles of Goole. Outside that we quote the travel upfront so you know the total before we come.`,
  },
  {
    q: 'What proof of ownership do you need?',
    a: 'For any key, immobiliser or module work we require the V5C logbook and photo ID showing the same address. For fleet vehicles we can accept written authorisation on the operator’s letterhead instead. We will not programme keys without this.',
  },
  {
    q: 'I have lost all my keys. Can you still help?',
    a: 'Yes. We can produce a new key from the vehicle itself, cut it and programme it to the immobiliser on site. In most cases lost keys can be deleted from the vehicle so they no longer work.',
  },
  {
    q: 'Can you make a spare key if I only have one?',
    a: 'Yes, and we recommend it. Cloning or programming a spare while you still have a working key is quicker and cheaper than an all-keys-lost job later.',
  },
  {
    q: 'Which makes do you cover?',
    a: 'Most European, Japanese and Korean makes, including VW Group, BMW/MINI, Mercedes-Benz, Ford, Vauxhall, Renault/Dacia, Peugeot/Citroën, Fiat Group, Hyundai/Kia, Toyota/Lexus, Nissan, Jaguar Land Rover, Porsche, Subaru and Mazda. See the Makes page for the full list and call if yours isn’t listed.',
  },
  {
    q: 'What equipment do you use?',
    a: `${SITE.equipmentGeneric} It allows dealer-level key programming, module coding and full-system diagnostics from our van.`,
  },
  {
    q: 'How do I pay?',
    a: 'Cash, card or bank transfer. For key work you pay once the vehicle starts and the key is working.',
  },
  {
    q: 'Do you offer a warranty?',
    a: WARRANTY_TEXT,
  },
  {
    q: 'Can you fix my remote without replacing the whole key?',
    a: 'Often, yes. Worn buttons, flat batteries, cracked cases and lost remote sync can usually be repaired or re-synchronised for far less than a new key.',
  },
];

export const FAQ_HGV: Faq[] = [
  {
    q: 'Do you work on lorries and HGVs as well as cars?',
    a: 'Yes. We programme keys, carry out diagnostics and code modules on lorries and HGVs as well as light commercials. See the HGV & Lorries page for the makes we currently cover.',
  },
  {
    q: 'Can you come to our depot or a lorry park?',
    a: 'Yes. We attend yards, depots, lorry parks, service areas and roadside locations across Goole, the M62/M18 corridor and the wider Yorkshire and Humber area, 24/7.',
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
    title: 'Mobile Auto Locksmith Goole | Car, Van & HGV Keys 24/7',
    description:
      'FoxKey is based in Goole. Mobile car, van and lorry key programming and diagnostics at your door, the docks or the lorry parks off the M62. 24/7, free call-out.',
    intro: 'Goole is home. Our van starts here, so you get the fastest response and a free call-out across the town and the surrounding villages.',
    body: [
      'Whether you have locked yourself out on a residential street, lost your only key at the shops or your van won’t start on a trading estate, we are minutes away. Spare keys, all-keys-lost, remote repairs and full diagnostics are all done at the roadside or on your driveway.',
      'Goole’s port and distribution sites bring a steady flow of lorries through the town. We attend the docks area, haulage yards and the lorry parks and services around the M62 junction 36 for HGV key programming, diagnostics and module coding at any hour, so drivers are not stuck waiting for a dealer to open.',
      'Being based in Goole also means we know the local layout: the Rawcliffe Road and Boothferry Road estates, the Capitol Park and Glews Hollow sites and the routes out to Howden, Snaith and Rawcliffe are all regular stops.',
    ],
    distanceNote: 'Free call-out. Goole is our base.',
    roadMiles: 0,
    free: true,
    lat: 53.7036,
    lng: -0.8711,
  },
  {
    slug: 'doncaster',
    name: 'Doncaster',
    title: 'Mobile Auto Locksmith Doncaster | Car & HGV Key Programming 24/7',
    description:
      'Mobile car, van and lorry key programming and diagnostics across Doncaster, Thorne, Hatfield and the M18 corridor. 24/7 call-out from FoxKey Auto & HGV.',
    intro: 'Doncaster is a short run down the M18 from our Goole base and one of our busiest areas for both car and lorry work.',
    body: [
      'For car and van drivers in Doncaster, Bentley, Armthorpe, Thorne, Hatfield and Rossington we offer the full mobile service: lost keys replaced, spares programmed, remotes repaired and dealer-level diagnostics done at your home or workplace, often the same day.',
      'Doncaster sits at the heart of the M18/M180/A1(M) logistics belt, and the large distribution parks around the motorway junctions and the airport generate plenty of HGV call-outs. We attend depots, yards and lorry parks for truck key programming, diagnostics and module coding so a stranded lorry gets moving again without a recovery bill.',
      'Thorne and Hatfield lie between Goole and Doncaster, so response times there are among our quickest outside Goole itself.',
    ],
    distanceNote: 'Roughly 20 miles from Goole, inside our free call-out zone for most of the borough.',
    roadMiles: 20,
    free: true,
    lat: 53.5228,
    lng: -1.1285,
  },
  {
    slug: 'hull',
    name: 'Hull',
    title: 'Mobile Auto Locksmith Hull | Car, Van & Lorry Keys 24/7',
    description:
      'Mobile car key replacement, van keys and HGV diagnostics across Hull and the East Riding, including the docks and the A63/M62 corridor. 24/7 from FoxKey Auto & HGV.',
    intro: 'Hull and the East Riding are a straight run along the M62 and A63 from Goole, and we cover the city and its surrounding towns 24/7.',
    body: [
      'From the Avenues to Hessle, Cottingham, Beverley, Hedon and Willerby, we bring key cutting, programming and diagnostics to your door. All-keys-lost jobs, spare keys, remote repairs and warning-light diagnostics are handled on site without a tow to a dealer.',
      'Hull’s port estate is one of the busiest freight gateways in the country, and the lorry parks and haulage yards around the docks and the A63 see trucks from across Europe. We attend for HGV key programming, diagnostics and module replacement, including out-of-hours roadside call-outs when a driver is stuck ahead of a sailing or a timed delivery.',
      'Travel beyond our free zone is quoted upfront by phone, so Hull customers always know the full price before we set off.',
    ],
    distanceNote: 'Around 30 miles from Goole. Travel is quoted upfront for the city; the western East Riding is free.',
    roadMiles: 30,
    free: false,
    lat: 53.7457,
    lng: -0.3367,
  },
  {
    slug: 'selby',
    name: 'Selby',
    title: 'Mobile Auto Locksmith Selby | Car Keys & Diagnostics 24/7',
    description:
      'Mobile car, van and lorry key programming in Selby, Sherburn-in-Elmet, Tadcaster and the surrounding villages. Free call-out from our Goole base, 24/7.',
    intro: 'Selby is just up the A614 and A63 from Goole, so the whole district falls within our free call-out zone.',
    body: [
      'We cover Selby town, Barlby, Brayton, Sherburn-in-Elmet, Tadcaster, Carlton, Snaith and the villages in between. Lost car keys, spares, remote repairs, module coding and diagnostics are all done at your home or place of work.',
      'The distribution sites around Sherburn and the A1(M)/M62 junctions bring regular van and lorry work. We attend depots and yards for HGV key programming and diagnostics, keeping vehicles on the road rather than waiting for a dealer slot.',
      'Rural locations are no problem. If the car or tractor unit is on a farm track or a quiet lane, send us a What3Words or postcode and we will find it.',
    ],
    distanceNote: 'Roughly 15 miles from Goole. Free call-out across the Selby district.',
    roadMiles: 15,
    free: true,
    lat: 53.7836,
    lng: -1.067,
  },
  {
    slug: 'scunthorpe',
    name: 'Scunthorpe',
    title: 'Mobile Auto Locksmith Scunthorpe | Car & HGV Keys 24/7',
    description:
      'Mobile car, van and lorry key replacement and diagnostics in Scunthorpe, Brigg and North Lincolnshire, including the M180 lorry parks. 24/7 from FoxKey Auto & HGV.',
    intro: 'Across the Humber from Goole via the M180, Scunthorpe and North Lincolnshire are well within our everyday working area.',
    body: [
      'Car and van owners in Scunthorpe, Brigg, Barton-upon-Humber, Crowle and Epworth get the same mobile service as Goole: keys cut and programmed, remotes repaired, modules cloned and full-system diagnostics at your door, with prices confirmed by phone before we travel.',
      'The M180 and A18 corridor and the industrial estates around Scunthorpe carry heavy lorry traffic. We attend lorry parks, yards and roadside breakdowns for HGV key programming, diagnostics and module coding, 24 hours a day.',
      'Scunthorpe is at the edge of our free call-out zone; anything beyond it is quoted upfront so there are no surprises.',
    ],
    distanceNote: 'Around 20 miles from Goole. Free call-out for most of the town.',
    roadMiles: 20,
    free: true,
    lat: 53.5809,
    lng: -0.6502,
  },
  {
    slug: 'york',
    name: 'York',
    title: 'Mobile Auto Locksmith York | Car Key Replacement & Diagnostics 24/7',
    description:
      'Mobile car and van key programming, remote repair and diagnostics in York and the surrounding villages. 24/7 call-out from FoxKey Auto & HGV in Goole.',
    intro: 'York is under an hour from Goole and we regularly attend the city, its ring-road estates and the villages along the A19 and A64.',
    body: [
      'Within the city walls parking is tight and dealer workshops are out of town, which is exactly where a mobile locksmith helps. We attend car parks, residential streets and workplaces across York, Acomb, Clifton, Fulford, Haxby and Copmanthorpe for lost keys, spares and diagnostics.',
      'The industrial and trading estates around Clifton Moor, Monks Cross and the A64 bring plenty of van work: Transit, Sprinter, Crafter and Vivaro keys and modules are everyday jobs for us. Lorry work in the York area is handled from the same van, 24/7.',
      'Travel beyond our free zone is quoted upfront when you call.',
    ],
    distanceNote: 'Around 30 miles from Goole. Travel quoted upfront for the city.',
    roadMiles: 30,
    free: false,
    lat: 53.96,
    lng: -1.0873,
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    title: 'Mobile Auto Locksmith Leeds | Car, Van & HGV Key Programming 24/7',
    description:
      'Mobile car, van and lorry key programming and diagnostics in Leeds, Castleford, Wakefield and the M62 corridor. 24/7 from FoxKey Auto & HGV.',
    intro: 'Leeds and the M62 corridor through Castleford, Pontefract and Wakefield are a direct motorway run from Goole and part of our regular rounds.',
    body: [
      'For car and van drivers across Leeds, Garforth, Rothwell, Morley and Pudsey we provide mobile key replacement, spare key programming, remote repairs and full diagnostics at your door, with upfront pricing confirmed by phone.',
      'The M62 between Goole and Leeds is lined with distribution centres and lorry parks, particularly around junctions 29 to 32. We attend yards and roadside breakdowns along this stretch for HGV key programming, diagnostics and module coding, around the clock.',
      'Leeds is beyond our free call-out zone, so travel is quoted upfront. It is still usually far less than a recovery to a dealer.',
    ],
    distanceNote: 'Around 35 miles from Goole. Travel quoted upfront.',
    roadMiles: 35,
    free: false,
    lat: 53.8008,
    lng: -1.5491,
  },
];

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const SEO = {
  home: {
    title: 'Mobile Auto Locksmith Goole | Car, Van & HGV Keys 24/7 | FoxKey',
    description:
      'Lost your keys? FoxKey comes to you 24/7 in Goole and Yorkshire. Car, van and HGV keys programmed on site. Free call-out within 25 miles.',
  },
  hgv: {
    title: 'Mobile HGV Keys & Diagnostics Goole, M62 & M18 | FoxKey',
    description:
      'Lorry key lost or warning light on? Mobile HGV key programming and diagnostics at your yard or roadside, 24/7, from Goole along the M62 and M18.',
  },
  services: {
    title: 'Car & Van Key Programming, Diagnostics & Coding | FoxKey Auto & HGV',
    description:
      'Mobile car and van services: spare keys, all keys lost, remote repair, ECU and module cloning, coding, service resets and cluster replacement. Prices from £35, we come to you.',
  },
  prices: {
    title: 'Car, Van & HGV Key and Diagnostic Prices | FoxKey Auto & HGV',
    description:
      'Clear “from” prices for mobile car, van, lorry and HGV key programming, diagnostics and module coding. Free call-out within 25 miles of Goole. Final price confirmed by phone.',
  },
  makes: {
    title: 'Makes We Cover: Cars, Vans, Lorries & HGVs | FoxKey Auto & HGV',
    description:
      'Car, van and truck makes covered by FoxKey mobile key programming and diagnostics: VW Group, BMW, Mercedes-Benz, Ford, Vauxhall, Renault, Peugeot, Mercedes trucks and more.',
  },
  quote: {
    title: 'Get a Quote for Mobile Keys & Diagnostics | FoxKey Auto & HGV',
    description:
      'Request a quote for mobile car, van, lorry or HGV key programming and diagnostics. Tell us the vehicle and location and we will confirm a price by phone.',
  },
  fleet: {
    title: 'Fleet & Operator Accounts for HGV, Lorry & Van Fleets | FoxKey Auto & HGV',
    description:
      'Set up a fleet account with FoxKey: monthly invoicing, priority response and account rates on key programming and diagnostics for lorries, HGVs and vans across Yorkshire.',
  },
  about: {
    title: 'About | Mobile Auto Locksmith in Goole | FoxKey Auto & HGV',
    description:
      'FoxKey Auto & HGV is a mobile auto locksmith and diagnostics service based in Goole, East Yorkshire, covering cars, vans, lorries and HGVs across Yorkshire and the Humber 24/7.',
  },
  faq: {
    title: 'FAQ: Car Keys, HGV Keys & Diagnostics | FoxKey Auto & HGV',
    description:
      'Answers to common questions about mobile key replacement, proof of ownership, pricing, coverage and HGV diagnostics from FoxKey Auto & HGV in Goole.',
  },
  contact: {
    title: 'Contact | 24/7 Mobile Locksmith in Goole | FoxKey Auto & HGV',
    description:
      'Call or WhatsApp FoxKey Auto & HGV on 07944 087924, 24/7. Mobile car, van, lorry and HGV key programming and diagnostics across Goole, Yorkshire and the Humber.',
  },
  privacy: {
    title: 'Privacy Policy | FoxKey Auto & HGV',
    description: 'How FoxKey Auto & HGV handles your personal data under UK GDPR, including enquiry forms, cookies and your rights.',
  },
  areas: {
    title: 'Areas We Cover: Goole, Doncaster, Hull, Selby, Scunthorpe, York & Leeds | FoxKey Auto & HGV',
    description:
      'Mobile auto locksmith and HGV diagnostics coverage across Yorkshire and the Humber: Goole, Doncaster, Hull, Selby, Scunthorpe, York and Leeds. Rest of the UK on request.',
  },
  thanks: {
    title: 'Thanks, We’ll Be in Touch | FoxKey Auto & HGV',
    description: 'Your enquiry has been sent to FoxKey Auto & HGV. For urgent help call or WhatsApp 07944 087924.',
  },
};
