var Car = 'subaru';
// write test number 1
console.log("Is car == 'subaru'? I predict True.");
console.log(Car === 'subaru');
// Test number  2
console.log("Is car != 'toyota'? I predict True.");
console.log(Car !== 'toyota');
// Test number 3
console.log("Is car === 'Subaru'? I predict False.");
console.log(Car === 'Subaru');
// Test number 4
console.log("Is car !== 'Subaru'? I predict True.");
console.log(Car !== 'Subaru');
// Test number 5
var is_JapaneseCar = true;
console.log("Is car == 'subaru' and is Japanese Car is True? I predict True.");
console.log(Car === 'subaru' && is_JapaneseCar);
// Test number 6
var has_Sunroof = false;
console.log("Is car == 'subaru' or has Sunroof is True? I predict True.");
console.log(Car === 'subaru' || has_Sunroof);
// Test number 7
var is_Sedan = true;
console.log("Is car == 'subaru' and is Sedan is False? I predict False.");
console.log(Car === 'subaru' && !is_Sedan);
// Test numbrer 8
var is_Convertible = false;
console.log("Is car != 'subaru' or is Convertible is False? I predict False.");
console.log(Car !== 'subaru' || !is_Convertible);
// Test number 9
var is_LuxuryCar = false;
console.log("Is car == 'subaru' or is LuxuryCar is True? I predict True.");
console.log(Car === 'subaru' || is_LuxuryCar);
// Test number 10
var is_CompactCar = true;
console.log("Is car != 'subaru' and isCompactCar is False? I predict False.");
console.log(Car !== 'subaru' && !is_CompactCar);
