const mario = document . querySelector(".mario")
const pipe = document.querySelector(".pipe")

const jump = () => {
    mario.classList.add("jump");

    setTimeout(()= => (
        mario.classList.remove("jump");
)
.500);
}

const loop = setInterval (()) => (
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario.botttom.replace("px"))
)
document.addEventListener("keydown", jump);






mario.src=".img/game-over.png";
mario.computedStyleMap.width = "75px";
mario.style.marginleft