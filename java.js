const tasksList = document.getElementById('tasks');
const newTaskForm = document.getElementById('new-task-form');

let tasks = [];

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    tasks.push({ title, description, dueDate, completed: false });

    updateTaskList();

    newTaskForm.reset(); // Clear the form after creating a task
});

function updateTaskList() {
    tasksList.innerHTML = '';

    tasks.forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener('change', () => {
            task.completed = !task.completed;
            updateTaskList();
        });

        const taskContent = document.createElement('div');
        taskContent.innerHTML = "<h3>${task.title}</h3><p>${task.description}</p>";

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskContent);

        tasksList.appendChild(taskItem);
    });
}