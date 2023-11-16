// write the  countries name's
const countries: string[] = [
    "london",
    "hongkong",
    "brazil",
    "Japan",
    "malta",
    "tokyou",
    "Pakistan",
    "united kingdom",
    "iran",
    "europe", ];
  
  // made the list  all contries name
  console.log("List of Countries names:");
  countries.forEach((country, index) => console.log(`${index + 1}. ${country}`));
