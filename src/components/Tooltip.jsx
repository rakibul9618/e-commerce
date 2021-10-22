import React from "react";

const Tooltip = ({ tooltip, one }) => {
  return (
    <div
      className={`absolute top-10 ${
        one
          ? "-right-22 md:-right-8 h-92 w-70"
          : "-right-6 md:-right-4 h-32 w-32"
      } bg-gray-50 rounded-lg shadow-lg`}
      ref={tooltip}
    >
      <div className={`absolute -top-2.5 ${one ? "left-64p md:left-61p" : "left-72p md:left-78p"} transform -translate-x-2/4 -translate-y-2/4 border-12 favList`}></div>
    </div>
  );
};

export default Tooltip;
