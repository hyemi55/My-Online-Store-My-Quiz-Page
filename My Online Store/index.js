let items = {
    'Apple' : 700,
    'Orange' : 800,
    'Lemon' : 900
};
let cart = [];
let count = 0;
let total = 0;
const countText = document.getElementById('count');
const totalText = document.getElementById('total');

function addToCart(item) {
    cart.push(item);
    count = count + 1;
    total = total + items[item];
    countText.innerText = `수량: ${count}`;
    totalText.innerText = `총합: ${total} KRW`;
};

let buttons = document.querySelectorAll("button");
buttons.forEach(b => {
    b.addEventListener('click', () => addToCart(b.previousElementSibling.previousElementSibling.innerText));
});