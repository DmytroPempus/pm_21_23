const tabMenuItems = document.querySelectorAll(".menu-item");
const menuContainer = document.querySelector(".menu");

tabMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        let tabId = item.getAttribute("data-tab");
        console.log(tabId);
        let currentTab = document.querySelector(tabId);

        if (item.id === "collapse-menu") {
            console.log("yep");
            menuContainer.classList.add("collapse");
        }

        tabMenuItems.forEach(function (item) {
            item.classList.remove("active");
        });

        item.classList.add("active");
    });
});

function createNewTask(taskText) {
    const newTask = document.createElement('li');
    newTask.classList.add('todo-list-tasks');

    newTask.innerHTML = `
        <i class="bi bi-three-dots-vertical"></i>
        <p class="todo-list-tasks-text">${taskText}</p>
        <i class="bi bi-check2"></i>
        <i class="bi bi-x"></i>
    `;
    todoListBody.appendChild(newTask);

    const deleteButton = newTask.querySelector('.bi-x');
    deleteButton.addEventListener('click', function() {
        newTask.remove();
        saveTasksToLocalStorage();
    });

    saveTasksToLocalStorage();
}

const plusIcon = document.querySelector('.plus');
const todoListBody = document.querySelector('.todo-list-body');

plusIcon.addEventListener('click', function() {
    const taskText = prompt('Enter task text:');

    if (taskText.trim() !== '') {
        createNewTask(taskText);
    }
});

function saveTasksToLocalStorage() {
    const tasksTextArray = Array.from(todoListBody.children).map(task => task.querySelector('.todo-list-tasks-text').textContent);
    localStorage.setItem('tasks', JSON.stringify(tasksTextArray));
}

function restoreTasksFromLocalStorage() {
    const tasksTextArray = JSON.parse(localStorage.getItem('tasks')) || [];

    tasksTextArray.forEach(taskText => {
        createNewTask(taskText);
    });
}

restoreTasksFromLocalStorage();
