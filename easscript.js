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


createBoxes(25);