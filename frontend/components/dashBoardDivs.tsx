'use client'

import { FaCheck } from "react-icons/fa"

export default function DashboardDivs(){
    return(
        <section className="py-3">
             <div className="flex items-center gap-5 rounded-2xl border border-[#3F2870] bg-[#F2EFF9] p-6">
       
               {/* Female Icon / Avatar */}
               <div className="flex h-14 w-14 items-center justify-center  border-[#3F2870] text-[#3F2870]">
                 <FaCheck size={40} />
       
               </div>
       
               {/* Text + Progress */}
               <div className="flex-1">
                 <h1 className="text-2xl font-extrabold text-[#3F2870]">
                   Vaccination Drive
                 </h1>
       
                 <p className="mt-1 text-sm text-[#3F2870] opacity-80">
                  Brgy. Minglanilla Hall - Today, 9 am
                 </p>
       
              
               </div>
             </div>
           </section>
    )
}