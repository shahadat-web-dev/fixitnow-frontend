import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Smile,
  Sparkles,
  ArrowRight,
  Wrench,
  Droplets,
  Zap,
  Wind,
  Star,
  Quote,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <TrustCard />
      <FeaturedTechnicians />
      <WhyChooseUs />
      <ServiceCategories />
      <Testimonials />
      <PricingPlans />
      <CTABanner />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#101720]">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#F5A623]">
            <Sparkles className="h-3.5 w-3.5" />
            2,400+ Verified Technicians
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Every problem meets a{" "}
            <span className="text-[#F5A623]">trusted</span> fix
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-[#9AA4B2]">
            From cleaning and plumbing to electrical and AC servicing — book
            experienced, background-checked technicians for your home in
            minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3 text-sm font-semibold text-[#101720] transition-transform hover:-translate-y-0.5"
            >
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Browse Services
            </Link>
          </div>

          {/* mini social proof row */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
              ].map((src, i) => (
                <div key={i} className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#101720]">
                  <Image src={src} alt="Customer" fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9AA4B2]">
              <span className="font-semibold text-white">50,000+</span> jobs completed
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[#F5A623]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Technician at work"
              width={600}
              height={700}
              className="h-[420px] w-full object-cover md:h-[520px]"
              priority
            />
          </div>

          {/* floating rating card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623]/15">
                <Star className="h-5 w-5 fill-[#F5A623] text-[#F5A623]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#101720]">4.8 / 5.0</p>
                <p className="text-xs text-[#7C8798]">from 12,000+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TRUST BADGES ───────────────── */
const trustItems = [
  { icon: BadgeCheck, title: "Verified Profiles", desc: "Every technician is background-checked" },
  { icon: Clock, title: "On-Time Arrival", desc: "Technicians arrive within your scheduled slot" },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Transactions protected by Stripe" },
  { icon: Smile, title: "Satisfaction Guarantee", desc: "Review and report if the job falls short" },
];

function TrustBadges() {
  return (
    <section className="border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
          Why People Trust Us
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
          The first choice for homeowners
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#101720]/5">
                <Icon className="h-6 w-6 text-[#101720]" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#101720]">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#7C8798]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── HOW IT WORKS ───────────────── */
const workImages = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80",
  "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500&q=80",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&q=80",
];

function HowItWorks() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
          Simple Process
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
          How our service works
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {workImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              <Image src={src} alt="Service step" fill className="object-cover transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["Choose a service & time", "Confirm your technician", "Pay after job completion"].map(
            (step, i) => (
              <div key={step} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5A623] text-xs font-bold text-[#101720]">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-[#101720]">{step}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TRUST CARD ───────────────── */
function TrustCard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold leading-snug text-[#101720] sm:text-3xl">
            Care backed by{" "}
            <span className="bg-[#F5A623] px-1 text-[#101720]">trust</span> and
            reliability
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#7C8798]">
            Every technician on our platform goes through experience checks,
            skill assessments, and identity verification before they can
            accept a single booking.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#101720]">
            {["Experience-verified technicians", "Consistent quality standards", "Fastest average response time"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
                  {item}
                </li>
              )
            )}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#101720] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c2735]"
          >
            Learn More
          </Link>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-[#F5A623]/10" />
          <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
              alt="Trusted technician"
              fill
              className="object-cover"
            />
          </div>
          {/* orbiting badge */}
          <div className="absolute -bottom-2 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-semibold text-[#101720]">ID Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FEATURED TECHNICIANS (new section) ───────────────── */
const featuredTechnicians = [
  {
    name: "Rafiq Ahmed",
    role: "Plumbing Specialist",
    rating: 4.9,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Shirin Akter",
    role: "Deep Cleaning Expert",
    rating: 4.8,
    reviews: 278,
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    name: "Kamal Hossain",
    role: "Electrical Technician",
    rating: 5.0,
    reviews: 194,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80",
  },
  {
    name: "Mahin Rahman",
    role: "AC Servicing Pro",
    rating: 4.7,
    reviews: 221,
    img: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&q=80",
  },
];

function FeaturedTechnicians() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
              Top Rated
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
              Meet our featured technicians
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[#101720] hover:text-[#F5A623]">
            View all technicians →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {featuredTechnicians.map((tech) => (
            <div
              key={tech.name}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={tech.img}
                  alt={tech.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[11px] font-bold text-[#101720]">
                  <Star className="h-3 w-3 fill-[#F5A623] text-[#F5A623]" />
                  {tech.rating}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#101720]">{tech.name}</h3>
                <p className="mt-0.5 text-xs text-[#7C8798]">{tech.role}</p>
                <p className="mt-2 text-[11px] text-[#7C8798]">{tech.reviews} reviews</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── WHY CHOOSE US (dark box) ───────────────── */
const chooseUsItems = [
  "Verified Identity", "Flexible Scheduling", "Insured Service", "Easy Cancellation",
];

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-2xl bg-[#101720] px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Why were the <span className="text-[#F5A623]">right choice</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {chooseUsItems.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-sm font-medium text-white"
            >
              {item}
            </div>
          ))}
        </div>

        <Link
          href="/auth/register"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-8 py-3 text-sm font-semibold text-[#101720]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

/* ───────────────── SERVICE CATEGORIES ───────────────── */
const categories = [
  { icon: Droplets, title: "Cleaning Services", desc: "Deep cleaning and routine upkeep", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80" },
  { icon: Wrench, title: "Plumbing", desc: "Leaks, pipe repair, and fittings", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&q=80" },
  { icon: Zap, title: "Electrical", desc: "Wiring, switches, and fixtures", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80" },
  { icon: Wind, title: "AC Servicing", desc: "Installation, servicing, and repair", img: "https://images.unsplash.com/photo-1631545806609-995a4bbd4e93?w=500&q=80" },
];

function ServiceCategories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
              Popular Services
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
              Expert care for a spotless home
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[#101720] hover:text-[#F5A623]">
            View all services →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, desc, img }) => (
            <div key={title} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <Icon className="h-5 w-5 text-[#F5A623]" />
                <h3 className="mt-3 text-sm font-bold text-[#101720]">{title}</h3>
                <p className="mt-1 text-xs text-[#7C8798]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TESTIMONIALS (new section) ───────────────── */
const testimonials = [
  {
    quote: "The technician arrived within 30 minutes and fixed our AC same day. Booking took less than two minutes.",
    name: "Farhana Islam",
    role: "Homeowner, Dhanmondi",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    quote: "Transparent pricing and a technician who actually knew what he was doing. No surprises at all.",
    name: "Tanvir Hasan",
    role: "Homeowner, Uttara",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
  },
  {
    quote: "Rescheduling was painless and the in-app tracking made it easy to know exactly when to expect them.",
    name: "Ayesha Siddika",
    role: "Homeowner, Mirpur",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
            Customer Stories
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
            What our customers are saying
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <Quote className="h-6 w-6 text-[#F5A623]" />
              <p className="mt-4 text-sm leading-relaxed text-[#101720]">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#101720]">{t.name}</p>
                  <p className="text-xs text-[#7C8798]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PRICING ───────────────── */
const plans = [
  {
    name: "Basic Visit",
    price: "৳499",
    period: "per visit",
    features: ["Problem diagnosis", "Standard response time", "15-day service warranty"],
    highlight: false,
  },
  {
    name: "Priority Visit",
    price: "৳999",
    period: "per visit",
    features: ["Fastest response (30 min)", "Senior technician", "30-day service warranty", "Free follow-up visit"],
    highlight: true,
  },
];

function PricingPlans() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
          Pricing
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">Service charges</h2>
        <p className="mt-2 text-sm text-[#7C8798]">Choose the plan that fits your need</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 ${
              plan.highlight
                ? "border-[#101720] bg-[#101720] text-white"
                : "border-slate-200 bg-white text-[#101720]"
            }`}
          >
            <h3 className="text-sm font-semibold">{plan.name}</h3>
            <p className="mt-3 text-3xl font-bold">
              {plan.price}
              <span className="text-sm font-normal opacity-60"> / {plan.period}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${plan.highlight ? "bg-[#F5A623]" : "bg-[#101720]"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className={`mt-8 block rounded-lg py-2.5 text-center text-sm font-semibold ${
                plan.highlight ? "bg-[#F5A623] text-[#101720]" : "bg-[#101720] text-white"
              }`}
            >
              Choose this plan
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── CTA BANNER ───────────────── */
function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-2xl bg-[#F5A623] px-8 py-12 sm:px-14">
        <div className="relative z-10 max-w-md">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            Your sparkling clean home starts here
          </h2>
          <p className="mt-3 text-base font-medium text-black/80">
            Subscribe to get the latest updates and offers
          </p>
          <form className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border-2 border-black/80 bg-white px-4 py-2.5 text-sm font-medium text-[#101720] placeholder:text-[#101720]/50 focus:outline-none focus:ring-2 focus:ring-[#101720]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-[#101720] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1c2735]"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="pointer-events-none absolute -right-6 bottom-0 hidden h-full w-64 sm:block">
          <Image
            src="https://images.unsplash.com/photo-1584553421349-3557471bed79?w=500&q=80"
            alt="Happy customer"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}