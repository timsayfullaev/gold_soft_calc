'use strict';

const checkbox = document.getElementById('flexSwitchCheckMode');
const calcExp = document.getElementById('calcExpert');
const calcSimp = document.getElementById('calcSimple');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        calcExp.classList.remove('d-none');
        calcSimp.classList.add('d-none');
    } else {
        calcExp.classList.add('d-none');
        calcSimp.classList.remove('d-none');
    }
});

function toggleSearchList(field, list) {

    let input = document.getElementById(field);
    let ul = document.getElementById(list);

    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            ul.classList.remove('d-none');
            ul.classList.add('d-block');
        } else {
            ul.classList.remove('d-block');
            ul.classList.add('d-none');
        }
    });
}

toggleSearchList('searchInputExp', 'searchListExp');
toggleSearchList('searchInputSimp', 'searchListSimp');