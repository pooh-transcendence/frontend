import SearchUsers from "./searchUsers";

export default function MyInfo() {
    return (
        <>
        <div className="absolute top-[1.5rem] left-[1.75rem] w-[59rem] flex flex-row items-center justify-center gap-[3.75rem] text-[0.94rem]">
          <div className="relative w-[32.44rem] h-[11.06rem] z-[2]">
            <div className="absolute h-[68.93%] w-[77.07%] top-[31.07%] right-[0.19%] bottom-[0%] left-[22.74%]">
              <div className="absolute h-[25.41%] w-full top-[74.59%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-[16.13%] w-full top-[0%] right-[0%] bottom-[83.87%] left-[0%]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-blueviolet w-[25rem] h-[0.44rem] overflow-hidden opacity-[0.2]" />
                  <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-slateblue w-[18.63rem] h-[0.44rem] overflow-hidden" />
                </div>
                <div className="absolute w-[24.59%] top-[25.81%] left-[0%] leading-[150%] inline-block">
                  winrate 75.0%
                </div>
              </div>
              <div className="absolute h-[61.48%] w-full top-[0%] right-[0%] bottom-[38.52%] left-[0%] flex flex-row items-center justify-center gap-[1.94rem] text-center text-[2.5rem]">
                <div className="relative w-[7.06rem] h-[4.69rem]">
                  <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                    100
                  </b>
                  <div className="absolute top-[60%] left-[24.78%] text-[1.25rem] leading-[150%]">
                    games
                  </div>
                </div>
                <div className="relative w-[7.06rem] h-[4.69rem] text-midnightblue">
                  <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                    75
                  </b>
                  <div className="absolute top-[60%] left-[31.86%] text-[1.25rem] leading-[150%]">
                    wins
                  </div>
                </div>
                <div className="relative w-[7.06rem] h-[4.69rem] text-brown">
                  <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                    25
                  </b>
                  <div className="absolute top-[60%] left-[30.09%] text-[1.25rem] leading-[150%]">
                    loses
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute h-[6.03%] w-[85%] top-[25.24%] right-[0.13%] bottom-[68.74%] left-[15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line-12.svg"
            />
            <div className="absolute top-[0.25rem] left-[7.5rem] flex flex-row items-start justify-end text-[2rem]">
              <div className="relative">testNickName</div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/editbutton.svg"
              />
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[6.25rem] h-[6.25rem]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/pngegg-31@2x.png"
              />
            </div>
          </div>
          <img
            className="relative w-[0.13rem] h-[9.5rem] z-[1]"
            alt=""
            src="/line-13.svg"
          />
          <SearchUsers />
        </div>
        {/* <button>
          <img
            className="absolute top-[0.63rem] right-[0.75rem] w-[2rem] h-[2rem] overflow-hidden"
            alt=""
            src="/cancelbutton.svg"
          />
        </button> */} {/* 모달은 보통 닫기 버튼이 없어서 */}
      </>
    ); 
};