"use client"

import { useState, useEffect } from "react"

const STEPS = [
  {
    num: "01",
    title: "Copilot Rollout",
    desc: "Microsoft 365, configured",
    file: "deployment/copilot",
    lang: "bash",
    code: [
      { type: "comment", text: "# Enable Microsoft 365 Copilot" },
      { type: "command", text: "deploy copilot --tenant client" },
      { type: "gap" },
      { type: "comment", text: "# Configure for your departments" },
      { type: "command", text: "configure --dept sales,finance" },
      { type: "gap" },
      { type: "output", text: "✓ Licenses assigned" },
      { type: "output", text: "✓ Data boundaries set" },
      { type: "output", text: "✓ Ready for your team" },
    ],
  },
  {
    num: "02",
    title: "Workflow Automation",
    desc: "Make.com & n8n pipelines",
    file: "automations/invoices.flow",
    lang: "yaml",
    code: [
      { type: "comment", text: "// When an invoice arrives by email" },
      { type: "keyword", text: "trigger", after: " ", keyword2: "on", string: " 'email.received'" },
      { type: "gap" },
      { type: "prop", key: "  extract", val: "'vendor, total, date'" },
      { type: "prop", key: "  validate", val: "true" },
      { type: "prop", key: "  post_to", val: "'ERP'" },
      { type: "prop", key: "  notify", val: "'finance team'" },
      { type: "gap" },
      { type: "success", text: "✓ 1,240 invoices/mo automated" },
    ],
  },
  {
    num: "03",
    title: "AI Literacy Training",
    desc: "Bilingual, role-based",
    file: "training/curriculum",
    lang: "markdown",
    code: [
      { type: "comment", text: "# Employee AI Literacy Program" },
      { type: "output", text: "  Module 1 — AI foundations" },
      { type: "output", text: "  Module 2 — Prompting that works" },
      { type: "output", text: "  Module 3 — Tools for your role" },
      { type: "output", text: "  Module 4 — Responsible AI use" },
      { type: "gap" },
      { type: "success", text: "✓ Delivered in Arabic & English" },
    ],
  },
  {
    num: "04",
    title: "Augmented Analytics",
    desc: "Power BI with Copilot",
    file: "analytics/dashboard",
    lang: "bash",
    code: [
      { type: "comment", text: "# Power BI + Copilot" },
      { type: "command", text: "ask 'why did Q2 sales dip?'" },
      { type: "gap" },
      { type: "output", text: "  Analyzing 6 data sources..." },
      { type: "output", text: "  Surfacing key drivers..." },
      { type: "gap" },
      { type: "success", text: "✓ Insight generated in seconds" },
      { type: "url", text: "  → live KPI dashboard" },
    ],
  },
]

function CodeLine({ line }: { line: (typeof STEPS)[0]["code"][0] }) {
  if (line.type === "gap") return <div className="h-3" />
  if (line.type === "comment") return <div className="text-[#9ca3af]">{line.text}</div>
  if (line.type === "output") return <div className="text-[#6b7280]">{line.text}</div>
  if (line.type === "success") return <div className="text-[#16a34a]">{line.text}</div>
  if (line.type === "url") return <div className="text-[#2563eb] underline">{line.text}</div>
  if (line.type === "command") return (
    <div>
      <span className="text-[#16a34a]">$ </span>
      <span className="text-[#111]">{line.text}</span>
    </div>
  )
  if (line.type === "plain") return <div className="text-[#111]">{line.text}</div>
  if (line.type === "prop") return (
    <div>
      <span className="text-[#2563eb]">{line.key}</span>
      <span className="text-[#111]">: </span>
      <span className="text-[#16a34a]">{line.val}</span>
      <span className="text-[#111]">,</span>
    </div>
  )
  if (line.type === "keyword") return (
    <div>
      <span className="text-[#7c3aed]">{line.text}</span>
      <span className="text-[#111]">{line.after}</span>
      <span className="text-[#7c3aed]">{line.keyword2}</span>
      {line.keyword3 && <span className="text-[#7c3aed]">{line.keyword3}</span>}
      {line.fn && <span className="text-[#b45309]">{line.fn}</span>}
      {line.args && <span className="text-[#111]">{line.args}</span>}
      {line.string && <span className="text-[#16a34a]">{line.string}</span>}
    </div>
  )
  return null
}

export function DevExSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  function selectStep(i: number) {
    if (i === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(i)
      setVisible(true)
    }, 180)
  }

  // Auto-advance every 3s
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive(prev => (prev + 1) % STEPS.length)
        setVisible(true)
      }, 180)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  const step = STEPS[active]

  return (
    <section id="devex" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.06] text-[10px] tracking-widest text-black/40 uppercase">
            What We Deliver
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
            Built for your team.<br />Run by experts.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
          {/* Left — 4 clickable step cards, equal height, no flex stretch */}
          <div className="flex flex-col gap-3">
            {STEPS.map((s, i) => (
              <button
                key={s.num}
                onClick={() => selectStep(i)}
                className="flex-1 text-left rounded-2xl border transition-all duration-200 p-6 group"
                style={{
                  background: active === i ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.7)",
                  borderColor: active === i ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.06)",
                  boxShadow: active === i
                    ? "0 1px 3px rgba(0,0,0,0.06)"
                    : "0 1px 2px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-light shrink-0 transition-colors duration-200"
                    style={{
                      background: active === i ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)",
                      color: active === i ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.35)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm font-light transition-colors duration-200"
                      style={{ color: active === i ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.5)" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(0,0,0,0.28)" }}>{s.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right — fixed-size code panel */}
          <div
            className="lg:col-span-2 rounded-2xl border border-black/[0.06] p-8 flex flex-col"
            style={{
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              minHeight: "360px",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5 shrink-0">
              <div
                className="text-[10px] tracking-widest uppercase transition-all duration-200"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 200ms ease, filter 200ms ease",
                  color: "rgba(0,0,0,0.3)",
                }}
              >
                {step.file}
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map(d => (
                  <div
                    key={d}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: d === active % 3 ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.08)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Code block — fixed height, content doesn't affect layout */}
            <div className="flex-1 rounded-xl p-6 overflow-hidden" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div
                className="font-mono text-[12px] leading-6"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(6px)",
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 220ms cubic-bezier(0.16,1,0.3,1), filter 220ms cubic-bezier(0.16,1,0.3,1), transform 220ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {step.code.map((line, i) => (
                  <CodeLine key={i} line={line} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
