"use strict;"

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

document.querySelector('.control.left').addEventListener('click', function() {
    
});
