import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Users,
  Award,
  FileCheck,
  UserCheck,
  Star,
  ArrowRight,
  Quote,
  Heart,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Hero />
      <StatsBar />
      <Story />
      <VerificationProcess />
      <TeamShowcase />
      <Values />
      <Testimonial />
      <CTABanner />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#101720]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#F5A623]">
          <Target className="h-3.5 w-3.5" />
          About Us
        </span>

        <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl">
          Your trusted address for{" "}
          <span className="text-[#F5A623]">home repairs</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#9AA4B2] sm:text-base">
          FixItNow started with a simple question — why is it so hard to find
          someone you can trust for a home repair? Were solving that, one
          verified technician at a time.
        </p>
      </div>
    </section>
  );
}

/* ───────────────── STATS BAR ───────────────── */
const stats = [
  { value: "2,400+", label: "Verified Technicians" },
  { value: "50,000+", label: "Completed Bookings" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "12 min", label: "Avg. Response Time" },
];

function StatsBar() {
  return (
    <section className="border-b border-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-bold text-[#101720] sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-[#7C8798] sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── STORY ───────────────── */
function Story() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80"
              alt="Technician at work"
              fill
              className="object-cover"
            />
          </div>
          {/* floating secondary image */}
          <div className="absolute -bottom-8 -left-8 hidden h-32 w-40 overflow-hidden rounded-xl border-4 border-white shadow-xl sm:block">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&q=80"
              alt="Customer service moment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
            Our Story
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
            Built after two wasted days chasing a plumber
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#7C8798]">
            Our founding team once spent two full days trying to find a
            reliable plumber for an emergency leak in Dhaka. That frustration
            became the spark for FixItNow — a platform where verified,
            skilled technicians can be booked in minutes, not days.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#7C8798]">
            Today FixItNow connects thousands of homeowners with thousands of
            technicians across Dhaka Metro — every booking backed by
            verification, ratings, and secure payments.
          </p>

          <div className="mt-6 flex items-center gap-3 rounded-lg bg-[#F7F8FA] p-4">
            <ShieldCheck className="h-8 w-8 shrink-0 text-[#F5A623]" />
            <p className="text-xs text-[#101720]">
              Every technician goes through identity, skill, and background
              verification — no exceptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── VERIFICATION TIMELINE (signature element) ───────────────── */
const verificationSteps = [
  {
    icon: FileCheck,
    title: "Identity Check",
    desc: "National ID and address verification is mandatory",
  },
  {
    icon: UserCheck,
    title: "Skill Assessment",
    desc: "Hands-on evaluation for each service category",
  },
  {
    icon: Star,
    title: "Trial Rating Period",
    desc: "First 10 bookings are closely monitored",
  },
  {
    icon: Award,
    title: "Verified Badge",
    desc: "Passing techs earn a permanent profile badge",
  },
];

function VerificationProcess() {
  return (
    <section className="bg-[#101720]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
            How We Build Trust
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Our four-step verification process
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 md:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {verificationSteps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5A623]">
                  <step.icon className="h-5 w-5 text-[#101720]" strokeWidth={2.5} />
                </div>
                <span className="mt-3 font-mono text-[11px] uppercase tracking-wider text-[#7C8798]">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 text-sm font-bold text-white">{step.title}</h3>
                <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-[#9AA4B2]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TEAM SHOWCASE (new section) ───────────────── */
const team = [
  {
    name: "Imran Chowdhury",
    role: "Co-Founder & CEO",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Nabila Karim",
    role: "Head of Operations",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    name: "Shahriar Kabir",
    role: "Head of Technician Success",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Farzana Yeasmin",
    role: "Head of Trust & Safety",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

function TeamShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
          The People Behind FixItNow
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
          Meet the leadership team
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl">
              <Image src={member.img} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-sm font-bold text-[#101720]">{member.name}</h3>
            <p className="mt-0.5 text-xs text-[#7C8798]">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── VALUES ───────────────── */
const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every technician and payment is verified and protected.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    desc: "Quality is shaped by real reviews and ratings.",
  },
  {
    icon: Target,
    title: "Transparency",
    desc: "Pricing, scheduling, and status are always clear.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    desc: "Support that actually listens and follows through.",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Fast matching means less time waiting, more time fixed.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    desc: "Consistent workmanship across every technician.",
  },
];

function Values() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
            Our Values
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
            What guides every decision we make
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-slate-100 bg-white p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#101720]/5">
                <v.icon className="h-6 w-6 text-[#101720]" />
              </div>
              <h3 className="mt-5 text-sm font-bold text-[#101720]">{v.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#7C8798]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TESTIMONIAL ───────────────── */
function Testimonial() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <Quote className="mx-auto h-8 w-8 text-[#F5A623]" />
        <p className="mt-4 text-lg font-medium leading-relaxed text-[#101720] sm:text-xl">
          Our stove suddenly broke down and a technician showed up within 35
          minutes of booking on FixItNow. The whole experience felt easy and
          safe from start to finish.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
              alt="Customer"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-[#101720]">Nusrat Jahan</p>
            <p className="text-xs text-[#7C8798]">Resident, Dhanmondi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CTA ───────────────── */
function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#101720] px-8 py-12 text-center sm:flex-row sm:text-left sm:px-14">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Join FixItNow today
          </h2>
          <p className="mt-2 text-sm text-[#9AA4B2]">
            Book a service as a customer, or start earning as a technician
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3 text-sm font-semibold text-[#101720]"
          >
            Book a Service
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/auth/register?role=technician"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
          >
            Join as Technician
          </Link>
        </div>
      </div>
    </section>
  );
}