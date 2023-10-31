/*
// Mokomes Javascript
*/

// Primityvus duomenu tipai
let firstName = "Jonas"; // string
let lastName = "Jonaitis"; // string
let itemPrice = 12.56; // number
let userAge = 25; // number
let userOnline = true; //boolean

// "Inteligentiski duomenu tipai"

// Masyvas
let productCart = ['Computer', 'Phone', 'Pencil'];

// Objektas
let product = {
    title: "Apple Macbook Pro",
    price: 2333.12,
    location: "Kaunas",
}

// Masyve objektai
let products = [
    {
        title: "Apple Macbook Pro",
        price: 2333.12,
        location: "Kaunas",
    },
    {
        title: "Pencil",
        price: 12,
        location: "Klaipeda",
    },
    {
        title: "Table",
        price: 120,
        location: "Vilnius",
    }
]





console.log(typeof(firstName));
console.log(typeof(itemPrice));
console.log(typeof(userAge));
console.log(typeof(userOnline));
console.log(typeof(productCart));
console.log(typeof(product));
console.log(typeof(products));
console.log(productCart);
console.log(products);


firstName = "labas";


// console.log isvedimas
console.log("Man patinka JS " + firstName);
console.log(`Vartotojo pavarde yra ${lastName}`);

const userRole = 'admin';
console.log(`vartotojo role yra ${userRole}`);


