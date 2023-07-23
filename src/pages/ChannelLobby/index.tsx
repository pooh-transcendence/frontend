import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "../index.module.css";
import PUBLIC_BUTTION from "../../assets/public.svg";

import Image from "next/image";

const ChannelLobby: NextPage = () => {
  const onSideButton2Click = useCallback(() => {
    // Please sync "gameLobby" to the project
  }, []);

  return (
    <div className={styles.channellobby}>
      <div className={styles.mainFramechannel}>
        <div className={styles.frame}>
          <div className={styles.bg} />
          <img
            className={styles.samplelogoIcon}
            alt=""
            src="/samplelogo@2x.png"
          />
          <img
            className={styles.sidebutton2Icon}
            alt=""
            src="/sidebutton2.svg"
            onClick={onSideButton2Click}
          />
          <img
            className={styles.sidebutton2Icon1}
            alt=""
            src="/sidebutton21.svg"
          />
          <div className={styles.chatsection}>
            <div className={styles.frame1} />
          </div>
          <div className={styles.userprofile}>
            <img className={styles.pngegg1Icon} alt="" src="/pngegg-1@2x.png" />
            <div className={styles.nickname}>mynameis2</div>
            <div className={styles.userprofileChild} />
          </div>
          <img className={styles.backbuttonIcon} alt="" src="/backbutton.svg" />
        </div>
        <div className={styles.mainframe}>
          <div className={styles.frame1} />
        </div>
      </div>
      <div className={styles.channellist}>
        <div className={styles.frame1} />
        <div className={styles.channellist1}>
          <div className={styles.listframe}>
            <img className={styles.bgIcon} alt="" src="/bg.svg" />
            <div className={styles.listbuttons}>
              <div className={styles.publicbutton}>
                <div className={styles.public}>public</div>
                <img
                  className={styles.publicFill0Wght300Grad0OpsIcon}
                  
                  src="../../assets/public.svg"
                />
              </div>
              <img
                className={styles.listbuttonsChild}
                alt=""
                src="/line-4.svg"
              />
              <div className={styles.protectedbutton}>
                <div className={styles.protected}>protected</div>
                <img
                  className={styles.publicFill0Wght300Grad0OpsIcon}
                  alt=""
                  src="/lock-fill0-wght300-grad0-opsz48-1.svg"
                />
              </div>
              <img
                className={styles.listbuttonsChild}
                alt=""
                src="/line-5.svg"
              />
              <div className={styles.publicbutton}>
                <div className={styles.public}>
                  <p className={styles.testWriting}>create</p>
                </div>
                <img
                  className={styles.publicFill0Wght300Grad0OpsIcon}
                  alt=""
                  src="/chat-add-on-fill0-wght300-grad0-opsz48-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.titlecard}>
            <div className={styles.title}>channel list</div>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.matchs}>
            <div className={styles.channelcard}>
              <img
                className={styles.channelcardChild}
                alt=""
                src="/line-2.svg"
              />
              <img
                className={styles.pngegg2Icon}
                alt=""
                src="/pngegg-2@2x.png"
              />
              <div className={styles.owner}>owner</div>
              <div className={styles.nameParent}>
                <div className={styles.name}>title</div>
                <div className={styles.winrateParent}>
                  <div className={styles.name}>3</div>
                  <div className={styles.name}>people</div>
                </div>
                <img className={styles.lockIcon} alt="" src="/lock.svg" />
              </div>
              <img
                className={styles.enterbuttonIcon}
                alt=""
                src="/enterbutton.svg"
              />
            </div>
            <div className={styles.channelcard}>
              <img
                className={styles.channelcardChild}
                alt=""
                src="/line-21.svg"
              />
              <img
                className={styles.pngegg2Icon}
                alt=""
                src="/pngegg-21@2x.png"
              />
              <div className={styles.owner}>ownername</div>
              <div className={styles.nameParent}>
                <div className={styles.name}>sfesfe</div>
                <div className={styles.winrateParent}>
                  <div className={styles.name}>1</div>
                  <div className={styles.name}>person</div>
                </div>
                <img className={styles.lockIcon} alt="" src="/lock1.svg" />
              </div>
              <img
                className={styles.enterbuttonIcon}
                alt=""
                src="/enterbutton1.svg"
              />
            </div>
            <div className={styles.channelcard}>
              <img
                className={styles.channelcardChild}
                alt=""
                src="/line-22.svg"
              />
              <img
                className={styles.pngegg2Icon}
                alt=""
                src="/pngegg-22@2x.png"
              />
              <div className={styles.owner}>owner</div>
              <div className={styles.nameParent}>
                <div className={styles.name}>title</div>
                <div className={styles.winrateParent}>
                  <div className={styles.name}>3</div>
                  <div className={styles.name}>people</div>
                </div>
                <img className={styles.lockIcon} alt="" src="/lock2.svg" />
              </div>
              <img
                className={styles.enterbuttonIcon}
                alt=""
                src="/enterbutton2.svg"
              />
            </div>
            <div className={styles.channelcard}>
              <img
                className={styles.channelcardChild}
                alt=""
                src="/line-23.svg"
              />
              <img
                className={styles.pngegg2Icon}
                alt=""
                src="/pngegg-23@2x.png"
              />
              <div className={styles.owner}>testtes</div>
              <div className={styles.nameParent}>
                <div className={styles.name}>title</div>
                <div className={styles.winrateParent}>
                  <div className={styles.name}>3</div>
                  <div className={styles.name}>people</div>
                </div>
                <img className={styles.lockIcon} alt="" src="/lock3.svg" />
              </div>
              <img
                className={styles.enterbuttonIcon}
                alt=""
                src="/enterbutton3.svg"
              />
            </div>
            <div className={styles.channelcard}>
              <img
                className={styles.channelcardChild}
                alt=""
                src="/line-24.svg"
              />
              <img
                className={styles.pngegg2Icon}
                alt=""
                src="/pngegg-24@2x.png"
              />
              <div className={styles.owner}>owner</div>
              <div className={styles.nameParent}>
                <div className={styles.name}>title</div>
                <div className={styles.winrateParent}>
                  <div className={styles.name}>3</div>
                  <div className={styles.name}>people</div>
                </div>
                <img className={styles.lockIcon} alt="" src="/lock4.svg" />
              </div>
              <img
                className={styles.enterbuttonIcon}
                alt=""
                src="/enterbutton4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chat}>
        <div className={styles.chatinput}>
          <div className={styles.chatinputChild} />
          <img
            className={styles.sendFill0Wght400Grad0Opsz4Icon}
            alt=""
            src="/send-fill0-wght400-grad0-opsz48-1.svg"
          />
          <div className={styles.testWritingAaaaaaaaaaaaaaaaaContainer}>
            <p className={styles.testWriting}>test writing</p>
            <p className={styles.testWriting}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className={styles.testchat}>
          <div className={styles.chatBubble}>
            <div className={styles.yourNameWrapper}>
              <div className={styles.yourName}>Your name</div>
            </div>
            <div className={styles.bubbleLeft}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Your message goes here</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-1.svg"
                />
                <img className={styles.unionIcon} alt="" src="/union.svg" />
              </div>
            </div>
          </div>
          <div className={styles.chatBubble1}>
            <div className={styles.bubbleLeft1}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
                <div className={styles.frameChild3} />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.text1}>Your message goes here</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild4} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-11.svg"
                />
                <img className={styles.unionIcon} alt="" src="/union1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.chatBubble1}>
            <div className={styles.bubbleLeft1}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
                <div className={styles.frameChild3} />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.text1}>Your message goes here</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild4} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-12.svg"
                />
                <img className={styles.unionIcon} alt="" src="/union2.svg" />
              </div>
            </div>
          </div>
          <div className={styles.chatBubble}>
            <div className={styles.yourNameWrapper}>
              <div className={styles.yourName}>Your name</div>
            </div>
            <div className={styles.bubbleLeft}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Your message goes here</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-13.svg"
                />
                <img className={styles.unionIcon} alt="" src="/union3.svg" />
              </div>
            </div>
          </div>
          <div className={styles.chatBubble}>
            <div className={styles.yourNameWrapper}>
              <div className={styles.yourName}>Your name</div>
            </div>
            <div className={styles.bubbleLeft}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Your message goes here</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-14.svg"
                />
                <img className={styles.unionIcon} alt="" src="/union4.svg" />
              </div>
            </div>
          </div>
          <div className={styles.chatBubble}>
            <div className={styles.yourNameWrapper}>
              <div className={styles.yourName}>Your name</div>
            </div>
            <div className={styles.bubbleLeft}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>
                  <p className={styles.testWriting}>Your message goes here</p>
                  <p className={styles.testWriting}>multiple</p>
                  <p className={styles.testWriting}>line</p>
                  <p className={styles.testWriting}>message</p>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-15.svg"
                />
                <img className={styles.unionIcon} alt="" src="/union5.svg" />
              </div>
            </div>
          </div>
          <div className={styles.chatBubble1}>
            <div className={styles.bubbleLeft1}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
                <div className={styles.frameChild3} />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.text1}>short message</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild4} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-16.svg"
                />
                <img className={styles.unionIcon} alt="" src="/union6.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chattitle}>
          <div className={styles.chattitleChild} />
          <div className={styles.chatname}>
            <p className={styles.testWriting}>chatName</p>
          </div>
          <img
            className={styles.backbuttonIcon1}
            alt=""
            src="/backbutton1.svg"
          />
          <img
            className={styles.settingsFill0Wght400Grad0OIcon}
            alt=""
            src="/settings-fill0-wght400-grad0-opsz48-1.svg"
          />
          <img
            className={styles.personAddFill0Wght400Grad0Icon}
            alt=""
            src="/person-add-fill0-wght400-grad0-opsz48-1.svg"
          />
        </div>
        <div className={styles.frame1} />
      </div>
    </div>
  );
};

export default ChannelLobby;
