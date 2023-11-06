
const photos = 10;

const gallery = document.querySelector('#gallery');
const showGallery = document.querySelector('#showGallery');
const mixGallery = document.querySelector('#mixGallery');



for (let i=0; i<photos; i++){
    const img = document.createElement('img');
    img.src = `img/${i}.jpg`;

    gallery.appendChild(img);

    console.log('Labas');

}



