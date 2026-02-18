// Basic JavaScript Exercises
// (Keep functions in the global scope because the HTML uses inline onclick="..." handlers.)

function getCounterValue() {
  const counterEl = document.getElementById('counter');
  const n = parseInt(counterEl?.textContent ?? '0', 10);
  return Number.isFinite(n) ? n : 0;
}

function setCounterValue(value) {
  const counterEl = document.getElementById('counter');
  if (!counterEl) return;
  counterEl.textContent = String(value);
}

// 1pt: Simple Functions
function tickUp() {
  setCounterValue(getCounterValue() + 1);
}

function tickDown() {
  // If you want to allow negatives, remove Math.max(...)
  setCounterValue(Math.max(0, getCounterValue() - 1));
}

// 1pt: Simple For Loop
function runForLoop() {
  const n = getCounterValue();
  const out = [];
  for (let i = 0; i <= n; i++) out.push(i);

  const resultEl = document.getElementById('forLoopResult');
  if (resultEl) resultEl.textContent = out.join(' ');
}

// 1pt: Repetition with Condition
function showOddNumbers() {
  const n = getCounterValue();
  const out = [];
  for (let i = 1; i <= n; i += 2) out.push(i);

  const resultEl = document.getElementById('oddNumberResult');
  if (resultEl) resultEl.textContent = out.join(' ');
}

// 1pt: Arrays
function addMultiplesToArray() {
  const n = getCounterValue();
  const arr = [];

  // Reverse order: start at the largest multiple of 5 <= n and count down by 5
  for (let i = Math.floor(n / 5) * 5; i >= 5; i -= 5) {
    arr.push(i);
  }

  // NOTE: print the array itself, not each element individually
  console.log(arr);
}

// 2pts: Objects and Form Fields
function printCarObject() {
  const carType = document.getElementById('carType')?.value ?? '';
  const carMPG = document.getElementById('carMPG')?.value ?? '';
  const carColor = document.getElementById('carColor')?.value ?? '';

  const carObj = {
    cType: carType,
    cMPG: carMPG,
    cColor: carColor,
  };

  console.log(carObj);
}

// 2pts: Objects and Form Fields pt. 2
function loadCar(which) {
  // These objects are defined in the footer of the provided HTML.
  const carMap = {
    1: typeof carObject1 !== 'undefined' ? carObject1 : null,
    2: typeof carObject2 !== 'undefined' ? carObject2 : null,
    3: typeof carObject3 !== 'undefined' ? carObject3 : null,
  };

  const car = carMap[which];
  if (!car) return;

  const typeEl = document.getElementById('carType');
  const mpgEl = document.getElementById('carMPG');
  const colorEl = document.getElementById('carColor');

  if (typeEl) typeEl.value = car.cType ?? '';
  if (mpgEl) mpgEl.value = car.cMPG ?? '';
  if (colorEl) colorEl.value = car.cColor ?? '';
}

// 2pt: Changing Styles
function changeColor(which) {
  const p = document.getElementById('styleParagraph');
  if (!p) return;

  const colorMap = {
    1: 'red',
    2: 'green',
    3: 'blue',
  };

  p.style.color = colorMap[which] ?? '';
}
