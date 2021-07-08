const btnEl = document.querySelector('.rabbit-el')
const rabbitEl = document.querySelector('.rabbit')

btnEl.addEventListener("click", ()=> {
    rabbitEl.scrollIntoView({behavior:'smooth', block:'center'})
//부드럽게 이동할 수 있도록 behavior:'smooth'로
//설정한다
})