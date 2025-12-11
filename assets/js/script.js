let box = document.querySelector(".box");
// let rect = box.getBoundingClientRect();

document.body.addEventListener("mousemove", function (dets) {

    document.body.style.setProperty("--x", dets.clientX + 'px')
    document.body.style.setProperty("--y", dets.clientY + 'px')
  
});
