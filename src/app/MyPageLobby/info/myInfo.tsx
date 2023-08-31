import { useContext, useEffect, useState, useRef } from "react";
import SearchUsers from "./searchUsers";
import { UserContext, userInfo } from "@/app/UserContext";
import { api_get, api_patch, api_post } from "@/app/api";
import ImageUploading from 'react-images-uploading';

export default function MyInfo() {
  const { state, actions } = useContext(UserContext);
  const [target, setTarget] = useState<userInfo>({} as userInfo);
  const [newNickname, setNewNickname] = useState<string | null>(null);
  const [avatarHover, setAvatarHover] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    api_get(`/user/${state.infoTargetUser}`).then((data) => {
      setTarget(data.data.data);
      console.log(`/user/${state.infoTargetUser}`, data.data.data);
      setNewNickname(data.data.data.nickname);
    })
  }, [state.infoTargetUser]);

  useEffect(() => {
    if (textRef.current && inputRef.current) {
      const textWidth = textRef.current.clientWidth;
      inputRef.current.style.width = `${textWidth}px`;
    }
  }, [newNickname]);

  const getWinRate = (win: Object[], lose: Object[]): string => {
    const numerator = win.length;
    const denominator = win.length + lose.length;
    if (denominator === 0) {
      return '0.00%';
    }
    const rate = (numerator / denominator) * 100;
    return `${rate.toFixed(2)}%`;
  };
  const getGameCount = (a: Object[], b: Object[] | void): String => {
    if (b)
      return a.length + b.length + '';
    else
      return a.length + '';
  };
  const onChangeNickNameSubmit = (e: any) => {
    e.preventDefault();
    changeNicknameHandler();
  }
  const onChangeNickname = (e: any) => {
    setNewNickname(e.target.value);
  };
  const onChangeImage = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    api_post("/user/avatarUpload", {
      file: imageList[addUpdateIndex].data_url
    }).then((res) => {
      actions.setUserInfo({...state.userInfo, avatar: imageList[addUpdateIndex].data_url});
      console.log("onChangeImage", res);
    });
  };
  const changeNicknameHandler = () => {
    console.log("change nickname to ", newNickname);
    api_patch("/user/nickname", {nickname: newNickname}).then((res) => {
      // console.log(res); // OK
      actions.setUserInfo({...state.userInfo, nickname: newNickname!});
    });
  }
  // const changeAvatarHandler = () => {
  //   // todo
  // }
  const handleHover = () => {
    // console.log("hovered");
    setAvatarHover(true);
  }
  const handleMouseLeave = () => {
    setAvatarHover(false);
  }
  return (
    <>
      <div className="absolute top-[1.5rem] left-[1.75rem] w-[59rem] flex flex-row items-center justify-center gap-[3.75rem] text-[0.94rem]">
        <div className="relative w-[32.44rem] h-[11.06rem] z-[2]">
          <div className="absolute h-[68.93%] w-[77.07%] top-[31.07%] right-[0.19%] bottom-[0%] left-[22.74%]">
            <div className="absolute h-[25.41%] w-full top-[74.59%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-[16.13%] w-full top-[0%] right-[0%] bottom-[83.87%] left-[0%]">
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-blueviolet w-[25rem] h-[0.44rem] overflow-hidden opacity-[0.2]" />
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-slateblue w-[25rem] h-[0.44rem] overflow-hidden" style={{ width: getWinRate(state.userInfo.winnerGame || [], state.userInfo.loserGame || []) }} />
              </div>
              <div className="absolute w-[300px] top-[25.81%] left-[0%] leading-[150%] inline-block">
                winrate {getWinRate(target.winnerGame || [], target.loserGame || [])}
              </div>
            </div>
            <div className="absolute h-[61.48%] w-full top-[0%] right-[0%] bottom-[38.52%] left-[0%] flex flex-row items-center justify-center gap-[1.94rem] text-center text-[2.5rem]">
              <div className="relative w-[7.06rem] h-[4.69rem]">
                <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                  {getGameCount(target.winnerGame || [], target.loserGame || [])}
                </b>
                <div className="absolute top-[60%] left-[24.78%] text-[1.25rem] leading-[150%]">
                  games
                </div>
              </div>
              <div className="relative w-[7.06rem] h-[4.69rem] text-midnightblue">
                <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                  {getGameCount(target.winnerGame || [])}
                </b>
                <div className="absolute top-[60%] left-[31.86%] text-[1.25rem] leading-[150%]">
                  wins
                </div>
              </div>
              <div className="relative w-[7.06rem] h-[4.69rem] text-brown">
                <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                  {getGameCount(target.loserGame || [])}
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
            {
              target.id == state.userInfo.id && ( // activate nickname change function
                <>
                  <span ref={textRef} style={{ opacity: 0, position: 'absolute', whiteSpace: 'nowrap' }}>
                    {newNickname || target.nickname}
                  </span>
                  <form onSubmit={onChangeNickNameSubmit}>
                    <input ref={inputRef} onChange={onChangeNickname} type="text" maxLength={12} className="relative placeholder:text-[#555555] bg-transparent" placeholder={target.nickname} />
                  </form>
                  <button onClick={changeNicknameHandler}>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                      alt=""
                      src="/editbutton.svg"
                    />
                  </button>
                </>
              )
            }
            {
              target.id != state.userInfo.id && (
                <div className="relative">{target.nickname}</div>
              )
            }
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[6.25rem] h-[6.25rem]">
            <img
              className="rounded-[70%] absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={target.id == state.userInfo.id ? state.userInfo.avatar : target.avatar}
            />
          </div>
          {
            target.id == state.userInfo.id && ( // activate avatar change function
              <div
                className="absolute top-[0rem] left-[0rem] w-[6.25rem] h-[6.25rem] hover:bg-gray-300 transition-opacity duration-300"
                style={{ opacity: avatarHover ? 1 : 0 }}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                {
                  avatarHover && (
                      <ImageUploading
                        multiple
                        value={images}
                        onChange={onChangeImage}
                        maxNumber={42}
                        dataURLKey="data_url"
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          // write your building UI
                          <div className="upload__image-wrapper">
                            <button
                              style={isDragging ? { color: 'red' } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                            >
                              <div className="rounded-[70%] bg-black opacity-10 absolute h-full w-full" />
                              <img src="avatar.svg"/>
                            </button>
                          </div>
                        )}
                      </ImageUploading>
                  )
                }
              </div>
            )
          }
        </div>
        <img
          className="relative w-[0.13rem] h-[9.5rem] z-[1]"
          alt=""
          src="/line-13.svg"
        />
        <SearchUsers />
      </div>
      <button onClick={() => { actions.setShowInfo(false) }}>
        <img
          className="absolute top-[0.63rem] right-[0.75rem] w-[2rem] h-[2rem] overflow-hidden"
          alt=""
          src="/cancelbutton.svg"
        />
      </button>
    </>
  );
};