interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const VotingPoint = ({ className, style }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="10" cy="10" r="10" fill="#0A906B" />
    </svg>
  );
};
