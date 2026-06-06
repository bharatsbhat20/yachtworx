import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Anchor, Shield, FileText, Star, CheckCircle,
  ArrowRight, AlertTriangle, ChevronRight, Droplets,
  Home, Zap, MapPin, Clock, Users, DollarSign, Wifi,
  Wind, Settings
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Data ─────────────────────────────────────────────────────────────────────

const pnwContext = {
  heading: 'The Pacific Northwest: liveaboard capital of the U.S.',
  paragraphs: [
    'No region in the country has a higher concentration of liveaboard boats than the Pacific Northwest. The mild maritime climate, the sheer density of protected anchorages and working marinas from Puget Sound to the San Juan Islands, and a deep culture of year-round boating have made Washington and Oregon home to thousands of people who have made a vessel their primary residence.',
    'The liveaboard community in the PNW is not a fringe — it is a significant segment of the overall boating population. Many marinas in Seattle, Tacoma, Olympia, and Bellingham have waiting lists for liveaboard-designated slips. Residents form tight-knit communities, share service providers, and develop routines around the specific maintenance rhythms of living aboard in a four-season marine environment.',
    'Yachtworx was designed with this community in mind. From pump-out scheduling to liveaboard-specific insurance to marina compliance tools, we built features that reflect how people actually live aboard — not how weekend boaters imagine it.',
  ],
};

const uniqueNeeds = [
  {
    icon: Droplets,
    title: 'Pump-Out Service',
    description:
      'The single most operationally distinct service for liveaboards. A boat\'s holding tank — the onboard septic system — must be pumped out on average every week to ten days for a live-in occupant. In the Pacific Northwest, a handful of specialized companies operate pump-out vessels or mobile units that come dockside. Yachtworx connects liveaboards with pump-out providers in their marina, enables recurring bookings, and tracks service history.',
    note: 'No-discharge zones cover most of Puget Sound and the San Juan Islands. Overboard discharge is illegal — a functioning pump-out schedule is mandatory, not optional.',
    gradient: 'from-ocean-500 to-ocean-600',
  },
  {
    icon: Shield,
    title: 'Liveaboard Insurance',
    description:
      'Standard recreational boat insurance does not cover liveaboard use. Insurers treat a vessel as a primary residence differently — liability exposure is higher, personal property coverage must extend to household goods, and some policies include coverage equivalent to a homeowner\'s policy. Many marinas require proof of liveaboard-specific insurance as a condition of a live-aboard slip. Getting the wrong coverage is not just a financial risk — it can result in eviction.',
    note: 'Always disclose liveaboard status to your insurer. A standard "pleasure use" policy may be void if a claim arises and the insurer determines the vessel was used as a primary residence.',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Home,
    title: 'Marina Liveaboard Permits',
    description:
      'Not all marinas allow liveaboards, and those that do typically require a separate liveaboard permit or designation, charge an additional monthly fee (commonly 10–30% above standard slip rent), cap the percentage of liveaboard slips (often at 10–20% by local ordinance), and impose rules around guests, pets, and shore-side storage. Yachtworx tracks the liveaboard policies of listed marinas so you can filter for compatible facilities before you move.',
    note: 'Many PNW marinas have years-long waiting lists for liveaboard-designated slips. Getting on a list early — even before you\'re ready to move aboard — is standard practice.',
    gradient: 'from-navy-400 to-navy-600',
  },
  {
    icon: Zap,
    title: 'Shore Power & Utilities',
    description:
      'Living aboard means living on shore power. Most liveaboards run 30-amp or 50-amp shore power continuously for heating, refrigeration, water heating, and electronics. Power costs can be significant — electric baseboard heat on a cold PNW winter night runs a meter quickly. Understanding your marina\'s power metering policy, choosing the right inverter/charger setup, and knowing your vessel\'s load profile are all part of liveaboard life.',
    note: 'Some marinas include power in slip fees; others meter separately. Always clarify before signing a slip agreement — power costs can exceed slip rent in winter months.',
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    icon: Wifi,
    title: 'Connectivity & Mail',
    description:
      'Internet access and mail delivery are practical challenges often underestimated by aspiring liveaboards. Marina WiFi is typically insufficient for remote work. Most liveaboards supplement with cellular data plans or a personal hotspot. Mail requires a physical address — a PO box, a mail service, or a marina address where the manager accepts packages. Some states require a land address for driver\'s license purposes even when a vessel is your primary home.',
    note: 'Washington State allows a marina address on a driver\'s license provided the marina consents in writing.',
    gradient: 'from-purple-400 to-purple-500',
  },
  {
    icon: Wind,
    title: 'Heating, Ventilation & Condensation',
    description:
      'The Pacific Northwest\'s damp climate makes moisture management one of the most important — and most underestimated — aspects of liveaboard life. Condensation forms on cold surfaces, mold develops quickly in poorly ventilated bilges and lockers, and diesel or propane heating systems require maintenance and safety management. A good liveaboard vessel has active ventilation, a quality dehumidifier, and a heating system appropriate for continuous use.',
    note: 'Carbon monoxide poisoning is a serious liveaboard risk. CO detectors rated for marine use should be installed on every level of the vessel and tested monthly.',
    gradient: 'from-rose-400 to-rose-500',
  },
];

const marinaPolicies = [
  { policy: 'Liveaboard slip designation required', common: true },
  { policy: 'Additional monthly liveaboard fee (10–30% above base rent)', common: true },
  { policy: 'Cap on percentage of liveaboard slips (10–20% typical)', common: true },
  { policy: 'Proof of liveaboard-specific insurance required', common: true },
  { policy: 'Guest overnight policy (often restricted)', common: true },
  { policy: 'Pet policy (size/number limits common)', common: true },
  { policy: 'Shore-side storage limits', common: true },
  { policy: 'Waiting list for liveaboard designation (months to years)', common: true },
  { policy: 'Annual vessel inspection by marina staff', common: false },
  { policy: 'Prohibition on liveaboards (many marinas)', common: false },
];

const pumpoutFacts = [
  { label: 'Average pump-out frequency for a liveaboard', value: 'Weekly' },
  { label: 'Holding tank capacity (typical 40ft vessel)', value: '30–50 gal' },
  { label: 'No-discharge zone coverage — Puget Sound', value: '100%' },
  { label: 'Pump-out providers active in PNW', value: 'Multiple' },
];

const insuranceItems = [
  {
    title: 'Agreed Value Hull Coverage',
    body: 'Standard actual-cash-value policies depreciate your boat. Liveaboards need agreed-value coverage — you and the insurer agree on the vessel\'s value at policy inception, and that\'s what you receive in a total loss. Essential when the boat is also your home.',
  },
  {
    title: 'Personal Property / Contents',
    body: 'Everything you own is on the boat. A liveaboard policy should include contents coverage for household goods, electronics, clothing, and valuables — just as a homeowner\'s policy would. Standard marine policies cap personal property at a fraction of what a liveaboard actually has aboard.',
  },
  {
    title: 'Liability Coverage',
    body: 'Higher liability limits are standard for liveaboards. Guests visiting your home happen to be boarding a vessel — slip-and-fall claims, dock incidents, and other liability events are more frequent when the boat is continuously occupied.',
  },
  {
    title: 'Additional Living Expense',
    body: 'If your vessel is damaged and uninhabitable, where do you go? Better liveaboard policies include additional living expense coverage — hotel and temporary housing costs while your boat is repaired. Without it, a major repair event is also a housing crisis.',
  },
  {
    title: 'Marina Requirement Compliance',
    body: 'Most marinas require minimum liability limits and proof of liveaboard-specific coverage as a condition of your slip agreement. Yachtworx stores your insurance certificate and can alert you when it\'s approaching renewal.',
  },
  {
    title: 'Navigation Territory',
    body: 'Liveaboard policies typically include a navigation territory clause — coverage applies in specific waters. Ensure your policy covers your home marina, your cruising grounds, and any transit routes you use regularly.',
  },
];

const platformFeatures = [
  {
    title: 'Pump-out provider directory',
    body: 'Find pump-out companies that serve your marina — mobile pump-out boats, dockside pump stations, and on-call services. Book recurring weekly service in one action.',
  },
  {
    title: 'Recurring pump-out scheduling',
    body: 'Set a weekly or bi-weekly pump-out schedule and receive reminders. Service history is logged automatically so you always have documentation of proper waste management.',
  },
  {
    title: 'Liveaboard marina search',
    body: 'Filter marina listings by liveaboard availability, permit status, wait list length, shore power amperage, and liveaboard fee. Know what you\'re getting into before you commit to a slip.',
  },
  {
    title: 'Insurance certificate storage',
    body: 'Upload your liveaboard insurance policy and COI. Yachtworx alerts you 60 days before expiry and can share the certificate directly with your marina manager.',
  },
  {
    title: 'Liveaboard-specific service providers',
    body: 'Filter the Yachtworx marketplace for providers experienced with continuous-use vessels — heating system techs, marine electricians, refrigeration specialists, and more.',
  },
  {
    title: 'Maintenance schedule for continuous use',
    body: 'Liveaboard vessels accumulate hours faster and require more frequent service on systems like water heaters, bilge pumps, and HVAC. Yachtworx adjusts maintenance interval recommendations for your usage pattern.',
  },
  {
    title: 'Compliance document vault',
    body: 'Store your liveaboard permit, marina slip agreement, insurance certificate, registration, and pump-out logs in one encrypted vault — shareable with marina management on request.',
  },
  {
    title: 'Haulout coordination',
    body: 'Liveaboards still need to haul out. Yachtworx coordinates yard access, temporary housing options near the yard, and contractor scheduling so a haulout doesn\'t turn into a crisis.',
  },
];

const faqs = [
  {
    q: 'Can I live aboard any boat?',
    a: 'Technically yes — but practically, vessel size, layout, systems, and build quality matter enormously. Most full-time liveaboards are on vessels 35 feet and larger, with a dedicated sleeping cabin, standing headroom throughout, a proper galley, and a functioning head with an adequate holding tank. Sailboats and trawlers are the most common liveaboard platforms. Smaller boats can work for solo liveaboards willing to live simply, but systems like heating, water storage, and holding capacity are constraining factors.',
  },
  {
    q: 'Do all marinas accept liveaboards?',
    a: 'No. Many marinas explicitly prohibit liveaboards, either by policy or by local ordinance. Marinas that permit liveaboards typically require a separate designation, charge additional fees, and cap the number of liveaboard slips. In the Pacific Northwest, liveaboard-designated slips are in high demand — waiting lists of one to three years are common at popular Seattle and Tacoma marinas. Yachtworx\'s marina profiles note liveaboard status and wait list information.',
  },
  {
    q: 'How much does it cost to live aboard in the Pacific Northwest?',
    a: 'Slip rent is the primary fixed cost — in the greater Seattle area, expect $800–$1,800/month for a 40-foot slip, plus liveaboard fees. Shore power costs vary by season — budget an additional $100–$300/month in winter for heating. Pump-out service typically runs $20–$40 per visit. Liveaboard insurance adds $150–$400/month above standard marine coverage. Total fixed costs are comparable to renting a one-bedroom apartment in many PNW markets.',
  },
  {
    q: 'Is pump-out really required every week?',
    a: 'For a full-time occupant, yes — roughly. A typical holding tank on a 40-foot vessel holds 30–50 gallons. With full-time occupancy, that fills in 7–10 days under normal use. In no-discharge zones (which cover all of Puget Sound), there is no legal alternative to pump-out — overboard discharge is prohibited regardless of distance from shore. Some liveaboards manage pump-out themselves at marina pump stations; others use mobile pump-out services that come to the slip.',
  },
  {
    q: 'What\'s the difference between liveaboard insurance and regular boat insurance?',
    a: 'Standard recreational marine insurance is written for a "pleasure use" vessel — occasional use, not a primary residence. A liveaboard policy extends coverage to include personal property (your household contents), higher liability limits appropriate for a home, additional living expense coverage if the vessel is uninhabitable, and agreed-value hull coverage. Most marina slip agreements for liveaboards require proof of a liveaboard-rated policy, not a standard recreational policy.',
  },
  {
    q: 'Can I use my boat address as my legal residence?',
    a: 'It depends on the state. Washington State allows a marina address on a driver\'s license with a letter of consent from the marina. Other states vary — some require a land address for voter registration, vehicle registration, or driver\'s licensing even if the vessel is your only physical home. Many liveaboards maintain a PO box or use a mail forwarding service for official correspondence.',
  },
  {
    q: 'How do I heat my boat in a PNW winter?',
    a: 'The most common solutions are diesel forced-air heaters (Espar, Webasto), diesel drip stoves, or electric baseboard/radiant heating on shore power. Diesel forced-air is generally preferred for efficiency and safety — propane has CO and fire risks in an enclosed vessel. Whatever system you choose, marine-rated CO detectors are non-negotiable. A dehumidifier running continuously is equally important — damp Pacific Northwest winters create condensation issues that cause mold and accelerate corrosion.',
  },
];

const stats = [
  { value: 'PNW #1', label: 'Highest liveaboard concentration in the U.S.' },
  { value: '3–5 yrs', label: 'Avg wait for liveaboard slip in Seattle' },
  { value: 'Weekly', label: 'Typical pump-out frequency' },
  { value: '100%', label: 'Of Puget Sound is a no-discharge zone' },
];

export const Liveaboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(\'https://images.pexels.com/photos/10854845/pexels-photo-10854845.jpeg?auto=compress&cs=tinysrgb&w=1400&h=700&fit=crop\')',
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
              Built for the people who live aboard
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx supports{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                liveaboards
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              From weekly pump-out scheduling to liveaboard insurance to
              marina compliance — Yachtworx covers the specific needs of
              full-time boat residents that most platforms ignore entirely.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/marinas"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-ocean-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                Find a Liveaboard Marina
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
                <p className="text-2xl font-heading font-bold text-teal-400">{s.value}</p>
                <p className="text-sm text-white/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PNW intro ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Pacific Northwest liveaboard life
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mb-6 leading-tight">
              {pnwContext.heading}
            </h2>
            {pnwContext.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/14137352/pexels-photo-14137352.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
              alt="Sailboat docked at a marina at dusk"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Pump-out spotlight ───────────────────────────────────────────── */}
      <section className="bg-ocean-50 border-y border-ocean-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-ocean-100 rounded-xl">
                  <Droplets size={22} className="text-ocean-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ocean-600 uppercase tracking-wide">Spotlight</p>
                  <h2 className="text-2xl font-heading font-bold text-navy-500">Pump-out: the liveaboard's weekly ritual</h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every liveaboard's holding tank needs pumping. In Puget Sound and
                the Pacific Northwest, this is not optional — the entire Sound is
                designated a No Discharge Zone, meaning overboard discharge of
                treated or untreated waste is illegal at any distance from shore.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A handful of pump-out service companies operate throughout the
                region, sending small pump-out vessels or mobile units dockside
                to service boats in their slips. For a full-time resident, a
                weekly booking with the same provider becomes as routine as
                garbage pickup on land.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yachtworx connects liveaboards directly with pump-out providers
                in their marina's area, enables recurring weekly bookings, and
                logs each service event so you always have documentation of
                compliant waste management — useful if a marina manager or
                harbormaster ever asks.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pumpoutFacts.map((f) => (
                <div key={f.label} className="bg-white rounded-2xl border border-ocean-100 p-5 text-center shadow-sm">
                  <p className="text-2xl font-heading font-bold text-ocean-600">{f.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Unique needs ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              What liveaboards need that others don't
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Six challenges unique to full-time living aboard
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueNeeds.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 flex-shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-teal-700 font-medium italic">{item.note}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Marina policies ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Marina policies
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mb-6 leading-tight">
              Not all slips are equal
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Liveaboard policy varies enormously from marina to marina. Some
              actively court liveaboard residents as stable, long-term tenants.
              Others prohibit liveaboards entirely or maintain a waiting list
              so long it's effectively a prohibition.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Understanding a marina's liveaboard policy before signing a slip
              agreement is essential. Policies that seem minor — an overnight
              guest limit, a pet weight restriction, a prohibition on running
              generators after 9pm — become significant quality-of-life issues
              when the boat is your home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yachtworx displays each listed marina's liveaboard policies,
              permit availability, current wait list status, and fee structure
              so you can make an informed decision before committing.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-heading font-semibold text-navy-500 text-sm">Common marina liveaboard policies</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {marinaPolicies.map((p) => (
                <div key={p.policy} className="flex items-center gap-3 px-5 py-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${p.common ? 'bg-teal-400' : 'bg-gray-300'}`} />
                  <span className={`text-sm ${p.common ? 'text-gray-700' : 'text-gray-400'}`}>{p.policy}</span>
                  {p.common ? (
                    <span className="ml-auto text-xs text-teal-600 font-medium flex-shrink-0">Common</span>
                  ) : (
                    <span className="ml-auto text-xs text-gray-400 flex-shrink-0">Varies</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Insurance ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Liveaboard insurance
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Your standard marine policy isn't enough
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              When a boat is your home, insurance needs to reflect that. Six
              coverage areas that differ for liveaboards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle size={20} className="text-teal-500" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-500 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <span className="font-semibold">Always disclose liveaboard status to your insurer.</span>{' '}
              A standard "pleasure use" recreational marine policy may be voided
              in the event of a claim if the insurer determines the vessel was
              used as a primary residence and that use was not disclosed. The
              cost difference between a standard and liveaboard policy is
              modest; the risk of the wrong coverage is not.
            </p>
          </div>
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
              Everything a liveaboard needs, in one place
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
          <h2 className="text-4xl font-heading font-bold text-navy-500">Common liveaboard questions</h2>
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
          <Home size={40} className="text-white/60 mx-auto mb-6" />
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Your boat is your home. Manage it like one.
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Find liveaboard-friendly marinas, schedule weekly pump-out service,
            store your permits and insurance, and connect with service providers
            who understand continuous-use vessels — all on Yachtworx.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 bg-white text-ocean-600 font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-base"
            >
              Start Free — No Credit Card
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/marinas"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Find a Liveaboard Marina
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
