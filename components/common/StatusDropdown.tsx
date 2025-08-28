'use client';

import { useEffect, useRef, useState } from 'react';

type Option = '전체' | '투표중' | '투표완료';

interface StatusDropdownProps {
  className?: string;
  onChange?: (value: Option) => void;
}

export function StatusDropdown({ className = '', onChange }: StatusDropdownProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>('전체');

  const handleSelect = (value: Option) => {
    setSelected(value);
    onChange?.(value);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      const target = e.target as Node | null;
      if (target && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 h-5 text-[13px] leading-[19.5px] text-right text-[#9A9A9A]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="whitespace-nowrap">{selected}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-[#9A9A9A]"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.186l3.71-3.955a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-[1px] z-10 w-[65px] rounded-[3px] border border-[#E6E6E6] bg-white p-2 flex flex-col gap-[10px]">
          {(['전체', '투표중', '투표완료'] as Option[]).map((opt) => (
            <button
              key={opt}
              type="button"
              className={`flex items-center gap-1 h-5 w-full justify-end text-[13px] leading-[19.5px] text-right ${
                selected === opt ? 'text-[#202020] font-medium' : 'text-[#7C7C7C]'
              }`}
              onClick={() => handleSelect(opt)}
              aria-selected={selected === opt}
              role="option"
            >
              <span className="whitespace-nowrap">{opt}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
