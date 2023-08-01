import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MyPageFrame from "@/components/my-page-frame";
import PortalPopup from "@/components/portal-popup";

const GameLobby: NextPage = () => {
  const [isMyPageFrameOpen, setMyPageFrameOpen] = useState(false);

  const onSideButton21Click = useCallback(() => {
    // Please sync "channelLobby" to the project
  }, []);

  const openMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(true);
  }, []);

  const closeMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-[52rem] text-left text-[2rem] text-dimgray font-inria-sans">
        <div className="absolute top-[0rem] left-[0rem] w-[80rem] h-[52rem]">
          <div className="absolute top-[2.31rem] left-[3.25rem] w-[73.69rem] h-[46.13rem]">
            <div className="absolute h-[112.74%] w-[108.57%] top-[-5.01%] right-[-4.16%] bottom-[-7.72%] left-[-4.41%] [background:linear-gradient(240.36deg,_#f5f5f5,_#fafbff)]" />
            <img
              className="absolute h-[8.54%] w-[20.1%] top-[0%] right-[72.35%] bottom-[91.46%] left-[7.55%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/samplelogo@2x.png"
            />
            <img
              className="absolute h-[9.49%] w-[5.94%] top-[17.48%] right-[94.06%] bottom-[73.04%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs max-w-full overflow-hidden max-h-full"
              alt=""
              src="/sidebutton2.svg"
            />
            <img
              className="absolute h-[9.49%] w-[5.94%] top-[26.56%] right-[94.06%] bottom-[63.96%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-b-none max-w-full overflow-hidden max-h-full cursor-pointer"
              alt=""
              src="/sidebutton21.svg"
              onClick={onSideButton21Click}
            />
            <div className="absolute h-[88.08%] w-[25.45%] top-[11.92%] right-[0%] bottom-[0%] left-[74.55%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
            </div>
            <div
              className="absolute h-[6.23%] w-[19.34%] top-[1.08%] right-[3.14%] bottom-[92.68%] left-[77.52%] flex flex-row py-[0rem] px-[0.06rem] box-border items-center justify-start gap-[0.5rem] cursor-pointer"
              onClick={openMyPageFrame}
            >
              <img
                className="relative w-[2.5rem] h-[2.5rem] object-cover z-[0]"
                alt=""
                src="/pngegg-1@2x.png"
              />
              <div className="relative inline-block w-[11.13rem] h-[2.88rem] shrink-0 z-[1]">
                mynameis2
              </div>
              <div className="absolute my-0 mx-[!important] h-[6.52%] w-[101.32%] top-[107.47%] right-[-0.22%] bottom-[-13.99%] left-[-1.1%] box-border z-[2] border-t-[3px] border-solid border-dimgray" />
            </div>
          </div>
          <div className="absolute h-[78.13%] w-[62.5%] top-[15.02%] right-[28.2%] bottom-[6.85%] left-[9.3%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
        </div>
        <div className="absolute top-[7.81rem] left-[7.44rem] w-[50rem] h-[40.63rem] text-[0.75rem]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
          <div className="absolute h-[65.69%] w-[93.13%] top-[30.46%] right-[3.25%] bottom-[3.85%] left-[3.63%] text-right text-[0.81rem]">
            <div className="absolute h-[90.87%] w-full top-[9.13%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)]" />
            <div className="absolute h-[64.09%] w-[93.56%] top-[15.69%] right-[2.68%] bottom-[20.22%] left-[3.76%] flex flex-col items-start justify-start gap-[0.81rem]">
              <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                  className="absolute top-[2.31rem] left-[2.69rem] w-[40.88rem] h-[0.13rem]"
                  alt=""
                  src="/line-2.svg"
                />
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                  3 balls, speed high
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                  <div className="relative">tjo</div>
                  <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">winrate</div>
                    <div className="relative">58.7%</div>
                  </div>
                </div>
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/enterbutton.svg"
                />
              </div>
              <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                  className="absolute top-[2.31rem] left-[2.69rem] w-[40.88rem] h-[0.13rem]"
                  alt=""
                  src="/line-2.svg"
                />
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                  1 ball, speed moderate
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                  <div className="relative">jooooooo</div>
                  <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">winrate</div>
                    <div className="relative">18.7%</div>
                  </div>
                </div>
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/enterbutton.svg"
                />
              </div>
              <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                  className="absolute top-[2.31rem] left-[2.69rem] w-[40.88rem] h-[0.13rem]"
                  alt=""
                  src="/line-2.svg"
                />
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                  <p className="m-0">2 balls, speed low</p>
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                  <div className="relative">yeeeeeeeeeee</div>
                  <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">winrate</div>
                    <div className="relative">20.8%</div>
                  </div>
                </div>
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/enterbutton1.svg"
                />
              </div>
              <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                  className="absolute top-[2.31rem] left-[2.69rem] w-[40.88rem] h-[0.13rem]"
                  alt=""
                  src="/line-2.svg"
                />
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                  3 balls, speed high
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                  <div className="relative">asdf</div>
                  <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">winrate</div>
                    <div className="relative">99.7%</div>
                  </div>
                </div>
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/enterbutton1.svg"
                />
              </div>
              <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                  className="absolute top-[2.31rem] left-[2.69rem] w-[40.88rem] h-[0.13rem]"
                  alt=""
                  src="/line-2.svg"
                />
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                  3 balls, speed high
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                  <div className="relative">babo</div>
                  <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">winrate</div>
                    <div className="relative">0.0%</div>
                  </div>
                </div>
                <img
                  className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/enterbutton1.svg"
                />
              </div>
            </div>
            <div className="absolute h-[9.23%] w-[33.15%] top-[0%] right-[60.54%] bottom-[90.77%] left-[6.31%] text-left text-[1.25rem]">
              <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
                match list
              </div>
            </div>
            <img
              className="absolute h-[5.24%] w-[3.09%] top-[1%] right-[95.03%] bottom-[93.77%] left-[1.88%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <div className="absolute h-[24.62%] w-[51.75%] top-[2.92%] right-[42.88%] bottom-[72.46%] left-[5.38%] text-[0.94rem]">
            <div className="absolute h-[19.38%] w-[96.62%] top-[80.63%] right-[0%] bottom-[0%] left-[3.38%]">
              <div className="absolute h-[16.13%] w-full top-[0%] right-[0%] bottom-[83.87%] left-[0%]">
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-blueviolet w-[25rem] h-[0.44rem] overflow-hidden opacity-[0.2]" />
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-slateblue w-[18.63rem] h-[0.44rem] overflow-hidden" />
              </div>
              <div className="absolute w-[24.59%] top-[25.81%] left-[0%] leading-[150%] inline-block">
                winrate 75.0%
              </div>
            </div>
            <div className="absolute h-[46.88%] w-[96.62%] top-[23.75%] right-[0%] bottom-[29.38%] left-[3.38%] flex flex-row items-center justify-center gap-[1.94rem] text-center text-[2.5rem]">
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
            <div className="absolute h-[16.88%] w-[31.64%] top-[0%] left-[7.97%] text-[1.25rem] inline-block">
              my info
            </div>
            <img
              className="absolute h-[13.13%] w-[5.56%] top-[2.5%] right-[94.44%] bottom-[84.38%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
          </div>
          <div className="absolute h-[4.92%] w-[21.5%] top-[2.62%] right-[17.75%] bottom-[92.46%] left-[60.75%] text-[1.25rem]">
            <img
              className="absolute h-full w-[18.6%] top-[0%] right-[81.4%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/videogame-asset-fill0-wght300-grad0-opsz48-1.svg"
            />
            <div className="absolute h-[84.38%] w-[76.16%] top-[3.13%] left-[23.84%] inline-block">
              create game
            </div>
          </div>
          <div className="absolute h-[7.54%] w-[28.13%] top-[20.46%] right-[9.25%] bottom-[72%] left-[62.63%]">
            <img
              className="absolute top-[2.56rem] left-[0.02rem] w-[14.05rem] h-[0.5rem]"
              alt=""
              src="/line-3.svg"
            />
            <i className="absolute top-[0rem] left-[0.06rem] inline-block w-[11.44rem] h-[1rem]">
              create custom game
            </i>
            <i className="absolute top-[0.69rem] left-[3.75rem] text-[1.5rem] font-bold text-right text-slateblue">
              <span>1 vs 1</span>
              <span className="text-dimgray"> Matching</span>
            </i>
          </div>
          <div className="absolute h-[7.54%] w-[28.13%] top-[9.23%] right-[9.25%] bottom-[83.23%] left-[62.63%]">
            <img
              className="absolute top-[2.56rem] left-[0.02rem] w-[14.05rem] h-[0.5rem]"
              alt=""
              src="/line-3.svg"
            />
            <i className="absolute top-[0rem] left-[0.06rem] inline-block w-[11.44rem] h-[1rem]">
              play with online user
            </i>
            <i className="absolute top-[0.69rem] left-[1.31rem] text-[1.5rem] font-bold text-right text-slateblue">
              <span>Random</span>
              <span className="text-dimgray"> Matching</span>
            </i>
          </div>
        </div>
        <div className="absolute top-[7.81rem] left-[58.19rem] w-[18.75rem] h-[40.63rem] text-[1rem]">
          <div className="absolute h-[7.85%] w-full top-[92.15%] right-[0%] bottom-[0%] left-[0%] text-[0.94rem]">
            <div className="absolute h-[98.04%] w-full top-[0%] right-[0%] bottom-[1.96%] left-[0%] rounded-3xs bg-ghostwhite" />
            <div className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_126px)] flex flex-row items-center justify-center gap-[1.63rem]">
              <div className="w-[6.25rem] flex flex-row items-center justify-center gap-[0.38rem]">
                <div className="relative">friends</div>
                <img
                  className="relative w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/group-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="relative w-[0.09rem] h-[1.28rem]"
                alt=""
                src="/line-6.svg"
              />
              <div className="w-[6.25rem] flex flex-row items-center justify-center gap-[0.25rem]">
                <div className="relative">channels</div>
                <img
                  className="relative w-[1.75rem] h-[1.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/forum-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute h-[7.69%] w-full top-[0%] right-[0%] bottom-[92.31%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-3xs rounded-b-none bg-ghostwhite" />
              <div className="absolute h-[48%] w-[65%] top-[38%] left-[17.14%] inline-block">
                friends
              </div>
              <img
                className="absolute h-[56%] w-[9.33%] top-[28%] right-[4.33%] bottom-[16%] left-[86.33%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-add-fill0-wght500-grad0-opsz48-1.svg"
              />
              <div className="absolute h-[32%] w-[40.67%] top-[50%] right-[18%] bottom-[18%] left-[41.33%] overflow-hidden flex flex-row py-[0rem] px-[0.38rem] box-border items-center justify-end gap-[0.19rem] text-[0.69rem]">
                <img
                  className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 z-[0]"
                  alt=""
                  src="/sync-fill0-wght500-grad0-opsz48-1.svg"
                />
                <div className="absolute my-0 mx-[!important] top-[0.09rem] left-[0.06rem] z-[1]">
                  update in 5 seconds
                </div>
              </div>
            </div>
            <img
              className="absolute h-[56%] w-[9.33%] top-[30%] right-[86.33%] bottom-[14%] left-[4.33%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-fill0-wght500-grad0-opsz48-11.svg"
            />
          </div>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
          <div className="absolute h-[82.46%] top-[8.92%] bottom-[8.62%] left-[calc(50%_-_130px)] overflow-y-auto flex flex-col py-[0.5rem] px-[0rem] box-border items-start justify-start gap-[0.44rem]">
            <div className="relative inline-block w-[4.35rem] h-[1.31rem] shrink-0">
              friends
            </div>
            <div className="flex flex-col items-center justify-center text-center text-[0.75rem]">
              <div className="relative">online</div>
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">sans</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-1.svg"
              />
              <img
                className="absolute top-[0.5rem] left-[13.5rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/mark-as-unread-fill0-wght500-grad0-opsz48-1.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">asdfadsf</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-1.svg"
              />
              <img
                className="absolute top-[0.5rem] left-[13.5rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/mark-as-unread-fill0-wght500-grad0-opsz48-1.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">sans</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-1.svg"
              />
              <img
                className="absolute top-[0.5rem] left-[13.5rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/mark-as-unread-fill0-wght500-grad0-opsz48-1.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">asdfadsf</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-1.svg"
              />
              <img
                className="absolute top-[0.5rem] left-[13.5rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/mark-as-unread-fill0-wght500-grad0-opsz48-1.svg"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center text-[0.75rem]">
              <div className="relative">gaming</div>
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">testNickname</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/stadia-controller-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">testNickname</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/stadia-controller-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-11.svg"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center text-[0.75rem]">
              <div className="relative">offline</div>
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">tjo</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-off-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-11.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-4@2x.png"
                />
                <div className="relative">3124</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-off-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.48rem] left-[0.02rem] w-[16.25rem] h-[0.09rem]"
                alt=""
                src="/line-101.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-11.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-21@2x.png"
                />
                <div className="relative">tjo</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-off-fill0-wght500-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className="absolute top-[2.53rem] left-[0.06rem] w-[16.25rem] h-[0rem]"
                alt=""
                src="/rectangle-12.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/data-info-alert-fill0-wght400-grad0-opsz48-11.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-41@2x.png"
                />
                <div className="relative">3124</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/rectangle-12.svg"
                />
              </div>
              <img
                className="absolute top-[2.53rem] left-[0.06rem] w-[16.25rem] h-[0rem]"
                alt=""
                src="/rectangle-12.svg"
              />
              <img
                className="absolute h-[44.44%] w-[7.69%] top-[17.78%] right-[-0.38%] bottom-[37.78%] left-[92.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-12.svg"
              />
            </div>
            <div className="relative inline-block w-[4.35rem] h-[1.31rem] shrink-0">
              blocks
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-41@2x.png"
                />
                <div className="relative">testNickname</div>
              </div>
              <img
                className="absolute top-[0.25rem] left-[14.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="/rectangle-12.svg"
              />
              <img
                className="absolute top-[2.53rem] left-[0.06rem] w-[16.25rem] h-[0rem]"
                alt=""
                src="/rectangle-12.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-41@2x.png"
                />
                <div className="relative">asdfa</div>
              </div>
              <img
                className="absolute top-[0.25rem] left-[14.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="/rectangle-12.svg"
              />
              <img
                className="absolute top-[2.53rem] left-[0.06rem] w-[16.25rem] h-[0rem]"
                alt=""
                src="/rectangle-12.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-41@2x.png"
                />
                <div className="relative">testNickname</div>
              </div>
              <img
                className="absolute top-[0.25rem] left-[14.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="/rectangle-12.svg"
              />
              <img
                className="absolute top-[2.53rem] left-[0.06rem] w-[16.25rem] h-[0rem]"
                alt=""
                src="/rectangle-12.svg"
              />
            </div>
            <div className="relative w-[16.25rem] h-[2.81rem]">
              <div className="absolute top-[0rem] left-[0.06rem] flex flex-row items-center justify-center gap-[0.63rem]">
                <img
                  className="relative w-[2rem] h-[2rem] object-cover"
                  alt=""
                  src="/pngegg-41@2x.png"
                />
                <div className="relative">asdfa</div>
              </div>
              <img
                className="absolute top-[0.25rem] left-[14.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="/rectangle-12.svg"
              />
              <img
                className="absolute top-[2.53rem] left-[0.06rem] w-[16.25rem] h-[0rem]"
                alt=""
                src="/rectangle-12.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {isMyPageFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMyPageFrame}
        >
          <MyPageFrame onClose={closeMyPageFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default GameLobby;
