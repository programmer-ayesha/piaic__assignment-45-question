function city_Country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  

  const result1 = city_Country("Karachi", "Pakistan");
  const result2 = city_Country("london", "UK");
  const result3 = city_Country("Paris", "France");
  

  console.log(result1);
  console.log(result2);
  console.log(result3);