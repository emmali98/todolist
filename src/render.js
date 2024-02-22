import { deleteTodo } from "./storage";

// Adds item to TODO list
// Note: repetitive code here, could be tightened up
function renderItem (item, mainList) {
    //const mainList = document.querySelector('.main ul');
    const newTodo = document.createElement('li');
    newTodo.addEventListener("click", function () {
        deleteTodo(item);
        this.remove();
    });

    const newTitle = document.createElement('p');
    const newNotes = document.createElement('p');
    const newDueDate = document.createElement('p');

    newTitle.textContent = item.title;
    newNotes.textContent = item.notes;
    newDueDate.textContent = item.dueDate;

    newTodo.appendChild(newTitle);
    newTodo.appendChild(newNotes);
    newTodo.appendChild(newDueDate);

    mainList.appendChild(newTodo);
}

export { renderItem };