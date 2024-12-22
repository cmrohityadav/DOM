
document.getElementById("teaList").addEventListener("click",function(eventPassKarRhaHu){
 
  if(eventPassKarRhaHu.target && eventPassKarRhaHu.target.matches(".teaItem"))
{
   alert("You selected  "+ eventPassKarRhaHu.target.textContent )
}
})

