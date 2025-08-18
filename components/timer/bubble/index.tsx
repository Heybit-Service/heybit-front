import Background from '@/assets/timer/create/background.png';
import Bubble from '@/assets/timer/create/bubble.png';

interface Props {
  duration: string;
}

const TimerBubble = ({ duration }: Props) => {
  return (
    <div
      className="w-full h-15 flex items-center pl-4"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white rounded-[5px]">
        <div className="px-[31px] py-[9px] flex gap-[3px]">
          <span className="font-extrabold text-sm leading-[140%] text-center text-[#202020]">
            {duration}
          </span>
          <span className="font-medium text-sm leading-[140%] text-center text-[#615F5F]">
            동안 고민해봐
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimerBubble;
