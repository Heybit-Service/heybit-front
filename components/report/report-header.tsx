"use client"

interface ReportHeaderProps {
  userName?: string
  currentDate: Date
  onPrevMonth: () => void
  onNextMonth: () => void
}

export function ReportHeader({ userName = "텅장지켜", currentDate, onPrevMonth, onNextMonth }: ReportHeaderProps) {
  const monthText = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`

  return (
    <div className="bg-white px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onPrevMonth}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-lg">‹</span>
        </button>

        <div className="flex items-center gap-1">
          <h3 className="text-lg font-medium text-black">{monthText}</h3>
        </div>

        <button
          onClick={onNextMonth}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-lg">›</span>
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-medium text-black mb-2">{userName}님,</h2>
        <p className="text-base text-gray-500 leading-relaxed">헤이빗과 함께 이 달은 얼마나 절제했을까요?</p>
      </div>
    </div>
  )
}
