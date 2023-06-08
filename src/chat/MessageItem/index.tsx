import { motion } from "framer-motion";
import { Message, MessagePayload, QuickReply } from "@pulsehq/chatbot-core";

import { objStr } from "../../utils/common";

import styles from "./index.module.css";

type Props = {
  message: Message;
  botAvatarUrl: string;
  onSendMessage: (payload: MessagePayload) => void;
  isLast?: boolean;
};

const MessageItem = (props: Props) => {
  const { message } = props;

  const isUser = message.sender === "CLIENT";
  const showReplies =
    props.isLast &&
    !isUser &&
    !message.chosenReply &&
    message.quickReplies &&
    message.type === "OPTIONS";

  const handleReply = (reply: QuickReply) => {
    props.onSendMessage({
      label: reply.title,
      value: reply.payload,
      replyId: message.id,
    });
  };

  const renderReply = (reply: QuickReply) => {
    return (
      <button
        key={reply.title}
        className={styles.option}
        onClick={handleReply.bind(null, reply)}
      >
        {reply.title}
      </button>
    );
  };

  return (
    <motion.li
      className={styles.container}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{
        originX: isUser ? 1 : 0,
      }}
    >
      <div
        className={objStr({
          [styles.row]: true,
          [styles.left]: !isUser,
          [styles.right]: isUser,
        })}
      >
        {!isUser ? (
          <div className={styles.avatar}>
            <img
              src={props.botAvatarUrl}
              alt="bot-avatar"
              className={styles.avatarImage}
            />
          </div>
        ) : null}
        <div className={styles.bubble}>
          <div className={styles.text}>{props.message.text}</div>
        </div>
      </div>
      {showReplies ? (
        <div className={styles.replies}>
          {message.quickReplies!.map(renderReply)}
        </div>
      ) : null}
    </motion.li>
  );
};

export default MessageItem;
