'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { AlarmItem } from '../../components/alam-center/item';
import { useNotifications } from '@/hooks/queries/notification';

const Page = () => {
  const { data: notifications } = useNotifications();

  return (
    <div className="h-dvh bg-[#F7F7F7]">
      <AppBar title="알림" leadings={<BackButton />} />
      <div className="flex flex-col gap-5 py-4 px-4">
        {notifications?.map((notification) => (
          <AlarmItem
            key={notification.id}
            title={notification.title}
            body={notification.message}
            voting={notification.withVote}
          />
        ))}
        {notifications?.length === 0 && (
          <div className="text-center py-8 text-gray-500">알림이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default Page;
