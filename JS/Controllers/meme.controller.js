'use strict'


function renderMeme() {
    const image = new Image()
    image.src = `imgs/${gMeme.selectedImgId}.jpg`
    image.onload = function () {
        image.width = canvas.width
        image.height = canvas.height
        gCtx.drawImage(image, 0, 0)
        gCtx.font = '24px Arial'
        gCtx.fillStyle = 'blue'
        gCtx.textAlign = 'center'
        gCtx.fillText(gMeme.lines[0].txt, canvas.width / 2, 50)
    }
}

function downloadMeme(elLink) {
    var ElCanvas = document.querySelector('#canvas')
    const data = ElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'My-Meme'

}