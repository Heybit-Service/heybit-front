export const SizedBox = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return <div style={{ width, height }} className={className} />;
};
