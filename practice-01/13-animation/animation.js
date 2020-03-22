let degree = 0;
function rotate(tag, rotateDegree) {
  degree = (degree + rotateDegree) % 360;
  const header = document.getElementById(tag);
  if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
    header.className = 'foreground'
  } else {
    header.className = 'background'
  }

  header.style.transform = 'rotateX(' + degree + 'deg)';
}


const intervalMills = 30
setInterval(rotate.bind(this, 'header', 8), intervalMills)
