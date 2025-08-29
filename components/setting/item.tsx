interface Props {
  label: string;
  onClick: () => void;
}

export const SettingItem = ({ label, onClick }: Props) => {
  return (
    <button
      className="w-full py-5 border-b text-left"
      style={{ borderColor: '#E8E8E8' }}
      onClick={onClick}
    >
      <span
        className="font-medium text-lg leading-[150%] align-middle"
        style={{ fontFamily: 'Pretendard' }}
      >
        {label}
      </span>
    </button>
  );
};
