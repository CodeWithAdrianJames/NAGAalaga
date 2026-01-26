'use client'

import { FaHeart, FaCalendar, FaBell } from "react-icons/fa"

type HeaderProps = {
  title: string
  subtitle: string
  icon?: "heart" | "calendar" | "bell"
}

export default function Headers({
  title,
  subtitle,
  icon = "heart",
}: HeaderProps) {

  const renderIcon = () => {
    switch (icon) {
      case "calendar":
        return <FaCalendar size={32} />
      case "bell":
        return <FaBell size={32} />
      default:
        return <FaHeart size={32} />
    }
  }

  return (
    <section>
      <div className="flex items-center gap-5 rounded-2xl border border-[#3F2870] bg-[#F2EFF9] p-6">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center text-[#3F2870]">
          {renderIcon()}
        </div>

        {/* Text */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-[#3F2870]">
            {title}
          </h1>

          <p className="mt-1 text-sm text-[#3F2870] opacity-80">
            {subtitle}
          </p>
        </div>

      </div>
    </section>
  )
}
