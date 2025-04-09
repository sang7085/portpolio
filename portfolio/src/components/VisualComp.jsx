import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// images
import visual from "../assets/images/img-test.png";

const VisualComp = () => {
  const motionRef = useRef([]);
  const imgRef = useRef([]);
  useEffect(() => {

    gsap.set(motionRef.current, {
      y: 50,
      opacity: 0,
    });

    gsap.to(motionRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "quart.inOut",
    });

    gsap.to(imgRef.current, {
      y: "5vh",
      scrollTrigger: {
        trigger: ".visual-section",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub:1,
      }
    })
  });

  const text = "CAT-CH".split("");
  return (
    <>
      <section className="visual-section">
        <div className="visual-txt motion-txt-wrap">
          {text.map((letter, index) => {
            return (
              <div className="motion-txt" key={index} ref={(textMotion) => {motionRef.current.push(textMotion)}}>
                {letter}
              </div>
            )
          })}
        </div>
        <div className="visual-sub">
          <p className="motion-txt" ref={(textMotion) => {motionRef.current.push(textMotion)}}>Catch Your Attention</p>
          <p className="motion-txt" ref={(textMotion) => {motionRef.current.push(textMotion)}}>With CAT-CH</p>
        </div>
        <div className="img-con" ref={imgRef}>
          <div className="img-box">
            <img src={visual} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default VisualComp;