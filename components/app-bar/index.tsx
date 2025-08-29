interface Props {
  title?: string;
  leadings?: React.ReactNode;
  actions?: React.ReactNode;
}

export const AppBar = ({ title = '', leadings, actions }: Props) => {
  return (
    <div className="h-15 flex items-center relative bg-white">
      <div className="flex items-center gap-2">{leadings}</div>
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-center leading-[133%] tracking-normal">
        {title}
      </h1>
      <div className="flex items-center gap-2 ml-auto">{actions}</div>
    </div>
  );
};
