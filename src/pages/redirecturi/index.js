import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import process from "process";

function GetToken()
{
  const searchParams=useSearchParams();
  const router=useRouter();
  const postReq=(codeRes)=>{
    axios.post("https://api.intra.42.fr/oauth/token", {
      "grant_type": "authorization_code",
      "client_id": process.env.FT_CLIENT_ID,
      "client_secret": process.env.FT_CLIENT_SECRET,
      "code": codeRes,
      "redirect_uri": "http://localhost:6001/redirecturi",
    })
    .then((tokenRes) => {
      console.log(tokenRes);
      localStorage.setItem("42_acc_token", tokenRes.data.access_token);
      localStorage.setItem("42_token_type", tokenRes.data.token_type);
      localStorage.setItem("42_token_until", tokenRes.data.secret_valid_until);
      localStorage.setItem("42_oauth", JSON.stringify(tokenRes.data, null, 2));
    })
    .then(() =>
    {
      router.back();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(()=>{
    postReq(searchParams.get("code"));
  }, [router, searchParams]);

  return (
    <>Loading...</>
  );
}

export default GetToken;