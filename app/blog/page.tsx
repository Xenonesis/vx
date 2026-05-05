import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const posts = [
  {
    title: "Hiring for Growth: How to Build Teams That Scale",
    excerpt:
      "A practical framework for founder-led hiring: when to hire, what to prioritize, and how to avoid costly talent mismatches.",
    category: "Hiring",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Lead Generation That Actually Converts in 2026",
    excerpt:
      "Why most campaigns underperform and the performance architecture required for predictable, high-quality lead flow.",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Commercial Real Estate Decisions for Growing Businesses",
    excerpt:
      "A strategic playbook to evaluate expansion opportunities, optimize location choices, and protect downside risk.",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Insights</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight">
            Strategy, Systems <br />
            & Scale
          </h1>
          <p className="mt-7 text-theme-secondary text-lg max-w-2xl leading-relaxed">
            Practical business insights from the Vixon team across hiring, growth marketing, and strategic advisory.
          </p>
        </section>

        <section className="border-y border-theme bg-theme-secondary">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <article key={post.title} className="rounded-2xl border border-theme overflow-hidden bg-theme-primary group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-color)]">{post.category}</p>
                  <h2 className="mt-3 font-display text-2xl uppercase leading-tight">{post.title}</h2>
                  <p className="mt-3 text-theme-secondary text-sm leading-relaxed">{post.excerpt}</p>
                  <Link href="/contact" className="inline-flex mt-5 text-xs uppercase tracking-widest font-bold hover:text-[var(--accent-color)] transition-colors">
                    Discuss this with our team →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
