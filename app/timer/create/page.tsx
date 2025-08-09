import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';

const Page = () => {
  return (
    <div className="h-screen bg-[#F7F7F7]">
      <AppBar title="타이머 상품 등록" leadings={<BackButton />} />
    </div>
  );
};

export default Page;
