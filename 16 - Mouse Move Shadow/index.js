let hero=document.querySelector(".hero")
let h1=document.querySelector("h1")
let length=100
function moveHandler(e){
  let x=e.offsetX;
  let y=e.offsetY;
  if(e.target!==this){
    x=x+e.target.offsetLeft;
    y=y+e.target.offsetTop;
  };

  let movex=Math.floor((x/this.offsetWidth)*length)*2-length ;
  let movey=Math.floor((y/this.offsetHeight)*length)*2-length ;
  console.log(movex,movey)
  
  h1.style.textShadow=`
${movex*-1}px ${movey*-1}px 0 rgba(255,0,255,0.7),
${movex*-.3}px ${movey*-.3}px 0 rgba(0,255,255,0.7),
${movex*-.6}px ${movey*-.7}px 0 rgba(0,255,0,0.7)`;

};

hero.addEventListener("mousemove",moveHandler)