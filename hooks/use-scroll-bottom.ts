import { useRef } from 'react';

const useScrollBottom = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    const container = ref.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  };

  return { ref, scrollToBottom };
};

export default useScrollBottom;
