//Target Element
const userAgeInputBox = document.getElementById("UserAge");
const userHeightInputInFeet = document.getElementById("Userheightfeet");
const userWeightInputInKg = document.getElementById("userWeight");

const calcBMIButton = document.getElementById("calculateBMI");

const displayResultBox = document.getElementById("resultBox");

const clearButton = document.getElementById('resetbtn');
// Formula of BMI = kg/m^2
// feet and inch <=>
// meter = 0.0254 m/inch *(12 *feet + inch);
// meter * meter;



const calcTotalBMI = () =>{
    let weight = userWeightInputInKg.value;
    let heightValue = userHeightInputInFeet.value;
     heightValue = heightValue * 12;//inch return
     heightValue = heightValue * 0.025;//meter
    let meterInsqr = heightValue ** heightValue;
    
     let BMI = (weight / meterInsqr) ;
     console.log(BMI);
   
     
   if(BMI < 18.5){
    let statement = "";
    statement = `<p>Your body mass Index is <span>${BMI}</span> . This considered <span>severely Underweight!</span> </p>`
    displayResultBox.innerHTML = statement;
   }else if(BMI >= 18.5 && BMI < 24.9){
    let statement = "";
    statement = `<p>Your body mass Index is <span>${BMI}</span> . This considered <span>NORMAL!</span> </p>`
    displayResultBox.innerHTML = statement;
   }
   else if(BMI >= 25.0){
    let statement = "";
    statement = `<p>Your body mass Index is <span>${BMI}</span> . This considered <span>OverWeight!</span> </p>`
    displayResultBox.innerHTML = statement;
   }
   else{
    let statement = "";
    statement = `<p>NULL</p>`
    displayResultBox.innerHTML = statement;
   }
}



calcBMIButton.addEventListener('click' , () =>{
        calcTotalBMI();
});

clearButton.addEventListener('click' ,() =>{
    userAgeInputBox.value = '';
    userHeightInputInFeet.value = '';
    userWeightInputInKg.value = '';
});