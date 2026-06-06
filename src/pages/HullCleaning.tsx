import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Anchor, Shield, Search, FileText, Star, CheckCircle,
  ArrowRight, AlertTriangle, ChevronRight, Droplets,
  Settings, BarChart2, MapPin, Zap, Leaf, Eye
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Data ─────────────────────────────────────────────────────────────────────

const growthTypes = [
  {
    name: 'Barnacles',
    description:
      'The most structurally damaging fouling organism. Barnacles cement themselves directly to the hull and, once established, can reduce hull speed by 10–20% and increase fuel burn significantly. Removal requires physical scraping and can leave pitting in fiberglass if allowed to harden over multiple seasons.',
    water: 'Salt & Brackish',
    severity: 'High',
    severityColor: 'bg-red-100 text-red-700',
  },
  {
    name: 'Algae & Slime',
    description:
      'The first fouling layer to establish itself — sometimes within days of launching. A thin biofilm dramatically increases drag compared to a clean hull. Algae is the precursor that makes surfaces hospitable to barnacles and other hard fouling. Regular cleaning prevents the progression.',
    water: 'Salt, Fresh & Brackish',
    severity: 'Moderate',
    severityColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Mussels & Tube Worms',
    description:
      'In high-growth areas — particularly the Pacific Northwest, Chesapeake Bay, and the Gulf Coast — mussel colonies can accumulate rapidly in unprotected through-hull fittings, sea strainers, and on keel surfaces. Tube worms embed in paint and are extremely difficult to remove without damaging the hull beneath.',
    water: 'Salt & Brackish',
    severity: 'High',
    severityColor: 'bg-red-100 text-red-700',
  },
  {
    name: 'Zebra & Quagga Mussels',
    description:
      'A critical invasive species concern in freshwater — particularly in the Great Lakes, Lake Mead, and an expanding range across the western U.S. Zebra mussels colonize any hard surface, clog raw water intakes, and are federally regulated. Moving a boat between water bodies without proper decontamination is illegal in many states.',
    water: 'Freshwater',
    severity: 'Invasive — Regulated',
    severityColor: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Bryozoans & Hydroids',
    description:
      'Colonial organisms that form soft, mat-like coatings on hull surfaces and running gear. Less structurally damaging than barnacles, but highly effective at trapping sediment and harboring other organisms. Common in temperate coastal waters and bays.',
    water: 'Salt & Brackish',
    severity: 'Moderate',
    severityColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Copper Staining & Paint Buildup',
    description:
      'Not a biological organism, but a cleaning challenge in its own right. Successive layers of antifouling paint build up over seasons; copper compounds leach out of old layers and stain gelcoat, waterline striping, and topsides. Professional hull cleaning includes waterline polishing and surface prep alongside biofouling removal.',
    water: 'All',
    severity: 'Cosmetic',
    severityColor: 'bg-gray-100 text-gray-600',
  },
];

const cleaningMethods = [
  {
    icon: Droplets,
    title: 'In-Water Diver Cleaning',
    description:
      'The most common maintenance cleaning method for actively used vessels. A certified diver scrubs the hull while the boat remains in its slip — no haulout required for routine cleaning. Frequency depends on water temperature, growth rate, and how often the boat is used. Boats that sit idle grow fouling far faster than those run regularly.',
    pros: ['No haulout cost or downtime', 'Can be scheduled monthly or quarterly', 'Catches growth early before it hardens'],
    cons: ['Regulated or banned in some waters', 'Requires containment in many jurisdictions', 'Not a substitute for antifouling paint renewal'],
    gradient: 'from-ocean-500 to-ocean-600',
  },
  {
    icon: Settings,
    title: 'Pressure Wash at Haulout',
    description:
      'Every haulout begins with a pressure wash to remove accumulated growth before any other work begins. High-pressure washing removes soft fouling efficiently; hard barnacle growth may require scraping first. The pressure wash also reveals any blistering, damage, or osmotic issues hidden beneath the growth layer.',
    pros: ['Complete hull access for inspection', 'Required before antifouling repaint', 'Exposes hidden hull defects'],
    cons: ['Requires haulout scheduling', 'More expensive than diver cleaning', 'Generates regulated wash water runoff'],
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Contained In-Water Cleaning',
    description:
      'The regulatory-compliant version of in-water cleaning, now required in Washington State and increasingly mandated in other jurisdictions. Specially equipped divers use vacuum-assisted or barrier-contained cleaning systems that capture paint particles and biological material rather than releasing them into the water column.',
    pros: ['Legally compliant in regulated waters', 'Prevents biocide water column contamination', 'Required for marinas with copper discharge limits'],
    cons: ['Higher cost than uncontained cleaning', 'Fewer certified providers available', 'Equipment-intensive setup'],
    gradient: 'from-navy-400 to-navy-600',
  },
  {
    icon: Leaf,
    title: 'Dry Abrasive Cleaning',
    description:
      'Performed during a haulout, dry abrasive methods — power sanding, media blasting, or rotary tool removal — are used when growth is heavily embedded or when the existing antifouling paint needs to be stripped before reapplication. Common for vessels coming out after extended periods without maintenance or when switching paint systems.',
    pros: ['Thorough removal of embedded growth', 'Allows paint system change', 'Best surface prep for osmotic repairs'],
    cons: ['Most expensive cleaning method', 'Requires full haulout', 'Generates hazardous waste requiring disposal'],
    gradient: 'from-gold-400 to-gold-500',
  },
];

const paintTypes = [
  {
    name: 'Ablative (Self-Polishing)',
    description: 'The most popular choice for recreational vessels. The paint wears away gradually as the boat moves through the water, continuously exposing fresh biocide. Works best on boats that are used regularly. Minimal paint buildup between seasons.',
    bestFor: 'Boats used regularly in salt or brackish water',
    color: 'border-ocean-200 bg-ocean-50',
    labelColor: 'bg-ocean-100 text-ocean-700',
  },
  {
    name: 'Hard (Modified Epoxy)',
    description: 'Does not wear away — biocide leaches out of a stable matrix. More durable and suitable for trailered boats or vessels that sit for extended periods. Can be burnished to a smooth finish for racing or performance applications. Paint buildup increases with each season.',
    bestFor: 'Trailered boats, racing vessels, seasonal-use boats',
    color: 'border-teal-200 bg-teal-50',
    labelColor: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Copper-Free / Biocide-Free',
    description: 'Increasingly relevant as copper discharge regulations tighten in Washington, California, and other states. Uses alternative biocides (zinc pyrithione, DCOIT) or physical fouling-release technology (silicone-based). Often required in no-discharge zones or sensitive marine environments.',
    bestFor: 'Regulated waters, no-discharge zones, eco-sensitive areas',
    color: 'border-green-200 bg-green-50',
    labelColor: 'bg-green-100 text-green-700',
  },
  {
    name: 'Waterplane / Fouling Release',
    description: 'Silicone- or PTFE-based coatings that prevent fouling from bonding to the surface rather than killing it. No biocide at all — fouling is shed by boat speed. Effective only on vessels run frequently at adequate speed. High initial cost but no ongoing biocide concern.',
    bestFor: 'High-speed powerboats, charter vessels in regulated waters',
    color: 'border-purple-200 bg-purple-50',
    labelColor: 'bg-purple-100 text-purple-700',
  },
];

const regulatoryHighlights = [
  {
    state: 'Washington State',
    status: 'Most Restrictive',
    statusColor: 'bg-red-100 text-red-700',
    summary: 'In-water hull cleaning that removes antifouling paint is prohibited unless performed by certified divers using containment systems that capture all removed material. Washington Ecology has published formal guidance and enforcement is active. Many marinas now require proof of certified cleaning.',
    link: 'https://ecology.wa.gov/getattachment/9f9f5b86-865a-431c-9254-1216cf5bba49/HULLflyer.pdf',
    linkLabel: 'WA Ecology Hull Cleaning Requirements (PDF)',
  },
  {
    state: 'California (San Diego Bay & Select Waters)',
    status: 'Restricted',
    statusColor: 'bg-amber-100 text-amber-700',
    summary: 'San Diego Regional Water Quality Control Board has established copper concentration limits in San Diego Bay. Vessels with copper antifouling paint are subject to dry-dock cleaning requirements in some areas. Other California RWQCB regions are actively developing similar frameworks.',
    link: null,
    linkLabel: null,
  },
  {
    state: 'Great Lakes States',
    status: 'Invasive Species Rules',
    statusColor: 'bg-purple-100 text-purple-700',
    summary: 'The primary regulatory focus in Great Lakes states is invasive species — particularly zebra and quagga mussels. Boat decontamination requirements before crossing water body boundaries are enforced in Michigan, Wisconsin, Minnesota, and others. Check-station inspections are mandatory in some states.',
    link: null,
    linkLabel: null,
  },
  {
    state: 'All Other States',
    status: 'Evolving',
    statusColor: 'bg-gray-100 text-gray-600',
    summary: 'The majority of U.S. states currently have no specific in-water hull cleaning restrictions, but the regulatory trend is clearly toward greater oversight. Best practice is to use containment even where not required — both to protect local water quality and to avoid future compliance exposure.',
    link: null,
    linkLabel: null,
  },
];

const platformFeatures = [
  {
    title: 'Certified diver network',
    body: 'Find hull cleaning professionals who are certified for contained in-water cleaning in your area — not just any scuba diver with a brush.',
  },
  {
    title: 'Regulation-aware matching',
    body: 'Yachtworx flags your home water\'s regulatory requirements and surfaces only providers who meet the compliance standard for your location.',
  },
  {
    title: 'Cleaning schedule & reminders',
    body: 'Set your preferred cleaning interval — monthly, quarterly, or seasonally — and receive automated reminders before your growth window opens.',
  },
  {
    title: 'Service record in document vault',
    body: 'Every cleaning event is logged: date, provider, method, paint condition notes, and any findings (blistering, damage, growth severity). Your complete hull history in one place.',
  },
  {
    title: 'Paint system tracking',
    body: 'Record your antifouling paint brand, product, and application date so every future cleaner and yard technician knows exactly what\'s on the bottom.',
  },
  {
    title: 'Haulout coordination',
    body: 'When in-water cleaning isn\'t sufficient or isn\'t permitted, Yachtworx connects you with a haul yard — and coordinates your bottom painter, surveyor, and other contractors in the same window.',
  },
  {
    title: 'Invasive species compliance',
    body: 'For boats that move between water bodies, Yachtworx tracks decontamination history and can alert you to inspection requirements for your destination water.',
  },
  {
    title: 'Surveyor integration',
    body: 'Hull condition findings from cleaning dives are stored alongside formal survey reports, giving surveyors and insurers a longitudinal view of hull health over time.',
  },
];

const faqs = [
  {
    q: 'How often should I have my hull cleaned?',
    a: 'It depends on your water type, climate, and how often the boat is used. In warm, high-growth saltwater (Florida, Gulf Coast, Pacific Northwest in summer), monthly cleaning is common for boats that sit in slips. In cooler or lower-salinity water, quarterly may be sufficient. Boats run regularly grow fouling more slowly than those sitting idle — movement and speed shed soft growth. Ask a local diver what they see on comparable boats in your marina.',
  },
  {
    q: 'Is in-water hull cleaning legal where my boat is?',
    a: 'It depends on your location. Washington State now requires containment equipment for any cleaning that removes antifouling paint. San Diego Bay has copper discharge limits that effectively restrict conventional cleaning. Most other states currently have no specific restrictions, but the regulatory trend is toward greater oversight. Yachtworx surfaces compliance requirements for your home water when you search for providers.',
  },
  {
    q: 'What\'s the difference between hull cleaning and bottom painting?',
    a: 'Hull cleaning removes biological growth — barnacles, algae, mussels — from the existing antifouling paint. Bottom painting applies a new coat of antifouling product, typically after a haulout and pressure wash. They are complementary: regular cleaning maintains the effectiveness of the paint between seasons; repainting renews the biocide supply. Neither fully replaces the other.',
  },
  {
    q: 'Do freshwater boats need hull cleaning?',
    a: 'Less than saltwater boats, but not zero. Algae and slime establish quickly in warm freshwater; zebra and quagga mussels are a serious concern in affected lakes and rivers. More importantly, freshwater boats moving between water bodies face strict decontamination requirements in many states to prevent invasive species transfer. Always check the rules for your destination water before launching.',
  },
  {
    q: 'My boat is on a mooring rather than a slip. Does that change anything?',
    a: 'Moored boats typically grow fouling more slowly than slip-kept boats because tidal and wind movement provides some self-cleaning effect. However, they are harder for a diver to access safely, and scheduling cleaning requires coordinating with weather and tidal conditions. The cleaning interval is usually the same or slightly longer than for slip-kept vessels in the same water.',
  },
  {
    q: 'Can I clean my own hull underwater?',
    a: 'In most jurisdictions, yes — though in Washington State and some California waters, DIY scrubbing that dislodges antifouling paint into the water column is prohibited. Even where it\'s legal, unsupported diving under your own boat carries real safety risks. Professional divers with proper equipment do the job faster, more thoroughly, and with documentation. The cost is generally modest relative to the value of maintaining hull speed and paint condition.',
  },
  {
    q: 'What should I tell a new hull cleaning provider about my boat?',
    a: 'Give them: the antifouling paint brand and product currently on the hull, when it was last applied, when it was last cleaned, and any known areas of concern (blistering, previous repair areas, soft spots in the paint). Yachtworx stores all of this in your boat\'s profile so you can share it with any provider instantly.',
  },
];

const stats = [
  { value: '2,800+', label: 'Hull Cleaning Providers' },
  { value: '48', label: 'States Covered' },
  { value: '4.8★', label: 'Avg Provider Rating' },
  { value: '100%', label: 'Regulation-Verified in WA' },
];

export const HullCleaning: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-500/60 to-navy-500/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-8 font-medium">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Compliant providers in all 48 states
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx supports{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                hull cleaning
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Find certified hull cleaning professionals, stay compliant with
              evolving regulations, and keep a complete service history — all
              from one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-ocean-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                Find a Hull Cleaner
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-base"
              >
                Start Managing My Boat
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-navy-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-heading font-bold text-teal-400">{s.value}</p>
                <p className="text-sm text-white/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it matters ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Why hull cleaning matters
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mb-6 leading-tight">
              The most overlooked cost in boat ownership
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              A clean hull is not just cosmetic. Marine growth — even a thin
              biofilm of algae — creates measurable drag. A heavily fouled hull
              can reduce top speed by 30% or more and increase fuel consumption
              proportionally. For a powerboat burning 20 gallons per hour, that
              can mean thousands of dollars in additional fuel costs per season.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Beyond performance, unchecked fouling accelerates corrosion of
              underwater metals, clogs raw-water intakes, and provides cover for
              osmotic blistering to develop undetected. The barnacle that gets
              cleaned off in March is the barnacle that doesn't pit your
              fiberglass by June.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              And increasingly, hull cleaning is also a regulatory matter.
              Washington State has enacted the country's most stringent in-water
              cleaning rules; other states are following. Finding a provider who
              is compliant — not just competent — is now part of responsible
              ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {[
                { label: 'Speed loss from heavy fouling', value: 'Up to 30%' },
                { label: 'Fuel increase from fouled hull', value: 'Up to 40%' },
              ].map((m) => (
                <div key={m.label} className="bg-gray-50 rounded-xl p-4 flex-1">
                  <p className="text-2xl font-heading font-bold text-teal-600">{m.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
              alt="Diver cleaning a boat hull underwater"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Marine growth types ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              What's growing on your hull
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Know your fouling organisms
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Different organisms require different treatment approaches — and
              some carry serious regulatory or ecological implications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthTypes.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-bold text-navy-500">{g.name}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2 ${g.severityColor}`}>
                    {g.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{g.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin size={12} />
                  {g.water}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cleaning methods ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Cleaning methods
          </p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">
            Four ways a hull gets cleaned
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Method choice depends on growth severity, regulatory environment,
            haul availability, and whether you're doing maintenance cleaning or
            full paint renewal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cleaningMethods.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center mb-4`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-navy-500 text-lg mb-2">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{m.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-2">Advantages</p>
                    <ul className="space-y-1">
                      {m.pros.map((p) => (
                        <li key={p} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <CheckCircle size={13} className="text-teal-500 flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Limitations</p>
                    <ul className="space-y-1">
                      {m.cons.map((c) => (
                        <li key={c} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <AlertTriangle size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Paint types ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Antifouling paint systems
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              What's on your bottom matters
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              The right paint for your boat depends on how you use it, where
              you keep it, and what regulations apply to your water. Knowing
              your paint system helps every provider who works on your hull.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {paintTypes.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`rounded-2xl border p-6 ${p.color}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-bold text-navy-500">{p.name}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2 ${p.labelColor}`}>
                    Antifouling
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.description}</p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <CheckCircle size={12} className="text-teal-500" />
                  Best for: {p.bestFor}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regulatory landscape ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Regulatory landscape
          </p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">
            Hull cleaning rules vary by water
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            The U.S. is mid-transition on hull cleaning regulations. What is
            acceptable in Florida may be prohibited in Washington. Know where
            you stand.
          </p>
        </div>

        <div className="space-y-5">
          {regulatoryHighlights.map((r, i) => (
            <motion.div
              key={r.state}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border p-6 ${r.state === 'Washington State' ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  {r.state === 'Washington State' && (
                    <AlertTriangle size={20} className="text-amber-500 flex-shrink-0" />
                  )}
                  <h3 className="font-heading font-bold text-navy-500 text-lg">{r.state}</h3>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full self-start ${r.statusColor}`}>
                  {r.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{r.summary}</p>
              {r.link && (
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 hover:text-ocean-700 transition-colors"
                >
                  <FileText size={15} />
                  {r.linkLabel}
                  <ArrowRight size={13} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-ocean-50 border border-ocean-100 rounded-2xl flex items-start gap-3">
          <Eye size={20} className="text-ocean-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-ocean-800 leading-relaxed">
            <span className="font-semibold">Yachtworx watches regulatory changes on your behalf.</span>{' '}
            When you register a vessel in a regulated water body, we surface the
            applicable rules and only match you with providers who meet the
            compliance standard for that location.
          </p>
        </div>
      </section>

      {/* ── Platform features ─────────────────────────────────────────────── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
              How Yachtworx helps
            </p>
            <h2 className="text-4xl font-heading font-bold text-white">
              Everything hull cleaning, in one place
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <CheckCircle size={18} className="text-teal-400 mb-3" />
                <h3 className="font-heading font-semibold text-white mb-1 text-sm">{f.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">Common questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-navy-500 mb-2 flex items-start gap-2">
                <ChevronRight size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                {f.q}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-teal-500 to-ocean-600 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Anchor size={40} className="text-white/60 mx-auto mb-6" />
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            A clean hull starts with the right provider
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Find certified, regulation-compliant hull cleaners near you. Schedule
            recurring service, track your paint history, and keep a complete
            record — all in Yachtworx.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 bg-white text-ocean-600 font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-base"
            >
              Find a Hull Cleaner Near Me
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Start Free — No Credit Card
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
