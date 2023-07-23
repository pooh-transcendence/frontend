import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { AppProps } from 'next/app';

interface Props extends AppProps {}

function App({ Component, pageProps }: Props) {
  const [ft_oauth, set_oauth] = useState<string | null>(null);
  const [ft_acc_token, set_acc_token] = useState<string | null>(null);
  const [ft_token_type, set_token_type] = useState<string | null>(null);
  const [ft_token_until, set_token_until] = useState<string | null>(null);

  useEffect(() => {
    set_oauth(localStorage.getItem("42_oauth"));
    set_acc_token(localStorage.getItem("42_acc_token"));
    set_token_type(localStorage.getItem("42_token_type"));
    set_token_until(localStorage.getItem("42_token_until"));
  }, []);

  return (
    <>
        {ft_acc_token}
        <br />
        {ft_token_type}
        <br />
        {ft_token_until}
        <br />
        <Link href="/login">Login</Link>
        <br />
        <Link href="/logout">Logout</Link>
        <br />
        <Link href="/get">Get</Link>
        <br />
        <Link href="/piscine">Piscine rank</Link>
        <br />
        <pre>{ft_oauth}</pre>
    </>
  );
}

export default App;
