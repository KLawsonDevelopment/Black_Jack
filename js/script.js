$(document).ready(function () {
    console.log("jQuery active")

    var myArray=[1,2,3,4,5,6,7,8,9,0];
    console.log(myArray);
    var newArray=_.shuffle(myArray);
    console.log(newArray);

    $('#test').text(newArray)
})