interface Props {
  topCategory: string;
  topAmount: number;
}

export function CategorySummary({ topCategory, topAmount }: Props) {
  return (
    <div className="mb-6 mt-6">
      <p className="text-gray-600 text-sm mb-1">한달 동안 가장 많이 소비한 카테고리는</p>
      <p className="text-lg font-medium mb-2">
        <span className="font-bold">{topCategory}</span>로 총{' '}
        <span className="font-bold">{topAmount.toLocaleString()}원</span>을 사용했어요
      </p>
    </div>
  );
}
