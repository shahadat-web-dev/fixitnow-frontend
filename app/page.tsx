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
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <TrustCard />
      <WhyChooseUs />
      <ServiceCategories />
      <PricingPlans />
      <CTABanner />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#101720]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#F5A623]">
            <Sparkles className="h-3.5 w-3.5" />
            ২,৪০০+ যাচাইকৃত টেকনিশিয়ান
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            প্রতিটি সমস্যায়,{" "}
            <span className="text-[#F5A623]">বিশ্বস্ত</span> সমাধান
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-[#9AA4B2]">
            ক্লিনিং, প্লাম্বিং, ইলেকট্রিক্যাল কিংবা এসি সার্ভিস — যেকোনো বাসার
            কাজে অভিজ্ঞ ও যাচাইকৃত টেকনিশিয়ান বুক করুন কয়েক মিনিটেই।
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3 text-sm font-semibold text-[#101720] transition-transform hover:-translate-y-0.5"
            >
              এখনই বুক করুন
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              সার্ভিস দেখুন
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[#F5A623]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="টেকনিশিয়ান কাজ করছেন"
              width={600}
              height={700}
              className="h-[420px] w-full object-cover md:h-[520px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TRUST BADGES ───────────────── */
const trustItems = [
  { icon: BadgeCheck, title: "যাচাইকৃত প্রোফাইল", desc: "প্রতিটি টেকনিশিয়ান ব্যাকগ্রাউন্ড-চেকড" },
  { icon: Clock, title: "সময়ানুবর্তী", desc: "নির্ধারিত সময়েই টেকনিশিয়ান পৌঁছাবেন" },
  { icon: ShieldCheck, title: "নিরাপদ পেমেন্ট", desc: "Stripe দ্বারা সুরক্ষিত লেনদেন" },
  { icon: Smile, title: "সন্তুষ্টির নিশ্চয়তা", desc: "কাজ পছন্দ না হলে রিভিউ ও রিপোর্ট" },
];

function TrustBadges() {
  return (
    <section className="border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
          কেন মানুষ আমাদের বিশ্বাস করে
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
          বাসার মালিকদের প্রথম পছন্দ
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
        <h2 className="text-2xl font-bold text-[#101720] sm:text-3xl">
          যেভাবে আমাদের সার্ভিস কাজ করে
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {workImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              <Image src={src} alt="সার্ভিস স্টেপ" fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["সার্ভিস ও সময় বেছে নিন", "টেকনিশিয়ান কনফার্ম করুন", "কাজ শেষে পেমেন্ট করুন"].map(
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
            যত্নের সাথে সেবা,{" "}
            <span className="bg-[#F5A623] px-1 text-[#101720]">বিশ্বাস</span> ও
            নির্ভরযোগ্যতার নিশ্চয়তায়
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#7C8798]">
            আমাদের প্রতিটি টেকনিশিয়ান অভিজ্ঞতা যাচাই, দক্ষতা পরীক্ষা এবং
            পরিচয়পত্র যাচাইয়ের মধ্য দিয়ে প্ল্যাটফর্মে যুক্ত হন।
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#101720]">
            {["অভিজ্ঞতা-যাচাইকৃত টেকনিশিয়ান", "কনসিস্টেন্ট কোয়ালিটি স্ট্যান্ডার্ড", "দ্রুততম রেসপন্স টাইম"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
                  {item}
                </li>
              )
            )}
          </ul>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#101720] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c2735]"
          >
            আরও জানুন
          </Link>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-[#F5A623]/10" />
          <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
              alt="বিশ্বস্ত টেকনিশিয়ান"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── WHY CHOOSE US (dark box) ───────────────── */
const chooseUsItems = [
  "যাচাইকৃত পরিচয়", "ফ্লেক্সিবল সময়সূচী", "ইন্স্যুরড সার্ভিস", "সহজ বাতিলকরণ",
];

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-2xl bg-[#101720] px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          কেন আমরাই <span className="text-[#F5A623]">সঠিক পছন্দ</span>
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
          শুরু করুন
        </Link>
      </div>
    </section>
  );
}

/* ───────────────── SERVICE CATEGORIES ───────────────── */
const categories = [
  { icon: Droplets, title: "ক্লিনিং সার্ভিস", desc: "ডিপ ক্লিনিং ও নিয়মিত পরিচ্ছন্নতা", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80" },
  { icon: Wrench, title: "প্লাম্বিং", desc: "লিকেজ, পাইপ ও ফিটিং মেরামত", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&q=80" },
  { icon: Zap, title: "ইলেকট্রিক্যাল", desc: "ওয়্যারিং, সুইচ ও ফিক্সচার", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80" },
  { icon: Wind, title: "এসি সার্ভিসিং", desc: "ইনস্টলেশন, সার্ভিসিং ও রিপেয়ার", img: "https://images.unsplash.com/photo-1631545806609-995a4bbd4e93?w=500&q=80" },
];

function ServiceCategories() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
              জনপ্রিয় সার্ভিস
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#101720] sm:text-3xl">
              ঝকঝকে বাসার জন্য বিশেষজ্ঞ সেবা
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[#101720] hover:text-[#F5A623]">
            সব সার্ভিস দেখুন →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, desc, img }) => (
            <div key={title} className="group overflow-hidden rounded-xl bg-white shadow-sm">
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

/* ───────────────── PRICING ───────────────── */
const plans = [
  {
    name: "বেসিক ভিজিট",
    price: "৪৯৯৳",
    period: "ভিজিট প্রতি",
    features: ["সমস্যা ডায়াগনসিস", "স্ট্যান্ডার্ড রেসপন্স টাইম", "১৫ দিন সার্ভিস ওয়ারেন্টি"],
    highlight: false,
  },
  {
    name: "প্রায়োরিটি ভিজিট",
    price: "৯৯৯৳",
    period: "ভিজিট প্রতি",
    features: ["দ্রুততম রেসপন্স (৩০ মিনিট)", "সিনিয়র টেকনিশিয়ান", "৩০ দিন সার্ভিস ওয়ারেন্টি", "ফ্রি ফলো-আপ ভিজিট"],
    highlight: true,
  },
];

function PricingPlans() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#101720] sm:text-3xl">সার্ভিস চার্জ</h2>
        <p className="mt-2 text-sm text-[#7C8798]">প্রয়োজন অনুযায়ী প্ল্যান বেছে নিন</p>
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
              এই প্ল্যান বেছে নিন
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
          <h2 className="text-2xl font-bold text-black  sm:text-3xl">
            আপনার বাসার যত্ন আজই শুরু হোক
          </h2>
          <p className="mt-3 text-black text-xl font-medium">
            নতুন আপডেট ও অফার পেতে সাবস্ক্রাইব করুন
          </p>
          <form className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className="w-full rounded-lg border-2 border-black px-4 py-2.5 text-sm text-[#101720] placeholder:text-black font-bold focus:outline-none focus:ring-2 focus:ring-[#101720]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-[#101720] px-5 py-2.5 text-sm font-semibold text-white"
            >
              সাবস্ক্রাইব
            </button>
          </form>
        </div>

        <div className="pointer-events-none absolute -right-6 bottom-0 hidden h-full w-64 sm:block">
          <Image
            src="https://images.unsplash.com/photo-1584553421349-3557471bed79?w=500&q=80"
            alt="সন্তুষ্ট গ্রাহক"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
