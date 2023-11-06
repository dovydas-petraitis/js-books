
// 1 Metodas
document.querySelector('#vip').addEventListener('click',()=> {
    alert('Paspaudziau')
})

// 2 Metodas
document.querySelector(".ads").onclick= ()=> {
    alert("Kitas")
}


// Paspaudus ant pastraipos teksto, srifto dydis padideja du kartus.

for (const article of document.querySelectorAll('article p')){
    article.addEventListener('click',()=>{
        article.style.fontSize="2em";
    })
}
  


for (const article of document.querySelectorAll('article p')){
    article.addEventListener('click',()=>{
        article.style.fontSize="2em";
    })
}



// Sukurti toDo list aplikacija

// Vartotojas iveda i input lauka darbo pavadinima
// Paspaudzia mygtuka pradeti
//  Ivestas darbas pridedamas i ul lista
// Kai vartotojas paspaudzia mygtuka pasalinti, pasalinamas paskutinis darbas
// su li elementu

// Darbo sukurimo metu i ul sukuriamas li, o i li idedamas darba aprasantis tekstas


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const task = document.querySelector('input').value;
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    document.querySelector('section').appendChild(ul);
    document.querySelector('ul').appendChild(li);

    li.textContent = `${task}`;


    document.querySelector('form').addEventListener('reset', (e) => {
        e.preventDefault();
        
        const liLast = ul.lastChild;
        if (liLast) {
            ul.removeChild(liLast);
        }
    });
});
