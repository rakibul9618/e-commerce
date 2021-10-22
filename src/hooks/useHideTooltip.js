import { useEffect } from "react";

export const useHideTooltip = (ref, settTooltip) => {
  useEffect(() => {
    function handleClick(e) {
      if (ref && ref.current) {
        const currentRef = ref.current;
        if (!currentRef.contains(e.target)) {
          // put your action here
          settTooltip(false);
        }
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [ref, settTooltip]);
};
