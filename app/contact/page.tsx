import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Contact</p>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight">
              Get In Touch <br />
              With Us
            </h1>
            <p className="mt-7 text-theme-secondary text-lg leading-relaxed max-w-xl">
              We’re here to help your business grow smarter, faster, and stronger.
            </p>

            <div className="mt-10 space-y-6 text-theme-secondary">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-color)] mb-2">Phone</p>
                <a href="tel:+917291002205" className="hover:text-[var(--accent-color)] transition-colors">+91-7291002205</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-color)] mb-2">Emails</p>
                <a href="mailto:info@vixonconsulting.com" className="block hover:text-[var(--accent-color)] transition-colors">info@vixonconsulting.com</a>
                <a href="mailto:hr.vixonconsulting@gmail.com" className="block hover:text-[var(--accent-color)] transition-colors">hr.vixonconsulting@gmail.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-color)] mb-2">Address</p>
                <p>Ithum Tower, Sector 62<br />Noida, Uttar Pradesh</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-color)] mb-2">Hours</p>
                <p>Mon - Sat : 10:00 AM - 07:00 PM</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-theme bg-theme-secondary p-8 md:p-10">
            <h2 className="font-display text-3xl uppercase mb-6">Request a Quote</h2>
            <form className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-theme-secondary">Name</label>
                <input className="mt-2 w-full bg-transparent border-b border-theme py-3 focus:outline-none focus:border-[var(--accent-color)] transition-colors" type="text" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-theme-secondary">Email</label>
                <input className="mt-2 w-full bg-transparent border-b border-theme py-3 focus:outline-none focus:border-[var(--accent-color)] transition-colors" type="email" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-theme-secondary">Phone</label>
                <input className="mt-2 w-full bg-transparent border-b border-theme py-3 focus:outline-none focus:border-[var(--accent-color)] transition-colors" type="tel" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-theme-secondary">Message</label>
                <textarea className="mt-2 w-full bg-transparent border-b border-theme py-3 focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none" rows={4} />
              </div>
              <button type="button" className="w-full py-4 rounded-full bg-[var(--accent-color)] text-white text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="border-y border-theme relative h-[360px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Office building"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-theme-primary/30 backdrop-blur-[1px]" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <p className="font-display text-3xl md:text-5xl uppercase leading-tight max-w-4xl">
              Your Next Growth Chapter Starts With One Conversation.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
