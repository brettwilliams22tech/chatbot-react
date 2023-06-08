type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SendIcon = (props: Props) => {
  const { color = "#131e30", height = 24, width = 24 } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill={color}>
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />

      <g>
        <defs />
        <g transform="translate(0,-289.0625)">
          <path d="m 25.5,304.0625 c 0,-1.11962 -1,-1.5 -1,-1.5 l -20,-8 3.60352,8.56055 L 17.5,304.0625 8.10352,305.00195 4.5,313.5625 l 20,-8 c 0,0 1,-0.38038 1,-1.5 z" />
        </g>
      </g>
    </svg>
  );
};

export default SendIcon;
