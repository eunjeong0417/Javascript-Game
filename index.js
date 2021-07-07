const spanEl = document.getElementById('span-el')
//span 태그를 가져온다

window.addEventListener('resize', () => {
    spanEl.textContent = `window.screen : ${window.screen.width}, ${window.screen.height} window.outer : ${window.outerWidth}, ${window.outerHeight} window.inner : ${window.innerWidth}, ${window.innerHeight}`
    console.log(documentElement.clientWidth)
    
})

window();

//window에 resize 이벤트를 걸어서 사이즈 변경사항을
//console에 표기한다
