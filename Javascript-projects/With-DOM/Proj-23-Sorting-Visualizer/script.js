/* file: script.js */
//******************************************/
//***
//***
//*** Functions
//***
//***
//******************************************/

function generateElement() {
  let random = Math.floor(Math.random() * 100) + 1;
  return random;
}
function generateArray() {
  const arr = [];
  while (arr.length < 5) {
    arr.push(generateElement());
  }
  return arr;
}
function generateSpanContainer() {
  const span = document.createElement("span");
  span.innerHTML = ``;
  return span;
}
function generateContainer() {
  const div = document.createElement("div");
  div.innerHTML = ``;
  return div;
}
function fillArrContainer(el, arr) {
  for (let i = 0; i < 5; i++) {
    let span = generateSpanContainer();
    span.innerHTML = `${arr[i]}`;
    el.appendChild(span);
  }
}
function isOrdered(int1, int2) {
  return int1 <= int2 ? true : false;
}
function isArrayOrdered(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    let int1 = arr[index];
    let int2 = arr[index + 1];
    arr[index] = int2;
    arr[index + 1] = int1;
  }
}
function highlightCurrentEls(el, index) {
  const childEl1 = el.children[index];
  const childEl2 = el.children[index + 1];
  const children = [childEl1, childEl2];
  children.forEach((child) => {
    child.style.borderColor = "red";
    child.style.borderWidth = "2px";
    child.style.borderStyle = "dashed";
  });
}
//******************************************/
//***
//***
//*** DOM and Variable
//***
//***
//******************************************/

let array = [];

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");
const startingArrayEl = document.getElementById("starting-array");

sortBtn.setAttribute("hidden", "");
//******************************************/
//***
//***
//*** Event Listeners
//***
//***
//******************************************/

generateBtn.addEventListener("click", () => {
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastElementChild);
  }
  startingArrayEl.innerHTML = ``;
  array = generateArray();
  fillArrContainer(startingArrayEl, array);
  sortBtn.removeAttribute("hidden", "");
});
sortBtn.addEventListener("click", () => {
  highlightCurrentEls(startingArrayEl, 0);
  swapElements(array, 0);
  for (let i = 1; i < 4; i++) {
    console.log(i);
    let div = generateContainer();
    fillArrContainer(div, array);
    highlightCurrentEls(div, i);
    swapElements(array, i);
    arrayContainer.appendChild(div);
  }
  while (!isArrayOrdered(array)) {
    for (let i = 0; i < 4; i++) {
      console.log(i);
      let div = generateContainer();
      fillArrContainer(div, array);
      highlightCurrentEls(div, i);
      swapElements(array, i);
      arrayContainer.appendChild(div);
    }
  }
  if (isArrayOrdered(array)) {
    let div = generateContainer();
    for (let i = 0; i < 4; i++) {
      swapElements(array, i);
    }
    fillArrContainer(div, array);
    div.style.border = "4px solid green";
    arrayContainer.appendChild(div);
  }
  sortBtn.setAttribute("hidden", "");
});
