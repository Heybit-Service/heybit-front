interface Props {
  x?: number;
  y?: number;
  width?: number;
  value?: number;
  payload?: {
    month: string;
  };
  highlightMonth?: string;
}

export function AmountLabel({ x, y, width, value, payload, highlightMonth }: Props) {
  if (!x || !y || !width || !value) return null;

  // payload에서 month 데이터 접근
  const monthValue = payload?.month;
  const isHighlighted = monthValue === highlightMonth;

  return (
    <text
      x={x + width / 2}
      y={y - 8}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{
        fill: isHighlighted ? '#0EC189' : '#A8A8A8',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0%',
      }}
    >
      {value.toLocaleString()}원
    </text>
  );
}
