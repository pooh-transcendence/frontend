import React, { useState, useEffect } from "react";
import Link from 'next/link'

function Test()
{
  const [ft_oauth, get_oauth]=useState(undefined);
  const [ft_acc_token, get_acc_token]=useState(undefined);
  const [ft_token_type, get_token_type]=useState(undefined);
  const [ft_token_until, get_token_until]=useState(undefined);

  useEffect(() => {
    get_oauth(localStorage.getItem("42_oauth"));
    get_acc_token(localStorage.getItem("42_acc_token"));
    get_token_type(localStorage.getItem("42_token_type"));
    get_token_until(localStorage.getItem("42_token_until"));
  }, []);

  return (
    <>
      {ft_acc_token}
      <br/>
      {ft_token_type}
      <br/>
      {ft_token_until}
      <br/>
      <Link href="/login">Login</Link>
      <br/>
      <Link href="/logout">Logout</Link>
      <br/>
      <Link href="/get">Get</Link>
      <br/>
      <br/>
      <pre>{ft_oauth}</pre>
    </>
  );
}

export default Test;