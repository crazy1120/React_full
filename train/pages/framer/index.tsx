import { useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { NextPage } from "next";

type onChangeType = (e: any) => any;

const FramerPage: NextPage = () => {
  const [showBox, setShowBox] = useState(false);
  const { scrollYProgress } = useScroll();
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-500">
      <button onClick={() => setShowBox((e) => !e)}>
        {showBox ? "Hide" : "Show"}
      </button>
      <AnimatePresence>
        {showBox && (
          <motion.div
            className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="h-screen">sdf</div>
      <motion.div
        animate={{
          x: [0, 0, 0, 0, 0, 0, 0, 200],
          rotate: [0, 45, 360, 90, 270, 0],
          scale: [1, 0.7, 1.2, 0.3, 1.9, 1],
          borderRadius: [0, 10, 40, 0, 50, 0],
        }}
        transition={{ repeat: Infinity, repeatDelay: 2, duration: 3 }}
        className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900"></motion.div>
      <motion.button
        className="px-10 p-3 my-10 shadow-md text-white  
         text-xl rounded-full bg-gradient-to-br 
         block mx-auto from-sky-500 to to-blue-700"
        whileHover={{
          scale: 1.2,
          textShadow: "1px 1px 10px skyblue",
          boxShadow: "2px 2px 20px 2px blue",
        }}
        whileTap={{ scale: 0.8 }}>
        Hover / Tap
      </motion.button>
      <motion.div
        className="h-24 w-24 my-10 shadow-md mx-auto 
        text-xl bg-white rounded-lg border-2 border-black"
        drag
        whileDrag={{ scale: 0.5 }}
        dragSnapToOrigin
      />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-2 origin-left fixed right-0 top-0
         left-0 bg-gradient-to-r from-sky-500 to-blue-700 z-50"
      />
      <div className="w-80 my-10 relative flex items-end ">
        <motion.div
          initial={{ y: 300, rotate: -12 }}
          whileInView={{ y: -40, rotate: -12 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
          className="w-60-rotate-12 h-80 bg-white mx-auto rounded-lg">
          ddd
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter={false}>
        <motion.div
          layout
          className="p-20 rounded-xl bg-gradient-to-br from-sky-500
                to-blue-700 text-white text-9xl font-bold mx-auto w-max"
          initial={{ opacity: 0.8, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          key={count}>
          {count}
        </motion.div>
        <button
          className="p-3 my-3 rounded-xl bg-blue-700"
          onClick={(e) => setCount(count + 1)}>
          Next
        </button>
      </AnimatePresence>
    </main>
  );
};

export default FramerPage;
