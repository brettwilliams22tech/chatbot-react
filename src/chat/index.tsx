import React from "react";
import { PropsWithRef } from "react";
import { BotClientOptions, ChatbotProvider } from "@pulsehq/chatbot-core";

import Header from "./Header";
import MessageList from "./Messages";
import MessageForm from "./MessageForm";

import { ChatBotProps } from "../types";

import styles from "./index.module.css";

type Props = BotClientOptions & ChatBotProps;

const ChatPage = React.forwardRef<PropsWithRef<HTMLDivElement>, Props>(
  (props, ref) => {
    return (
      <ChatbotProvider options={{ socketUrl: props.socketUrl }}>
        <div
          className={styles.container}
          ref={ref}
          role="main"
          aria-live="polite"
        >
          <Header logoUrl={props.headerLogoUrl} />
          <MessageList botAvatarUrl={props.botAvatarUrl} />
          <MessageForm />
        </div>
      </ChatbotProvider>
    );
  }
);

export default ChatPage;
