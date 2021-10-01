const input = document.querySelector('#toDo');
const button = document.querySelector('#add');
const form = document.querySelector('form');
const ul = document.querySelector('#todoList');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    const removeBTN = document.createElement('button');
    removeBTN.innerText = 'Remove';
    ul.append(li);
    li.append(removeBTN);
    form.reset();
})

ul.addEventListener('click', function(e){
    e.preventDefault();
    // feel hard to decide when to use ""  and when ''
    if (e.target.tagName === 'LI') {
        e.target.style.textDecoration = "line-through";
    } else if (e.target.tagName === "BUTTON"){
        e.target.parentNode.remove();
    }
})