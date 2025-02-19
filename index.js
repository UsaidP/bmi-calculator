const feetInput = document.getElementById("height-feet");
const inchInput = document.getElementById("height-inches");
const weightInput = document.getElementById("weight");
const Calculate = document.getElementById("calculate");
const formDiv = document.getElementById("bmi-form");
const result = document.getElementById("result-p");
const clear = document.getElementById("clear");
const resulHeading = document.getElementById("resul-heading");
const bmiCategory = document.getElementById("bmi-category");

let feet = 0;
let inches = 0.0;
let weight = 0;
let meter = 0;

feetInput.addEventListener("input", () => {
  feet = feetInput.value || 0;
});
inchInput.addEventListener("input", () => {
  inches = inchInput.value || 0;
});
weightInput.addEventListener("input", () => {
  weight = weightInput.value || 0;
});

console.log(meter);
const BMI = 703 * weight;
Calculate.addEventListener("click", () => {
  let height = feet * 0.3048 + inches * 0.0254;

  if (height === 0 || weight === 0) {
    console.log("Please enter valid height and weight.");
    return;
  }
  let heightMeter = height ** 2;
  console.log(heightMeter);
  // Calculate BMI (assuming weight is in kg)
  let bmi = weight / heightMeter;

  switch (true) {
    case bmi < 18:
      bmiCategory.innerText = "Underweight";
      break;
    case bmi < 24:
      bmiCategory.innerText = "Normal";
      break;
    case bmi < 30:
      bmiCategory.innerText = "Overweight";
      break;
    default:
      bmiCategory.innerText = "Obesity";
      break;
  }
  result.innerText = ` ${bmi.toFixed(2)}`;
  resulHeading.innerText = "Your BMI Reasult";
});
clear.addEventListener("click", () => {
  console.log("Clicked");
  document.location.reload();
});
