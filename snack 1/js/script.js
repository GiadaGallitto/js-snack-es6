/**
 * 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione 
(benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
 */

const cars = [
    {
        Marca : `Alfa Romeo`,
        Modello : 208,
        Alimentazione : `benzina`
    },

    {
        Marca : `Audi`,
        Modello : 309,
        Alimentazione : `diesel`
    },

    {
        Marca : `Ferrari`,
        Modello : 505,
        Alimentazione : `gpl`
    },

    {
        Marca : `Fiat`,
        Modello : 107,
        Alimentazione : `metano`
    },

    {
        Marca : `Hyundai`,
        Modello : 208,
        Alimentazione : `elettrico`
    },

    {
        Marca : `Bmw`,
        Modello : 602,
        Alimentazione : `benzina`
    },

    {
        Marca : `Ford`,
        Modello : 309,
        Alimentazione : `diesel`
    },

    {
        Marca : `VolsWagen`,
        Modello : 718,
        Alimentazione : `gpl`
    },

    {
        Marca : `Renault`,
        Modello : 206,
        Alimentazione : `metano`
    },

    {
        Marca : `Lancia`,
        Modello : 114,
        Alimentazione : `elettrico`
    },
];

const arrBenzina = [];

const arrDiesel = [];

const arrOthers = [];

