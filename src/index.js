import TodoItem from './todoitem';
import { renderItem, removeRenderItem } from './render';
import { saveTodo, getTodos } from './storage';

function component() {
    const mainList = document.createElement('div');
    mainList.classList.add('main');
    mainList.appendChild(document.createElement('ul'));

    const oldTodos = getTodos();
    oldTodos.forEach((todo) => {
        renderItem(todo, mainList.querySelector('ul'));
    });
    
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
    saveTodo(newTodo);
    renderItem(newTodo, document.querySelector('.main ul'));

    document.querySelector('form').reset();
})