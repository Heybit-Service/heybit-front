import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { AlarmItem } from '../../components/alam-center/item';

const Page = () => {
  return (
    <div className="h-dvh bg-[#F7F7F7]">
      <AppBar title="알림" leadings={<BackButton />} />
      <div className="flex flex-col gap-5 py-4 px-4">
        <AlarmItem title="투표 종료" body="투표 종료" voting={true} />
        <AlarmItem title="투표 종료" body="투표 종료" voting={true} />
        <AlarmItem title="투표 종료" body="투표 종료" voting={true} />

        <AlarmItem title="투표 종료" body="투표 종료" voting={false} />

        <AlarmItem title="투표 종료" body="투표 종료" voting={true} />

        <AlarmItem title="투표 종료" body="투표 종료" voting={true} />
      </div>
    </div>
  );
};

export default Page;
