'use client'

export default function AlertCards() {
  return (
    <div className="flex rounded-2xl border border-[#3F2870] bg-[#F2EFF9] overflow-hidden">

    

      <div className="flex w-full items-start space-x-16 p-5 ">

     
    
         <div className=" "><h1 className="text-black text-2xl font-bold"> Barangay Health Center</h1></div>
       

        {/* Content */}
        <div>
          <h1 className="text-base font-extrabold text-[#3F2870]">
           Maternal Check-up Day
          </h1>

          <p className="mt-1 text-sm text-[#1B1530] opacity-80">
        Free prenatal check-ups, blood pressure monitoring, and maternal health consultations at your Barangay Health Center.
          </p>
        </div>

      </div>
    </div>
  )
}
