'use client'
import { MdPregnantWoman } from 'react-icons/md'

type Props = {
  currentWeek?: number // optional, defaults to 24
}

export default function DashboardHeader({ currentWeek = 10 }: Props) {
  const TOTAL_WEEKS = 40
  const progressPercent = Math.min((currentWeek / TOTAL_WEEKS) * 100, 100)

  return (
    <section className="">
      <div className="flex items-center gap-5 rounded-2xl border border-[#3F2870] bg-[#F2EFF9] p-6">

        {/* Female Icon / Avatar */}
        <div className="flex h-14 w-14 items-center justify-center  border-[#3F2870] text-[#3F2870]">
          <MdPregnantWoman size={70} />

        </div>

        {/* Text + Progress */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-[#3F2870]">
            Marhay ng Aga, Ma'am!
          </h1>

          <p className="mt-1 text-sm text-[#3F2870] opacity-80">
            Your {currentWeek}th week progress
          </p>

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="h-10 w-full rounded-full bg-[#F2EFF9] border border-[#3F2870] overflow-hidden">
              <div
                className="h-full bg-[#3F2870] transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="mt-1 text-xs text-[#3F2870]">
              {Math.round(progressPercent)}% complete
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
