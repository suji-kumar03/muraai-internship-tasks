const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

let tasks = [];//reassign by adding each task

renderTasks();

addBtn.addEventListener("click", addTask);//dont use addTask()->because immediately it execute after loading
clearBtn.addEventListener("click", clearTasks);

function addTask() {
    const taskText = taskInput.value.trim();//.value =>get user text value ,.trim=>remove white space(before,after)

    if (taskText === "") {
        alert("Please enter a task!");
        return;//if condition satisfies stops here if block completed
    }

    const task = { //Object initially false
        text: taskText,
        completed: false
    };

    tasks.push(task);

    renderTasks();

    taskInput.value = ""; //after every adding it will become empty
}
//shows the task each time
function renderTasks() { //map=>array of strings
    taskList.innerHTML = tasks.map((task, index) => ` 
        <li class="${task.completed ? 'completed' : ''}">
            <span onclick="toggleTask(${index})">
                ${task.text}
            </span>

            <button class="delete-btn" onclick="deleteTask(${index})">
                Delete
            </button>
        </li>
    `).join("");
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);//if index=1=>strat=1,delcount=1
                           //index 1 is removed

    renderTasks();
}

function clearTasks() {
    tasks = []; //array become empty

    renderTasks();
}