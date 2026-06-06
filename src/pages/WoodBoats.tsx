import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Anchor, Shield, Wrench, Search, FileText, Star,
  CheckCircle, ArrowRight, Droplets, Wind, Hammer, ChevronRight, TreePine
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

const challenges = [
  {
    icon: Droplets,
    title: 'Moisture & Rot Prevention',
    description:
      'Wood boats demand vigilant moisture management. Yachtworx tracks hull moisture readings over time, alerts you when levels trend upward, and connects you with certified wooden-boat surveyors before a minor damp patch becomes structural rot.',
    gradient: 'from-ocean-500 to-ocean-600',
  },
  {
    icon: Wind,
    title: 'Seasonal Haul-Out & Lay-Up',
    description:
      'Proper winterisation and spring commissioning are non-negotiable for a wooden hull. Our maintenance scheduler builds a custom calendar around your vessel, climate, and storage situation — and notifies your go-to yard at the right time.',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Hammer,
    title: 'Caulking, Fastening & Seam Work',
    description:
      'Cotton caulk, paying compound, and bronze fastenings require specialists who still know traditional techniques. Yachtworx\'s marketplace surfaces only providers with verified wooden-boat experience, not just general fiberglass shops.',
    gradient: 'from-navy-400 to-navy-600',
  },
  {
    icon: TreePine,
    title: 'Paint, Varnish & Brightwork',
    description:
      'Oil finishes, spar varnish, and traditional bottom paint have very different maintenance rhythms from modern coatings. Our document vault stores your finish schedules and product history so every new applicator starts with full context.',
    gradient: 'from-gold-400 to-gold-500',
  },
];

const features = [
  {
    title: 'Wood-Boat Specialist Network',
    body: 'We\'ve curated a dedicated category of marine professionals — traditional boatbuilders, wooden-boat surveyors, riggers, and restoration yards — so you\'re never matched with a shop that\'s never touched carvel or lapstrake planking.',
  },
  {
    title: 'Digital Build & Repair History',
    body: 'Store original lofting drawings, builder certificates, Lloyd\'s survey reports, and every repair invoice in a single encrypted vault. Prospective buyers and insurers can request a verified history package in one click.',
  },
  {
    title: 'Component-Level Tracking',
    body: 'Log individual planks, frames, floors, and fastenings with condition ratings, photos, and service dates. Yachtworx surfaces which components are approaching their next service interval so nothing falls through the cracks.',
  },
  {
    title: 'Insurance Built for Classic Vessels',
    body: 'Agreed-value policies, restoration-in-progress coverage, and Lloyd\'s-approved surveyors are available through our insurance marketplace. We work with insurers who understand that an old-growth teak deck cannot be replaced with fiberglass.',
  },
  {
    title: 'Moisture & Condition Alerts',
    body: 'Connect compatible boat sensors or log manual moisture-meter readings. Yachtworx plots trends over time and flags anomalies — giving you early warning before minor seepage becomes a major repair.',
  },
  {
    title: 'Marina Berths for Liveaboards & Long-Term Storage',
    body: 'Our marina discovery tool filters for yards with covered dry storage, travel-lift capacity appropriate for heavier wooden hulls, and on-site wooden-boat expertise — not just the nearest vacant slip.',
  },
];

const testimonials = [
  {
    name: 'David Harrington',
    vessel: '1962 Hinckley Bermuda 40',
    quote:
      'I\'ve owned Lulubelle for eleven years. Yachtworx is the first platform that didn\'t treat her like a problem to be solved. The specialist network found me a caulker who still uses cotton — I thought those guys were extinct.',
    rating: 5,
  },
  {
    name: 'Margaret Osei',
    vessel: '1938 Herreshoff S-Boat',
    quote:
      'The document vault alone is worth it. I uploaded every survey and repair receipt going back to 1978. When I refinanced the boat, the bank had a complete history in twenty minutes.',
    rating: 5,
  },
  {
    name: 'Tom Ellroy',
    vessel: '1955 Chris-Craft Riviera',
    quote:
      'My surveyor uploads condition notes directly into the platform after each annual haul-out. I can see exactly which frames she flagged and track whether they\'ve improved or worsened over three seasons.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'Does Yachtworx support antique and pre-WWII vessels?',
    a: 'Yes. Our platform places no age floor on vessels. We\'ve helped owners manage everything from 1920s New England lobster smacks to 1970s wooden production sloops. Older vessels simply get more fields: builder, original registry number, construction method, and Lloyd\'s class history.',
  },
  {
    q: 'How do I find a surveyor who specialises in wooden boats?',
    a: 'Use the Marketplace filter "Vessel Type: Wood / Classic." Surveyors in this category have self-certified and been reviewed by other wooden-boat owners. We recommend requesting at least three owner reviews before booking, which our profile pages make easy.',
  },
  {
    q: 'Can I store sensitive documents like title and insurance certificates?',
    a: 'All documents in the vault are encrypted at rest and in transit. You control access — you can share a read-only link with a broker, surveyor, or insurer with an expiry date, and revoke access at any time.',
  },
  {
    q: 'I\'m mid-restoration. Can Yachtworx help during the build phase?',
    a: 'Absolutely. Many of our members open an account during restoration, logging parts sourced, contractors hired, and milestone photos as the project progresses. When the boat launches, the complete provenance record is already built.',
  },
  {
    q: 'Are wooden sailboats and wooden powerboats both supported?',
    a: 'Fully. Yachtworx handles sail, power, and traditional working vessels regardless of propulsion. Component templates differ by type — a gaff-rigged ketch has different maintenance items than a triple-screw commuter — but both are covered.',
  },
];

const stats = [
  { value: '3,200+', label: 'Wooden & Classic Vessels' },
  { value: '480+', label: 'Wooden-Boat Specialists' },
  { value: '97%', label: 'Owner Satisfaction Rate' },
  { value: '48', label: 'States Covered' },
];

export const WoodBoats: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')",
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
              Purpose-built for traditional vessels
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                Wood Boats
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Wooden vessels are living things. They require specialists who
              understand their rhythms — and a platform built around their
              unique needs, not retrofitted from a fiberglass checklist.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-ocean-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                Get Started Free
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-base"
              >
                Browse Specialists
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
              Why wood boats need their own platform
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mb-6 leading-tight">
              Generic marine apps weren't built for your boat
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Most boat management software was designed around modern production
              fiberglass — standard hull forms, commodity parts, and a maintenance
              calendar that could apply to any vessel off a Sarasota assembly line.
              Wooden boats are different in almost every dimension.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              A 1948 Alden schooner needs cotton caulk and linseed oil, not gelcoat
              repair kits. Its insurance valuation is agreed, not actual cash value.
              Its surveyor should know what a butt block looks like. Its marina berth
              should have blocking appropriate for a heavier, deeper-draft hull.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yachtworx was built to serve every type of vessel — including the ones
              that deserve the most care. For wooden-boat owners, that means specialist
              directories, condition-aware maintenance tracking, and a document vault
              that preserves provenance for generations.
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
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80"
              alt="Classic wooden sailboat"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Challenges ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              What we solve
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              The unique challenges of wooden-boat ownership
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Platform features
          </p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">
            Everything a wooden-boat owner needs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
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
                <h3 className="font-heading font-bold text-navy-500 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
              Getting started
            </p>
            <h2 className="text-4xl font-heading font-bold text-white">
              Up and running in three steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                num: '01',
                title: 'Create your vessel profile',
                body: 'Enter your boat\'s builder, construction year, construction method (carvel, lapstrake, cold-moulded, etc.), and rig type. Attach builder certificates or survey reports. Takes ten minutes.',
              },
              {
                num: '02',
                title: 'Find your specialists',
                body: 'Browse the wooden-boat specialist directory. Filter by trade — surveyors, boatbuilders, riggers, varnishers, caulkers. Read verified reviews from other wooden-boat owners.',
              },
              {
                num: '03',
                title: 'Manage everything in one place',
                body: 'Log service records, track component condition, schedule haul-outs, and store documents. Your vessel\'s complete history, always at your fingertips.',
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-6xl font-heading font-bold text-white/10 mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Owner stories
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Trusted by classic vessel owners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-navy-500 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.vessel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">
            Common questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="border border-gray-200 rounded-2xl p-6"
            >
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
            Your wooden boat deserves better
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Join 3,200+ wooden and classic vessel owners who manage their boats
            on Yachtworx — the only platform that takes traditional craftsmanship
            as seriously as you do.
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
              to="/marketplace"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Browse Specialists
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
