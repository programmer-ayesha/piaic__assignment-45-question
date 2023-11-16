//person name
var person_Name = "ayesha";
//lower case
console.log("lowercase: ".concat(personName.toLowerCase()));
//name in upper case
console.log("uppercase:".concat(personName.toUpperCase()));
//title name
var title_CaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase: ".concat(titleCaseName));
