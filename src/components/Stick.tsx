import React, { useCallback, useEffect, useRef } from "react";
import { motion, useDragControls } from "framer-motion";

interface props {
  setXydata: (value: { x: number; y: number }) => void;
}

const Stick: React.FC<props> = (props) => {
  const stick = useRef<any>();
  const outerStick = useRef<any>();

  useEffect(() => {
    setInterval(() => {
      let stickCircle, outerstickCircle, top, right;
      if (stick.current !== undefined && outerStick.current !== undefined) {
        stickCircle = stick.current.getBoundingClientRect();
        outerstickCircle = outerStick.current.getBoundingClientRect();
      }
      // pixel distance from the top
      top = outerstickCircle.top - stickCircle.top + 16;
      // pixel distance from the right
      right = stickCircle.right - outerstickCircle.right + 16;
      // set the state while ignoring decimail values
      props.setXydata({ x: Math.trunc(right), y: Math.trunc(top) });
      //Sampling rate of 150ms
    }, 150);
  }, []);
  return (
    <div
      ref={outerStick}
      className="place-self-center row-start-2 col-start-2 bg-[#003F66] w-36 h-36 rounded-full flex justify-center items-center"
    >
      <motion.div
        drag
        ref={stick}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDirectionLock={(axis) => console.log(axis)}
        className="place-self-center row-start-2 col-start-2 bg-[#B59D0D] w-28 h-28 rounded-full flex justify-center items-center"
      >
        <div className="place-self-center row-start-2 col-start-2 bg-[#FFF5B7] w-24 h-24 rounded-full shadow-md"></div>
      </motion.div>
    </div>
  );
};

export default Stick;
