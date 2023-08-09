'use client';

import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MyPageFrame from "@/components/my-page-frame";
import PortalPopup from "@/components/portal-popup";

import Image from "next/image";


export default function ChannelCards() {
    return (
        <>
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
        </>
    );
}
