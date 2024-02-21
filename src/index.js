import TodoItem from './todoitem';
import { addItem, deleteItem } from './render';

function component() {
    const mainList = document.createElement('div');
    mainList.classList.add('main');
    mainList.appendChild(document.createElement('ul'));
    
    return mainList;
}

document.body.appendChild(component());

// Click Handlers
document.querySelector('form button').addEventListener("click", function(e) {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let notes = document.querySelector('#notes').value;
    let dueDate = document.querySelector('#due-date').value;

    const newTodo = new TodoItem(title, notes, dueDate);
    addItem(newTodo);

    document.querySelector('form').reset();
})