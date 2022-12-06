// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, 
// tipo leone => lEONE, canidi => cANIDI

const animals = [
    {
        nome: `leone`,
        famiglia: `felini`,
        classe: `mammiferi`
    },

    {
        nome: `drago barbuto`,
        famiglia: `agamidi`,
        classe: `rettili`
    },

    {
        nome: `balena`,
        famiglia: `cetacei`,
        classe: `mammiferi`
    },
    
    {
        nome: `cane`,
        famiglia: `canidi`,
        classe: `mammiferi`
    },

    {
        nome: `giraffa`,
        famiglia: `giraffidae`,
        classe: `mammiferi`
    },

    {
        nome: `cobra`,
        famiglia: `elapidi`,
        classe: `rettili`
    },

    {
        nome: `pesce palla`,
        famiglia: `Tetraodontidae`,
        classe: `pesci`
    },
    
    {
        nome: `falco`,
        famiglia: `rapaci`,
        classe: `uccelli`
    },

    {
        nome: `gatto`,
        famiglia: `felini`,
        classe: `mammiferi`
    },

    {
        nome: `drago`,
        famiglia: `dragonici`,
        classe: `rettili`
    }
];

// Dopo aver creato un filter, del mio elemento (object), seleziono la sua chiave classe e la confronto
const mammiferi = animals.filter((animale) => animale.classe === `mammiferi`);

console.log(mammiferi)

const nuoviMammiferi = mammiferi.map((mammifero) => {
    // Questo fa diventare uppercase tutte le lettere del nome dell'animale, tranne la prima lettera
    mammifero.nome = mammifero.nome.charAt(0) + mammifero.nome.substring(1).toUpperCase;

    return mammifero;
});

console.log(nuoviMammiferi);