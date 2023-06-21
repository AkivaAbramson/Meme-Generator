'use strict'
// var gColor = 'black'
var gTxtSize = 20

function renderMeme() {
    var meme = getMeme()
    const image = new Image()
    image.src = `imgs/${meme.selectedImgId}.jpg`
    image.onload = function () {
        image.width = canvas.width
        image.height = canvas.height
        gCtx.drawImage(image, 0, 0)
        meme.lines.forEach((line, idx) =>{
            gCtx.font = gTxtSize + 'px Arial'
            gCtx.fillStyle = meme.lines[idx].color
            gCtx.textAlign = 'center'
            switch (idx) {
                case 0:
                    gCtx.fillText(meme.lines[idx].txt, canvas.width / 2, 50)
                    break
                case 1:
                    gCtx.fillText(meme.lines[idx].txt, canvas.width / 2, canvas.height-20)
                    break
                case 2:
                    gCtx.fillText(meme.lines[idx].txt, canvas.width / 2, canvas.height/2)
                    break
            }
        } )
    }
}

function setLineTxt(){
    const elInput = document.getElementById('text')
    const text = elInput.value
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme()
}

function downloadMeme(elLink) {
    var ElCanvas = document.querySelector('#canvas')
    const data = ElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'My-Meme'
    clearTxtInput()

}

function changeColor(ev) {
    var color = ev.target.value
    // gColor = color
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
    // console.log(gMeme)
}

function increaseTxt(){
    getFontSize(5)
    renderMeme()  
}

function decreaseTxt(){
    getFontSize(-5)
    renderMeme()  
}

function addLine(){
    if(gMeme.lines.length === 3){
        alert('too many lines')
        return
    }
    gMeme.lines.push({
        txt: 'txt',
        size: 20,
        color: 'black'
        })
    clearTxtInput()
    renderMeme()  
}

function switchLine(){
    clearTxtInput()
    gMeme.selectedLineIdx ++
    if(gMeme.selectedLineIdx === gMeme.lines.length){
        gMeme.selectedLineIdx = 0
    } 
    // frameTxt()
    renderMeme()

}

// function frameTxt(){
//     const elInput = document.getElementById('text')
//     const text = elInput.value
//     text.style.border = '10px solid gray'
// }

