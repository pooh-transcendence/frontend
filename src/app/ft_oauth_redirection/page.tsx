'use client'

import React, { useEffect } from "react";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";
import { UserContext, userInfo } from "../UserContext";
import { api_get, api_post, setUserId } from "../api";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Oauth() {
    const params=useSearchParams();
    const {state, actions}=useContext(UserContext);
    const router=useRouter();

    const postFtOauth=(codeRes: any) => {
        axios.post("https://api.intra.42.fr/oauth/token", {
            "grant_type": "authorization_code",
            "client_id": process.env.FT_CLIENT_ID,
            "client_secret": process.env.FT_CLIENT_SECRET,
            "code": codeRes,
            "redirect_uri": "http://localhost:6002/ft_oauth_redirection",
        }).then(async (res) => {
            console.log("oauth res", res);
            await api_post("/auth/signIn", {ftToken: res.data.access_token}).then(async (res) => {
                console.log("internal token res", res);
                setUserId(res.data.data.userId);
                sessionStorage.setItem("qrCodeURL", res.data.data.qrCodeURL);
            }).catch((e) => {
                console.log(e);
            }).then(() => {
                router.push("/");
            });
        }).catch((e) => {
            console.log("42 oauth failed", e);
            router.push("/"); //if failed, it may retry all procedures.
        });
    };
    
    useEffect(() => {
        postFtOauth(params.get("code"));
    }, []);

    return (
        <>
            oauth loginingingingingingingingni......
        </>
    )
}