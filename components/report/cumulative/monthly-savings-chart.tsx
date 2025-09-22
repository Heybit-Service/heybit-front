import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';
import { AmountLabel } from './amount-label';
import { MonthTick } from './month-tick';

interface MonthlyData {
  month: string;
  amount: number;
}

interface Props {
  data: MonthlyData[];
  highlightMonth?: string;
}

interface XAxisTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
  [key: string]: unknown;
}

interface BarLabelProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  index?: number;
  [key: string]: unknown;
}

export function MonthlySavingsChart({ data, highlightMonth = '7월' }: Props) {
  const CustomTick = (props: XAxisTickProps) => (
    <MonthTick {...props} highlightMonth={highlightMonth} />
  );

  const CustomLabel = (props: BarLabelProps) => {
    const dataIndex = props.index ?? 0;
    const monthData = data[dataIndex];
    return (
      <AmountLabel
        {...props}
        payload={{ month: monthData?.month }}
        highlightMonth={highlightMonth}
      />
    );
  };

  return (
    <div className="w-full" style={{ height: '215px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, left: 20, right: 20 }}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={<CustomTick />}
            tickMargin={9}
          />
          <Bar
            dataKey="amount"
            fill="#CFF3E7"
            radius={[2, 2, 0, 0]}
            maxBarSize={12}
            label={<CustomLabel />}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill="#CFF3E7" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
