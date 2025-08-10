'use client';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export const Overlay = ({ children, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-[#202020CC] flex justify-center items-center z-50 px-8"
      onClick={onClose}
    >
      {children}
    </div>
  );
};
