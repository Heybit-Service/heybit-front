const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

export function Weekdays() {
  return (
    <div className="grid grid-cols-7">
      {DAYS.map((day) => (
        <div
          key={day}
          className="text-center text-xs font-medium leading-[140%] text-[#7C7C7C] align-middle"
          style={{ fontFamily: 'Pretendard' }}
        >
          {day}
        </div>
      ))}
    </div>
  );
}
