let ans1 = '';
let ans2 = '';
let ans3 = '';

function onClickQuiz1(e) {
    let chBox = e.target;
    if (chBox.checked) {
        let boxes = document.querySelectorAll("#quiz1 input");
        boxes.forEach(b => {
            if(b != chBox) {
                b.checked = false;
            }
        })
        ans1 = chBox.value;
    } else {
        ans1 = ''
    }
};

let answers1 = document.querySelectorAll("#quiz1 input");
answers1.forEach(a => a.addEventListener('click', onClickQuiz1))

function onClickQuiz2(e) {
    let chBox = e.target;
    if (chBox.checked) {
        let boxes = document.querySelectorAll("#quiz2 input");
        boxes.forEach(b => {
            if(b != chBox) {
                b.checked = false;
            }
        })
        ans2 = chBox.value;
    } else {
        ans2 = ''
    }
};

let answers2 = document.querySelectorAll("#quiz2 input");
answers2.forEach(a => a.addEventListener('click', onClickQuiz2))

function chColor(actual, expected, selector, score) {
    if(actual == expected) {
        score++;
        document.querySelector(selector).style.color='blue';
    } else {
        document.querySelector(selector).style.color='red';
    }
    return score;
}

function onClickSubmit() {
    let score = 0;
    ans3 = document.querySelector('#quiz3 input').value;
    score = chColor(ans1, '분홍', '#quiz1', score);
    score = chColor(ans2, '22', '#quiz2', score);
    score = chColor(ans3, 'AB', '#quiz3', score);
    // if(ans1 == '분홍') {
    //     score++;
    //     document.querySelector("#quiz1").style.color = 'blue';
    // } else {
    //     document.querySelector("#quiz1").style.color = 'red';
    // }
    // if(ans2 == '22') {
    //     score++;
    //     document.querySelector("#quiz2").style.color = 'blue';
    // } else {
    //     document.querySelector("#quiz2").style.color = 'red';
    // }
    // if(ans3 == 'AB') {
    //     score++;
    //     document.querySelector("#quiz3").style.color = 'blue';
    // } else {
    //     document.querySelector("#quiz3").style.color = 'red';
    // }

    alert(`score : ${score} / 3`);   
};

let submit = document.querySelector('#submit');
submit.addEventListener('click', onClickSubmit);

