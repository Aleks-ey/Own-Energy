// const photoList = [
//     { src: '/assets/kitchen5.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen4.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen3.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen2.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen1.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen5.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen4.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen3.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen2.png', class: 'col-span-1 row-span-1' },
//     { src: '/assets/kitchen1.png', class: 'col-span-1 row-span-1' },
// ];

import { readdir } from 'fs';
import { extname } from 'path';

// Directory path for your photos
const photosDir = '../assets/work';

// Reading the photos directory
readdir(photosDir, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    // Filtering out non-image files and creating the photo list
    const photoList = files.filter(file => {
        return extname(file).toLowerCase().match(/\.(jpg|jpeg|png|gif)$/);
    });

    console.log(photoList);
    // You can now use the photoList array as needed
});
