document.getElementById("removeLastTask").addEventListener("click",function(){
  let taskList=document.getElementById("shoppingList");
  taskList.lastElementChild.remove()

})