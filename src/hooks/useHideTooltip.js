import { useEffect } from "react";

export const useHideTooltip = (ref, set, setOutline) => {
  useEffect(() => {
    function handleClick(e) {
      e.stopPropagation();

      if (ref && ref.current) {
        const currentRef = ref.current;
        if (!currentRef.contains(e.target)) {
          // put your action here
          set(false);
          setOutline && setOutline(false);
        }
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [ref, set, setOutline]);
};
