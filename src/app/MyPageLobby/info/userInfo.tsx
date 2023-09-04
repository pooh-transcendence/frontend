import { UserContext, userInfo } from "@/app/UserContext";
import { useContext } from "react";

type userInfoCardInterface={
    id: number,
    nickname: string,
    avatar: string | null,
};

export default function UserInfo({
    id,
    nickname,
    avatar,
  }: userInfoCardInterface) {
    const {state, actions}=useContext(UserContext);
    const userSelecitonHandler=() => {
        actions.setInfoTargetUser(id);
    };

    return (
        <div className="MypageUserlistUsercard w-[247px] h-[45px] relative">
            <button className="text-left" onClick={userSelecitonHandler}>
                <div className="nicknamenphoto left-[1px] top-0 h-[2rem] relative justify-center items-center gap-2.5 inline-flex">
                    <img className="Pngegg2 w-8 h-8 rounded-[70%]" src={avatar ? avatar : "pngegg-1@2x.png"} />
                    <div className="username text-neutral-600 text-base font-normal">{nickname}</div>
                </div>
                <img className="top-[2.53rem] left-[0.06rem]" src="info_search_line.svg"/>
            </button>
        </div>
    );
}