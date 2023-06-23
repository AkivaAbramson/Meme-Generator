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
    renderGallery()
    hideCanvas()
    showGallery()
    clearTxtInput()

}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
}
