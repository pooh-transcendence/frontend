'use client'

import React, { useState, useEffect } from "react";
import { ChatTitle } from '../frame/ChatTitle' 
import { ChatBubble } from './ChatBubble'
import { socket } from "@/app/api/socket";

interface Props{
    title: string,
}

export const ChatChannel = ({
    title,
  }: Props): JSX.Element => {
    
    const [msgQuery, setMsgQuery]=useState<string[][]>([]);
    useEffect(() => {        
        socket.on("userMessage", (data)=>{
            console.log(data);
            setMsgQuery([...msgQuery, ["recv", data[0].nickname, data[0].message]]);
        });
      }, [msgQuery]);

    const [text, setText]=useState("");
    const onChange=(e: any)=>{setText(e.target.value);}
    const handleOnKeyPress=(e: any)=>{
        if(e.key === 'Enter')
        {
            e.preventDefault();
            submitText();
        }
    }

    function renderMessage(): Array<JSX.Element>
    {
        const res: Array<JSX.Element>=[];
        for(let i=0; i<msgQuery.length; i++)
        {
            const [type, nickname, message]=msgQuery[i];
            res.push(<ChatBubble 
                    side={type==="recv" ? "left":"right"}
                    nickname={nickname}
                    messageText={message}
                    key={i} />);
        }
        return res;
    }

    
    const submitText=()=>{
        console.log(socket);
        // testQuery.push(["send", "", text]);
        setMsgQuery([...msgQuery, ["send", "", text]]);
        socket.emit("message", {userId : 2, message: text});
        setText("");
    }
    return (
        <div className="w-[300px] h-[650px] relative">
            {/* writing section */}
            <div className="w-[300px] h-[70px] left-0 top-[580px] absolute">
                <div className="w-[300px] h-[70px] left-0 top-0 absolute bg-slate-100 rounded-[10px]" />
                <form onKeyDown={handleOnKeyPress}>
                    {/* TODO: wrap text */}
                    <img onClick={submitText} className="z-10 w-6 h-6 left-[260px] top-[23px] absolute justify-center items-center inline-flex" src="send.svg" />
                    <input onChange={onChange} type="text" value={text} placeholder="test" className="z-10 outline-none w-[221px] h-[50px] left-[24px] top-[10px] absolute bg-slate-100 text-black font-normal" />
                </form>
            </div>
            {/* chat container*/}
            <div className="w-[270px] h-[511px] left-[15px] top-[59px] absolute flex-col justify-start items-end gap-[5px] inline-flex">
                {/* TODO: scroll */}
                {renderMessage()}
            </div>
            {/* title section */}
            <ChatTitle type="channelChat" title={title}/>
            {/* frame */}
            <div className="w-[300px] h-[650px] left-0 top-0 absolute rounded-[10px] border border-neutral-600" />
        </div>
    )
}