function screenWidth() {
    let imageMobile = document.querySelector('.img-mobile');
    let imageDesktop = document.querySelector('.img-desktop');
    let imageDesktopBox = document.querySelector('.box');

    if (window.innerWidth >= 992) { 
        imageDesktop.style.display = "block";
        imageMobile.style.display = "none";
        imageDesktopBox.style.display = "block";
    } else {
        imageDesktop.style.display = "none";
        imageMobile.style.display = "block";
        imageDesktopBox.style.display = "none";
    }
}



function toggle(questionX) {
    let invisible = questionX.querySelector('.answers');
    let question = questionX.querySelector('.text .questions h2');
    let arrow = questionX.querySelector('.arrow');

    function showAnswer() {
        invisible.classList.toggle('invisible');
        question.classList.toggle('bold');
        arrow.classList.toggle('down-up');
    }

    question.addEventListener('click', showAnswer);
    arrow.addEventListener('click', showAnswer);
}

let question1 = document.querySelector('.question1');
toggle(question1);

let question2 = document.querySelector('.question2');
toggle(question2);

let question3 = document.querySelector('.question3');
toggle(question3);

let question4 = document.querySelector('.question4');
toggle(question4);

let question5 = document.querySelector('.question5');
toggle(question5);

