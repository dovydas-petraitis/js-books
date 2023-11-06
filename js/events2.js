


let container = document.getElementById("container");

for (let i=0; i<16; i++){
    let newDiv = document.createElement("div");
    let randomColor = getColor();
    
    newDiv.style.backgroundColor = randomColor;
    newDiv.addEventListener("click", changeColor);
    container.appendChild(newDiv);

}

function getColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function changeColor(event){
    
 for (const div of document.querySelectorAll('div')){
        div.addEventListener('click',()=>{
        let randomColor = getColor();
        div.style.backgroundColor = randomColor;
    })
    }
}




