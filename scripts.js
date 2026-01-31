const prevButton = document.getElementById('prev')
const nextButto = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total = items.length
let timer;

function update(direction){
    document.querySelector('.item.active').classList.remove('active')
    dots.querySelector('.dot.active').classList.remove('active')
    if(direction > 0){
        active = active + 1
        if(active == total){
            active = 0
        }

    } else if(direction < 0){
        active = active - 1

        if(active < 0){
            active = total-1
        }
    }
    items[active].classList.add(' active')
    dots[active].classList.add(' active')

}



prevButton.addEventListener('click', () =>{
    update(-1)
})
nextButto.addEventListener('click', ()=> {
    update(1)

})