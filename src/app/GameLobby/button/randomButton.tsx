


export default function RandomButton() {

    const randomMatchingHandler=() => {
        console.log("randomMatchingHandler");
    }

    return (
        <>
            <div className="absolute h-[7.54%] w-[28.13%] top-[9.23%] right-[9.25%] bottom-[83.23%] left-[62.63%]">
                <img
                className="absolute top-[2.56rem] left-[0.02rem] w-[14.05rem] h-[0.5rem]"
                alt=""
                src="/line-3.svg"
                />
                <i className="absolute top-[0rem] left-[0.06rem] inline-block w-[11.44rem] h-[1rem]">
                play with online user
                </i>
                <button onClick={randomMatchingHandler}>
                    <i className="flex-row absolute top-[0.69rem] text-[1.5rem] w-[14rem] font-bold text-right text-slateblue">
                        <span>Random</span>
                        <span className="text-dimgray"> Matching</span>
                    </i>
                </button>
            </div>
      </>
    );
}