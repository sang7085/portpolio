import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// images
import visual from "../assets/images/img-introo15.png";
import rotate from "../assets/images/img-rotate2.png";

const VisualComp = () => {

  const motionRef = useRef([]);
  const imgRef = useRef([]);

  const leftBallRef = useRef(null);
  const rightBallRef = useRef(null);

  useEffect(() => {

    const movePupil = (ballRef, eyeElement, e) => {
      const rect = eyeElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
    
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const radius = 5;
    
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
    
      if (ballRef.current) {
        ballRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }
    };
    
    const handleMouseMove = (e) => {
      const leftEye = document.querySelector(".eye.left");
      const rightEye = document.querySelector(".eye.right");

      if (leftBallRef.current && leftEye) {
        movePupil(leftBallRef, leftEye, e);
      }
      if (rightBallRef.current && rightEye) {
        movePupil(rightBallRef, rightEye, e);
      }
    };

    gsap.set(motionRef.current, {
      y: 50,
      opacity: 0,
    });

    gsap.to(motionRef.current, {
      y: 0,
      opacity: 1,
      stagger: .5,
      ease: "quart.inOut",
    });

    gsap.set(imgRef.current, {
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    });

    

    // gsap.to(imgRef.current, {
    //   top: "100%",
    //   scrollTrigger: {
    //     trigger: ".visual-section",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: 1,
    //     onUpdate(self) {
    //       const progress = self.progress;
    //       if (progress < 0.25) {

    //       }
    //     }
    //   }
    // });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

  });

  const text = "CATCH".split("");
  return (
    <>
      <section className="visual-section">
        {/* <div className="visual-txt motion-txt-wrap">
          {text.map((letter, index) => {
            return (
              <div className="motion-txt" key={index} ref={(textMotion) => {motionRef.current.push(textMotion)}}>
                {letter}
              </div>
            )
          })}
        </div> */}
        <div className="visual-sub">
          <p className="motion-txt" ref={(textMotion) => { motionRef.current.push(textMotion) }}>PUBLISHING</p>
          {/* <p className="motion-txt stroke" ref={(textMotion) => { motionRef.current.push(textMotion) }}>PUBLISHING</p> */}
          {/* <p className="motion-txt" ref={(textMotion) => { motionRef.current.push(textMotion) }}>DEVELOP</p> */}
          <p className="motion-txt" ref={(textMotion) => { motionRef.current.push(textMotion) }}>DEVELOP</p>
        </div>
        <div className="img-con" ref={imgRef}>
          <div className="img-box">
            <img src={visual} alt="" />
            <div className="eyes-container">
              <div className="eye left">
                <div className="eye-ball" ref={leftBallRef}></div>
              </div>
              <div className="eye right">
                <div className="eye-ball" ref={rightBallRef}></div>
              </div>
            </div>
          </div>
          {/* <div className="img-rotate">
            <img src={rotate} alt="" />
          </div> */}
        </div>
        <div className="bg-noise"></div>
      </section>
    </>
  )
}

export default VisualComp;