function TodoItem(title, notes, dueDate) {
    this.title = title;
    this.notes = notes;
    this.dueDate = dueDate;
    this.id = 'id' + (new Date()).getTime(); // Note: not unique if multiple users in different timezones
}

export default TodoItem;