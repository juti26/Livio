$(document).ready(function() {		
    $('.Hamburger').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('body').toggleClass('ShowMenu');
    }); 

    $('.Select').select2();


    $('.ApartGallery .row').slick({ 
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.ApartGallery .Prev'),
        nextArrow: $('.ApartGallery .Next'),
        variableWidth: false, 
        autoplay: true,
        autoplaySpeed:3000,  
        fade: false,
        infinite:true,
        speed: 1000, 
        dots: false,	 
        focusOnSelect: false, 
        //appendDots: $('.HomeClients .Dots'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
          }
        ]
    }); 
    
}); 



function makeHorizontalScroll(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  const wrapper = section.querySelector(".horizontal-wrapper");

  const getScrollWidth = () => wrapper.scrollWidth - window.innerWidth;

  gsap.to(wrapper, {
    x: () => -getScrollWidth(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top+=1 top", 
      end: () => "+=" + getScrollWidth(),
      pin: true,
      pinSpacing: true,
      scrub: 1.2, 
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });
}
 
 
makeHorizontalScroll("#horizontal-1"); 
makeHorizontalScroll("#horizontal-2");
makeHorizontalScroll("#horizontal-3");



const lenis = new Lenis({
  duration: 1.5,  
  smoothWheel: true,
  smoothTouch: false
});

lenis.on('scroll', () => {
  ScrollTrigger.update();
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0); 
