import { NextPage } from "next";
import { useSpring, animated } from "react-spring";

const SpringPage: NextPage = () => {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, color: "#000" });
      await next({ opacity: 0, color: "rgb(14, 26, 19)" });
    },
    from: { opacity: 0, color: "red" },
  });
  return (
    <>
      <animated.div style={props}>Example</animated.div>
    </>
  );
};

export default SpringPage;
