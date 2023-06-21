'use strict'
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
    {
    txt: 'I sometimes eat Falafel',
    size: 20,
    color: 'red'
    },
    {
    txt: 'bla bla',
    size: 20,
    color: 'blue'
    },
    {
        txt: 'love you',
        size: 20,
        color: 'green'
        }
    ]
   }

   var gImgs = [{id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'animal']},
                {id: 2, url: 'imgs/2.jpg', keywords: ['funny', 'animal']},
                {id: 3, url: 'imgs/3.jpg', keywords: ['funny', 'animal']},
                {id: 4, url: 'imgs/4.jpg', keywords: ['funny', 'animal']},
                {id: 5, url: 'imgs/5.jpg', keywords: ['sad', 'people']},
                {id: 6, url: 'imgs/6.jpg', keywords: ['sad', 'people']},
                {id: 7, url: 'imgs/7.jpg', keywords: ['sad', 'people']},
                {id: 8, url: 'imgs/8.jpg', keywords: ['sad', 'people']},
                {id: 9, url: 'imgs/9.jpg', keywords: ['scary', 'places']},
                {id: 10, url: 'imgs/10.jpg', keywords: ['scary', 'places']},
                {id: 11, url: 'imgs/11.jpg', keywords: ['scary', 'places']},
                {id: 12, url: 'imgs/12.jpg', keywords: ['scary', 'places']},
                {id: 13, url: 'imgs/13.jpg', keywords: ['crazy', 'sport']},
                {id: 14, url: 'imgs/14.jpg', keywords: ['crazy', 'sport']},
                {id: 15, url: 'imgs/15.jpg', keywords: ['crazy', 'sport']},
                {id: 16, url: 'imgs/16.jpg', keywords: ['funny', 'sport']},
                {id: 17, url: 'imgs/17.jpg', keywords: ['sad', 'random']},
                {id: 18, url: 'imgs/18.jpg', keywords: ['crazy', 'random']}
]

function getMeme(){
    var meme = gMeme
    return meme
}

function setLineTxt(){
    const elInput = document.getElementById('text')
    const text = elInput.value
    gMeme.lines[0].txt = text
    renderMeme()
}

function clearTxtInput(){
    document.getElementById('text').value = ''
}

function setImg(url){
    var imgId = getUrlNum(url)
    gMeme.selectedImgId = imgId
    renderMeme()

}

function getFontSize(x = 0){
    var size = gTxtSize + x
    gTxtSize = size
    // console.log(gTxtSize)

}