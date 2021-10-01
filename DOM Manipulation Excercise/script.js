const container = document.getElementById('container');
const container2 = document.querySelector('#container');
const secondList = document.querySelectorAll('.second');
// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdList = document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.
// container.innerText = "Hello!";

const addFooter = document.querySelector('.footer');
addFooter.classList.add("main");
addFooter.classList.remove("main");

const addList = document.createElement('li');
const ul = document.querySelector('ul');
addList.innerText = "four";
ul.append(addList);


// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = document.querySelectorAll('ol li');
for (let each of ol) {
    each.style.backgroundColor = "green";
}

addFooter.remove();

