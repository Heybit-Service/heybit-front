import CameraIcon from '@/assets/icon/camera.svg';

export const Upload = () => {
  return (
    <div className="w-[90px] h-[90px] flex flex-col justify-center items-center gap-2 bg-white">
      <CameraIcon />
      <span className="font-pretendard font-medium text-xs text-[#A8A8A8] leading-[140%] tracking-[0%] text-center">
        이미지 업로드
      </span>
    </div>
  );
};
