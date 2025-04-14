import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
// vite 이미지 불러오기
const imageModules = import.meta.glob("../assets/images/img-introo*.png", { eager: true });

const IntroComp = ({ setIntroStatus }) => {

  // 이미지 객체에서 배열로 변경
  const sortedImages = Object.entries(imageModules)
    .sort((a, b) => { //문자열 숫자로 변경 후 정렬
      const getNumber = (str) => Number(str.match(/\d+/)[0]);
      return getNumber(a[0]) - getNumber(b[0]);
    })
    .map(([_, imgs]) => imgs.default); // 추출한 배열의 imgs를 가져옴


  const posRef = useRef([]);
  const circleRef = useRef();

  useLayoutEffect(() => {
    gsap.set(posRef.current, {
      y: "-50%",
      x: "-50%",
    });

    gsap.set(circleRef.current, {
      top: "50%",
      left: "50%",
      y: "-50%",
      x: "-50%",
    })
  }, []);

  useEffect(() => {
    let i = 0;
    const imgMotion = setInterval(() => {
      const wraps = document.querySelectorAll(".intro-img-wrap");
      wraps.forEach((img) => {
        const imgs = img.querySelectorAll(".img-list");
        for (let k = 0; k < imgs.length; k++) {
          let display = k === i ? "block" : "none";
          imgs[k].style.display = display;
        }
      });
      i = (i + 1) % 3;
    }, 100);

    const tl = gsap.timeline();
    tl.to({}, {
      duration: 2,
      onComplete() {
        clearInterval(imgMotion);
        gsap.set(".img-list", { display: "none" });
        gsap.set(".img-list:nth-child(3)", { display: "block" });
      }
    })
      .to(posRef.current.filter((_, idx) => idx !== 4), {
        top: "50%",
        left: "50%",
        ease: "power3.out",
        duration: .5,
      }, "+=1")
      .to(posRef.current.filter((_, idx) => idx == 4), {
        width: "20vw",
        height: "30vw",
        // borderRadius: "30px",
        duration: 1.3,
      }, "+=.1")
      .to(".wide-circle", {
        scale: 100,
        onComplete() {
          gsap.delayedCall(0.7, () => {
            setIntroStatus(false);
          });
        },
      }, "<")
  }, []);



  return (
    <div className="intro-sec">
      <div className="intro-area">
        {Array.from({ length: 9 }).map((value, idx) => {
          const imgSlice = sortedImages.slice(idx * 3, idx * 3 + 3);
          return (
            <div className="intro-img-wrap" key={idx} ref={(el) => (posRef.current[idx] = el)}>
              {imgSlice.map((src, i) => (
                <div className="img-list" key={i}>
                  <img src={src} alt={`인트로 이미지 ${idx * 3 + i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="wide-circle" ref={circleRef}></div>
    </div>
  );
};

export default IntroComp;
