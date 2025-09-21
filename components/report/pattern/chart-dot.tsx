import { Dot } from 'recharts';

interface Props {
  cx?: number;
  cy?: number;
  payload?: {
    count: number;
    isMax: boolean;
  };
}

export function ChartDot({ cx, cy, payload }: Props) {
  if (!cx || !cy || !payload) return null;
  const { count, isMax } = payload;
  return (
    <>
      <Dot cx={cx} cy={cy} r={2} fill="#E74A27" />
      {isMax && <Dot cx={cx} cy={cy} r={3} fill="#E74A27" />}
      {isMax && (
        <foreignObject x={cx - 15} y={cy - 20} width="30" height="15">
          <div
            className="font-medium text-[12px] leading-[140%] tracking-[0%] text-center text-[#FF0000]"
            style={{
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            {count}회
          </div>
        </foreignObject>
      )}
    </>
  );
}
