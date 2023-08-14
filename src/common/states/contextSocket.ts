import {createContext} from "react";
import io, { Socket } from "socket.io-client";

const ENDPOINT = "http://localhost:6002";
export const socket = io(ENDPOINT, {
    transports: ['websocket'],
    withCredentials: true,
});
export const SocketContext = createContext<Socket>({} as Socket);