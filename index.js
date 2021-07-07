const cursorEl = document.getElementById('cursor')

window.addEventListener('mousemove', (e) => {
    cursorEl.style.top =`${e.pageY}px`
    cursorEl.style.left = `${e.pageX}px`;
})
//window에 mousemove 이벤트 추가
//실제적으로 mouse의 좌표를 확인하려면 mousemove
//mousemove 이벤트의 pageX, pageY좌표를 확인한다