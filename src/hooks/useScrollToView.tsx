import { useEffect, useRef } from "react";
import { Message } from "@pulsehq/chatbot-core";

const useScrollToView = (messages: Message[]) => {
  const bottomRef = useRef<HTMLDivElement>();
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  return bottomRef;
};

export default useScrollToView;
