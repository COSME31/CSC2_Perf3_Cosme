const arr1 = ["Cecile", "Lone"]; 
const arr2 = ["Emil", "Tobias", "Linus"]; 
const arr3 = arr1.concat(arr2);
console.log(arr3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.push("Kiwi"); 
console.log(fruits);

const array1 = [1, 2, 3];
array1.unshift(4, 5); 
console.log(array1);

fruits.pop(); 
console.log(fruits);

const array2 = [1, 2, 3];
array2.shift(); 
console.log(array2);

fruits.sort(); 
console.log(fruits);

const slice_fruits = fruits.slice(1, 3); 
console.log(slice_fruits);

const months = ["April", "May", "June", "July"];
months.splice(1, 4,"April", "July"); 

console.log(months);