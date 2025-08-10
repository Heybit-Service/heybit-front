import { atom } from 'jotai';

export interface Form {
  day: number;
  hour: number;
  minute: number;
  title: string;
  category: string;
  name: string;
  price: string;
  description: string;
  image: string;
  voting: boolean;
}

export const initValue: Form = {
  day: 0,
  hour: 0,
  minute: 0,
  title: '',
  category: '',
  name: '',
  price: '',
  description: '',
  image: '',
  voting: false,
};

export const formAtom = atom<Form>(initValue);
