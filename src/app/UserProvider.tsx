import React, { useState } from 'react';
import { UserContext, chatStates, mainStates} from './UserContext';

export default function UserProvider({ children } : { children: React.ReactNode }) {
  const [chatState, setChatState] = useState(chatStates.friendList);
  const [mainState, setMainState] = useState(mainStates.gameLobby);
  const [friendChattingInfo, setFriendChattingInfo] = useState({});

  const userContextValue = {
    state: {
      userInfo: null,
      chatState,
      mainState,
      friendChattingInfo,
    },
    actions: {
      setChatState: (newState: chatStates) => setChatState(newState),
      setMainState: (newState: mainStates) => setMainState(newState),
      setFriendChattingInfo: (newState) => setFriendChattingInfo(newState),
    },
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  )
};