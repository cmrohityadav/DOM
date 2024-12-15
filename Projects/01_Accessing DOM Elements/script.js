document.getElementById("changeTextButton").addEventListener('click',function(){
    let hold=document.getElementById("myParagraph");

    console.log(hold);
    console.log(hold.textContent);
    hold.textContent="The paragraph is changed"



})

