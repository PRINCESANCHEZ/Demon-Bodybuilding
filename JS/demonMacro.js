const protein = 4;
const carbohydrate = 4;
const fat = 9;
let age = null;
let height = null;
let weight = null;
let man = true;
var slider = document.getElementsByClassName("age")
var output = document.getElementById("age");

document.addEventListener('DOMContentLoaded', function() {
    // Get the slider and output elements
    const ageSlider = document.getElementById('ageSlider');
    const ageOutput = document.getElementById('ageOutput');
    const heightFeetSlider = document.getElementById('heightFeetSlider');
    const heightFeetOutput = document.getElementById('heightFeetOutput');
    const heightInchesSlider = document.getElementById('heightInchesSlider');
    const heightInchesOutput = document.getElementById('heightInchesOutput');
    const weightSlider = document.getElementById('weightSlider');
    const weightOutput = document.getElementById('weightOutput');

    // Update the current slider value (each time you drag the slider handle)
    ageSlider.oninput = function() {
        ageOutput.textContent = this.value;
    };
    heightFeetSlider.oninput = function() {
        heightFeetOutput.textContent = this.value;
    };
    heightInchesSlider.oninput = function() {
        heightInchesOutput.textContent = this.value;
    };
    weightSlider.oninput = function() {
        weightOutput.textContent = this.value;
    };
});

function calculateBMR(weight, height, age){
    let BMR = 0;
    if(man){
        BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }else{
        BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    return BMR;
}

function calculateTotalCalories(bmr, activityLevel) {
    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      extreme: 1.9
    };
    const activity = activityFactors[activityLevel] || 1;
    return calculateBMR * activity;
}




