import { css } from "#/styled-system/css";

interface LoadingDotsProps {
  size?: number;
}

export const LoadingDots = ({ size = 22 }: LoadingDotsProps) => {
  const dotSize = Math.max(3, Math.floor(size / 5));
  const gap = dotSize;

  return (
    <div
      className={loadingContainerStyle}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        gap: `${gap}px`,
      }}
    >
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={loadingDotStyle}
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            animation: "bounce 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            animationDelay: `${index * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};

const loadingContainerStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const loadingDotStyle = css({
  borderRadius: "50%",
  backgroundColor: "gray.500",
  animation: "bounce 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
});
