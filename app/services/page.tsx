import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Cog, Lightbulb, TrendingUp, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const services = [
  {
    title: "Manpower & Hiring Solutions",
    icon: Users,
    desc: "Build the right team with bulk hiring, specialized recruitment, and workforce planning.",
    points: ["Bulk hiring drives", "Leadership hiring", "Role-based screening", "Onboarding support"],
  },
  {
    title: "Marketing & Lead Generation",
    icon: BarChart3,
    desc: "Generate quality leads with targeted campaigns and ROI-driven digital strategies.",
    points: ["Performance marketing", "Lead qualification", "Campaign optimization", "Conversion analysis"],
  },
  {
    title: "Real Estate Investment Advisory",
    icon: Building2,
    desc: "Make smarter investments with strategic consultation and market analysis.",
    points: ["Location intelligence", "Deal evaluation", "Portfolio support", "Risk balancing"],
  },
  {
    title: "Business Growth Consulting",
    icon: TrendingUp,
    desc: "Scale your business with practical strategy, execution plans, and process controls.",
    points: ["Growth roadmap", "Operating rhythm", "KPI architecture", "Execution coaching"],
  },
  {
    title: "Startup & Founder Support",
    icon: Lightbulb,
    desc: "Launch and scale with focused founder support and market-ready systems.",
    points: ["Go-to-market support", "Team setup", "Mentorship", "Financial planning inputs"],
  },
  {
    title: "Process Optimization",
    icon: Cog,
    desc: "Streamline operations to improve productivity and reduce execution gaps.",
    points: ["Workflow redesign", "SOP creation", "Bottleneck removal", "Accountability loops"],
  },
];

const process = [
  "Listen & Understand",
  "Plan & Strategize",
  "Execute & Optimize",
];

export default function ServicesPage() {
  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Services</p>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight">
              Smart Solutions <br />
              For Better Business
            </h1>
            <p className="mt-7 text-theme-secondary text-lg leading-relaxed max-w-xl">
              End-to-end consulting designed to help businesses grow smarter, faster, and stronger.
            </p>
            <Link href="/contact" className="inline-flex mt-8 items-center gap-2 px-7 py-4 rounded-full bg-[var(--accent-color)] text-white uppercase tracking-widest text-sm font-bold hover:opacity-90 transition-opacity">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-theme">
            <Image
              src="https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070&auto=format&fit=crop"
              alt="Consulting services"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-y border-theme bg-theme-secondary">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-theme bg-theme-primary p-7 hover:border-[var(--accent-color)] transition-colors">
                <div className="w-11 h-11 rounded-full border border-theme bg-theme-secondary flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-[var(--accent-color)]" />
                </div>
                <h2 className="font-display text-2xl uppercase mt-5 leading-tight">{service.title}</h2>
                <p className="text-theme-secondary mt-3 text-sm leading-relaxed">{service.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-theme-secondary">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight">Our Delivery Framework</h2>
          <div className="mt-8 grid md:grid-cols-3 border-y border-theme divide-y md:divide-y-0 md:divide-x divide-theme">
            {process.map((step, idx) => (
              <div key={step} className="p-8 md:p-10 hover:bg-theme-secondary transition-colors">
                <p className="font-display text-5xl text-[var(--accent-color)]/40">0{idx + 1}</p>
                <p className="font-display text-2xl uppercase mt-3">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
