// Selectors
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listeners
taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);

// Functions
function addTask(event) {
    event.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
    
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="task-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </span>
    `;
    
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
}

function deleteTask(event) {
    if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.closest('.task-item');
        taskItem.remove();
    }
}
