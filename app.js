//selectors
const addButton = document.querySelector('.todo-button');
const inputNode = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');
const select = document.querySelector('.filter-todo');

//listeners
addButton.addEventListener('click', addTodo);
list.addEventListener('click', removeItems);
select.addEventListener('click', filterItems);

//functions

function addTodo(event) {
    // prevent from refresh
    event.preventDefault();

    // create a DIV
    const todoDiv = document.createElement('div');
    todoDiv.setAttribute('class', 'todo-div');
    // create and append item to list    
    const todoItem = document.createElement('li');
    todoItem.innerText = inputNode.value;
    todoItem.setAttribute('class', 'todo-item');
    todoDiv.appendChild(todoItem);
    // create check box
    const check = document.createElement('button');
    check.innerHTML = '<i class="fas fa-check"></i>';
    check.setAttribute('class', 'check-btn');
    todoDiv.appendChild(check);
    // create trash button
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.setAttribute('class', 'delete-btn');
    todoDiv.appendChild(trash);

    // final attach to ul
    list.appendChild(todoDiv);

    // Clear out input
    inputNode.value = "";

}

function removeItems(event) {
    var item = event.target;
    console.log(item.parentNode);

    if (item.className === 'delete-btn') {
        item.parentNode.remove();
    }
    if (item.className === 'check-btn') {
        item.parentNode.classList.toggle('completed')
    }
}

function filterItems(event) {
    const items = list.childNodes;
    if(event.target.value==='done'){
        items.forEach(element => {
            if(element.className.includes("completed")){
                element.style.display = 'flex';
            }
            else {
                element.style.display = 'none';
            }           
        });
    }
    else if(event.target.value==='pending'){
        items.forEach(element => {
            if(!element.className.includes("completed")){
                element.style.display = 'flex';
            }
            else {
                element.style.display = 'none';
            }                 
        });
    }
    else{
        items.forEach(element => {            
                element.style.display = 'flex';                             
        });
    }    
}