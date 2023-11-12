import { io } from 'socket.io-client';
import axios from 'axios';

export const redirectUri = () => {
  return (
    process.env.REDIRECT_URL ||
    'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-a2c38797979939f1a4da47d3fc33383b156e4789cbe713b94b800d6e615c3753&redirect_uri=http%3A%2F%2F13.59.201.111%2Fft_oauth_redirection&response_type=code' ||
    'FUCK'
  );
};

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

let userId: number | null = null;
export function setUserId(newToken: number | null) {
  userId = newToken;
}
export function getUserId(): number | null {
  return userId;
}

export const baseUrl = ''; // process.env.BACKEND_IP || 'http://localhost:3000';

export let socket = io(baseUrl + '/channel', {
  path: '/socket.io',
  transports: ['websocket'],
  auth: {
    authorization: null,
  },
});
export let gameSocket = io(baseUrl + '/game', {
  path: '/socket.io',
  transports: ['websocket'],
  auth: {
    authorization: null,
  },
});

export const updateSocket = () => {
  // socket.disconnect();
  // gameSocket.disconnect();

  socket = io(baseUrl + '/channel', {
    path: '/socket.io',
    transports: ['websocket'],
    auth: {
      authorization: auth,
    },
  });
  gameSocket = io(baseUrl + '/game', {
    path: '/socket.io',
    transports: ['websocket'],
    auth: {
      authorization: auth,
    },
  });

  console.log(socket, gameSocket);
};

export const api_get = (url: string, params: Object | void) => {
  return axios.get(baseUrl + url, {
    headers: { Authorization: `Bearer ${auth!}` },
    params: params,
  });
};

export const api_post = (url: string, body: object) => {
  return axios.post(baseUrl + url, body, {
    headers: { Authorization: `Bearer ${auth!}` },
  });
};

export const api_post_formData = (url: string, body: object) => {
  return axios.post(baseUrl + url, body, {
    headers: {
      Authorization: `Bearer ${auth!}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const api_patch = (url: string, body: object) => {
  return axios.patch(baseUrl + url, body, {
    headers: { Authorization: `Bearer ${auth!}` },
  });
};

export const api_delete = (url: string, body: object) => {
  return axios.delete(baseUrl + url, {
    data: body,
    headers: { Authorization: `Bearer ${auth!}` },
  });
};
