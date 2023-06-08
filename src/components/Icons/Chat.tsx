type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const ChatIcon = (props: Props) => {
  const { height = 24, width = 24, color = "#fff" } = props;

  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height,
        width,
      }}
    >
      <path
        fill={color}
        d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"
      />
    </svg>
  );
};

export default ChatIcon;
