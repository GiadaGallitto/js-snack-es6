/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome 
e l'indicazione se può guidare, in base all'età.

 */

const people = [
    {
        nome: `Gino`,
        cognome: `Franco`,
        age: `57`
    },

    {
        nome: `Poppy`,
        cognome: `Smeralda`,
        age: `45`
    },

    {
        nome: `Fannie`,
        cognome: `Fenix`,
        age: `35`
    },

    {
        nome: `Sirio`,
        cognome: `Nero`,
        age: `32`
    },

    {
        nome: `Jimbo`,
        cognome: `Hakins`,
        age: `17`
    },

    {
        nome: `Fabio`,
        cognome: `Fenrir`,
        age: `15`
    },

    {
        nome: `Jack`,
        cognome: `Sparrow`,
        age: `27`
    },

    {
        nome: `Karen`,
        cognome: `Keran`,
        age: `14`
    },

    {
        nome: `Reptile`,
        cognome: `Raptoile`,
        age: `11`
    },

    {
        nome: `Bessy`,
        cognome: `Horsa`,
        age: `18`
    },
];

const permission = people.map((person) => {
    if (person.age < 18){
        return `${person.nome} ${person.cognome} non può guidare`
    } else {
        return `${person.nome} ${person.cognome} può guidare`
    }
})

console.log(permission)