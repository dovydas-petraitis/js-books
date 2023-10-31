

// let names = ['Jonas', 'Andrius', 'Ieva', 'Karolis']; //masyvas
 
// names = names.join(', '); // names tampa string

// names = names.split(',');

// console.log(names); //isvedimas

// names.push('Giedrius'); // prideda i gala
// names.pop(); // istrina is galo

// // Alternatyva 
// names.unshift('Kristina') // prideda i prieki
// names.shift(); // pasalina is priekio


// //prideda i masyva nurodant vieta
// names.splice(0,0,'Gintaras')

// console.log(names); //isvedimas





// Reikia sukurti sveciu saraso aplikacija
// Paleidus programa issoka langas ir paklausia kiek sveciu bus partyje
// Ivedus skaiciu, rodomas kitas langas, kuriame turime ivesti svecio varda
// Langas kartojamas tiek kartu kiek reikia pakviesti sveciu
// Bonus uzduotis: 
// Sukurti masyva: blackList. Jeigu svecias blackliste i sarasa netraukiam

let howMany = prompt('Kiek sveciu bus');

let peopleList = []
let blackList = ['Petras']

if(isNaN(howMany))
{
    alert('Neteisingai ivestas sveciu kiekis');
}

for (let i=0; i<howMany; i++) {
    
    addEvent = prompt('Iveskite svecio varda');
    if(addEvent === 'Petras') {
        alert('Sitas zmogus nepageidaujamas')
    }
    peopleList.push(addEvent);
    

}

console.log(peopleList)

// console.log('Partyje Dalyvaus');
// for (let peoples in peopleList) {
//     console.log(peopleList[peoples]`)
// }
