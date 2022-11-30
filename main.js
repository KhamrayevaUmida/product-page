gsap.from(".navbar", 2, {y: -100, ease: Expo.easeInOut });
gsap.from(".product-info", 4, {x: 600, ease: Expo.easeInOut });
gsap.from(".product-img", 4, {y: 600, ease: Expo.easeInOut });
gsap.from(".product-add-to-cart", 2, {
    opacity: 0,
    y: 600, 
    ease: Expo.easeInOut,
    delay: 2.4,
});
TweenMax.staggerFrom(".product-description > div", 3, {
    opacity:0, 
    x: 200,
    ease: Expo.easeInOut,
    delay: 1.4
}, 0.08)
