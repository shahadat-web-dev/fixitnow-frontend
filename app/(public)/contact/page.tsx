/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office",
    detail: "House 12, Road 5, Gulshan, Dhaka 1212",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+880 1700-000000",
    href: "tel:+8801700000000",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "support@fixitnow.com",
    href: "mailto:support@fixitnow.com",
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "Every day, 8:00 AM – 10:00 PM",
  },
];

const faqs = [
  {
    q: "How fast can a technician arrive?",
    a: "Most bookings get matched with a technician within 12 minutes, and typical arrival time is under an hour for standard requests.",
  },
  {
    q: "Is payment held until the job is done?",
    a: "Yes. Payment is only captured once you confirm the booking, and funds are released to the technician after job completion.",
  },
  {
    q: "Can I cancel a booking?",
    a: "You can cancel any booking that hasn't reached the In-Progress stage directly from your dashboard.",
  },
];

export default function ContactPage() {
  const [values] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-[#101720]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#F5A623]">
            <MessageCircle className="h-3.5 w-3.5" />
            Get In Touch
          </span>
          <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Were here to help
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#9AA4B2]">
            Questions about a booking, a technician, or a payment? Send us a
            message and our support team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* ── Contact info + form ── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-[#101720]">Contact Information</h2>
            <p className="mt-2 text-sm text-[#7C8798]">
              Reach out directly, or use the form and well respond within one
              business day.
            </p>

            <div className="mt-8 space-y-5">
              {contactInfo.map(({ icon: Icon, title, detail, href }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#101720]/5">
                    <Icon className="h-5 w-5 text-[#101720]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#101720]">{title}</p>
                    {href ? (
                      <a href={href} className="text-sm text-[#7C8798] hover:text-[#F5A623]">
                        {detail}
                      </a>
                    ) : (
                      <p className="text-sm text-[#7C8798]">{detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border border-slate-100">
              <iframe
                title="FixItNow office location"
                src="https://www.google.com/maps?q=Gulshan,Dhaka&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                  <h3 className="mt-4 text-lg font-bold text-[#101720]">
                    Message received
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-[#7C8798]">
                    Thanks for reaching out. Our support team will reply to
                    your email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-lg bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#101720]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-[#101720]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Your name"
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A623]/40"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-[#101720]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A623]/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#101720]">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={values.subject}
                      placeholder="What's this about?"
                      required
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A623]/40"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#101720]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      rows={5}
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A623]/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-lg bg-[#101720] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1c2735] disabled:opacity-60"
                  >
                   
                      <span className="loading loading-spinner loading-sm" />
                    
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                   
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-[#101720]">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-slate-200 bg-white px-5 py-4 open:border-[#F5A623]/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#101720]">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-[#F5A623] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#7C8798]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}