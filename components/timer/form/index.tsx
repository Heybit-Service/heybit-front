'use client';

import FixedBottom from '@/components/layout/fixed-bottom';
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
  isLoading?: boolean;
}

export const TimerForm = ({ onSubmit, isLoading = false }: Props) => {
  const [form, setForm] = useAtom(formAtom);

  const enabled = () => {
    if (form.day === 0 && form.hour === 0 && form.minute === 0) return false;
    if (form.category === '') return false;
    if (form.name === '') return false;
    if (form.price === '') return false;
    if (Number(form.price) <= 0) return false;
    if (form.voting === true && form.description === '') return false;
    if (form.voting === true && form.image === null) return false;
    return true;
  };

  return (
    <div className="flex flex-col items-center gap-13 px-4">
      <div className="flex flex-col gap-6 pb-[126px]">
        <Title />
        <Category onChange={(value) => setForm({ ...form, category: value })} />
        <Name onChange={(value) => setForm({ ...form, name: value })} />
        <Price onChange={(value) => setForm({ ...form, price: value })} />
        <Description
          required={form.voting}
          onChange={(value) => setForm({ ...form, description: value })}
        />
        <Upload required={form.voting} onChange={(value) => setForm({ ...form, image: value })} />
        <Voting onChange={(value) => setForm({ ...form, voting: value })} />
      </div>
      <FixedBottom>
        <TimerCreateButton onClick={() => onSubmit(form)} disabled={!enabled() || isLoading} />
      </FixedBottom>
    </div>
  );
};
