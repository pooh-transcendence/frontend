import Image from "next/image";
import Link from "next/link";

export default function UserImage() {
    return (
        <>
    <div className="w-[697px] h-[41px] relative">
        <Image src="/userImage.png" alt="Logo" width={25} height={25} />
        <div className="w-[149px] h-[21px] left-[495px] top-[15px] absolute text-right text-neutral-600 text-[13px] font-normal">owner</div>
        <div className="left-[3.37rem] top-[6.69rem] absolute justify-center items-end gap-3 inline-flex">
            <div className="text-neutral-600 text-2xl font-normal">title</div>
            <div className="justify-center items-end gap-[3px] flex">
                <div className="text-neutral-600 text-[13px] font-normal">3</div>
                <div className="text-neutral-600 text-[13px] font-normal">people</div>
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
            </div>
        </div>
        <div className="w-8 h-8 left-[658px] top-[4px] absolute" />
    </div>
    </>
    );
}
