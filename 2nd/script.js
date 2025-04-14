window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector("#center")
     var xval  =  gsap.utils.mapRange(
      0, 
      window.innerWidth,
       200 + rect.getBoundingClientRect().width / 2,
       window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),
        details.clientX 
     );

     gsap.to("#center", {
      left: xval,
      ease: Power3,
     });
     
});