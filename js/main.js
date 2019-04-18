// Tabs component
$(".tab").click(function () {
  $(".tabs-bar").find(".tab-active").removeClass("tab-active");
  $(".content-container").children().hide();
  $(this).addClass("tab-active");
  $(".content-" + this.id).show();
})


// Mobile nav
function mobile() {
  var burger = document.querySelector('.burger-container'),
    header = document.querySelector('#header-mobile');

  burger.onclick = function () {
    header.classList.toggle('menu-opened');
  }
};

// Video Lightbox
// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div, video_id) {
  let video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + '&autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
};

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  let video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1', ''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
};


// Animations =======================================================================
// Home hero animations
const circle1 = document.querySelectorAll('.circle-1');
const circle2 = document.querySelectorAll('.circle-2');
const circle3 = document.querySelectorAll('.circle-3');
const heroHome = document.querySelectorAll('.home-hero');
const heroImage = document.querySelectorAll('.home-hero-image');
const source = document.querySelectorAll('.source ellipse');
const homeHeroText = document.querySelectorAll('.text-container');


var tl = new TimelineMax();

tl
  .from('.home-hero .text-container h1', 1, {
    autoAlpha: 0,
    y: 40
  })
  .from('.home-hero .text-container p.large', 1, {
    autoAlpha: 0,
    y: 10
  }, "-=.3")
  .from(heroImage, 1, {
    y: 40,
    transformOrigin: "center bottom",
    scale: 1.1,
    autoAlpha: 0,
    ease: Power4.easeOut,
  })
  // reduce time
  .staggerFrom(source, .5, {
    stroke: "#dddddd",
    scale: 0,
    ease: Back.easeOut.config(1.7),
  })
  .from(circle1, .5, {
    scale: 0,
    autoAlpha: 0,
    transformOrigin: "center bottom",
    ease: Back.easeOut.config(1.7),
  })
  .from(circle2, .5, {
    scale: 0,
    autoAlpha: 0,
    transformOrigin: "center bottom",
    ease: Back.easeOut.config(1.7),
  })
  .from(circle3, .5, {
    scale: 0,
    autoAlpha: 0,
    transformOrigin: "center bottom",
    ease: Back.easeOut.config(1.7),
  })
  .from('.home-hero', .7, {
    backgroundColor: 'white',
  })

  // add time delay
  .staggerFrom('.hero-text-1', 1.2, {
    autoAlpha: 0,
    ease: Power2.easeOut,
  })
  .staggerFrom('.hero-text-2', 1.2, {
    autoAlpha: 0,
    ease: Power2.easeOut,
  })
  .staggerFrom('.hero-text-3', 1.2, {
    autoAlpha: 0,
    ease: Power2.easeOut,
  })

// Home 3 col animations =======================================
// var controller =  new ScrollMagic.Controller();

// Icon with circles
const iconCircles1 = document.querySelectorAll('.icon-circles .circle1')
const iconCircles2 = document.querySelectorAll('.icon-circles .circle2')
const iconCircles3 = document.querySelectorAll('.icon-circles .circle3')

// Icon with waves
const iconWave1 = document.querySelectorAll('.icon-waves .wave1')
const iconWave2 = document.querySelectorAll('.icon-waves .wave2')
const iconWave3 = document.querySelectorAll('.icon-waves .wave3')

// icon graph
const iconGraph = document.querySelectorAll('.icon-graph .graph-line')
var controller = new ScrollMagic.Controller();


// Icon number 1
$('#three-pointer').each(function () {

  var animateIn = new TimelineMax();

  animateIn
    .from(iconCircles1, .4, {
      scale: 0,
      autoAlpha: 0,
      transformOrigin: "center",
      ease: Circ.easeOut,
    })
    .from(iconCircles2, .4, {
      scale: 0,
      autoAlpha: 0,
      transformOrigin: "center",
      ease: Circ.easeOut,
    })
    .from(iconCircles3, .4, {
      scale: 0,
      autoAlpha: 0,
      transformOrigin: "center",
      ease: Circ.easeOut,
    })

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});
// Icon number 2
$('#three-pointer').each(function () {

  var animateIn = new TimelineMax();

  animateIn
    .fromTo(iconWave1, .7, {
      y: '100%',
      autoAlpha: 0,
      ease: Power2.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    }, "+=.5")
    .fromTo(iconWave2, .7, {
      y: '100%',
      autoAlpha: 0,
      ease: Power2.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    }, "-=.5")
    .fromTo(iconWave3, .7, {
      y: '100%',
      autoAlpha: 0,
      ease: Power2.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    }, "-=.5")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});

// Icon number 3
$('#three-pointer').each(function () {

  var animateIn = new TimelineMax();

  animateIn
    .staggerFromTo(iconGraph, 2, {
      scaleY: '0',
      transformOrigin: "bottom left",
      ease: Power2.easeOut
    }, {
      scaleY: '1',
      ease: Power2.easeOut
    }, "+=1")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});


// Testimonial section ===================================
// Icon number 3
$('#testimonial-01').each(function () {

  var animateIn = new TimelineMax();
  let testimonial = document.querySelectorAll('#testimonial-01 .testimonial-center')
  animateIn

    .staggerFromTo(testimonial, 1, {
      y: '20%',
      autoAlpha: 0,
      ease: Power4.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power4.easeOut
    }, "+=1")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});

// Home Video animation =======================================
// const videoSection = document.querySelectorAll('#home-video')

// var controllerVideo = new ScrollMagic.Controller();

// $(videoSection).each(function () {

//   var animateIn = new TimelineMax();

//   animateIn
//     .from('#home-video img', .5, {
//       autoAlpha: 0,
//       y: 50,
//       ease: Power1.easeOut
//     }, '-=1.5')

//   var scene = new ScrollMagic.Scene({
//       triggerElement: this,
//     })
//     .addIndicators()
//     .setTween(animateIn).addTo(controllerVideo);
// });

// Homepage deep dive
var deepDiveImgController = new ScrollMagic.Controller();
var deepDiveTextController = new ScrollMagic.Controller();


$('#deep-dive').each(function () {
  var animateIn = new TimelineMax();

  animateIn.staggerFrom('#deep-dive img', 1.5, {
    xPercent: -70,
    autoAlpha: 0,
    ease: Power4.easeOut
  },0);

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(deepDiveImgController);
});

$('#deep-dive').each(function () {
  var animateIn = new TimelineMax();
  animateIn.staggerFrom('#deep-dive .text-container', 1.5, {
    xPercent: 7,
    autoAlpha: 0,
    ease: Power4.easeOut
  },0);

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(deepDiveTextController);
});


// Invest now section

var investController = new ScrollMagic.Controller();


$('#invest').each(function () {
  var animateIn = new TimelineMax();

  animateIn.staggerFrom('#invest', .7, {
    y: 40,
    autoAlpha: 0,
    ease: Circ.easeOut, 
  },0);
  animateIn.staggerFrom('#invest .invest-parent', .5, {
    autoAlpha: 0,
    y: 20,
    ease: Circ.easeOut, 
  },0);

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(investController);
});
