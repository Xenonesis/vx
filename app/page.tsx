"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CheckCircle2, Cog, Lightbulb, Minus, Plus, Quote, Star, TrendingUp, Users, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const services = [
  {
    title: "Manpower & Hiring Solutions",
    icon: Users,
    desc: "Bulk hiring, specialized recruitment, and workforce planning for startups and established teams.",
  },
  {
    title: "Marketing & Lead Generation",
    icon: BarChart3,
    desc: "Performance-led campaigns designed to drive qualified leads and measurable growth outcomes.",
  },
  {
    title: "Real Estate Investment Advisory",
    icon: Building2,
    desc: "Data-backed real estate guidance, risk analysis, and portfolio support for long-term value.",
  },
  {
    title: "Business Growth Consulting",
    icon: TrendingUp,
    desc: "Strategic planning and execution frameworks that improve velocity, efficiency, and margin.",
  },
  {
    title: "Startup & Founder Support",
    icon: Lightbulb,
    desc: "Founder-side advisory on market positioning, team setup, and scale strategy from 0 to 1 and beyond.",
  },
  {
    title: "Process Optimization",
    icon: Cog,
    desc: "Operational redesign to reduce friction, increase throughput, and create reliable systems.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Listen & Understand",
    desc: "We map your current reality—goals, bottlenecks, teams, and market constraints.",
  },
  {
    num: "02",
    title: "Plan & Strategize",
    desc: "We design practical roadmaps across hiring, marketing, and expansion levers.",
  },
  {
    num: "03",
    title: "Execute & Optimize",
    desc: "We partner in implementation and continuously optimize for measurable outcomes.",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5K+", label: "Happy Customers" },
  { value: "7K+", label: "User Base Growth" },
  { value: "44+", label: "Monthly Active User" },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide manpower hiring, marketing & lead generation, real estate advisory, and business growth consulting under one roof.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We actively support founders and early teams with hiring, GTM execution, and strategic guidance built for fast-moving environments.",
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Absolutely. We follow a consultative approach to design practical, tailored strategies around your specific goals and constraints.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary by scope, but we prioritize high-impact initiatives first so you start seeing measurable traction as early as possible.",
  },
  {
    question: "How can we get started with Vixon?",
    answer:
      "Book a consultation through our contact page. We begin with a discovery call and propose a clear, phased engagement plan.",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechStart India",
    quote: "Vixon transformed our hiring strategy. We scaled from 10 to 50 employees in just 6 months with the right talent fit.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, GrowthHub",
    quote: "Their marketing expertise helped us generate 3x more qualified leads. The ROI has been exceptional.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Director, RealEstate Pro",
    quote: "The real estate advisory team provided invaluable insights that helped us make smarter investment decisions.",
    rating: 5,
  },
];

const caseStudies = [
  {
    title: "Scaling a SaaS Startup",
    category: "Manpower & Hiring",
    result: "50+ hires in 6 months",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "E-commerce Lead Generation",
    category: "Marketing",
    result: "300% increase in qualified leads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Commercial Real Estate Portfolio",
    category: "Real Estate Advisory",
    result: "₹50Cr portfolio optimized",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "20+ years of combined experience across industries",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    desc: "Track record of delivering measurable business outcomes",
  },
  {
    icon: Cog,
    title: "Tailored Solutions",
    desc: "Customized strategies aligned with your unique goals",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    desc: "From strategy to execution, we're with you every step",
  },
];

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div ref={ref} className="bg-theme-primary text-theme-primary min-h-screen transition-colors duration-300">
      <SiteHeader />

      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
          <motion.div
            style={{ y: blobY }}
            className="absolute top-20 -right-24 w-[46vw] h-[46vw] bg-[var(--accent-color)]/20 rounded-full blur-[120px] -z-10"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-5">Vixon Consulting</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9]">
                Building <br />
                <span className="text-stroke hover:tracking-[0.04em] transition-all">Better</span> <br />
                Business <br />
                Together
              </h1>
              <p className="mt-8 text-theme-secondary text-lg max-w-xl leading-relaxed">
                We help businesses grow smarter, faster, and stronger through expert solutions in hiring,
                marketing, and real estate advisory.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--accent-color)] text-white px-7 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-theme text-sm uppercase tracking-widest font-bold hover:bg-theme-secondary transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1.8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-theme"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Vixon consulting strategy team"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-theme bg-theme-secondary">
          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <p className="font-display text-4xl md:text-5xl text-[var(--accent-color)] font-bold">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] font-bold text-theme-secondary">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-theme">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Office workspace"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-5">About Vixon</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] tracking-tight">
              Smart Solutions <br />
              For Better <span className="text-stroke">Business</span>
            </h2>
            <p className="mt-6 text-theme-secondary leading-relaxed">
              Vixon Consulting is a trusted partner in hiring, marketing, and real estate. We blend strategic
              thinking with execution support to create outcomes—not just recommendations.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "Cross-functional execution across talent, growth, and investment",
                "Practical frameworks tailored to your business stage",
                "Clear reporting focused on measurable outcomes",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent-color)] mt-0.5" />
                  <p className="text-theme-secondary text-sm md:text-base">{point}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex mt-8 text-sm uppercase tracking-widest font-bold border-b-2 border-[var(--accent-color)] pb-1 hover:text-[var(--accent-color)] transition-colors">
              Learn More About Us
            </Link>
          </motion.div>
        </section>

        <section className="bg-theme-secondary border-y border-theme py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-none">
                Capabilities <br />
                <span className="text-theme-secondary">& Expertise</span>
              </h2>
              <Link href="/services" className="text-sm uppercase tracking-widest font-bold hover:text-[var(--accent-color)] transition-colors">
                View All Services →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative overflow-hidden border border-theme rounded-2xl bg-theme-primary p-7 group"
                >
                  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-[var(--accent-color)]/10 group-hover:scale-150 transition-transform duration-500" />
                  <div className="w-11 h-11 rounded-full bg-theme-secondary border border-theme flex items-center justify-center group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors relative z-10">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase leading-tight relative z-10">{service.title}</h3>
                  <p className="mt-3 text-theme-secondary text-sm leading-relaxed relative z-10">{service.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-12">
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Our Approach</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-none">Get Support To Build Your Business Growth</h2>
          </div>

          <div className="grid md:grid-cols-3 border-y border-theme divide-y md:divide-y-0 md:divide-x divide-theme">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="p-8 md:p-10 hover:bg-theme-secondary transition-colors"
              >
                <p className="font-display text-6xl text-[var(--accent-color)]/40 mb-5">{step.num}</p>
                <h3 className="font-display text-2xl uppercase mb-3">{step.title}</h3>
                <p className="text-theme-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-theme-secondary border-y border-theme py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-center leading-none mb-14">
              Frequently <span className="text-stroke">Asked</span>
            </h2>

            <div className="divide-y divide-theme border-y border-theme">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="py-5">
                  <button onClick={() => setOpenFaq((prev) => (prev === index ? null : index))} className="w-full flex items-center justify-between gap-6 text-left">
                    <h3 className="font-display text-xl md:text-2xl uppercase hover:text-[var(--accent-color)] transition-colors">
                      {faq.question}
                    </h3>
                    <span className="w-8 h-8 border border-theme rounded-full flex items-center justify-center">
                      {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden text-theme-secondary leading-relaxed pt-4"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="rounded-3xl border border-theme overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2070&auto=format&fit=crop"
              alt="City skyline"
              fill
              className="object-cover opacity-20"
            />
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-none">This Could Be The Start Of Something Special</h2>
              <p className="text-theme-secondary mt-5 max-w-2xl mx-auto">
                Let&apos;s build a strategy that turns your growth goals into measurable outcomes.
              </p>
              <Link href="/contact" className="inline-flex mt-8 items-center gap-2 bg-[var(--accent-color)] text-white px-7 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                Let&apos;s Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-theme-secondary border-y border-theme py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Testimonials</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-none">
                What Our <span className="text-stroke">Clients</span> Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-theme rounded-2xl bg-theme-primary p-8 relative"
                >
                  <Quote className="w-10 h-10 text-[var(--accent-color)]/30 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--accent-color)] text-[var(--accent-color)]" />
                    ))}
                  </div>
                  <p className="text-theme-secondary leading-relaxed mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-display text-lg uppercase font-bold">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-wider text-theme-secondary">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Success Stories</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-none">
                Featured <span className="text-stroke">Case Studies</span>
              </h2>
            </div>
            <Link href="/case-studies" className="text-sm uppercase tracking-widest font-bold hover:text-[var(--accent-color)] transition-colors">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-theme aspect-[4/5] cursor-pointer"
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold mb-2">{study.category}</p>
                  <h3 className="font-display text-xl uppercase font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-300">{study.result}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bg-theme-secondary border-y border-theme py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Why Vixon</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-none">
                Why Choose <span className="text-stroke">Us</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="border border-theme rounded-2xl bg-theme-primary p-7 text-center group hover:border-[var(--accent-color)] transition-colors"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-theme-secondary border border-theme flex items-center justify-center group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors mb-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl uppercase font-bold mb-3">{item.title}</h3>
                  <p className="text-theme-secondary text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Stay Updated</p>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
                Subscribe To Our <br />
                <span className="text-stroke">Newsletter</span>
              </h2>
              <p className="text-theme-secondary leading-relaxed mb-8">
                Get the latest insights on hiring trends, marketing strategies, and business growth tips delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-secondary" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-theme bg-theme-primary focus:border-[var(--accent-color)] focus:outline-none transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-white text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-theme-secondary mt-4">No spam. Unsubscribe anytime.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-theme"
            >
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                alt="Newsletter subscription"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
