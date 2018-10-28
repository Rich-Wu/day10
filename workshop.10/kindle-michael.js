function idP(){
  let everyP = document.getElementsByTagName('p');
  for (let i=0;i<everyP.length;i++){
    everyP[i].id = 'para-'+i;
  }
}
function fade() {
  for (paras=0;paras<parasNodes.length;paras++) {
    var paraRect = parasNodes[paras].getBoundingClientRect();
    if (paraRect.top < (0.7*window.innerHeight)) {
      fadeIn('para-'+paras);
    }
    if (paraRect.bottom < (0.3*window.innerHeight) || paraRect.top > 0.8*window.innerHeight) {
      fadeOut('para-'+paras);
    }
  }
}
function fadeIn(paraId) {
  document.getElementById(paraId).style.opacity = '1';
  document.getElementById(paraId).style.transition = 'opacity 1s';
}
function fadeOut(paraId) {
  document.getElementById(paraId).style.opacity = '0';
  document.getElementById(paraId).style.transition = 'opacity 1s';
}
idP();
var parasNodes = document.getElementsByTagName('p');
addEventListener('scroll',fade);
