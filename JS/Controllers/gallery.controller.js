'use strict'

function renderGallery() {
    var imgUrls = ['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg']
    var elGallery = document.querySelector('.gallery')
    for (var i = 0; i < imgUrls.length; i++) {
        var img = document.createElement('img')
        img.src = imgUrls[i]
        img.addEventListener("click", function (url) {
            return function () {
                setImg(url)
                hideGallery()
                showCanvas()
            }
        }(imgUrls[i])) 
        
        elGallery.appendChild(img)
    }
    
}

function hideGallery(){
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none'
}
function showGallery(){
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'block'
}

function hideCanvas(){
    var elCanvas = document.querySelector('.editor')
    elCanvas.style.display = 'none'
}
function showCanvas(){
    var elCanvas = document.querySelector('.editor')
    elCanvas.style.display = 'block'
}


