import { io } from 'socket.io-client';

export const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmlja25hbWUiOiJrbGV3IiwiZnRJZCI6ImtsZXciLCJpYXQiOjE2OTE2NDUwNjAsImV4cCI6MTY5NDIzNzA2MH0.j_n-QvcfvC0oP-gvTUcxf9mSVKEY9P4MRQj7kUIBi6Y";

export let socket = io("http://localhost:8484/channel",
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

