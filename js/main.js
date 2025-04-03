$(document).ready(function () {

  // smooth scroll
  const lenis = new Lenis()
  lenis.on('scroll', (e) => { });

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
  tl.to(".motion-txt", {
    y: 0,
    stagger: .05,
    opacity: 1,
    ease: "quart.inOut",
    onComplete() {
      $(".motion-txt").addClass("active");
    }
  })
  tl.to({}, {
    onComplete() {
      $(".intro").addClass("empty");
    }
  }, "+=.5");

  //about
  $(".about-list").each(function(index) {
    const totalLists = $(".about-list").length;
    const isLastItem = index === totalLists - 1;
    const triggerOptions = {
      trigger: this,
      start: "top top",
      scrub: 1,
      pin: true,
      pinSpacing: false,
    };
  
    // 마지막요소
    triggerOptions.end = isLastItem ? "bottom bottom" : "bottom top";
    
    // GSAP 애니메이션 적용
    gsap.to(this, {
      scrollTrigger: triggerOptions
    });
  });

  // work
  gsap.to (".work-wrap", {
    width: "30vw",
    height: "40vh",
    borderRadius: "10rem",
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      markers: true,
      onUpdate(self) {
        const progress = self.progress;
        self.progress == 1 ? $(".work-tit").addClass("active") : $(".work-tit").removeClass("active")
        //   console.log("sfsdfdsf");
      }
      // onComplete() {
      //   $(".work-tit-wrap").addClass("active");
      //   console.log("sfsdfdsf");
      // }
    }
  });

  // $(".work-list").each(function() {
  //   gsap.to(this, {
  //     y: 0,
  //     scrollTrigger: {

  //     }
  //   })
  // });


  let workT = $(".work-con").offset().top;
  $(window).on("scroll", function () {
    let lastY = 0;
    const scrollTop = $(window).scrollTop();
    if (scrollTop > lastY) {
      // 내려갈때
    } else {
      // 올라갈때
    }

    lastY = scrollTop;
  });
})