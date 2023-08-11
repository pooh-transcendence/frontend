import MatchCard from "./matchCard";

export default function MatchHistory() {
    return (
        <>
        <div className="absolute h-[58.15%] w-[94.4%] top-[38.15%] right-[2.8%] bottom-[3.69%] left-[2.8%] rounded-3xs bg-gray shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)]" />
        <div className="absolute top-[calc(50%_-_69px)] left-[calc(50%_-_450px)] h-[22.5rem] overflow-y-auto flex flex-col items-start justify-start gap-[0.63rem]">
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </div>
        <div className="absolute h-[4%] w-[15.8%] top-[32.92%] right-[79.6%] bottom-[63.08%] left-[4.6%] text-[1.25rem]">
          <div className="absolute h-full w-[99.76%] top-[0%] right-[0%] bottom-[0%] left-[0.24%]">
            <div className="absolute h-full w-[81.21%] top-[0%] left-[18.79%] inline-block">
              match history
            </div>
            <img
              className="absolute h-[82.49%] w-[13.47%] top-[16.05%] right-[86.53%] bottom-[1.47%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        </>
    );
};