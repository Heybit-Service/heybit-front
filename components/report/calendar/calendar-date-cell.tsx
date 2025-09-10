"use client"

interface CalendarDateCellProps {
  date: number
  amount?: number
  isCurrentMonth: boolean
  isToday?: boolean
  onClick?: (date: number) => void
}

export function CalendarDateCell({ date, amount, isCurrentMonth, isToday = false, onClick }: CalendarDateCellProps) {
  const formatAmount = (amount: number) => {
    const isPositive = amount >= 0
    const formattedAmount = Math.abs(amount).toLocaleString("ko-KR")
    return {
      text: `${isPositive ? "+" : "-"}${formattedAmount}`,
      color: isPositive ? "#0ec189" : "#e74a27",
    }
  }

  const handleClick = () => {
    if (isCurrentMonth && onClick) {
      onClick(date)
    }
  }

  if (!isCurrentMonth) {
    return <div className="aspect-square" />
  }

  const amountInfo = amount !== undefined ? formatAmount(amount) : null

  return (
    <button
      onClick={handleClick}
      className={`
        aspect-square p-1 flex flex-col items-center justify-center text-xs
        hover:bg-[#f7f7f7] transition-colors rounded-lg
        ${isToday ? "bg-[#cff3e7] text-[#0ec189] font-semibold" : ""}
      `}
    >
      <span className={`text-sm ${isToday ? "text-[#0ec189]" : "text-[#1c1b1f]"}`}>{date}</span>
      {amountInfo && (
        <span className="text-[10px] font-medium leading-tight" style={{ color: amountInfo.color }}>
          {amountInfo.text}
        </span>
      )}
    </button>
  )
}
