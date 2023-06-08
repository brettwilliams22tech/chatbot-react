import { FormEvent, useState } from "react";
import { useBotClient } from "@pulsehq/chatbot-core";

import SendIcon from "../../components/Icons/Send";

import styles from "./index.module.css";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  const client = useBotClient();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!message) return;

    const payload: any = {
      label: message,
      value: message,
    };

    client.sendMessage(payload);

    setMessage("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          autoFocus={true}
          placeholder="Type a Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
          type="text"
        />
        <button type="submit" className={styles.btn}>
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
