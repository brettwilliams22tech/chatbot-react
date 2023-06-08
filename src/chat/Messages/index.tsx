import React, { RefObject, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Message,
  MessagePayload,
  useBotClient,
  useMessages,
} from "@pulsehq/chatbot-core";

import MessageItem from "../MessageItem";

import useScrollToView from "../../hooks/useScrollToView";

import styles from "./index.module.css";

type Props = {
  botAvatarUrl: string;
};

const MessageList: React.FC<Props> = (props) => {
  const messages = useMessages();
  const client = useBotClient();

  const bottomRef = useScrollToView(messages);
  const containerRef = useRef<HTMLUListElement>();
  const lastMessage = messages[messages.length - 1];

  const handleSendMessage = (payload: MessagePayload) => {
    client.sendMessage(payload);
  };

  const renderMessage = (message: Message) => {
    const isLast = lastMessage?.id === message.id;

    return (
      <MessageItem
        key={message.id}
        isLast={isLast}
        message={message}
        onSendMessage={handleSendMessage}
        botAvatarUrl={props.botAvatarUrl}
      />
    );
  };

  return (
    <motion.ul
      ref={containerRef as RefObject<HTMLUListElement>}
      className={styles.container}
    >
      <AnimatePresence initial={false}>
        {messages.map(renderMessage)}
      </AnimatePresence>
      {/* <div className={styles.typing}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div> */}
      <div ref={bottomRef as RefObject<HTMLDivElement>}></div>
    </motion.ul>
  );
};

export default MessageList;
