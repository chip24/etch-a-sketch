/*function grid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";

    for (i=0; i<16; i+=1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
    
        for (j=0; j<16; j+=1) {
            var box = document.createElement("div")
            box.className = "box";
            row.appendChild(box);
        };

        container.appendChild(row);
    };
    el.appendChild(container);
};

grid(document.body);*/

function promptNumber(){
  var boxString = prompt("Enter a number of between 2 and 50");
  console.log(boxString);
  console.log(typeof boxString);
  var boxNumber = (+boxString);
  console.log(typeof boxNumber);
  if (boxNumber < 2 || boxNumber > 50){
    alert("Only enter numbers between 2 and 50");
    return;
  }
  
  createBoxes(boxNumber);
  colorBoxes();
}

const container = document.querySelector('#container');

function createBoxes(numBox) {

  for (let i = 0; i < numBox; i++) {
    const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div');
      square.className = 'box';
      row.appendChild(square);
    }
  }
}


//async function createBoxes(boxNumber) {
//  console.log(boxNumber);
 // await promptNumber();
//};

//createBoxes(boxNumber);

//const cont = document.getElements("container");
const box = document.getElementsByClassName("box");

function colorBoxes() {
for (let i = 0; i < box.length; i++){
  box[i].onmouseover = function(e){
    box[i].style.backgroundColor = "blue";
  }
  
}
}

function clearGrid (){
  let boxes = document.getElementById("box");
  
}


