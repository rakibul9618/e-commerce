import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/images/logo.gif";
import profilePic from "../assets/images/k.jpg";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import Tooltip from "./Tooltip";
import { breakpointContext } from "../providers/BreakpointProvider";

const Navbar = () => {
  // context API
  const { bp } = useContext(breakpointContext);

  // useState
  const [outline, setOutline] = useState(false);
  const [focus, setFocus] = useState(false);
  const [tooltipOne, setTooltipOne] = useState(false);
  const [tooltipTwo, setTooltipTwo] = useState(false);

  // functions
  const handleFocus = () => {
    setOutline(true);
  };
  const handleSearchToggle = () => {
    bp.smAndDown && setFocus(!focus);
    setOutline(!outline);
    inputRef.current.focus();
  };

  const handleWhiteList = () => {
    tooltipTwo && setTooltipTwo(false);
    setTooltipOne(!tooltipOne);
  };

  const handleProfile = () => {
    tooltipOne && setTooltipOne(false);
    setTooltipTwo(!tooltipTwo);
  };

  // useEffect
  useEffect(() => {
    bp.smAndDown && outline ? setFocus(true) : setFocus(false);
  }, [bp.smAndDown]);

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
              className={` flex items-center rounded-md p-2 md:pr-7 shadow-md input-wrap cursor-text ${
                outline
                  ? "ring-2 focus-within:bg-white focus-within:text-red-300 "
                  : "ring-0 text-gray-500 bg-bl"
              }`}
            >
              <GoSearch
                className="md:mr-3 text-2xl"
                onClick={() => handleSearchToggle()}
              />
              <input
                type="text"
                id="search"
                placeholder="Search store"
                className={`bg-bl focus:bg-white outline-none text-xl text-black caret-red-600 input absolute md:static ${
                  focus
                    ? "-left-8 -bottom-18 py-3 pr-3 pl-10 rounded-lg"
                    : "-left-full md:block "
                }`}
                onFocus={() => handleFocus()}
                ref={inputRef}
              />
            </form>
          </div>
          <div className="flex justify-around md:justify-end items-center flex-1">
            <div className="relative select-none">
              <FcLike
                className="text-2xl md:mr-16 cursor-pointer"
                title="Whitelist"
                onClick={() => handleWhiteList()}
              />
              <span
                className="px-2 absolute -top-3 left-70p md:left-20p bg-red-200 rounded-full cursor-pointer"
                onClick={() => handleWhiteList()}
              >
                10
              </span>
              <div className={tooltipOne ? "block" : "hidden"}>
                <Tooltip tooltip={tooltipRef} one={true} />
              </div>
            </div>
            <div className="w-6 relative">
              <img
                src={profilePic}
                alt="profile"
                className="w-full cursor-pointer mr-2 md:mr-16  rounded-full"
                onClick={() => handleProfile()}
              />
              <div className={tooltipTwo ? "block" : "hidden"}>
                <Tooltip tooltip={tooltipNextRef} one={false} />
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
