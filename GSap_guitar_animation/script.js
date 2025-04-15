var initialVal = `M 10 100 Q 500 100 990 100`;
var finalVal = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function(details){
  path = `M 10 100 Q ${details.x} ${details.y} 990 100`

  gsap.to("svg path", {
    attr: {d: path},
    duration:0.3,
    ease:"power3.out"
  })
})

string.addEventListener("mouseleave", function(details){
 gsap.to("svg path", {
    attr: {d: finalVal},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
  })
})