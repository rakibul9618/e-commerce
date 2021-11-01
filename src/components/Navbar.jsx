import React, { createRef, useContext, useEffect, useState } from "react";
import Logo from "../assets/images/logo.gif";
import profilePic from "../assets/images/k.jpg";
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";
import { breakpointContext } from "../providers/BreakpointProvider";
import { useHideTooltip } from "../hooks/useHideTooltip";
import { GoSearch } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { RiSettings2Line } from "react-icons/ri";
import product from "../assets/images/product.jpg";

const Navbar = () => {
  // context API
  const { bp } = useContext(breakpointContext);

  // useState
  const [outline, setOutline] = useState(false);
  const [focus, setFocus] = useState(false);
  const [tooltipOne, setTooltipOne] = useState(false);
  const [tooltipTwo, setTooltipTwo] = useState(false);

  // Ref
  const inputRef = createRef();
  const whitelistRef = createRef();
  const profileRef = createRef();

  //custom Hooks
  useHideTooltip(inputRef, setFocus, setOutline);
  useHideTooltip(whitelistRef, setTooltipOne);
  useHideTooltip(profileRef, setTooltipTwo);

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
    setTooltipOne((e) => !e);
    setOutline(false);
  };

  const handleProfile = () => {
    tooltipOne && setTooltipOne(false);
    setTooltipTwo((e) => !e);
    setOutline(false);
  };

  // useEffect
  useEffect(() => {
    bp.smAndDown && outline ? setFocus(true) : setFocus(false);
  }, [bp.smAndDown, outline]);

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
                className="md:mr-3 text-2xl cursor-pointer"
                onClick={() => handleSearchToggle()}
              />
              <input
                type="text"
                id="search"
                placeholder="Search store"
                className={`bg-bl focus:bg-white outline-none text-xl text-black caret-red-600 input absolute md:static ${
                  focus
                    ? "-left-8 -bottom-18 py-3 pr-3 pl-10 rounded-lg"
                    : "-left-100 md:block "
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
                <Tooltip
                  tooltip={whitelistRef}
                  one={true}
                  className="flex flex-col h-full overflow-hidden"
                >
                  <div className="h-90p overflow-auto pb-5">
                    {[...Array(100).keys()].map((val, ind) => {
                      return (
                        <div className="flex items-center justify-between px-4 py-3 mt-6 hover:bg-prod cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-8 mr-4 rounded-md overflow-hidden">
                              <img
                                src={product}
                                alt="product"
                                className="w-full h-auto"
                              />
                            </div>
                            <p className="name">Product</p>
                          </div>
                          <p className="amount">{val}</p>
                        </div>
                      );
                    })}
                  </div>

                  <p className="h-17p bg-gray-100 py-4 text-center z-50 cursor-pointer hover:bg-prod text-gray-500 hover:text-white text-lg">
                    See all products
                  </p>
                </Tooltip>
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
                <Tooltip tooltip={profileRef} one={false}>
                  <div className="flex group items-center mt-4  cursor-pointer hover:bg-gray-300">
                    <div className="p-1 ml-3 mr-3 rounded-lg bg-gray-200 group-hover:bg-gray-300">
                      <RiSettings2Line className="text-3xl text-gray-500 group-hover:text-blue-500 rounded-lg" />
                    </div>
                    <p> Profile Setting</p>
                  </div>
                  <div className="flex group items-center  mt-4  cursor-pointer hover:bg-gray-300">
                    <div className="p-1 ml-3 mr-3 rounded-lg bg-gray-200 group-hover:bg-gray-300">
                      <FiLogOut className="text-3xl text-gray-500 group-hover:text-red-600 rounded-lg" />
                    </div>
                    <p>Log Out</p>
                  </div>
                </Tooltip>
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
