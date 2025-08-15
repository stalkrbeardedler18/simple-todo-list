document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    // Get the task input field and trim its value
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    // If the input is empty, exit the function
    if (taskValue === '') return;

    // Create a new task item and append it to the task list
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `${taskValue} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(taskItem);
    // Clear the input field
    taskInput.value = '';
}

function deleteTask(button) {
    // Remove the task item from the list when the delete button is clicked
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Additional functionality like marking tasks as completed can be added here.