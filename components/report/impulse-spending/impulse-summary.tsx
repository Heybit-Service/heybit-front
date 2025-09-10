import type { ImpulseData } from "@/lib/impulse-types"

interface ImpulseSummaryProps {
  data: ImpulseData
}

export function ImpulseSummary({ data }: ImpulseSummaryProps) {
  return (
    <div className="mb-6">
      <p className="text-gray-700 text-sm leading-relaxed">
        <span className="font-medium text-gray-900">{data.summary.primaryDay}</span>과{" "}
        <span className="font-medium text-gray-900">{data.summary.primaryTime}</span> 시간에 충동 소비 욕구를 주로
        느꼈어요
      </p>
    </div>
  )
}
