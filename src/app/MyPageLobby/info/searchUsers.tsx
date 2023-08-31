import { socket } from "@/app/api";
import UserInfo from "./userInfo";
import { useState, useEffect } from "react";
import { friendInfo } from "@/app/UserContext";

export default function SearchUsers() {
  const [users, setUsers]=useState<friendInfo[]>([]); 
  const [searchedUsers, setSearchedUsers]=useState<friendInfo[]>([]); 
  
  const onChange = (e: any) => {
    const query: string = e.target.value;
    setSearchedUsers(users.filter((elem) => elem.nickname.startsWith(query)));
  };

  useEffect(() => {
    socket.emit("allUser", (data: friendInfo[]) => {
      setUsers(data);
      setSearchedUsers(data);
    });
  }, []);

    return (
        <div className="relative w-[15.44rem] h-[11.81rem] text-[1rem]">
          <div className="scrollbar-hide relative top-[3.94rem] left-[0rem] h-[7.88rem] flex overflow-auto flex-col items-start justify-start gap-[0.44rem]">
            {
              Object.entries(searchedUsers).map(
                ([idx, target]) => {
                    return <UserInfo key={idx} id={target.id} nickname={target.nickname} avatar={target.avatar} />
                })
            }
          </div>
            <div className="absolute top-[2.44rem] left-[0.06rem] text-[0.94rem] inline-block w-[4.69rem] h-[0.88rem]">
              result
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[15.44rem] h-[1.88rem]">
              <img
                className="absolute h-[35.56%] w-[99.06%] top-[72.22%] right-[0.84%] bottom-[-7.78%] left-[0.1%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/line-11.svg"
              />
              <div className="absolute top-[0rem] left-[0.44rem] flex flex-row items-center justify-start gap-[0.25rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/search-fill0-wght500-grad0-opsz48-1.svg"
                />
                <input onChange={onChange} type="text" placeholder="search users" className="placeholder:italic outline-none w-[8.88rem] h-[1.19rem] text-neutral-600 font-bold bg-transparent"/>
              </div>
            </div>
          </div>
    ); }