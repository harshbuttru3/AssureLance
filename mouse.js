var mouseshadow = document.querySelector("#mouseshadow")
document.addEventListener("mousemove", function(dets){
    gsap.to(mouseshadow, {
        x: dets.x - 100,
        y: dets.y -100,
        ease: "back.out",
    })
})