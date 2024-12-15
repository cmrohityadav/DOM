document.getElementById("addNewItem").addEventListener("click",function(){

let newItem=  document.createElement("li");
newItem.textContent="Water";

  document.getElementById("shoppingList").appendChild(newItem)
})
