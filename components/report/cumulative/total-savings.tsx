import { CUMULATIVE_STYLES, CUMULATIVE_TEXT } from '@/lib/cumulative-config';
import type { TotalSavingsProps } from '@/lib/cumulative-types';

export function TotalSavings({ totalAmount }: TotalSavingsProps) {
  // const styles = {
  //   backgroundColor: customStyles?.backgroundColor || CUMULATIVE_STYLES.colors.primaryLight,
  //   textColor: customStyles?.textColor || CUMULATIVE_STYLES.colors.primaryDark,
  //   pillColor: customStyles?.pillColor || CUMULATIVE_STYLES.colors.primary,
  // };

  return (
    <div className="space-y-3">
      <h2
        className="font-bold"
        style={{
          color: CUMULATIVE_STYLES.colors.gray[900],
          fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '140%',
          letterSpacing: '0%',
        }}
      >
        {CUMULATIVE_TEXT.totalSavings}
      </h2>
      <div
        className="flex items-center gap-2"
        style={{
          fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '140%',
          letterSpacing: '0%',
          alignItems: 'middle',
          color: '#0a8a5c',
        }}
      >
        <span>총</span>
        <span
          style={{
            backgroundColor: '#CFF3E7',
            color: '#0a8a5c',
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingLeft: '12px',
            paddingRight: '12px',
            borderRadius: '4px',
          }}
        >
          {totalAmount.toLocaleString()}원
        </span>
        <span>{CUMULATIVE_TEXT.savedAmount}</span>
      </div>
    </div>
  );
}
