interface Props {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const FixedBottom = ({ children, style }: Props) => {
  return (
    <div
      style={style}
      className={`md:max-w-[430px] mx-auto fixed bottom-0 left-0 right-0 px-4 pt-[10px] pb-14 bg-[#F7F7F7]`}
    >
      {children}
    </div>
  );
};

export default FixedBottom;
