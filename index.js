document.addEventListener("DOMContentLoaded", function() {
    let slideBtnLeft = document.getElementById("slide-btn-left");
    let slideBtnRight = document.getElementById("slide-btn-right");
    let slider = document.querySelectorAll(".slider");

    let startslider = 0;
    let endslider = (slider.length - 1) *100;

    slideBtnLeft.addEventListener("click", () => {
        if (startslider < 0) {
            startslider = startslider + 100;
         
        }

        slider.forEach((element) => {
            element.style.transform = `translateX(${startslider}%)`;
        });
    });

    slideBtnRight.addEventListener("click", () => {
        if (startslider >= -endslider+ 100) {
            startslider = startslider - 100;
         
        }

        slider.forEach((element) => {
            element.style.transform = `translateX(${startslider}%)`;
        });
    });
});
