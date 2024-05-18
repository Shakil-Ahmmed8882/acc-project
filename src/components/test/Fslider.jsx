'use client'
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { motion, useMotionValue } from "framer-motion";

import "./Fslider.css";

export default function Fslider() {
  const ref = useRef(null);
  const x = useMotionValue(0);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints] = useState(0);

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce(
          (acc, node) => acc + node.clientWidth,
          0
        )
      );
    };

    calcSliderChildrenWidth();

    const calcSliderWidth = () => {
      setSliderWidth(ref.current.clientWidth);
    };

    calcSliderWidth();
    window.addEventListener("resize", calcSliderWidth);

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth);
    };

    calcSliderConstraints();
    window.addEventListener("resize", calcSliderConstraints);
  }, [ref, sliderChildrenWidth, sliderWidth]);

  return (
    <div className="App">
      <div className="">

        <span>{sliderConstraints}</span>
        <motion.div className="slider-wrapper" style={{ overflowX: "hidden" }}>
          <motion.div
            className="slider"
            ref={ref}
            drag="x"
            // style={{ x }
            dragConstraints={{
              left: `${-sliderConstraints}`,
              right: 0,
            }}
            hello-attr={-sliderConstraints}
          >
            {[...Array(24).keys()].map((item, i) => (
              <motion.div key={i}>
                <div className="box">{item + 1}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


