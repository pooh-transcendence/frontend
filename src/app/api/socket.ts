import { io } from 'socket.io-client';

export const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibmlja25hbWUiOiJoZWxsbzIiLCJmdElkIjoiam9vd3Bhcmsyc3RkdWVudC5zZW91bC5rciIsImlhdCI6MTY5MTQ2MDE3MiwiZXhwIjoxNjk0MDUyMTcyfQ.mAWRJ_UMpeDQ1zHPX5V4K3q2E63-OuptuViqWeIcEuA";

export let socket = io("http://localhost:3000/channel",
// export let socket = io("http://10.18.228.34:8484/channel",
    {
        path: "/socket.io", 
        transports: ['websocket'],
        extraHeaders: { 
            "authorization": auth,
        },
        auth: {
            "authorization": auth,
        },
    });

socket.on('connect', ()=>{
    console.log("connected on ws");
    console.log(socket);
});

