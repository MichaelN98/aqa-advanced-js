async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

async function run() {
  try {
    const todo = await getTodo();
    console.log("Todo:", todo);

    const user = await getUser();
    console.log("User:", user);

    const all = await Promise.all([getTodo(), getUser()]);
    console.log("All:", all);

    const race = await Promise.race([getTodo(), getUser()]);
    console.log("Race:", race);

  } catch (error) {
    console.log("Error:", error);
  }
}

run();

