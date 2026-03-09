function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
    res.json(),
  );
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1').then((res) =>
    res.json(),
  );
}

//then/catch
getTodo()
  .then((data) => console.log('Todo:', data))
  .catch((error) => console.log('Error:', error));

getUser()
  .then((data) => console.log('User:', data))
  .catch((error) => console.log('Error:', error));

// Prom.all
Promise.all([getTodo(), getUser()]).then((data) => console.log('All:', data));

// Prom.race
Promise.race([getTodo(), getUser()]).then((data) => console.log('Race:', data));
