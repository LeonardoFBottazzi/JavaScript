const fs = require("fs");

fs.readFile("./test1.txt", (err, data) => { // se faccio un errore, file mi risponderà ERRORE, ad esempio ho sbagliato test.xxx
    if(err){
        console.log("ERRORE!!!")
        console.log(err.message)
        return
    }
    const test1 = data.toString();
    fs.readFile("./test2.txt", (err, data) => {
        if(err){
            console.log("ERRORE!!!")
            console.log(err.message)
            return
        }
       const test2 = data.toString();

       fs.writeFile("./test3.txt", test1+test2, (err) => {
        if(err){
            console.log("ERRORE!!!")
            console.log(err.message)
            return
        }
           console.log("La funzione è andata a buon fine"); // ho appena creato un file con il contenuto del test1 e test2. Essendo andato a buon fine mi scrive "la funzione è andata a buon fine"
       })
})
})
 
console.log("Wow"); // stampa prima wow perchè console.log() è più veloce come funzione di readFile()
