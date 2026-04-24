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

function racineCarree(n) {
if (n < 0) {
throw new Error('Impossible : racine carrée d un nombre négatif !');
}
return Math.sqrt(n);
}
console.log('√16 =', racineCarree(16));    
// Attendu : 4
console.log('√2 ≈', racineCarree(2));      
// Attendu : 1.4142...


console.log('5 + 3 =', additionner(5, 3));
console.log('10 - 4 =', soustraire(10, 4));
console.log('6 * 7 =', multiplier(6, 7));
console.log('15 / 3 =', division(15, 3));