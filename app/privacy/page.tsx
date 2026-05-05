import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--accent-color)] mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] tracking-tight">Privacy Policy</h1>
          <p className="mt-5 text-theme-secondary">Last updated: May 2026</p>

          <div className="mt-10 space-y-8 text-theme-secondary leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Information We Collect</h2>
              <p>
                We collect information you voluntarily submit through inquiry or consultation forms, including
                name, email, phone number, company name, and message content.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">How We Use Information</h2>
              <p>
                We use submitted information to respond to inquiries, provide consulting details, schedule calls,
                and improve service quality. We do not sell personal data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Data Sharing</h2>
              <p>
                Information may be shared only with trusted service providers required to operate business
                communication tools. Data is processed under confidentiality and security controls.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Data Security</h2>
              <p>
                We apply reasonable technical and administrative safeguards to protect your information from
                unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Your Rights</h2>
              <p>
                You may request access, correction, or deletion of personal information by emailing
                <a href="mailto:info@vixonconsulting.com" className="text-[var(--accent-color)] hover:underline ml-1">info@vixonconsulting.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-theme-primary uppercase mb-3">Contact</h2>
              <p>
                For privacy concerns, contact us at info@vixonconsulting.com or visit our office at Ithum Tower,
                Sector 62, Noida, Uttar Pradesh.
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
