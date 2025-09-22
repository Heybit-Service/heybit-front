interface Props {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
  highlightMonth?: string;
}

export function MonthTick({ x, y, payload, highlightMonth }: Props) {
  if (!x || !y || !payload) return null;
  const isHighlighted = payload.value === highlightMonth;
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{
        fill: isHighlighted ? '#0EC189' : '#A8A8A8',
        fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0%',
      }}
    >
      {payload.value}
    </text>
  );
}
