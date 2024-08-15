let items = {
    'apple' : 700,
    'orange' : 800,
    'lemon' : 900
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

let buttons = document.querySelectorAll("input");
buttons.forEach(b => {
    b.addEventListener('click', () => addToCart(b.parentElement.parentElement.id));
});