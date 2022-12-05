// 1.** Creare un oggetto che descriva una studentessa o uno studente, 
// con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

let students = [
    {
        "nome" : "Gerbilla",
        "cognome" : "Andretti",
        "age" : "17"
    },

    {
        "nome" : "Fabrietto",
        "cognome" : "Pistilli",
        "age" : "18"
    }
]

for (let i=0; i < students.length; i++){
    const studente = students[i];
    for (let key in studente){
        console.log(key)
        console.log(studente[key])
    }
}