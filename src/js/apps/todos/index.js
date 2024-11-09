// todo.js

// Observer pattern: Subject class
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// State pattern: Task class
class Task {
    constructor(description) {
        this.description = description;
        this.isCompleted = false;
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}

// Observer pattern: TaskList class
class TaskList extends Subject {
    constructor() {
        super();
        this.tasks = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
        this.notify(this.tasks);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.notify(this.tasks);
    }

    toggleTaskCompletion(index) {
        this.tasks[index].toggleCompletion();
        this.notify(this.tasks);
    }
}

// UI class to handle the DOM manipulations
class UI {
    constructor(taskList) {
        this.taskList = taskList;
        this.taskList.subscribe(this);
        this.todoListElement = document.getElementById('todo-list');
    }

    update(tasks) {
        this.renderTasks(tasks);
    }

    renderTasks(tasks) {
        this.todoListElement.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = `todo-item ${task.isCompleted ? 'completed' : ''}`;
            taskItem.innerHTML = `
                <span>${task.description}</span>
                <div>
                    <button onclick="ui.toggleCompletion(${index})">${task.isCompleted ? 'Undo' : 'Complete'}</button>
                    <button onclick="ui.deleteTask(${index})">Delete</button>
                </div>
            `;
            this.todoListElement.appendChild(taskItem);
        });
    }

    toggleCompletion(index) {
        this.taskList.toggleTaskCompletion(index);
    }

    deleteTask(index) {
        this.taskList.removeTask(index);
    }
}

// Controller to handle user input
document.querySelector('.todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    if (todoInput.value.trim() !== '') {
        taskList.addTask(todoInput.value);
        todoInput.value = '';
    }
});

// Instantiate the TaskList and UI components
const taskList = new TaskList();
const ui = new UI(taskList);
