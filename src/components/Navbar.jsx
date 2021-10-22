import React, { createRef, useEffect, useState } from "react";
import Logo from "../assets/images/logo.gif";
import profilePic from "../assets/images/k.jpg";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import Tooltip from "./Tooltip";
import { useHideTooltip } from "../hooks/useHideTooltip";

const Navbar = () => {
  // useState
  const [outline, setOutline] = useState(false);
  const [focus, setFocus] = useState(false);
  const [tooltipOne, setTooltipOne] = useState(false);
  const [tooltipTwo, setTooltipTwo] = useState(false);

  // Ref
  const input = createRef();
  const tooltip = createRef();
  const tooltipNext = createRef();

  // Custom Hook
  useHideTooltip(tooltip, setTooltipOne);
  useHideTooltip(tooltipNext, setTooltipTwo);

  useEffect(() => {
    focus && input.current.focus();
  }, [focus, input, tooltipOne]);

  return (
    <div className="flex-1">
      <div className="fixed bg-bl w-full">
        <div className="flex justify-between items-center  md:mx-10 m-3">
          <div className="relative flex items-center flex-1 justify-evenly md:justify-between pr-4">
            <Link to="/" className="w-16 mr-3">
              <img src={Logo} alt="logo" className="w-full" />
            </Link>

            <form
              onSubmit={(e) => e.preventDefault()}
              className={`focus-within:bg-white text-gray-500 md:text-gray-300 focus-within:text-red-300 flex items-center rounded-md p-2 md:pr-7 shadow-md input-wrap ${
                outline ? "ring-2 " : "ring-0 "
              }`}
            >
              <GoSearch
                className="md:mr-3 text-2xl"
                onClick={() => setFocus(!focus)}
              />
              <input
                type="text"
                id="search"
                placeholder="Search store"
                className={`bg-bl focus:bg-white outline-none text-xl caret-red-600 input ${
                  focus
                    ? "block absolute -left-8 -bottom-18 py-3 pr-3 pl-10 rounded-lg"
                    : "hidden md:block "
                }`}
                onFocus={() => setOutline(true)}
                onBlur={() => setOutline(false)}
                ref={input}
              />
            </form>
          </div>
          <div className="flex justify-around md:justify-end items-center flex-1">
            <div className="relative select-none">
              <FcLike
                className="text-2xl md:mr-16 cursor-pointer"
                title="Whitelist"
                onClick={() => setTooltipOne(!tooltipOne)}
              />
              <span
                className="px-2 absolute -top-3 left-70p md:left-20p bg-red-200 rounded-full cursor-pointer"
                onClick={() => setTooltipOne(!tooltipOne)}
              >
                10
              </span>
              <div className={tooltipOne ? "block" : "hidden"}>
                <Tooltip tooltip={tooltip} one={true} />
              </div>
            </div>
            <div className='w-6 relative'  onClick={() => setTooltipTwo(!tooltipTwo)}>
              <img
                src={profilePic}
                alt="profile"
                className="w-full cursor-pointer mr-2 md:mr-16  rounded-full"
              />
              <div className={tooltipTwo ? "block" : "hidden"}>
                <Tooltip tooltip={tooltipNext} one={false} />
              </div>
            </div>
          </div>
        </div>
        <div className="sideBar">
          <div className="shadow"></div>
          <div className="nav"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
