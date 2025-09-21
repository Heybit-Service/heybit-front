const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

export function Weekdays() {
  return (
    <div className="grid grid-cols-7 py-2">
      {DAYS.map((day) => (
        <div key={day} className="text-center text-sm text-[#999999] py-2 font-medium">
          {day}
        </div>
      ))}
    </div>
  );
}
