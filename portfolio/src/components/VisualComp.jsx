import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VisualComp = () => {
  const motionRef = useRef([]);
  useEffect(() => {

    gsap.set(motionRef.current, {
      y: 150,
      opacity: 0,
    });

    gsap.to(motionRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "quart.inOut",
    });
  });

  const text = "PORTFOLIO".split("");
  return (
    <>
      <section className="visual-section">
        <div className="visual-txt motion-txt-wrap">
          {text.map((letter, index) => {
            return (
              <div className="motion-txt" key={index} ref={(textMotion) => { motionRef.current[index] = textMotion }}>
                {letter}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default VisualComp;