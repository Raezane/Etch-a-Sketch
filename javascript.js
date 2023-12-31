function main() {

  const maincontainer = document.querySelector('#maincontainer');
  const number = 15;

  const shade = document.querySelector('#shadecheck');
  const colorslct = document.querySelector('.colorslct');

  const randomise = document.querySelector('#rainbowcheck');

  makeGrid(maincontainer, number);  
  setColor(colorslct, shade, randomise);
 

  const gridsize = document.querySelector('.gridsize');
  gridsize.addEventListener('click', () => {
    //empty the parentNode (maincontainer) from all child elements
    maincontainer.textContent = '';
    let userInput = howManyDivs(number);
    makeGrid(maincontainer, userInput);
    setColor(colorslct, shade, randomise);
  });

  const clear = document.querySelector('.clear');
  clear.addEventListener('click', () => {
    ClearGrid(maincontainer);
  });

};

function setColor(colorValue, shadeValue, randomiseValue) {
  
  //check if mouse button is pressed, and then draw
  let mouseDown = 0;
  document.body.onmousedown = function() {
    mouseDown = 1;
  };
  document.body.onmouseup = function() {
    mouseDown = 0;
  };
  //

  let miniboxes = maincontainer.children;
  for (let i = 0; i < miniboxes.length; i++) {
    let colorValues = randomColor();
    let MiniboxColor = miniboxes[i];
    let switcher = true;
    MiniboxColor.addEventListener('mouseover', () => {
      //check first if mouse button is pressed, then draw if it is
      if (mouseDown == 1) {
      if (shadeValue.checked == true) {
        //if shade is enabled, then check if multicoloring is enabled or disabled
        randomiseValue.checked == false ? MiniboxColor.style.backgroundColor = colorValue.value : MiniboxColor.style.backgroundColor = 'rgb(' + [colorValues[0], colorValues[1], colorValues[2]].join(',') + ')';    
          if (switcher) {
            MiniboxColor.style.opacity = '0.1';
            switcher = false;         
        } else if (parseFloat(MiniboxColor.style.opacity) >= 0.0 && parseFloat(MiniboxColor.style.opacity) < 1.0 && switcher == false) {
            let dimmer = parseFloat(MiniboxColor.style.opacity);
            dimmer += 0.1;
            MiniboxColor.style.opacity = String(dimmer);
        };
      }
      else if (shadeValue.checked == false) {
          //if shade is disabled, then check if multicoloring is enabled or disabled
          MiniboxColor.style.opacity = '1.0';
          if (randomiseValue.checked == false) {
            MiniboxColor.style.backgroundColor = colorValue.value;
        } else if (randomiseValue.checked == true) {
            MiniboxColor.style.backgroundColor = 'rgb(' + [colorValues[0], colorValues[1], colorValues[2]].join(',') + ')';
        };
        };
      };
    });
  };
};

function makeGrid(maincontainer, number) {

  for (let row = 1; row <= number; row++) {
    for (let column = 1; column <= number; column++) {

      const minibox = document.createElement('div');
      let widthAndHeight = 600 / number + 'px';
      let switcher = true;
      minibox.style.flexBasis = widthAndHeight;
      minibox.style.minHeight = widthAndHeight;
      maincontainer.appendChild(minibox);
    };
  };
};

function howManyDivs(number) {

  while(true) {
    let result = prompt('Select the grid size between 1 and 100:');
    if (result >= 1 && result <= 100) {
      return parseInt(result);
    } else if (result === null) {
        return result = number;
    } else alert('You need to enter a value between 1 and 100!');
  };
};

function randomColor() {

  let colors = [];

  let red = Math.floor((Math.random() * 255) + 1);
  let green = Math.floor((Math.random() * 255) + 1);
  let blue = Math.floor((Math.random() * 255) + 1);

  colors.push(red, green, blue);
  return colors;
};

function ClearGrid() {
  location.reload();
};

main();