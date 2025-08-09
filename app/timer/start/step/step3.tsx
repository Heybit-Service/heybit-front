import Image from 'next/image';
import Title from '@/assets/timer/start/step3/title.png';
import Character from '@/assets/timer/start/step3/character.png';

export const Step3 = () => {
  return (
    <div className="flex flex-col items-center gap-18">
      <Image src={Title} alt="title" />
      <Image className="px-4" src={Character} alt="character" />
    </div>
  );
};
