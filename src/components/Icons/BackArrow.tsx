type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const BackArrowIcon = (props: Props) => {
  const { height, width = 24, color = "#fff" } = props;

  return (
    <svg
      fill={color}
      baseProfile="tiny"
      viewBox="0 0 42 42"
      style={{
        height,
        width,
      }}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <polygon
          fillRule="evenodd"
          points="27.066,1 7,21.068 26.568,40.637 31.502,35.704 16.865,21.068 32,5.933 "
        ></polygon>
      </g>
    </svg>
  );
};

export default BackArrowIcon;
