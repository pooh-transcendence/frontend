import { io } from 'socket.io-client';
import axios from 'axios';

// export const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibmlja25hbWUiOiJoZWxsbzIiLCJmdElkIjoiam9vd3Bhcmsyc3RkdWVudC5zZW91bC5rciIsImlhdCI6MTY5MTQ2MDE3MiwiZXhwIjoxNjk0MDUyMTcyfQ.mAWRJ_UMpeDQ1zHPX5V4K3q2E63-OuptuViqWeIcEuA";
// export const baseUrl="http://localhost:3000";
export const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibmlja25hbWUiOiJqb293cGFyayIsImZ0SWQiOiJqb293cGFyayIsImlhdCI6MTY5MTczMTA4OCwiZXhwIjoxNjk0MzIzMDg4fQ.F2R2Qf02IqY9pwvUzKQVoj8GayO2N9f3l9K3t4qt4DM";
export const baseUrl="http://10.18.235.159:8484";

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

