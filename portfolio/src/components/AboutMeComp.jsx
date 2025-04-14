import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const AboutMeComp = () => {
  const motionRef = useRef([]);
  const skillMotionRef = useRef([]);
  // const txt1 = "Catch your attention with 'CATCH'".split("");
  // const txt2 = "시선을 사로잡는 직관적인 흐름과 인터랙션을, 지금 시작합니다.".split("");
  useEffect(() => {

    motionRef.current = [];
    skillMotionRef.current = [];

    gsap.set(motionRef.current, {
      y: 50,
      opacity: 0,
    });

    gsap.to(motionRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "quart.inOut",
      scrollTrigger: {
        trigger: ".slogan",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    gsap.set(skillMotionRef.current, {
      x: "30%",
      opacity: 0,
    });

    gsap.to(skillMotionRef.current, {
      x: 0,
      opacity: 1,
      stagger: 1,
      duration: 2,
      ease: "quart.inOut",
      scrollTrigger: {
        trigger: ".skill-sec",
        start: "-30% center",
        end: "bottom bottom",
        markers: true,
        scrub: 1,
      }
    });

  }, [])


  return (
    <>
      <section className="aboutme-section">
        <div className="slogan">
          <div className="motion-txt-wrap">
            {/* {txt1.map((txt, index) => {
              return (
                <p className="motion-txt" key={index} ref={(textMotion) => {motionRef.current.push(textMotion)}}>{txt === " " ? "\u00A0" : txt}</p>
              )
            })} */}
            <p className="motion-txt" ref={(textMotion) => {motionRef.current.push(textMotion)}}>Catch your eyes with 'CATCH'</p>
          </div>
          <div className="motion-txt-wrap">
            {/* {txt2.map((txt, index) => {
              return (
                <p className="motion-txt" key={index} ref={(textMotion) => {motionRef.current.push(textMotion)}}>{txt === " " ? "\u00A0" : txt}</p>
                )
                })} */}
            <p className="motion-txt" ref={(textMotion) => {motionRef.current.push(textMotion)}}>시선을 사로잡는 인터랙션</p>
          </div>
        </div>
        <div className="skill-sec">
          <h2 className="skill-tit">MY SKILLS</h2>
          <ul className="skill-list-wrap">
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
            <li className="skill-list" ref={(skillMotion) => {skillMotionRef.current.push((skillMotion))}}>HTML</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default AboutMeComp;