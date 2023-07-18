import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'

function Login()
{
  const login=()=>{
    window.location.replace(
      `https://api.intra.42.fr/oauth/authorize?client_id=${process.env.FT_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A6002%2Fredirecturi&response_type=code`
      );
  };

  const router = useRouter();

  useEffect(()=>{
    const token=localStorage.getItem("42_token_until");
    // if(token===undefined || token < Math.floor(Date.now()/1000)) // expired
      login();
    // else
    // {
      // alert("already logined!");
      // router.back();
    // }
  }, [router]);
  
  return <>loading...</>;
}

export default Login;