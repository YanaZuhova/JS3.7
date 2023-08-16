let a = 1;
let b = 2;

array = [a, b];
console.log(array);
console.log(array[0]);

array[2] = 3;
console.log(array);
console.log(array.length);

array.push(4);
console.log(array);

let pop = array.pop();
console.log(array);

console.log(pop);

array.unshift("letsgo");
console.log(array);

let shift = array.shift();
console.log(shift);

array.push(5,7,12,35);
console.log(array);

array.splice(1,3,"from", "splice");
console.log(array);

let array2 = [46,59];
array = array.concat(array2);
console.log(array);

console.log("index From - ", array.indexOf("from"));
