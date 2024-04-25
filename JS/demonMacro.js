const protein = 4;
const carbohydrate = 4;
const fat = 9;
let age = null;
let height = null;
let weight = null;
let man = true;
var slider = document.getElementsByClassName("age")
var output = document.getElementById("age");

function calculateBMR(weight, height, age, BMR){
    let BMR;
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


