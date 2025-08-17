'use client';

import { useEffect } from 'react';
import { useRef } from 'react';

const ITEM_HEIGHT = 56;
const VISIBLE_ITEMS = 3;
const PICKER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const SCROLL_DEBOUNCE_TIME = 180;

interface Props {
  options: (string | number)[];
  value: string | number;
  onChange: (value: string | number) => void;
}

export const Column = ({ options, value, onChange }: Props) => {
  const paddedOptions = ['', ...options, ''];
  const scrollRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const selectedIndex = paddedOptions.indexOf(value);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!scrollRef.current) return;
      const nextIndex = Math.round(scrollRef.current.scrollTop / ITEM_HEIGHT) + 1;
      const nextValue = paddedOptions[nextIndex];
      if (nextValue !== undefined && nextValue !== '' && nextValue !== value) {
        onChange(nextValue);
      }
    }, SCROLL_DEBOUNCE_TIME);
  };

  useEffect(() => {
    if (scrollRef.current && selectedIndex > 0) {
      scrollRef.current.scrollTo({
        top: (selectedIndex - 1) * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  }, [value, selectedIndex]);

  return (
    <div className="w-[62px]">
      <ul
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative list-none m-0 p-0 w-full overflow-y-scroll hide-scrollbar"
        style={{ height: `${PICKER_HEIGHT}px` }}
      >
        {paddedOptions.map((item, index) => {
          const isPadding = item === '';
          const isSelected = index === selectedIndex;
          return (
            <li
              key={index}
              className={`flex items-center justify-center font-medium text-[28px] transition-all duration-200 ease-in-out ${
                isSelected ? 'text-[#202020]' : ' text-[#0000004D]'
              } ${isPadding ? '' : 'border-b-[1.8px] border-[#EAEAEA]'}`}
              style={{ height: `${ITEM_HEIGHT}px` }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
