const input = document.querySelector('#toDo');
const button = document.querySelector('#add');
const form = document.querySelector('form');
const ul = document.querySelector('#todoList');

// retrieve form's item and input's

const toDoLi = JSON.parse(localStorage.getItem("todo"))|| [];  
for (let list of toDoLi) {
    const li = document.createElement('li');
    li.innerText = list.task;
    if (list.isCompleted) {
        li.style.textDecoration = "line-through";
        li.isCompleted = true;
    } 
    ul.append(li);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    li.isCompleted = false;
    form.reset();
    ul.appendChild(li);
    // store
    toDoLi.push({task: li.innerText, isCompleted: false});
    localStorage.setItem("todo", JSON.stringify(toDoLi));
})


ul.addEventListener('click', function(e){
    const checkItem = e.target;
    if (!checkItem.isCompleted) {
        checkItem.style.textDecoration = "line-through";
        checkItem.isCompleted = true;
    }else if (checkItem.isCompleted) {
        checkItem.style.textDecoration = "none";
        checkItem.isCompleted = false;
    }
    for (let list of toDoLi) {
        if (list.task === checkItem.innerText) {
            list.isCompleted = !list.isCompleted;
            localStorage.setItem("todo", JSON.stringify(toDoLi));
        }
    }
});

// when I linethrough a input and refresh my page to give a duplicate inpute, the previous one's linethrough gone. is this the assignment you aspect?


