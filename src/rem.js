const baseSize = 16.5
function setRem() {
    const scale = document.documentElement.clientWidth / 1920
    document.documentElement.style.fontSize = (baseSize * Math.min(scale)) + 'px'
}
setRem()
window.onresize = function () {
    setRem()
}
