import Image from 'next/image';
import Title from '@/assets/timer/start/step4/title.png';
import Character from '@/assets/timer/start/step4/character.png';

export const Step4 = () => {
  return (
    <div className="flex flex-col items-center gap-18">
      <Image src={Title} alt="title" />
      <Image className="px-4" src={Character} alt="character" />
    </div>
  );
};
