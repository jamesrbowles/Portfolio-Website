// Fancy intro text

const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML += '<span>' + splitText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

// Line-through navbar links when clicked

const link = document.querySelectorAll('.link')

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
        link.forEach(lin => {
            lin.classList.add('link')
        })
        link.forEach(lin => {
            lin.classList.remove('strikethrough')
        })
        link[i].classList.remove('link')
        link[i].classList.add('strikethrough')
    })
}
