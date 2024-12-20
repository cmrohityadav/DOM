



document.addEventListener("DOMContentLoaded",function(){
    const todoInput=document.getElementById("todo-input")
    const addTaskBtn=document.getElementById("add-task-btn")
    const todoList=document.getElementById("todo-list")
    let tasksArray = [];
    try {
        const storedTasks = localStorage.getItem("tasksLocalStore");
        tasksArray = storedTasks ? JSON.parse(storedTasks) : [];
    } catch (e) {
        console.error("Error parsing localStorage data:", e);
        tasksArray = []; // Reset to an empty array if parsing fails
    }
    tasksArray.forEach(eachTaskItem=>renderTask(eachTaskItem));

    addTaskBtn.addEventListener("click",()=>{
        let taskText=todoInput.value.trim();
        if(taskText==="") return;
        const objTask={
            id:Date.now(),
            text:taskText,
            isCompleted:false,
    
        }
    
        tasksArray.push(objTask);
        saveDataToLocal(tasksArray)
        
        todoInput.value=""
        console.log(tasksArray)

    
    }) 
    

    const saveDataToLocal=(tasksArray)=>{
        localStorage.setItem("tasksLocalStore",JSON.stringify(tasksArray));
    }

    function renderTask(task) {
        console.log(task)
    }
    



})