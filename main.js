const container = document.getElementById('container');
const cardImage = './images/card.svg'
const imagesArray = [{ src: '/images/instagram.svg', isDisplay: false, imageType: 1 },
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
                    { src: '/images/youtube.svg', isDisplay: false, imageType: 6 },
                    ]

                    function shuffleArray(array) {
                        for (var i = array.length - 1; i > 0; i--) {
                            var j = Math.floor(Math.random() * (i + 1));
                            var temp = array[i];
                            array[i] = array[j];
                            array[j] = temp;
                        }
                        return array;
                    }

                    const handleChangeImage = (index, imageType) => {

                    }

                    const newArray = shuffleArray(imagesArray);
                    

                    const imagesGrid = document.getElementById('image-grid');

                    let html = '';
                    newArray.forEach((image, index) => {
                       if(image.isDisplay)  {
                        html += `<img src=${image.src} class='image-card' >`
                    } else {
                        html += `<img src=${cardImage} class='card' onclick=${handleChangeImage(index, image.imageType)}>`
                    }
                    })

                    imagesGrid.innerHTML = html;