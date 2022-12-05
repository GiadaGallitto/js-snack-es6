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
        marca : `Alfa Romeo`,
        modello : 208,
        alimentazione : `benzina`
    },

    {
        marca : `Audi`,
        modello : 309,
        alimentazione : `diesel`
    },

    {
        marca : `Ferrari`,
        modello : 505,
        alimentazione : `gpl`
    },

    {
        marca : `Fiat`,
        modello : 107,
        alimentazione : `metano`
    },

    {
        marca : `Hyundai`,
        modello : 208,
        alimentazione : `elettrico`
    },

    {
        marca : `Bmw`,
        modello : 602,
        alimentazione : `benzina`
    },

    {
        marca : `Ford`,
        modello : 309,
        alimentazione : `diesel`
    },

    {
        marca : `VolsWagen`,
        modello : 718,
        alimentazione : `gpl`
    },

    {
        marca : `Renault`,
        modello : 206,
        alimentazione : `metano`
    },

    {
        marca : `Lancia`,
        modello : 114,
        alimentazione : `elettrico`
    },
];

const arrBenzina = [];

const arrDiesel = [];

const arrOthers = [];


for (let i = 0; i < cars.length; i++){
    
    const currentAuto = cars[i]
    
    if(currentAuto.alimentazione === `benzina`){
        arrBenzina.push(currentAuto);
    } else if (currentAuto.alimentazione === `diesel`) {
        arrDiesel.push(currentAuto);
    } else {
        arrOthers.push(currentAuto);
    }
}

console.log(arrBenzina, arrDiesel, arrOthers);