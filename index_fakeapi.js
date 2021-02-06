const fetch = require("node-fetch")

//per vedere l'esercizio
es = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => console.log(data.map(data => data.title))) // utilizzo map x filtrare i dati
        .catch(err => console.log(err))
}

es()

//per fare gli es
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
 
        return data
    })
    .then( solution => {
        fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "post",
        body : JSON.stringify({data}),
        headers: { 'Content-Type': 'application/json' },
        })
            .then( res => res.json() )
            .then( res => console.log(res) )
            .catch( err => console.log(err) )        
    })
    .catch( err => console.log(err) )
