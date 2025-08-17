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
import { TimerCreateButton } from '../button/create';

interface Props {
  onSubmit: (form: Form) => void;
}

export const TimerForm = ({ onSubmit }: Props) => {
  const [form, setForm] = useAtom(formAtom);

  const enabled = () => {
    if (form.day === 0 && form.hour === 0 && form.minute === 0) return false;
    if (form.category === '') return false;
    if (form.name === '') return false;
    if (form.price === '') return false;
    if (form.description === '') return false;
    if (form.image === null) return false;
    return true;
  };

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
      <div className="w-full fixed bottom-0 left-0 right-0 px-4 pt-[10px] pb-14 bg-[#F7F7F7]">
        <TimerCreateButton onClick={() => onSubmit(form)} disabled={!enabled()} />
      </div>
    </div>
  );
};
