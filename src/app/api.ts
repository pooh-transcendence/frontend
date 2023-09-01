import { io } from 'socket.io-client';
import axios from 'axios';

export const redirectUri = () => {
    return `https://api.intra.42.fr/oauth/authorize?client_id=${process.env.FT_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A6002%2Fft_oauth_redirection&response_type=code`;
}

let auth: string | null = null;
export function setAuth(newToken: string | null) {
    auth = newToken;
}
export function getAuth(): string | null {
    return auth;
}

let refToken: string | null = null;
export function setRefToken(newToken: string) {
    refToken = newToken;
}
export function getRefToken(): string | null {
    return refToken;
}

let userId: string | null = null;
export function setUserId(newToken: string | null) {
    userId = newToken;
}
export function getUserId(): string | null {
    return userId;
}

// export const baseUrl="http://localhost:3000";
// export const baseUrl = "http://10.19.221.159:3000"; // yubchoi
export const baseUrl = "http://10.19.233.166:3000"; // joowpark

export let socket = io(baseUrl + "/channel",
    {
        path: "/socket.io",
        transports: ['websocket'],
        auth: {
            "authorization": null,
        },
    });
export let gameSocket = io(baseUrl + "/game",
    {
        path: "/socket.io",
        transports: ['websocket'],
        auth: {
            "authorization": null,
        },
    });

export const updateSocket = () => {
    socket.disconnect();

    socket = io(baseUrl + "/channel",
        {
            path: "/socket.io",
            transports: ['websocket'],
            auth: {
                "authorization": auth,
            },
        });
    gameSocket = io(baseUrl + "/game",
        {
            path: "/socket.io",
            transports: ['websocket'],
            auth: {
                "authorization": auth,
            },
        })
};

export const api_get = (url: string, params: Object | void) => {
    return axios.get(baseUrl + url, {
        headers: { Authorization: `Bearer ${auth!}` },
        params: params
    });
}

export const api_post = (url: string, body: object) => {
    return axios.post(baseUrl + url,
        body, { headers: { Authorization: `Bearer ${auth!}` } });
}

export const api_patch = (url: string, body: object) => {
    return axios.patch(baseUrl + url,
        body, { headers: { Authorization: `Bearer ${auth!}` } });
}

export const api_delete = (url: string, body: object) => {
    return axios.delete(baseUrl + url, {
        data: body,
        headers: { Authorization: `Bearer ${auth!}` }
    });
};