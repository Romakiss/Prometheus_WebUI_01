/**
 * Created by Роман on 27.04.17.
 */

var number = +prompt("Type a number");
console.time("clock");
// function sum(num) {
//     if(num !=1)
//     {
//         return num * sum(num - 1);
//
//     }else{
//         return num;
//     }
//
//
// }

// function sum(num) {
//     var result = 1;
//     for(let i = num; i >= 1; i--){
//         result *= i;
//     }
//     return result;
// }


// function sum(num) {
//     if(num > 1){
//         return sum(num-1) + sum(num-2);
//     }else{
//         return num;
//     }
// }

function sum(num) {
    var result = 0;
    var a = 1;
    var b = 1;
    for(let i = 1; i <= num; i++){

           a = b;
           b = result;
           result = a + b;
    }
    return result;

}
console.timeEnd("clock");
alert(sum(number));





