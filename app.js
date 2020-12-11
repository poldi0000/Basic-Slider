const counter = document.querySelector('#counter')
let number = document.querySelector('#number')
const lowerCount = document.querySelector('#lower-count')
const addCount = document.querySelector('#add-count')

total = 0;

function changeColor (){
    if (total > 0){
        number.style.color = 'green';
    } else if (total < 0){
        number.style.color = 'red';
    } else {
        number.style.color = '#505050';
    }
}

lowerCount.addEventListener('click', () => {
    total--;
    number.textContent = total;
    changeColor();
})

addCount.addEventListener('click', () => {
    total++;
    number.textContent = total;
    changeColor();
})
