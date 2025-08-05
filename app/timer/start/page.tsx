import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';

export default function Page() {
  return (
    <div>
      <AppBar title="타이머 시작" leadings={<BackButton />} />
    </div>
  );
}
