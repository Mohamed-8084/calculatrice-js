function additionner(a,b){
    return a + b
}

function soustraire(a,b){
    return a-b 
}

function multiplier(a, b) { 
return a * b; 
}

function division (a,b){
    if (b===0)
    throw new console.error('Division par zero impossible');
     return a/b
}
function modulo(a, b) {
    if (b === 0) {
        throw new Error('Modulo par zéro impossible !');
    }
    return a % b;
}
// Tester la fonction
console.log('10 % 3 =', modulo(10, 3));   // Attendu : 1
console.log('15 % 4 =', modulo(15, 4));   // Attendu :

console.log('5 + 3 =', additionner(5, 3));
console.log('10 - 4 =', soustraire(10, 4));
console.log('6 * 7 =', multiplier(6, 7));
console.log('15 / 3 =', division(15, 3));