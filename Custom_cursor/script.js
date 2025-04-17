var box = document.querySelector('#box');
var main = document.querySelector('#main');

main.addEventListener('mousemove', function(dets) {
 gsap.to(box, {
      x: dets.x,
      y: dets.y,
      opacity: 1,
      duration: 0.2,
   });
});