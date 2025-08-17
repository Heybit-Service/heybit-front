'use client';

import { useAtom } from 'jotai';
import { Category } from './category';
import { Description } from './description';
import { Name } from './name';
import { Price } from './price';
import { Title } from './title';
import { Upload } from './upload';
import { Voting } from './voting';
import { Form, formAtom } from './store';

interface Props {
  onSubmit: (form: Form) => void;
}

export const TimerForm = ({ onSubmit }: Props) => {
  const [form, setForm] = useAtom(formAtom);
  return (
    <div className="h-dvh flex flex-col items-center gap-13 px-4">
      <div className="flex flex-col gap-6 pb-[126px]">
        <Title />
        <Category onChange={(value) => setForm({ ...form, category: value })} />
        <Name onChange={(value) => setForm({ ...form, name: value })} />
        <Price onChange={(value) => setForm({ ...form, price: value })} />
        <Description onChange={(value) => setForm({ ...form, description: value })} />
        <Upload onChange={(value) => setForm({ ...form, image: value })} />
        <Voting onChange={(value) => setForm({ ...form, voting: value })} />
      </div>
      <div className="w-full fixed bottom-0 px-4 pt-[10px] pb-14 bg-[#F7F7F7]">
        <button
          className="w-full bg-[#202020] py-4 font-semibold text-xl text-[#FFFFFF] leading-[150%] text-center rounded-[10px]"
          onClick={() => onSubmit(form)}
        >
          등록
        </button>
      </div>
    </div>
  );
};
