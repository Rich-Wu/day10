function idP(){
  let everyP = document.getElementsByTagName('p');
  for (let i=0;i<everyP.length;i++){
    everyP[i].id = 'para-'+i;
  }
}

// function fadeIn() {
//   // let posY = window.scrollY;
//   // let vpHeight = window.innerHeight;
//   // for (i=0;i<parasNodes.length;i++) {
//       if (){
//         // console.log(vpHeight+' '+posY+' '+i);
//         // console.log((vpHeight*i)+(vpHeight*0.3));
//         document.getElementById('para-'+i).style.opacity = '1';
//         document.getElementById('para-'+i).style.transition = 'opacity 1s';
//       }
//       // if (posY > )
//   // }
//
// }

idP();
var parasNodes = document.getElementsByTagName('p');
var singleParaTest = document.getElementById('para-2');
function fadeIn(paraId) {
  document.getElementById(paraId).style.opacity = '1';
  document.getElementById(paraId).style.transition = 'opacity 1s';
}
function fadeOut(paraId) {
  document.getElementById(paraId).style.opacity = '0';
  document.getElementById(paraId).style.transition = 'opacity 1s';
}

// window.addEventListener('scroll',fadeIn);
