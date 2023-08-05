const startButton = document.getElementsByTagName("button")[0];
const imgAnimation = Array.from(document.getElementsByTagName("img"));
let idSetInterval;
const numSteps = document.getElementById("steps");

startButton.addEventListener("click", function() {
    if (startButton.innerText === "START" || startButton.innerText === "PLAY") {
        this.innerText = "Pause";
        imgAnimation.forEach(img => {
            img.style.animationPlayState = "running";
        });
    } else {
        this.innerText = "Play";
        imgAnimation.forEach(img => {
            img.style.animationPlayState = "paused";
        });
    };
});

numSteps.addEventListener("change", function() {
    imgAnimation[5].style.animationTimingFunction = "steps("+numSteps.value+")";
});

numSteps.addEventListener("mousedown", function() {
    idSetInterval=setInterval(() => {
        imgAnimation[5].style.animationTimingFunction = "steps("+numSteps.value+")";
    }, 100);
});
numSteps.addEventListener("mouseup", function() {
    clearInterval(idSetInterval);
});