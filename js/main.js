const getAll = async () => {
  const username = document.getElementById("Username").value;
  const password = document.getElementById("Password").value;

  console.log(username);
  console.log(password);

  const promise = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  });

  const data = await promise.json();
  return data;

};
async function fetchData() {
  const data = await getAll();
  console.log(data);
  console.log(data.token);
  localStorage.setItem("token", JSON.stringify(data.token));
  window.location.assign("productdetail.html");
}

const login = (e) => {
  e.preventDefault();
  fetchData();
};
