$(document).ready(function () {

    console.log(this);
    test(1,2,3);

});


function test(argument1, argument2, argument3)
{
    console.log(this);
}