// // Length - suranda ilgi
// let vardas = 'Bilas';
// console.log(vardas.length);

// // Konkretus eilutes simbolio gavimas
// console.log(vardas[3]);

// // Subeilutes radimas eiluteje ir istraukimas naudoja (indexOf ir slice metodus)
// console.log(vardas.indexOf("las")); // output: 2

// console.log(vardas.slice(0,2)); // output - "Bi"


// console.log(vardas.toLowerCase());
// console.log(vardas.toUpperCase());

// let pakeistasVardas = vardas.replace("Bi","Gi"); 
// console.log(pakeistasVardas); //output - "Gilas"





// // Switch pavyzdys (Butina naudoti break;)
// const language = "en";

// switch(language) {
//     case "lt":
//         console.log("Sveiki");
//         break;
//     case "en":
//         console.log("Hello");
//         break;
//     default:
//         console.log("Nesupratau kalbos")
// }


// let weather = 20;
// // Kintamosios reiksmes priskyrimas pagal salyga
// // Ternary operator
// let userName = weather>19 ? "Andrius" : "Karolis" 

// console.log(userName)




// let items  = ['Phone', 'Pencil', 'Box', ' Table']

// Klasikinis for ciklas
// for (let i=0; i<items.length; i++) {
//     console.log(items[i])
// }

// let in ciklas 
// for(let item in items){
//     console.log(items[item])
// }

// for(let item of items){
//     console.log(item)
// }


// let user = {
//     id:1,
//     name:'Jonas',
//     email:'jonux123@gmail.com',
//     role:"Admin"
// }


// for (let userData in user) {
//     console.log(`${userData}:${user[userData]}`)
// }



let students = [
    {
        id:1,
        firstName:"Tadas",
        lastName:"Tadauskas",
        email:"tadas.tadauskas@stud.kitm.lt",
        group:"students",
        marks: [
            {
                subject: 'Programming',
                mark:8
            },
            {
                subject: 'IT',
                mark:10
            },
            {
                subject: 'Math',
                mark:7
            },
        ]
    },
    {
        id:2,
        firstName:"Ieva",
        lastName:"Ievaite",
        email:"ieva.ievaite@stud.kitm.lt",
        group:"students",
        marks: [
            {
                subject: 'Programming',
                mark:10
            },
            {
                subject: 'IT',
                mark:7
            },
            {
                subject: 'Math',
                mark:7
            },
        ]
    },
    {
        id:3,
        firstName:"Petras",
        lastName:"Petraitis",
        email:"petras.petraitis@stud.kitm.lt",
        group:"students",
        marks: [
            {
                subject: 'Programming',
                mark:9
            },
            {
                subject: 'IT',
                mark:8
            },
            {
                subject: 'Math',
                mark:6
            },
        ]
    },
    {
        id:4,
        firstName:"Jonas",
        lastName:"Jonaitis",
        email:"tadas.tadauskas@stud.kitm.lt",
        group:"students",
        marks: [
            {
                subject: 'Programming',
                mark:9
            },
            {
                subject: 'IT',
                mark:7
            },
            {
                subject: 'Math',
                mark:10
            },
        ]
    },
    {
        id:5,
        firstName:"Rokas",
        lastName:"Rokaitis",
        email:"rokas.rokaitis@stud.kitm.lt",
        group:"students",
        marks: [
            {
                subject: 'Programming',
                mark:10
            },
            {
                subject: 'IT',
                mark:8
            },
            {
                subject: 'Math',
                mark:6
            },
        ]
    },
]

console.log('studentu sarasas:')
 for (let student of students) {
    console.log('--------------')
   for(let studentsData in student){
    if(studentsData === 'group'){
        console.log(`grupe:${student[studentsData]}`)
    }else{
    console.log(student[studentsData])
    }
        if (studentsData=='marks') {
        console.log('Ivertinimai:')
        for(marks of student[studentsData]){
        console.log(`${marks.subject}:${marks.mark}`)
        }
        
    console.log(student[studentsData]);
    }

   
   }
 
}



/**
* Parasykite programa, kurios pagalba galima atlikti studentu paieska pagal varda
* Issokusiam prompt lange ivedamas studento vardas.
* Jeigu studentas surandamas, console isvedami jo duomenys.
* Jeigu nerandamas, isvedamas uzrasas: tokio studento nera
* Paieska realizuoti galite naudoti JS funkcija includes
*/

// function search() {
//     studentName = prompt('Iveskite studento varda kurio ieskote')
//     for (let student of students) {
//        for(let studentsData in student){
//         if(studentsData.includes(studentName)){
//             console.log(`Surastas studentas ${studentName}`)
//             }
//         else {
//             console.log('Tokio studento nera')
//         }
//        }
//     }
// }


// search()
// console.log('')
