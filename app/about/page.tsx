import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Target, Eye, Handshake } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const values = [
  {
    title: "Clarity Over Noise",
    desc: "We simplify complex business problems into practical, executable decisions.",
    icon: Eye,
  },
  {
    title: "Outcome Ownership",
    desc: "We stay accountable to real business results, not vanity metrics.",
    icon: Target,
  },
  {
    title: "Long-Term Partnership",
    desc: "We invest in trust, consistency, and durable growth partnerships.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">About Vixon</p>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight">
              Building Better <br />
              Business Together
            </h1>
            <p className="mt-7 text-theme-secondary text-lg leading-relaxed">
              Vixon Consulting helps businesses grow smarter, faster, and stronger through expert advisory in
              hiring, marketing, and real estate strategy.
            </p>
            <p className="mt-4 text-theme-secondary leading-relaxed">
              Our role is to align strategy with execution so companies can scale with confidence. From founder-led
              startups to established enterprises, we design practical systems that compound over time.
            </p>
            <Link href="/contact" className="inline-flex mt-8 px-7 py-4 rounded-full bg-[var(--accent-color)] text-white uppercase tracking-widest text-sm font-bold hover:opacity-90 transition-opacity">
              Schedule a Consultation
            </Link>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-theme">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
              alt="Vixon team meeting"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>

        <section className="border-y border-theme bg-theme-secondary">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-theme bg-theme-primary p-7 hover:border-[var(--accent-color)] transition-colors">
                <div className="w-11 h-11 rounded-full border border-theme bg-theme-secondary flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-[var(--accent-color)]" />
                </div>
                <h2 className="font-display text-2xl uppercase mt-5">{value.title}</h2>
                <p className="text-theme-secondary mt-3 text-sm leading-relaxed">{value.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-theme">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Business planning"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight leading-none">
              Why Clients Choose Us
            </h2>
            <div className="mt-7 space-y-4">
              {[
                "Integrated expertise across hiring, growth, and investment decisions",
                "Execution-first mindset with measurable milestones",
                "Tailored solutions for startups, SMEs, and larger organizations",
                "Transparent communication and outcome-based planning",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[var(--accent-color)]" />
                  <p className="text-theme-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
