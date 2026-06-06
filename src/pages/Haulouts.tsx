import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Anchor, Shield, Wrench, Search, FileText, Star, CheckCircle,
  ArrowRight, AlertTriangle, Zap, ChevronRight, Droplets,
  Settings, BarChart2, MapPin, Clock
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyHaulout = [
  {
    icon: Droplets,
    title: 'Bottom Painting',
    description:
      'The single most common reason a saltwater vessel comes out of the water. Marine growth — barnacles, algae, slime — attaches to any unprotected hull within weeks and creates drag, reduces fuel efficiency, and accelerates corrosion. For saltwater boats, antifouling paint should be refreshed every 2–3 years on average. Freshwater vessels generally need it far less, but any boat crossing between salt and fresh water requires close attention.',
    note: 'Rule of thumb: if you\'re already paying for the haulout, apply fresh bottom paint unless it was done within the last year.',
    gradient: 'from-ocean-500 to-ocean-600',
  },
  {
    icon: Shield,
    title: 'Sacrificial Anodes (Zincs)',
    description:
      'Electrolytic corrosion eats unprotected metal underwater. Sacrificial anodes — zinc, aluminum, or magnesium depending on the water type — are designed to corrode instead of your prop, shaft, rudder, and fittings. Smaller anodes can be swapped by a diver without hauling, but larger vessels and more complex underwater gear require a haul to access everything properly.',
    note: 'Always inspect zincs at every haulout and replace any that are more than 50% depleted.',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Wrench,
    title: 'Engine & Drive Service',
    description:
      'Even basic inboard and outboard service often requires the boat out of the water. Replacing the impeller, changing lower unit gear oil, inspecting shaft seals, and servicing sail drives all need dry access. For larger inboards, any work on stuffing boxes, cutlass bearings, or the strut requires a haul. Mercury and other manufacturers may also require a haul for warranty repairs — including in cases such as peeling lower unit paint — which owners often wisely coordinate with scheduled seasonal maintenance.',
    note: 'Boats too large to trailer are limited to service at the haul yard — choose your facility with both lift capacity and technical capability in mind.',
    gradient: 'from-navy-400 to-navy-600',
  },
  {
    icon: Settings,
    title: 'Thru-Hull Fittings & Seacocks',
    description:
      'Every thru-hull penetration below the waterline — engine raw water intake, head discharge, bilge pump outlet, depth transducer — is a potential failure point. Seacocks should be exercised annually and replaced on a schedule. Replacing a failed seacock while afloat ranges from difficult to dangerous. A scheduled haulout is the right time to inspect, grease, and replace any fittings that are sticky, corroded, or past their service life.',
    note: 'Bronze and Marelon seacocks have different service lives. Know what\'s on your boat.',
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    icon: Search,
    title: 'Hull Cleaning & Inspection',
    description:
      'Beyond antifouling, the hull itself needs inspection for blistering, osmotic damage, impact dings, and stress cracks. Fiberglass osmotic blisters — caused by water permeating the laminate — require dry storage to treat properly. A professional surveyor or yard technician walking the hull when it\'s out of the water catches issues that are invisible from a dinghy or through a dive mask.',
    note: 'Hull cleaning regulations vary significantly by state. Washington State has some of the most stringent rules in the country — see the Hull Cleaning section below.',
    gradient: 'from-purple-400 to-purple-500',
  },
  {
    icon: Anchor,
    title: 'Running Gear & Appendages',
    description:
      'Props, shafts, rudders, keels, and trim tabs all benefit from inspection at every haulout. A prop with even a minor nick creates vibration that stresses shaft bearings over time. Rudder bearings wear silently until steering becomes sloppy. Keel bolts on older sailboats should be inspected for weeping rust stains — a sign of internal corrosion that can lead to keel separation.',
    note: 'Prop reconditioning is almost always worth doing at every haul. A balanced, pitch-correct prop is one of the most cost-effective performance and fuel efficiency improvements available.',
    gradient: 'from-rose-400 to-rose-500',
  },
];

const liftTypes = [
  {
    title: 'Travel Lift (Sling/Strap)',
    description:
      'The most common type of haul equipment in U.S. boatyards. A rubber-belted sling runs under the hull at two points; the travel lift straddles the boat and hoists it clear of the water. Fast, versatile, and available in a wide range of capacities — from 15-ton lifts at small yards to 300-ton lifts at major refit facilities.',
    pros: ['Wide availability', 'Fast haul cycle', 'Works on most hull forms'],
    cons: ['Sling pressure can concentrate on hull', 'Not ideal for very shallow-draft hulls', 'Some wooden boat yards won\'t use them'],
    tag: 'Most Common',
    tagColor: 'bg-ocean-100 text-ocean-700',
  },
  {
    title: 'Forklift-Style (Long Arms)',
    description:
      'Uses horizontal arms rather than straps, distributing the hull load over a longer surface area. This approach is theoretically far superior for wooden boats because it avoids point loading on planking. However, this style is rare in the U.S. market — most yards that haul wood boats still use slings with careful blocking to protect the hull.',
    pros: ['More even load distribution', 'Better for fragile or historic hulls', 'Reduced risk of hull deformation'],
    cons: ['Very uncommon in the U.S.', 'Limited to compatible hull forms', 'Slower haul cycle'],
    tag: 'Rare',
    tagColor: 'bg-gold-100 text-gold-700',
  },
  {
    title: 'Railway / Marine Railway',
    description:
      'A submerged rail system on which a cradle rolls down into the water. The boat is floated over the cradle and winched up the incline. Common at older yards and well-suited to larger displacement vessels and wooden boats — the cradle can be custom-fitted to each hull.',
    pros: ['Excellent for deep-keel sailboats', 'Gentle on hull', 'Good for wooden boats'],
    cons: ['Slower than travel lift', 'Requires site-specific infrastructure', 'Less common at modern yards'],
    tag: 'Specialty',
    tagColor: 'bg-teal-100 text-teal-700',
  },
  {
    title: 'Hydraulic Trailer / Jackstand Trailer',
    description:
      'Self-propelled hydraulic trailers that drive under the boat and lift via a bed of posts that conform to the hull shape. Common for high-volume production yards and powerboat dealerships. Allows the boat to be moved around the yard while still on the trailer.',
    pros: ['Very mobile — boat can be repositioned', 'Good for production volumes', 'Gentle, conforming lift'],
    cons: ['Requires sufficient draft clearance', 'Less suited to deep-keel sailboats', 'Less common at smaller yards'],
    tag: 'Specialty',
    tagColor: 'bg-teal-100 text-teal-700',
  },
];

const yardCapabilities = [
  {
    icon: BarChart2,
    title: 'Max Lift Capacity',
    body: 'Rated in tons. Verify against your vessel\'s loaded displacement — not just dry weight. Yachtworx lists each yard\'s maximum and minimum lift capacities so you can filter for your boat before making contact.',
  },
  {
    icon: MapPin,
    title: 'Length & Beam Limits',
    body: 'Travel lifts have fixed beam widths. Some yards can haul catamarans and wide-beam power vessels; others cannot. Always confirm the lift\'s maximum beam before booking.',
  },
  {
    icon: Zap,
    title: 'Shore Power',
    body: 'When blocked ashore, most liveaboards and vessels with refrigeration need shore power. Yards vary: 30-amp single-phase is standard at smaller facilities; 50-amp and 3-phase service is available at larger yards. Larger yachts may require even more.',
  },
  {
    icon: Wrench,
    title: 'Outside Vendors Allowed',
    body: 'Most yards allow owners or outside contractors to perform work on a hauled vessel, but policies vary. Some charge a daily haul-out fee for outside vendors. Yachtworx notes each yard\'s policy so you can bring your own trusted specialists.',
  },
  {
    icon: Shield,
    title: 'Wood Boat Capable',
    body: 'Some yards decline to haul wooden vessels entirely, citing liability for sling damage to soft planking. Others have the expertise and equipment to handle them safely. Yachtworx flags wood-boat capability as a distinct yard attribute.',
  },
  {
    icon: FileText,
    title: 'Warranty-Authorized Service',
    body: 'For Mercury, Volvo, Yamaha, Yanmar, and other OEM warranty repairs, the servicing facility may need to be factory-authorized. Yachtworx lists each yard\'s certifications so warranty repairs can be coordinated with scheduled haulouts.',
  },
];

const hullCleaningInfo = {
  title: 'Hull Cleaning Regulations',
  subtitle: 'A rapidly evolving compliance area — especially in Washington State',
  body: [
    'In-water hull cleaning — scrubbing antifouling paint from a hull while the boat remains afloat — is coming under increasing regulatory scrutiny across the United States. The concern is that antifouling paint residue, which contains biocides (typically copper), enters the water column and accumulates in marina sediment.',
    'Washington State has enacted some of the most stringent in-water hull cleaning rules in the country. Ecology Washington requires that in-water hull cleaning be performed only by certified divers using containment systems that capture all removed paint particles. Uncertified cleaning — including DIY scrubbing — is prohibited in many Washington waters.',
    'Other states are moving in the same direction. California\'s San Diego Bay and certain Southern California waters have copper discharge limits. The Great Lakes states are beginning to adopt similar frameworks.',
    'The practical implication for boat owners: in-water cleaning is no longer always a cheaper, easier alternative to hauling. In regulated waters, a proper haul, pressure wash, and fresh antifouling application is often both legally simpler and more effective.',
  ],
  link: 'https://ecology.wa.gov/getattachment/9f9f5b86-865a-431c-9254-1216cf5bba49/HULLflyer.pdf',
  linkLabel: 'Washington State Hull Cleaning Requirements (PDF)',
};

const platformFeatures = [
  {
    title: 'Yard search by lift capacity & beam',
    body: 'Filter yards by your vessel\'s length, beam, and displacement. No more calling four yards to find out none of them can handle your boat.',
  },
  {
    title: 'Shore power specs listed upfront',
    body: '30A, 50A, or 3-phase — Yachtworx displays shore power availability at each yard so liveaboards and long-haul vessels can plan accordingly.',
  },
  {
    title: 'Outside vendor policy clearly stated',
    body: 'Know before you book whether your preferred rigger, bottom painter, or engine tech is allowed on site — and whether there\'s a daily vendor fee.',
  },
  {
    title: 'Wood boat haul capability flagged',
    body: 'Not every yard will haul a wooden vessel. Yachtworx marks wood-boat capability as a distinct searchable attribute so classic boat owners can find appropriate facilities.',
  },
  {
    title: 'Warranty authorization listed',
    body: 'For Mercury, Volvo Penta, Yanmar, Yamaha, and other OEM warranty work, see which yards are factory-authorized before you plan your haul.',
  },
  {
    title: 'Hull cleaning compliance notes',
    body: 'In regulated waters, Yachtworx notes whether the yard operates a compliant in-water cleaning program or refers to haul-and-pressure-wash for antifouling maintenance.',
  },
  {
    title: 'Integrated service scheduling',
    body: 'Coordinate your bottom paint contractor, zinc replacement, engine service, and surveyor in one place. Yachtworx lets all parties see the haul window so everyone shows up on time.',
  },
  {
    title: 'Document vault for service records',
    body: 'Every haulout generates records: paint product, applicator, zincs replaced, hull photos, any findings. Store them all in Yachtworx so your next surveyor, insurer, or buyer has the complete picture.',
  },
];

const faqs = [
  {
    q: 'How often does my saltwater boat need to be hauled?',
    a: 'For antifouling purposes, most saltwater boats should be hauled every 2–3 years on average, though high-growth areas (Florida, the Gulf Coast, the Pacific Northwest) and boats that sit in slips rather than being used regularly may need annual treatment. Consult your marina neighbors or a local yard — local knowledge about growth rates is invaluable.',
  },
  {
    q: 'My boat is too big to trailer. What does that mean for service?',
    a: 'If your vessel cannot be road-transported on a trailer, the yard that performs the haulout is effectively the yard where all below-waterline and haulout-dependent service must happen. This makes the selection of a yard critical — you need a facility that either performs the work you need or permits outside vendors on site. Yachtworx\'s yard profiles list both in-house services and outside vendor policies.',
  },
  {
    q: 'Can I do my own work when my boat is hauled?',
    a: 'Most boatyards allow owner-performed work, but policies vary widely. Some yards welcome owner labor; others restrict certain tasks (painting, electrical) to licensed vendors for insurance reasons. A few high-turnover yards don\'t allow any outside work at all. Always confirm the yard\'s policy before booking — Yachtworx lists this on each yard profile.',
  },
  {
    q: 'What\'s the difference between "blocking" and "jackstands"?',
    a: 'When a boat is hauled, it needs to be supported ashore. Traditional "blocking" uses heavy timber blocks under the keel and hull. "Jackstands" (or "props") are adjustable steel supports that press against the hull sides and are the modern standard. Both methods work; what matters is that the stands are properly placed at hull-specific support points — not randomly against soft hull sections.',
  },
  {
    q: 'Do I need shore power when my boat is hauled?',
    a: 'If you have a refrigerator, battery charger, air conditioning, or live aboard your vessel, you almost certainly need shore power during a haulout. Confirm the yard offers the amperage you need: 30A is standard for smaller vessels, 50A for larger ones. Some mega-yacht facilities offer 100A and 3-phase service. Ask before you haul.',
  },
  {
    q: 'Is in-water hull cleaning still legal?',
    a: 'It depends on your location. In much of the U.S., light in-water scrubbing remains common practice. However, Washington State now requires certified divers with containment equipment for any in-water cleaning that removes antifouling paint. Other states are adopting similar rules. In regulated areas, hauling and re-painting is often the cleaner (and legally safer) option.',
  },
  {
    q: 'Can I coordinate a warranty repair with my annual haulout?',
    a: 'Yes — and it\'s strongly recommended. If your engine or drive manufacturer requires a haul for a warranty repair, synchronizing that with bottom paint, zincs, and any other below-waterline service minimizes the number of times you pay to haul the boat. Yachtworx\'s service scheduling lets you coordinate multiple providers around a single haul window.',
  },
];

const stats = [
  { value: '1,200+', label: 'Haul Yards Listed' },
  { value: '48', label: 'States Covered' },
  { value: '300T', label: 'Max Lift Capacity Listed' },
  { value: '97%', label: 'Booking Satisfaction' },
];

export const Haulouts: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1400&q=80')",
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
              Below the waterline, covered
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx supports{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                haulouts
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Find the right yard, coordinate every contractor, and store the
              complete service record — all from one platform. Because a haulout
              is too expensive to manage with phone calls and sticky notes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/marinas"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-ocean-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                Find a Haul Yard
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

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Why haulouts matter
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mb-6 leading-tight">
              A necessary requirement, not an optional extra
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              For larger vessels — especially those kept in saltwater — haulouts
              are not discretionary. A great deal of annual and bi-annual
              maintenance simply cannot be performed with the boat in the water.
              From bottom paint to seacock replacement to engine drive service,
              the dock doesn't give you access to the systems that keep the boat
              safe below the waterline.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              The challenge is that haulouts are logistically complex. You need
              to find a yard with the right lift capacity and beam clearance for
              your boat, confirm it allows your outside contractors on site,
              verify it has the shore power your systems need, coordinate your
              bottom painter, engine tech, and surveyor within the same window —
              and do all of this while hoping nothing comes up that requires
              additional time on the hard.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yachtworx was built to make this coordination manageable. Search
              yards by your vessel's specs, book contractors in one place, and
              keep the entire service record in the document vault.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
              alt="Boat on travel lift in boatyard"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Why haul ─────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Reasons to haul
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              What gets done when the boat comes out
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              A haulout is always an opportunity. If you're incurring the
              expense, plan ahead and consolidate as much below-waterline work
              as possible into a single event.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyHaulout.map((item) => {
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

      {/* ── Lift types ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Lift equipment
          </p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">
            How yards lift your boat
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Not all lifts are the same — and the type of equipment matters for
            your hull form, displacement, and whether you own a wooden vessel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {liftTypes.map((lift) => (
            <motion.div
              key={lift.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-bold text-navy-500 text-lg">{lift.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${lift.tagColor} flex-shrink-0 ml-3`}>
                  {lift.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{lift.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-2">Advantages</p>
                  <ul className="space-y-1">
                    {lift.pros.map((p) => (
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
                    {lift.cons.map((c) => (
                      <li key={c} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <AlertTriangle size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Hull cleaning regulations ─────────────────────────────────────── */}
      <section className="bg-amber-50 border-y border-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-amber-100 rounded-xl flex-shrink-0">
              <AlertTriangle size={22} className="text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
                Regulatory Alert
              </p>
              <h2 className="text-3xl font-heading font-bold text-navy-500">
                {hullCleaningInfo.title}
              </h2>
              <p className="text-amber-700 text-sm mt-1 font-medium">{hullCleaningInfo.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            {hullCleaningInfo.body.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-sm">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-amber-200">
            <a
              href={hullCleaningInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 hover:text-ocean-700 transition-colors"
            >
              <FileText size={16} />
              {hullCleaningInfo.linkLabel}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Yard capabilities ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              What to look for in a yard
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Six things to confirm before you book
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {yardCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-ocean-100 flex items-center justify-center">
                    <Icon size={18} className="text-ocean-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy-500 mb-1">{cap.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cap.body}</p>
                  </div>
                </motion.div>
              );
            })}
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
              Everything haulout-related, in one place
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
          <h2 className="text-4xl font-heading font-bold text-navy-500">Common haulout questions</h2>
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
            Your next haulout, properly planned
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Find yards by lift capacity, beam, and shore power specs. Book
            contractors in one window. Store the complete service record.
            Yachtworx makes a complex event manageable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/marinas"
              className="inline-flex items-center gap-2 bg-white text-ocean-600 font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-base"
            >
              Find a Haul Yard Near Me
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
