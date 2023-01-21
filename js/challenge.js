const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const counter = document.getElementById('counter');
const comment = document.getElementById('comment-input');
const form = document.getElementById('comment-form');
const formButton = document.getElementById('submit');
const commentList = document.getElementById('list');




let timer = setInterval( () => {
    number = parseInt(counter.innerHTML);
    blam = counter.innerHTML = number + 1;
}, 1000);



// stopping and starting the timer and disabling and enabling the buttons
let paused = false;
pause.addEventListener('click', () => {
    paused = !paused;
    if (paused) {
       clearInterval(timer);
       pause.innerHTML = 'resume';
       minus.disabled = true;
       plus.disabled = true;
       heart.disabled = true;
       formButton.disabled = true;
    }
    else {
        timer = setInterval( () => {
            number = parseInt(counter.innerHTML);
            blam = counter.innerHTML = number + 1;
        }, 1000);
        pause.innerHTML = 'pause';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        formButton.disabled = false;
    }
});

minus.addEventListener('click', () => {
    number = parseInt(counter.innerHTML);
    blam = counter.innerHTML = number - 1;
});


plus.addEventListener('click', () => {
    number = parseInt(counter.innerHTML);
    blam = counter.innerHTML = number + 1;
});


heart.addEventListener('click', () => {
    let likeCounter = 0;
    likeCounter++
    
    let li = document.createElement('li');
    number = parseInt(counter.innerHTML);
    li.textContent = `${number} has been liked ${likeCounter} times`
    document.querySelector('ul').appendChild(li);
})




form.addEventListener('submit', (e) => {
    e.preventDefault();

    let p = document.createElement('p');
    p.textContent = e.target.comment.value;
    commentList.appendChild(p);

    form.reset();
})

