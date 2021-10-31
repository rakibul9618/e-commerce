/* eslint-disable no-eval */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";

const initialBreakpoint = () => ({
  bp: {
    // EXACT
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
    // DOWN
    smAndDown: false,
    mdAndDown: false,
    lgAndDown: false,
    xlAndDown: false,
    // UP
    smAndUp: false,
    mdAndUp: false,
    lgAndUp: false,
    xlAndUp: false,
  },
});

const calculateBreakpoint = (width) => {
  return {
    // EXACT
    xs: eval(`${width} < 640`),
    sm: eval(`${width} >= 640 && ${width} < 768`),
    md: eval(`${width} >= 768 && ${width} < 1024`),
    lg: eval(`${width} >= 1024 && ${width} < 1280`),
    xl: eval(`${width} >= 1280 && ${width} < 1536`),
    "2xl": eval(`${width} >= 1536`),
    // DOWN
    smAndDown: eval(`${width} < 768`),
    mdAndDown: eval(`${width} < 1024`),
    lgAndDown: eval(`${width} < 1280`),
    xlAndDown: eval(`${width} < 1536`),
    // UP
    smAndUp: eval(`${width} >= 640`),
    mdAndUp: eval(`${width} >= 768`),
    lgAndUp: eval(`${width} >= 1024`),
    xlAndUp: eval(`${width} >= 1536`),
  };
};

const breakpointContext = createContext(initialBreakpoint());

const BreakpointProvider = ({ children }) => {
  const [tm, setTm] = useState(null);
  const [bp, setBp] = useState(calculateBreakpoint(window.innerWidth));

  const onResize = (e) => {
    if (tm) return;
    setTm(
      setTimeout(() => {
        setBp(calculateBreakpoint(e.target.innerWidth));
        clearTimeout(tm);
        setTm(null);
      }, 750)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <breakpointContext.Provider value={{ bp }}>
      {children}
    </breakpointContext.Provider>
  );
};

export { breakpointContext };
export default BreakpointProvider;
