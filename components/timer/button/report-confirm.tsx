import Link from 'next/link';

export const ReportConfirmButton = () => {
  return (
    <Link
      href="/dashboard/report"
      className="block w-full py-4 bg-[#202020] font-pretendard font-semibold text-lg leading-[150%] text-center text-white rounded-[10px]"
    >
      소비 리포트 확인
    </Link>
  );
};
