export function VoteCardSkeleton() {
  return (
    <div className="flex flex-col gap-2.5 p-5 bg-white rounded-[10px] shadow-[var(--HB-shadow-card)] animate-pulse">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <div className="w-[84px] h-[84px] rounded-[10px] bg-heybit-variable-HB-gray100" />
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="inline-flex h-[26px] items-center gap-1 px-2 py-1 rounded-md border border-solid border-heybit-variable-HB-green-sub01 w-[120px] bg-heybit-variable-HB-green-sub01/40" />
            <div className="flex flex-col gap-2 w-full mt-1">
              <div className="h-4 w-2/3 bg-heybit-variable-HB-gray100 rounded" />
              <div className="h-6 w-1/3 bg-heybit-variable-HB-gray100 rounded" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="h-3 w-24 bg-heybit-variable-HB-gray100 rounded" />
          <div className="h-4 w-full bg-heybit-variable-HB-gray100 rounded" />
        </div>
        <div className="flex w-full h-12 items-center gap-3">
          <div className="flex-1 h-12 bg-heybit-variable-HB-gray100 rounded-lg" />
          <div className="flex-1 h-12 bg-heybit-variable-HB-gray100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

