import React from "react";

interface Props {
  progressbar:
    | "progress-01"
    | "default"
    | "progress-02"
    | "progress-sucess"
    | "progress-03";
}

export const SurveyProgressBar = ({ progressbar }: Props) => {
  return (
    <div className="w-[calc(100%+32px)] h-1 bg-heybit-variable-HB-gray200 -ml-4">
      {[
        "progress-01",
        "progress-02",
        "progress-03",
        "progress-sucess",
      ].includes(progressbar) && (
        <div
          className={`h-1 bg-heybit-variable-HB-green-main ${progressbar === "progress-01" ? "w-1/4" : (progressbar === "progress-02") ? "w-1/2" : progressbar === "progress-03" ? "w-3/4" : "w-full"} ${["progress-01", "progress-02", "progress-03"].includes(progressbar) ? "rounded-[0px_10px_10px_0px]" : ""}`}
        />
      )}
    </div>
  );
};