import { atom } from 'jotai';

const getInitialDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};

export const currentDateAtom = atom<Date>(getInitialDate());
