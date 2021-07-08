// const cursorEl = document.getElementById('cursor')
// const imgEl = document.getElementsByTagName('img')

// window.addEventListener('mousemove', (e) => {
//     cursorEl.textContent = ""
//     cursorEl.style.top =`${e.pageY}px`
//     cursorEl.style.left = `${e.pageX}px`;
//     cursorEl.textContent += `🎨 ${e.pageX}px, ${e.pageY}px`
// })
// //window에 mousemove 이벤트 추가
// //실제적으로 mouse의 좌표를 확인하려면 mousemove
// //mousemove 이벤트의 pageX, pageY좌표를 확인한다

//상수 변수 const로 만든다
const lineyEl = document.getElementById('line-Y')
const linexEl = document.getElementById('line-X')
const cursorEl = document.getElementById('cursor')
const spanEl = document.getElementById('tag')

window.addEventListener('mousemove', (e)=>{
    //동일하게 사용하는 값은 const 변수로 만들어 사용한다
    const X = e.pageX;
    const Y = e.pageY;

    //스타일을 지정할때는 px를 붙여준다
    //pageX, pageY 좌표를 style 속성으로 넣어준다
    //style.top은 Y축
    //style.left는 X축
    cursorEl.textContent = ""
    cursorEl.style.top = `${Y}px`
    cursorEl.style.left = `${X}px`
    cursorEl.textContent += "🔍"
//Template literals 사용
    lineyEl.style.left = `${X}px`
    linexEl.style.top = `${Y}px`

    spanEl.style.top = `${Y}px`
    spanEl.style.left = `${X}px`
//style.left 값으로 pageX 좌표를 넣는다
    spanEl.textContent = `pageX : ${X}px, pageY : ${Y}px`
})