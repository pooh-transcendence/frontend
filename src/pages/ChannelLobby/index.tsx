import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MyPageFrame from "@/components/my-page-frame";
import PortalPopup from "@/components/portal-popup";
import UserProfile from "@/components/userProfile";
import Matches from "@/components/matches";

const ChannelLobby: NextPage = () => {
  const [isMyPageFrameOpen, setMyPageFrameOpen] = useState(false);

  const onSideButton2Click = useCallback(() => {

  }, []);

  const openMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(true);
  }, []);

  const closeMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[52rem] overflow-hidden text-left text-[2rem] text-dimgray font-inria-sans">
        <div className="absolute top-[0rem] left-[0rem] w-[80rem] h-[52rem]">
          <div className="absolute h-[88.7%] w-[92.11%] top-[4.45%] right-[3.83%] bottom-[6.85%] left-[4.06%]">
            <div className="absolute h-[112.74%] w-[108.57%] top-[-5.01%] right-[-4.16%] bottom-[-7.72%] left-[-4.41%] [background:linear-gradient(240.36deg,_#f5f5f5,_#fafbff)]" />
            <img // 로고 위치
              className="absolute h-[8.54%] w-[20.1%] top-[0%] right-[72.35%] bottom-[91.46%] left-[7.55%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/samplelogo@2x.png"
            />
            <img // 게임 버튼
              className="absolute h-[9.49%] w-[5.94%] top-[17.48%] right-[94.06%] bottom-[73.04%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-b-none max-w-full overflow-hidden max-h-full cursor-pointer"
              alt=""
              src="/sideGameButton.svg"
              onClick={onSideButton2Click}
            />
            <img // 채널 버튼
              className="absolute h-[9.49%] w-[5.94%] top-[26.56%] right-[94.06%] bottom-[63.96%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs max-w-full overflow-hidden max-h-full"
              alt=""
              src="/sideChannelButton.svg"
            />
            <div className="absolute h-[88.08%] w-[25.45%] top-[11.92%] right-[0%] bottom-[0%] left-[74.55%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid " />
            </div>
            <UserProfile />
          </div>
        </div>
        <Matches />
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
                src="/data-info-alert-fill0-wght400-grad0-opsz48-11.svg"
              />
              <img
                className="absolute top-[0.5rem] left-[13.5rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/mark-as-unread-fill0-wght500-grad0-opsz48-11.svg"
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
                  src="/wifi-fill0-wght500-grad0-opsz48-11.svg"
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
                src="/data-info-alert-fill0-wght400-grad0-opsz48-12.svg"
              />
              <img
                className="absolute top-[0.5rem] left-[13.5rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/mark-as-unread-fill0-wght500-grad0-opsz48-11.svg"
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
                  src="/wifi-fill0-wght500-grad0-opsz48-12.svg"
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
                src="/data-info-alert-fill0-wght400-grad0-opsz48-13.svg"
              />
              <img
                className="absolute top-[0.5rem] left-[13.5rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/mark-as-unread-fill0-wght500-grad0-opsz48-12.svg"
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
                <div className="relative">testNickname</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/stadia-controller-fill0-wght500-grad0-opsz48-11.svg"
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
                <div className="relative">3124</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-off-fill0-wght500-grad0-opsz48-11.svg"
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
                  src="/pngegg-21@2x.png"
                />
                <div className="relative">tjo</div>
                <img
                  className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="/wifi-off-fill0-wght500-grad0-opsz48-11.svg"
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
                src="/data-info-alert-fill0-wght400-grad0-opsz48-14.svg"
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
                src="/sideGameButton.svg"
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

export default ChannelLobby;
