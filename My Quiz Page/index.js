let ans1 = '';
let ans2 = '';
let ans3 = '';
let score = 0;

function onClickQuiz(e, selector) {
    let chBox = e.target;
    if (chBox.checked) {
        let boxes = document.querySelectorAll(selector);
        boxes.forEach(b => {
            if(b != chBox) {
                b.checked = false;
            }
        })
        return chBox.value;
    } else {
        return '';
    }
};

function calScore(actual, expected, selector) {
    if(actual == expected) {
        score++;
        document.querySelector(selector).style.color='blue';
    } else {
        document.querySelector(selector).style.color='red';
    }
}

function onClickSubmit() {
    ans3 = document.querySelector('#quiz3 input').value;
    calScore(ans1, '분홍', '#quiz1');
    calScore(ans2, '22', '#quiz2');
    calScore(ans3, 'AB', '#quiz3');

    alert(`score : ${score} / 3`);   

    score = 0;
};

let answers1 = document.querySelectorAll("#quiz1 input");
answers1.forEach(a => a.addEventListener('click', e => {
    ans1 = onClickQuiz(e, '#quiz1 input');
}));

let answers2 = document.querySelectorAll("#quiz2 input");
answers2.forEach(a => a.addEventListener('click', e => {
    ans2 = onClickQuiz(e, '#quiz2 input');
}));

let submit = document.querySelector('#submit');
submit.addEventListener('click', onClickSubmit);

