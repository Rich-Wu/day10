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

function fade() {
  for (paras=0;paras<parasNodes.length;paras++) {
    var paraRect = parasNodes[paras].getBoundingClientRect();
    if (paraRect.top < (0.7*window.innerHeight)) {
      // console.log(parasNodes[paras].getBoundingClientRect());
      fadeIn('para-'+paras);
      console.log('done');
    }
    if (paraRect.bottom < (0.3*window.innerHeight)) {
      // console.log(parasNodes[paras].getBoundingClientRect());
      fadeOut('para-'+paras);
    }
  }
}
function fadeIn(paraId) {
  console.log(paraId);
  document.getElementById(paraId).style.opacity = '1';
  document.getElementById(paraId).style.transition = 'opacity 1s';
}
function fadeOut(paraId) {
  document.getElementById(paraId).style.opacity = '0';
  document.getElementById(paraId).style.transition = 'opacity 1s';
}
