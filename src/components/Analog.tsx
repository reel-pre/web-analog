import React from "react";
import Arrow from "./Arrow";
import Stick from "./Stick";
interface props {
  setXydata: (value: { x: number; y: number }) => void;
}
const Analog: React.FC<props> = (props) => {
  return (
    <div className="w-[80%] lg:w-[20%] h-[260px]  mx-auto mt-36 lg:mt-20 grid grid-cols-analog grid-rows-analog">
      <Arrow alignment="up" />
      <Arrow alignment="down" />
      <Arrow alignment="left" />
      <Arrow alignment="right" />
      <Stick setXydata={props.setXydata} />
    </div>
  );
};

export default Analog;
