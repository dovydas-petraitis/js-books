
(function(){
    // Save issikviecianti funkcija 
})();


// Funkcijos deklaravimas
function syHi(a) {
    return a*2;
}

// funkcijos pakvietimas

console.log(syHi(5))

// Anonimine
const calc = function(...numbers){
    return numbers.reduce((prev, current)=>prev*current); //Paima ankstesne ir perbega per visas
}

console.log(calc(5,6,7,8,9,10))
