interface Props {
  leadings?: React.ReactNode;
  actions?: React.ReactNode;
  title: string;
}

export const AppBar = ({ title, leadings, actions }: Props) => {
  return (
    <div className="h-15 flex items-center justify-between">
      <div className="flex items-center gap-2">{leadings}</div>
      <h1 className="text-xl font-semibold text-center leading-[133%] tracking-normal">{title}</h1>
      <div className="flex items-center gap-2">{actions}</div>
    </div>
  );
};
