function saveTodo (item) {
    if (storageAvailable("localStorage")) {
        let todolist = JSON.parse(localStorage.getItem("todolist")) || [];
        todolist.push(item);
        localStorage.setItem("todolist", JSON.stringify(todolist));
    } else {
        alert('no localstorage!');
    }
}

function getTodos () {
    if (storageAvailable("localStorage")) {
        const todos = localStorage.getItem("todolist");
        return JSON.parse(todos) || [];
    } else {
        alert('no localstorage!');
        return [];
    }
}
 
// MDN Test for storage
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

export { saveTodo, getTodos };
  