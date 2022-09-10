import React from "react";
interface props {
  alignment: string;
}
const Arrow: React.FC<props> = ({ alignment }) => {
  let alignmentClass: string = "";
  if (alignment === "up") alignmentClass = " col-start-2  ";
  else if (alignment === "down")
    alignmentClass = " col-start-2 row-start-3  rotate-180";
  else if (alignment === "left")
    alignmentClass = " col-start-0 row-start-2  -rotate-90";
  else if (alignment === "right")
    alignmentClass = " col-start-3 row-start-2  rotate-90";

  return (
    <div
      className={
        "place-self-center bg-[#003F66] text-[#00EAD3] p-1 rounded-lg w-fit h-fit" +
        alignmentClass
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={4}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    </div>
  );
};

export default Arrow;
