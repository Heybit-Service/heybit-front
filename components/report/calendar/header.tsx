"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  date: Date
  onPrev: () => void
  onNext: () => void
}

export function Header({ date, onPrev, onNext }: Props) {
  const month = `${date.getFullYear()}년 ${date.getMonth() + 1}월`

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button onClick={onPrev} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeft className="w-5 h-5 text-[#666666]" />
      </button>

      <h2 className="text-lg font-medium text-black">{month}</h2>

      <button onClick={onNext} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronRight className="w-5 h-5 text-[#666666]" />
      </button>
    </div>
  )
}
