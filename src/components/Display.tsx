import React from "react";

const Display: React.FC<{ xyData: { x: number; y: number } }> = ({
  xyData,
}) => {
  return (
    <div className="mt-24 mx-auto w-[70%] bg-[#FFF5B7] rounded-lg flex flex-col justify-center items-center h-60 text-[#005F99] text-4xl font-semibold shadow-xl">
      <div className="text-lg">COORDINATES</div>
      <div>X: {xyData.x}</div>
      <div>Y: {xyData.y}</div>
    </div>
  );
};

export default Display;
