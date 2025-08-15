document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `${taskValue} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Additional functionality like marking tasks as completed can be added here.