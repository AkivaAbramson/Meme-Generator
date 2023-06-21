'use strict'


function getUrlNum(url) {
    var imgNum = url.match(/(\d+)/)[0]
    // console.log(imgNum)
    return imgNum
}