import { SVGProps } from "react";

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
} & SVGProps<SVGSVGElement>;

export const RightArrowIcon = ({
  width = 16,
  height = 16,
  color = "black",
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_256_86)">
        <path
          d="M8.03464 9.88605L8.97731 10.8287L11.8066 8.00005L8.97797 5.17139L8.03531 6.11472L9.25331 7.33339H4.22864V8.66672H9.25331L8.03464 9.88605Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1855 13.1852C16.0495 10.3212 16.0495 5.6785 13.1855 2.8145C10.3215 -0.049496 5.67883 -0.049496 2.81483 2.8145C-0.049171 5.6785 -0.049171 10.3212 2.81483 13.1852C5.67883 16.0492 10.3215 16.0492 13.1855 13.1852ZM12.2428 12.2425C13.3681 11.1173 14.0002 9.59115 14.0002 7.99984C14.0002 6.40853 13.3681 4.8824 12.2428 3.75717C11.1176 2.63195 9.59147 1.9998 8.00016 1.9998C6.40885 1.9998 4.88272 2.63195 3.7575 3.75717C2.63227 4.8824 2.00013 6.40853 2.00013 7.99984C2.00013 9.59115 2.63227 11.1173 3.7575 12.2425C4.88272 13.3677 6.40885 13.9999 8.00016 13.9999C9.59147 13.9999 11.1176 13.3677 12.2428 12.2425Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_256_86">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(0 1 -1 0 16 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
