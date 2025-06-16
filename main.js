const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const startButton = document.querySelector(".strart")
const gameOverScreen = document.querySelector(".game-over") 

let gameStarted = false;

const strartGame = () => {}...

  const jump = () => {
    gameStarted = true;

    pipe.style.animation = "pipe-animation 1.5s infite linear";

      mario.classList.add("jump");
  }
      setTimeout(() => {
          mario.classList.remove("jump");
      }
      ,500);
    
const loop = setInterval (() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).botttom.replace("px", "");

   if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
       pipe.style.animation = "none";
       pipe.style.left = `${pipePosition}px`;

       mario.style.animation = "nome";
       mario.style.left = `${marioPosition}px`; 

       mario.src=".img/game-over.png";
       mario.style.width = "75px";
       mario.style.marginleft = "50px";

       clearInterval(loop);
   }
},10);
document.addEventListener("keydown", jump);








const restartGame = () => {
    w
}...