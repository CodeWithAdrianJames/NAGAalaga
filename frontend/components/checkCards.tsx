'use client'

import { FaShieldAlt } from 'react-icons/fa'
import { MdWarning, MdEmergency } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'

type Props = {
  variant: "safe" | "monitor" | "emergency"
  data: {
    status: string
    message: string
    advice: string
  }
}

export default function CheckCards({ variant, data }: Props) {
  if (variant === "safe") {
    return (
      <section className="mt-6">
        <div className="flex rounded-2xl border border-[#3F2870] bg-[#F2EFF9] overflow-hidden">
          <div className="w-2 bg-[#009A00]" />

          <div className="flex items-center gap-4 p-5">
            <FaShieldAlt size={36} className="text-[#009A00]" />

            <div>
              <h1 className="text-xl font-bold text-[#3F2870]">Safe</h1>
              <p className="text-sm text-[#1B1530]">{data.message}</p>
              <p className="text-xs mt-1 opacity-70">{data.advice}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === "monitor") {
    return (
      <section className="mt-6">
        <div className="flex rounded-2xl border border-[#3F2870] bg-[#F2EFF9] overflow-hidden">
          <div className="w-2 bg-[#FFCC00]" />

          <div className="flex items-center gap-4 p-5">
            <MdWarning size={36} className="text-[#FFCC00]" />

            <div>
              <h1 className="text-xl font-bold text-[#3F2870]">Monitor</h1>
              <p className="text-sm text-[#1B1530]">{data.message}</p>
              <p className="text-xs mt-1 opacity-70">{data.advice}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // EMERGENCY
  return (
    <section className="mt-6">
      <div className="flex rounded-2xl border border-[#3F2870] bg-[#F2EFF9] overflow-hidden">
        <div className="w-2 bg-[#CC0001]" />

        <div className="flex flex-col gap-3 p-5 w-full">

          <div className="flex items-center gap-4">
            <MdEmergency size={36} className="text-[#CC0001]" />

            <div>
              <h1 className="text-xl font-bold text-[#3F2870]">Emergency</h1>
              <p className="text-sm text-[#1B1530]">{data.message}</p>
            </div>
          </div>

          <p className="text-xs opacity-70">{data.advice}</p>

          <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#CC0001] py-2 text-white font-semibold">
            <BiPhoneCall size={18} />
            Call for Help
          </button>

          <div className="text-xs text-[#1B1530]">
            <p>Your BHW has been notified automatically</p>
            <p className="font-semibold">
              Emergency: 911 | Local Hotline: 123-456
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
