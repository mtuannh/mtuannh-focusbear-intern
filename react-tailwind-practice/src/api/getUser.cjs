async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
}

module.exports = { getUser };
