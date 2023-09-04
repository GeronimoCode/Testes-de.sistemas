User = document.getElementById("User")
buscar = document.getElementById("buscar")
result = document.getElementById("result")

buscar.addEventListener("click", () => {
    fetch(`https://api.github.com/users/${User.value}`)
    .then(res => res.json())
    .then(data => {
        result.innerHTML = 
        `
        <img src "${data.avatar_url}" />
        <h3>Nome: ${data.name} </h3>
        <h3>User: ${data.login} </h3>
        <h3 href="${data.html_url}/?tab=repos"></a>
        `
    })
})
