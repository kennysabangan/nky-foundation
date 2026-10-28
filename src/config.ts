/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Foundation Pros",
  phone: "(859) 900-8065",
  phoneE164: "+18599008065",
  domain: "nkyfoundationpros.com",
  siteUrl: "https://nkyfoundationpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "foundation repair",
  serviceKeywordPlural: "foundation repair services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Northern Kentucky Foundation Repair Service",
  heroSubtext: "Cracks, settling, bowing walls — we fix it all. Call for a free inspection.",
  heroAlt: "Professional foundation repair crew at work on a residential home",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Foundation Crack Repair",
      slug: "crack-repair",
      description:
        "We seal foundation cracks with epoxy or polyurethane foam injection. The injection fills the crack through the full thickness of the wall to keep water out and help keep the crack from spreading.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Foundation Piering & Leveling",
      slug: "piering-leveling",
      description:
        "Helical piers and steel push piers to stabilize a settling foundation. Where the structure allows it, piers can also be used to lift the house back toward level.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Bowing Wall Repair",
      slug: "bowing-wall-repair",
      description:
        "Wall anchors and carbon fiber straps to brace bowing basement walls against further inward movement. Wall anchors can also be tightened over time to gradually pull a wall back toward plumb.",
      photo: "/photos/bowing-wall-repair.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does foundation repair cost?",
      answer:
        "It depends on the repair. Crack injection, piering, and wall anchors are priced very differently, and the number of piers or anchors a house needs drives most of the cost. Call (859) 900-8065 for a free inspection and written estimate.",
    },
    {
      question: "What causes foundation problems?",
      answer:
        "Soil movement, poor drainage, tree roots, plumbing leaks, and natural settling. NKY's clay soil is particularly prone to expansion/contraction.",
    },
    {
      question: "How do I know if my foundation needs repair?",
      answer:
        "Cracks in walls/floors, doors/windows that stick, uneven floors, bowing walls, water in basement. If you see any of these, call us.",
    },
    {
      question: "Is foundation repair covered by homeowners insurance?",
      answer:
        "Usually not for settling or wear, but it may be covered if the damage was caused by a plumbing leak or other sudden event. Check with your insurance company before work starts.",
    },
    {
      question: "How long does foundation repair take?",
      answer:
        "Most repairs take 1-3 days. Major piering projects may take up to a week.",
    },
    {
      question: "Is the repair work warrantied?",
      answer:
        "Warranty terms depend on the repair and the products used. Ask for the terms in writing along with your estimate, before you sign.",
    },
    {
      question: "Do you offer free inspections?",
      answer:
        "Yes. Free inspection and written estimate. No obligation.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 900-8065 to set up a free inspection. Our main service areas are Florence, Covington, Fort Thomas, Newport, Fort Mitchell, Erlanger, Edgewood, and Independence.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "Florence homeowners call NKY Foundation Pros when cracks appear, floors start to settle, or basement walls begin to bow. Whether your home is near the Florence Mall area or in one of the established neighborhoods off US-42, foundation problems are common in this part of Northern Kentucky. The region's heavy clay soil expands and contracts with the seasons, putting constant pressure on foundations. We handle everything from minor crack sealing to full piering and leveling projects. We offer free inspections to help you understand exactly what's happening with your foundation and what it takes to fix it.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic homes and riverfront properties face unique foundation challenges. The Ohio River proximity, older construction, and clay-heavy soil combine to create conditions where foundation cracks, settling, and bowing walls are common. NKY Foundation Pros works on Covington properties from the Victorian homes of Licking Riverside to commercial buildings along Madison Avenue. We understand the structural demands of older buildings and use modern repair techniques like epoxy crack injection, helical piering, and wall anchoring to stabilize and restore foundations without compromising the character of your property.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is home to some of Northern Kentucky's most well-maintained properties, and homeowners here expect foundation work done right the first time. From the stately homes along Dixie Highway to the colonials on the residential side streets, NKY Foundation Pros provides foundation crack repair, piering, and bowing wall repair. We diagnose what's causing the problem before recommending a fix. No overselling — just honest assessments and careful repairs.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that foundation problems don't fix themselves — they only get worse. NKY Foundation Pros is proud to serve this thriving community with thorough, fairly priced foundation repair. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the tools and expertise to handle any foundation issue. We also serve Erlanger's growing commercial corridor, keeping storefronts and offices structurally sound. Our flexible scheduling means we work around your life, not the other way around.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new construction — and new foundation challenges. NKY Foundation Pros helps homeowners address foundation cracks, settling, and drainage issues before they become major structural problems. From the newer subdivisions near Taylor Mill Road to established neighborhoods closer to downtown, we provide foundation repair for homes of every age. Independence's rolling terrain and clay-heavy soil create the exact conditions that lead to foundation movement, and our team knows what to look for.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport's position along the Ohio River means foundations here face constant moisture challenges — from seasonal flooding concerns to year-round hydrostatic pressure against basement walls. NKY Foundation Pros provides expert foundation repair for homes and businesses throughout Newport. Whether you're dealing with cracks in an East Row basement, water seeping through a wall in Clifton, or bowing walls in a downtown building, we use crack injection, wall anchors, and piering to seal and stabilize the foundation.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most desirable communities — but even the nicest homes can develop foundation issues. NKY Foundation Pros provides Edgewood homeowners with foundation crack repair, piering, and bowing wall solutions. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we plan each repair around Edgewood's varied terrain and soil conditions. Our team respects your property and always leaves the job site clean.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and challenging terrain — all of which contribute to unique foundation problems. Homes built into hillsides face differential settling, retaining wall failures, and water drainage issues that can compromise structural integrity. NKY Foundation Pros provides foundation repair throughout Fort Thomas. We work with the steep driveways, multi-level homes, and retaining wall challenges that Fort Thomas properties present. Our team handles each of these with care, starting with a free inspection to find the cause.",
    },
  ] as City[],
};
