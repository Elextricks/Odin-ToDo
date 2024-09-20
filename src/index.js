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

        // Create new task using Todo class
        const todo = new Todo(titleInput, descriptionInput, dueDateInput, priorityInput);
        newTodoModal.close();

        // Clear input fields
        const inputFields = document.querySelectorAll("#new-todo-modal input");
        inputFields.forEach((input) => input.value = "");


        displayTodo(todo);
        addTodoList(titleInput);
    }, { once: true });  // Add the once option to ensure this runs only once per modal open
}

function displayTodo(input) {

    const projectBody = document.querySelector("#project-body");

    const todoItem =  document.createElement("div");
    todoItem.classList.add("todo-item")
    projectBody.append(todoItem);

    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");
    todoItem.append(todoHeader);

    //Create header element with text
    const headerText = document.createElement("h3");
    headerText.textContent = input.title;
    todoHeader.append(headerText);

    //Create right portion of header which contains priority and due date
    const rightTodoHeader = document.createElement("div");
    todoHeader.append(rightTodoHeader);

    //Create and append priority to right todo header
    const todoPriority = document.createElement("p");
    todoPriority.classList.add("todo-priority");
    todoPriority.textContent = "Priority: " + input.priority;
    rightTodoHeader.append(todoPriority);

    //Create and append due date to right todo header
    const todoDueDate = document.createElement("p");
    todoDueDate.classList.add("todo-due-date");
    todoDueDate.textContent = "Due Date: " + input.dueDate;
    rightTodoHeader.append(todoDueDate);

    //Create todo body
    const todoBody = document.createElement("div");
    todoBody.classList.add("todo-body");

    //Create and append todo description to todo body
    const todoDescription = document.createElement("div");
    todoDescription.textContent = input.description;
    todoBody.appendChild(todoDescription);
    todoItem.append(todoBody);

    //Create and append button to todo body
    const newCheckboxBtn = document.createElement("button");
    newCheckboxBtn.classList.add("new-checkbox-btn");
    newCheckboxBtn.textContent = "Add Task";
    todoBody.appendChild(newCheckboxBtn);

    newCheckboxBtn.addEventListener("click", () => {
        addChecklistItem(todoBody);
    })
}

function addTodoList(title) {
    const todoList = document.querySelector("#todo-list ul");
    let listItem = document.createElement("li")
    listItem.textContent = title;
    todoList.appendChild(listItem);
}

function addChecklistItem(todoBody) {
    const checklistDiv = document.createElement("div");
    checklistDiv.classList.add("checklist-row");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checklist-box");
    checklistDiv.appendChild(checkbox);

    let checkboxText = document.createElement("input");
    checkboxText.classList.add("checklist-text");
    checklistDiv.appendChild(checkboxText);

    todoBody.appendChild(checklistDiv);

    checkboxText.focus();

    checkboxText.addEventListener("blur", () => {
        blurListener(checkboxText);
    });
}

function blurListener(checkboxText) {
    console.log("Blur occured");
}

class Todo {
    static idCounter = 1;

    constructor(title, description, dueDate, priority) {   
        this.id = Todo.idCounter++;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = {};
    }
}