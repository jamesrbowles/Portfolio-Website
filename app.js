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

const about = document.querySelector('.about-a')

about.addEventListener('click', function(){
    if (about.classList.contains('about-a')) {
        about.classList.remove('about-a')
        about.classList.add('underline')
    } else {
        about.classList.remove('underline')
        about.classList.add('about-a')
    }
    
})