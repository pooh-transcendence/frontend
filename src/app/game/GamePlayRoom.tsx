'use client'

import { Modal, Stack, Typography, Box, Button } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SocketContext } from "./common/states/contextSocket";
import GameRoom from "./GameRoom";

function GamePlayRoom() {
    const [winner, setWinner] = useState<string>();
    const socket = useContext(SocketContext);
    const navigate = useNavigate();
    const location = useLocation();

    // const player1 = location.state.player1;
    // const player2 = location.state.player2;
    const player1 = "klew";
    const player2 = "tjo";
    const gameRoomName = `${player1}vs${player2}`;

    function readyHandler(e: React.MouseEvent<HTMLElement>) {
        socket.emit("requestStart", gameRoomName);
    }
    
    return (
        <>
            <Stack>
                {/* <GameRoom p1="klew" p2="tjo"/> */}
                <GameRoom/>
                <Button onClick={readyHandler}>
                    GET READY FOR THE NEXT BATTLE
                </Button>
            </Stack>
            <Modal open={winner ? true : false}>
                <Box>
                    <Stack>
                        <Typography variant="h3" component="h4" align="center">
                            {winner === location.state.player1 ?  " You win!! " : " You Lose!! "}
                        </Typography>
                        <Button onClick={() => {navigate("/GameLobby")}}>Go To Lobby</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
}

export default GamePlayRoom;