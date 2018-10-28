console.log('linked');
function idP(){
  let everyP = document.getElementsByTagName('p');
  console.log(everyP);
  for (let i=0;i<everyP.length;i++){
    everyP[i].id = 'para-'+i;
  }
}

let everyP = document.getElementsByTagName('p');

var fadedP = everyP[0];
function fadeIn() {
  fadedP.style.color = 'black';
  fadedP.style.transition = 'color 4s linear'
}
document.addEventListener('scroll',fadeIn);

// var fav = document.getElementById('image-5');
// fav.addEventListener('dblclick',lightsOff);
