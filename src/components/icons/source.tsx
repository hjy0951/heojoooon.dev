type IconProps = { width?: number; height?: number; color?: string };

export const SourceIcon = ({
  width = 24,
  height = 24,
  color = "black",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 5.5L18.5 8.5C19.5 9.5 21.5 11.517 21.5 12C21.5 12.483 19.273 15.222 18.5 16L15.5 19M8.5 5.5L5.5 8.5C4.727 9.278 2.5 11.517 2.5 12C2.5 12.483 5.227 15.722 6 16.5L8.5 19M13 4L11 20.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
