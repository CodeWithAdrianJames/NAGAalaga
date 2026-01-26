import DashboardHeader from "@/components/dashboardHeader"
import { BiCalendar, BiHeart } from "react-icons/bi"
import DashboardDivs from "@/components/dashBoardDivs"
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#F2EFF9] px-6 pt-20">
     <div className="mx-30">
         <DashboardHeader />

      {/* Quick Actions */}
      <h1 className="mt-10 text-2xl font-semibold text-[#3F2870]">
        Quick Actions
      </h1>

      <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Next Checkup */}
        <div className="flex items-center gap-4 rounded-2xl border border-[#3F2870] bg-[#F2EFF9] p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3F2870] text-[#3F2870]">
            <BiCalendar size={24} />
          </div>

          <div>
            <h2 className="font-semibold text-[#3F2870]">Next Checkup</h2>
            <p className="text-sm text-[#3F2870] opacity-80">
              January 20, 2026
            </p>
          </div>
        </div>

        {/* Health Log */}
        <div className="flex items-center gap-4 rounded-2xl border border-[#3F2870] bg-[#F2EFF9] p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3F2870] text-[#3F2870]">
            <BiHeart size={24} />
          </div>

          <div>
            <h2 className="font-semibold text-[#3F2870]">Health Log</h2>
            <p className="text-sm text-[#3F2870] opacity-80">
              Normal
            </p>
          </div>
        </div>

      </section>

       <h1 className="mt-10 text-2xl font-semibold text-[#3F2870]">
        Barangay Notifications
      </h1>

     <div className="">
         <DashboardDivs />
          <DashboardDivs />
           <DashboardDivs />
     </div>
     </div>
    </main>
  )
}
