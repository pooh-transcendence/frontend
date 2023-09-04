import { getGameSettingString } from "@/app/GameLobby/cards/gameCard"
import { gameInfo } from "@/app/UserContext"

// todo
export default function MatchCard({ game, relativeWinRate, leftUserId }: { game: gameInfo, relativeWinRate: string, leftUserId: number }) {
  const left = game.winner.id == leftUserId ? game.winner : game.loser;
  const right = game.winner.id == leftUserId ? game.loser : game.winner;

  if (game.winner.id == leftUserId) { // left is winner
    return (
      <div className="Property1Win w-[900px] h-[65px] relative">
        <div className="Winnercrown w-9 h-[29.25px] left-[221px] top-[13.62px] absolute opacity-60">
          <img src="winnercrown.svg" className="Group w-[33.78px] h-[29.25px] left-[1.11px] top-0 absolute" />
        </div>
        <div className="Matchresult w-[604px] h-[37px] left-[30px] top-[14px] relative">
          <div className="User2 w-[220px] left-[331px] top-0 relative justify-start items-center gap-2.5 inline-flex">
            <img className="avatar2 w-8 h-8" src={right.avatar ? right.avatar : "/pngegg-4@2x.png"} />
            <div className="Frame96 justify-center items-end gap-2.5 flex">
              <div className="Username2 whitespace-nowrap text-neutral-600 text-[28px] font-normal">{right.nickname}</div>
              <div className="Vs750 text-neutral-600 text-sm font-normal">vs {relativeWinRate}</div>
            </div>
          </div>
          <div className=" w-[69px] h-[37px] left-[262px] top-0 absolute text-center text-neutral-600 text-[28px] font-normal">{game.winScore} : {game.loseScore}</div>
          <div className="User1 left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
            <div className="Username1 w-[220px] h-[37px] text-right text-neutral-600 text-[28px] font-bold">{left.nickname}</div>
            <img className="avatar1 w-8 h-8" src={left.avatar ? left.avatar : "/pngegg-4@2x.png"} />
          </div>
        </div>
        <div className="gameTime absolute text-right text-neutral-600 text-sm font-normal" style={{ right: '15px', left: 'auto' }}>
          {game.updatedAt}
        </div>
        <div className="gameSettings top-[14px] absolute text-right text-neutral-600 text-base font-normal w-[20rem]" style={{ right: '15px', left: 'auto' }}>
          {getGameSettingString(game)}
        </div>
        <div className="line left-[3px] top-0 relative text-neutral-600 text-base font-normal">{game.gameType}</div>
        <img className="absolute top-[3.94rem] left-[0rem] w-[56.25rem] h-[0.13rem]" src="line-14.svg" />
      </div>
    )
  }
  else { // left is loser
    return (
      <div className="Property1Win w-[900px] h-[65px] relative">
        <div className="Winnercrown w-9 h-[29.25px] left-[221px] top-[13.62px] absolute opacity-60">
          <img src="winnercrown.svg" className="Group w-[33.78px] h-[29.25px] left-[1.11px] top-0 absolute" />
        </div>
        <div className="Matchresult w-[604px] h-[37px] left-[30px] top-[14px] relative">
          <div className="User2 w-[220px] left-[331px] top-0 relative justify-start items-center gap-2.5 inline-flex">
            <img className="avatar2 w-8 h-8" src={right.avatar} />
            <div className="Frame96 justify-center items-end gap-2.5 flex">
              <div className="Username2 text-neutral-600 text-[28px] font-normal">{right.nickname}</div>
              <div className="Vs750 text-neutral-600 text-sm font-normal">vs {relativeWinRate}</div>
            </div>
          </div>
          <div className=" w-[69px] h-[37px] left-[262px] top-0 absolute text-center text-neutral-600 text-[28px] font-normal">{game.loseScore} : {game.winScore}</div>
          <div className="User1 left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
            <div className="Username1 w-[220px] h-[37px] text-right text-neutral-600 text-[28px] font-bold">{left.nickname}</div>
            <img className="avatar1 w-8 h-8" src="https://via.placeholder.com/32x32" />
          </div>
        </div>
        <div className="0726170934 left-[785px] top-[37px] absolute text-right text-neutral-600 text-sm font-normal">{game.updatedAt}</div>
        <div className="BallSpeedModerate left-[747px] top-[14px] absolute text-right text-neutral-600 text-base font-normal">{getGameSettingString(game)}</div>
        <div className="line left-[3px] top-0 relative text-neutral-600 text-base font-normal">{game.gameType}</div>
        <img className="absolute top-[3.94rem] left-[0rem] w-[56.25rem] h-[0.13rem]" src="line-14.svg" />
      </div>
    )
  }

  // left win
}

