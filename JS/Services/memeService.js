'use strict'
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
    {
    txt: 'Hello how are you?',
    size: 20,
    color: 'red',
    pos:{x: 250, y: 50}
    },
    // {
    // txt: 'bla bla',
    // size: 20,
    // color: 'blue'
    // },
    // {
    //     txt: 'Shalom',
    //     size: 20,
    //     color: 'green'
    //     }
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



function clearTxtInput(){
    document.getElementById('text').value = ''
}

function setImg(url){
    var imgId = getUrlNum(url)
    gMeme.selectedImgId = imgId
    renderMeme()

}

function changeFontSize(size){
    gMeme.lines[gMeme.selectedLineIdx].size += size
    // gMeme.lines[gMeme.selectedLineIdx].size +
    // console.log(gTxtSize)

}

function isHitText(x,y){
    // TODO: Duplicated code, extract to another function
    var txtLength = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt)
    var txtWidth = txtLength.width;

    for (let line of gMeme.lines) {
        if (x > line.pos.x && x < line.pos.x + txtWidth) {
            if (y > line.pos.y - (line.size / 2) && y < line.pos.y + (line.size / 2)) {
                return true;
            }
        }
    }

    return false;
}