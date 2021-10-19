import React, { useRef, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

const Header = () => {
  const [valObjHover, setValObjHover] = useState({
    height: "0px",
    width: "0px",
  });
  const [valObjActive, setValObjActive] = useState({
    height: "0px",
    width: "0px",
  });
  const [leftActive, setLeftActive] = useState(0);
  const [leftHover, setLeftHover] = useState(0);
  const [mouseOut, setMouseOut] = useState(false);
  const navLinkOne = useRef();
  const navLinkTwo = useRef();
  const navLinkThree = useRef();
  const navLinkFour = useRef();

  const handleOnclick = (val) => {
    handleTransitionActive(val);
  };

  const handleTransitionActive = (val) => {
    const one = navLinkOne.current.clientWidth;
    const two = navLinkTwo.current.clientWidth;
    const three = navLinkThree.current.clientWidth;
    const four = navLinkFour.current.clientWidth;

    if (val === 0) {
      setLeftActive("0px");
      setValObjActive({ ...valObjActive, width: one });
    }
    if (val === 1) {
      setLeftActive(one + "px");
      setValObjActive({ ...valObjActive, width: two });
    }
    if (val === 2) {
      setLeftActive(one + two + "px");
      setValObjActive({ ...valObjActive, width: three });
    }
    if (val === 3) {
      setLeftActive(one + two + three + "px");
      setValObjActive({ ...valObjActive, width: four });
    }
  };

  const handleMouseOver = (e, val) => {
    handleTransitionHover(val);
  };

  const handleTransitionHover = (val) => {
    const one = navLinkOne.current.clientWidth;
    const two = navLinkTwo.current.clientWidth;
    const three = navLinkThree.current.clientWidth;
    const four = navLinkFour.current.clientWidth;

    if (val === 0) {
      setLeftHover("0px");
      setValObjHover({ ...valObjHover, width: one });
    }
    if (val === 1) {
      setLeftHover(one + "px");
      setValObjHover({ ...valObjHover, width: two });
    }
    if (val === 2) {
      setLeftHover(one + two + "px");
      setValObjHover({ ...valObjHover, width: three });
    }
    if (val === 3) {
      setLeftHover(one + two + three + "px");
      setValObjHover({ ...valObjHover, width: four });
    }
  };

  useDeepCompareEffect(() => {
    if (leftHover === 0) {
      setValObjHover({
        height: navLinkOne.current.clientHeight,
        width: navLinkOne.current.clientWidth,
      });
      setValObjActive({
        height: navLinkOne.current.clientHeight,
        width: navLinkOne.current.clientWidth,
      });
    }

    if (mouseOut) {
      setLeftHover(leftActive);
      setValObjHover({
        ...valObjActive,
      });
      setMouseOut(false);
    }
  }, [mouseOut, setValObjHover, setValObjActive]);
  return (
    <div className="flex justify-center relative">
      <div className="flex relative" onMouseLeave={(e) => setMouseOut(true)}>
        <div
          className={`bg-gray-200 absolute top-0 transition-all ease-linear duration-300`}
          style={{
            height: valObjHover.height,
            width: valObjHover.width,
            left: leftHover,
          }}
        ></div>
        <div
          className={`bg-red-400 absolute top-0 transition-all ease-linear duration-300 z-20`}
          style={{
            height: valObjActive.height,
            width: valObjActive.width,
            left: leftActive,
          }}
        ></div>

        <button
          className="px-4 py-2 text-xl z-50 "
          onClick={() => handleOnclick(0)}
          onMouseOver={(e) => handleMouseOver(e, 0)}
          ref={navLinkOne}
        >
          Home
        </button>
        <button
          className="px-4 py-2 text-xl z-50 "
          onClick={() => handleOnclick(1)}
          onMouseOver={(e) => handleMouseOver(e, 1)}
          ref={navLinkTwo}
        >
          About
        </button>
        <button
          className="px-4 py-2 text-xl z-50 "
          onClick={() => handleOnclick(2)}
          onMouseOver={(e) => handleMouseOver(e, 2)}
          ref={navLinkThree}
        >
          Products
        </button>
        <button
          className="px-4 py-2 text-xl z-50 "
          onClick={() => handleOnclick(3)}
          onMouseOver={(e) => handleMouseOver(e, 3)}
          ref={navLinkFour}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Header;
