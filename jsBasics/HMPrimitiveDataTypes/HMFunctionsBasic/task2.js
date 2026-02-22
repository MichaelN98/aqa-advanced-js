function adultPerson(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("Age 25:", adultPerson(25)); // true
console.log("Age 15:", adultPerson(15)); // false
