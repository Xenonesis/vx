import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] tracking-tight">Terms of Service</h1>
          <p className="mt-5 text-theme-secondary">Last updated: May 2026</p>

          <div className="mt-10 space-y-8 text-theme-secondary leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Acceptance of Terms</h2>
              <p>
                By accessing this website, you agree to these terms and applicable laws. If you do not agree,
                please discontinue use of the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Service Scope</h2>
              <p>
                Vixon Consulting provides advisory services in hiring, marketing, real estate strategy, and
                business growth consulting. Engagement details are defined in separate client agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Intellectual Property</h2>
              <p>
                All website content, branding, text, and visuals are owned by Vixon Consulting unless otherwise
                stated. Unauthorized reproduction or distribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Limitation of Liability</h2>
              <p>
                Website content is provided for general information. Vixon Consulting is not liable for indirect,
                incidental, or consequential losses arising from website use.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Third-Party Links</h2>
              <p>
                The website may reference third-party platforms. We are not responsible for content, privacy
                practices, or availability of external websites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Contact</h2>
              <p>
                For legal queries, write to
                <a href="mailto:info@vixonconsulting.com" className="text-[var(--accent-color)] hover:underline ml-1">info@vixonconsulting.com</a>.
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
