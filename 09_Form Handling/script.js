document.getElementById("feedbackForm").addEventListener("submit",function(event){
  
  event.preventDefault();
  let feedback=document.getElementById("feedbackInput")

  console.log(feedback)
  console.log(feedback.value)

  let changeDisplay=document.getElementById("feedbackDisplay")
  changeDisplay.textContent=`Feedback from Form:  ${feedback.value}`
})