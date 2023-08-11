import { io } from 'socket.io-client';
import axios from 'axios';

// export const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibmlja25hbWUiOiJoZWxsbzIiLCJmdElkIjoiam9vd3Bhcmsyc3RkdWVudC5zZW91bC5rciIsImlhdCI6MTY5MTQ2MDE3MiwiZXhwIjoxNjk0MDUyMTcyfQ.mAWRJ_UMpeDQ1zHPX5V4K3q2E63-OuptuViqWeIcEuA";
// export const baseUrl="http://localhost:3000";
export const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibmlja25hbWUiOiJrbGV3IiwiZnRJZCI6ImtsZXciLCJpYXQiOjE2OTE3MzcwNTgsImV4cCI6MTY5NDMyOTA1OH0.Fh7i1fLvKjPbHpjS0sH80nYLq_InPidkqOd1SC-iYoQ";
export const baseUrl="http://10.19.233.166:8484";

export let socket = io(baseUrl+"/channel",
    {
        path: "/socket.io", 
        transports: ['websocket'],
        auth: {
            "authorization": auth,
        },
    });

export const api_get=(url: string) => {
    return axios.get(baseUrl+url, {
        headers: {Authorization: `Bearer ${auth}`}});
}

export const api_post=(url: string, body: object) => {
    return axios.post(baseUrl+url, 
        body, { headers: {Authorization: `Bearer ${auth}`}});
}

