import EmptyCharacter from '@/assets/timer/completed/empty_character.png';
import Image from 'next/image';

export const Empty = () => {
  return (
    <div className="h-full">
      <Image className="pt-33 px-12" src={EmptyCharacter} alt="completed-empty-character" />
    </div>
  );
};
