interface Props {
  userName?: string;
}

export function UserGreeting({ userName = '텅장지켜' }: Props) {
  return (
    <div className="pt-6 pb-3">
      <h2 className="font-bold text-2xl text-[#202020] leading-[133%] tracking-normal mb-[3px]">
        {userName}님,
      </h2>
      <p className="font-medium text-lg text-[#202020] leading-[150%] tracking-normal">
        헤이빗과 함께 이 달은 얼마나 절제했을까요?
      </p>
    </div>
  );
}
