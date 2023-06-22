'use strict'

function renderGallery() {
    var imgUrls = []
    gImgs.forEach(img => imgUrls.unshift(img.url))
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

function randomMeme() {
    var imgId = getRandomInt(1, gImgs.length + 1)
    gMeme.selectedImgId = imgId
    var howManyLines = getRandomInt(1,4)
    for(var i = 0; i< howManyLines; i++){
        addLine()
        gMeme.lines[i].txt = getRandomTxt()
        gMeme.lines[i].size = getRandomInt(10,50)
        gMeme.lines[i].color = getRandomColor()
        renderMeme()
    }
    hideGallery()
    showCanvas()
}

