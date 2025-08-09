import NextImage from 'next/image';

interface Props {
  alt: string;
  src: string;
}

export const Image = ({ src, alt }: Props) => {
  return <NextImage src={src} alt={alt} width={90} height={90} className="rounded-[5px]" />;
};
