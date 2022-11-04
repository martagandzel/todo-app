const form = document.querySelector('#form');
const todoTask = document.querySelector('#todoTask');
const todoList = document.querySelector('#todoList');
const clearTodos = document.querySelector('#clearTodos');

const addTask = event => {
    event.preventDefault();
    todoList.innerHTML += `
        <li>${todoTask.value}</li>
    `
    todoTask.value = '';
}

const markAsDone = event => {
    event.target.classList.toggle('done');
}

const deleteDoneTasks = () => {
    const doneTasks = [...document.getElementsByClassName('done')];
    doneTasks.forEach(task => task.remove())
}

form.addEventListener('submit', addTask);
todoList.addEventListener('click', markAsDone);
clearTodos.addEventListener('click', deleteDoneTasks);