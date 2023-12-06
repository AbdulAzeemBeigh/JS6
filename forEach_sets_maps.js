'use strict';
// MAP
const countries = new Map([
    ['US','Washington'],
    ['IND','Delhi'],
    ['PAk','Islamabad'],
    ['BAN','Dakha']
]);
countries.forEach(function(key,value,map){
    console.log(`${key}:${value}`);
});

// SETS
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value,_,map){
   console.log(`${value}:${value}`);
});