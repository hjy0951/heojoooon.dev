interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const LightBulbIcon = ({ width = 18, height = 18 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 20H15V22H9V20ZM16.906 13.712C17.936 12.506 19 11.259 19 9C19 5.141 15.859 2 12 2C8.141 2 5 5.141 5 9C5 11.285 6.067 12.528 7.101 13.73C7.459 14.148 7.83 14.581 8.185 15.079C8.329 15.285 8.565 16.075 8.776 17H7.984V19H16.016V17H15.226C15.439 16.073 15.676 15.281 15.819 15.075C16.171 14.572 16.545 14.135 16.906 13.712Z"
        fill="#FFCD29"
      />
    </svg>
  );
};
