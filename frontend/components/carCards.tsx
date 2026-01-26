'use client'

export default function Cards() {
  return (
    <div className="flex rounded-2xl border border-[#3F2870] bg-[#F2EFF9] overflow-hidden">

      {/* Left Status Bar */}
      <div className="w-2 bg-[#009A00]" />

      <div className="flex w-full items-start gap-4 p-5">

        {/* Date Badge */}
        <div className="shrink-0 rounded-xl border border-[#3F2870] px-3 py-1 text-xs font-semibold text-[#3F2870]">
          Jan 15, 2026
        </div>

        {/* Content */}
        <div>
          <h1 className="text-base font-bold text-[#3F2870]">
            Prenatal Blood Pressure & Weight Check
          </h1>

          <p className="mt-1 text-sm text-[#1B1530] opacity-80">
            Barangay Calauag Health Center, Naga City
          </p>
        </div>

      </div>
    </div>
  )
}
