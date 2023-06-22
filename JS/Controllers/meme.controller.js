'use strict'
// var gColor = 'black'
// var gTxtSize = 20
var listenerAdded = false

function renderMeme() {
    var meme = getMeme()
    const image = new Image()
    image.src = `imgs/${meme.selectedImgId}.jpg`
    image.onload = function () {
        gCtx.clearRect(0, 0, canvas.width, canvas.height)
        image.width = canvas.width
        image.height = canvas.height
        gCtx.drawImage(image, 0, 0)
        if (!listenerAdded) {
            // console.log('event')
            canvas.addEventListener('click', function (ev) {
                // console.log(ev)
                console.log('hit:', isHitText(ev.offsetX, ev.offsetY))
                if (isHitText(ev.offsetX, ev.offsetY))
                    alert('Hit text');
            })
            listenerAdded = true
        }

        meme.lines.forEach((line, idx) => {
            gCtx.lineWidth = 0.3
            gCtx.font = line.size + 'px Arial'
            gCtx.fillStyle = meme.lines[idx].color
            gCtx.strokeStyle = meme.lines[idx].strokeColor
            gCtx.textAlign = 'center'

            gCtx.fillText(line.txt, line.pos.x, line.pos.y);
            gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
            switch (gMeme.selectedLineIdx) {
                case 0:
                    if (idx === 0)
                        renderTxtBorder(line.txt, canvas.width / 2, 50, line.size)
                    break
                case 1:
                    idx === 1 && renderTxtBorder(line.txt, canvas.width / 2, canvas.height - 20, line.size)
                    break
                case 2:
                    if (idx === 2) renderTxtBorder(line.txt, canvas.width / 2, canvas.height / 2, line.size)
                    break
            }
        })
    }
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

function downloadMeme(elLink) {
    var ElCanvas = document.querySelector('#canvas')
    const data = ElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'My-Meme'
    clearTxtInput()

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

    var pos
    switch (gMeme.lines.length) {
        case 0:
            pos = { x: canvas.width / 2, y: 50 }
            break;

        case 1:
            pos = { x: canvas.width / 2, y: canvas.height - 20 }
            break

        case 2:
            pos = { x: canvas.width / 2, y: canvas.height / 2 }
            break
    }

    gMeme.lines.push({
        txt: 'txt',
        size: 20,
        color: 'black',
        strokeColor:getRandomColor(),
        pos
    })

    gMeme.selectedLineIdx++
    clearTxtInput()
    renderMeme()
}

function switchLine() {
    clearTxtInput()
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
    if(gMeme.selectedLineIdx === 0) return
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    gMeme.selectedLineIdx--
    renderMeme()
}



