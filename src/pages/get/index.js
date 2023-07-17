import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link'

function Get()
{
  const [res, setRes]=useState(undefined);
  const router = useRouter();
  
  useEffect(()=> {
    axios.get("https://api.intra.42.fr/v2/me", 
    {
        headers:{
        "Authorization": localStorage.getItem("42_token_type")+" "+localStorage.getItem("42_acc_token")
        }      
    })
    .then((apiRes)=> {
        setRes(apiRes);
        console.log(apiRes);
    })
    .catch((error)=> {
        console.log(error);
        router.push("/login");
    });
  }, [res, router]);

  return (
    <>
      <Link href="/">Home</Link>
      <br/>
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </>
  )
}

export default Get;