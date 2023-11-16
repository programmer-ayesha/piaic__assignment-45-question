// showMagicians name
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
// magician names
var magicianNames = ["Seraphina Mystique", "Eldritch Enchantus", "Zephyr Spellweaver", "Astral Illusionist  "];
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
