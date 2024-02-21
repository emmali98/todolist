import TodoItem from './todoitem';

function component() {
    const mainList = document.createElement('div');
    mainList.textContent = 'TODOs';
    
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
    console.log(newTodo); // TODO: call render function instead

    document.querySelector('form').reset();
})