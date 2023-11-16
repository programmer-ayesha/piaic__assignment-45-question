//person name
const personName: String ="ayesha";
//lower case
console.log(`lowercase: ${personName.toLowerCase()}`);
//name in upper case
console.log(`uppercase:${personName.toUpperCase()}`);
//title name
const titleCaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(`Titlecase: ${titleCaseName}`);