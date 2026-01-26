'use client'

import Headers from "@/components/headers"
import AlertCards from "@/components/alertCards"
import Events from "@/components/events"

export default function Alerts() {
  return (
     <main className="min-h-screen bg-[#F2EFF9] px-6 pt-20">
     <div className="mx-30">

      <Headers
  title="Alerts"
  subtitle="Stay updated with health programs."
  icon="bell"
/>


        {/* Personal Info */}
        <section>
          <h1 className="text-2xl font-semibold text-[#3F2870]">
           Today
          </h1>

         <AlertCards />
        </section>

        {/* Checkup History */}
        <section>
          <h1 className="text-2xl font-semibold text-[#3F2870] mb-4">
            UpComing Events
          </h1>

          <div className="space-y-3">
            <Events />
            <Events />
          </div>
        </section>

      </div>
    </main>
  )
}
