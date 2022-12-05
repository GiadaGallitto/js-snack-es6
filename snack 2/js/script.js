/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchine = [
    {
        varietà : `romanesca`,
        peso : 10,
        lunghezza : `20`
    },

    {
        varietà : `fiorentina`,
        peso : 8,
        lunghezza : `18`
    },

    {
        varietà : `siciliana`,
        peso : 12,
        lunghezza : `23`
    },

    {
        varietà : `striata`,
        peso : 8,
        lunghezza : `15`
    },

    {
        varietà : `bianca triestina`,
        peso : 6,
        lunghezza : `10`
    },

    {
        varietà : `tonda di Firenze`,
        peso : 25,
        lunghezza : `14`
    },

    {
        varietà : `tonda di Nizza`,
        peso : 16,
        lunghezza : `19`
    },

    {
        varietà : `trombetta`,
        peso : 11,
        lunghezza : `21`
    },

    {
        varietà : `gialla`,
        peso : 12,
        lunghezza : `29`
    },

    {
        varietà : `rugosa`,
        peso : 16,
        lunghezza : `27`
    },
]

const weight = [];

for (let i = 0; i < zucchine.length; i++){
    
    const currentZucchina = zucchine[i]
    
    weight.push(currentZucchina.peso)
}

for(let i = 0; i < weight.length; i++){
    
}

console.log(weight)