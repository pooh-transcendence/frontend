import PropTypes from "prop-types";
import React from "react";
import "./ChatBubble.css";

interface Props {
  nickname: string;
  messageText: string;
  side: "right" | "left" | "center";
}


export const ChatBubble = ({
  nickname = "Your name",
  messageText = "Your message goes here",
  side,
}: Props): JSX.Element => {

  return (
    <>
      {
        side === "left" && (
          <div className={`left left-instance`}>
            <div className="name">
              <div className="text-wrapper">{nickname}</div>
            </div>
            <div className="main-frame">
              <div className="msg-frame">
                <div className="text-frame">
                  <div className="your-message-goes">
                    {messageText}
                  </div>
                </div>
              </div>
              <div className="tail-frame">
                <img
                  className="union"
                  src="chatbubble_left_tail.svg"
                />
              </div>
            </div>
          </div>
        )
      }
      {
        side === "right" && (
          <div className={`right right-instance`}>
            <div className="main-frame">
              <div className="msg-frame">
                <div className="text-frame">
                  <div className="text-wrapper">{messageText}</div>
                </div>
              </div>
              <div className="tail-frame">
                <img
                  className="union"
                  src="chatbubble_right_tail.svg"
                />
              </div>
            </div>
          </div>
        )
      }
      {
        side === "center" && (
          <div className="center text-center w-[270px] text-sm">
            {messageText}
          </div>
        )
      }
    </>
  )
};


ChatBubble.propTypes = {
  nickname: PropTypes.string,
  messageText: PropTypes.string,
  side: PropTypes.oneOf(["right", "left"]),
};
