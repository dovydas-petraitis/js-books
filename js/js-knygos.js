
let bookCatalog = 
    {
        Psichologine_Literatura:[
            {   
                isbn: '978-609',
                realease_date: '2022',
                title: 'Pinigų psichologija',
                pages: 260
            },
            {
                isbn: '785-549',
                realease_date: '2023',
                title: 'Minčių skaitymo menas',
                pages: 243
            },
            {
                isbn: '465-887',
                realease_date: '2021',
                title: 'Gilus darbas',
                pages: 320
            },
            {
                isbn: '554-128',
                realease_date: '2019',
                title: 'Laisvė nuo vidinių dvasių',
                pages: 275
            }
        ],
    
        Grozine_Literatura:[
            {
                isbn: '479-985',
                realease_date: '2017',
                title: 'Apdegęs namas',
                pages: 354
            },
            {
                isbn: '669-879',
                realease_date: '2011',
                title: 'Svajos',
                pages: 224
            },
            {
                isbn: '365-698',
                realease_date: '2018',
                title: 'Svajonių šalis',
                pages: 150
            },
            {
                isbn: '287-986',
                realease_date: '2020',
                title: 'Meilės kalbos',
                pages: 221
            }
        ],

        Fantastine_Literatura:[
            {
                isbn: '887-987',
                realease_date: '2020',
                title: 'Žiedų valdovas. Žiedo brolija',
                pages: 496
            },
            {
                isbn: '556-879',
                realease_date: '2020',
                title: 'Hobitas',
                pages: 296
            },
            {
                isbn: '698-876',
                realease_date: '2021',
                title: 'Kopa. Pirma „Kopa“ kronikų knyga',
                pages: 728
            },
            {
                isbn: '622-452',
                realease_date: '2021',
                title: 'Raganius',
                pages: 320
            }
        ]
    
    }

    // Console isvedimas
    function print_book(book) {
        let formatted_title = book.title;
        if (new Date().getFullYear() == book.realease_date) {
            formatted_title += ' - Nauja knyga';
        }
        console.log(`ISBN: ${book.isbn}`);
        console.log(`Isleidimo data: ${book.realease_date}`);
        console.log(`Knygos pavadinimas: ${formatted_title}`);
        console.log(`Puslapių skaičius: ${book.pages}`);
        console.log('-----------------------------');
    }
    
    for (let category in bookCatalog) {
        console.log(`Kategorija: ${category}`);
        let totalPages = 0;
        for (let book of bookCatalog[category]) {
            print_book(book);
            totalPages += book.pages;
        }
        console.log(`Puslapių skaičių suma kategorijoje "${category}": ${totalPages}`);
    }
    //Console pabaiga


    
// Funkcija, kuri sukuria HTML elementą su knygos informacija
function createBookElement(book) {
    const bookElement = document.createElement('div');
    const currentYear = new Date().getFullYear();
    const isNewBook = currentYear.toString() === book.realease_date;

    let formatted_title = book.title;
    if (isNewBook) {
        formatted_title += ' (nauja knyga)';
    }

    bookElement.innerHTML = `
        <h3>${formatted_title}</h3>
        <p>ISBN: ${book.isbn}</p>
        <p>Isleidimo data: ${book.realease_date}</p>
        <p>Puslapiai: ${book.pages}</p>
    `;
    return bookElement;
}


// Funkcija, kuri sukuria Bootstrap akordeono kategoriją su knygomis
function createAccordionCategory(categoryId, books) {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'accordion-item';
    categoryElement.id = categoryId;

    const categoryHeader = document.createElement('h2');
    categoryHeader.className = 'accordion-header';
    categoryHeader.id = `header-${categoryId}`;

    const categoryButton = document.createElement('button');
    categoryButton.className = 'accordion-button';
    categoryButton.type = 'button';
    categoryButton.setAttribute('data-bs-toggle', 'collapse');
    categoryButton.setAttribute('data-bs-target', `#collapse-${categoryId}`);
    categoryButton.textContent = categoryId;

    categoryHeader.appendChild(categoryButton);
    categoryElement.appendChild(categoryHeader);

    const categoryCollapse = document.createElement('div');
    categoryCollapse.className = 'accordion-collapse collapse';
    categoryCollapse.id = `collapse-${categoryId}`;
    categoryCollapse.setAttribute('data-bs-parent', '#Knygu_katalogas');

    const categoryBody = document.createElement('div');
    categoryBody.className = 'accordion-body';

    books.forEach(book => {
        const bookElement = createBookElement(book);
        categoryBody.appendChild(bookElement);
    });

    categoryCollapse.appendChild(categoryBody);
    categoryElement.appendChild(categoryCollapse);

    // Kiekvienos kategorijos puslapių skaičių sumą
    const totalPages = books.reduce((total, book) => total + book.pages, 0);

    // Išvedame puslapių sumą į accordion'ą
    const totalPageElement = document.createElement('p');
    totalPageElement.textContent = `Puslapių skaičius visoje kategorijoje: ${totalPages}`;
    categoryBody.appendChild(totalPageElement);

    return categoryElement;
}

// Paimamas id iš html ir išvedimas į accordion'ą pagal atskiras kategorijas
const accordion = document.getElementById('Knygu_katalogas');

for (let category in bookCatalog) {
    const categoryElement = createAccordionCategory(category, bookCatalog[category]);
    accordion.appendChild(categoryElement);
}

