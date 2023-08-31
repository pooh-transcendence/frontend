


export default function MatchCard() {
  return (
    <div className="Property1Win w-[900px] h-[65px] relative">
      <div className="Winnercrown w-9 h-[29.25px] left-[221px] top-[13.62px] absolute opacity-60">
        <img src="winnercrown.svg" className="Group w-[33.78px] h-[29.25px] left-[1.11px] top-0 absolute"/>
      </div>
      <div className="Matchresult w-[604px] h-[37px] left-[30px] top-[14px] relative">
        <div className="User2 w-[220px] left-[331px] top-0 relative justify-start items-center gap-2.5 inline-flex">
          <img className="avatar2 w-8 h-8" src="https://via.placeholder.com/32x32" />
          <div className="Frame96 justify-center items-end gap-2.5 flex">
            <div className="Username2 text-neutral-600 text-[28px] font-normal">userName2</div>
            <div className="Vs750 text-neutral-600 text-sm font-normal">vs 75.0%</div>
          </div>
        </div>
        <div className=" w-[69px] h-[37px] left-[262px] top-0 absolute text-center text-neutral-600 text-[28px] font-normal">5 : 4</div>
        <div className="User2 left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
          <div className="Username2 w-[220px] h-[37px] text-right text-neutral-600 text-[28px] font-bold">userName1</div>
          <img className="avatar2 w-8 h-8" src="https://via.placeholder.com/32x32" />
        </div>
      </div>
      <div className="0726170934 left-[785px] top-[37px] absolute text-right text-neutral-600 text-sm font-normal">2023.07.26 17:09:34</div>
      <div className="BallSpeedModerate left-[747px] top-[14px] absolute text-right text-neutral-600 text-base font-normal">1 ball, speed moderate</div>
      <div className="line left-[3px] top-0 relative text-neutral-600 text-base font-normal">{"gametype"=="CUSTOM" ? "custom" : "random"}</div>
      <img className="absolute top-[3.94rem] left-[0rem] w-[56.25rem] h-[0.13rem]" src="line-14.svg"/>
    </div>
  )
  return (
    <div className="relative w-[56.25rem] h-[4.06rem]">
      <img
        className="relative top-[20.96%] right-[71.44%] bottom-[34.04%] left-[24.56%] max-w-full overflow-hidden max-h-full opacity-[0.65]"
        alt=""
        src="/winnercrown.svg"
      />
      <div className="absolute w-[37.75rem] h-[2.31rem] text-[1.75rem]">
        <div className="absolute top-[0rem] left-[20.69rem] w-[13.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
          <img
            className="relative w-[2rem] h-[2rem] object-cover"
            alt=""
            src="/pngegg-4@2x.png"
          />
          <div className="flex flex-row items-end justify-center gap-[0.63rem]">
            <i className="relative">asdf</i>
            <div className="relative text-[0.88rem]">vs 75.0%</div>
          </div>
        </div>
        <i className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_-_40px)] inline-block text-center w-[4.31rem] h-[2.31rem]">
          5 : 4
        </i>
        <div className="absolute top-[calc(50%_-_18.5px)] left-[0rem] flex flex-row items-center justify-end gap-[0.63rem] text-right">
          <i className="relative inline-block font-bold w-[13.75rem] h-[2.31rem] shrink-0">
            testNickname
          </i>
          <img
            className="relative w-[2rem] h-[2rem] object-cover"
            alt=""
            src="/pngegg-3@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[2.31rem] left-[46rem] text-[0.88rem] w-[10rem] h-[1.1rem] text-right">
        2023.07.26 17:09:34
      </div>
      <div className="absolute top-[0.88rem] left-[41rem] text-[1rem] w-[15rem] h-[1.19rem] text-right">
        1 ball, speed moderate
      </div>
      <img
        className="absolute top-[3.94rem] left-[0rem] w-[56.25rem] h-[0.13rem]"
        alt=""
        src="/line-14.svg"
      /> {/* 이거 마지막은 라인 없어야함, 근데 그림자 효과줘서 구분하는게 더 좋지 않나?  */}
      <div className="absolute top-[0rem] left-[0.19rem]">{` `}</div>
    </div>
  );
}

