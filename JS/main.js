'use strict'   
let gElCanvas
let gCtx

function onInit(){
    renderGallery()
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}

function logoClicked(){
    hideCanvas()
    showGallery()
    clearTxtInput()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}
