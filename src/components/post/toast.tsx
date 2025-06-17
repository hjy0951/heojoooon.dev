import { css } from "#/styled-system/css";

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast = ({ message, isVisible }: ToastProps) => {
  return (
    <div
      className={toastStyle}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {message}
    </div>
  );
};

const toastStyle = css({
  position: "fixed",
  bottom: "80px",
  right: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  zIndex: 1000,
});
