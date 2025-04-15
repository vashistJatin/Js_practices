function throttle(mainFunction, delay) {
  let timerFlag = null;
  return (...args) => {
    if (timerFlag === null) { // If there is no timer currently running
      mainFunction(...args); // Execute the main function 
      timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}

document.querySelector("#center").
  addEventListener("mousemove", throttle((details) => {
    console.log(details.clientX, details.clientY);

    let div = document.createElement("div");
    div.classList.add("imageDiv");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute("src", "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    div.appendChild(img);
    document.body.appendChild(div);
    
    
    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: .6,
     });
    
    gsap.to(img, {
      y: "0",
      delay: .6,
      ease: Power2,
     });

    setTimeout(() => {
      div.remove();
    }, 1200);

  }, 600)
);

