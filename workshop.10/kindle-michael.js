function idP(){
  let everyP = document.getElementsByTagName('p');
  for (let i=0;i<everyP.length;i++){
    everyP[i].id = 'para-'+i;
  }
}

function fadeIn() {
  let posY = window.scrollY;
  let vpHeight = window.innerHeight;
  for (i=0;i<parasNodes.length;i++) {
      if (window.scrollY > (vpHeight*0.5*i)+(vpHeight*0.1)){
        console.log(vpHeight+' '+posY+' '+i);
        console.log((vpHeight*i)+(vpHeight*0.3));
        document.getElementById('para-'+i).style.color = 'black';
        document.getElementById('para-'+i).style.transition = 'color 1s';
      }
      // if (posY > )
  }

}

var paras = idP();
var parasNodes = document.getElementsByTagName('p');
window.addEventListener('scroll',fadeIn);
