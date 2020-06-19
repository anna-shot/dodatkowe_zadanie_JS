'use strict';

const button = document.querySelectorAll('button');
const div = document.querySelector('div');

button.forEach(function (button, i) {
    button.addEventListener('click', () => {
        div.innerHTML = button.innerHTML;
    })
})