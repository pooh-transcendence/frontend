'use client'
import React from "react"
import Chat from "./chat/page"

import rootReducer from './redux/rootReducer';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { socket } from '@/app/api/socket';

const rootStore=createStore(rootReducer, applyMiddleware(thunk));

export default function MainFrame() {
    return (
      <Provider store={rootStore}>
        <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-neutral-100 to-slate-50">
          <div className="flex justify-center items-center w-[1280px] h-[832px] relative gap-[12px]" >
            <div className="w-[800px] h-[650px] z-1 rounded-[10px] border border-neutral-600">
              {/* <Somewhat/> */}
            </div>
            <div className="w-[300px] h-[650px] rounded-[10px] border border-neutral-600">
              <Chat/>
            </div>
          </div>
        </div>
      </Provider>
    )
  }