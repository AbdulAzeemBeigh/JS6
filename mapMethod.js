'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const usd = 1.1;
const movementsUSD = movements.map(function(mov){
    return mov * usd;
});
console.log(movements);
console.log(movementsUSD);

const usd_new = 1.3;
const movement_usd_new = [];
for(const moves of movements){
     movement_usd_new.push(moves * usd_new);
};
console.log(movement_usd_new);

const movementsDescription = movements.map(function(mov,i){
    return `Movement ${i+1} : you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)} `

});
console.log(movementsDescription);