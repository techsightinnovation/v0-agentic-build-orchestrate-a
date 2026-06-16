"use client"

import React from "react"
import { PixelIcon } from "@/components/pixel-icon"
import Link from "next/link"

const CASE_STUDIES = [
  {
    industry: "REAL ESTATE",
    title: "Dubai brokerage cuts listing turnaround by 60% with AI",
    tagline: "From 3 hours per listing to 45 minutes — without adding headcount.",
    metrics: [
      { value: "60%", label: "faster listings" },
      { value: "3x", label: "leads handled" },
      { value: "12h", label: "saved per agent/week" },
    ],
    challenge: "A 40-person real estate brokerage in DIFC was spending 15+ hours per agent per week manually drafting listing copy, qualifying inbound leads, and processing tenancy documents. With a lean operations team, they couldn't scale without hiring 3 more admin staff.",
    solution: "We deployed Microsoft 365 Copilot for listing drafting and email summarization, connected their CRM to an n8n workflow that automatically qualifies and routes leads by property type and budget, and trained their Arabic-speaking agents on prompt engineering for bilingual listings.",
    results: [
      "Listing turnaround dropped from 3 hours to 45 minutes",
      "Lead response time improved from 2 hours to under 8 minutes",
      "Tenancy document processing went from 2 days to same-day",
      "Agents reclaimed 12 hours per week for showings and closing",
    ],
  },
  {
    industry: "LOGISTICS",
    title: "Sharjah distributor reduces operational costs by 28%",
    tagline: "Inventory forecasting and automated reporting across 3 warehouses.",
    metrics: [
      { value: "28%", label: "cost reduction" },
      { value: "24/7", label: "real-time tracking" },
      { value: "5x", label: "faster reports" },
    ],
    challenge: "A mid-market trading and distribution company in Sharjah with 3 warehouses was running inventory on spreadsheets. Stockouts cost them an estimated AED 120K per quarter in lost sales, while their operations manager spent 15 hours weekly compiling reports for leadership.",
    solution: "We built a Power BI dashboard connected to their ERP and WMS, implemented Azure AI-based demand forecasting using 3 years of historical sales data, and automated their weekly operational report generation with Make.com workflows.",
    results: [
      "Stockouts reduced by 40%, recovering ~AED 100K/quarter in lost sales",
      "Operational reports generated automatically — 5x faster than manual",
      "Warehouse staff retrained from spreadsheet tracking to dashboard-first workflows",
      "ROI achieved within 4 months of deployment",
    ],
  },
  {
    industry: "PROFESSIONAL SERVICES",
    title: "Abu Dhabi law firm reclaims 70% of admin hours",
    tagline: "Contract review, drafting, and billing — augmented by AI.",
    metrics: [
      { value: "70%", label: "admin saved" },
      { value: "12h", label: "reclaimed/week" },
      { value: "2x", label: "matter throughput" },
    ],
    challenge: "A 25-lawyer firm in Abu Dhabi was billing by the hour but losing 30-40% of fee-earner time to document review, contract comparisons, and manual time entry. Associates were spending up to 12 hours per week on non-billable admin work.",
    solution: "We deployed ChatGPT Enterprise with a custom knowledge base of UAE legal precedents and contract templates, implemented Copilot for Microsoft 365 to automate meeting notes and action items, and connected their practice management system to an automated time-capture workflow.",
    results: [
      "Associates reclaimed 12+ hours per week for billable work",
      "Contract first-draft time reduced from 4 hours to 45 minutes",
      "Fee-earner utilization improved from 62% to 84%",
      "Firm saw 22% revenue uplift within one quarter",
    ],
  },
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04]">
      {children}
    </span>
  )
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      <div className="h-24" />

      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="agents" size={40} />
            <div className="mt-4"><Tag>CASE STUDIES</Tag></div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              AI in action across<br />the GCC.
            </h1>
            <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-md">
              Real results from SMEs that deployed practical AI with TechSight. Each engagement was tailored to the industry, the team, and the budget.
            </p>
          </div>

          <div className="space-y-12">
            {CASE_STUDIES.map((cs, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden"
              >
                {/* Header */}
                <div className="p-8 md:p-10 pb-6">
                  <div className="flex items-start justify-between mb-5">
                    <Tag>{cs.industry}</Tag>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-[1.15] mb-3">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-black/45 leading-relaxed">
                    {cs.tagline}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-black/[0.06]">
                    {cs.metrics.map(m => (
                      <div key={m.label}>
                        <div className="text-3xl font-light">{m.value}</div>
                        <div className="text-[11px] text-black/35 tracking-widest mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[0.06]">
                  <div className="p-8 md:p-10 md:col-span-1 border-b md:border-b-0 md:border-r border-black/[0.06]">
                    <h3 className="text-xs text-black/30 tracking-widest uppercase mb-4">The Challenge</h3>
                    <p className="text-sm text-black/55 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="p-8 md:p-10 md:col-span-1 border-b md:border-b-0 md:border-r border-black/[0.06]">
                    <h3 className="text-xs text-black/30 tracking-widest uppercase mb-4">The Solution</h3>
                    <p className="text-sm text-black/55 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="p-8 md:p-10 md:col-span-1">
                    <h3 className="text-xs text-black/30 tracking-widest uppercase mb-4">Results</h3>
                    <ul className="space-y-3">
                      {cs.results.map(r => (
                        <li key={r} className="flex items-start gap-3 text-sm text-black/55">
                          <span className="w-1 h-1 rounded-full bg-black/25 shrink-0 mt-2" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
              Ready to build your own story?
            </h2>
            <p className="text-sm text-black/45 mb-8 max-w-md mx-auto">
              Book a free AI Readiness consultation and discover what&apos;s possible for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-3.5 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
