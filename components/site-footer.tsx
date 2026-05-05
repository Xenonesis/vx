import Link from "next/link";
import Image from "next/image";

const services = [
  "Manpower & Hiring Solutions",
  "Marketing & Lead Generation",
  "Real Estate Advisory",
  "Business Growth Consulting",
  "Startup & Founder Support",
  "Process Optimization",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-theme bg-theme-secondary mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative overflow-hidden rounded-md bg-white">
              <Image src="/logo.webp" alt="Vixon logo" fill className="object-contain p-1" />
            </div>
            <p className="font-display text-2xl font-bold uppercase tracking-tight">Vixon</p>
          </div>
          <p className="text-theme-secondary text-sm leading-relaxed max-w-xs">
            Building better business together through strategic hiring, growth marketing, and high-conviction advisory.
          </p>
          <div className="text-xs uppercase tracking-widest font-bold text-theme-secondary">
            Mon – Sat · 10:00 to 19:00
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase mb-5">Company</h3>
          <ul className="space-y-3 text-sm text-theme-secondary">
            <li><Link href="/about" className="hover:text-[var(--accent-color)] transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[var(--accent-color)] transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--accent-color)] transition-colors">Insights & Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--accent-color)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase mb-5">Solutions</h3>
          <ul className="space-y-3 text-sm text-theme-secondary">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase mb-5">Contact</h3>
          <div className="space-y-3 text-sm text-theme-secondary leading-relaxed">
            <p>Ithum Tower, Sector 62<br />Noida, Uttar Pradesh</p>
            <p>
              <a href="tel:+917291002205" className="hover:text-[var(--accent-color)] transition-colors">+91-7291002205</a>
            </p>
            <p>
              <a href="mailto:info@vixonconsulting.com" className="hover:text-[var(--accent-color)] transition-colors">info@vixonconsulting.com</a>
            </p>
            <p>
              <a href="mailto:hr.vixonconsulting@gmail.com" className="hover:text-[var(--accent-color)] transition-colors">hr.vixonconsulting@gmail.com</a>
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest font-bold mb-2">Social</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-widest">
                <a href="https://www.linkedin.com/company/vixon-consulting" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/vixon_consulting/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">Instagram</a>
                <a href="https://wa.me/917291002205" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-theme">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs uppercase tracking-widest text-theme-secondary flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vixon Consulting. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[var(--accent-color)] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--accent-color)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
