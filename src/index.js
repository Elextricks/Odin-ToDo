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


        displayTodo(todo)
    }, { once: true });  // Add the once option to ensure this runs only once per modal open
}

function displayTodo(input) {
    console.log(input);

    const projectBody = document.querySelector("#project-body");

    let todoItem =  document.createElement("div");
    todoItem.classList.add("todo-item")

    let todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");

    let headerText = document.createElement("h3");

    let rightTodoHeader = document.createElement("div");

    let todoPriority = document.createElement("p");
    todoPriority.classList.add("todo-priority");

    let todoDueDate = document.createElement("p");
    todoDueDate.classList.add("todo-due-date");
    
    headerText.textContent = input.title;

    todoPriority.textContent = "Priority: " + input.priority;
    todoDueDate.textContent = "Due Date: " + input.dueDate;

    // Append all elements
    rightTodoHeader.append(todoPriority);
    rightTodoHeader.append(todoDueDate);
    todoHeader.append(headerText);
    todoHeader.append(rightTodoHeader);
    todoItem.append(todoHeader);
    projectBody.append(todoItem);

    //Follow similar format

    // <div id="project-body">
    //     <div class="todo-item">
    //         <div class="todo-header">
    //             <h3>1st To-do</h3>
    //             <div>
    //                 <p class="todo-priority">Priority: High</p>
    //                 <p class="todo-due-date">Due Date: 1/1/2050</p>
    //             </div>
    //         </div> 
    //         <div class="todo-body">
    //             <div class="checklist-item">
    //                 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    //                 <label for="vehicle1"> I have a bike</label><br>
    //             </div>
    //         </div>
    //     </div>
    // </div>
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