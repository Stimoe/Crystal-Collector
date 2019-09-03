

var computerNumber;
var rock1;
var rock2;
var rock3;
var rock4;
var userNumber=0;
var newNumber


function gameReset (){
computerNumber = Math.floor((Math.random() * 100) + 20);
console.log(computerNumber);
rock1 = Math.floor((Math.random() * 12) + 1);
$("#rock1").val(rock1);
rock2 = Math.floor((Math.random() * 12) + 1);
rock3 = Math.floor((Math.random() * 12) + 1);
rock4 = Math.floor((Math.random() * 12) + 1);
console.log(rock1)
console.log(rock2)
console.log(rock3)
console.log(rock4)
}

$(document).ready(function() {
    $("#number").text(computerNumber)
        $("#rock1").on("click", function() {
            newNumber= userNumber + rock1
        var currentValue = parseInt($("#current_number_span").text())
        $("#current_number_span").text(currentValue + newNumber)
            
        })
            $("#rock2").on("click", function() {
                newNumber= userNumber + rock2
            var currentValue = parseInt($("#current_number_span").text())
            $("#current_number_span").text(currentValue + newNumber)

            })
                $("#rock3").on("click", function() {
                    newNumber= userNumber + rock3
                var currentValue = parseInt($("#current_number_span").text())
                $("#current_number_span").text(currentValue + newNumber)

                })
                    $("#rock4").on("click", function() {
                        newNumber= userNumber + rock4
                    var currentValue = parseInt($("#current_number_span").text())
                    $("#current_number_span").text(currentValue + newNumber)

                    })      
})


gameReset();