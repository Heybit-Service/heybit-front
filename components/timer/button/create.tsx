interface Props {
  onClick: () => void;
  disabled: boolean;
}

export const TimerCreateButton = ({ onClick, disabled }: Props) => {
  const textColor = disabled ? '#5B5B5B' : '#FFFFFF';
  const backgroundColor = disabled ? '#E8E8E8' : '#202020';
  return (
    <button
      className={`w-full bg-[${backgroundColor}] py-4 font-semibold text-xl text-[${textColor}] leading-[150%] text-center rounded-[10px] transition-colors duration-300 ease-in-out`}
      onClick={onClick}
      disabled={disabled}
    >
      등록
    </button>
  );
};
