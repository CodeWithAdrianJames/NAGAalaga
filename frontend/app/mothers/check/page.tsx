'use client'

import { useState } from "react"
import Headers from "@/components/headers"
import CheckCards from "@/components/checkCards"

type TriageResult = {
  status: "SAFE" | "MONITOR" | "EMERGENCY"
  message: string
  advice: string
}

export default function Check() {
  const [symptoms, setSymptoms] = useState("")
  const [result, setResult] = useState<TriageResult | null>(null)
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    if (!symptoms.trim()) return

    try {
      setLoading(true)

      const res = await fetch("http://localhost:8080/api/triage/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      })

      const data = await res.json()

      setResult(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F2EFF9] px-6 pt-20">
      <div className="mx-auto max-w-3xl space-y-10">

        <Headers
          title="Check Symptoms"
          subtitle="Describe how you're feeling"
          icon="heart"
        />

        <section className="rounded-2xl bg-[#F2EFF9] p-7 shadow-md">
          <h1 className="text-2xl font-semibold text-[#3F2870] mb-4">
            How are you?
          </h1>

          <textarea
            rows={4}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="I'm feeling..."
           className="w-full resize-none rounded-xl bg-[#E6E1F2] p-4 text-sm text-[#1B1530] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#3F2870]"
          />

          <button
            onClick={handleCheck}
            disabled={loading}
            className="w-full mt-4 rounded-xl bg-[#3F2870] py-3 text-white font-bold disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </section>

        <section>
          <h1 className="text-2xl font-semibold text-[#3F2870] mb-4">
            AI Assessment
          </h1>

          {!result && <p className="text-sm opacity-60">No assessment yet.</p>}

          {result?.status === "SAFE" && <CheckCards variant="safe" data={result} />}
          {result?.status === "MONITOR" && <CheckCards variant="monitor" data={result} />}
          {result?.status === "EMERGENCY" && <CheckCards variant="emergency" data={result} />}
        </section>

      </div>
    </main>
  )
}
