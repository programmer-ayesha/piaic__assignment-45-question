function describeCity(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
  }
  

  describeCity("london", "UK");
  describeCity("karachi", "pakistan");
  describeCity("Berlin","Germany"); 