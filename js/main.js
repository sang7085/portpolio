$(document).ready(function () {

  // smooth scroll
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    // console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf);

  let tl = gsap.timeline();
  // 글자 갯수대로 intro 적용
  $(".intro-word-list").each(function (e) {
    tl.to(this, {
      onStart() {
        $(".intro-word-list").eq(e).addClass("active");
      }
    }, e * 0.2);
  });
  tl.to({}, {
    onComplete() {
      $(".intro-word-list").addClass("upper");
    }
  }, "+=.1");
  tl.to({}, {
    onComplete() {
      $(".intro-word-wrap").addClass("empty");
    }
  }, "+=.5");
  tl.to(".intro-slide", {
    y: "-100%",
    stagger: 0.05,
    ease: "quart.inOut",
    onComplete() {
      $("body").removeClass("none-scroll");
      gsap.to(".rotate-img", {
        opacity: 1,
      });
    }
  });
  tl.to(".visual-txt", {
    y: 0,
    stagger: .05,
    opacity: 1,
    ease: "quart.inOut",
    onComplete() {
      $(".visual-txt").addClass("active");
    }
  })
  tl.to({}, {
    onComplete() {
      $(".intro").addClass("empty");
    }
  }, "+=.5");

  gsap.to(".rotate-img", {
    scrollTrigger: {
      trigger: "html, body",
      start: "top top",
      end: "bottom bottom",
      markers: true,
      scrub: 1,
    },
    y: "50rem"
  })

})