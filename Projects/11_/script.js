const todoInput=document.getElementById("todo-input")


const addTaskBtn=document.getElementById("add-task-btn")
const todoList=document.getElementById("todo-list")
const tasksArray=[];
addTaskBtn.addEventListener("click",()=>{
    let taskText=todoInput.value.trim();
   
    const objTask={
        id:Date.now(),
        text:taskText,
        isCompleted:false

    }

    tasksArray.push(objTask);
    console.log(tasksArray)

})