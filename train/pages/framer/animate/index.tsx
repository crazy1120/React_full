import { NextPage } from "next";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatePage: NextPage = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [borderRadiusValue, setBorderRadiusValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);

  return (
    <div className="h-screen flex flex-col">
      <div className="p-2 shadow-inner w-full py-24 shadow-white rounded-lg bg-black/90 ">
        <motion.div
          animate={{
            x: xPos,
            y: yPos,
            borderRadius: borderRadiusValue,
            rotate: rotateValue,
          }}
          className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900"></motion.div>
      </div>
      <div className="flex-1 bg-gray-500 flex flex-col items-center py-5 gap-10">
        <input
          type="range"
          name=""
          id=""
          min={-100}
          max={100}
          onChange={(e) => setXPos(Number(e.target.value))}
        />
        <input
          type="range"
          name=""
          id=""
          min={-100}
          max={100}
          onChange={(e) => setYPos(Number(e.target.value))}
        />
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={50}
          onChange={(e) => setBorderRadiusValue(Number(e.target.value))}
        />
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={360}
          onChange={(e) => setRotateValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
  //      use input:range to play with the values
};

export default AnimatePage;
