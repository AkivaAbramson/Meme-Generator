'use strict'
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
    {
    txt: 'I sometimes eat Falafel',
    size: 20,
    color: 'red'
    }
    ]
   }

function getMeme(){
    return gMeme
}

function setLineTxt(){
    const elInput = document.getElementById('text')
    const text = elInput.value
    gMeme.lines[0].txt = text
    renderMeme()
}

function submitTxt(){
    document.getElementById('text').value = ''
}

function setImg(url){
    var imgId = getUrlNum(url)
    gMeme.selectedImgId = imgId
    renderMeme()

}