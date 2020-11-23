const addBtn = document.getElementById('todo-btn');
var todoText = document.getElementById('todo-text');
var todoList = document.getElementById('todo-list');
var idTask = 0;
var taskDate = new Date();

addBtn.addEventListener('click', function () {
    if (todoText.value == "") {
        alert('Plz insert data !');
        todoText.style.border = `1px solid red`;
    }
    else {
        // add main task 
        let task = document.createElement('div');
        task.className = "task";
        task.setAttribute('id', `${idTask++}`);

        // add task text
        let taskText = document.createElement('div');
        taskText.className = "taskText";
        taskText.setAttribute('id', 'taskText');
        taskText.innerHTML = `${todoText.value}`;
        task.appendChild(taskText);

        // add checkbox task  

        let checkTask = document.createElement('input');
        checkTask.setAttribute('type', "checkbox");
        checkTask.classList = 'checkTask';
        task.appendChild(checkTask);

        checkTask.addEventListener('click', function () {
            if (this.checked == true) {
                taskText.style.opacity = 0.3;
                taskText.style.textDecoration = "line-through";
            }
            else {
                taskText.style.opacity = 1;
                taskText.style.textDecoration = "none";

            }
        });

        // add remove task button 

        let removeTask = document.createElement('div');
        removeTask.setAttribute('id', 'removeTask');
        removeTask.className = "removeTask";
        task.appendChild(removeTask);

        removeTask.addEventListener('click', function () {
            todoList.removeChild(task);
        });



        task.addEventListener('contextmenu', function () {
            todoList.removeChild(this);
            console.log(this);
        });

        todoList.appendChild(task);


        todoText.value = "";
        todoText.style.border = "2px solid #000";
    }



});

