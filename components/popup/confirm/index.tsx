// src/components/ConfirmPopup.tsx
'use client';

import Image, { StaticImageData } from 'next/image';
import React, { MouseEvent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from '../overlay';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  image: StaticImageData | string;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
}

export const ConfirmPopup = ({
  open: isOpen,
  onClose,
  onConfirm,
  onCancel,
  image,
  title,
  description,
  confirmLabel,
  cancelLabel,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isOpen) {
    return null;
  }

  const handlePopupClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  if (isMounted) {
    const popupRoot = document.getElementById('popup-root');
    if (!popupRoot) {
      console.error('The element #popup-root was not found');
      return null;
    }
    return ReactDOM.createPortal(
      <Overlay onClose={onClose}>
        <div
          className="bg-white rounded-[10px] px-5 py-8 w-full flex flex-col items-center"
          onClick={handlePopupClick}
        >
          <div className="flex flex-col items-center gap-4">
            <Image src={image} alt="popup-character" width={140} height={110} priority />
            <div className="flex flex-col items-center text-center gap-3">
              <h2 className="text-[22px] font-pretendard font-bold leading-[130%] text-center text-[#202020] whitespace-pre-line">
                {title}
              </h2>
              <p className="text-sm font-pretendard font-medium leading-[140%] text-center text-[#898989] whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full flex gap-3 px-5 pt-3">
            <button
              onClick={onCancel}
              className="w-full py-[14px] bg-[#7C7C7C] text-white rounded-[10px] font-pretendard font-semibold text-base leading-[150%] text-center"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className="w-full py-[14px] bg-[#202020] text-white rounded-[10px] font-pretendard font-semibold text-base leading-[150%] text-center"
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </Overlay>,
      popupRoot,
    );
  }
  return null;
};
