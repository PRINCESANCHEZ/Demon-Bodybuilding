const protein = 4;
const carbohydrate = 4;
const fat = 9;

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

function calculateBMR(weight, height, age, sex){
    let BMR = 0;
    let weightTotal = parseInt(document.getElementById('weightOutput').textContent);
    let heightTotal = parseInt(document.getElementById('heightFeetOutput').textContent) * 12 + parseFloat(document.getElementById('heightInchesOutput').textContent);
    let ageTotal = parseInt(document.getElementById('ageOutput').textContent);

    if(sex === "Male"){
        BMR = 66 + (6.2 * weightTotal) + (12.7 * heightTotal) - (6.76 * ageTotal);
    }else{
        BMR = 655 + (4.35 * weightTotal) + (4.7 * heightTotal) - (4.7 * ageTotal);
    }
    return BMR;
}

function calculateGoalAdjustment(goal) {
    switch(goal) {
        case 'lightCut':
            return -500; // Subtract 500 calories for a 1 lb per week loss
        case 'heavyCut':
            return -1000; // Subtract 1000 calories for a 2 lb per week loss
        case 'lightBulk':
            return 500; // Add 500 calories for a 1 lb per week gain
        case 'heavyBulk':
            return 1000; // Add 1000 calories for a 2 lb per week gain
        default:
            return 0; // No adjustment for maintaining weight
    }
}

function calculateActivityAdjustment(activity){
    switch(activity){
        case 'sedentary':
            return
    }
}

function calculateTotalCalories() {
    console.log("Button clicked, starting calculations.");
    // Get the values from input elements
    let weight = parseInt(document.getElementById('weightOutput').textContent);
    let heightFeet = parseInt(document.getElementById('heightFeetOutput').textContent);
    let heightInches = parseInt(document.getElementById('heightInchesOutput').textContent);
    let age = parseInt(document.getElementById('ageOutput').textContent);
    let sex = document.getElementById('sex-selector').value;
    let activityLevel = document.getElementById('activity-selector').value;

    // Calculate total height in inches
    let totalHeight = heightFeet * 12 + heightInches;

    // Calculate Basal Metabolic Rate (BMR)
    let bmr = calculateBMR(weight, totalHeight, age, sex);

    // Get activity factor from predefined factors
    let activityFactors = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        extreme: 1.9
    };
    let activityFactor = activityFactors[activityLevel];
    let maintenanceCalories = bmr * activityFactor;
    let goal = document.getElementById('goal-selector').value;
    let calorieAdjustment = calculateGoalAdjustment(goal);
    // Calculate total calories
    document.getElementById('calculate-macros').addEventListener('click', calculateTotalCalories);
    document.getElementById('calculate-result').textContent = maintenanceCalories + calorieAdjustment;
}






