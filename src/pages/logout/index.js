import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Reset()
{
  const router=useRouter();

  useEffect(()=> {
    localStorage.removeItem("42_acc_token");
    localStorage.removeItem("42_token_type");
    localStorage.removeItem("42_token_until");
    localStorage.removeItem("42_oauth");
    
    router.back();
  }, [router]);
  
return (
    <>
    Logout
    </>
);
}

export default Reset;