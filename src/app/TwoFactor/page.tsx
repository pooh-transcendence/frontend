'use client'
import React, { useContext, useState, useEffect } from "react";
import { UserContext, userInfo } from "../UserContext";
import { useQRCode } from 'next-qrcode';
import { api_get, api_post, getAuth, getUserId, setAuth, updateSocket, setRefToken } from "../api";

export default function TwoFactor() {
    const { Canvas } = useQRCode();
    const { state, actions } = useContext(UserContext);
    const [isWrong, setIsWrong] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const onChange = (e: any) => { setPassword(e.target.value) };
    const handleOnKeyPress = (e: any) => {
        if (e.key == "Enter") {
            e.preventDefault();
            submitText();
        }
    }
    const submitText = () => {
        if (password.length != 6) return;
        api_post("/auth/signInWithVerificationCode", {
            verificationCode: password, userId: Number(getUserId())
        }).then((res) => {
            console.log("signInWithVerificationCode", res);
            setAuth(res.data.accessToken);
            setRefToken(res.data.refreshToken);
            updateSocket();
            console.log("auth", getAuth());
            api_get("/user").then((res) => {
                console.log("/user", res);
                const data: userInfo = res.data.data;
                actions.setUserInfo({
                    nickname: data.nickname,
                    avatar: data.avatar ?? "pngegg-1@2x.png",
                    id: data.id,
                    token: getAuth()!,
                    registered: true,
                    winnerGame: data.winnerGame,
                    loserGame: data.loserGame,
                });
            });
        }).catch((e) => {
            setIsWrong(true);
            console.log("wrong password", e);
            // 뭔가 틀렸다고 흔들리는 것 같은 효과를 주고 싶은 느낌적인 느낌
        });
    }

    return (
        <>
            <div className="w-[315px] h-[200px] relative">
                {/* <div className="w-6 h-6 left-[286px] top-[5px] absolute" /> exit button disabled */}
                <div className="left-[41px] top-[56px] absolute justify-start items-center gap-8 inline-flex">
                    <Canvas
                        text={sessionStorage.getItem("qrCodeURL") ?? "undefined Url"}
                        options={{
                            errorCorrectionLevel: 'M',
                            margin: 3,
                            scale: 4,
                            width: 100,
                            color: {
                                dark: '#555555',
                                light: '#FEFEFE',
                            },
                        }}
                    />
                    <div className="w-[100px] h-7 relative">
                        <div className="w-[65px] h-[25px] left-[17.50px] top-0 absolute justify-center items-center gap-[5px] inline-flex">
                            <form onKeyDown={handleOnKeyPress}>
                                <input onChange={onChange} value={password} type="text" maxLength={6} className="w-[100px] outline-none text-center text-neutral-600 text-xl font-normal " />
                            </form>
                        </div>
                        {
                            (isWrong && <img src="line_otp_input.svg" className="fill-{#A83B3B} left-0 top-[28px] absolute" />)
                        }
                        <img src="line_otp_input.svg" className="left-0 top-[28px] absolute" />
                    </div>
                </div>
                <button onClick={submitText}>
                    <div className="w-[75px] h-8 left-[120px] top-[154px] absolute">
                        <img src="sweep.svg" className="w-8 h-8 left-0 top-0 absolute justify-center items-center inline-flex" />
                        <div className="left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold italic"> login</div>
                    </div>
                </button>
                <div className="left-[55px] top-[17px] absolute text-neutral-600 text-xl font-normal">login</div>
                <img src="lock_clock.svg" className="w-8 h-8 left-[13px] top-[13px] absolute" />
            </div>
        </>
    )
}