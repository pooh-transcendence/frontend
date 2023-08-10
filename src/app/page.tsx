import React, { useContext } from "react";
import MainFrame from "@/app/MainFrame";
import UserProvider from "@/app/UserProvider"

export default function Main() {
  return (
      <UserProvider>
        <MainFrame/>
      </UserProvider>
    )
  }