const preferred_width = 480;
const preferred_height = 640;
const preferred_aspect_ratio = preferred_width * 1.0 / preferred_height;
const target = document.querySelector("#unity-canvas");

function resizeCanvas(){

  width = preferred_width;
  height = preferred_height;

  let innerWidth = window.innerWidth;
  let innerHeight = (window.innerHeight - 50);

    window_aspect_ratio = innerWidth * 1.0 / innerHeight;
    if(window_aspect_ratio >= preferred_aspect_ratio){
      width = preferred_width * 1.0 * innerHeight / preferred_height;
      height = innerHeight;
    }else{
      width = innerWidth;
      height = preferred_height * 1.0 * innerWidth / preferred_width;
    }

  target.style.width = width + "px";
  target.style.height = height + "px";
}

if (!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))){
  window.onresize = resizeCanvas;
  resizeCanvas();
}