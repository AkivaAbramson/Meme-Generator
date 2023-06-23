'use strict'
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Hello how are you?',
            size: 20,
            color: 'red',
            strokeColor:getRandomColor(),
            pos: { x: 250, y: 50 }
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

var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'animal'] },
{ id: 2, url: 'imgs/2.jpg', keywords: ['funny', 'animal'] },
{ id: 3, url: 'imgs/3.jpg', keywords: ['funny', 'animal'] },
{ id: 4, url: 'imgs/4.jpg', keywords: ['funny', 'animal'] },
{ id: 5, url: 'imgs/5.jpg', keywords: ['sad', 'people'] },
{ id: 6, url: 'imgs/6.jpg', keywords: ['sad', 'people'] },
{ id: 7, url: 'imgs/7.jpg', keywords: ['sad', 'people'] },
{ id: 8, url: 'imgs/8.jpg', keywords: ['sad', 'people'] },
{ id: 9, url: 'imgs/9.jpg', keywords: ['scary', 'places'] },
{ id: 10, url: 'imgs/10.jpg', keywords: ['scary', 'places'] },
{ id: 11, url: 'imgs/11.jpg', keywords: ['scary', 'places'] },
{ id: 12, url: 'imgs/12.jpg', keywords: ['scary', 'places'] },
{ id: 13, url: 'imgs/13.jpg', keywords: ['crazy', 'sport'] },
{ id: 14, url: 'imgs/14.jpg', keywords: ['crazy', 'sport'] },
{ id: 15, url: 'imgs/15.jpg', keywords: ['crazy', 'sport'] },
{ id: 16, url: 'imgs/16.jpg', keywords: ['funny', 'sport'] },
{ id: 17, url: 'imgs/17.jpg', keywords: ['sad', 'random'] },
{ id: 18, url: 'imgs/18.jpg', keywords: ['crazy', 'random'] }
]

function getMeme() {
    var meme = gMeme
    return meme
}



function setTxtInput(value = '') {
    document.getElementById('text').value = value;
}

function setImg(url) {
    var imgId = getUrlNum(url)
    gMeme.selectedImgId = imgId
    renderMeme()

}



function changeFontSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size += size

}

function isHitText(x, y) {
    var txtLength = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt)
    var txtWidth = txtLength.width

    var returnIndex = -1;
    gMeme.lines.forEach((line, i) => {
        if (x > line.pos.x - (txtWidth / 2) && x < line.pos.x + (txtWidth / 2)) {
            if (y > line.pos.y - (line.size / 2) && y < line.pos.y + (line.size / 2)) {
                returnIndex = i
                return
            }
        }
    })

    return returnIndex;
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') 

    function onSuccess(uploadedImgUrl) {
        const url = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`)
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData()
    formData.append('img', imgDataUrl)
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function renderImg(img) {
    gImgs.push({ id: 19, url: 'imgs/19.jpg', keywords: ['funny', 'animal'] })
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    gMeme.selectedImgId = 19
    renderMeme()
}

function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()

    reader.onload = function (event) {
        let img = new Image() 
        img.src = event.target.result 
        img.onload = () => onImageReady(img)
    }
    reader.readAsDataURL(ev.target.files[0]) 
}
