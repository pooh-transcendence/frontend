import type { NextPage } from "next";
import { useState, useCallback } from "react";


export default function Matches() {
    return (
        <div className="absolute top-[7.81rem] left-[7.44rem] w-[50rem] h-[40.63rem] text-[1.25rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
            <div className="absolute top-[1.19rem] left-[1.69rem] w-[46.56rem] h-[37.88rem]">
            <img
                className="absolute top-[0.19rem] left-[-0.25rem] w-[47.06rem] h-[38.19rem]"
                alt=""
                src="/listFrame.svg"
            />
            <div className="absolute h-[4.13%] w-[33.15%] top-[0%] right-[60.27%] bottom-[95.87%] left-[6.58%]">
                <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
                channel list
                </div>
            </div>
            <img
                className="absolute h-[3.8%] w-[3.09%] top-[0.47%] right-[94.77%] bottom-[95.74%] left-[2.15%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
            />
            <div className="absolute h-[87.46%] w-[93.56%] top-[9.24%] right-[2.82%] bottom-[3.3%] left-[3.62%] overflow-y-auto flex flex-col items-start justify-start gap-[0.81rem] text-right text-[0.81rem]">
                <div className="flex flex-col items-center justify-center text-center text-[1rem]">
                public
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
                    owner
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock.svg"
                    />
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
                    ownername
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">sfesfe</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">1</div>
                    <div className="relative">person</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock1.svg"
                    />
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
                    ownername
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">sfesfe</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">1</div>
                    <div className="relative">person</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock2.svg"
                    />
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
                    owner
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock2.svg"
                    />
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
                    testtes
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock2.svg"
                    />
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
                    owner
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock1.svg"
                    />
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
                    owner
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock.svg"
                    />
                </div>
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/enterbutton.svg"
                />
                </div>
                <div className="flex flex-col items-center justify-center text-center text-[1rem]">
                <div className="relative">protected</div>
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
                    ownername
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">sfesfe</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">1</div>
                    <div className="relative">person</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock3.svg"
                    />
                </div>
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/enterbutton.svg"
                />
                </div>
                <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                    className="absolute top-[2.38rem] left-[2.75rem] w-[40.75rem] h-[0rem]"
                    alt=""
                    src="/rectangle-12.svg"
                />
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/pngegg-4@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                    owner
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/lock3.svg"
                    />
                </div>
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/enterbutton2.svg"
                />
                </div>
                <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                    className="absolute top-[2.38rem] left-[2.75rem] w-[40.75rem] h-[0rem]"
                    alt=""
                    src="/rectangle-12.svg"
                />
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/pngegg-41@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                    owner
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/rectangle-12.svg"
                    />
                </div>
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-12.svg"
                />
                </div>
                <div className="relative w-[43.56rem] h-[2.56rem]">
                <img
                    className="absolute top-[2.38rem] left-[2.75rem] w-[40.75rem] h-[0rem]"
                    alt=""
                    src="/rectangle-12.svg"
                />
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/pngegg-41@2x.png"
                />
                <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
                    testtes
                </div>
                <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
                    <div className="relative">title</div>
                    <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
                    <div className="relative">3</div>
                    <div className="relative">people</div>
                    </div>
                    <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/rectangle-12.svg"
                    />
                </div>
                <img
                    className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-12.svg"
                />
                </div>
            </div>
            <div className="absolute top-[0.56rem] left-[39.56rem] flex flex-row items-center justify-start gap-[0.13rem]">
                <div className="relative inline-block w-[3.38rem] h-[1.69rem] shrink-0">
                <p className="m-0">create</p>
                </div>
                <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chat-add-on-fill0-wght300-grad0-opsz48-1.svg"
                />
            </div>
            </div>
        </div>
    );
}