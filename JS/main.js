'use strict'   
let gElCanvas
let gCtx

function onInit(){
    renderGallery()
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    // window.addEventListener('resize', ()=>{
    //     resizeCanvas()
    // })
}

function logoClicked(){
    hideCanvas()
    showGallery()
    clearTxtInput()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    // console.log('elContainer.offsetWidth:', elContainer.offsetWidth)
    gElCanvas.width = elContainer.offsetWidth
    // Unless needed, better keep height fixed.
    // gElCanvas.height = elContainer.offsetHeight
}
