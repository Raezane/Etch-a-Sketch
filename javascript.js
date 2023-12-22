function main() {

  const maincontainer = document.querySelector('#maincontainer');

  let number = 15;
  makeGrid(maincontainer, number);

  const gridsize = document.querySelector('.gridsize');
  gridsize.addEventListener('click', () => {
    //empty the parentNode (maincontainer) from all child elements
    maincontainer.textContent = '';
    let userInput = howManyDivs();
    makeGrid(maincontainer, userInput);
  });

  const randomise = document.querySelector('.randomise');
  let getColors = randomColors()
  randomise.addEventListener('click', () => {
    setColor();
    //looppi tähän kuten makeGridissä
  });

  const clear = document.querySelector('.clear');
  clear.addEventListener('click', () => {
    ClearGrid(maincontainer);
  });
  
};


function makeGrid(maincontainer, number) {

  for (let row = 1; row <= number; row++) {
    for (let column = 1; column <= number; column++) {
      const minibox = document.createElement('div');

      let widthAndHeight = 600 / number + 'px';
      minibox.style.flexBasis = widthAndHeight;
      minibox.style.minHeight = widthAndHeight;
      minibox.addEventListener('mouseover', () => {

        minibox.style.backgroundColor = 'black';
      });
      
      maincontainer.appendChild(minibox);
    
    };
  };
};

function howManyDivs() {

  while(true) {
    let result = prompt('Select the grid size between 1 and 100:')
    if (result >= 1 && result <= 100) {
      return parseInt(result);
    } else if (result === null) {
        return;
    } else alert('You need to enter a value between 1 and 100!');
  };
};

function ClearGrid() {
  let miniboxes = maincontainer.children;
  for (let i = 0; i < miniboxes.length; i++) {
    let clearMiniBox = miniboxes[i];
    clearMiniBox.style.backgroundColor = 'white';
  };
};

function setColor() {

  let miniboxes = maincontainer.children;
  for (let i = 0; i < miniboxes.length; i++) {
    let randomiseMiniboxColor = miniboxes[i];
    let colorValues = randomColors()
    randomiseMiniboxColor.addEventListener('mouseover', () => {
      randomiseMiniboxColor.style.backgroundColor = 'rgb(' + [colorValues[0], colorValues[1], colorValues[2]].join(',') + ')';
  //return 'rgb(' + [colourList[0], colourList[1], colourList[2]].join(',') + ')';
    });
  };
};

function randomColors() {

  let colors = [];

  let red = Math.floor((Math.random() * 255) + 1);
  let green = Math.floor((Math.random() * 255) + 1);
  let blue = Math.floor((Math.random() * 255) + 1);

  colors.push(red, green, blue);
  return colors;

}
main();