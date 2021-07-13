

const waterTemp = 31; 

let boilingSpan = document.getElementById('boiling-temp');
// boilingSpan.innerHTML = 212;

let freezingSpan = document.getElementById('freezing-temp');
// freezingSpan.innerHTML = 32;

let curentSpan = document.getElementById('water-temp');
// curentSpan.innerHTML = waterTemp;

// using an arrow function

let FreezingTemp = () => freezingSpan.innerHTML = 32;
FreezingTemp();
let BoilingTemp  = () => boilingSpan.innerHTML = 212;
BoilingTemp();
let CurrentTemp = () => curentSpan.innerHTML = waterTemp;
CurrentTemp();



// function BoilingTemp () {
//     boilingSpan.innerHTML = 212;
// }

// BoilingTemp();


// If the number stored in “water-temp” is above 212, remove the class “hide” and add the class “show” to the section with the ID “boiling” so that the message “The water is hot. I think it is boiling.” appears

const hotTemp = document.getElementById("boiling")
if (waterTemp>212) {
    setTimeout(function(){
        hotTemp.classList.remove("hide");
        hotTemp.classList.add("show"); 
    }, 3000);
}


// If the number stored in “water-temp” is below 32, remove the class “hide” and add the class “show” to the section with the ID “frozen” so that the message “The water is cold. I think it is frozen.” appears

    const frozonTemp = document.getElementById("frozen")
    if (waterTemp<32) {
        setTimeout(function(){
            frozonTemp.classList.remove("hide");
            frozonTemp.classList.add("show"); 
        }, 3000);
    }

// If the number stored in “water-temp” is neither above 212 nor below 32, remove the class “hide” and add the class “show” to the section with the ID “good-temp” so that the message “The water is fine. Jump on in.” appears

const goodTemp = document.getElementById("good-temp")
if (waterTemp<212 && waterTemp>32) {
    setTimeout(function(){
        goodTemp.classList.remove("hide");
        goodTemp.classList.add("show"); 
    }, 3000);
}


// setTimeout(function(){ alert("Hello"); }, 3000);





