'use client';

import { useState, useRef, ChangeEvent } from 'react';
import CameraIcon from '@/assets/icon/camera.svg';
import Asterisk from '@/assets/timer/create/asterisk.svg';

interface Props {
  onChange: (value: string) => void;
}

export const Upload = ({ onChange }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreview(base64String);
      onChange(base64String);
    };
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleChanged}
        className="hidden"
      />
      <div
        className="relative w-[90px] h-[90px] flex flex-col justify-center items-center gap-2 bg-white cursor-pointer"
        onClick={handleClick}
      >
        {preview && <img src={preview} alt="미리보기" className="w-full h-full object-contain" />}
        {!preview && (
          <>
            <CameraIcon />
            <span className="font-pretendard font-medium text-xs text-[#A8A8A8] leading-[140%] tracking-[0%] text-center">
              이미지 업로드
            </span>
            <Asterisk className="absolute right-[10px] top-[10px]" />
          </>
        )}
      </div>
    </>
  );
};
