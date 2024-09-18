import "./styles.css";

addEventListener("DOMContentLoaded", () => {
    document.querySelector("#add-task-button").addEventListener("click", createTodo);
});

function createTodo() {
    let newTodoModal = document.querySelector("#new-todo-modal");
    newTodoModal.showModal();
    document.querySelector("#submit").addEventListener("click", () => {
        const titleInput = document.querySelector("#title-input").value;
        const descriptionInput = document.querySelector("#description-input").value;
        const dueDateInput = document.querySelector("#due-date-input").value;
        const priorityInput = document.querySelector("#priority-input").value;

        //Create new task using Todo class
        let task = new Todo(titleInput, descriptionInput, dueDateInput, priorityInput);
        newTodoModal.close();

        //Select all input fields and set them to empty so that when a user adds new task the fields are empty
        const inputFields = document.querySelectorAll("#new-todo-modal input")
        inputFields.forEach((input) => input.value = "");

        console.log(task);
    })
}

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = {};
    }
}