// write the  countries name's
var countries = [
    "london",
    "hongkong",
    "brazil",
    "Japan",
    "malta",
    "tokyou",
    "Pakistan",
    "united kingdom",
    "iran",
    "europe",
];
// made the list  all contries name
console.log("List of Countries names:");
countries.forEach(function (country, index) { return console.log("".concat(index + 1, ". ").concat(country)); });
