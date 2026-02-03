const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const generateAnimationData = (input) => {
  const data = [];
  let current = input;
  const calls = [];
  while (current > 1) {
    calls.push(current);
    current = Math.floor(current / 2);
  }
  calls.push(current); // base case

  const numFrames = calls.length;
  const startAddDelay = 1000;
  const addIncrement = 500;
  const startShowDelay = 5000;
  const showIncrement = 5000;
  const removeIncrement = 5000;

  for (let i = 0; i < numFrames; i++) {
    const inputVal = calls[i];
    const addElDelay = startAddDelay + i * addIncrement;
    const showIndex = numFrames - 1 - i;
    const showMsgDelay = startShowDelay + showIndex * showIncrement;
    const removeElDelay = showMsgDelay + removeIncrement;
    let msg;
    if (inputVal === 0 || inputVal === 1) {
      msg = `decimalToBinary(${inputVal}) returns '${inputVal}' (base case) and gives that value to the stack below. Then it pops off the stack.`;
    } else {
      msg = `decimalToBinary(${inputVal}) returns decimalToBinary(${Math.floor(inputVal / 2)}) + ${inputVal % 2} (${inputVal} % 2) and gives that value to the stack below. Then it pops off the stack.`;
    }
    data.push({
      inputVal,
      addElDelay,
      msg,
      showMsgDelay,
      removeElDelay,
    });
  }
  return data;
};

const showAnimation = (input) => {
  result.innerText = "Call Stack Animation";
  animationContainer.innerHTML = "";

  const animationData = generateAnimationData(input);

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  const totalDelay =
    Math.max(...animationData.map((obj) => obj.removeElDelay)) + 1000;
  setTimeout(() => {
    result.textContent = decimalToBinary(input);
  }, totalDelay);
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt > 100) {
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
    return;
  }

  showAnimation(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
