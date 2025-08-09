import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';
import { fetchTimer } from '@/data/api/timer';

interface Props {
  params: {
    id: number;
  };
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const timer = await fetchTimer(id);
  return (
    <div>
      <AppBar title="참고 있는 상품" leadings={<BackButton />} />
    </div>
  );
};

export default Page;
