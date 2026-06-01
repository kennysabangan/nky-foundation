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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Foundation Pros",
  phone: "(859) 555-0600",
  phoneE164: "+18595550600",
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
        "We seal foundation cracks using epoxy injection and polyurethane foam. Prevents water intrusion and stops cracks from growing. Serving NKY and Cincinnati.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Foundation Piering & Leveling",
      slug: "piering-leveling",
      description:
        "Helical piers and steel push piers to stabilize and lift sinking foundations. We restore your home to its original level. ",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Bowing Wall Repair",
      slug: "bowing-wall-repair",
      description:
        "Wall anchors and carbon fiber straps to stabilize and straighten bowing foundation walls. Prevents further movement and potential collapse.",
      photo: "/photos/screen-cleaning.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does foundation repair cost?",
      answer:
        "Contact us for a free inspection. Call (859) 555-0600.",
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
        "Usually not for settling/wear, but may be covered if caused by plumbing leak or sudden event. We can help with insurance claims.",
    },
    {
      question: "How long does foundation repair take?",
      answer:
        "Most repairs take 1-3 days. Major piering projects may take up to a week.",
    },
    {
      question: "Do you offer warranties?",
      answer:
        "Yes. We offer p warranties on structural repairs.",
    },
    {
      question: "Do you offer free inspections?",
      answer:
        "Yes. Free inspection and written estimate. No obligation.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 555-0600. We serve all of Northern Kentucky and greater Cincinnati.",
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
        "Florence homeowners trust NKY Foundation Pros when cracks appear, floors start to settle, or basement walls begin to bow. Whether your home is near the Florence Mall area or in one of the established neighborhoods off US-42, foundation problems are common in this part of Northern Kentucky. The region's heavy clay soil expands and contracts with the seasons, putting constant pressure on foundations. Our team has repaired hundreds of foundations across Florence — from minor crack sealing to full piering and leveling projects. We offer free inspections to help you understand exactly what's happening with your foundation and what it takes to fix it.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic homes and riverfront properties face unique foundation challenges. The Ohio River proximity, older construction, and clay-heavy soil combine to create conditions where foundation cracks, settling, and bowing walls are common. NKY Foundation Pros has served Covington residents for years — from the charming Victorian homes of Licking Riverside to commercial properties along Madison Avenue. We understand the structural demands of older buildings and use modern repair techniques like epoxy crack injection, helical piering, and wall anchoring to stabilize and restore foundations without compromising the character of your property.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is home to some of Northern Kentucky's most well-maintained properties, and homeowners here expect foundation work done right the first time. NKY Foundation Pros delivers exactly that. From the stately homes along Dixie Highway to the colonials on the residential side streets, we provide foundation crack repair, piering, and bowing wall repair that Fort Mitchell residents trust. Our technicians are fully insured, background-checked, and trained to diagnose foundation issues accurately before recommending the right fix. No overselling — just honest assessments and quality repairs.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that foundation problems don't fix themselves — they only get worse. NKY Foundation Pros is proud to serve this thriving community with expert foundation repair that's thorough, affordable, and built to last. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the tools and expertise to handle any foundation issue. We also serve Erlanger's growing commercial corridor, keeping storefronts and offices structurally sound. Our flexible scheduling means we work around your life, not the other way around.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new construction — and new foundation challenges. NKY Foundation Pros helps homeowners address foundation cracks, settling, and drainage issues before they become major structural problems. From the newer subdivisions near Taylor Mill Road to established neighborhoods closer to downtown, we provide foundation repair services that Northern Kentucky homeowners count on. Independence's rolling terrain and clay-heavy soil create the exact conditions that lead to foundation movement, and our team knows how to stop it.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport's position along the Ohio River means foundations here face constant moisture challenges — from seasonal flooding concerns to year-round hydrostatic pressure against basement walls. NKY Foundation Pros provides expert foundation repair for homes and businesses throughout Newport. Whether you're dealing with cracks in a Clifton bungalow, water intrusion in a Southgate basement, or bowing walls in a downtown building, we have the specialized techniques to stabilize and waterproof your foundation. We've helped dozens of Newport property owners protect their biggest investment.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most desirable communities — but even the nicest homes can develop foundation issues. NKY Foundation Pros has served Edgewood homeowners for years, providing foundation crack repair, piering, and bowing wall solutions that this neighborhood's properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to navigate Edgewood's varied terrain and soil conditions to deliver lasting repairs. Our team respects your property and always leaves the job site clean.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and challenging terrain — all of which contribute to unique foundation problems. Homes built into hillsides face differential settling, retaining wall failures, and water drainage issues that can compromise structural integrity. NKY Foundation Pros is Fort Thomas's trusted foundation repair service. We're experienced with the steep driveways, multi-level homes, and retaining wall challenges that Fort Thomas properties present. Our team handles it all with skill and care, ensuring your foundation is stable for decades to come.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Foundation Pros serves Bellevue residents and business owners with foundation repair that protects both property value and structural safety. We understand the mix of historic and modern properties that define Bellevue, and we approach each job with the care your foundation deserves. From the panoramic views along the river hills to the cozy bungalows in the side streets, we bring the same level of professionalism to every foundation repair project.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's rolling hills and spacious properties make it a beautiful place to live — but the terrain also creates foundation challenges. Shifting clay soil, poor drainage, and hillside construction can all lead to cracks, settling, and bowing walls. NKY Foundation Pros provides Cold Spring homeowners with thorough foundation inspections and targeted repairs that address the root cause of the problem. Whether your home overlooks Alexandria Pike or sits in one of Cold Spring's peaceful residential developments, we'll make sure your foundation is solid and secure.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Foundation Pros is proud to serve the homes and businesses that make this city special. From the established neighborhoods along Taylor Mill Road to the newer developments spreading across the city, we provide foundation repair that Taylor Mill residents trust. Our team understands the local soil conditions — the clay that expands when wet and contracts when dry, creating the cyclical pressure that damages foundations over time. We tailor our repair approach to each property, ensuring great results every time.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the elevated terrain here creates foundation challenges that require expert attention. NKY Foundation Pros delivers premium foundation repair services that match Villa Hills' high standards. The city's hillside location and proximity to the Ohio River floodplain mean your foundation faces unique pressures — from water-saturated soil after heavy rains to the gradual slope movement that can compromise structural integrity. Villa Hills homeowners trust us because we diagnose problems accurately and deliver repairs that last.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality work, and NKY Foundation Pros delivers it with every foundation repair project. We've been serving this close-knit community with the kind of reliable service homeowners and businesses depend on. Whether your property is along Buttermilk Pike or in one of Crescent Springs' well-maintained neighborhoods, we bring the same commitment to excellence. Our team handles everything from minor crack repairs to major structural work involving piering, wall anchors, and waterproofing. We work efficiently, respect your time, and always deliver results that last.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect — and deserve — top-tier foundation repair service. NKY Foundation Pros is proud to serve Lakeside Park with expert foundation work that keeps homes structurally sound. The well-maintained properties that define Lakeside Park deserve a careful, professional approach, and our technicians deliver exactly that. From early-stage crack repairs to full foundation stabilization projects, Lakeside Park homeowners know they can count on us to protect their most important investment.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location offers some of the best views in Northern Kentucky — but building on a hill creates serious foundation challenges. Differential settling, retaining wall pressure, and drainage issues are common on Park Hills properties. NKY Foundation Pros provides expert foundation repair that addresses these hillside-specific problems. We're experienced with the steep terrain, multi-story homes, and unique architectural features that Park Hills is known for. Whether your home overlooks Devou Park or the Cincinnati skyline beyond, we'll make sure your foundation is as solid as the hill it sits on.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, and its older homes often come with foundation challenges. NKY Foundation Pros extends our foundation repair services across the river to Walnut Hills homeowners and businesses. From the stately Victorian homes along Gilbert Avenue to commercial properties near Peeble's Corner, we bring the same expert foundation work that NKY residents trust. Walnut Hills' mix of historic construction, hillside terrain, and aging infrastructure means foundation cracks and settling are common — and we know how to fix them permanently.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes and tree-lined streets. NKY Foundation Pros brings our foundation repair expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, foundation problems can affect any property in this area. The mature trees and varied terrain create soil conditions that put stress on foundations over time. Our team delivers precise, lasting repairs that protect your home's structure and value.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Foundation Pros is happy to serve Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable foundation repair. Norwood's mix of older homes, duplexes, and storefronts means foundations here face everything from decades of settling to water damage from aging drainage systems. Our team handles it all with modern repair techniques, leaving every foundation in Norwood stable and secure.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes make it one of the Cincinnati area's premier residential communities. NKY Foundation Pros extends our premium foundation repair services to Montgomery homeowners who expect quality service. The large lots, mature landscaping, and varied elevation throughout Montgomery require a careful, experienced approach — and our team delivers exactly that. From historic properties near the downtown village center to sprawling estates on the outskirts, we bring the same meticulous attention to every foundation repair project.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Foundation Pros is proud to bring our foundation repair services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the residential side streets, Deer Park homes deserve solid foundations that stand the test of time. We offer flexible scheduling, Flexible scheduling, and the kind of dependable service that Deer Park homeowners appreciate. A stable foundation protects your biggest investment — and we deliver every time.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Foundation Pros provides the premium foundation repair service that Amberley homes demand. The spacious lots, mature trees, and high-end finishes throughout this community require a professional touch — and our fully insured, background-checked technicians deliver exactly that. We protect your property, respect your privacy, and deliver foundation repairs that last. Amberley homeowners choose us because we treat every home like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a strong sense of community and a wide range of homes and businesses. NKY Foundation Pros is excited to serve Westwood with the same reliable foundation repair that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we've addressed every type of foundation issue Westwood properties present. Our team works efficiently, respects your property, and always delivers lasting results.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Foundation Pros brings our expert foundation repair services to Fort Heights homeowners who want the same quality their NKY neighbors enjoy. The elevated terrain here creates drainage challenges and soil pressure issues that can damage foundations over time. Our thorough inspection process identifies the root cause of every problem, and our repair solutions are designed to last for decades.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with stunning skyline views, steep streets, and a mix of historic and modern properties. NKY Foundation Pros brings expert foundation repair to Mt. Adams homeowners and businesses who need to keep their hillside properties structurally sound. The steep terrain and variable soil conditions in Mt. Adams create unique foundation challenges — our team has the experience and equipment to handle even the most complex repairs safely and effectively.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side, just across the river from Northern Kentucky. NKY Foundation Pros serves Mt. Lookout homeowners with professional foundation repair that keeps homes stable and secure. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every foundation type Mt. Lookout has to offer. From hairline cracks to significant settling, we diagnose and repair foundation problems with proven techniques and a commitment to lasting results.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with a thriving business district, new developments, and a strong sense of community. NKY Foundation Pros is proud to serve Oakley's homes and businesses with foundation repair that matches the neighborhood's upward trajectory. From the homes around Oakley Square to the new builds throughout the area, we provide foundation repair that's thorough, affordable, and built to last. Whether you're a homeowner protecting your investment or a business owner ensuring structural safety, we've got you covered.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River on the city's east side. NKY Foundation Pros brings our foundation repair services to this historic riverfront community, where homes range from restored 19th-century cottages to modern river-view condos. The Ohio River proximity means foundations here face moisture intrusion, hydrostatic pressure, and soil erosion — our specialized repair process addresses all of these issues. Whether your home overlooks the river or sits tucked into the hillside, we'll make sure your foundation is solid.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side, known for its well-kept homes and strong community spirit. NKY Foundation Pros is happy to extend our foundation repair services to Pleasant Ridge residents who want to protect their homes from structural damage. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means we adapt our approach to each property's specific foundation challenges. Our team is fast, friendly, and thorough, delivering repairs that last for decades.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Foundation Pros fixed the cracks in our basement wall in Florence. Fast, professional, and they explained everything. Our foundation is solid now.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "We had settling issues in our Covington home. They installed piers and leveled our foundation. The floors are even again. Great work.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Our foundation wall was bowing inward. Scary situation. NKY Foundation Pros installed wall anchors and stopped the movement. They probably saved our house.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "Had water coming through foundation cracks every time it rained. They sealed everything and now our basement is completely dry. Reliable foundation company in Edgewood.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "NKY Foundation Pros fixed the cracks in our basement wall in Florence. Fast, professional, and they explained everything. Our foundation is solid now. Professional foundation repair service in Northern Kentucky.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We had settling issues in our Covington home. They installed piers and leveled our foundation. The floors are even again. Great foundation repair work. Highly recommend.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "Our foundation wall was bowing inward. Scary situation. NKY Foundation Pros installed wall anchors and stopped the movement. They probably saved our house. Professional foundation repair company in NKY.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Had cracks in our foundation that were getting worse every year. NKY Foundation Pros came out, diagnosed the issue, and fixed everything in two days. Professional foundation repair at a competitive price.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We noticed our floors were starting to slope. Called NKY Foundation Pros and they found settling in our foundation. They installed helical piers and everything is level again. Excellent foundation repair service.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Water was coming through our foundation every time it rained. NKY Foundation Pros sealed the cracks and added waterproofing. Our basement has been completely dry since. Great foundation repair work.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "Had water coming through foundation cracks every time it rained. They sealed everything and now our basement is completely dry. Reliable foundation company in Edgewood that we trust completely.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home sits on a hillside and we had retaining wall issues. NKY Foundation Pros came out, assessed the situation, and repaired everything. Our foundation is solid now. Professional foundation repair in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
