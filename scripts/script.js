'.use strict';

const blocks = document.querySelectorAll('.block');
const squareBody = document.querySelector('.square-body');
const resetBtn = document.querySelector('.btn-reset');

const render = (bloksArray) => {
    squareBody.innerHTML = '';
    bloksArray.forEach(element => {
        squareBody.appendChild(element);
    });
};

squareBody.addEventListener('click', (e) => {
    const elements = [...document.querySelectorAll('.block')];
    if (e.target.closest('.left')) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === e.target.closest('.block')) {
                if (elements[i - 1]) {
                    [elements[i], elements[i - 1]] = [elements[i - 1], elements[i]];
                    render(elements);
                }
                return;
            }
        }
    }
    else if (e.target.closest('.right')) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === e.target.closest('.block')) {
                if (elements[i + 1]) {
                    [elements[i], elements[i + 1]] = [elements[i + 1], elements[i]];
                    render(elements);
                }
                return;
            }
        }
    }
    else if (e.target.closest('.top')) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === e.target.closest('.block')) {
                if (elements[i - 5]) {
                    [elements[i], elements[i - 5]] = [elements[i - 5], elements[i]];
                    render(elements);
                }
                return;
            }
        }
    }
    else if (e.target.closest('.bottom')) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === e.target.closest('.block')) {
                if (elements[i + 5]) {
                    [elements[i], elements[i + 5]] = [elements[i + 5], elements[i]];
                    render(elements);
                }
                return;
            }
        }
    }
});

resetBtn.addEventListener('click', () => {
    render(blocks);
});




