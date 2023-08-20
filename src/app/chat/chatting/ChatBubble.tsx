import PropTypes from "prop-types";
import React from "react";
import "./ChatBubble.css";

interface Props {
  nickname: string;
  messageText: string;
  side: "right" | "left";
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
    </>
  )
  return (
    <div className={`chat-bubble ${side}`}>
      {side === "left" && (
        <>
          <div className="frame">
            <div className="your-name">{nickname}</div>
          </div>
          <div className="bubble-left">
            <div className="div">
              <div className={`rectangle chat-bubble-instance`} />
              <div className={`rectangle-2 design-component-instance-node`} />
              <div className={`rectangle-3 chat-bubble-3 rotate-180 transform scale-x-[-1]`} />
            </div>
            <div className={`text-wrapper side-left-2`}>
              <div className={`text $chat-bubble-4 break-all`}>{messageText}</div>
            </div>
            <div className="frame-2 ">
              <div className={`rectangle-4 chat-bubble-5`} />
              <div className={`rectangle-2 design-component-instance-node`} />
              <img
                className="union"
                src="https://generation-sessions.s3.amazonaws.com/b08ba0ac5dda4df0736872db9458aef3/img/union-3.svg"
              />
            </div>
          </div>
        </>
      )}

      {side === "right" && (
        <div className="bubble-left-2">
          <div className="div">
            <div className={`rectangle-5 chat-bubble-instance`} />
            <div className={`rectangle-6 design-component-instance-node`} />
            <div className={`rectangle-7 chat-bubble-3 rotate-180 transform scale-x-[-1]`} />
          </div>
          <div className={`div-wrapper side-right-2`}>
            <div className={`text-2 chat-bubble-4 break-all`}>{messageText}</div>
          </div>
          <div className="frame-2">
            <img
              className="union-2"
              src="https://generation-sessions.s3.amazonaws.com/b08ba0ac5dda4df0736872db9458aef3/img/union-1.svg"
            />
            <div className={`rectangle-6 design-component-instance-node`} />
            <div className={`rectangle-8 scale-x-[-1]`} />
          </div>
        </div>
      )}
    </div>
  );
};


ChatBubble.propTypes = {
  nickname: PropTypes.string,
  messageText: PropTypes.string,
  side: PropTypes.oneOf(["right", "left"]),
};
