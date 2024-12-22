



document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input")
    const addTaskBtn = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")
    let tasksArray = [];
    try {
        const storedTasks = localStorage.getItem("tasksLocalStore");
        tasksArray = storedTasks ? JSON.parse(storedTasks) : [];
    } catch (e) {
        console.error("Error parsing localStorage data:", e);
        tasksArray = []; // Reset to an empty array if parsing fails
    }
    tasksArray.forEach(eachTaskItem => renderTask(eachTaskItem));

    addTaskBtn.addEventListener("click", () => {
        let taskText = todoInput.value.trim();
        if (taskText === "") return;
        const objTask = {
            id: Date.now(),
            text: taskText,
            isCompleted: false,

        }

        tasksArray.push(objTask);
        saveDataToLocal(tasksArray)

        todoInput.value = ""
        console.log(tasksArray)
        renderTask(objTask)

    })

 
    

    function renderTask(task) {
        const li=document.createElement("li");

        if(task.isCompleted){
            li.classList.add("completed")
        }

        li.addEventListener("click",(e)=>{
            if(e.target.tagName=="BUTTON") return;
            task.isCompleted=!task.isCompleted;
            li.classList.toggle('completed')
            saveDataToLocal();

        })

        li.setAttribute("data-id",task.id);
        li.innerHTML=`<span>${task.text} </span>
        <button>Delete</button>`;

        li.querySelector("button").addEventListener('click',function(e){
         e.stopPropagation();// bubling: prevent toggle from firing
         tasksArray=tasksArray.filter(t=>t.id!==task.id);
         li.remove();

           saveDataToLocal(); 
        })
        todoList.appendChild(li);

        

    }

    const saveDataToLocal = () => {
        localStorage.setItem("tasksLocalStore", JSON.stringify(tasksArray));
    }




})