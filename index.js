// const cursorEl = document.getElementById('cursor')
// const imgEl = document.getElementsByTagName('img')

// window.addEventListener('mousemove', (e) => {
//     cursorEl.textContent = ""
//     cursorEl.style.top =`${e.pageY}px`
//     cursorEl.style.left = `${e.pageX}px`;
//     cursorEl.textContent += `๐จ ${e.pageX}px, ${e.pageY}px`
// })
// //window์ mousemove ์ด๋ฒคํธ ์ถ๊ฐ
// //์ค์ ์ ์ผ๋ก mouse์ ์ขํ๋ฅผ ํ์ธํ๋ ค๋ฉด mousemove
// //mousemove ์ด๋ฒคํธ์ pageX, pageY์ขํ๋ฅผ ํ์ธํ๋ค

//์์ ๋ณ์ const๋ก ๋ง๋ ๋ค
const lineyEl = document.getElementById('line-Y')
const linexEl = document.getElementById('line-X')
const cursorEl = document.getElementById('cursor')
const spanEl = document.getElementById('tag')

window.addEventListener('mousemove', (e)=>{
    //๋์ผํ๊ฒ ์ฌ์ฉํ๋ ๊ฐ์ const ๋ณ์๋ก ๋ง๋ค์ด ์ฌ์ฉํ๋ค
    const X = e.pageX;
    const Y = e.pageY;

    //์คํ์ผ์ ์ง์ ํ ๋๋ px๋ฅผ ๋ถ์ฌ์ค๋ค
    //pageX, pageY ์ขํ๋ฅผ style ์์ฑ์ผ๋ก ๋ฃ์ด์ค๋ค
    //style.top์ Y์ถ
    //style.left๋ X์ถ
    cursorEl.textContent = ""
    cursorEl.style.top = `${Y}px`
    cursorEl.style.left = `${X}px`
    cursorEl.textContent += "๐"
//Template literals ์ฌ์ฉ
    lineyEl.style.left = `${X}px`
    linexEl.style.top = `${Y}px`

    spanEl.style.top = `${Y}px`
    spanEl.style.left = `${X}px`
//style.left ๊ฐ์ผ๋ก pageX ์ขํ๋ฅผ ๋ฃ๋๋ค
    spanEl.textContent = `pageX : ${X}px, pageY : ${Y}px`
})