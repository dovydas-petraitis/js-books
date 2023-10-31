
document.querySelector('#vip').style.backgroundColor='tomato';

document.querySelector('p').innerHTML = "<strong>Labai gerai</strong>";

const ul = document.createElement('ul');
const li = document.createElement('li');

li.textContent = "Labai svarbus darbas"


document.querySelector('section').appendChild(ul);
document.querySelector('ul').appendChild(li);






const table = document.createElement('table');
const tr = document.createElement('tr');
const th = document.createElement('th')

document.querySelector('aside').appendChild(table);
// document.querySelector('table').appendChild(tr);
// document.querySelector('tr').appendChild(th);

th.textContent="Labas rytas Lietuva"


for (let i=0; i<=3; i++){
    let tr = document.createElement('tr');
    document.querySelector('table').appendChild(tr);
    tr.textContent=`Eilute ${i}`
    
    for (let i=0; i<=10; i++){
        let th = document.createElement('th');
        document.querySelector('tr').appendChild(th);
        th.textContent=`Stulpelis ${i}`
        }
        
    break
}



