'use strict'
// var gColor = 'black'
// var gTxtSize = 20
var listenerAdded = false
var gDownloadClicked = null

function renderMeme(drawBorder = true) {
    var meme = getMeme()
    const image = new Image()
    image.src = `imgs/${meme.selectedImgId}.jpg`
    image.onload = function () {
        gCtx.clearRect(0, 0, canvas.width, canvas.height)
        image.width = canvas.width
        image.height = canvas.height
        gCtx.drawImage(image, 0, 0)
        if (!listenerAdded) {
            addListeners()
            listenerAdded = true
        }

        meme.lines.forEach((line, idx) => {
            gCtx.lineWidth = 0.3
            gCtx.font = line.size + 'px Arial'
            gCtx.fillStyle = meme.lines[idx].color
            gCtx.strokeStyle = meme.lines[idx].strokeColor
            gCtx.textAlign = 'center'

            gCtx.fillText(line.txt, line.pos.x, line.pos.y)
            gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
            
            if (!drawBorder) return;
            switch (gMeme.selectedLineIdx) {
                case 0:
                    if (idx === 0)
                        renderTxtBorder(line.txt, line.pos.x, line.pos.y, line.size)
                    break
                case 1:
                    idx === 1 && renderTxtBorder(line.txt, line.pos.x, line.pos.y, line.size)
                    break
                case 2:
                    if (idx === 2) renderTxtBorder(line.txt, line.pos.x, line.pos.y, line.size)
                    break
            }
        })

        if(gDownloadClicked) downloadMeme()
    }
}

function addListeners(){
    canvas.addEventListener('click', function (ev) {
        var selectedIndex = isHitText(ev.offsetX, ev.offsetY)
        if (selectedIndex >= 0)
            changeBorder(selectedIndex)
    })
    canvas.addEventListener('touchstart', function (ev) {
        var selectedIndex = isHitText(ev.offsetX, ev.offsetY)
        if (selectedIndex >= 0)
            changeBorder(selectedIndex)
    })
}

function changeBorder(idx){
    gMeme.selectedLineIdx = idx
    setTxtInput(gMeme.lines[idx].txt)

    renderMeme()
}


function renderTxtBorder(txt, xPaint, yPaint, fontSize) {
    var textSizes = gCtx.measureText(txt)
    // console.log(textSizes)
    gCtx.strokeStyle = 'Black'

    var calculatedX = xPaint - textSizes.width / 2
    var calculatedY = yPaint - fontSize
    gCtx.strokeRect(calculatedX, calculatedY, textSizes.width + 5, fontSize + 5)


}

function setLineTxt() {
    const elInput = document.getElementById('text')
    const text = elInput.value
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme()
}

function triggerDownload() {
    gDownloadClicked = true
    renderMeme(false)
}

function downloadMeme() {
    var ElCanvas = document.querySelector('#canvas')

    const data = ElCanvas.toDataURL()
    const downloadRef = document.createElement('a')
    downloadRef.href = data
    downloadRef.download = 'My-Meme'
    downloadRef.click()

    gDownloadClicked = false
    renderMeme()
}

function changeColor(ev) {
    var color = ev.target.value
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
    // console.log(gMeme)
}

function increaseTxt() {
    changeFontSize(5)
    renderMeme()
}

function decreaseTxt() {
    changeFontSize(-5)
    renderMeme()
}

function addLine() {
    if (gMeme.lines.length === 3) {
        alert('too many lines')
        return
    }

    let allOccupiedPosY = []
    for (const line of gMeme.lines) {
        allOccupiedPosY.push(line.pos.y)
    }

    let pos = null
    if (!Number.isInteger(allOccupiedPosY.find(element => element === 50)))
        pos = { x: canvas.width / 2, y: 50 }
    else if (!Number.isInteger(allOccupiedPosY.find(element => element === canvas.height - 20)))
        pos = { x: canvas.width / 2, y: canvas.height - 20 }
    else if (!Number.isInteger(allOccupiedPosY.find(element => element === canvas.height / 2)))
        pos = { x: canvas.width / 2, y: canvas.height / 2 }

    gMeme.lines.push({
        txt: 'txt',
        size: 20,
        color: 'black',
        strokeColor:getRandomColor(),
        pos
    })

    gMeme.selectedLineIdx++
    setTxtInput()
    renderMeme()
}

function switchLine() {
    setTxtInput()
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
    // console.log(gMeme.selectedLineIdx)
    // frameTxt()
    renderMeme()

}

function frameTxt() {
    gCtx.strokeStyle = 'red'
    gCtx.lineWidth = 2
    if (gMeme.selectedLineIdx == 0) {
        var txtLength = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt)
        var txtWidth = txtLength.width
        var txtHeight = txtLength.actualBoundingBoxAscent + txtLength.actualBoundingBoxDescent
        const rectX = 150
        const rectY = 40
        gCtx.strokeRect(rectX, rectY, txtWidth, txtHeight)
    }

}

function removeLine(){
    if(gMeme.selectedLineIdx === 0 && gMeme.lines.length === 1) return
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    gMeme.selectedLineIdx--
    renderMeme()
}



