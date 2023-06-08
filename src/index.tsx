import { RefObject, useRef, useState } from "react";

import Portal from "./components/Portal";
import ChatPage from "./chat";
import { ChatIcon } from "./components/Icons";

import { ChatBotProps } from "./types";

import "./index.css";
import styles from "./index.module.css";

const TRIGGER_ID = "chatbot-trigger";
const CHAT_WINDOW_ID = "chatbot-window";

const ChatBot = (props: ChatBotProps) => {
  const [showChat, setShowChat] = useState(false);
  const containerRef = useRef<HTMLDivElement>();

  const handleClick = () => {
    if (!showChat) {
      setShowChat(true);
    } else {
      containerRef.current?.classList.toggle(styles.slideDown);
    }
  };

  return (
    <div className={styles.chatbot} aria-live="polite">
      <Portal id={TRIGGER_ID}>
        <button className={styles.btn} onClick={handleClick}>
          <div className={styles.chatIcon}>
            <ChatIcon height={28} width={28} />
          </div>
        </button>
      </Portal>
      {showChat ? (
        <Portal id={CHAT_WINDOW_ID}>
          <div
            ref={containerRef as RefObject<HTMLDivElement>}
            className={styles.window}
          >
            <ChatPage {...props} />
          </div>
        </Portal>
      ) : null}
    </div>
  );
};

export { ChatBot, ChatPage };
