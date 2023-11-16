
function createCars(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    const car: { manufacturer: string; model: string; [key: string]: any } = {
      manufacturer,
      model,
    };
  

    options.forEach((option) => {
      const [key, value] = Object.entries(option)[0];
      car[key] = value;
    });
  
    return car;
  }
  

  const carsInfo = createCar("ThunderJet", "Velocity V-8", { color: "Midnight Black" }, { year: 2023 });
  

  console.log("Car details:");
  console.log(carInfo);