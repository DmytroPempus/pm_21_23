const menuItems = document.querySelectorAll(".menu-item");
const menuContainer = document.querySelector(".menu");
const commentNotification = document.querySelector(".notification-badge-comment");
const mainContainer = document.querySelector(".main-container");
const putOutMenuIcon = document.querySelector("#put-out-menu");

putOutMenuIcon.style.display = "none";

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        let tabId = item.getAttribute("data-tab");
        console.log(tabId);

        if (tabId === "#menuItem_12") {
            putOutMenuIcon.style.display = "block";
            menuContainer.classList.add("collapsed");
            mainContainer.classList.add("expanded");
            const collapseIcon = document.querySelector("#collapse-menu");
            collapseIcon.style.display = "none";
            commentNotification.classList.add("collapsed");
            menuItems.forEach(function (menuItem) {
                const textElement = menuItem.querySelector(".menu-name");
                const chevronElement = menuItem.querySelector(".bi-chevron-right");
                menuItem.classList.add("collapsed");

                if (textElement) {
                    textElement.style.display = "none";
                }

                if (chevronElement) {
                    chevronElement.style.display = "none";
                }
            });

            putOutMenuIcon.addEventListener("click", function () {
                console.log("putOutMenuIcon clicked");
                menuContainer.classList.remove("collapsed");
                mainContainer.classList.remove("expanded");
                collapseIcon.style.display = "block";
                putOutMenuIcon.style.display = "none";
                commentNotification.classList.remove("collapsed");

                menuItems.forEach(function (menuItem) {

                    const textElement = menuItem.querySelector(".menu-name");
                    const chevronElement = menuItem.querySelector(".bi-chevron-right");
                    menuItem.classList.remove("collapsed");

                    if (textElement) {
                        textElement.style.display = "block";
                    }

                    if (chevronElement) {
                        chevronElement.style.display = "block";
                    }
                });
            });
        }

        menuItems.forEach(function (menuItem) {
            menuItem.classList.remove("active");
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

///////////////////////////////////////////////

const personalSettings = $(".personal-settings");
const personalSettingsShow = $(".bi-chevron-down")
const personalSettingsHide = $(".bi-chevron-up"
)
personalSettingsHide.hide();
personalSettings.hide();

personalSettingsShow.click(function (){
    personalSettings.show(400);
    personalSettingsShow.hide();
    personalSettingsHide.show();
});

personalSettingsHide.click(function (){
    personalSettings.hide(400);
    personalSettingsShow.show();
    personalSettingsHide.hide();
});

const mailMenu = $(".mail-menu");
const mailMenuIcon = $(".bi-envelope-fill")
mailMenu.hide();

mailMenuIcon.click(function (){
    mailMenu.show();
});
$(document).click(function (event) {
    if (!$(event.target).closest(mailMenu).length && !$(event.target).is(mailMenuIcon)) {
        mailMenu.hide();
    }
});


const notificationMenu = $(".notification-menu");
const notificationMenuIcon = $(".bi-bell-fill");
notificationMenu.hide()

notificationMenuIcon.click(function (){
    notificationMenu.show();
});

$(document).click(function (event) {
    if (!$(event.target).closest(notificationMenu).length && !$(event.target).is(notificationMenuIcon)) {
        notificationMenu.hide();
    }
});



