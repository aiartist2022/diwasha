export const clinic = {
  name: "Diwasha Dental Clinic & Implant Centre",
  shortName: "Diwasha Dental",
  tagline: "Dental Care That Puts You First",
  phone: "+91 97268 21277",
  phoneRaw: "+919726821277",
  whatsappNumber: "919726821277",
  whatsappMessage: "Hi, I'd like to book a consultation at Diwasha Dental.",
  email: "diwasha.dental@gmail.com",
  rating: 4.8,
  reviews: 181,
  address: {
    line1: "A-301, Dynamic House",
    line2: "Above HDFC Bank, Near Vijay Cross Roads",
    line3: "120 Feet Ring Road, Navrangpura",
    city: "Ahmedabad",
    pin: "380009",
    state: "Gujarat",
  },
  hours: [
    { day: "Monday – Friday", time: "10:00 AM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 6:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  social: {
    instagram: "https://instagram.com/diwasha_dental_implant",
    facebook: "https://facebook.com/Diwashadental",
  },
} as const;

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(msg ?? clinic.whatsappMessage)}`;

export const telLink = `tel:${clinic.phoneRaw}`;
export const mapsEmbed =
  "https://www.google.com/maps?q=Dynamic+House+Vijay+Cross+Roads+Navrangpura+Ahmedabad&output=embed";

export const services = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    blurb:
      "Permanent, natural-feeling tooth replacement planned and placed by specialist oral surgeons.",
    icon: "Sparkles",
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    blurb:
      "Gentle, modern RCT that saves your natural tooth — often completed in a single visit.",
    icon: "Activity",
  },
  {
    slug: "oral-surgery",
    title: "Oral & Maxillofacial Surgery",
    blurb:
      "Complex extractions, wisdom teeth and jaw procedures — performed by qualified surgeons.",
    icon: "Stethoscope",
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    blurb:
      "Veneers, crowns and cosmetic shaping designed around your face — not a template.",
    icon: "Smile",
  },
  {
    slug: "braces-aligners",
    title: "Braces & Clear Aligners",
    blurb:
      "Straighten with confidence — traditional braces or near-invisible clear aligners.",
    icon: "AlignCenter",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    blurb:
      "Safe, dentist-supervised whitening that lifts years of staining in a single session.",
    icon: "Sun",
  },
] as const;

export const doctors = [
  {
    slug: "aditi",
    name: "Dr. Aditi Sharma Diwan",
    role: "Oral & Maxillofacial Surgeon",
    credentials: "BDS, MDS — Oral & Maxillofacial Surgery",
    bio: "Dr. Aditi leads complex implant and surgical cases at Diwasha. Her approach blends surgical precision with the calm reassurance her patients return for, again and again.",
  },
  {
    slug: "shaswat",
    name: "Dr. Shaswat Diwan",
    role: "Oral & Maxillofacial Surgeon",
    credentials: "BDS, MDS — Oral & Maxillofacial Surgery",
    bio: "Dr. Shaswat specialises in advanced extractions, jaw procedures and full-mouth rehabilitation, with a steady, methodical chairside manner.",
  },
  {
    slug: "madhu",
    name: "Dr. Madhu Ahara",
    role: "Endodontist",
    credentials: "BDS, MDS — Conservative Dentistry & Endodontics",
    bio: "Dr. Madhu handles root canal treatment with a near-invisible touch — most patients describe the visit as ‘easier than I expected’.",
  },
  {
    slug: "hetal",
    name: "Dr. Hetal Vadher",
    role: "General & Cosmetic Dentist",
    credentials: "BDS",
    bio: "Dr. Hetal looks after preventive care, cosmetic shaping and family dentistry — the dentist most patients meet first.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I was terrified of the implant procedure. Dr. Aditi explained every step, and the surgery itself was easier than my fillings. Six months in, I forget the tooth was ever missing.",
    name: "Rajesh M.",
    treatment: "Single Tooth Implant",
  },
  {
    quote:
      "Found Diwasha after years of moving between clinics. Honest, no upselling, transparent about cost. My whole family goes here now.",
    name: "Pooja S.",
    treatment: "Family Dentistry",
  },
  {
    quote:
      "Dr. Shaswat removed my impacted wisdom teeth — two on the same day. I was eating soft khichdi by evening. Unbelievable.",
    name: "Aarav P.",
    treatment: "Wisdom Tooth Surgery",
  },
] as const;

export const faqs = [
  {
    q: "Do dental implants hurt?",
    a: "The implant placement itself is performed under local anaesthesia — most patients describe it as comparable to a routine extraction. Mild soreness for 2–3 days is normal and easily managed with standard pain relief.",
  },
  {
    q: "How much does treatment cost at Diwasha?",
    a: "Costs vary by procedure and complexity. Consultation with Dr. Aditi is ₹500 and includes a personalised treatment plan with transparent pricing. Nothing is started without your written go-ahead.",
  },
  {
    q: "How long does a root canal take?",
    a: "Most root canals at Diwasha are completed in a single 60–90 minute visit using modern rotary instrumentation. Complex cases may need a second appointment.",
  },
  {
    q: "Do you accept walk-ins or emergencies?",
    a: "We strongly prefer appointments to keep wait times short, but we always make room for genuine dental emergencies. Call or WhatsApp us and we’ll guide you.",
  },
  {
    q: "Where exactly are you located?",
    a: "A-301, Dynamic House, above HDFC Bank, right next to Vijay Cross Roads on 120 Feet Ring Road, Navrangpura. Easy parking in the building itself.",
  },
] as const;
