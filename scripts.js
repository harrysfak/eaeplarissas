const totalImages = 2; // Συνολικός αριθμός εικόνων (π.χ. 10 εικόνες από 1.jpg έως 10.jpg)
let history = [];
let currentIndex = -1;

const carouselImage = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Συνάρτηση για την επιλογή τυχαίας εικόνας
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    return `${randomIndex}.jpg`;
}

// Ενημέρωση εικόνας καρουζέλ
function updateImage(imageSrc) {
    carouselImage.src = imageSrc;
}

// Διαχείριση του επόμενου κουμπιού
nextButton.addEventListener('click', () => {
    const newImage = getRandomImage();
    history.push(newImage);
    currentIndex++;
    updateImage(newImage);
});

// Διαχείριση του προηγούμενου κουμπιού
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage(history[currentIndex]);
    }
});

// Αρχική εικόνα
nextButton.click();
