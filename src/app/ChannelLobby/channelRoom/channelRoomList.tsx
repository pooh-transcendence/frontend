import UserImage from "@/components/userImage";


export default function ChannelRoomList() {
    return (
      <>
        <img
          className="absolute top-[0.19rem] left-[-0.25rem] w-[47.06rem] h-[38.19rem]"
          alt=""
          src="/listframe.svg"
        />
        <div className="absolute h-[4.13%] w-[33.15%] top-[0%] right-[60.27%] bottom-[95.87%] left-[6.58%]">
          <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
            channel list
          </div>
        </div>
        <img
          className="absolute h-[3.8%] w-[3.09%] top-[0.47%] right-[94.77%] bottom-[95.74%] left-[2.15%]  max-w-full max-h-full"
          alt=""
          src="/vector1.svg"
        />
        <div className="absolute h-[87.46%] w-[93.56%] top-[9.24%] right-[2.82%] bottom-[3.3%] left-[3.62%] overflow-y-auto flex flex-col items-start justify-start gap-[0.81rem] text-right text-[0.81rem]">
          <div className="flex flex-col items-center justify-center text-center text-[1rem]">
            <div className="relative">public</div>
          </div>
          <UserImage />
          <UserImage />
          <UserImage />
          <UserImage />
          <UserImage />
          <UserImage />
          <div className="flex flex-col items-center justify-center text-center text-[1rem]">
            <div className="relative">protected</div>
          </div>
          <UserImage />
          <UserImage /> 
        </div>
        </>
    );
}