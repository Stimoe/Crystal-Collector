

var computerNumber;
var rock1;
var rock2;
var rock3;
var rock4;
var userNumber = 0;
var newNumber;
var wins = 0;
var losses = 0;
var currentValue;


function gameReset() {
    computerNumber = Math.floor((Math.random() * 100) + 20);
    console.log(computerNumber);
    rock1 = Math.floor((Math.random() * 12) + 1);
    rock2 = Math.floor((Math.random() * 12) + 1);
    rock3 = Math.floor((Math.random() * 12) + 1);
    rock4 = Math.floor((Math.random() * 12) + 1);
    console.log(rock1);
    console.log(rock2);
    console.log(rock3);
    console.log(rock4);
    userNumber=0;
    $("#number").text(computerNumber);
    $("#current_number_span").text(userNumber);
}
function check(currentValue, computerNumber) {
    if (currentValue === computerNumber) {
        wins++
        $("#wins").text(wins);
        alert("You Won!!");
        gameReset();
    }
    else if (currentValue > computerNumber) {
        losses++
        $("#losses").text(losses);
        alert("You Lost");
        gameReset();
    }
}
$(document).ready(function () {
    $("#rock1").on("click", function () {
        newNumber = userNumber + rock1;
        currentValue = parseInt($("#current_number_span").text());
        currentValue = (currentValue + newNumber);
        $("#current_number_span").text(currentValue);
        console.log(currentValue);
        check(currentValue, computerNumber);
    })
    $("#rock2").on("click", function () {
        newNumber = userNumber + rock2
        currentValue = parseInt($("#current_number_span").text())
        currentValue = (currentValue + newNumber);
        $("#current_number_span").text(currentValue)
        check(currentValue, computerNumber);
    })
    $("#rock3").on("click", function () {
        newNumber = userNumber + rock3
        currentValue = parseInt($("#current_number_span").text())
        currentValue = (currentValue + newNumber);
        $("#current_number_span").text(currentValue)
        check(currentValue, computerNumber);
    })
    $("#rock4").on("click", function () {
        newNumber = userNumber + rock4
        currentValue = parseInt($("#current_number_span").text())
        currentValue = (currentValue + newNumber);
        $("#current_number_span").text(currentValue)
        check(currentValue, computerNumber);
    })
})
gameReset();