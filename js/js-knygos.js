
let bookCatalog = 
    {
        psichologineLiteratura:[
            {   
                isbn: '8546481516',
                realease_date: '2008',
                title: 'Kaip tapti laimingu',
                pages: 191
            },
            {
                isbn: '6541481123',
                realease_date: '2011',
                title: 'Kodel as toks',
                pages: 122
            },
            {
                isbn: '123648511',
                realease_date: '2008',
                pavadinimas: '10 budu kaip uzdirbti milijona',
                pages: 150
            },
            {
                isbn: '8546481516',
                realease_date: '2019',
                pavadinimas: 'Ar verta buti programuotoju',
                pages: 221
            }
        ],
    
        grozineLiteratura:[
            {
                isbn: '1351654654',
                realease_date: '1997',
                pavadinimas: 'Meiles kalba',
                pages: 354
            },
            {
                isbn: '1656893',
                realease_date: '2011',
                pavadinimas: 'Svajos',
                pages: 224
            },
            {
                isbn: '1613517',
                realease_date: '2018',
                pavadinimas: 'Svajoniu salis',
                pages: 150
            },
            {
                isbn: '464891235',
                realease_date: '2020',
                title: 'Trys meiles kalbos',
                pages: 221
            }
        ],

        fantastineLiteratura:[
            {
                isbn: '1351654654',
                realease_date: '1997',
                title: 'Ziedu valdovas',
                puslapiuSkaicius: 354
            },
            {
                isbn: '648165161313',
                realease_date: '2017',
                title: 'Dirbtinio intelekto istorija',
                puslapiuSkaicius: 125
            },
            {
                isbn: '5616518',
                realease_date: '2020',
                title: 'Ateities vizija',
                puslapiuSkaicius: 169
            },
            {
                isbn: '464891235',
                realease_date: '2020',
                title: 'Ponas Robotas',
                pages: 320
            }
        ],
    }

    
    function print_book(book){
        let formatted_title = book.title;
        if (new Date().getFullYear() == book.realease_date){
            formatted_title =+ 'Nauja knyga'
        }
        console.log(`ISBN: ${book.isbn}`)
        console.log(`Isleidimo data: ${book.realease_date}`)
        console.log(`Knygos pavadinimas: ${book.title}`)
        console.log(`Puslapiai: ${book.pages}`)
        console.log('-----------------------------')
        
    }

    function print_catalogue(bookCatalog){

        for(let category of bookCatalog){
            print_book(bookCatalog);
        }
    }

    print_book(bookCatalog);