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
    width: "40vw",
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
      }
    }
  });

  // const workCon = $(".work-con");
  // const imgBoxes = $(".img-box");
  
  // // 각 img-box의 위치 정보를 저장할 배열
  // let itemPositions = [];
  // let conRect;
  
  // // 초기 및 창 크기 변경 시 위치 정보 업데이트
  // function updatePositions() {
  //     conRect = workCon[0].getBoundingClientRect();
      
  //     itemPositions = [];
  //     $(".work-list").each(function() {
  //         const rect = this.getBoundingClientRect();
  //         itemPositions.push({
  //             left: rect.left,
  //             top: rect.top,
  //             width: rect.width,
  //             height: rect.height,
  //             centerX: rect.left + rect.width / 2,
  //             centerY: rect.top + rect.height / 2
  //         });
  //     });
  // }
  
  // $(window).on('resize', updatePositions);
  // updatePositions();
  
  // // work-con 영역 진입 시
  // workCon.on('mouseenter', function() {
  //     updatePositions();
  // });
  
  // // work-con 영역 내 마우스 이동에 따른 효과
  // workCon.on('mousemove', function(e) {
  //     const mouseX = e.clientX;
  //     const mouseY = e.clientY;
      
  //     // 전체 영역 대비 상대적 위치 (0~1 사이 값)
  //     const relativeX = (mouseX - conRect.left) / conRect.width;
  //     const relativeY = (mouseY - conRect.top) / conRect.height;
      
  //     // 중심점(0.5, 0.5)으로부터의 거리
  //     const deltaX = relativeX - 0.5;
  //     const deltaY = relativeY - 0.5;
      
  //     // 각 img-box에 효과 적용
  //     imgBoxes.each(function(index) {
  //         if (index >= itemPositions.length) return;
          
  //         const position = itemPositions[index];
          
  //         // 회전 각도 계산 (최대 각도 제한)
  //         const maxRotation = 10; // 최대 회전 각도
  //         const rotateY = deltaX * maxRotation * 2;  // X축 이동에 따른 Y축 회전
  //         const rotateX = -deltaY * maxRotation * 2; // Y축 이동에 따른 X축 회전
          
  //         // 마우스와 항목 사이의 거리에 따른 효과 강도 조절
  //         const distX = mouseX - position.centerX;
  //         const distY = mouseY - position.centerY;
  //         const distance = Math.sqrt(distX * distX + distY * distY);
  //         const maxDistance = 1000; // 효과가 미치는 최대 거리
  //         const intensity = Math.max(0, 1 - distance / maxDistance);
          
  //         // 강도에 따른 효과 적용
  //         $(this).css('transform', `rotateX(${rotateX * intensity}deg) rotateY(${rotateY * intensity}deg) translateZ(${5 * intensity}px)`);
  //     });
  // });
  
  // // work-con 영역을 벗어나면 모든 img-box 원래 위치로 복원
  // workCon.on('mouseleave', function() {
  //     imgBoxes.css('transform', 'rotateX(0) rotateY(0) translateZ(0)');
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