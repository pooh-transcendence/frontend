import { io } from 'socket.io-client';
import axios from 'axios';

export const redirectUri=() => {
    return `https://api.intra.42.fr/oauth/authorize?client_id=${process.env.FT_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A6002%2Fft_oauth_redirection&response_type=code`;
}

let auth: string | null =null;
export function setAuth(newToken: string)
{
    auth=newToken;
}
export function getAuth():string | null
{
    return auth;
}

let userId: string | null=null;
export function setUserId(newToken: string)
{
    userId=newToken;
}
export function getUserId():string | null
{
    return userId;
}

export const baseUrl="http://localhost:3000";
// export const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibmlja25hbWUiOiJqb293cGFyayIsImZ0SWQiOiJqb293cGFyayIsImlhdCI6MTY5MTczMTA4OCwiZXhwIjoxNjk0MzIzMDg4fQ.F2R2Qf02IqY9pwvUzKQVoj8GayO2N9f3l9K3t4qt4DM";
// export const baseUrl="http://10.19.233.166:8484";

// export let socket = io(baseUrl+"/channel",
// {
//     path: "/socket.io", 
//     transports: ['websocket'],
//     auth: {
//         "authorization": auth,
//     },
// });
export let socket: any = null;

export const updateSocket=() => {
    console.log("socket updated using", auth);
    socket = io(baseUrl+"/channel",
    {
        path: "/socket.io", 
        transports: ['websocket'],
        auth: {
            "authorization": auth,
        },
    });
};

export const api_get=(url: string, params: Object | void) => {
    return axios.get(baseUrl+url, {
        headers: {Authorization: `Bearer ${auth!}`},
        params: params});
}

export const api_post=(url: string, body: object) => {
    return axios.post(baseUrl+url, 
        body, { headers: {Authorization: `Bearer ${auth!}`}});
}

