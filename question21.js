//write array of earoplane brand
var planes = [
    {
        brand: "Horizon Avionics",
        model: "X-2000",
        year: 2022,
        color: " Midnight Blue and Silver",
    },
    {
        brand: "Aether Aerospace",
        model: " Voyager V-500",
        year: 2023,
        color: " Crimson Red and Pearl White",
    },
    {
        brand: " Quantum Flight Systems",
        model: " AeroSprint 3000",
        year: 2021,
        color: " Graphite Black and Electric Blue",
    },
];
// Print the list of all planes
console.log("List of planes:");
planes.forEach(function (planes, index) {
    console.log("".concat(index + 1, ". Brand: ").concat(planes.brand));
    console.log("   Model: ".concat(planes.model));
    console.log("   Year: ".concat(planes.year));
    console.log("   Color: ".concat(planes.color));
    console.log();
});
