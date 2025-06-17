import { useState, useCallback } from "react";

interface UseToastProps {
  duration?: number;
}

export const useToast = ({ duration = 2000 }: UseToastProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  const showToast = useCallback(
    (message: string) => {
      setMessage(message);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, duration);
    },
    [duration]
  );

  return {
    isVisible,
    message,
    showToast,
  };
};
