"use client"

import React, { useState } from "react"
import { PixelIcon } from "@/components/pixel-icon"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Something went wrong.")
        return
      }
      setSubmitted(true)
    } catch {
      setError("Network error. Please try again.")
    }
  }

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      {/* Spacer for fixed nav */}
      <div className="h-24" />

      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <PixelIcon type="platform" size={40} />
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04]">
                CONTACT
              </span>
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              Let&apos;s build your<br />AI roadmap.
            </h1>
            <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-md">
              Tell us about your business and goals. We&apos;ll map out where AI can cut costs and drive growth — no commitment required.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-600/20 bg-emerald-50 p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-light mb-2">Thank you, {form.name}!</h2>
              <p className="text-sm text-black/45">We&apos;ll review your message and reach out within 24 hours to schedule your free AI Readiness consultation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-black/40 tracking-widest mb-2">FULL NAME *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/25 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-black/40 tracking-widest mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/25 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-black/40 tracking-widest mb-2">PHONE</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/25 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-black/40 tracking-widest mb-2">SERVICE INTEREST</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] focus:outline-none focus:border-black/25 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="AI Readiness Assessment">AI Readiness Assessment</option>
                    <option value="AI Tool Implementation">AI Tool Implementation</option>
                    <option value="AI Literacy Training">AI Literacy Training</option>
                    <option value="AI Support & Governance">AI Support & Governance</option>
                    <option value="General">General inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-black/40 tracking-widest mb-2">MESSAGE *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business, challenges, and what you're hoping AI can help with..."
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/25 transition-colors resize-y"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium"
              >
                SEND INQUIRY
              </button>

              <p className="text-xs text-black/25 pt-2">We respect your privacy. No spam, no sharing.</p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
