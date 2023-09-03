import GamePlayRoomPages from "./gameplay3/page";

export default function GameFrame() {
    return (
        <>
            <section className="w-[800px] h-[650px]">
                <div className="flex items-center justify-center h-full w-full rounded-3xs box-border border-[3px] border-solid border-dimgray">
                    <GamePlayRoomPages />
                </div>
            </section>
        </>
    )
}