console.log('linked');

// var gridContainer = document.getElementsByClassName('gridcontainer');
// // console.log(gridContainer);
// gridContainer[0].style.display='grid';
// gridContainer[0].style.gridTemplate='150px 150px 150px/150px 150px 150px';

var grid = document.getElementById('gridcontainer');
var dm = [3,3];

for (let i=0;i<dm[0]*dm[1];i++){
  let div = document.createElement('div');
  // console.log(div);
  grid.appendChild(div);
  div.style.backgroundImage = "url('profile_thumb.jpg')";
  div.setAttribute('id','image-'+(i+1));
  // let image = document.createElement('img');
  // div.appendChild(image);
  // // console.log(image);
  // image.src = 'profile_thumb.jpg';
}

grid.style.display = 'grid';
grid.style.gridTemplate = `repeat(${dm[0]},100px)/repeat(${dm[1]},100px)`;
grid.style.gridGap = '3px';

function showMessage() {
  alert('You clicked an image');
}

function lightsOff() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
}
var fav = document.getElementById('image-5');
fav.addEventListener('dblclick',lightsOff);
