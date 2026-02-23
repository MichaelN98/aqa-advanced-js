const users = [
  { name: "Anna", email: "anna@gmail.com", age: 22 },
  { name: "Mike", email: "mike@gmail.com", age: 28 },
  { name: "Oleh", email: "oleh@gmail.com", age: 30 },
];

for (const user of users) {
  const { name, email, age } = user;
  console.log(name, email, age);
}
