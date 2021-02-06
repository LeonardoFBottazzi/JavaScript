const fetch = require("node-fetch")
 
//accreditamento
accreditamento = () => {
    fetch("https://192.168.1.231:8080/accreditamento",{
        method : "post",
        body : JSON.stringify({nome : "Leonardo Filippo Bottazzi"}),
        headers: { 'Content-Type': 'application/json' },
    })
        .then( res => res.json() )
        .then( res => console.log(res) )
        .catch( err => console.log(err) )
}

accreditamento()
 
//per vedere l'esercizio
es = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")/*, {
    "x-data" : true
    })*/
        .then(res => res.json())
        //.then(es => es.data )
        .then(data => console.log(data.map(data => data.title)))
        //.then(data => console.log(data))
        .catch(err => console.log(err))
}

es()

//per fare gli es
fetch("https://192.168.1.231:8080/1", {
    "x-data" : true
})
    .then(res => res.json())
    .then(es => es.data )
    .then(data => {
 
        return data
    })
    .then( solution => {
        fetch("https://192.168.1.231:8080/1",{
        method : "post",
        body : JSON.stringify({data}),
        headers: { 'Content-Type': 'application/json' },
        })
            .then( res => res.json() )
            .then( res => console.log(res) )
            .catch( err => console.log(err) )        
    })
    .catch( err => console.log(err) )
