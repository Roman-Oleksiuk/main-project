const carouselImages = [
    'resource/img/home_interiors.svg',
    'resource/img/home_shoping.svg',
    'resource/img/homes.svg',
    'resource/img/hallmark.svg',
    'resource/img/irvins.svg'
]

let currentIdx = 0;

function showCurrentImage() {
    const imgContainer1 = document.querySelector('.carousel .image1');
    const imgContainer2 = document.querySelector('.carousel .image2');
    const imgContainer3 = document.querySelector('.carousel .image3');
    const img2Idx = currentIdx + 1 > carouselImages.length - 1 ? 0 : currentIdx + 1;      
    const img3Idx = img2Idx + 1 > carouselImages.length - 1 ? 0 : img2Idx + 1; 
    imgContainer1.src =  carouselImages[currentIdx]; 
    imgContainer2.src =  carouselImages[img2Idx]; 
    imgContainer3.src =  carouselImages[img3Idx];
    }

function next() {
    currentIdx++;
    if (currentIdx > carouselImages.length - 1) currentIdx = 0;
    showCurrentImage();
}

function prev() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = carouselImages.length - 1;
    showCurrentImage();
}


showCurrentImage();

setInterval(next, 3000);

