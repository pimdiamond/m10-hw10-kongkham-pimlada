'use strict';

var waterTemp = 31;

var boilingSpan = document.getElementById('boiling-temp');
// boilingSpan.innerHTML = 212;

var freezingSpan = document.getElementById('freezing-temp');
// freezingSpan.innerHTML = 32;

var curentSpan = document.getElementById('water-temp');
// curentSpan.innerHTML = waterTemp;

// using an arrow function

var FreezingTemp = function FreezingTemp() {
    return freezingSpan.innerHTML = 32;
};
FreezingTemp();
var BoilingTemp = function BoilingTemp() {
    return boilingSpan.innerHTML = 212;
};
BoilingTemp();
var CurrentTemp = function CurrentTemp() {
    return curentSpan.innerHTML = waterTemp;
};
CurrentTemp();

// function BoilingTemp () {
//     boilingSpan.innerHTML = 212;
// }

// BoilingTemp();


// If the number stored in “water-temp” is above 212, remove the class “hide” and add the class “show” to the section with the ID “boiling” so that the message “The water is hot. I think it is boiling.” appears

var hotTemp = document.getElementById("boiling");
if (waterTemp > 212) {
    setTimeout(function () {
        hotTemp.classList.remove("hide");
        hotTemp.classList.add("show");
    }, 3000);
}

// If the number stored in “water-temp” is below 32, remove the class “hide” and add the class “show” to the section with the ID “frozen” so that the message “The water is cold. I think it is frozen.” appears

var frozonTemp = document.getElementById("frozen");
if (waterTemp < 32) {
    setTimeout(function () {
        frozonTemp.classList.remove("hide");
        frozonTemp.classList.add("show");
    }, 3000);
}

// If the number stored in “water-temp” is neither above 212 nor below 32, remove the class “hide” and add the class “show” to the section with the ID “good-temp” so that the message “The water is fine. Jump on in.” appears

var goodTemp = document.getElementById("good-temp");
if (waterTemp < 212 && waterTemp > 32) {
    setTimeout(function () {
        goodTemp.classList.remove("hide");
        goodTemp.classList.add("show");
    }, 3000);
}

// setTimeout(function(){ alert("Hello"); }, 3000);