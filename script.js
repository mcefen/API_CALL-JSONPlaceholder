let file = "https://jsonplaceholder.typicode.com/users"

fetch(file)
.then(res => res.json())
.then(res => console.log(res));
