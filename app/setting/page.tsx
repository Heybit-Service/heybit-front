import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';

const Page = () => {
  return (
    <div className="h-dvh bg-[#F7F7F7]">
      <AppBar title="설정" leadings={<BackButton />} />
    </div>
  );
};

export default Page;
