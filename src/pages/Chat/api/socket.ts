import { io } from 'socket.io-client';

// export let socket = io("http://localhost:3000/channel",
export let socket = io("http://10.18.235.159:8484/channel",
    {
        path: "/socket.io", 
        transports: ['websocket'],
        extraHeaders: { 
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibmlja25hbWUiOiJ0am8iLCJmdElkIjoidGpvIiwiaWF0IjoxNjkxMTQ1MTc3LCJleHAiOjE2OTM3MzcxNzd9.FcqBazn_DKyMxKya_wX35TPhS-CAcdmdlEC2xZiKTYE",
        },
        auth: {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibmlja25hbWUiOiJ0am8iLCJmdElkIjoidGpvIiwiaWF0IjoxNjkxMTQ1MTc3LCJleHAiOjE2OTM3MzcxNzd9.FcqBazn_DKyMxKya_wX35TPhS-CAcdmdlEC2xZiKTYE",
        },
    });