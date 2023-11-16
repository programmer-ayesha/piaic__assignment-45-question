function describeCity(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("london", "UK");
describeCity("karachi", "pakistan");
describeCity("Berlin", "Germany");
