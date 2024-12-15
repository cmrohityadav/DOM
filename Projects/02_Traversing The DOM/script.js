document.getElementById("highLightFirstCity").addEventListener("click",function(){
  let citiesList=  document.getElementById("citiesList");
  console.log(citiesList);
  console.log(citiesList.firstElementChild)

  console.log(citiesList.firstElementChild.classList)

  citiesList.firstElementChild.classList.add("highlight")
  
})