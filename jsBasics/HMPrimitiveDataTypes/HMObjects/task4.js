const person = {
  firstName: 'Олег',
  lastName: 'Іванов',
  age: 25,
};

person.email = 'oleg@example.com';
delete person.age;

console.log(person);
