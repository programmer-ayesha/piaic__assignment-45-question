//write array of earoplane brand
const planes: { brand: string, model: string, year: number, color: string }[] = [
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
  planes.forEach((planes, index) => {
    console.log(`${index + 1}. Brand: ${planes.brand}`);
    console.log(`Model: ${planes.model}`);
    console.log(`Year: ${planes.year}`);
    console.log(`Color: ${planes.color}`);
     
  });
