const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2018,
};

const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "Mike",
};

const car3 = { ...car1, ...car2 };

console.log(car3);
