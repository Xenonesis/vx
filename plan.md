# Vixon Consulting Website Rebuild Plan

## 1) Source Audit (what exists today)

Based on a full scrape of `https://vixonconsulting.com` and discovered linked pages.

### Core live pages
- `/` Home
- `/services`
- `/about`
- `/contact`

### Discovered but low-value/legacy pages
- `/hello-world` (default WordPress post)
- `/category/uncategorized`
- `/author/nk9306151gmail-com`
- `/blog` (404)
- `/events` (404)
- `/about-us` (404)
- `/event-details/...` (404)

### Current positioning/message
- Tagline: **“Building Better Business Together”**
- Core promise: help businesses grow through:
  1. Hiring
  2. Marketing/lead generation
  3. Real estate advisory

### Services currently listed
1. Manpower & Hiring Solutions
2. Marketing & Lead Generation
3. Real Estate Investment Advisory
4. Business Growth Consulting
5. Startup & Founder Support
6. Process Optimization

### Process / methodology currently shown
- Step 01: Listen & Understand
- Step 02: Plan & Strategize
(implicit 3rd step execution is referenced in copy but not clearly structured)

### Social proof currently shown
- Testimonials: Priya Mehta, Neha Kapoor, Amit Sharma (repeated)
- Team members shown: Justin Deviz, John Doe, Mike Pomir, Robert Smith (likely placeholders)
- Stats shown but inconsistent across pages (example: 0+, 2+, 5k, 0.2M etc.)

### Contact details currently found (inconsistent)
- Phones:
  - `+91-7291002205`
  - `+91-8512002205`
- Emails:
  - `info@vixonconsulting.com`
  - `info@vixonconsulting.in`
  - `hr.vixonconsulting@gmail.com`
- Address:
  - Ithum Tower, Sector 62, Noida, Uttar Pradesh
- Hours:
  - Mon–Sat 09:00–18:00
  - Mon–Sat 10:00–19:00

---

## 2) Rebuild goals

1. Create a clean, trust-building consulting website with clear conversion paths.
2. Keep all real business messaging, remove template/placeholder/WordPress junk.
3. Standardize contact and company information.
4. Add scalable structure for future blog/events pages.
5. Improve SEO, performance, and lead capture quality.

---

## 3) Proposed Information Architecture (Sitemap)

### Primary pages (launch MVP)
- Home
- About
- Services (overview)
- Service detail pages (6)
- Contact
- Thank You (form submission)
- Privacy Policy
- Terms (optional at MVP)

### Secondary pages (Phase 2)
- Insights/Blog
- Case Studies
- Events
- Careers (if hiring focus is strong)

---

## 4) Page-by-page content plan

## Home
Sections:
1. Hero (clear value proposition + CTA)
2. Trust bar (industries served / client logos / credibility)
3. Services snapshot (6 cards)
4. How we work (3-step method: Discover → Strategy → Execution)
5. Results/proof (real metrics only)
6. Testimonials (de-duplicated)
7. Final CTA + contact mini-form

Primary CTA: **Book Free Consultation**

## About
Sections:
1. Company mission and vision
2. Founder/leadership profiles (real names/photos)
3. Why choose Vixon
4. Approach/framework
5. Industries served
6. CTA

## Services Overview
- Intro + 6 service cards
- Problem → Solution framing for each
- CTA to service detail pages

## Service Detail Pages (x6)
Template:
- Who this is for
- Pain points solved
- Deliverables
- Engagement model / timelines
- FAQs
- CTA

## Contact
- Single source of truth for phone, email, address, hours
- Embedded map
- Contact form with required qualification fields:
  - Name
  - Company
  - Email
  - Phone
  - Service of interest
  - Budget range (optional)
  - Message
- WhatsApp quick-action button (optional)

---

## 5) Brand, UX, and UI direction

- Tone: professional, growth-focused, approachable
- Visual style: clean consulting aesthetic, strong whitespace, high contrast CTAs
- Suggested design system:
  - 1 primary accent color + neutral grays
  - 2 font hierarchy levels (display/body)
  - Reusable components for cards, testimonials, FAQs, forms

### Components to build once, reuse everywhere
- Header + sticky CTA
- Footer with validated contact info
- Service cards
- Step/process cards
- Testimonial carousel/grid
- FAQ accordion
- Lead form with validation

---

## 6) Content cleanup required before build

1. Remove placeholder/team dummy names unless real.
2. Remove WordPress default pages/posts:
   - hello-world
   - uncategorized
   - author archive
3. Resolve 404-linked navigation targets (blog/events/about-us).
4. Standardize contact identity (one phone set, one primary email set, one office hour set).
5. Verify all metrics before publishing (avoid 0+, 0M placeholders).

---

## 7) SEO and technical plan

- Unique meta title/description for each page
- Proper H1/H2 hierarchy
- Schema:
  - Organization
  - LocalBusiness
  - Service
  - FAQPage
- Open Graph / Twitter metadata
- XML sitemap + robots.txt
- 301 redirects from legacy/404 paths to correct destinations

Performance targets:
- Lighthouse 90+ (Performance, SEO, Best Practices, Accessibility)
- Optimized images, lazy loading, compressed assets

---

## 8) Conversion and analytics plan

- Primary conversion: consultation form submit
- Secondary conversions: phone click, email click, WhatsApp click
- Track via analytics events:
  - `cta_click`
  - `form_start`
  - `form_submit`
  - `phone_click`
  - `email_click`
- Add spam protection (honeypot + rate limit + CAPTCHA if needed)

---

## 9) Delivery phases

### Phase 1: Discovery (1–2 days)
- Finalize brand copy and contact data
- Gather real team/client proof assets
- Confirm service-level content

### Phase 2: UX + Content architecture (2–3 days)
- Wireframes for Home/About/Services/Contact
- Confirm final sitemap and CTA flow

### Phase 3: UI implementation (3–5 days)
- Build design system and all core components
- Implement responsive pages

### Phase 4: SEO, QA, and launch prep (2 days)
- Metadata/schema/performance pass
- Device/browser QA
- Form and tracking validation

### Phase 5: Launch + optimization (ongoing)
- Monitor conversions
- A/B test hero copy and CTA labels
- Add blog/case-study pipeline

---

## 10) Launch readiness checklist

- [ ] All placeholders removed
- [ ] Contact info consistent everywhere
- [ ] Forms tested end-to-end
- [ ] 404 and redirect map configured
- [ ] SEO metadata added page-wise
- [ ] Analytics events verified
- [ ] Mobile responsiveness validated
- [ ] Legal pages present (privacy at minimum)

---

## 11) Immediate next actions

1. Confirm official contact info (phone/email/hours).
2. Confirm whether blog/events are part of MVP or deferred.
3. Provide final approved service descriptions and leadership profiles.
4. Start wireframing using this plan as implementation scope.
