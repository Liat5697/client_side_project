const container = document.getElementById('container');
const countTryElement = document.getElementById('countTry');


const cardImage = './images/card.svg';
const imagesArray = [
    { src: '/images/instagram.svg', isDisplay: false, imageType: 1 },
    { src: '/images/instagram.svg', isDisplay: false, imageType: 1 },
    { src: '/images/facebook.svg', isDisplay: false, imageType: 2 },
    { src: '/images/facebook.svg', isDisplay: false, imageType: 2 },
    { src: '/images/messenger.svg', isDisplay: false, imageType: 3 },
    { src: '/images/messenger.svg', isDisplay: false, imageType: 3 },
    { src: '/images/tiktok.svg', isDisplay: false, imageType: 4 },
    { src: '/images/tiktok.svg', isDisplay: false, imageType: 4 },
    { src: '/images/whatsapp.svg', isDisplay: false, imageType: 5 },
    { src: '/images/whatsapp.svg', isDisplay: false, imageType: 5 },
    { src: '/images/youtube.svg', isDisplay: false, imageType: 6 },
    { src: '/images/youtube.svg', isDisplay: false, imageType: 6 }
];

let countClick = 0;
let clickForTry = 0;
let countTry = 0;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const newArray = shuffleArray(imagesArray);




const imagesGrid = document.getElementById('image-grid');
const changeToFalse = (index, other) => {
    
    
    newArray[index].isDisplay = false;
    renderImages()
}

const makeTrue = ( other) => {
    setTimeout(() => {
        
        newArray[other].isDisplay = true;
        
        renderImages()
        console.log(newArray);
    }, 2000)
}
window.handleChangeImage = function (index, imageType) {
    if(countClick < 3){

        clickForTry++;
    }
    countClick++;
    if(clickForTry === 2){
        countTry++;
        renderTry();
        clickForTry = 0;
        
    }
    if ( countClick > 2) {
        
        
        setTimeout(() => { 
            countClick = 0;
            
        }, 2000)
        return ;
    }
    newArray[index].isDisplay = true;
    
    
    renderImages();
    
    const relevantImages = newArray.filter(image => image.imageType === imageType && image.isDisplay === true);

   
 
    if(relevantImages.length !== 2) {
        
        setTimeout(() => {
            
            changeToFalse(index);
            
        }, 2000)
        
    }
    if (relevantImages.length === 2) {
        const other = newArray.findIndex((img, i) => i != index && img.imageType === imageType );
        
        makeTrue( other);
        
       
        
    } 
}
    
   
    
    


function renderImages() {
    let html = '';
    newArray.forEach((image, index) => {
        if (image.isDisplay === false) {
           
            html += `<img src=${cardImage} class='card' onclick="handleChangeImage( ${index}, ${image.imageType})"> `;
        } else {
            html += `<img src=${image.src} class='image-card' >`;
        }
    });
    imagesGrid.innerHTML = html;
    
}


renderImages();

const renderTry = () => { 
    console.log(countTry);
    countTryElement.innerHTML = countTry;
    
}
renderTry()
