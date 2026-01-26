'use client'

import Headers from "@/components/headers"
import Cards from "@/components/carCards"

export default function Card() {
  return (
     <main className="min-h-screen bg-[#F2EFF9] px-6 pt-20">
     <div className="mx-30">

       <Headers
  title="Upcoming Checkups"
  subtitle="Your complete prenatal record."
  icon="calendar"
/>


        {/* Personal Info */}
        <section>
          <h1 className="text-2xl font-semibold text-[#3F2870]">
            Personal Information
          </h1>

          <div className="mt-4 rounded-2xl border border-[#3F2870] bg-[#F2EFF9] p-5">

            <div className="grid grid-cols-2 gap-y-3 text-sm">

              <p className="font-bold text-[#3F2870]">Name:</p>
              <p className="text-right fond-bold text-black font-bold">Maria Clara</p>

              <p className="font-bold text-[#3F2870]">Age:</p>
              <p className="text-right fond-bold text-black font-bold">28</p>

              <p className="font-bold text-[#3F2870]">Address:</p>
              <p className="text-right fond-bold text-black font-bold">Naga, Camarines Sur</p>

            </div>
          </div>
        </section>

        {/* Checkup History */}
        <section>
          <h1 className="text-2xl font-semibold text-[#3F2870] mb-4">
            Checkup History
          </h1>

          <div className="space-y-3">
            <Cards />
            <Cards />
          </div>
        </section>

        {/* Vaccination */}
        <section>
          <h1 className="text-2xl font-semibold text-[#3F2870] mb-4">
            Vaccination Record
          </h1>

          <div className="space-y-3">
            <Cards />
          </div>
        </section>

      </div>
    </main>
  )
}
