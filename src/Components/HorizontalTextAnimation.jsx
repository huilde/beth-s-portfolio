import React, { useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const HorizontalTextAnimation = (props) => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const { text } = props;

  const duration = 45;
  const top = 100;
  // Hook to get viewport scroll position
  const { scrollX } = useViewportScroll();

  // Transform scroll position to adjust horizontal position
  const xPos1 = useTransform(scrollX, [0, window.innerWidth], [-650, 650]);
  const xPos2 = useTransform(scrollX, [0, window.innerWidth], [-650, 650]);

  useEffect(() => {
    const handleScroll = () => {
      const textElement1 = textRef1.current;
      const textElement2 = textRef2.current;
      const rect1 = textElement1.getBoundingClientRect();
      const rect2 = textElement2.getBoundingClientRect();

      if (rect1.right <= 0) {
        textElement1.style.transform = `translateX(100vw)`;
      }

      if (rect2.left >= window.innerWidth) {
        textElement2.style.transform = `translateX(-100%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="teste">
      <motion.div
        ref={textRef1}
        className="animationChild"
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
          top: top,
          left: 0,
          x: xPos1,
        }}
        animate={{
          x: ["0.4%", "-100%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {text}
      </motion.div>

      <motion.div
        ref={textRef2}
        className="animationChild"
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
          top: top,
          left: 0,
          x: xPos2,
        }}
        animate={{
          x: ["100%", "0.4%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default HorizontalTextAnimation;
