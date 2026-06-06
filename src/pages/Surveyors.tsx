import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Anchor, Shield, FileText, Search, Star, CheckCircle,
  ArrowRight, DollarSign, Users, TrendingUp, Award,
  ClipboardList, MapPin, Clock, ChevronRight, Zap, BarChart2
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

const surveyTypes = [
  {
    icon: Shield,
    title: 'Pre-Purchase Surveys',
    description:
      'The most common engagement on Yachtworx. Buyers book directly through the platform, deposits are held in escrow, and your report is delivered via the document vault — accessible to lender, insurer, and buyer in one link.',
    gradient: 'from-ocean-500 to-ocean-600',
  },
  {
    icon: FileText,
    title: 'Insurance Surveys',
    description:
      'Our insurer partners require current survey reports for policies over agreed thresholds. Yachtworx routes insurance survey requests directly to surveyors with active credentials for the vessel class in question.',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Search,
    title: 'Condition & Valuation',
    description:
      'Owners seeking financing, estate settlements, or dispute resolution need independent condition and market-value appraisals. These are often repeat engagements with the same vessel — Yachtworx tracks history so each survey builds on the last.',
    gradient: 'from-navy-400 to-navy-600',
  },
  {
    icon: ClipboardList,
    title: 'Damage Surveys',
    description:
      'Marine insurance claims route through Yachtworx\'s insurance module. When a claim is opened, the platform automatically surfaces the claim details to qualified surveyors in the vessel\'s location for rapid engagement.',
    gradient: 'from-gold-400 to-gold-500',
  },
];

const platformBenefits = [
  {
    title: 'Qualified inbound leads only',
    body: 'Every survey request through Yachtworx includes vessel type, length, age, location, and the buyer or owner\'s contact. You receive complete job briefs — not cold inquiries — and can quote with confidence before committing.',
  },
  {
    title: 'Integrated document delivery',
    body: 'Upload completed reports directly to the vessel\'s Yachtworx document vault. Your report is instantly accessible to all authorised parties — no email chains, no FTP links, no chasing.',
  },
  {
    title: 'Escrow-backed payment',
    body: 'Fees are held in escrow at booking and released to your Stripe account when the report is marked delivered. No invoicing, no net-30, no chasing. Payment arrives in 2 business days.',
  },
  {
    title: 'Verified credential display',
    body: 'Upload your SAMS, NAMS, or ACMS credentials once. Yachtworx displays them on your public profile, renews reminder notifications before expiry, and routes appropriate vessel classes to your listing automatically.',
  },
  {
    title: 'Survey history per vessel',
    body: 'When you survey a vessel that\'s already on the platform, you see its full prior survey history, maintenance records, and any flagged components — context that makes your assessment faster and more defensible.',
  },
  {
    title: 'Repeat-client relationships',
    body: 'Platform owners return for annual condition surveys, insurance renewals, and damage claims. Yachtworx notifies you when a previous survey client\'s next survey window opens, making retention automatic.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Create your surveyor profile',
    body: 'List your credentials (SAMS, NAMS, ACMS, or independent), vessel class specialisations, service area, and typical turnaround time. Your profile is searchable immediately upon approval — approval takes 1–2 business days.',
  },
  {
    num: '02',
    title: 'Receive qualified survey requests',
    body: 'Buyers, owners, and insurers submit survey requests with full vessel details attached. You receive a notification, review the brief, and submit a quoted fee. The client accepts and deposits are held automatically.',
  },
  {
    num: '03',
    title: 'Conduct the survey',
    body: 'Work exactly as you do today — haul-out, sea trial, moisture readings, rig inspection. Yachtworx adds structure without adding overhead: upload photos, notes, and your final report to the vessel record as you go.',
  },
  {
    num: '04',
    title: 'Deliver the report & get paid',
    body: 'Mark the report delivered. The platform notifies all parties, releases your fee from escrow, and stores the completed survey in the vessel\'s permanent record. You receive payment within 2 business days.',
  },
];

const credentials = [
  { name: 'SAMS®', full: 'Society of Accredited Marine Surveyors', color: 'bg-ocean-100 text-ocean-700' },
  { name: 'NAMS', full: 'National Association of Marine Surveyors', color: 'bg-teal-100 text-teal-700' },
  { name: 'ACMS', full: 'Accredited Cargo & Marine Surveyors', color: 'bg-navy-100 text-navy-700' },
  { name: 'Lloyd\'s', full: 'Lloyd\'s Register Approved Surveyor', color: 'bg-gold-100 text-gold-700' },
  { name: 'AMS®', full: 'Accredited Marine Surveyor (SAMS)', color: 'bg-purple-100 text-purple-700' },
  { name: 'Independent', full: 'State-licensed independent marine surveyor', color: 'bg-gray-100 text-gray-700' },
];

const testimonials = [
  {
    name: 'Robert Ainsley',
    credential: 'SAMS® AMS® — 22 years',
    quote:
      'I was skeptical of another platform. What changed my mind was the document vault — clients actually read my reports now because they\'re right there in the interface. My dispute rate dropped to zero.',
    rating: 5,
  },
  {
    name: 'Patricia Vance',
    credential: 'NAMS CMS — 14 years',
    quote:
      'The insurance module is a genuine differentiator. I\'m getting routed damage survey requests I would never have found through word of mouth. Three of those have turned into annual condition survey clients.',
    rating: 5,
  },
  {
    name: 'Carlos Mendez',
    credential: 'Independent — USCG Licensed',
    quote:
      'Escrow payment is the feature I didn\'t know I needed. I used to lose 8–10% of revenue chasing late invoices. That\'s gone. I get paid two days after delivery, every time.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'What credentials do I need to join as a surveyor?',
    a: 'We accept SAMS, NAMS, ACMS, Lloyd\'s Register, and state-licensed independent surveyors. You\'ll upload your credential documents during registration — our team reviews them within 1–2 business days. Lapsed credentials can be added with a renewal date so we can remind you before expiry.',
  },
  {
    q: 'Can I set my own fees?',
    a: 'Yes. You quote each job individually after reviewing the vessel brief. Yachtworx takes a platform fee of 8% on completed surveys — this covers payment processing, escrow, document storage, and access to the lead pipeline. There are no monthly subscription fees for surveyors.',
  },
  {
    q: 'How does the escrow work exactly?',
    a: 'When a client accepts your quote, they pay the full fee into Stripe-managed escrow. Funds are held until you mark the report as delivered and the client confirms receipt (or 72 hours elapse with no dispute). At that point, Yachtworx releases funds minus the platform fee to your connected Stripe account.',
  },
  {
    q: 'Do I need to use Yachtworx\'s report format?',
    a: 'No. You use your own report template and upload it as a PDF. Yachtworx stores it, makes it accessible to authorised parties, and attaches it to the vessel record. We do not require a proprietary format — your professional judgment and format remain yours.',
  },
  {
    q: 'What vessel classes are supported?',
    a: 'Monohull sail, multihull sail, power (planing and displacement), wooden / classic, commercial/charter, and PWC. During profile setup you indicate which classes you survey. Job requests are then routed only to surveyors who have that class listed.',
  },
  {
    q: 'What happens if a client disputes my report?',
    a: 'Yachtworx has a structured dispute process. Both parties submit documentation; a senior SAMS or NAMS surveyor on our advisory panel reviews the case within 5 business days. Frivolous disputes are dismissed. In the event of a legitimate dispute, escrow funds are held pending resolution.',
  },
  {
    q: 'Can I survey boats I didn\'t find through Yachtworx?',
    a: 'Yes. You can invite existing clients to your Yachtworx profile and store their vessel records and your reports in the platform at no charge. Platform fees only apply to jobs sourced through the Yachtworx lead pipeline.',
  },
];

const stats = [
  { value: '480+', label: 'Surveyors on Platform' },
  { value: '$2.4M', label: 'Survey Fees Paid Out' },
  { value: '4.9★', label: 'Avg Surveyor Rating' },
  { value: '48', label: 'States Covered' },
];

const pricingPlans = [
  {
    name: 'Pay-Per-Survey',
    price: '8%',
    period: 'per completed survey',
    description: 'No monthly fees. Only pay when you get paid.',
    features: [
      'Unlimited profile listing',
      'Inbound lead access',
      'Escrow-backed payments',
      'Document vault delivery',
      'Credential verification badge',
      'Vessel history access',
    ],
    highlighted: false,
    cta: 'Get Started Free',
  },
  {
    name: 'Pro Surveyor',
    price: '$49',
    period: 'per month + 5% per survey',
    description: 'Priority placement and advanced tools for high-volume surveyors.',
    features: [
      'Everything in Pay-Per-Survey',
      'Priority listing in search',
      'Reduced platform fee (5%)',
      'Insurance module access',
      'Repeat-client notifications',
      'Analytics dashboard',
      'Dedicated account manager',
    ],
    highlighted: true,
    cta: 'Start 30-Day Trial',
  },
];

export const Surveyors: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504207887855-8500b9b462c9?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-500/70 to-navy-500/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-8 font-medium">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Built for marine surveyors
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Grow your survey{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                practice on Yachtworx
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Qualified inbound leads. Escrow-backed payment. Integrated report
              delivery. Everything a professional marine surveyor needs — without
              the admin overhead.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register-provider"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-ocean-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                Join as a Surveyor
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-base"
              >
                Browse Surveyor Listings
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
              The surveyor's problem
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mb-6 leading-tight">
              Great surveyors shouldn't spend half their time on admin
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              The average independent surveyor spends 30–40% of their working
              hours on tasks that have nothing to do with surveying: chasing
              leads through word-of-mouth networks, invoicing clients who pay
              slowly, emailing PDF reports to six different parties, and
              manually renewing credentials before insurers ask for them.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Yachtworx was designed to take that overhead off your plate.
              Leads arrive with complete vessel briefs attached. Payment is held
              in escrow and released automatically. Reports are delivered to all
              parties through the document vault in one action. Credentials are
              stored, displayed, and renewal-reminded on your behalf.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The result: more time on the dock, less time at the desk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Clock, label: 'Hours saved per survey', value: '3–4 hrs', color: 'bg-ocean-100 text-ocean-600' },
              { icon: DollarSign, label: 'Avg revenue increase', value: '+31%', color: 'bg-teal-100 text-teal-600' },
              { icon: Users, label: 'Repeat client rate', value: '68%', color: 'bg-navy-100 text-navy-600' },
              { icon: TrendingUp, label: 'Surveys in first 90 days', value: '8–12', color: 'bg-gold-100 text-gold-600' },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl ${m.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon size={22} />
                  </div>
                  <p className="text-2xl font-heading font-bold text-navy-500">{m.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Survey types ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Survey types
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Every type of marine survey, supported
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {surveyTypes.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Credentials ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Credentials accepted
          </p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">
            We recognise the credentials you hold
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Yachtworx verifies and displays your professional credentials on your
            public profile — helping clients find you by the accreditation they
            require.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {credentials.map((c) => (
            <div key={c.name} className={`px-5 py-3 rounded-xl font-medium text-sm ${c.color} border border-transparent`}>
              <span className="font-bold">{c.name}</span>
              <span className="mx-2 opacity-40">·</span>
              <span className="opacity-80">{c.full}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Platform benefits ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Why Yachtworx
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Six things surveyors get on day one
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformBenefits.map((b, i) => (
              <motion.div
                key={b.title}
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
                  <h3 className="font-heading font-bold text-navy-500 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
              How it works
            </p>
            <h2 className="text-4xl font-heading font-bold text-white">
              From listing to paid in four steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-heading font-bold text-white/10 mb-4">{step.num}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-4xl font-heading font-bold text-navy-500">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 mt-3">No hidden fees. No long-term contracts.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'bg-navy-500 border-navy-400 text-white'
                  : 'bg-white border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`font-heading font-bold text-xl mb-1 ${plan.highlighted ? 'text-white' : 'text-navy-500'}`}>
                {plan.name}
              </h3>
              <div className="mb-1">
                <span className={`text-4xl font-heading font-bold ${plan.highlighted ? 'text-white' : 'text-navy-500'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-white/60' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/60' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className={plan.highlighted ? 'text-teal-400' : 'text-teal-500'} />
                    <span className={plan.highlighted ? 'text-white/80' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/register-provider"
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition-colors ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-teal-500 to-ocean-500 text-white hover:opacity-90'
                    : 'border border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              From the field
            </p>
            <h2 className="text-4xl font-heading font-bold text-navy-500">
              Surveyors who made the switch
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
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-navy-500 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.credential}</p>
                </div>
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
          <Award size={40} className="text-white/60 mx-auto mb-6" />
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Ready to grow your practice?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Join 480+ professional marine surveyors on Yachtworx. No monthly fee
            to get started — list your profile, receive leads, and only pay when
            you complete a survey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register-provider"
              className="inline-flex items-center gap-2 bg-white text-ocean-600 font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-base"
            >
              Create Your Surveyor Profile
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Browse Surveyor Listings
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
