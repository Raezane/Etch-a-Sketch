function initialize() {

  makeGrid()

  };

function makeGrid() {

  const maincontainer = document.querySelector('#maincontainer');

  let number = 15;
  Grid(maincontainer, number)

  const askgrid = document.querySelector('.askgrid');
  askgrid.addEventListener('click', () => {
    //empty the parentNode (maincontainer) from all child elements
    maincontainer.textContent = '';
    let userInput = howManyDivs();
    Grid(maincontainer, userInput);
  });
};

function Grid(maincontainer, number) {


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

}



initialize()